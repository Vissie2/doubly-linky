import { IndexError, LogicError } from '~/errors';

/**
 * The index of an item in the list.
 */
type Index = number;

/**
 * A node represents an item in the list. It contains a value
 * and optionally pointers to the previous and next node.
 *
 * @typeParam T - The type of value of the node.
 */
class Node<T> {
  public value: T;
  public prev: Node<T> | undefined;
  public next: Node<T> | undefined;

  constructor(value: T) {
    this.value = value;
  }
}

/**
 * A doubly linked list.
 * @typeParam T - The type of an item's value.
 */
export class DoublyLinkedList<T> {
  private head: Node<T> | undefined;
  private tail: Node<T> | undefined;
  public length = 0;

  /**
   * Appends the specified items to the list.
   *
   * @param values - The starting items of the list.
   * @param rest - The starting items by spreading.
   */
  constructor(values: T | T[] = [], ...rest: T[]) {
    const valuesArr = Array.isArray(values) ? values : [values];
    const mergedValues = valuesArr.concat(rest);

    for (const value of mergedValues) {
      this.append(value);
    }
  }

  /**
   * Gets the node at the specified `index`.
   *
   * @param index - The index from the node.
   * @returns The node.
   *
   * @throws {@link IndexError}
   * This exception is thrown if `index` doesn't exist in the list.
   */
  private getNode(index: Index) {
    if (this.length <= index) {
      // Invalid index is given.
      throw new IndexError();
    }

    const node = this.getEffeciently(index);

    if (!node) {
      // This shouldn't happen but if it does there
      // should be something wrong with this package.
      throw new LogicError();
    }

    return node;
  }

  /**
   * Gets the node at the specified `index` effeciently
   * by choosing to start from the head or the tail.
   *
   * @param index - The index from the node.
   * @returns The node or `undefined`.
   */
  private getEffeciently(index: Index) {
    const pivot = Math.floor(this.length / 2);
    const isCloserToTail = index > pivot;

    let node: Node<T> | undefined = this.head;
    let direction: 'next' | 'prev' = 'next';

    if (isCloserToTail) {
      node = this.tail;
      index = this.length - index - 1;
      direction = 'prev';
    }

    for (let i = 0; i < index; i++) {
      node = node?.[direction];
    }

    return node;
  }

  /**
   * Adds a node to the empty list.
   *
   * @param node The node that gets added.
   */
  private initiateWith(node: Node<T>) {
    // Add it as head and tail.
    this.head = this.tail = node;
    // Increment length of list.
    this.length++;
  }

  /**
   * Prepends (unshifts) a new item to the list.
   *
   * @param value - The value of a node.
   * @returns void
   */
  public prepend(value: T) {
    const newNode = new Node(value);

    if (this.length === 0) {
      return this.initiateWith(newNode);
    }

    if (!this.head) {
      // There is something wrong with the creation of nodes.
      throw new LogicError();
    }

    // Set the new node.next to the current head.
    newNode.next = this.head;
    // Set the current head.prev to the new node.
    this.head.prev = newNode;
    // Set the head to the new node.
    this.head = newNode;
    // Increment length of list.
    this.length++;
  }

  /**
   * Appends (pushes) a new item to the list.
   *
   * @param value - The value of a node.
   * @returns void
   */
  public append(value: T) {
    const newNode = new Node(value);

    if (this.length === 0) {
      return this.initiateWith(newNode);
    }

    if (!this.tail) {
      // There is something wrong with the creation of nodes.
      throw new LogicError();
    }

    // Set the new node.prev to the current head.
    newNode.prev = this.tail;
    // Set the current tail.next to the new node.
    this.tail.next = newNode;
    // Set the tail to the new node.
    this.tail = newNode;
    // Increment length of list.
    this.length++;
  }

  /**
   * Inserts an item at the place of `index`. The item will
   * end up below the item that was currently there.
   *
   * @param value - The value of the item.
   * @param index - The index where the node will end up.
   * @returns void
   *
   * @throws {@link IndexError}
   * This exception is thrown if `index` doesn't exist in the list.
   */
  public pushAt(value: T, index: Index) {
    if (index === 0) {
      // We are prepending so we would rather
      // use the appropriate method for it.
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const currentNode = this.getNode(index);

    if (currentNode.prev) {
      // If the current node has a previous node, link the new node to it.
      currentNode.prev.next = newNode;
      currentNode.prev = newNode;
    }

    // Link the new node to the current node.
    newNode.prev = currentNode.prev;
    newNode.next = currentNode;

    // Increment length of list.
    this.length++;
  }

  /**
   * Removes the first item from the list if it exists.
   *
   * @returns The value of the item or `undefined`.
   */
  public popHead() {
    const head = this.head;
    this.head = head?.next;

    if (head?.next?.prev) {
      head.next.prev = undefined;
    }

    this.length--;
    return head?.value;
  }

  /**
   * Removes the last item from the list if it exists.
   *
   * @returns The value of the item or `undefined`.
   */
  public popTail() {
    const tail = this.tail;
    this.tail = tail?.prev;

    if (tail?.prev?.next) {
      tail.prev.next = undefined;
    }

    this.length--;
    return tail?.value;
  }

  /**
   * Removes the item at the place of `index`.
   *
   * @param index - The index of the node.
   * @returns void
   *
   * @throws {@link IndexError}
   * This exception is thrown if `index` doesn't exist in the list.
   */
  public remove(index: Index) {
    const node = this.getNode(index);

    // Unlink the `node.next` from the list.
    if (node.next) {
      node.next = node.prev;
    }

    // Unlink the `node.prev` from the list.
    if (node.prev) {
      node.prev = node.next;
    }

    // Keep the head up-to-date.
    if (node === this.head) {
      this.head = node.next;
    }

    // Keep the tail up-to-date.
    if (node === this.tail) {
      this.tail = node.prev;
    }

    // Break loose.
    node.next = node.prev = undefined;
    this.length--;

    return node.value;
  }

  /**
   * Gets the value of the item at the specified `index`.
   *
   * @param index - The index from the item.
   * @returns The value of the item.
   *
   * @throws {@link IndexError}
   * This exception is thrown if `index` doesn't exist in the list.
   */
  public get(index: Index) {
    const node = this.getNode(index);
    return node.value;
  }

  /**
   * Retrieves the value of the first item in the list if it exists.
   *
   * @returns The value of the item or `undefined`.
   */
  public getHead() {
    return this.head?.value;
  }

  /**
   * Retrieves the value of the last item in the list if it exists.
   *
   * @returns The value of the item or `undefined`.
   */
  public getTail() {
    return this.tail?.value;
  }

  /**
   * Retrieves an array of all the values in the list.
   *
   * @returns An array of all the values in the list.
   */
  public toArray() {
    let node = this.head;
    const values: T[] = [];

    // Get all the values from the nodes.
    while (node) {
      values.push(node.value);
      node = node.next;
    }

    return values;
  }
}
