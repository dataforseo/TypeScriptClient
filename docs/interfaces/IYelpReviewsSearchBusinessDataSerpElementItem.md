[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IYelpReviewsSearchBusinessDataSerpElementItem

# Interface: IYelpReviewsSearchBusinessDataSerpElementItem

## Hierarchy

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)
  
  ↳ **`IYelpReviewsSearchBusinessDataSerpElementItem`**

## Implemented by

- [`YelpReviewsSearchBusinessDataSerpElementItem`](../classes/YelpReviewsSearchBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [position](IYelpReviewsSearchBusinessDataSerpElementItem.md#position)
- [rank\_absolute](IYelpReviewsSearchBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](IYelpReviewsSearchBusinessDataSerpElementItem.md#rank_group)
- [rating](IYelpReviewsSearchBusinessDataSerpElementItem.md#rating)
- [responses](IYelpReviewsSearchBusinessDataSerpElementItem.md#responses)
- [review\_id](IYelpReviewsSearchBusinessDataSerpElementItem.md#review_id)
- [review\_images](IYelpReviewsSearchBusinessDataSerpElementItem.md#review_images)
- [review\_text](IYelpReviewsSearchBusinessDataSerpElementItem.md#review_text)
- [timestamp](IYelpReviewsSearchBusinessDataSerpElementItem.md#timestamp)
- [user\_profile](IYelpReviewsSearchBusinessDataSerpElementItem.md#user_profile)

## Properties

### position

• `Optional` **position**: `string`

the alignment of the review in SERP
can take the following values: left

#### Defined in

[main.ts:205341](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205341)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Defined in

[main.ts:205338](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205338)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:205335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205335)

___


### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

[main.ts:205347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205347)

___


### responses

• `Optional` **responses**: [`ReviewResponseItemInfo`](../classes/ReviewResponseItemInfo.md)[]

text of the owner’s response

#### Defined in

[main.ts:205359](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205359)

___


### review\_id

• `Optional` **review\_id**: `string`

the unique identifier of a review received from Yelp
example:
WvjNtncj8PDZytbofWlC5A

#### Defined in

[main.ts:205345](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205345)

___


### review\_images

• `Optional` **review\_images**: `string`[]

images submitted by the reviewer
you will find URLs to the images provided by the author of this review

#### Defined in

[main.ts:205355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205355)

___


### review\_text

• `Optional` **review\_text**: `string`

the content of the review

#### Defined in

[main.ts:205352](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205352)

___


### timestamp

• `Optional` **timestamp**: `string`

the time of publication
indicates timestamp of when the review was listed

#### Defined in

[main.ts:205350](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205350)

___


### user\_profile

• `Optional` **user\_profile**: [`BusinessDataUserProfileInfo`](../classes/BusinessDataUserProfileInfo.md)

information listed in the reviewer’s profile

#### Defined in

[main.ts:205357](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205357)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")