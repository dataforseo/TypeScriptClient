**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDomainAnalyticsTechnologiesTechnologyStatsLiveItem

# Interface: IDomainAnalyticsTechnologiesTechnologyStatsLiveItem

items array

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### countries?

> **`optional`** **countries**: `Object`

distribution of websites by country
contains country codes and number of websites per country

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:77236

***

### date?

> **`optional`** **date**: `string`

date for which the data is provided

#### Source

main.ts:77231

***

### domains\_count?

> **`optional`** **domains\_count**: `number`

number of domains that use the specified technology

#### Source

main.ts:77233

***

### domains\_rank?

> **`optional`** **domains\_rank**: `Object`

distribution of websites by backlink rank
contains domain rank ranges and number of websites per range
learn more about rank and how it is calculated in this help center article

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:77243

***

### languages?

> **`optional`** **languages**: `Object`

distribution of websites by language
contains language codes and number of websites per language

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:77239

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:77229
