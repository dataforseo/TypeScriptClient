[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ContentAnalysisSummaryInfo

# Class: ContentAnalysisSummaryInfo

## Implements

- [`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisSummaryInfo()

> **new ContentAnalysisSummaryInfo**(`data`?): [`ContentAnalysisSummaryInfo`](ContentAnalysisSummaryInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md)

#### Returns

[`ContentAnalysisSummaryInfo`](ContentAnalysisSummaryInfo.md)

#### Defined in

main.ts:167016

## Properties

### connotation\_types?

> `optional` **connotation\_types**: `object`

connotation types
contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type
possible sentiment connotation types: positive, negative, neutral

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`connotation_types`](../interfaces/IContentAnalysisSummaryInfo.md#connotation_types)

#### Defined in

main.ts:166993

***

### countries?

> `optional` **countries**: `object`

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`countries`](../interfaces/IContentAnalysisSummaryInfo.md#countries)

#### Defined in

main.ts:167008

***

### languages?

> `optional` **languages**: `object`

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`languages`](../interfaces/IContentAnalysisSummaryInfo.md#languages)

#### Defined in

main.ts:167012

***

### page\_categories?

> `optional` **page\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`page_categories`](../interfaces/IContentAnalysisSummaryInfo.md#page_categories)

#### Defined in

main.ts:167001

***

### page\_types?

> `optional` **page\_types**: `object`

page types
contains page types and citation count per each page type

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`page_types`](../interfaces/IContentAnalysisSummaryInfo.md#page_types)

#### Defined in

main.ts:167004

***

### rank?

> `optional` **rank**: `number`

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`rank`](../interfaces/IContentAnalysisSummaryInfo.md#rank)

#### Defined in

main.ts:166982

***

### sentiment\_connotations?

> `optional` **sentiment\_connotations**: `object`

sentiment connotations
contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment
possible sentiment connotations: anger, happiness, love, sadness, share, fun

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`sentiment_connotations`](../interfaces/IContentAnalysisSummaryInfo.md#sentiment_connotations)

#### Defined in

main.ts:166989

***

### text\_categories?

> `optional` **text\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`text_categories`](../interfaces/IContentAnalysisSummaryInfo.md#text_categories)

#### Defined in

main.ts:166997

***

### top\_domains?

> `optional` **top\_domains**: [`TopDomainInfo`](TopDomainInfo.md)[]

top domains citing the target keyword
contains objects with top domains citing the target keword and citation count per each domain

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`top_domains`](../interfaces/IContentAnalysisSummaryInfo.md#top_domains)

#### Defined in

main.ts:166985

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`total_count`](../interfaces/IContentAnalysisSummaryInfo.md#total_count)

#### Defined in

main.ts:166979

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`type`](../interfaces/IContentAnalysisSummaryInfo.md#type)

#### Defined in

main.ts:166977

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:167025

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:167094

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisSummaryInfo`](ContentAnalysisSummaryInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisSummaryInfo`](ContentAnalysisSummaryInfo.md)

#### Defined in

main.ts:167087
