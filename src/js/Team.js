export default class Team {
  constructor(args) {
    this.length = args.length;
    for (let i = 0; i < this.length; i += 1) {
      this[i] = args[i];
    }
  }

  * [Symbol.iterator]() {
    let index = 0;
    while (index < this.length) yield index += 1;
  }
}
