import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
  statusCode = 400;

  /*the private in the constructor parameters is equivalent to defining
    an errors:ValidationError[] field and
    assigining it with this.errors=errors in the constructor
    */
  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');
    //this line is only because we're extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => {
      return { message: error.msg, field: error.param };
    });
  }
}
