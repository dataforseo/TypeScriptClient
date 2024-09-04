[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAppDataGooglePlayReviewsSearchSerpElementItem

# Interface: IAppDataGooglePlayReviewsSearchSerpElementItem

## Extends

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### helpful\_count?

> `optional` **helpful\_count**: `number`

number of helpful votes
indicates how many users considered the review helpful and voted with the thumbs up icon

#### Defined in

main.ts:195695

***

### id?

> `optional` **id**: `string`

id of the review

#### Defined in

main.ts:195692

***

### position?

> `optional` **position**: `string`

the alignment of the review in SERP
can take the following values: left

#### Defined in

main.ts:195680

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Defined in

main.ts:195677

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:195674

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

main.ts:195685

***

### responses?

> `optional` **responses**: [`ResponseDataInfo`](../classes/ResponseDataInfo.md)[]

response from the developer

#### Defined in

main.ts:195704

***

### review\_text?

> `optional` **review\_text**: `string`

content of the review

#### Defined in

main.ts:195700

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:195690

***

### title?

> `optional` **title**: `string`

title of the review
Google Play doesn’t provide an option to title reviews, so this parameter will always equal null

#### Defined in

main.ts:195698

***

### user\_profile?

> `optional` **user\_profile**: [`AppUserProfileInfo`](../classes/AppUserProfileInfo.md)

user profile of the reviewer

#### Defined in

main.ts:195702

***

### version?

> `optional` **version**: `string`

version of the app
version of the app for which the review is submitted

#### Defined in

main.ts:195683
