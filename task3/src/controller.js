export class Controller {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  exponentiation(power) {
    this.value **= power;
  }
}
