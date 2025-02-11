[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisSummaryInfo

# Class: ContentAnalysisSummaryInfo

Defined in: main.ts:178994

## Implements

- [`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisSummaryInfo()

> **new ContentAnalysisSummaryInfo**(`data`?): [`ContentAnalysisSummaryInfo`](ContentAnalysisSummaryInfo.md)

Defined in: main.ts:179035

#### Parameters

##### data?

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md)

#### Returns

[`ContentAnalysisSummaryInfo`](ContentAnalysisSummaryInfo.md)

## Properties

### connotation\_types?

> `optional` **connotation\_types**: `object`

Defined in: main.ts:179012

connotation types
contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type
possible sentiment connotation types: positive, negative, neutral

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`connotation_types`](../interfaces/IContentAnalysisSummaryInfo.md#connotation_types)

***

### countries?

> `optional` **countries**: `object`

Defined in: main.ts:179027

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`countries`](../interfaces/IContentAnalysisSummaryInfo.md#countries)

***

### languages?

> `optional` **languages**: `object`

Defined in: main.ts:179031

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`languages`](../interfaces/IContentAnalysisSummaryInfo.md#languages)

***

### page\_categories?

> `optional` **page\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

Defined in: main.ts:179020

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`page_categories`](../interfaces/IContentAnalysisSummaryInfo.md#page_categories)

***

### page\_types?

> `optional` **page\_types**: `object`

Defined in: main.ts:179023

page types
contains page types and citation count per each page type

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`page_types`](../interfaces/IContentAnalysisSummaryInfo.md#page_types)

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:179001

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`rank`](../interfaces/IContentAnalysisSummaryInfo.md#rank)

***

### sentiment\_connotations?

> `optional` **sentiment\_connotations**: `object`

Defined in: main.ts:179008

sentiment connotations
contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment
possible sentiment connotations: anger, happiness, love, sadness, share, fun

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`sentiment_connotations`](../interfaces/IContentAnalysisSummaryInfo.md#sentiment_connotations)

***

### text\_categories?

> `optional` **text\_categories**: [`ContentAnalysisCategoriesInfo`](ContentAnalysisCategoriesInfo.md)[]

Defined in: main.ts:179016

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`text_categories`](../interfaces/IContentAnalysisSummaryInfo.md#text_categories)

***

### top\_domains?

> `optional` **top\_domains**: [`TopDomainInfo`](TopDomainInfo.md)[]

Defined in: main.ts:179004

top domains citing the target keyword
contains objects with top domains citing the target keword and citation count per each domain

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`top_domains`](../interfaces/IContentAnalysisSummaryInfo.md#top_domains)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:178998

total amount of results in our database relevant to your request

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`total_count`](../interfaces/IContentAnalysisSummaryInfo.md#total_count)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:178996

type of element

#### Implementation of

[`IContentAnalysisSummaryInfo`](../interfaces/IContentAnalysisSummaryInfo.md).[`type`](../interfaces/IContentAnalysisSummaryInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:179044

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:179113

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisSummaryInfo`](ContentAnalysisSummaryInfo.md)

Defined in: main.ts:179106

#### Parameters

##### data

`any`

#### Returns

[`ContentAnalysisSummaryInfo`](ContentAnalysisSummaryInfo.md)
