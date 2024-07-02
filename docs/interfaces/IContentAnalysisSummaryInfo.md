**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IContentAnalysisSummaryInfo

# Interface: IContentAnalysisSummaryInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### connotation\_types?

> **`optional`** **connotation\_types**: `Object`

connotation types
contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type
possible sentiment connotation types: positive, negative, neutral

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:166687

***

### countries?

> **`optional`** **countries**: `Object`

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:166702

***

### languages?

> **`optional`** **languages**: `Object`

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:166706

***

### page\_categories?

> **`optional`** **page\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Source

main.ts:166695

***

### page\_types?

> **`optional`** **page\_types**: `Object`

page types
contains page types and citation count per each page type

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:166698

***

### rank?

> **`optional`** **rank**: `number`

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword

#### Source

main.ts:166676

***

### sentiment\_connotations?

> **`optional`** **sentiment\_connotations**: `Object`

sentiment connotations
contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment
possible sentiment connotations: anger, happiness, love, sadness, share, fun

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:166683

***

### text\_categories?

> **`optional`** **text\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Source

main.ts:166691

***

### top\_domains?

> **`optional`** **top\_domains**: [`TopDomainInfo`](../classes/TopDomainInfo.md)[]

top domains citing the target keyword
contains objects with top domains citing the target keword and citation count per each domain

#### Source

main.ts:166679

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Source

main.ts:166673

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:166671
