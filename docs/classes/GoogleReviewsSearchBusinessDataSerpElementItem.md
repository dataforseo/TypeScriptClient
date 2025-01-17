[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleReviewsSearchBusinessDataSerpElementItem

# Class: GoogleReviewsSearchBusinessDataSerpElementItem

Defined in: main.ts:222126

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleReviewsSearchBusinessDataSerpElementItem()

> **new GoogleReviewsSearchBusinessDataSerpElementItem**(`data`?): [`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)

Defined in: main.ts:222187

#### Parameters

##### data?

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md)

#### Returns

[`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22211

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

Defined in: main.ts:222180

images submitted by the reviewer

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`images`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#images)

***

### local\_guide?

> `optional` **local\_guide**: `boolean`

Defined in: main.ts:222152

indicates whether the reviewer has a ‘local guide’ status

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`local_guide`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#local_guide)

***

### original\_owner\_answer?

> `optional` **original\_owner\_answer**: `string`

Defined in: main.ts:222166

original text of the owner’s response
the original response to the review, no auto-translate applied

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`original_owner_answer`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#original_owner_answer)

***

### original\_review\_text?

> `optional` **original\_review\_text**: `string`

Defined in: main.ts:222136

original content of the review
the original content of the review, no auto-translate applied

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`original_review_text`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#original_review_text)

***

### owner\_answer?

> `optional` **owner\_answer**: `string`

Defined in: main.ts:222163

text of the owner’s response
the owner’s response to the review

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`owner_answer`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#owner_answer)

***

### owner\_time\_ago?

> `optional` **owner\_time\_ago**: `string`

Defined in: main.ts:222169

publication time
indicates the time (in the ‘time ago’ format) when the owner submitted the response to the review

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`owner_time_ago`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#owner_time_ago)

***

### owner\_timestamp?

> `optional` **owner\_timestamp**: `string`

Defined in: main.ts:222174

date and time of the owner’s reply to the review
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`owner_timestamp`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#owner_timestamp)

***

### photos\_count?

> `optional` **photos\_count**: `number`

Defined in: main.ts:222150

total number of photos submitted by the reviewer

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`photos_count`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#photos_count)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:222129

the alignment of the review in SERP
can take the following values: right

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`position`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#position)

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

Defined in: main.ts:222160

URL of the reviewer’s profile image

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`profile_image_url`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#profile_image_url)

***

### profile\_name?

> `optional` **profile\_name**: `string`

Defined in: main.ts:222154

profile name of the reviewer

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`profile_name`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#profile_name)

***

### profile\_url?

> `optional` **profile\_url**: `string`

Defined in: main.ts:222156

URL of the reviewer’s profile

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`profile_url`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#profile_url)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22209

absolute rank among all the elements

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_absolute`](BaseBusinessDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22207

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#rank_group)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_group`](BaseBusinessDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:222146

the rating score submitted by the reviewer

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`rating`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#rating)

***

### review\_highlights?

> `optional` **review\_highlights**: [`ReviewHighlights`](ReviewHighlights.md)[]

Defined in: main.ts:222183

review highlights
contains highlighted review criteria and assessments

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`review_highlights`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#review_highlights)

***

### review\_id?

> `optional` **review\_id**: `string`

Defined in: main.ts:222178

the unique identifier of a review on Google
example:
ChZDSUhNMG9nS0VJQ0FnSUMxbHFyMFlnEAE

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`review_id`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#review_id)

***

### review\_text?

> `optional` **review\_text**: `string`

Defined in: main.ts:222133

the content of the review

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`review_text`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#review_text)

***

### review\_url?

> `optional` **review\_url**: `string`

Defined in: main.ts:222158

the URL of the review

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`review_url`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#review_url)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:222148

total number of reviews submitted by the reviewer

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`reviews_count`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#reviews_count)

***

### time\_ago?

> `optional` **time\_ago**: `string`

Defined in: main.ts:222139

the time of publication
indicates the time (in the ‘time ago’ format) when the review was listed

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`time_ago`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#time_ago)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:222144

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`timestamp`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#timestamp)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22204

type of element

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`type`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#type)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`type`](BaseBusinessDataSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:222131

the XPath of the review

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`xpath`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:222192

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:222238

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)

Defined in: main.ts:222231

#### Parameters

##### data

`any`

#### Returns

[`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)
