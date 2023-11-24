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
