import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from "class-validator";
import { DbUserAdapter } from "@/adapters/firebase";
import UserService from "@/services/UserService";

const userAdapter = new DbUserAdapter();
const userService = new UserService(userAdapter);

@ValidatorConstraint({ async: true })
class IsNicknameAlreadyExistConstraint implements ValidatorConstraintInterface {
  async validate(nickname: string) {
    if (nickname === "anonim") {
      return true;
    }
    const userExists = await userService.getUserByNickname(nickname);
    return !userExists; // Return true if the nickname does NOT exist
  }

  defaultMessage(args: ValidationArguments) {
    return `Nickname ${args.value} is already taken. Please choose another one.`;
  }
}

export function IsNicknameAlreadyExist(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsNicknameAlreadyExistConstraint,
    });
  };
}

@ValidatorConstraint({ async: false })
class IsNotOffensiveConstraint implements ValidatorConstraintInterface {
  private offensiveWords = [
    "pula",
    "cur",
    "mata",
    "pizda",
    "fut",
    "muie",
    "cacat",
    "prost",
    "tarfa",
    "curva",
  ];

  validate(nickname: string) {
    // Convert to lowercase
    const lowerCaseNickname = nickname.toLowerCase();

    // Remove special characters and extra spaces
    const sanitizedNickname = lowerCaseNickname.replace(/[^a-zA-Z0-9]/g, "");

    // Check against each offensive word
    return !this.offensiveWords.some((offensiveWord) => {
      // Create a regular expression for each offensive word
      const regex = new RegExp(offensiveWord.split("").join("\\s*"), "i"); // The regex will match the word even if there are spaces between letters
      return regex.test(sanitizedNickname);
    });
  }

  defaultMessage(args: ValidationArguments) {
    return `Nickname ${args.value} is invalid. Please choose another one.`;
  }
}

export function IsNotOffensive(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsNotOffensiveConstraint,
    });
  };
}
