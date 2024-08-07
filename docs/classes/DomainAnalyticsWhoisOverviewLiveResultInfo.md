**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DomainAnalyticsWhoisOverviewLiveResultInfo

# Class: DomainAnalyticsWhoisOverviewLiveResultInfo

## Implements

- [`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsWhoisOverviewLiveResultInfo(data)

> **new DomainAnalyticsWhoisOverviewLiveResultInfo**(`data`?): [`DomainAnalyticsWhoisOverviewLiveResultInfo`](DomainAnalyticsWhoisOverviewLiveResultInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md)

#### Returns

[`DomainAnalyticsWhoisOverviewLiveResultInfo`](DomainAnalyticsWhoisOverviewLiveResultInfo.md)

#### Source

main.ts:80739

## Properties

### items?

> **`optional`** **items**: [`DomainAnalyticsWhoisOverviewLiveItem`](DomainAnalyticsWhoisOverviewLiveItem.md)[]

contains ranking and traffic data

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md).[`items`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md#items)

#### Source

main.ts:80735

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md#items_count)

#### Source

main.ts:80733

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md#total_count)

#### Source

main.ts:80731

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:80748

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:80771

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DomainAnalyticsWhoisOverviewLiveResultInfo`](DomainAnalyticsWhoisOverviewLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsWhoisOverviewLiveResultInfo`](DomainAnalyticsWhoisOverviewLiveResultInfo.md)

#### Source

main.ts:80764
