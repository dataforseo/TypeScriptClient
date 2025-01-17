[**Documentation**](../README.md)

***

[Documentation](../README.md) / Table

# Class: Table

Defined in: main.ts:23695

## Implements

- [`ITable`](../interfaces/ITable.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new Table()

> **new Table**(`data`?): [`Table`](Table.md)

Defined in: main.ts:23708

#### Parameters

##### data?

[`ITable`](../interfaces/ITable.md)

#### Returns

[`Table`](Table.md)

## Properties

### table\_content?

> `optional` **table\_content**: `string`[][]

Defined in: main.ts:23704

the content of the table
one line of the table in this element of the array

#### Implementation of

[`ITable`](../interfaces/ITable.md).[`table_content`](../interfaces/ITable.md#table_content)

***

### table\_element?

> `optional` **table\_element**: `string`

Defined in: main.ts:23699

name assigned to the table element
possible values:
table_element

#### Implementation of

[`ITable`](../interfaces/ITable.md).[`table_element`](../interfaces/ITable.md#table_element)

***

### table\_header?

> `optional` **table\_header**: `string`[]

Defined in: main.ts:23701

column names

#### Implementation of

[`ITable`](../interfaces/ITable.md).[`table_header`](../interfaces/ITable.md#table_header)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:23717

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:23744

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`Table`](Table.md)

Defined in: main.ts:23737

#### Parameters

##### data

`any`

#### Returns

[`Table`](Table.md)
