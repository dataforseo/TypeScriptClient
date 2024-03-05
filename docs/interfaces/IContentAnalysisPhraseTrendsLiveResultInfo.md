[dataforseo-client](../README.md) / [Exports](../modules.md) / IContentAnalysisPhraseTrendsLiveResultInfo

# Interface: IContentAnalysisPhraseTrendsLiveResultInfo

## Implemented by

- [`ContentAnalysisPhraseTrendsLiveResultInfo`](../classes/ContentAnalysisPhraseTrendsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [connotation\_types](IContentAnalysisPhraseTrendsLiveResultInfo.md#connotation_types)
- [countries](IContentAnalysisPhraseTrendsLiveResultInfo.md#countries)
- [date](IContentAnalysisPhraseTrendsLiveResultInfo.md#date)
- [languages](IContentAnalysisPhraseTrendsLiveResultInfo.md#languages)
- [page\_categories](IContentAnalysisPhraseTrendsLiveResultInfo.md#page_categories)
- [page\_types](IContentAnalysisPhraseTrendsLiveResultInfo.md#page_types)
- [rank](IContentAnalysisPhraseTrendsLiveResultInfo.md#rank)
- [sentiment\_connotations](IContentAnalysisPhraseTrendsLiveResultInfo.md#sentiment_connotations)
- [text\_categories](IContentAnalysisPhraseTrendsLiveResultInfo.md#text_categories)
- [top\_domains](IContentAnalysisPhraseTrendsLiveResultInfo.md#top_domains)
- [total\_count](IContentAnalysisPhraseTrendsLiveResultInfo.md#total_count)
- [type](IContentAnalysisPhraseTrendsLiveResultInfo.md#type)

## Properties

### connotation\_types

• `Optional` **connotation\_types**: `Object`

connotation types
contains types of sentiments (sentiment polarity) related to the keyword citation and citation count per each sentiment type
possible connotation types: "positive", "negative", "neutral"

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:159053](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159053)

___

### countries

• `Optional` **countries**: `Object`

countries
contains countries and citation count in each country
to obtain a full list of available countries, refer to the Locations endpoint

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:159068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159068)

___

### date

• `Optional` **date**: `string`

date for which the data is provided

#### Defined in

[main.ts:159037](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159037)

___

### languages

• `Optional` **languages**: `Object`

languages
contains languages and citation count in each language
to obtain a full list of available languages, refer to the Languages endpoint

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:159072](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159072)

___

### page\_categories

• `Optional` **page\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

page categories
contains objects with page categories and citation count in each page category
to obtain a full list of available categories, refer to the Categories endpoint

#### Defined in

[main.ts:159061](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159061)

___

### page\_types

• `Optional` **page\_types**: `Object`

page types
contains page types and citation count per each page type

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:159064](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159064)

___

### rank

• `Optional` **rank**: `number`

rank of all URLs citing the keyword
normalized sum of ranks of all URLs citing the target keyword for the given date

#### Defined in

[main.ts:159042](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159042)

___

### sentiment\_connotations

• `Optional` **sentiment\_connotations**: `Object`

sentiment connotations
contains sentiments (emotional reactions) related to the target keyword citation and the number of citations per each sentiment
possible connotations: "anger", "happiness", "love", "sadness", "share", "fun"

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:159049](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159049)

___

### text\_categories

• `Optional` **text\_categories**: [`ContentAnalysisCategoriesInfo`](../classes/ContentAnalysisCategoriesInfo.md)[]

text categories
contains objects with text categories and citation count in each text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Defined in

[main.ts:159057](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159057)

___

### top\_domains

• `Optional` **top\_domains**: [`TopDomainInfo`](../classes/TopDomainInfo.md)[]

top domains citing the target keyword
contains objects with top domains citing the target keyword and citation count per each domain

#### Defined in

[main.ts:159045](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159045)

___

### total\_count

• `Optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Defined in

[main.ts:159039](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159039)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:159035](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159035)
