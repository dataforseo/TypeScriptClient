[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ITripadvisorReviewSearchBusinessDataSerpElementItem

# Interface: ITripadvisorReviewSearchBusinessDataSerpElementItem

## Hierarchy

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)
  
  ↳ **`ITripadvisorReviewSearchBusinessDataSerpElementItem`**

## Implemented by

- [`TripadvisorReviewSearchBusinessDataSerpElementItem`](../classes/TripadvisorReviewSearchBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_of\_visit](ITripadvisorReviewSearchBusinessDataSerpElementItem.md#date_of_visit)
- [position](ITripadvisorReviewSearchBusinessDataSerpElementItem.md#position)
- [rank\_absolute](ITripadvisorReviewSearchBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](ITripadvisorReviewSearchBusinessDataSerpElementItem.md#rank_group)
- [rating](ITripadvisorReviewSearchBusinessDataSerpElementItem.md#rating)
- [responses](ITripadvisorReviewSearchBusinessDataSerpElementItem.md#responses)
- [review\_images](ITripadvisorReviewSearchBusinessDataSerpElementItem.md#review_images)
- [review\_text](ITripadvisorReviewSearchBusinessDataSerpElementItem.md#review_text)
- [timestamp](ITripadvisorReviewSearchBusinessDataSerpElementItem.md#timestamp)
- [title](ITripadvisorReviewSearchBusinessDataSerpElementItem.md#title)
- [url](ITripadvisorReviewSearchBusinessDataSerpElementItem.md#url)
- [user\_profile](ITripadvisorReviewSearchBusinessDataSerpElementItem.md#user_profile)

## Properties

### date\_of\_visit

• `Optional` **date\_of\_visit**: `string`

date of the reviewer’s visit to the local establishment
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:202512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202512)

___


### position

• `Optional` **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Defined in

[main.ts:202503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202503)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Defined in

[main.ts:202500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202500)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:202497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202497)

___


### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

[main.ts:202507](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202507)

___


### responses

• `Optional` **responses**: [`ReviewResponseItemInfo`](../classes/ReviewResponseItemInfo.md)[]

contains information about the owner’s response

#### Defined in

[main.ts:202527](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202527)

___


### review\_images

• `Optional` **review\_images**: [`ImageUrlInfo`](../classes/ImageUrlInfo.md)[]

contains URLs of the images used in the review

#### Defined in

[main.ts:202523](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202523)

___


### review\_text

• `Optional` **review\_text**: `string`

content of the review

#### Defined in

[main.ts:202521](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202521)

___


### timestamp

• `Optional` **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:202517](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202517)

___


### title

• `Optional` **title**: `string`

title of the review

#### Defined in

[main.ts:202519](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202519)

___


### url

• `Optional` **url**: `string`

URL of the review

#### Defined in

[main.ts:202505](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202505)

___


### user\_profile

• `Optional` **user\_profile**: [`BusinessDataUserProfileInfo`](../classes/BusinessDataUserProfileInfo.md)

information from the reviewer’s profile

#### Defined in

[main.ts:202525](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202525)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")