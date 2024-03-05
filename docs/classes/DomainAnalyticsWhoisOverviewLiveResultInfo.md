[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsWhoisOverviewLiveResultInfo

# Class: DomainAnalyticsWhoisOverviewLiveResultInfo

## Implements

- [`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsWhoisOverviewLiveResultInfo.md#constructor)

### Properties

- [items](DomainAnalyticsWhoisOverviewLiveResultInfo.md#items)
- [items\_count](DomainAnalyticsWhoisOverviewLiveResultInfo.md#items_count)
- [total\_count](DomainAnalyticsWhoisOverviewLiveResultInfo.md#total_count)

### Methods

- [init](DomainAnalyticsWhoisOverviewLiveResultInfo.md#init)
- [toJSON](DomainAnalyticsWhoisOverviewLiveResultInfo.md#tojson)
- [fromJS](DomainAnalyticsWhoisOverviewLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsWhoisOverviewLiveResultInfo**(`data?`): [`DomainAnalyticsWhoisOverviewLiveResultInfo`](DomainAnalyticsWhoisOverviewLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md) |

#### Returns

[`DomainAnalyticsWhoisOverviewLiveResultInfo`](DomainAnalyticsWhoisOverviewLiveResultInfo.md)

#### Defined in

[main.ts:76252](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76252)

## Properties

### items

• `Optional` **items**: [`DomainAnalyticsWhoisOverviewLiveItem`](DomainAnalyticsWhoisOverviewLiveItem.md)[]

contains ranking and traffic data

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveResultInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md).[items](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md#items)

#### Defined in

[main.ts:76248](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76248)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveResultInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md).[items_count](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md#items_count)

#### Defined in

[main.ts:76246](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76246)

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveResultInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md).[total_count](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md#total_count)

#### Defined in

[main.ts:76244](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76244)

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

[main.ts:76261](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76261)

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

[main.ts:76284](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76284)

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsWhoisOverviewLiveResultInfo`](DomainAnalyticsWhoisOverviewLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsWhoisOverviewLiveResultInfo`](DomainAnalyticsWhoisOverviewLiveResultInfo.md)

#### Defined in

[main.ts:76277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76277)
