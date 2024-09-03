class ApiError extends Error {
  status;
  errors;

  constructor(status: any, message: string, errors = []) {
    super(message);
    this.message = message;
    this.status = status;
    this.errors = errors;
  }
}

export { ApiError };
