[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ITrustpilotReviewSearchBusinessDataSerpElementItem

# Interface: ITrustpilotReviewSearchBusinessDataSerpElementItem

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### language?

> `optional` **language**: `string`

the language of the review

#### Defined in

main.ts:216560

***

### position?

> `optional` **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Defined in

main.ts:216552

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Defined in

main.ts:216549

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:216546

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

main.ts:216556

***

### responses?

> `optional` **responses**: [`ReviewResponseItemInfo`](../classes/ReviewResponseItemInfo.md)[]

owner’s response to the submitted review

#### Defined in

main.ts:216577

***

### review\_images?

> `optional` **review\_images**: `string`[]

images submitted by the reviewer
displays URLs to the images provided by the author of the review;
please note that Trustpilot doesn’t allow adding images to reviews, so the review_images parameter will always equal null

#### Defined in

main.ts:216573

***

### review\_text?

> `optional` **review\_text**: `string`

the content of the review

#### Defined in

main.ts:216569

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:216565

***

### title?

> `optional` **title**: `string`

the title of the review

#### Defined in

main.ts:216567

***

### url?

> `optional` **url**: `string`

the URL of the review

#### Defined in

main.ts:216554

***

### user\_profile?

> `optional` **user\_profile**: [`BusinessDataUserProfileInfo`](../classes/BusinessDataUserProfileInfo.md)

user profile of the reviewer

#### Defined in

main.ts:216575

***

### verified?

> `optional` **verified**: `boolean`

indicates whether the review has the “Verified” mark

#### Defined in

main.ts:216558
