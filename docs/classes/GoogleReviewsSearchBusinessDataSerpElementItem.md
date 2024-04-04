**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / GoogleReviewsSearchBusinessDataSerpElementItem

# Class: GoogleReviewsSearchBusinessDataSerpElementItem

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleReviewsSearchBusinessDataSerpElementItem(data)

> **new GoogleReviewsSearchBusinessDataSerpElementItem**(`data`?): [`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md)

#### Returns

[`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Source

main.ts:203689

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Source

main.ts:20532

***

### images?

> **`optional`** **images**: [`ImagesElement`](ImagesElement.md)[]

images submitted by the reviewer

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`images`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#images)

#### Source

main.ts:203685

***

### local\_guide?

> **`optional`** **local\_guide**: `boolean`

indicates whether the reviewer has a ‘local guide’ status

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`local_guide`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#local_guide)

#### Source

main.ts:203657

***

### original\_owner\_answer?

> **`optional`** **original\_owner\_answer**: `string`

original text of the owner’s response
the original response to the review, no auto-translate applied

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`original_owner_answer`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#original_owner_answer)

#### Source

main.ts:203671

***

### original\_review\_text?

> **`optional`** **original\_review\_text**: `string`

original content of the review
the original content of the review, no auto-translate applied

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`original_review_text`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#original_review_text)

#### Source

main.ts:203641

***

### owner\_answer?

> **`optional`** **owner\_answer**: `string`

text of the owner’s response
the owner’s response to the review

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`owner_answer`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#owner_answer)

#### Source

main.ts:203668

***

### owner\_time\_ago?

> **`optional`** **owner\_time\_ago**: `string`

publication time
indicates the time (in the ‘time ago’ format) when the owner submitted the response to the review

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`owner_time_ago`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#owner_time_ago)

#### Source

main.ts:203674

***

### owner\_timestamp?

> **`optional`** **owner\_timestamp**: `string`

date and time of the owner’s reply to the review
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`owner_timestamp`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#owner_timestamp)

#### Source

main.ts:203679

***

### photos\_count?

> **`optional`** **photos\_count**: `number`

total number of photos submitted by the reviewer

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`photos_count`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#photos_count)

#### Source

main.ts:203655

***

### position?

> **`optional`** **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`position`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#position)

#### Source

main.ts:203634

***

### profile\_image\_url?

> **`optional`** **profile\_image\_url**: `string`

URL of the reviewer’s profile image

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`profile_image_url`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#profile_image_url)

#### Source

main.ts:203665

***

### profile\_name?

> **`optional`** **profile\_name**: `string`

profile name of the reviewer

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`profile_name`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#profile_name)

#### Source

main.ts:203659

***

### profile\_url?

> **`optional`** **profile\_url**: `string`

URL of the reviewer’s profile

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`profile_url`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#profile_url)

#### Source

main.ts:203661

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#rank_absolute)

#### Source

main.ts:203631

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#rank_group)

#### Source

main.ts:203628

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`rating`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#rating)

#### Source

main.ts:203651

***

### review\_id?

> **`optional`** **review\_id**: `string`

the unique identifier of a review on Google
example:
ChZDSUhNMG9nS0VJQ0FnSUMxbHFyMFlnEAE

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`review_id`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#review_id)

#### Source

main.ts:203683

***

### review\_text?

> **`optional`** **review\_text**: `string`

the content of the review

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`review_text`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#review_text)

#### Source

main.ts:203638

***

### review\_url?

> **`optional`** **review\_url**: `string`

the URL of the review

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`review_url`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#review_url)

#### Source

main.ts:203663

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

total number of reviews submitted by the reviewer

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`reviews_count`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#reviews_count)

#### Source

main.ts:203653

***

### time\_ago?

> **`optional`** **time\_ago**: `string`

the time of publication
indicates the time (in the ‘time ago’ format) when the review was listed

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`time_ago`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#time_ago)

#### Source

main.ts:203644

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`timestamp`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#timestamp)

#### Source

main.ts:203649

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the review

#### Implementation of

[`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[`xpath`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#xpath)

#### Source

main.ts:203636

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

#### Source

main.ts:203694

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

#### Source

main.ts:203737

***

### fromJS()

> **`static`** **fromJS**(`data`): [`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Source

main.ts:203730
