import { IndexError } from '~/errors';
import { DoublyLinkedList } from '~/index';

describe('Removing', () => {
  it('remove', () => {
    const list = new DoublyLinkedList(1, 2, 3);
    const item = list.remove(1);

    expect(item).toBe(2);
    expect(() => list.pushAt(420, 69)).toThrow(IndexError);
  });

  it('popHead', () => {
    const list = new DoublyLinkedList(1, 2, 3);
    const head = list.popHead();

    expect(head).toBe(1);
  });

  it('popTail', () => {
    const list = new DoublyLinkedList(1, 2, 3);
    const tail = list.popTail();

    expect(tail).toBe(3);
  });
});
