import { SerializableError } from './serializable-error';

export class BadRequestError extends SerializableError {
  statusCode: number = 400;
  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: this.reason }];
  }

  constructor(public reason: string) {
    super(reason);
  }
}
