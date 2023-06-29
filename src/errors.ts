export class IndexError extends Error {
  constructor() {
    super('List index out of range.');
    this.name = 'IndexError';
  }
}

export class LogicError extends Error {
  constructor() {
    super('A logical error has been made.');
    this.name = 'LogicError';
  }
}
