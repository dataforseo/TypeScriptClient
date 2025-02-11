[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentAnalysisPhraseTrendsLiveResultInfo

# Interface: IContentAnalysisPhraseTrendsLiveResultInfo

Defined in: main.ts:180752

## Indexable

\[`key`: `string`\]: `any`

## Properties

### connotation\_types?

> `optional` **connotation\_types**: `object`

Defined in: main.ts:180772

connotation types
contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type
possible connotation types: "positive", "negative", "neutral"

#### Index Signature

\[`key`: `string`\]: `number`

***

### countries?

> `optional` **countries**: `object`

Defined in: main.ts:180787

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index Signature

\[`key`: `string`\]: `number`

***

### date?

> `optional` **date**: `string`

Defined in: main.ts:180756

date for which the data is provided

***

### languages?

> `optional` **languages**: `object`

Defined in: main.ts:180791

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index Signature

\[`key`: `string`\]: `number`

***

### page\_categories?

> `optional` **page\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

Defined in: main.ts:180780

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

***

### page\_types?

> `optional` **page\_types**: `object`

Defined in: main.ts:180783

page types
contains page types and citation count per each page type

#### Index Signature

\[`key`: `string`\]: `number`

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:180761

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword for the given date

***

### sentiment\_connotations?

> `optional` **sentiment\_connotations**: `object`

Defined in: main.ts:180768

sentiment connotations
contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment
possible connotations: "anger", "happiness", "love", "sadness", "share", "fun"

#### Index Signature

\[`key`: `string`\]: `number`

***

### text\_categories?

> `optional` **text\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

Defined in: main.ts:180776

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

***

### top\_domains?

> `optional` **top\_domains**: [`TopDomainInfo`](../classes/TopDomainInfo.md)[]

Defined in: main.ts:180764

top domains citing the target keyword
contains objects with top domains citing the target keyword and citation count per each domain

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:180758

total number of results in our database relevant to your request

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:180754

type of element
