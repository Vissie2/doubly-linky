import { DoublyLinkedList } from '~/index';

interface User {
  name: string;
  age: number;
}

const names = ['Tom', 'Will', 'Noah'];
const ages = [42, 36, 76, 52];

function createUser() {
  const name = names[Math.floor(Math.random() * names.length)];
  const age = ages[Math.floor(Math.random() * ages.length)];

  const user: User = {
    name: name ?? 'Lisa',
    age: age ?? 69,
  };

  return user;
}

describe('Complex scenario', () => {
  it('objects', () => {
    const amount = 52892;
    const users = [...new Array(amount)].map(createUser);
    const list = new DoublyLinkedList(users);
    const headUser = createUser();
    const tailUser = createUser();

    list.append(createUser());
    list.prepend(createUser());
    list.pushAt(createUser(), 4);

    list.remove(4);
    list.popHead();
    list.popTail();

    list.get(list.length - 1);

    list.prepend(headUser);
    list.append(tailUser);

    expect(list.getHead()).toBe(headUser);
    expect(list.getTail()).toBe(tailUser);
    expect(list.length).toBe(amount + 2);
  });
});
