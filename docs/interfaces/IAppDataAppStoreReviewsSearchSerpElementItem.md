[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IAppDataAppStoreReviewsSearchSerpElementItem

# Interface: IAppDataAppStoreReviewsSearchSerpElementItem

## Extends

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### id?

> `optional` **id**: `string`

id of the review

#### Defined in

main.ts:200614

***

### position?

> `optional` **position**: `string`

the alignment of the review in SERP
can take the following values: left

#### Defined in

main.ts:200602

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Defined in

main.ts:200599

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:200596

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

main.ts:200607

***

### review\_text?

> `optional` **review\_text**: `string`

content of the review

#### Defined in

main.ts:200618

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:200612

***

### title?

> `optional` **title**: `string`

title of the review

#### Defined in

main.ts:200616

***

### user\_profile?

> `optional` **user\_profile**: [`AppUserProfileInfo`](../classes/AppUserProfileInfo.md)

user profile of the reviewer

#### Defined in

main.ts:200620

***

### version?

> `optional` **version**: `string`

version of the app
version of the app for which the review is submitted

#### Defined in

main.ts:200605
