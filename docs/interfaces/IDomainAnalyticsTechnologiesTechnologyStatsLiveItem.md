[dataforseo-client](../README.md) / [Exports](../modules.md) / IDomainAnalyticsTechnologiesTechnologyStatsLiveItem

# Interface: IDomainAnalyticsTechnologiesTechnologyStatsLiveItem

items array

## Implemented by

- [`DomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../classes/DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [countries](IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#countries)
- [date](IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#date)
- [domains\_count](IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#domains_count)
- [domains\_rank](IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#domains_rank)
- [languages](IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#languages)
- [type](IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#type)

## Properties

### countries

• `Optional` **countries**: `Object`

distribution of websites by country
contains country codes and number of websites per country

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:73710](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73710)

___

### date

• `Optional` **date**: `string`

date for which the data is provided

#### Defined in

[main.ts:73705](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73705)

___

### domains\_count

• `Optional` **domains\_count**: `number`

number of domains that use the specified technology

#### Defined in

[main.ts:73707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73707)

___

### domains\_rank

• `Optional` **domains\_rank**: `Object`

distribution of websites by backlink rank
contains domain rank ranges and number of websites per range
learn more about rank and how it is calculated in this help center article

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:73717](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73717)

___

### languages

• `Optional` **languages**: `Object`

distribution of websites by language
contains language codes and number of websites per language

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:73713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73713)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:73703](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73703)
