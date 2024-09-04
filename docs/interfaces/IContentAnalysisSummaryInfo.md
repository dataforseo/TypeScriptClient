[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IContentAnalysisSummaryInfo

# Interface: IContentAnalysisSummaryInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### connotation\_types?

> `optional` **connotation\_types**: `object`

connotation types
contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type
possible sentiment connotation types: positive, negative, neutral

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:171212

***

### countries?

> `optional` **countries**: `object`

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:171227

***

### languages?

> `optional` **languages**: `object`

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:171231

***

### page\_categories?

> `optional` **page\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Defined in

main.ts:171220

***

### page\_types?

> `optional` **page\_types**: `object`

page types
contains page types and citation count per each page type

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:171223

***

### rank?

> `optional` **rank**: `number`

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword

#### Defined in

main.ts:171201

***

### sentiment\_connotations?

> `optional` **sentiment\_connotations**: `object`

sentiment connotations
contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment
possible sentiment connotations: anger, happiness, love, sadness, share, fun

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:171208

***

### text\_categories?

> `optional` **text\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Defined in

main.ts:171216

***

### top\_domains?

> `optional` **top\_domains**: [`TopDomainInfo`](../classes/TopDomainInfo.md)[]

top domains citing the target keyword
contains objects with top domains citing the target keword and citation count per each domain

#### Defined in

main.ts:171204

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:171198

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:171196
