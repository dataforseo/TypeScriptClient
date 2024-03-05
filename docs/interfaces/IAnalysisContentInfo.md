[dataforseo-client](../README.md) / [Exports](../modules.md) / IAnalysisContentInfo

# Interface: IAnalysisContentInfo

## Implemented by

- [`AnalysisContentInfo`](../classes/AnalysisContentInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [author](IAnalysisContentInfo.md#author)
- [connotation\_types](IAnalysisContentInfo.md#connotation_types)
- [content\_quality\_score](IAnalysisContentInfo.md#content_quality_score)
- [content\_type](IAnalysisContentInfo.md#content_type)
- [date\_published](IAnalysisContentInfo.md#date_published)
- [group\_date](IAnalysisContentInfo.md#group_date)
- [highlighted\_text](IAnalysisContentInfo.md#highlighted_text)
- [language](IAnalysisContentInfo.md#language)
- [level](IAnalysisContentInfo.md#level)
- [main\_title](IAnalysisContentInfo.md#main_title)
- [previous\_title](IAnalysisContentInfo.md#previous_title)
- [rating](IAnalysisContentInfo.md#rating)
- [semantic\_location](IAnalysisContentInfo.md#semantic_location)
- [sentiment\_connotations](IAnalysisContentInfo.md#sentiment_connotations)
- [snippet](IAnalysisContentInfo.md#snippet)
- [snippet\_length](IAnalysisContentInfo.md#snippet_length)
- [social\_metrics](IAnalysisContentInfo.md#social_metrics)
- [text\_category](IAnalysisContentInfo.md#text_category)
- [title](IAnalysisContentInfo.md#title)

## Properties

### author

• `Optional` **author**: `string`

author of the content

#### Defined in

[main.ts:156592](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156592)

___

### connotation\_types

• `Optional` **connotation\_types**: `Object`

connotation types
contains types of sentiments (sentiment polarity) related to the given citation and probability index per each sentiment type
possible sentiment connotation types: positive, negative, neutral

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:156612](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156612)

___

### content\_quality\_score

• `Optional` **content\_quality\_score**: `number`

content quality score
this value is calculated based on the number of words, sentences and characters the content contains

#### Defined in

[main.ts:156623](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156623)

___

### content\_type

• `Optional` **content\_type**: `string`

type of content
example:
page_content, comment

#### Defined in

[main.ts:156581](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156581)

___

### date\_published

• `Optional` **date\_published**: `string`

date and time when the content was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

[main.ts:156620](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156620)

___

### group\_date

• `Optional` **group\_date**: `string`

citation group date and time
indicates content publication date or date and time when our crawler visited the page for the first time;
this field can be used to group citations by date and display citation trends;
date and time are provided in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

[main.ts:156638](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156638)

___

### highlighted\_text

• `Optional` **highlighted\_text**: `string`

highlighted text from the snippet

#### Defined in

[main.ts:156601](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156601)

___

### language

• `Optional` **language**: `string`

content language
to obtain a full list of available languages, refer to the Languages endpoint

#### Defined in

[main.ts:156604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156604)

___

### level

• `Optional` **level**: `number`

title heading level
indicates h-tag level from 1 (top) to 6 (bottom)

#### Defined in

[main.ts:156590](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156590)

___

### main\_title

• `Optional` **main\_title**: `string`

page title

#### Defined in

[main.ts:156585](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156585)

___

### previous\_title

• `Optional` **previous\_title**: `string`

title of the previous content block

#### Defined in

[main.ts:156587](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156587)

___

### rating

• `Optional` **rating**: [`ContentAnalysisRatingInfo`](../classes/ContentAnalysisRatingInfo.md)

content rating
rating related to content_info

#### Defined in

[main.ts:156631](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156631)

___

### semantic\_location

• `Optional` **semantic\_location**: `string`

semantic location
indicates semantic element in HTML where the target keyword citation is located
example:
article, header

#### Defined in

[main.ts:156628](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156628)

___

### sentiment\_connotations

• `Optional` **sentiment\_connotations**: `Object`

sentiment connotations
contains sentiments (emotional reactions) related to the given citation and probability index per each sentiment
possible sentiment connotations: anger, happiness, love, sadness, share, fun

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:156608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156608)

___

### snippet

• `Optional` **snippet**: `string`

content snippet

#### Defined in

[main.ts:156594](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156594)

___

### snippet\_length

• `Optional` **snippet\_length**: `number`

character length of the snippet

#### Defined in

[main.ts:156596](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156596)

___

### social\_metrics

• `Optional` **social\_metrics**: [`SocialMetricsInfo`](../classes/SocialMetricsInfo.md)[]

social media engagement metrics
data on social media interactions associated with the content based on website embeds developed and supported by social media platforms

#### Defined in

[main.ts:156599](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156599)

___

### text\_category

• `Optional` **text\_category**: `number`[]

text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Defined in

[main.ts:156615](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156615)

___

### title

• `Optional` **title**: `string`

title of the result

#### Defined in

[main.ts:156583](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156583)
