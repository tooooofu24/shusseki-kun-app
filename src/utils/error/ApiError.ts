import { ErrorResponse } from "openapi/api-client/src";

export class ApiError extends Error {
  private content: ErrorResponse;
  constructor(e: string, error: ErrorResponse) {
    super(e);
    this.name = new.target.name;
    this.content = error;
  }
}
