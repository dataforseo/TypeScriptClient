[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleExtendedReviewsTaskGetItem

# Class: BusinessDataGoogleExtendedReviewsTaskGetItem

## Implements

- [`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleExtendedReviewsTaskGetItem()

> **new BusinessDataGoogleExtendedReviewsTaskGetItem**(`data`?): [`BusinessDataGoogleExtendedReviewsTaskGetItem`](BusinessDataGoogleExtendedReviewsTaskGetItem.md)

#### Parameters

##### data?

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md)

#### Returns

[`BusinessDataGoogleExtendedReviewsTaskGetItem`](BusinessDataGoogleExtendedReviewsTaskGetItem.md)

#### Defined in

main.ts:223270

## Properties

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images submitted by the reviewer

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`images`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#images)

#### Defined in

main.ts:223260

***

### local\_guide?

> `optional` **local\_guide**: `boolean`

indicates whether the reviewer has a ‘local guide’ status

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`local_guide`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#local_guide)

#### Defined in

main.ts:223232

***

### original\_owner\_answer?

> `optional` **original\_owner\_answer**: `string`

original text of the owner’s response
the original response to the review, no auto-translate applied

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`original_owner_answer`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#original_owner_answer)

#### Defined in

main.ts:223246

***

### original\_review\_text?

> `optional` **original\_review\_text**: `string`

original content of the review
the original content of the review, no auto-translate applied

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`original_review_text`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#original_review_text)

#### Defined in

main.ts:223216

***

### owner\_answer?

> `optional` **owner\_answer**: `string`

text of the owner’s response
the owner’s response to the review

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`owner_answer`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#owner_answer)

#### Defined in

main.ts:223243

***

### owner\_time\_ago?

> `optional` **owner\_time\_ago**: `string`

publication time
indicates the time (in the ‘time ago’ format) when the owner submitted the response to the review

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`owner_time_ago`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#owner_time_ago)

#### Defined in

main.ts:223249

***

### owner\_timestamp?

> `optional` **owner\_timestamp**: `string`

date and time of the owner’s reply to the review
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`owner_timestamp`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#owner_timestamp)

#### Defined in

main.ts:223254

***

### photos\_count?

> `optional` **photos\_count**: `number`

total number of photos submitted by the reviewer

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`photos_count`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#photos_count)

#### Defined in

main.ts:223230

***

### position?

> `optional` **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`position`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#position)

#### Defined in

main.ts:223209

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

URL of the reviewer’s profile image

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`profile_image_url`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#profile_image_url)

#### Defined in

main.ts:223240

***

### profile\_name?

> `optional` **profile\_name**: `string`

profile name of the reviewer

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`profile_name`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#profile_name)

#### Defined in

main.ts:223234

***

### profile\_url?

> `optional` **profile\_url**: `string`

URL of the reviewer’s profile

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`profile_url`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#profile_url)

#### Defined in

main.ts:223236

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`rank_absolute`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#rank_absolute)

#### Defined in

main.ts:223206

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`rank_group`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#rank_group)

#### Defined in

main.ts:223203

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`rating`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#rating)

#### Defined in

main.ts:223226

***

### review\_highlights?

> `optional` **review\_highlights**: [`ReviewHighlights`](ReviewHighlights.md)[]

review highlights
contains highlighted review criteria and assessments

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`review_highlights`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#review_highlights)

#### Defined in

main.ts:223263

***

### review\_id?

> `optional` **review\_id**: `string`

the unique identifier of a review on Google
example:
ChZDSUhNMG9nS0VJQ0FnSUMxbHFyMFlnEAE

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`review_id`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#review_id)

#### Defined in

main.ts:223258

***

### review\_text?

> `optional` **review\_text**: `string`

the content of the review

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`review_text`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#review_text)

#### Defined in

main.ts:223213

***

### review\_url?

> `optional` **review\_url**: `string`

the URL of the review

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`review_url`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#review_url)

#### Defined in

main.ts:223238

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

total number of reviews submitted by the reviewer

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`reviews_count`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#reviews_count)

#### Defined in

main.ts:223228

***

### source?

> `optional` **source**: [`Source`](Source.md)

source of the review
contains information about the source where the review was posted

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`source`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#source)

#### Defined in

main.ts:223266

***

### time\_ago?

> `optional` **time\_ago**: `string`

the time of publication
indicates the time (in the ‘time ago’ format) when the review was listed

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`time_ago`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#time_ago)

#### Defined in

main.ts:223219

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`timestamp`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#timestamp)

#### Defined in

main.ts:223224

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`type`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#type)

#### Defined in

main.ts:223200

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the review

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetItem`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md).[`xpath`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetItem.md#xpath)

#### Defined in

main.ts:223211

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:223279

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:223328

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleExtendedReviewsTaskGetItem`](BusinessDataGoogleExtendedReviewsTaskGetItem.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleExtendedReviewsTaskGetItem`](BusinessDataGoogleExtendedReviewsTaskGetItem.md)

#### Defined in

main.ts:223321
