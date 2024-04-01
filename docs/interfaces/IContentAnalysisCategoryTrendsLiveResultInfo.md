[Documentation](../README.md) / [Exports](../modules.md) / IContentAnalysisCategoryTrendsLiveResultInfo

# Interface: IContentAnalysisCategoryTrendsLiveResultInfo

## Implemented by

- [`ContentAnalysisCategoryTrendsLiveResultInfo`](../classes/ContentAnalysisCategoryTrendsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [connotation\_types](IContentAnalysisCategoryTrendsLiveResultInfo.md#connotation_types)
- [countries](IContentAnalysisCategoryTrendsLiveResultInfo.md#countries)
- [date](IContentAnalysisCategoryTrendsLiveResultInfo.md#date)
- [languages](IContentAnalysisCategoryTrendsLiveResultInfo.md#languages)
- [page\_categories](IContentAnalysisCategoryTrendsLiveResultInfo.md#page_categories)
- [page\_types](IContentAnalysisCategoryTrendsLiveResultInfo.md#page_types)
- [rank](IContentAnalysisCategoryTrendsLiveResultInfo.md#rank)
- [sentiment\_connotations](IContentAnalysisCategoryTrendsLiveResultInfo.md#sentiment_connotations)
- [text\_categories](IContentAnalysisCategoryTrendsLiveResultInfo.md#text_categories)
- [top\_domains](IContentAnalysisCategoryTrendsLiveResultInfo.md#top_domains)
- [total\_count](IContentAnalysisCategoryTrendsLiveResultInfo.md#total_count)
- [type](IContentAnalysisCategoryTrendsLiveResultInfo.md#type)

## Properties

### connotation\_types

• `Optional` **connotation\_types**: `Object`

connotation types
contains types of sentiments (sentiment polarity) related to the category citation and citation count per each sentiment type
possible connotation types: "positive", "negative", "neutral"

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:165036

___

### countries

• `Optional` **countries**: `Object`

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:165051

___

### date

• `Optional` **date**: `string`

date for which the data is provided

#### Defined in

main.ts:165020

___

### languages

• `Optional` **languages**: `Object`

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:165055

___

### page\_categories

• `Optional` **page\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Defined in

main.ts:165044

___

### page\_types

• `Optional` **page\_types**: `Object`

page types
contains page types and citation count per each page type

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:165047

___

### rank

• `Optional` **rank**: `number`

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword for the given date

#### Defined in

main.ts:165025

___

### sentiment\_connotations

• `Optional` **sentiment\_connotations**: `Object`

sentiment connotations
contains sentiments (emotional reactions) related to the target category citation and the number of citations per each sentiment
possible connotations: "anger", "fear", "happiness", "love", "sadness", "share", "neutral", "fun"

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:165032

___

### text\_categories

• `Optional` **text\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Defined in

main.ts:165040

___

### top\_domains

• `Optional` **top\_domains**: [`TopDomainInfo`](../classes/TopDomainInfo.md)[]

top domains citing the target keyword
contains objects with top domains citing the target category and citation count per each domain

#### Defined in

main.ts:165028

___

### total\_count

• `Optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Defined in

main.ts:165022

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:165018
