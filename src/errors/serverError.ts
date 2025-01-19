export default class ServerError {
  public status: number;
  public message: string;

  constructor(status: number, message: string) {
    this.message = message;
    this.status = status;
  }
}
