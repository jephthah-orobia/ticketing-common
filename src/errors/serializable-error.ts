export abstract class SerializableError extends Error {
  abstract statusCode: number;
  abstract serializeErrors(): { message: string; field?: string }[];

  constructor(message: string) {
    super(message);
  }
}
