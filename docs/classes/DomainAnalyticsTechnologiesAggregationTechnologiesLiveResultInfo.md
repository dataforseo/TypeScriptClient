**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo

# Class: DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo

## Implements

- [`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo(data)

> **new DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo**(`data`?): [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)

#### Source

main.ts:76293

## Properties

### items?

> **`optional`** **items**: [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveItem`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveItem.md)[]

items array

#### Implementation of

[`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md).[`items`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#items)

#### Source

main.ts:76289

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md).[`items_count`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#items_count)

#### Source

main.ts:76285

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned domains

#### Implementation of

[`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md).[`offset`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#offset)

#### Source

main.ts:76287

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md).[`total_count`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md#total_count)

#### Source

main.ts:76283

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:76302

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:76326

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo.md)

#### Source

main.ts:76319
