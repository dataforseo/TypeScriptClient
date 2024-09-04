[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IContentAnalysisCategoryTrendsLiveResultInfo

# Interface: IContentAnalysisCategoryTrendsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### connotation\_types?

> `optional` **connotation\_types**: `object`

connotation types
contains types of sentiments (sentiment polarity) related to the category citation and citation count per each sentiment type
possible connotation types: "positive", "negative", "neutral"

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:173346

***

### countries?

> `optional` **countries**: `object`

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:173361

***

### date?

> `optional` **date**: `string`

date for which the data is provided

#### Defined in

main.ts:173330

***

### languages?

> `optional` **languages**: `object`

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:173365

***

### page\_categories?

> `optional` **page\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Defined in

main.ts:173354

***

### page\_types?

> `optional` **page\_types**: `object`

page types
contains page types and citation count per each page type

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:173357

***

### rank?

> `optional` **rank**: `number`

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword for the given date

#### Defined in

main.ts:173335

***

### sentiment\_connotations?

> `optional` **sentiment\_connotations**: `object`

sentiment connotations
contains sentiments (emotional reactions) related to the target category citation and the number of citations per each sentiment
possible connotations: "anger", "fear", "happiness", "love", "sadness", "share", "neutral", "fun"

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:173342

***

### text\_categories?

> `optional` **text\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Defined in

main.ts:173350

***

### top\_domains?

> `optional` **top\_domains**: [`TopDomainInfo`](../classes/TopDomainInfo.md)[]

top domains citing the target keyword
contains objects with top domains citing the target category and citation count per each domain

#### Defined in

main.ts:173338

***

### total\_count?

> `optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Defined in

main.ts:173332

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:173328
