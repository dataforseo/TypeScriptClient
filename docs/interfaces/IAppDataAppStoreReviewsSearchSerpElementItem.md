[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataAppStoreReviewsSearchSerpElementItem

# Interface: IAppDataAppStoreReviewsSearchSerpElementItem

## Hierarchy

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

  ↳ **`IAppDataAppStoreReviewsSearchSerpElementItem`**

## Implemented by

- [`AppDataAppStoreReviewsSearchSerpElementItem`](../classes/AppDataAppStoreReviewsSearchSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [id](IAppDataAppStoreReviewsSearchSerpElementItem.md#id)
- [position](IAppDataAppStoreReviewsSearchSerpElementItem.md#position)
- [rank\_absolute](IAppDataAppStoreReviewsSearchSerpElementItem.md#rank_absolute)
- [rank\_group](IAppDataAppStoreReviewsSearchSerpElementItem.md#rank_group)
- [rating](IAppDataAppStoreReviewsSearchSerpElementItem.md#rating)
- [review\_text](IAppDataAppStoreReviewsSearchSerpElementItem.md#review_text)
- [timestamp](IAppDataAppStoreReviewsSearchSerpElementItem.md#timestamp)
- [title](IAppDataAppStoreReviewsSearchSerpElementItem.md#title)
- [user\_profile](IAppDataAppStoreReviewsSearchSerpElementItem.md#user_profile)
- [version](IAppDataAppStoreReviewsSearchSerpElementItem.md#version)

## Properties

### id

• `Optional` **id**: `string`

id of the review

#### Defined in

[main.ts:186305](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186305)

___

### position

• `Optional` **position**: `string`

the alignment of the review in SERP
can take the following values: left

#### Defined in

[main.ts:186293](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186293)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Defined in

[main.ts:186290](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186290)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:186287](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186287)

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

[main.ts:186298](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186298)

___

### review\_text

• `Optional` **review\_text**: `string`

content of the review

#### Defined in

[main.ts:186309](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186309)

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:186303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186303)

___

### title

• `Optional` **title**: `string`

title of the review

#### Defined in

[main.ts:186307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186307)

___

### user\_profile

• `Optional` **user\_profile**: [`AppUserProfileInfo`](../classes/AppUserProfileInfo.md)

user profile of the reviewer

#### Defined in

[main.ts:186311](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186311)

___

### version

• `Optional` **version**: `string`

version of the app
version of the app for which the review is submitted

#### Defined in

[main.ts:186296](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186296)
