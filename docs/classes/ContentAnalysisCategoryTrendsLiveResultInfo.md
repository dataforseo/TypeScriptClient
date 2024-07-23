**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentAnalysisCategoryTrendsLiveResultInfo

# Class: ContentAnalysisCategoryTrendsLiveResultInfo

## Implements

- [`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisCategoryTrendsLiveResultInfo(data)

> **new ContentAnalysisCategoryTrendsLiveResultInfo**(`data`?): [`ContentAnalysisCategoryTrendsLiveResultInfo`](ContentAnalysisCategoryTrendsLiveResultInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md)

#### Returns

[`ContentAnalysisCategoryTrendsLiveResultInfo`](ContentAnalysisCategoryTrendsLiveResultInfo.md)

#### Source

main.ts:171351

## Properties

### connotation\_types?

> **`optional`** **connotation\_types**: `Object`

connotation types
contains types of sentiments (sentiment polarity) related to the category citation and citation count per each sentiment type
possible connotation types: "positive", "negative", "neutral"

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`connotation_types`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#connotation_types)

#### Source

main.ts:171328

***

### countries?

> **`optional`** **countries**: `Object`

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`countries`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#countries)

#### Source

main.ts:171343

***

### date?

> **`optional`** **date**: `string`

date for which the data is provided

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`date`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#date)

#### Source

main.ts:171312

***

### languages?

> **`optional`** **languages**: `Object`

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`languages`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#languages)

#### Source

main.ts:171347

***

### page\_categories?

> **`optional`** **page\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`page_categories`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#page_categories)

#### Source

main.ts:171336

***

### page\_types?

> **`optional`** **page\_types**: `Object`

page types
contains page types and citation count per each page type

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`page_types`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#page_types)

#### Source

main.ts:171339

***

### rank?

> **`optional`** **rank**: `number`

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword for the given date

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`rank`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#rank)

#### Source

main.ts:171317

***

### sentiment\_connotations?

> **`optional`** **sentiment\_connotations**: `Object`

sentiment connotations
contains sentiments (emotional reactions) related to the target category citation and the number of citations per each sentiment
possible connotations: "anger", "fear", "happiness", "love", "sadness", "share", "neutral", "fun"

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`sentiment_connotations`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#sentiment_connotations)

#### Source

main.ts:171324

***

### text\_categories?

> **`optional`** **text\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`text_categories`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#text_categories)

#### Source

main.ts:171332

***

### top\_domains?

> **`optional`** **top\_domains**: [`TopDomainInfo`](TopDomainInfo.md)[]

top domains citing the target keyword
contains objects with top domains citing the target category and citation count per each domain

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`top_domains`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#top_domains)

#### Source

main.ts:171320

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of results in our database relevant to your request

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`total_count`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#total_count)

#### Source

main.ts:171314

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveResultInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md).[`type`](../interfaces/IContentAnalysisCategoryTrendsLiveResultInfo.md#type)

#### Source

main.ts:171310

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:171360

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:171430

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentAnalysisCategoryTrendsLiveResultInfo`](ContentAnalysisCategoryTrendsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisCategoryTrendsLiveResultInfo`](ContentAnalysisCategoryTrendsLiveResultInfo.md)

#### Source

main.ts:171423
