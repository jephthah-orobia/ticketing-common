import { SerializableError } from './serializable-error';

export class DatabaseValidationError extends SerializableError {
  statusCode: number = 500;
  reason = 'Error connecting to database';

  constructor() {
    super('An error occured in data management');
  }
  serializeErrors() {
    return [{ message: this.reason }];
  }
}
