[Documentation](../README.md) / [Exports](../modules.md) / IContentAnalysisSummaryInfo

# Interface: IContentAnalysisSummaryInfo

## Implemented by

- [`ContentAnalysisSummaryInfo`](../classes/ContentAnalysisSummaryInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [connotation\_types](IContentAnalysisSummaryInfo.md#connotation_types)
- [countries](IContentAnalysisSummaryInfo.md#countries)
- [languages](IContentAnalysisSummaryInfo.md#languages)
- [page\_categories](IContentAnalysisSummaryInfo.md#page_categories)
- [page\_types](IContentAnalysisSummaryInfo.md#page_types)
- [rank](IContentAnalysisSummaryInfo.md#rank)
- [sentiment\_connotations](IContentAnalysisSummaryInfo.md#sentiment_connotations)
- [text\_categories](IContentAnalysisSummaryInfo.md#text_categories)
- [top\_domains](IContentAnalysisSummaryInfo.md#top_domains)
- [total\_count](IContentAnalysisSummaryInfo.md#total_count)
- [type](IContentAnalysisSummaryInfo.md#type)

## Properties

### connotation\_types

• `Optional` **connotation\_types**: `Object`

connotation types
contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type
possible sentiment connotation types: positive, negative, neutral

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:162902

___

### countries

• `Optional` **countries**: `Object`

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:162917

___

### languages

• `Optional` **languages**: `Object`

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:162921

___

### page\_categories

• `Optional` **page\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Defined in

main.ts:162910

___

### page\_types

• `Optional` **page\_types**: `Object`

page types
contains page types and citation count per each page type

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:162913

___

### rank

• `Optional` **rank**: `number`

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword

#### Defined in

main.ts:162891

___

### sentiment\_connotations

• `Optional` **sentiment\_connotations**: `Object`

sentiment connotations
contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment
possible sentiment connotations: anger, happiness, love, sadness, share, fun

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:162898

___

### text\_categories

• `Optional` **text\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Defined in

main.ts:162906

___

### top\_domains

• `Optional` **top\_domains**: [`TopDomainInfo`](../classes/TopDomainInfo.md)[]

top domains citing the target keyword
contains objects with top domains citing the target keword and citation count per each domain

#### Defined in

main.ts:162894

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:162888

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:162886
