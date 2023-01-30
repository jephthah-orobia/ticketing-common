//import { ValidationError } from 'express-validator';
import { ValidationError } from 'express-validator';
import { SerializableError } from './serializable-error';

export class RequestValidationError extends SerializableError {
  statusCode: number = 400;
  serializeErrors() {
    return this.errors.map((error) => ({
      message: error.msg,
      field: error.param,
    }));
  }
  constructor(public errors: ValidationError[]) {
    super('A request validation error occured!');
  }
}
