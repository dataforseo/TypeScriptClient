[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IContentAnalysisPhraseTrendsLiveResultInfo

# Interface: IContentAnalysisPhraseTrendsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### connotation\_types?

> `optional` **connotation\_types**: `object`

connotation types
contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type
possible connotation types: "positive", "negative", "neutral"

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:172790

***

### countries?

> `optional` **countries**: `object`

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:172805

***

### date?

> `optional` **date**: `string`

date for which the data is provided

#### Defined in

main.ts:172774

***

### languages?

> `optional` **languages**: `object`

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:172809

***

### page\_categories?

> `optional` **page\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Defined in

main.ts:172798

***

### page\_types?

> `optional` **page\_types**: `object`

page types
contains page types and citation count per each page type

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:172801

***

### rank?

> `optional` **rank**: `number`

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword for the given date

#### Defined in

main.ts:172779

***

### sentiment\_connotations?

> `optional` **sentiment\_connotations**: `object`

sentiment connotations
contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment
possible connotations: "anger", "happiness", "love", "sadness", "share", "fun"

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:172786

***

### text\_categories?

> `optional` **text\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Defined in

main.ts:172794

***

### top\_domains?

> `optional` **top\_domains**: [`TopDomainInfo`](../classes/TopDomainInfo.md)[]

top domains citing the target keyword
contains objects with top domains citing the target keyword and citation count per each domain

#### Defined in

main.ts:172782

***

### total\_count?

> `optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Defined in

main.ts:172776

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:172772
