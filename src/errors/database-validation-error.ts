import { SerializableError } from './serializable-error';

export class DatabaseValidationError extends SerializableError {
  statusCode: number = 400;
  reason = 'Error connecting to database';

  constructor() {
    super('An error occured in data management');
  }
  serializeErrors() {
    return [{ message: this.reason }];
  }
}
