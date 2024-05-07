**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IContentAnalysisPhraseTrendsLiveResultInfo

# Interface: IContentAnalysisPhraseTrendsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### connotation\_types?

> **`optional`** **connotation\_types**: `Object`

connotation types
contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type
possible connotation types: "positive", "negative", "neutral"

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:166440

***

### countries?

> **`optional`** **countries**: `Object`

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:166455

***

### date?

> **`optional`** **date**: `string`

date for which the data is provided

#### Source

main.ts:166424

***

### languages?

> **`optional`** **languages**: `Object`

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:166459

***

### page\_categories?

> **`optional`** **page\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Source

main.ts:166448

***

### page\_types?

> **`optional`** **page\_types**: `Object`

page types
contains page types and citation count per each page type

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:166451

***

### rank?

> **`optional`** **rank**: `number`

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword for the given date

#### Source

main.ts:166429

***

### sentiment\_connotations?

> **`optional`** **sentiment\_connotations**: `Object`

sentiment connotations
contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment
possible connotations: "anger", "happiness", "love", "sadness", "share", "fun"

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:166436

***

### text\_categories?

> **`optional`** **text\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Source

main.ts:166444

***

### top\_domains?

> **`optional`** **top\_domains**: [`TopDomainInfo`](../classes/TopDomainInfo.md)[]

top domains citing the target keyword
contains objects with top domains citing the target keyword and citation count per each domain

#### Source

main.ts:166432

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of results in our database relevant to your request

#### Source

main.ts:166426

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:166422
