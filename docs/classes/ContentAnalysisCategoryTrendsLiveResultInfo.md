[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisCategoryTrendsLiveResultInfo

# Class: ContentAnalysisCategoryTrendsLiveResultInfo

## Implements

- [`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisCategoryTrendsLiveResultInfo.md#constructor)

### Properties

- [connotation\_types](ContentAnalysisCategoryTrendsLiveResultInfo.md#connotation_types)
- [countries](ContentAnalysisCategoryTrendsLiveResultInfo.md#countries)
- [date](ContentAnalysisCategoryTrendsLiveResultInfo.md#date)
- [languages](ContentAnalysisCategoryTrendsLiveResultInfo.md#languages)
- [page\_categories](ContentAnalysisCategoryTrendsLiveResultInfo.md#page_categories)
- [page\_types](ContentAnalysisCategoryTrendsLiveResultInfo.md#page_types)
- [rank](ContentAnalysisCategoryTrendsLiveResultInfo.md#rank)
- [sentiment\_connotations](ContentAnalysisCategoryTrendsLiveResultInfo.md#sentiment_connotations)
- [text\_categories](ContentAnalysisCategoryTrendsLiveResultInfo.md#text_categories)
- [top\_domains](ContentAnalysisCategoryTrendsLiveResultInfo.md#top_domains)
- [total\_count](ContentAnalysisCategoryTrendsLiveResultInfo.md#total_count)
- [type](ContentAnalysisCategoryTrendsLiveResultInfo.md#type)

### Methods

- [init](ContentAnalysisCategoryTrendsLiveResultInfo.md#init)
- [toJSON](ContentAnalysisCategoryTrendsLiveResultInfo.md#tojson)
- [fromJS](ContentAnalysisCategoryTrendsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisCategoryTrendsLiveResultInfo**(`data?`): [`ContentAnalysisCategoryTrendsLiveResultInfo`](ContentAnalysisCategoryTrendsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md) |

#### Returns

[`ContentAnalysisCategoryTrendsLiveResultInfo`](ContentAnalysisCategoryTrendsLiveResultInfo.md)

#### Defined in

[main.ts:159446](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159446)

## Properties

### connotation\_types

• `Optional` **connotation\_types**: `Object`

connotation types
contains types of sentiments (sentiment polarity) related to the category citation and citation count per each sentiment type
possible connotation types: "positive", "negative", "neutral"

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResultInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[connotation_types](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#connotation_types)

#### Defined in

[main.ts:159423](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159423)

___


### countries

• `Optional` **countries**: `Object`

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResultInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[countries](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#countries)

#### Defined in

[main.ts:159438](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159438)

___


### date

• `Optional` **date**: `string`

date for which the data is provided

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResultInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[date](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#date)

#### Defined in

[main.ts:159407](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159407)

___


### languages

• `Optional` **languages**: `Object`

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResultInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[languages](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#languages)

#### Defined in

[main.ts:159442](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159442)

___


### page\_categories

• `Optional` **page\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResultInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[page_categories](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#page_categories)

#### Defined in

[main.ts:159431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159431)

___


### page\_types

• `Optional` **page\_types**: `Object`

page types
contains page types and citation count per each page type

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResultInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[page_types](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#page_types)

#### Defined in

[main.ts:159434](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159434)

___


### rank

• `Optional` **rank**: `number`

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword for the given date

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResultInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[rank](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#rank)

#### Defined in

[main.ts:159412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159412)

___


### sentiment\_connotations

• `Optional` **sentiment\_connotations**: `Object`

sentiment connotations
contains sentiments (emotional reactions) related to the target category citation and the number of citations per each sentiment
possible connotations: "anger", "fear", "happiness", "love", "sadness", "share", "neutral", "fun"

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResultInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[sentiment_connotations](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#sentiment_connotations)

#### Defined in

[main.ts:159419](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159419)

___


### text\_categories

• `Optional` **text\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResultInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[text_categories](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#text_categories)

#### Defined in

[main.ts:159427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159427)

___


### top\_domains

• `Optional` **top\_domains**: [`TopDomainInfo`](TopDomainInfo.md)[]

top domains citing the target keyword
contains objects with top domains citing the target category and citation count per each domain

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResultInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[top_domains](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#top_domains)

#### Defined in

[main.ts:159415](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159415)

___


### total\_count

• `Optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResultInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[total_count](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#total_count)

#### Defined in

[main.ts:159409](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159409)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResultInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[type](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#type)

#### Defined in

[main.ts:159405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159405)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:159455](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159455)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:159525](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159525)

___


### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisCategoryTrendsLiveResultInfo`](ContentAnalysisCategoryTrendsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisCategoryTrendsLiveResultInfo`](ContentAnalysisCategoryTrendsLiveResultInfo.md)

#### Defined in

[main.ts:159518](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159518)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")