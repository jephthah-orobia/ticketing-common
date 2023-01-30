import { SerializableError } from './serializable-error';

export class NotAuthorizedError extends SerializableError {
  statusCode = 401;
  serializeErrors() {
    return [{ message: 'Not authorized!' }];
  }

  constructor() {
    super('Not authorized!');
  }
}
