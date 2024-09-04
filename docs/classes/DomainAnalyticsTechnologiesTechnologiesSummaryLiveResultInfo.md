[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo

# Class: DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo

## Implements

- [`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo()

> **new DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo**(`data`?): [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

#### Defined in

main.ts:77027

## Properties

### content\_languages?

> `optional` **content\_languages**: `object`

distribution of websites by content language
contains content language codes and number of websites per language

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md).[`content_languages`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#content_languages)

#### Defined in

main.ts:77020

***

### countries?

> `optional` **countries**: `object`

distribution of websites by country
contains country codes and number of websites per country

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md).[`countries`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#countries)

#### Defined in

main.ts:77014

***

### keywords?

> `optional` **keywords**: `object`

distribution of websites by keywords
contains keywords found in the websites’ titles, descriptions or meta keywords, and number of websites using each keyword

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md).[`keywords`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#keywords)

#### Defined in

main.ts:77023

***

### languages?

> `optional` **languages**: `object`

distribution of websites by language
contains language codes and number of websites per language

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md).[`languages`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#languages)

#### Defined in

main.ts:77017

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:77036

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:77080

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

#### Defined in

main.ts:77073
