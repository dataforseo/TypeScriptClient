[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesTechnologyStatsLiveItem

# Class: DomainAnalyticsTechnologiesTechnologyStatsLiveItem

items array

## Implements

- [`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesTechnologyStatsLiveItem()

> **new DomainAnalyticsTechnologiesTechnologyStatsLiveItem**(`data`?): [`DomainAnalyticsTechnologiesTechnologyStatsLiveItem`](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)

#### Parameters

• **data?**: [`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveItem`](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)

#### Defined in

main.ts:78700

## Properties

### countries?

> `optional` **countries**: `object`

distribution of websites by country
contains country codes and number of websites per country

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[`countries`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#countries)

#### Defined in

main.ts:78689

***

### date?

> `optional` **date**: `string`

date for which the data is provided

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[`date`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#date)

#### Defined in

main.ts:78684

***

### domains\_count?

> `optional` **domains\_count**: `number`

number of domains that use the specified technology

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[`domains_count`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#domains_count)

#### Defined in

main.ts:78686

***

### domains\_rank?

> `optional` **domains\_rank**: `object`

distribution of websites by backlink rank
contains domain rank ranges and number of websites per range
learn more about rank and how it is calculated in this help center article

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[`domains_rank`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#domains_rank)

#### Defined in

main.ts:78696

***

### languages?

> `optional` **languages**: `object`

distribution of websites by language
contains language codes and number of websites per language

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[`languages`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#languages)

#### Defined in

main.ts:78692

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[`type`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#type)

#### Defined in

main.ts:78682

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:78709

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:78749

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologyStatsLiveItem`](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveItem`](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)

#### Defined in

main.ts:78742
