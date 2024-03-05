[dataforseo-client](../README.md) / [Exports](../modules.md) / QueriesListDataItemInfo

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

[main.ts:120998](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120998)

## Properties

### query

• `Optional` **query**: `string`

related query

#### Implementation of

[IQueriesListDataItemInfo](../interfaces/IQueriesListDataItemInfo.md).[query](../interfaces/IQueriesListDataItemInfo.md#query)

#### Defined in

[main.ts:120991](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120991)

___

### value

• `Optional` **value**: `string`

search term popularity
represents the popularity of the topic. Scoring is on a relative scale where a value of 100 is the most commonly searched topic and a value of 50 is a topic searched half as often as the most popular term, and so on.

#### Implementation of

[IQueriesListDataItemInfo](../interfaces/IQueriesListDataItemInfo.md).[value](../interfaces/IQueriesListDataItemInfo.md#value)

#### Defined in

[main.ts:120994](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120994)

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

[main.ts:121007](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121007)

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

[main.ts:121025](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121025)

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

[main.ts:121018](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121018)
