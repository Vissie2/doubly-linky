# doubly-linky

A small TypeScript implementation of a [doubly linked list](https://en.wikipedia.org/wiki/Doubly_linked_list).

## Installation

This package is ESM only, targeting ES6.

```bash
npm install doubly-linky
```

## Usage

```ts
import { DoublyLinkedList } from 'doubly-linky';

const list = new DoublyLinkedList(1, 2, 3);

// Item type can also be specified.
const list = new DoublyLinkedList<number>();

// Initializing with an array.
const list = new DoublyLinkedList(array);
```

## API

As documented in [API.md](https://github.com/Vissie2/doubly-linky/blob/master/API.md).

## License

[MIT](LICENSE)
