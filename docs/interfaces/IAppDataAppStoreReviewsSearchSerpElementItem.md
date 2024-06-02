**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataAppStoreReviewsSearchSerpElementItem

# Interface: IAppDataAppStoreReviewsSearchSerpElementItem

## Extends

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### id?

> **`optional`** **id**: `string`

id of the review

#### Source

main.ts:194097

***

### position?

> **`optional`** **position**: `string`

the alignment of the review in SERP
can take the following values: left

#### Source

main.ts:194085

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Source

main.ts:194082

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:194079

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Source

main.ts:194090

***

### review\_text?

> **`optional`** **review\_text**: `string`

content of the review

#### Source

main.ts:194101

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:194095

***

### title?

> **`optional`** **title**: `string`

title of the review

#### Source

main.ts:194099

***

### user\_profile?

> **`optional`** **user\_profile**: [`AppUserProfileInfo`](../classes/AppUserProfileInfo.md)

user profile of the reviewer

#### Source

main.ts:194103

***

### version?

> **`optional`** **version**: `string`

version of the app
version of the app for which the review is submitted

#### Source

main.ts:194088
