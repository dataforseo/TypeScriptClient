[Documentation](../README.md) / [Exports](../modules.md) / IAppDataGooglePlayReviewsSearchSerpElementItem

# Interface: IAppDataGooglePlayReviewsSearchSerpElementItem

## Hierarchy

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

  ↳ **`IAppDataGooglePlayReviewsSearchSerpElementItem`**

## Implemented by

- [`AppDataGooglePlayReviewsSearchSerpElementItem`](../classes/AppDataGooglePlayReviewsSearchSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [helpful\_count](IAppDataGooglePlayReviewsSearchSerpElementItem.md#helpful_count)
- [id](IAppDataGooglePlayReviewsSearchSerpElementItem.md#id)
- [position](IAppDataGooglePlayReviewsSearchSerpElementItem.md#position)
- [rank\_absolute](IAppDataGooglePlayReviewsSearchSerpElementItem.md#rank_absolute)
- [rank\_group](IAppDataGooglePlayReviewsSearchSerpElementItem.md#rank_group)
- [rating](IAppDataGooglePlayReviewsSearchSerpElementItem.md#rating)
- [responses](IAppDataGooglePlayReviewsSearchSerpElementItem.md#responses)
- [review\_text](IAppDataGooglePlayReviewsSearchSerpElementItem.md#review_text)
- [timestamp](IAppDataGooglePlayReviewsSearchSerpElementItem.md#timestamp)
- [title](IAppDataGooglePlayReviewsSearchSerpElementItem.md#title)
- [user\_profile](IAppDataGooglePlayReviewsSearchSerpElementItem.md#user_profile)
- [version](IAppDataGooglePlayReviewsSearchSerpElementItem.md#version)

## Properties

### helpful\_count

• `Optional` **helpful\_count**: `number`

number of helpful votes
indicates how many users considered the review helpful and voted with the thumbs up icon

#### Defined in

main.ts:186865

___

### id

• `Optional` **id**: `string`

id of the review

#### Defined in

main.ts:186862

___

### position

• `Optional` **position**: `string`

the alignment of the review in SERP
can take the following values: left

#### Defined in

main.ts:186850

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Defined in

main.ts:186847

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:186844

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

main.ts:186855

___

### responses

• `Optional` **responses**: [`ResponseDataInfo`](../classes/ResponseDataInfo.md)[]

response from the developer

#### Defined in

main.ts:186874

___

### review\_text

• `Optional` **review\_text**: `string`

content of the review

#### Defined in

main.ts:186870

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:186860

___

### title

• `Optional` **title**: `string`

title of the review
Google Play doesn’t provide an option to title reviews, so this parameter will always equal null

#### Defined in

main.ts:186868

___

### user\_profile

• `Optional` **user\_profile**: [`AppUserProfileInfo`](../classes/AppUserProfileInfo.md)

user profile of the reviewer

#### Defined in

main.ts:186872

___

### version

• `Optional` **version**: `string`

version of the app
version of the app for which the review is submitted

#### Defined in

main.ts:186853
