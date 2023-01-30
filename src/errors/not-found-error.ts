import { SerializableError } from './serializable-error';

export class NotFoundError extends SerializableError {
  statusCode: number = 404;
  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: 'Not Found' }];
  }
  constructor() {
    super('path is not found!');
  }
}
