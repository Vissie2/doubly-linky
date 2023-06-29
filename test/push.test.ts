import { IndexError } from '~/errors';
import { DoublyLinkedList } from '~/index';

describe('Pushing', () => {
  it('prepend', () => {
    const list = new DoublyLinkedList(1, 2, 3);
    list.prepend(420);
    const head = list.getHead();

    expect(head).toBe(420);
  });

  it('append', () => {
    const list = new DoublyLinkedList(1, 2, 3);
    list.append(420);
    const tail = list.getTail();

    expect(tail).toBe(420);
  });

  it('pushAt', () => {
    const list = new DoublyLinkedList(1, 2, 3);
    list.pushAt(420, 1);
    const item = list.get(1);

    expect(item).toBe(420);
    expect(() => list.pushAt(420, 69)).toThrow(IndexError);
  });
});
