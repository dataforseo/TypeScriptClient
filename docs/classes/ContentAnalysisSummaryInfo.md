[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisSummaryInfo

# Class: ContentAnalysisSummaryInfo

## Implements

- [`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisSummaryInfo.md#constructor)

### Properties

- [connotation\_types](ContentAnalysisSummaryInfo.md#connotation_types)
- [countries](ContentAnalysisSummaryInfo.md#countries)
- [languages](ContentAnalysisSummaryInfo.md#languages)
- [page\_categories](ContentAnalysisSummaryInfo.md#page_categories)
- [page\_types](ContentAnalysisSummaryInfo.md#page_types)
- [rank](ContentAnalysisSummaryInfo.md#rank)
- [sentiment\_connotations](ContentAnalysisSummaryInfo.md#sentiment_connotations)
- [text\_categories](ContentAnalysisSummaryInfo.md#text_categories)
- [top\_domains](ContentAnalysisSummaryInfo.md#top_domains)
- [total\_count](ContentAnalysisSummaryInfo.md#total_count)
- [type](ContentAnalysisSummaryInfo.md#type)

### Methods

- [init](ContentAnalysisSummaryInfo.md#init)
- [toJSON](ContentAnalysisSummaryInfo.md#tojson)
- [fromJS](ContentAnalysisSummaryInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisSummaryInfo**(`data?`): [`ContentAnalysisSummaryInfo`](ContentAnalysisSummaryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md) |

#### Returns

[`ContentAnalysisSummaryInfo`](ContentAnalysisSummaryInfo.md)

#### Defined in

[main.ts:157316](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157316)

## Properties

### connotation\_types

• `Optional` **connotation\_types**: `Object`

connotation types
contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type
possible sentiment connotation types: positive, negative, neutral

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IContentAnalysisSummaryInfo](../interfaces/IContentAnalysisSummaryInfo.md).[connotation_types](../interfaces/IContentAnalysisSummaryInfo.md#connotation_types)

#### Defined in

[main.ts:157293](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157293)

___

### countries

• `Optional` **countries**: `Object`

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IContentAnalysisSummaryInfo](../interfaces/IContentAnalysisSummaryInfo.md).[countries](../interfaces/IContentAnalysisSummaryInfo.md#countries)

#### Defined in

[main.ts:157308](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157308)

___

### languages

• `Optional` **languages**: `Object`

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IContentAnalysisSummaryInfo](../interfaces/IContentAnalysisSummaryInfo.md).[languages](../interfaces/IContentAnalysisSummaryInfo.md#languages)

#### Defined in

[main.ts:157312](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157312)

___

### page\_categories

• `Optional` **page\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[IContentAnalysisSummaryInfo](../interfaces/IContentAnalysisSummaryInfo.md).[page_categories](../interfaces/IContentAnalysisSummaryInfo.md#page_categories)

#### Defined in

[main.ts:157301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157301)

___

### page\_types

• `Optional` **page\_types**: `Object`

page types
contains page types and citation count per each page type

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IContentAnalysisSummaryInfo](../interfaces/IContentAnalysisSummaryInfo.md).[page_types](../interfaces/IContentAnalysisSummaryInfo.md#page_types)

#### Defined in

[main.ts:157304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157304)

___

### rank

• `Optional` **rank**: `number`

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword

#### Implementation of

[IContentAnalysisSummaryInfo](../interfaces/IContentAnalysisSummaryInfo.md).[rank](../interfaces/IContentAnalysisSummaryInfo.md#rank)

#### Defined in

[main.ts:157282](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157282)

___

### sentiment\_connotations

• `Optional` **sentiment\_connotations**: `Object`

sentiment connotations
contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment
possible sentiment connotations: anger, happiness, love, sadness, share, fun

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IContentAnalysisSummaryInfo](../interfaces/IContentAnalysisSummaryInfo.md).[sentiment_connotations](../interfaces/IContentAnalysisSummaryInfo.md#sentiment_connotations)

#### Defined in

[main.ts:157289](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157289)

___

### text\_categories

• `Optional` **text\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[IContentAnalysisSummaryInfo](../interfaces/IContentAnalysisSummaryInfo.md).[text_categories](../interfaces/IContentAnalysisSummaryInfo.md#text_categories)

#### Defined in

[main.ts:157297](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157297)

___

### top\_domains

• `Optional` **top\_domains**: [`TopDomainInfo`](TopDomainInfo.md)[]

top domains citing the target keyword
contains objects with top domains citing the target keword and citation count per each domain

#### Implementation of

[IContentAnalysisSummaryInfo](../interfaces/IContentAnalysisSummaryInfo.md).[top_domains](../interfaces/IContentAnalysisSummaryInfo.md#top_domains)

#### Defined in

[main.ts:157285](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157285)

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[IContentAnalysisSummaryInfo](../interfaces/IContentAnalysisSummaryInfo.md).[total_count](../interfaces/IContentAnalysisSummaryInfo.md#total_count)

#### Defined in

[main.ts:157279](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157279)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IContentAnalysisSummaryInfo](../interfaces/IContentAnalysisSummaryInfo.md).[type](../interfaces/IContentAnalysisSummaryInfo.md#type)

#### Defined in

[main.ts:157277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157277)

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

[main.ts:157325](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157325)

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

[main.ts:157394](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157394)

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisSummaryInfo`](ContentAnalysisSummaryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisSummaryInfo`](ContentAnalysisSummaryInfo.md)

#### Defined in

[main.ts:157387](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157387)
