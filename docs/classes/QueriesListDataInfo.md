[dataforseo-client](../README.md) / [Exports](../modules.md) / QueriesListDataInfo

# Class: QueriesListDataInfo

## Implements

- [`IQueriesListDataInfo`](../interfaces/IQueriesListDataInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](QueriesListDataInfo.md#constructor)

### Properties

- [rising](QueriesListDataInfo.md#rising)
- [top](QueriesListDataInfo.md#top)

### Methods

- [init](QueriesListDataInfo.md#init)
- [toJSON](QueriesListDataInfo.md#tojson)
- [fromJS](QueriesListDataInfo.md#fromjs)

## Constructors

### constructor

• **new QueriesListDataInfo**(`data?`): [`QueriesListDataInfo`](QueriesListDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IQueriesListDataInfo`](../interfaces/IQueriesListDataInfo.md) |

#### Returns

[`QueriesListDataInfo`](QueriesListDataInfo.md)

#### Defined in

[main.ts:121057](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121057)

## Properties

### rising

• `Optional` **rising**: [`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)[]

emerging related topics
represents the list of related topics with the biggest increase in search frequency since the last time period

#### Implementation of

[IQueriesListDataInfo](../interfaces/IQueriesListDataInfo.md).[rising](../interfaces/IQueriesListDataInfo.md#rising)

#### Defined in

[main.ts:121053](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121053)

___

### top

• `Optional` **top**: [`QueriesListDataItemInfo`](QueriesListDataItemInfo.md)[]

the most popular related topics
represents the list of the most popular related topics

#### Implementation of

[IQueriesListDataInfo](../interfaces/IQueriesListDataInfo.md).[top](../interfaces/IQueriesListDataInfo.md#top)

#### Defined in

[main.ts:121050](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121050)

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

[main.ts:121066](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121066)

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

[main.ts:121092](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121092)

___

### fromJS

▸ **fromJS**(`data`): [`QueriesListDataInfo`](QueriesListDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`QueriesListDataInfo`](QueriesListDataInfo.md)

#### Defined in

[main.ts:121085](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121085)
