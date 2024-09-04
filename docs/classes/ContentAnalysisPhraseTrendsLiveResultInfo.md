[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ContentAnalysisPhraseTrendsLiveResultInfo

# Class: ContentAnalysisPhraseTrendsLiveResultInfo

## Implements

- [`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisPhraseTrendsLiveResultInfo()

> **new ContentAnalysisPhraseTrendsLiveResultInfo**(`data`?): [`ContentAnalysisPhraseTrendsLiveResultInfo`](ContentAnalysisPhraseTrendsLiveResultInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md)

#### Returns

[`ContentAnalysisPhraseTrendsLiveResultInfo`](ContentAnalysisPhraseTrendsLiveResultInfo.md)

#### Defined in

main.ts:172627

## Properties

### connotation\_types?

> `optional` **connotation\_types**: `object`

connotation types
contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type
possible connotation types: "positive", "negative", "neutral"

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`connotation_types`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#connotation_types)

#### Defined in

main.ts:172604

***

### countries?

> `optional` **countries**: `object`

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`countries`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#countries)

#### Defined in

main.ts:172619

***

### date?

> `optional` **date**: `string`

date for which the data is provided

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`date`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#date)

#### Defined in

main.ts:172588

***

### languages?

> `optional` **languages**: `object`

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`languages`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#languages)

#### Defined in

main.ts:172623

***

### page\_categories?

> `optional` **page\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`page_categories`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#page_categories)

#### Defined in

main.ts:172612

***

### page\_types?

> `optional` **page\_types**: `object`

page types
contains page types and citation count per each page type

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`page_types`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#page_types)

#### Defined in

main.ts:172615

***

### rank?

> `optional` **rank**: `number`

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword for the given date

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`rank`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#rank)

#### Defined in

main.ts:172593

***

### sentiment\_connotations?

> `optional` **sentiment\_connotations**: `object`

sentiment connotations
contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment
possible connotations: "anger", "happiness", "love", "sadness", "share", "fun"

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`sentiment_connotations`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#sentiment_connotations)

#### Defined in

main.ts:172600

***

### text\_categories?

> `optional` **text\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`text_categories`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#text_categories)

#### Defined in

main.ts:172608

***

### top\_domains?

> `optional` **top\_domains**: [`TopDomainInfo`](TopDomainInfo.md)[]

top domains citing the target keyword
contains objects with top domains citing the target keyword and citation count per each domain

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`top_domains`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#top_domains)

#### Defined in

main.ts:172596

***

### total\_count?

> `optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`total_count`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#total_count)

#### Defined in

main.ts:172590

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveResultInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md).[`type`](../interfaces/IContentAnalysisPhraseTrendsLiveResultInfo.md#type)

#### Defined in

main.ts:172586

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:172636

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:172706

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisPhraseTrendsLiveResultInfo`](ContentAnalysisPhraseTrendsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisPhraseTrendsLiveResultInfo`](ContentAnalysisPhraseTrendsLiveResultInfo.md)

#### Defined in

main.ts:172699
