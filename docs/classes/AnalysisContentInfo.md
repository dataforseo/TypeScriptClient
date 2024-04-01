[Documentation](../README.md) / [Exports](../modules.md) / AnalysisContentInfo

# Class: AnalysisContentInfo

## Implements

- [`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AnalysisContentInfo.md#constructor)

### Properties

- [author](AnalysisContentInfo.md#author)
- [connotation\_types](AnalysisContentInfo.md#connotation_types)
- [content\_quality\_score](AnalysisContentInfo.md#content_quality_score)
- [content\_type](AnalysisContentInfo.md#content_type)
- [date\_published](AnalysisContentInfo.md#date_published)
- [group\_date](AnalysisContentInfo.md#group_date)
- [highlighted\_text](AnalysisContentInfo.md#highlighted_text)
- [language](AnalysisContentInfo.md#language)
- [level](AnalysisContentInfo.md#level)
- [main\_title](AnalysisContentInfo.md#main_title)
- [previous\_title](AnalysisContentInfo.md#previous_title)
- [rating](AnalysisContentInfo.md#rating)
- [semantic\_location](AnalysisContentInfo.md#semantic_location)
- [sentiment\_connotations](AnalysisContentInfo.md#sentiment_connotations)
- [snippet](AnalysisContentInfo.md#snippet)
- [snippet\_length](AnalysisContentInfo.md#snippet_length)
- [social\_metrics](AnalysisContentInfo.md#social_metrics)
- [text\_category](AnalysisContentInfo.md#text_category)
- [title](AnalysisContentInfo.md#title)

### Methods

- [init](AnalysisContentInfo.md#init)
- [toJSON](AnalysisContentInfo.md#tojson)
- [fromJS](AnalysisContentInfo.md#fromjs)

## Constructors

### constructor

• **new AnalysisContentInfo**(`data?`): [`AnalysisContentInfo`](AnalysisContentInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md) |

#### Returns

[`AnalysisContentInfo`](AnalysisContentInfo.md)

#### Defined in

main.ts:161891

## Properties

### author

• `Optional` **author**: `string`

author of the content

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[author](../interfaces/IAnalysisContentInfo.md#author)

#### Defined in

main.ts:161841

___

### connotation\_types

• `Optional` **connotation\_types**: `Object`

connotation types
contains types of sentiments (sentiment polarity) related to the given citation and probability index per each sentiment type
possible sentiment connotation types: positive, negative, neutral

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[connotation_types](../interfaces/IAnalysisContentInfo.md#connotation_types)

#### Defined in

main.ts:161861

___

### content\_quality\_score

• `Optional` **content\_quality\_score**: `number`

content quality score
this value is calculated based on the number of words, sentences and characters the content contains

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[content_quality_score](../interfaces/IAnalysisContentInfo.md#content_quality_score)

#### Defined in

main.ts:161872

___

### content\_type

• `Optional` **content\_type**: `string`

type of content
example:
page_content, comment

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[content_type](../interfaces/IAnalysisContentInfo.md#content_type)

#### Defined in

main.ts:161830

___

### date\_published

• `Optional` **date\_published**: `string`

date and time when the content was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[date_published](../interfaces/IAnalysisContentInfo.md#date_published)

#### Defined in

main.ts:161869

___

### group\_date

• `Optional` **group\_date**: `string`

citation group date and time
indicates content publication date or date and time when our crawler visited the page for the first time;
this field can be used to group citations by date and display citation trends;
date and time are provided in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[group_date](../interfaces/IAnalysisContentInfo.md#group_date)

#### Defined in

main.ts:161887

___

### highlighted\_text

• `Optional` **highlighted\_text**: `string`

highlighted text from the snippet

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[highlighted_text](../interfaces/IAnalysisContentInfo.md#highlighted_text)

#### Defined in

main.ts:161850

___

### language

• `Optional` **language**: `string`

content language
to obtain a full list of available languages, refer to the Languages endpoint

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[language](../interfaces/IAnalysisContentInfo.md#language)

#### Defined in

main.ts:161853

___

### level

• `Optional` **level**: `number`

title heading level
indicates h-tag level from 1 (top) to 6 (bottom)

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[level](../interfaces/IAnalysisContentInfo.md#level)

#### Defined in

main.ts:161839

___

### main\_title

• `Optional` **main\_title**: `string`

page title

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[main_title](../interfaces/IAnalysisContentInfo.md#main_title)

#### Defined in

main.ts:161834

___

### previous\_title

• `Optional` **previous\_title**: `string`

title of the previous content block

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[previous_title](../interfaces/IAnalysisContentInfo.md#previous_title)

#### Defined in

main.ts:161836

___

### rating

• `Optional` **rating**: [`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

content rating
rating related to content_info

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[rating](../interfaces/IAnalysisContentInfo.md#rating)

#### Defined in

main.ts:161880

___

### semantic\_location

• `Optional` **semantic\_location**: `string`

semantic location
indicates semantic element in HTML where the target keyword citation is located
example:
article, header

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[semantic_location](../interfaces/IAnalysisContentInfo.md#semantic_location)

#### Defined in

main.ts:161877

___

### sentiment\_connotations

• `Optional` **sentiment\_connotations**: `Object`

sentiment connotations
contains sentiments (emotional reactions) related to the given citation and probability index per each sentiment
possible sentiment connotations: anger, happiness, love, sadness, share, fun

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[sentiment_connotations](../interfaces/IAnalysisContentInfo.md#sentiment_connotations)

#### Defined in

main.ts:161857

___

### snippet

• `Optional` **snippet**: `string`

content snippet

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[snippet](../interfaces/IAnalysisContentInfo.md#snippet)

#### Defined in

main.ts:161843

___

### snippet\_length

• `Optional` **snippet\_length**: `number`

character length of the snippet

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[snippet_length](../interfaces/IAnalysisContentInfo.md#snippet_length)

#### Defined in

main.ts:161845

___

### social\_metrics

• `Optional` **social\_metrics**: [`SocialMetricsInfo`](SocialMetricsInfo.md)[]

social media engagement metrics
data on social media interactions associated with the content based on website embeds developed and supported by social media platforms

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[social_metrics](../interfaces/IAnalysisContentInfo.md#social_metrics)

#### Defined in

main.ts:161848

___

### text\_category

• `Optional` **text\_category**: `number`[]

text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[text_category](../interfaces/IAnalysisContentInfo.md#text_category)

#### Defined in

main.ts:161864

___

### title

• `Optional` **title**: `string`

title of the result

#### Implementation of

[IAnalysisContentInfo](../interfaces/IAnalysisContentInfo.md).[title](../interfaces/IAnalysisContentInfo.md#title)

#### Defined in

main.ts:161832

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:161900

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:161955

___

### fromJS

▸ **fromJS**(`data`): [`AnalysisContentInfo`](AnalysisContentInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AnalysisContentInfo`](AnalysisContentInfo.md)

#### Defined in

main.ts:161948
