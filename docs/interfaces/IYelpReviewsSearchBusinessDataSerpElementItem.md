**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IYelpReviewsSearchBusinessDataSerpElementItem

# Interface: IYelpReviewsSearchBusinessDataSerpElementItem

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### position?

> **`optional`** **position**: `string`

the alignment of the review in SERP
can take the following values: left

#### Source

main.ts:211812

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Source

main.ts:211809

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:211806

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Source

main.ts:211818

***

### responses?

> **`optional`** **responses**: [`ReviewResponseItemInfo`](../classes/ReviewResponseItemInfo.md)[]

text of the owner’s response

#### Source

main.ts:211830

***

### review\_id?

> **`optional`** **review\_id**: `string`

the unique identifier of a review received from Yelp
example:
WvjNtncj8PDZytbofWlC5A

#### Source

main.ts:211816

***

### review\_images?

> **`optional`** **review\_images**: `string`[]

images submitted by the reviewer
you will find URLs to the images provided by the author of this review

#### Source

main.ts:211826

***

### review\_text?

> **`optional`** **review\_text**: `string`

the content of the review

#### Source

main.ts:211823

***

### timestamp?

> **`optional`** **timestamp**: `string`

the time of publication
indicates timestamp of when the review was listed

#### Source

main.ts:211821

***

### user\_profile?

> **`optional`** **user\_profile**: [`BusinessDataUserProfileInfo`](../classes/BusinessDataUserProfileInfo.md)

information listed in the reviewer’s profile

#### Source

main.ts:211828
