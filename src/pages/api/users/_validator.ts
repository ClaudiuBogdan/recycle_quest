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
class IsUsernameAlreadyExistConstraint implements ValidatorConstraintInterface {
  async validate(username: string) {
    const userExists = await userService.getUserByNickname(username);
    return !userExists; // Return true if the username does NOT exist
  }

  defaultMessage(args: ValidationArguments) {
    return `Username ${args.value} is already taken. Please choose another one.`;
  }
}

export function IsUsernameAlreadyExist(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUsernameAlreadyExistConstraint,
    });
  };
}
