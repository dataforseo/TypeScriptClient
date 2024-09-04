[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DomainAnalyticsWhoisOverviewLiveResultInfo

# Class: DomainAnalyticsWhoisOverviewLiveResultInfo

## Implements

- [`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsWhoisOverviewLiveResultInfo()

> **new DomainAnalyticsWhoisOverviewLiveResultInfo**(`data`?): [`DomainAnalyticsWhoisOverviewLiveResultInfo`](DomainAnalyticsWhoisOverviewLiveResultInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md)

#### Returns

[`DomainAnalyticsWhoisOverviewLiveResultInfo`](DomainAnalyticsWhoisOverviewLiveResultInfo.md)

#### Defined in

main.ts:81335

## Properties

### items?

> `optional` **items**: [`DomainAnalyticsWhoisOverviewLiveItem`](DomainAnalyticsWhoisOverviewLiveItem.md)[]

contains ranking and traffic data

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md).[`items`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md#items)

#### Defined in

main.ts:81331

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md).[`items_count`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md#items_count)

#### Defined in

main.ts:81329

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveResultInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md).[`total_count`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResultInfo.md#total_count)

#### Defined in

main.ts:81327

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:81344

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:81367

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsWhoisOverviewLiveResultInfo`](DomainAnalyticsWhoisOverviewLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsWhoisOverviewLiveResultInfo`](DomainAnalyticsWhoisOverviewLiveResultInfo.md)

#### Defined in

main.ts:81360
