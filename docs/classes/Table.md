[dataforseo-client](../README.md) / [Exports](../modules.md) / Table

# Class: Table

## Implements

- [`ITable`](../interfaces/ITable.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](Table.md#constructor)

### Properties

- [table\_content](Table.md#table_content)
- [table\_element](Table.md#table_element)
- [table\_header](Table.md#table_header)

### Methods

- [init](Table.md#init)
- [toJSON](Table.md#tojson)
- [fromJS](Table.md#fromjs)

## Constructors

### constructor

• **new Table**(`data?`): [`Table`](Table.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITable`](../interfaces/ITable.md) |

#### Returns

[`Table`](Table.md)

#### Defined in

[main.ts:21238](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21238)

## Properties

### table\_content

• `Optional` **table\_content**: `string`[][]

the content of the table
one line of the table in this element of the array

#### Implementation of

[ITable](../interfaces/ITable.md).[table_content](../interfaces/ITable.md#table_content)

#### Defined in

[main.ts:21234](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21234)

___

### table\_element

• `Optional` **table\_element**: `string`

name assigned to the table element
possible values:
table_element

#### Implementation of

[ITable](../interfaces/ITable.md).[table_element](../interfaces/ITable.md#table_element)

#### Defined in

[main.ts:21229](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21229)

___

### table\_header

• `Optional` **table\_header**: `string`[]

column names

#### Implementation of

[ITable](../interfaces/ITable.md).[table_header](../interfaces/ITable.md#table_header)

#### Defined in

[main.ts:21231](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21231)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:21247](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21247)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:21274](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21274)

___

### fromJS

▸ **fromJS**(`data`): [`Table`](Table.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Table`](Table.md)

#### Defined in

[main.ts:21267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21267)
