[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / Table

# Class: Table

## Implements

- [`ITable`](../interfaces/ITable.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Table()

> **new Table**(`data`?): [`Table`](Table.md)

#### Parameters

• **data?**: [`ITable`](../interfaces/ITable.md)

#### Returns

[`Table`](Table.md)

#### Defined in

main.ts:22810

## Properties

### table\_content?

> `optional` **table\_content**: `string`[][]

the content of the table
one line of the table in this element of the array

#### Implementation of

[`ITable`](../interfaces/ITable.md).[`table_content`](../interfaces/ITable.md#table_content)

#### Defined in

main.ts:22806

***

### table\_element?

> `optional` **table\_element**: `string`

name assigned to the table element
possible values:
table_element

#### Implementation of

[`ITable`](../interfaces/ITable.md).[`table_element`](../interfaces/ITable.md#table_element)

#### Defined in

main.ts:22801

***

### table\_header?

> `optional` **table\_header**: `string`[]

column names

#### Implementation of

[`ITable`](../interfaces/ITable.md).[`table_header`](../interfaces/ITable.md#table_header)

#### Defined in

main.ts:22803

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:22819

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:22846

***

### fromJS()

> `static` **fromJS**(`data`): [`Table`](Table.md)

#### Parameters

• **data**: `any`

#### Returns

[`Table`](Table.md)

#### Defined in

main.ts:22839
