[Documentation](../README.md) / [Exports](../modules.md) / IGoogleReviewsSearchBusinessDataSerpElementItem

# Interface: IGoogleReviewsSearchBusinessDataSerpElementItem

## Hierarchy

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

  ↳ **`IGoogleReviewsSearchBusinessDataSerpElementItem`**

## Implemented by

- [`GoogleReviewsSearchBusinessDataSerpElementItem`](../classes/GoogleReviewsSearchBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [images](IGoogleReviewsSearchBusinessDataSerpElementItem.md#images)
- [local\_guide](IGoogleReviewsSearchBusinessDataSerpElementItem.md#local_guide)
- [original\_owner\_answer](IGoogleReviewsSearchBusinessDataSerpElementItem.md#original_owner_answer)
- [original\_review\_text](IGoogleReviewsSearchBusinessDataSerpElementItem.md#original_review_text)
- [owner\_answer](IGoogleReviewsSearchBusinessDataSerpElementItem.md#owner_answer)
- [owner\_time\_ago](IGoogleReviewsSearchBusinessDataSerpElementItem.md#owner_time_ago)
- [owner\_timestamp](IGoogleReviewsSearchBusinessDataSerpElementItem.md#owner_timestamp)
- [photos\_count](IGoogleReviewsSearchBusinessDataSerpElementItem.md#photos_count)
- [position](IGoogleReviewsSearchBusinessDataSerpElementItem.md#position)
- [profile\_image\_url](IGoogleReviewsSearchBusinessDataSerpElementItem.md#profile_image_url)
- [profile\_name](IGoogleReviewsSearchBusinessDataSerpElementItem.md#profile_name)
- [profile\_url](IGoogleReviewsSearchBusinessDataSerpElementItem.md#profile_url)
- [rank\_absolute](IGoogleReviewsSearchBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](IGoogleReviewsSearchBusinessDataSerpElementItem.md#rank_group)
- [rating](IGoogleReviewsSearchBusinessDataSerpElementItem.md#rating)
- [review\_id](IGoogleReviewsSearchBusinessDataSerpElementItem.md#review_id)
- [review\_text](IGoogleReviewsSearchBusinessDataSerpElementItem.md#review_text)
- [review\_url](IGoogleReviewsSearchBusinessDataSerpElementItem.md#review_url)
- [reviews\_count](IGoogleReviewsSearchBusinessDataSerpElementItem.md#reviews_count)
- [time\_ago](IGoogleReviewsSearchBusinessDataSerpElementItem.md#time_ago)
- [timestamp](IGoogleReviewsSearchBusinessDataSerpElementItem.md#timestamp)
- [xpath](IGoogleReviewsSearchBusinessDataSerpElementItem.md#xpath)

## Properties

### images

• `Optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images submitted by the reviewer

#### Defined in

main.ts:203834

___

### local\_guide

• `Optional` **local\_guide**: `boolean`

indicates whether the reviewer has a ‘local guide’ status

#### Defined in

main.ts:203806

___

### original\_owner\_answer

• `Optional` **original\_owner\_answer**: `string`

original text of the owner’s response
the original response to the review, no auto-translate applied

#### Defined in

main.ts:203820

___

### original\_review\_text

• `Optional` **original\_review\_text**: `string`

original content of the review
the original content of the review, no auto-translate applied

#### Defined in

main.ts:203790

___

### owner\_answer

• `Optional` **owner\_answer**: `string`

text of the owner’s response
the owner’s response to the review

#### Defined in

main.ts:203817

___

### owner\_time\_ago

• `Optional` **owner\_time\_ago**: `string`

publication time
indicates the time (in the ‘time ago’ format) when the owner submitted the response to the review

#### Defined in

main.ts:203823

___

### owner\_timestamp

• `Optional` **owner\_timestamp**: `string`

date and time of the owner’s reply to the review
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:203828

___

### photos\_count

• `Optional` **photos\_count**: `number`

total number of photos submitted by the reviewer

#### Defined in

main.ts:203804

___

### position

• `Optional` **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Defined in

main.ts:203783

___

### profile\_image\_url

• `Optional` **profile\_image\_url**: `string`

URL of the reviewer’s profile image

#### Defined in

main.ts:203814

___

### profile\_name

• `Optional` **profile\_name**: `string`

profile name of the reviewer

#### Defined in

main.ts:203808

___

### profile\_url

• `Optional` **profile\_url**: `string`

URL of the reviewer’s profile

#### Defined in

main.ts:203810

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Defined in

main.ts:203780

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:203777

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

main.ts:203800

___

### review\_id

• `Optional` **review\_id**: `string`

the unique identifier of a review on Google
example:
ChZDSUhNMG9nS0VJQ0FnSUMxbHFyMFlnEAE

#### Defined in

main.ts:203832

___

### review\_text

• `Optional` **review\_text**: `string`

the content of the review

#### Defined in

main.ts:203787

___

### review\_url

• `Optional` **review\_url**: `string`

the URL of the review

#### Defined in

main.ts:203812

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

total number of reviews submitted by the reviewer

#### Defined in

main.ts:203802

___

### time\_ago

• `Optional` **time\_ago**: `string`

the time of publication
indicates the time (in the ‘time ago’ format) when the review was listed

#### Defined in

main.ts:203793

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:203798

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the review

#### Defined in

main.ts:203785
