# Class: DoublyLinkedList<T\>

A doubly linked list.

## Type parameters

| Name | Description                  |
| :--- | :--------------------------- |
| `T`  | The type of an item's value. |

## Table of contents

### Constructors

- [constructor](API.md#constructor)

### Properties

- [length](API.md#length)

### Methods

- [append](API.md#append)
- [get](API.md#get)
- [getHead](API.md#gethead)
- [getTail](API.md#gettail)
- [popHead](API.md#pophead)
- [popTail](API.md#poptail)
- [prepend](API.md#prepend)
- [pushAt](API.md#pushat)
- [remove](API.md#remove)
- [toArray](API.md#toarray)

## Constructors

### constructor

• **new DoublyLinkedList**<`T`\>(`values?`, `...rest`)

Appends the specified items to the list.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type         | Default value | Description                      |
| :-------- | :----------- | :------------ | :------------------------------- |
| `values`  | `T` \| `T`[] | `[]`          | The starting items of the list.  |
| `...rest` | `T`[]        | `undefined`   | The starting items by spreading. |

#### Defined in

[index.ts:39](https://github.com/Vissie2/doubly-linky/blob/17d672b/src/index.ts#L39)

## Properties

### length

• **length**: `number` = `0`

#### Defined in

[index.ts:31](https://github.com/Vissie2/doubly-linky/blob/17d672b/src/index.ts#L31)

## Methods

### append

▸ **append**(`value`): `void`

Appends (pushes) a new item to the list.

#### Parameters

| Name    | Type | Description          |
| :------ | :--- | :------------------- |
| `value` | `T`  | The value of a node. |

#### Returns

`void`

void

#### Defined in

[index.ts:147](https://github.com/Vissie2/doubly-linky/blob/17d672b/src/index.ts#L147)

---

### get

▸ **get**(`index`): `T`

Gets the value of the item at the specified `index`.

**`Throws`**

IndexError
This exception is thrown if `index` doesn't exist in the list.

#### Parameters

| Name    | Type     | Description              |
| :------ | :------- | :----------------------- |
| `index` | `number` | The index from the item. |

#### Returns

`T`

The value of the item.

#### Defined in

[index.ts:286](https://github.com/Vissie2/doubly-linky/blob/17d672b/src/index.ts#L286)

---

### getHead

▸ **getHead**(): `undefined` \| `T`

Retrieves the value of the first item in the list if it exists.

#### Returns

`undefined` \| `T`

The value of the item or `undefined`.

#### Defined in

[index.ts:296](https://github.com/Vissie2/doubly-linky/blob/17d672b/src/index.ts#L296)

---

### getTail

▸ **getTail**(): `undefined` \| `T`

Retrieves the value of the last item in the list if it exists.

#### Returns

`undefined` \| `T`

The value of the item or `undefined`.

#### Defined in

[index.ts:305](https://github.com/Vissie2/doubly-linky/blob/17d672b/src/index.ts#L305)

---

### popHead

▸ **popHead**(): `undefined` \| `T`

Removes the first item from the list if it exists.

#### Returns

`undefined` \| `T`

The value of the item or `undefined`.

#### Defined in

[index.ts:209](https://github.com/Vissie2/doubly-linky/blob/17d672b/src/index.ts#L209)

---

### popTail

▸ **popTail**(): `undefined` \| `T`

Removes the last item from the list if it exists.

#### Returns

`undefined` \| `T`

The value of the item or `undefined`.

#### Defined in

[index.ts:226](https://github.com/Vissie2/doubly-linky/blob/17d672b/src/index.ts#L226)

---

### prepend

▸ **prepend**(`value`): `void`

Prepends (unshifts) a new item to the list.

#### Parameters

| Name    | Type | Description          |
| :------ | :--- | :------------------- |
| `value` | `T`  | The value of a node. |

#### Returns

`void`

void

#### Defined in

[index.ts:119](https://github.com/Vissie2/doubly-linky/blob/17d672b/src/index.ts#L119)

---

### pushAt

▸ **pushAt**(`value`, `index`): `void`

Inserts an item at the place of `index`. The item will
end up below the item that was currently there.

**`Throws`**

IndexError
This exception is thrown if `index` doesn't exist in the list.

#### Parameters

| Name    | Type     | Description                           |
| :------ | :------- | :------------------------------------ |
| `value` | `T`      | The value of the item.                |
| `index` | `number` | The index where the node will end up. |

#### Returns

`void`

void

#### Defined in

[index.ts:180](https://github.com/Vissie2/doubly-linky/blob/17d672b/src/index.ts#L180)

---

### remove

▸ **remove**(`index`): `T`

Removes the item at the place of `index`.

**`Throws`**

IndexError
This exception is thrown if `index` doesn't exist in the list.

#### Parameters

| Name    | Type     | Description            |
| :------ | :------- | :--------------------- |
| `index` | `number` | The index of the node. |

#### Returns

`T`

void

#### Defined in

[index.ts:247](https://github.com/Vissie2/doubly-linky/blob/17d672b/src/index.ts#L247)

---

### toArray

▸ **toArray**(): `T`[]

Retrieves an array of all the values in the list.

#### Returns

`T`[]

An array of all the values in the list.

#### Defined in

[index.ts:314](https://github.com/Vissie2/doubly-linky/blob/17d672b/src/index.ts#L314)
