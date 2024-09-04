[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo

# Class: DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo

## Implements

- [`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo()

> **new DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo**(`data`?): [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)

#### Defined in

main.ts:76583

## Properties

### items?

> `optional` **items**: [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveItem`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveItem.md)[]

items array

#### Implementation of

[`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md).[`items`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#items)

#### Defined in

main.ts:76579

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md).[`items_count`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#items_count)

#### Defined in

main.ts:76575

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned domains

#### Implementation of

[`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md).[`offset`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#offset)

#### Defined in

main.ts:76577

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md).[`total_count`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#total_count)

#### Defined in

main.ts:76573

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:76592

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:76616

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)

#### Defined in

main.ts:76609
