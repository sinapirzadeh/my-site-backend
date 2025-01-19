import autoBind from "auto-bind";

export default class baseController {
  constructor() {
    autoBind(this);
  }
}
