import { SerializableError } from './serializable-error';

export class ForbiddenError extends SerializableError {
  statusCode = 403;
  serializeErrors() {
    return [{ message: 'Action is forbidden!' }];
  }

  constructor() {
    super('Action is forbidden!');
  }
}
