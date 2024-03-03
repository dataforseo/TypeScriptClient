[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo

# Class: DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo

## Implements

- [`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#constructor)

### Properties

- [items](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#items)
- [items\_count](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#items_count)
- [offset](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#offset)
- [total\_count](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#total_count)

### Methods

- [init](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo**(`data?`): [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)

#### Defined in

main.ts:72972

## Properties

### items

• `Optional` **items**: [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveItem`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveItem.md)[]

items array

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md).[items](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#items)

#### Defined in

main.ts:72968

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md).[items_count](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#items_count)

#### Defined in

main.ts:72964

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned domains

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md).[offset](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#offset)

#### Defined in

main.ts:72966

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md).[total_count](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#total_count)

#### Defined in

main.ts:72962

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

main.ts:72981

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

main.ts:73005

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)

#### Defined in

main.ts:72998
