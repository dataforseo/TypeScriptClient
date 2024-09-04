[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ContentAnalysisCategoryTrendsLiveResultInfo

# Class: ContentAnalysisCategoryTrendsLiveResultInfo

## Implements

- [`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisCategoryTrendsLiveResultInfo()

> **new ContentAnalysisCategoryTrendsLiveResultInfo**(`data`?): [`ContentAnalysisCategoryTrendsLiveResultInfo`](ContentAnalysisCategoryTrendsLiveResultInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md)

#### Returns

[`ContentAnalysisCategoryTrendsLiveResultInfo`](ContentAnalysisCategoryTrendsLiveResultInfo.md)

#### Defined in

main.ts:173183

## Properties

### connotation\_types?

> `optional` **connotation\_types**: `object`

connotation types
contains types of sentiments (sentiment polarity) related to the category citation and citation count per each sentiment type
possible connotation types: "positive", "negative", "neutral"

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`connotation_types`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#connotation_types)

#### Defined in

main.ts:173160

***

### countries?

> `optional` **countries**: `object`

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`countries`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#countries)

#### Defined in

main.ts:173175

***

### date?

> `optional` **date**: `string`

date for which the data is provided

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`date`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#date)

#### Defined in

main.ts:173144

***

### languages?

> `optional` **languages**: `object`

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`languages`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#languages)

#### Defined in

main.ts:173179

***

### page\_categories?

> `optional` **page\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`page_categories`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#page_categories)

#### Defined in

main.ts:173168

***

### page\_types?

> `optional` **page\_types**: `object`

page types
contains page types and citation count per each page type

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`page_types`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#page_types)

#### Defined in

main.ts:173171

***

### rank?

> `optional` **rank**: `number`

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword for the given date

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`rank`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#rank)

#### Defined in

main.ts:173149

***

### sentiment\_connotations?

> `optional` **sentiment\_connotations**: `object`

sentiment connotations
contains sentiments (emotional reactions) related to the target category citation and the number of citations per each sentiment
possible connotations: "anger", "fear", "happiness", "love", "sadness", "share", "neutral", "fun"

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`sentiment_connotations`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#sentiment_connotations)

#### Defined in

main.ts:173156

***

### text\_categories?

> `optional` **text\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`text_categories`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#text_categories)

#### Defined in

main.ts:173164

***

### top\_domains?

> `optional` **top\_domains**: [`TopDomainInfo`](TopDomainInfo.md)[]

top domains citing the target keyword
contains objects with top domains citing the target category and citation count per each domain

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`top_domains`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#top_domains)

#### Defined in

main.ts:173152

***

### total\_count?

> `optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`total_count`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#total_count)

#### Defined in

main.ts:173146

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`type`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#type)

#### Defined in

main.ts:173142

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:173192

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:173262

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisCategoryTrendsLiveResultInfo`](ContentAnalysisCategoryTrendsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisCategoryTrendsLiveResultInfo`](ContentAnalysisCategoryTrendsLiveResultInfo.md)

#### Defined in

main.ts:173255
