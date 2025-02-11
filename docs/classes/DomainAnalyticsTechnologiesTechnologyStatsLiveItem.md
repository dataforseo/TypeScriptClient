[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesTechnologyStatsLiveItem

# Class: DomainAnalyticsTechnologiesTechnologyStatsLiveItem

Defined in: main.ts:87129

items array

## Implements

- [`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesTechnologyStatsLiveItem()

> **new DomainAnalyticsTechnologiesTechnologyStatsLiveItem**(`data`?): [`DomainAnalyticsTechnologiesTechnologyStatsLiveItem`](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)

Defined in: main.ts:87149

#### Parameters

##### data?

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveItem`](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)

## Properties

### countries?

> `optional` **countries**: `object`

Defined in: main.ts:87138

distribution of websites by country
contains country codes and number of websites per country

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[`countries`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#countries)

***

### date?

> `optional` **date**: `string`

Defined in: main.ts:87133

date for which the data is provided

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[`date`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#date)

***

### domains\_count?

> `optional` **domains\_count**: `number`

Defined in: main.ts:87135

number of domains that use the specified technology

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[`domains_count`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#domains_count)

***

### domains\_rank?

> `optional` **domains\_rank**: `object`

Defined in: main.ts:87145

distribution of websites by backlink rank
contains domain rank ranges and number of websites per range
learn more about rank and how it is calculated in this help center article

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[`domains_rank`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#domains_rank)

***

### languages?

> `optional` **languages**: `object`

Defined in: main.ts:87141

distribution of websites by language
contains language codes and number of websites per language

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[`languages`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#languages)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:87131

type of element

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[`type`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:87158

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:87198

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologyStatsLiveItem`](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)

Defined in: main.ts:87191

#### Parameters

##### data

`any`

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveItem`](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)
