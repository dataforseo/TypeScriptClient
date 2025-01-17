[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentAnalysisSummaryInfo

# Interface: IContentAnalysisSummaryInfo

Defined in: main.ts:178814

## Indexable

\[`key`: `string`\]: `any`

## Properties

### connotation\_types?

> `optional` **connotation\_types**: `object`

Defined in: main.ts:178832

connotation types
contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type
possible sentiment connotation types: positive, negative, neutral

#### Index Signature

\[`key`: `string`\]: `number`

***

### countries?

> `optional` **countries**: `object`

Defined in: main.ts:178847

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index Signature

\[`key`: `string`\]: `number`

***

### languages?

> `optional` **languages**: `object`

Defined in: main.ts:178851

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index Signature

\[`key`: `string`\]: `number`

***

### page\_categories?

> `optional` **page\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

Defined in: main.ts:178840

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

***

### page\_types?

> `optional` **page\_types**: `object`

Defined in: main.ts:178843

page types
contains page types and citation count per each page type

#### Index Signature

\[`key`: `string`\]: `number`

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:178821

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword

***

### sentiment\_connotations?

> `optional` **sentiment\_connotations**: `object`

Defined in: main.ts:178828

sentiment connotations
contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment
possible sentiment connotations: anger, happiness, love, sadness, share, fun

#### Index Signature

\[`key`: `string`\]: `number`

***

### text\_categories?

> `optional` **text\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

Defined in: main.ts:178836

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

***

### top\_domains?

> `optional` **top\_domains**: [`TopDomainInfo`](../classes/TopDomainInfo.md)[]

Defined in: main.ts:178824

top domains citing the target keyword
contains objects with top domains citing the target keword and citation count per each domain

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:178818

total amount of results in our database relevant to your request

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:178816

type of element
