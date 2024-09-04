[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AnalysisContentInfo

# Class: AnalysisContentInfo

## Implements

- [`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AnalysisContentInfo()

> **new AnalysisContentInfo**(`data`?): [`AnalysisContentInfo`](AnalysisContentInfo.md)

#### Parameters

• **data?**: [`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md)

#### Returns

[`AnalysisContentInfo`](AnalysisContentInfo.md)

#### Defined in

main.ts:166123

## Properties

### author?

> `optional` **author**: `string`

author of the content

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`author`](../interfaces/IAnalysisContentInfo.md#author)

#### Defined in

main.ts:166073

***

### connotation\_types?

> `optional` **connotation\_types**: `object`

connotation types
contains types of sentiments (sentiment polarity) related to the given citation and probability index per each sentiment type
possible sentiment connotation types: positive, negative, neutral

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`connotation_types`](../interfaces/IAnalysisContentInfo.md#connotation_types)

#### Defined in

main.ts:166093

***

### content\_quality\_score?

> `optional` **content\_quality\_score**: `number`

content quality score
this value is calculated based on the number of words, sentences and characters the content contains

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`content_quality_score`](../interfaces/IAnalysisContentInfo.md#content_quality_score)

#### Defined in

main.ts:166104

***

### content\_type?

> `optional` **content\_type**: `string`

type of content
example:
page_content, comment

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`content_type`](../interfaces/IAnalysisContentInfo.md#content_type)

#### Defined in

main.ts:166062

***

### date\_published?

> `optional` **date\_published**: `string`

date and time when the content was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`date_published`](../interfaces/IAnalysisContentInfo.md#date_published)

#### Defined in

main.ts:166101

***

### group\_date?

> `optional` **group\_date**: `string`

citation group date and time
indicates content publication date or date and time when our crawler visited the page for the first time;
this field can be used to group citations by date and display citation trends;
date and time are provided in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`group_date`](../interfaces/IAnalysisContentInfo.md#group_date)

#### Defined in

main.ts:166119

***

### highlighted\_text?

> `optional` **highlighted\_text**: `string`

highlighted text from the snippet

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`highlighted_text`](../interfaces/IAnalysisContentInfo.md#highlighted_text)

#### Defined in

main.ts:166082

***

### language?

> `optional` **language**: `string`

content language
to obtain a full list of available languages, refer to the Languages endpoint

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`language`](../interfaces/IAnalysisContentInfo.md#language)

#### Defined in

main.ts:166085

***

### level?

> `optional` **level**: `number`

title heading level
indicates h-tag level from 1 (top) to 6 (bottom)

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`level`](../interfaces/IAnalysisContentInfo.md#level)

#### Defined in

main.ts:166071

***

### main\_title?

> `optional` **main\_title**: `string`

page title

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`main_title`](../interfaces/IAnalysisContentInfo.md#main_title)

#### Defined in

main.ts:166066

***

### previous\_title?

> `optional` **previous\_title**: `string`

title of the previous content block

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`previous_title`](../interfaces/IAnalysisContentInfo.md#previous_title)

#### Defined in

main.ts:166068

***

### rating?

> `optional` **rating**: [`ContentAnalysisRatingInfo`](ContentAnalysisRatingInfo.md)

content rating
rating related to content_info

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`rating`](../interfaces/IAnalysisContentInfo.md#rating)

#### Defined in

main.ts:166112

***

### semantic\_location?

> `optional` **semantic\_location**: `string`

semantic location
indicates semantic element in HTML where the target keyword citation is located
example:
article, header

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`semantic_location`](../interfaces/IAnalysisContentInfo.md#semantic_location)

#### Defined in

main.ts:166109

***

### sentiment\_connotations?

> `optional` **sentiment\_connotations**: `object`

sentiment connotations
contains sentiments (emotional reactions) related to the given citation and probability index per each sentiment
possible sentiment connotations: anger, happiness, love, sadness, share, fun

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`sentiment_connotations`](../interfaces/IAnalysisContentInfo.md#sentiment_connotations)

#### Defined in

main.ts:166089

***

### snippet?

> `optional` **snippet**: `string`

content snippet

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`snippet`](../interfaces/IAnalysisContentInfo.md#snippet)

#### Defined in

main.ts:166075

***

### snippet\_length?

> `optional` **snippet\_length**: `number`

character length of the snippet

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`snippet_length`](../interfaces/IAnalysisContentInfo.md#snippet_length)

#### Defined in

main.ts:166077

***

### social\_metrics?

> `optional` **social\_metrics**: [`SocialMetricsInfo`](SocialMetricsInfo.md)[]

social media engagement metrics
data on social media interactions associated with the content based on website embeds developed and supported by social media platforms

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`social_metrics`](../interfaces/IAnalysisContentInfo.md#social_metrics)

#### Defined in

main.ts:166080

***

### text\_category?

> `optional` **text\_category**: `number`[]

text category
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`text_category`](../interfaces/IAnalysisContentInfo.md#text_category)

#### Defined in

main.ts:166096

***

### title?

> `optional` **title**: `string`

title of the result

#### Implementation of

[`IAnalysisContentInfo`](../interfaces/IAnalysisContentInfo.md).[`title`](../interfaces/IAnalysisContentInfo.md#title)

#### Defined in

main.ts:166064

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:166132

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:166187

***

### fromJS()

> `static` **fromJS**(`data`): [`AnalysisContentInfo`](AnalysisContentInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AnalysisContentInfo`](AnalysisContentInfo.md)

#### Defined in

main.ts:166180
