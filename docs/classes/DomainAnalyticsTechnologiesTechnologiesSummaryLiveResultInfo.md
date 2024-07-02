**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo

# Class: DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo

## Implements

- [`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo(data)

> **new DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo**(`data`?): [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

#### Source

main.ts:77236

## Properties

### content\_languages?

> **`optional`** **content\_languages**: `Object`

distribution of websites by content language
contains content language codes and number of websites per language

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md).[`content_languages`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#content_languages)

#### Source

main.ts:77229

***

### countries?

> **`optional`** **countries**: `Object`

distribution of websites by country
contains country codes and number of websites per country

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md).[`countries`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#countries)

#### Source

main.ts:77223

***

### keywords?

> **`optional`** **keywords**: `Object`

distribution of websites by keywords
contains keywords found in the websites’ titles, descriptions or meta keywords, and number of websites using each keyword

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md).[`keywords`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#keywords)

#### Source

main.ts:77232

***

### languages?

> **`optional`** **languages**: `Object`

distribution of websites by language
contains language codes and number of websites per language

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md).[`languages`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#languages)

#### Source

main.ts:77226

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:77245

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:77289

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

#### Source

main.ts:77282
