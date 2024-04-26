**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / Table

# Class: Table

## Implements

- [`ITable`](../interfaces/ITable.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Table(data)

> **new Table**(`data`?): [`Table`](Table.md)

#### Parameters

• **data?**: [`ITable`](../interfaces/ITable.md)

#### Returns

[`Table`](Table.md)

#### Source

main.ts:21885

## Properties

### table\_content?

> **`optional`** **table\_content**: `string`[][]

the content of the table
one line of the table in this element of the array

#### Implementation of

[`ITable`](../interfaces/ITable.md).[`table_content`](../interfaces/ITable.md#table_content)

#### Source

main.ts:21881

***

### table\_element?

> **`optional`** **table\_element**: `string`

name assigned to the table element
possible values:
table_element

#### Implementation of

[`ITable`](../interfaces/ITable.md).[`table_element`](../interfaces/ITable.md#table_element)

#### Source

main.ts:21876

***

### table\_header?

> **`optional`** **table\_header**: `string`[]

column names

#### Implementation of

[`ITable`](../interfaces/ITable.md).[`table_header`](../interfaces/ITable.md#table_header)

#### Source

main.ts:21878

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:21894

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:21921

***

### fromJS()

> **`static`** **fromJS**(`data`): [`Table`](Table.md)

#### Parameters

• **data**: `any`

#### Returns

[`Table`](Table.md)

#### Source

main.ts:21914
