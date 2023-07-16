import { IndexError } from '~/errors';
import { DoublyLinkedList } from '~/index';

describe('Reading', () => {
  it('constructor spread', () => {
    const list = new DoublyLinkedList(1, 2, 3);

    const [one, two, three] = list.toArray();

    expect(one).toBe(1);
    expect(two).toBe(2);
    expect(three).toBe(3);
  });

  it('constructor array', () => {
    const list = new DoublyLinkedList([1, 2, 3]);

    const [one, two, three] = list.toArray();

    expect(one).toBe(1);
    expect(two).toBe(2);
    expect(three).toBe(3);
  });

  it('constructor array and spread', () => {
    const list = new DoublyLinkedList([1, 2, 3], 4, 5, 6);

    const [one, two, three, four, five, six] = list.toArray();

    expect(one).toBe(1);
    expect(two).toBe(2);
    expect(three).toBe(3);
    expect(four).toBe(4);
    expect(five).toBe(5);
    expect(six).toBe(6);
  });

  it('get', () => {
    const list = new DoublyLinkedList('Noah', 'John', 'Tom');

    const noah = list.get(0);
    const john = list.get(1);
    const tom = list.get(2);

    expect(noah).toBe('Noah');
    expect(john).toBe('John');
    expect(tom).toBe('Tom');

    expect(() => list.get(69)).toThrow(IndexError);
  });

  it('getHead', () => {
    const list = new DoublyLinkedList(1, 2, 3);
    const head = list.getHead();

    expect(head).toBe(1);
  });

  it('getTail', () => {
    const list = new DoublyLinkedList(1, 2, 3);
    const tail = list.getTail();

    expect(tail).toBe(3);
  });

  it('findFirst', () => {
    const list = new DoublyLinkedList(1, 2, 3);

    const one = list.findFirst((value) => {
      return value === 1;
    });

    const two = list.findFirst((value) => {
      return value === 2;
    });

    const three = list.findFirst((value) => {
      return value === 3;
    });

    expect(one).toBe(1);
    expect(two).toBe(2);
    expect(three).toBe(3);
  });

  it('toArray', () => {
    const list = new DoublyLinkedList(1, 2, 3);
    const array = list.toArray();

    expect(array).toEqual([1, 2, 3]);
  });
});
