**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AnalysisContentInfo

# Class: AnalysisContentInfo

## Implements

- [`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AnalysisContentInfo(data)

> **new AnalysisContentInfo**(`data`?): [`AnalysisContentInfo`](AnalysisContentInfo.md)

#### Parameters

• **data?**: [`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md)

#### Returns

[`AnalysisContentInfo`](AnalysisContentInfo.md)

#### Source

main.ts:164286

## Properties

### author?

> **`optional`** **author**: `string`

author of the content

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`author`](../interfaces/IAnalysisContentInfo.md#author)

#### Source

main.ts:164236

***

### connotation\_types?

> **`optional`** **connotation\_types**: `Object`

connotation types
contains types of sentiments (sentiment polarity) related to the given citation and probability index per each sentiment type
possible sentiment connotation types: positive, negative, neutral

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`connotation_types`](../interfaces/IAnalysisContentInfo.md#connotation_types)

#### Source

main.ts:164256

***

### content\_quality\_score?

> **`optional`** **content\_quality\_score**: `number`

content quality score
this value is calculated based on the number of words, sentences and characters the content contains

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`content_quality_score`](../interfaces/IAnalysisContentInfo.md#content_quality_score)

#### Source

main.ts:164267

***

### content\_type?

> **`optional`** **content\_type**: `string`

type of content
example:
page_content, comment

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`content_type`](../interfaces/IAnalysisContentInfo.md#content_type)

#### Source

main.ts:164225

***

### date\_published?

> **`optional`** **date\_published**: `string`

date and time when the content was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`date_published`](../interfaces/IAnalysisContentInfo.md#date_published)

#### Source

main.ts:164264

***

### group\_date?

> **`optional`** **group\_date**: `string`

citation group date and time
indicates content publication date or date and time when our crawler visited the page for the first time;
this field can be used to group citations by date and display citation trends;
date and time are provided in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`group_date`](../interfaces/IAnalysisContentInfo.md#group_date)

#### Source

main.ts:164282

***

### highlighted\_text?

> **`optional`** **highlighted\_text**: `string`

highlighted text from the snippet

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`highlighted_text`](../interfaces/IAnalysisContentInfo.md#highlighted_text)

#### Source

main.ts:164245

***

### language?

> **`optional`** **language**: `string`

content language
to obtain a full list of available languages, refer to the Languages endpoint

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`language`](../interfaces/IAnalysisContentInfo.md#language)

#### Source

main.ts:164248

***

### level?

> **`optional`** **level**: `number`

title heading level
indicates h-tag level from 1 (top) to 6 (bottom)

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`level`](../interfaces/IAnalysisContentInfo.md#level)

#### Source

main.ts:164234

***

### main\_title?

> **`optional`** **main\_title**: `string`

page title

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`main_title`](../interfaces/IAnalysisContentInfo.md#main_title)

#### Source

main.ts:164229

***

### previous\_title?

> **`optional`** **previous\_title**: `string`

title of the previous content block

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`previous_title`](../interfaces/IAnalysisContentInfo.md#previous_title)

#### Source

main.ts:164231

***

### rating?

> **`optional`** **rating**: [`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

content rating
rating related to content_info

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`rating`](../interfaces/IAnalysisContentInfo.md#rating)

#### Source

main.ts:164275

***

### semantic\_location?

> **`optional`** **semantic\_location**: `string`

semantic location
indicates semantic element in HTML where the target keyword citation is located
example:
article, header

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`semantic_location`](../interfaces/IAnalysisContentInfo.md#semantic_location)

#### Source

main.ts:164272

***

### sentiment\_connotations?

> **`optional`** **sentiment\_connotations**: `Object`

sentiment connotations
contains sentiments (emotional reactions) related to the given citation and probability index per each sentiment
possible sentiment connotations: anger, happiness, love, sadness, share, fun

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`sentiment_connotations`](../interfaces/IAnalysisContentInfo.md#sentiment_connotations)

#### Source

main.ts:164252

***

### snippet?

> **`optional`** **snippet**: `string`

content snippet

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`snippet`](../interfaces/IAnalysisContentInfo.md#snippet)

#### Source

main.ts:164238

***

### snippet\_length?

> **`optional`** **snippet\_length**: `number`

character length of the snippet

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`snippet_length`](../interfaces/IAnalysisContentInfo.md#snippet_length)

#### Source

main.ts:164240

***

### social\_metrics?

> **`optional`** **social\_metrics**: [`SocialMetricsInfo`](SocialMetricsInfo.md)[]

social media engagement metrics
data on social media interactions associated with the content based on website embeds developed and supported by social media platforms

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`social_metrics`](../interfaces/IAnalysisContentInfo.md#social_metrics)

#### Source

main.ts:164243

***

### text\_category?

> **`optional`** **text\_category**: `number`[]

text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`text_category`](../interfaces/IAnalysisContentInfo.md#text_category)

#### Source

main.ts:164259

***

### title?

> **`optional`** **title**: `string`

title of the result

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`title`](../interfaces/IAnalysisContentInfo.md#title)

#### Source

main.ts:164227

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:164295

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:164350

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AnalysisContentInfo`](AnalysisContentInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AnalysisContentInfo`](AnalysisContentInfo.md)

#### Source

main.ts:164343
