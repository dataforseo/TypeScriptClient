[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ITrustpilotReviewSearchBusinessDataSerpElementItem

# Interface: ITrustpilotReviewSearchBusinessDataSerpElementItem

## Hierarchy

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)
  
  ↳ **`ITrustpilotReviewSearchBusinessDataSerpElementItem`**

## Implemented by

- [`TrustpilotReviewSearchBusinessDataSerpElementItem`](../classes/TrustpilotReviewSearchBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [language](ITrustpilotReviewSearchBusinessDataSerpElementItem.md#language)
- [position](ITrustpilotReviewSearchBusinessDataSerpElementItem.md#position)
- [rank\_absolute](ITrustpilotReviewSearchBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](ITrustpilotReviewSearchBusinessDataSerpElementItem.md#rank_group)
- [rating](ITrustpilotReviewSearchBusinessDataSerpElementItem.md#rating)
- [responses](ITrustpilotReviewSearchBusinessDataSerpElementItem.md#responses)
- [review\_images](ITrustpilotReviewSearchBusinessDataSerpElementItem.md#review_images)
- [review\_text](ITrustpilotReviewSearchBusinessDataSerpElementItem.md#review_text)
- [timestamp](ITrustpilotReviewSearchBusinessDataSerpElementItem.md#timestamp)
- [title](ITrustpilotReviewSearchBusinessDataSerpElementItem.md#title)
- [url](ITrustpilotReviewSearchBusinessDataSerpElementItem.md#url)
- [user\_profile](ITrustpilotReviewSearchBusinessDataSerpElementItem.md#user_profile)
- [verified](ITrustpilotReviewSearchBusinessDataSerpElementItem.md#verified)

## Properties

### language

• `Optional` **language**: `string`

the language of the review

#### Defined in

[main.ts:200076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200076)

___


### position

• `Optional` **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Defined in

[main.ts:200068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200068)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Defined in

[main.ts:200065](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200065)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:200062](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200062)

___


### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

[main.ts:200072](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200072)

___


### responses

• `Optional` **responses**: [`ReviewResponseItemInfo`](../classes/ReviewResponseItemInfo.md)[]

owner’s response to the submitted review

#### Defined in

[main.ts:200093](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200093)

___


### review\_images

• `Optional` **review\_images**: `string`[]

images submitted by the reviewer
displays URLs to the images provided by the author of the review;
please note that Trustpilot doesn’t allow adding images to reviews, so the review_images parameter will always equal null

#### Defined in

[main.ts:200089](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200089)

___


### review\_text

• `Optional` **review\_text**: `string`

the content of the review

#### Defined in

[main.ts:200085](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200085)

___


### timestamp

• `Optional` **timestamp**: `string`

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:200081](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200081)

___


### title

• `Optional` **title**: `string`

the title of the review

#### Defined in

[main.ts:200083](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200083)

___


### url

• `Optional` **url**: `string`

the URL of the review

#### Defined in

[main.ts:200070](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200070)

___


### user\_profile

• `Optional` **user\_profile**: [`BusinessDataUserProfileInfo`](../classes/BusinessDataUserProfileInfo.md)

user profile of the reviewer

#### Defined in

[main.ts:200091](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200091)

___


### verified

• `Optional` **verified**: `boolean`

indicates whether the review has the “Verified” mark

#### Defined in

[main.ts:200074](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200074)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")