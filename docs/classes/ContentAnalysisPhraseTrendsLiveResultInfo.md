[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisPhraseTrendsLiveResultInfo

# Class: ContentAnalysisPhraseTrendsLiveResultInfo

## Implements

- [`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisPhraseTrendsLiveResultInfo.md#constructor)

### Properties

- [connotation\_types](ContentAnalysisPhraseTrendsLiveResultInfo.md#connotation_types)
- [countries](ContentAnalysisPhraseTrendsLiveResultInfo.md#countries)
- [date](ContentAnalysisPhraseTrendsLiveResultInfo.md#date)
- [languages](ContentAnalysisPhraseTrendsLiveResultInfo.md#languages)
- [page\_categories](ContentAnalysisPhraseTrendsLiveResultInfo.md#page_categories)
- [page\_types](ContentAnalysisPhraseTrendsLiveResultInfo.md#page_types)
- [rank](ContentAnalysisPhraseTrendsLiveResultInfo.md#rank)
- [sentiment\_connotations](ContentAnalysisPhraseTrendsLiveResultInfo.md#sentiment_connotations)
- [text\_categories](ContentAnalysisPhraseTrendsLiveResultInfo.md#text_categories)
- [top\_domains](ContentAnalysisPhraseTrendsLiveResultInfo.md#top_domains)
- [total\_count](ContentAnalysisPhraseTrendsLiveResultInfo.md#total_count)
- [type](ContentAnalysisPhraseTrendsLiveResultInfo.md#type)

### Methods

- [init](ContentAnalysisPhraseTrendsLiveResultInfo.md#init)
- [toJSON](ContentAnalysisPhraseTrendsLiveResultInfo.md#tojson)
- [fromJS](ContentAnalysisPhraseTrendsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisPhraseTrendsLiveResultInfo**(`data?`): [`ContentAnalysisPhraseTrendsLiveResultInfo`](ContentAnalysisPhraseTrendsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md) |

#### Returns

[`ContentAnalysisPhraseTrendsLiveResultInfo`](ContentAnalysisPhraseTrendsLiveResultInfo.md)

#### Defined in

[main.ts:158890](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158890)

## Properties

### connotation\_types

• `Optional` **connotation\_types**: `Object`

connotation types
contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type
possible connotation types: "positive", "negative", "neutral"

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResultInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[connotation_types](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#connotation_types)

#### Defined in

[main.ts:158867](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158867)

___


### countries

• `Optional` **countries**: `Object`

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResultInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[countries](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#countries)

#### Defined in

[main.ts:158882](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158882)

___


### date

• `Optional` **date**: `string`

date for which the data is provided

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResultInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[date](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#date)

#### Defined in

[main.ts:158851](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158851)

___


### languages

• `Optional` **languages**: `Object`

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResultInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[languages](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#languages)

#### Defined in

[main.ts:158886](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158886)

___


### page\_categories

• `Optional` **page\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResultInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[page_categories](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#page_categories)

#### Defined in

[main.ts:158875](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158875)

___


### page\_types

• `Optional` **page\_types**: `Object`

page types
contains page types and citation count per each page type

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResultInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[page_types](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#page_types)

#### Defined in

[main.ts:158878](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158878)

___


### rank

• `Optional` **rank**: `number`

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword for the given date

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResultInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[rank](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#rank)

#### Defined in

[main.ts:158856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158856)

___


### sentiment\_connotations

• `Optional` **sentiment\_connotations**: `Object`

sentiment connotations
contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment
possible connotations: "anger", "happiness", "love", "sadness", "share", "fun"

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResultInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[sentiment_connotations](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#sentiment_connotations)

#### Defined in

[main.ts:158863](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158863)

___


### text\_categories

• `Optional` **text\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResultInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[text_categories](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#text_categories)

#### Defined in

[main.ts:158871](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158871)

___


### top\_domains

• `Optional` **top\_domains**: [`TopDomainInfo`](TopDomainInfo.md)[]

top domains citing the target keyword
contains objects with top domains citing the target keyword and citation count per each domain

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResultInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[top_domains](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#top_domains)

#### Defined in

[main.ts:158859](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158859)

___


### total\_count

• `Optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResultInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[total_count](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#total_count)

#### Defined in

[main.ts:158853](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158853)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResultInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[type](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#type)

#### Defined in

[main.ts:158849](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158849)

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

[main.ts:158899](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158899)

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

[main.ts:158969](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158969)

___


### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisPhraseTrendsLiveResultInfo`](ContentAnalysisPhraseTrendsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisPhraseTrendsLiveResultInfo`](ContentAnalysisPhraseTrendsLiveResultInfo.md)

#### Defined in

[main.ts:158962](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158962)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")