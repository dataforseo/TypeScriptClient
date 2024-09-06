[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / GoogleReviewsSearchBusinessDataSerpElementItem

# Class: GoogleReviewsSearchBusinessDataSerpElementItem

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleReviewsSearchBusinessDataSerpElementItem()

> **new GoogleReviewsSearchBusinessDataSerpElementItem**(`data`?): [`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md)

#### Returns

[`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Defined in

main.ts:208575

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21313

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images submitted by the reviewer

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`images`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#images)

#### Defined in

main.ts:208568

***

### local\_guide?

> `optional` **local\_guide**: `boolean`

indicates whether the reviewer has a ‘local guide’ status

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`local_guide`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#local_guide)

#### Defined in

main.ts:208540

***

### original\_owner\_answer?

> `optional` **original\_owner\_answer**: `string`

original text of the owner’s response
the original response to the review, no auto-translate applied

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`original_owner_answer`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#original_owner_answer)

#### Defined in

main.ts:208554

***

### original\_review\_text?

> `optional` **original\_review\_text**: `string`

original content of the review
the original content of the review, no auto-translate applied

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`original_review_text`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#original_review_text)

#### Defined in

main.ts:208524

***

### owner\_answer?

> `optional` **owner\_answer**: `string`

text of the owner’s response
the owner’s response to the review

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`owner_answer`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#owner_answer)

#### Defined in

main.ts:208551

***

### owner\_time\_ago?

> `optional` **owner\_time\_ago**: `string`

publication time
indicates the time (in the ‘time ago’ format) when the owner submitted the response to the review

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`owner_time_ago`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#owner_time_ago)

#### Defined in

main.ts:208557

***

### owner\_timestamp?

> `optional` **owner\_timestamp**: `string`

date and time of the owner’s reply to the review
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`owner_timestamp`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#owner_timestamp)

#### Defined in

main.ts:208562

***

### photos\_count?

> `optional` **photos\_count**: `number`

total number of photos submitted by the reviewer

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`photos_count`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#photos_count)

#### Defined in

main.ts:208538

***

### position?

> `optional` **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`position`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#position)

#### Defined in

main.ts:208517

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

URL of the reviewer’s profile image

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`profile_image_url`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#profile_image_url)

#### Defined in

main.ts:208548

***

### profile\_name?

> `optional` **profile\_name**: `string`

profile name of the reviewer

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`profile_name`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#profile_name)

#### Defined in

main.ts:208542

***

### profile\_url?

> `optional` **profile\_url**: `string`

URL of the reviewer’s profile

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`profile_url`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#profile_url)

#### Defined in

main.ts:208544

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_absolute`](BaseBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21311

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#rank_group)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_group`](BaseBusinessDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:21309

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`rating`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#rating)

#### Defined in

main.ts:208534

***

### review\_highlights?

> `optional` **review\_highlights**: [`ReviewHighlights`](ReviewHighlights.md)[]

review highlights
contains highlighted review criteria and assessments

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`review_highlights`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#review_highlights)

#### Defined in

main.ts:208571

***

### review\_id?

> `optional` **review\_id**: `string`

the unique identifier of a review on Google
example:
ChZDSUhNMG9nS0VJQ0FnSUMxbHFyMFlnEAE

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`review_id`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#review_id)

#### Defined in

main.ts:208566

***

### review\_text?

> `optional` **review\_text**: `string`

the content of the review

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`review_text`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#review_text)

#### Defined in

main.ts:208521

***

### review\_url?

> `optional` **review\_url**: `string`

the URL of the review

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`review_url`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#review_url)

#### Defined in

main.ts:208546

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

total number of reviews submitted by the reviewer

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`reviews_count`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#reviews_count)

#### Defined in

main.ts:208536

***

### time\_ago?

> `optional` **time\_ago**: `string`

the time of publication
indicates the time (in the ‘time ago’ format) when the review was listed

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`time_ago`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#time_ago)

#### Defined in

main.ts:208527

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`timestamp`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#timestamp)

#### Defined in

main.ts:208532

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`type`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#type)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`type`](BaseBusinessDataSerpElementItem.md#type)

#### Defined in

main.ts:21306

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the review

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`xpath`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#xpath)

#### Defined in

main.ts:208519

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

#### Defined in

main.ts:208580

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

#### Defined in

main.ts:208626

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

main.ts:208619
