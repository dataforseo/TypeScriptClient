[**Documentation**](../README.md)

***

[Documentation](../README.md) / AnalysisContentInfo

# Class: AnalysisContentInfo

Defined in: main.ts:177748

## Implements

- [`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AnalysisContentInfo()

> **new AnalysisContentInfo**(`data`?): [`AnalysisContentInfo`](AnalysisContentInfo.md)

Defined in: main.ts:177813

#### Parameters

##### data?

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md)

#### Returns

[`AnalysisContentInfo`](AnalysisContentInfo.md)

## Properties

### author?

> `optional` **author**: `string`

Defined in: main.ts:177763

author of the content

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`author`](../interfaces/IAnalysisContentInfo.md#author)

***

### connotation\_types?

> `optional` **connotation\_types**: `object`

Defined in: main.ts:177783

connotation types
contains types of sentiments (sentiment polarity) related to the given citation and probability index per each sentiment type
possible sentiment connotation types: positive, negative, neutral

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`connotation_types`](../interfaces/IAnalysisContentInfo.md#connotation_types)

***

### content\_quality\_score?

> `optional` **content\_quality\_score**: `number`

Defined in: main.ts:177794

content quality score
this value is calculated based on the number of words, sentences and characters the content contains

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`content_quality_score`](../interfaces/IAnalysisContentInfo.md#content_quality_score)

***

### content\_type?

> `optional` **content\_type**: `string`

Defined in: main.ts:177752

type of content
example:
page_content, comment

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`content_type`](../interfaces/IAnalysisContentInfo.md#content_type)

***

### date\_published?

> `optional` **date\_published**: `string`

Defined in: main.ts:177791

date and time when the content was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`date_published`](../interfaces/IAnalysisContentInfo.md#date_published)

***

### group\_date?

> `optional` **group\_date**: `string`

Defined in: main.ts:177809

citation group date and time
indicates content publication date or date and time when our crawler visited the page for the first time;
this field can be used to group citations by date and display citation trends;
date and time are provided in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`group_date`](../interfaces/IAnalysisContentInfo.md#group_date)

***

### highlighted\_text?

> `optional` **highlighted\_text**: `string`

Defined in: main.ts:177772

highlighted text from the snippet

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`highlighted_text`](../interfaces/IAnalysisContentInfo.md#highlighted_text)

***

### language?

> `optional` **language**: `string`

Defined in: main.ts:177775

content language
to obtain a full list of available languages, refer to the Languages endpoint

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`language`](../interfaces/IAnalysisContentInfo.md#language)

***

### level?

> `optional` **level**: `number`

Defined in: main.ts:177761

title heading level
indicates h-tag level from 1 (top) to 6 (bottom)

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`level`](../interfaces/IAnalysisContentInfo.md#level)

***

### main\_title?

> `optional` **main\_title**: `string`

Defined in: main.ts:177756

page title

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`main_title`](../interfaces/IAnalysisContentInfo.md#main_title)

***

### previous\_title?

> `optional` **previous\_title**: `string`

Defined in: main.ts:177758

title of the previous content block

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`previous_title`](../interfaces/IAnalysisContentInfo.md#previous_title)

***

### rating?

> `optional` **rating**: [`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

Defined in: main.ts:177802

content rating
rating related to content_info

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`rating`](../interfaces/IAnalysisContentInfo.md#rating)

***

### semantic\_location?

> `optional` **semantic\_location**: `string`

Defined in: main.ts:177799

semantic location
indicates semantic element in HTML where the target keyword citation is located
example:
article, header

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`semantic_location`](../interfaces/IAnalysisContentInfo.md#semantic_location)

***

### sentiment\_connotations?

> `optional` **sentiment\_connotations**: `object`

Defined in: main.ts:177779

sentiment connotations
contains sentiments (emotional reactions) related to the given citation and probability index per each sentiment
possible sentiment connotations: anger, happiness, love, sadness, share, fun

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`sentiment_connotations`](../interfaces/IAnalysisContentInfo.md#sentiment_connotations)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:177765

content snippet

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`snippet`](../interfaces/IAnalysisContentInfo.md#snippet)

***

### snippet\_length?

> `optional` **snippet\_length**: `number`

Defined in: main.ts:177767

character length of the snippet

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`snippet_length`](../interfaces/IAnalysisContentInfo.md#snippet_length)

***

### social\_metrics?

> `optional` **social\_metrics**: [`SocialMetricsInfo`](SocialMetricsInfo.md)[]

Defined in: main.ts:177770

social media engagement metrics
data on social media interactions associated with the content based on website embeds developed and supported by social media platforms

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`social_metrics`](../interfaces/IAnalysisContentInfo.md#social_metrics)

***

### text\_category?

> `optional` **text\_category**: `number`[]

Defined in: main.ts:177786

text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`text_category`](../interfaces/IAnalysisContentInfo.md#text_category)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:177754

title of the result

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`title`](../interfaces/IAnalysisContentInfo.md#title)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:177822

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:177877

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AnalysisContentInfo`](AnalysisContentInfo.md)

Defined in: main.ts:177870

#### Parameters

##### data

`any`

#### Returns

[`AnalysisContentInfo`](AnalysisContentInfo.md)
