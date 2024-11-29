[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDomainAnalyticsTechnologiesTechnologyStatsLiveItem

# Interface: IDomainAnalyticsTechnologiesTechnologyStatsLiveItem

items array

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### countries?

> `optional` **countries**: `object`

distribution of websites by country
contains country codes and number of websites per country

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:87206

***

### date?

> `optional` **date**: `string`

date for which the data is provided

#### Defined in

main.ts:87201

***

### domains\_count?

> `optional` **domains\_count**: `number`

number of domains that use the specified technology

#### Defined in

main.ts:87203

***

### domains\_rank?

> `optional` **domains\_rank**: `object`

distribution of websites by backlink rank
contains domain rank ranges and number of websites per range
learn more about rank and how it is calculated in this help center article

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:87213

***

### languages?

> `optional` **languages**: `object`

distribution of websites by language
contains language codes and number of websites per language

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:87209

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:87199
