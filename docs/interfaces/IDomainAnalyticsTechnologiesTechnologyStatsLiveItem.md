[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDomainAnalyticsTechnologiesTechnologyStatsLiveItem

# Interface: IDomainAnalyticsTechnologiesTechnologyStatsLiveItem

Defined in: main.ts:87233

items array

## Indexable

\[`key`: `string`\]: `any`

## Properties

### countries?

> `optional` **countries**: `object`

Defined in: main.ts:87242

distribution of websites by country
contains country codes and number of websites per country

#### Index Signature

\[`key`: `string`\]: `number`

***

### date?

> `optional` **date**: `string`

Defined in: main.ts:87237

date for which the data is provided

***

### domains\_count?

> `optional` **domains\_count**: `number`

Defined in: main.ts:87239

number of domains that use the specified technology

***

### domains\_rank?

> `optional` **domains\_rank**: `object`

Defined in: main.ts:87249

distribution of websites by backlink rank
contains domain rank ranges and number of websites per range
learn more about rank and how it is calculated in this help center article

#### Index Signature

\[`key`: `string`\]: `number`

***

### languages?

> `optional` **languages**: `object`

Defined in: main.ts:87245

distribution of websites by language
contains language codes and number of websites per language

#### Index Signature

\[`key`: `string`\]: `number`

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:87235

type of element
