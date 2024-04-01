[Documentation](../README.md) / [Exports](../modules.md) / QueriesListDataItemInfo

# Class: QueriesListDataItemInfo

## Implements

- [`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](QueriesListDataItemInfo.md#constructor)

### Properties

- [query](QueriesListDataItemInfo.md#query)
- [value](QueriesListDataItemInfo.md#value)

### Methods

- [init](QueriesListDataItemInfo.md#init)
- [toJSON](QueriesListDataItemInfo.md#tojson)
- [fromJS](QueriesListDataItemInfo.md#fromjs)

## Constructors

### constructor

• **new QueriesListDataItemInfo**(`data?`): [`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IQueriesListDataItemInfo`](../interfaces/IQueriesListDataItemInfo.md) |

#### Returns

[`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)

#### Defined in

main.ts:123324

## Properties

### query

• `Optional` **query**: `string`

related query

#### Implementation of

[IQueriesListDataItemInfo](../interfaces/IQueriesListDataItemInfo.md).[query](../interfaces/IQueriesListDataItemInfo.md#query)

#### Defined in

main.ts:123317

___

### value

• `Optional` **value**: `string`

search term popularity
represents the popularity of the topic. Scoring is on a relative scale where a value of 100 is the most commonly searched topic and a value of 50 is a topic searched half as often as the most popular term, and so on.

#### Implementation of

[IQueriesListDataItemInfo](../interfaces/IQueriesListDataItemInfo.md).[value](../interfaces/IQueriesListDataItemInfo.md#value)

#### Defined in

main.ts:123320

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

main.ts:123333

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

main.ts:123351

___

### fromJS

▸ **fromJS**(`data`): [`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)

#### Defined in

main.ts:123344
