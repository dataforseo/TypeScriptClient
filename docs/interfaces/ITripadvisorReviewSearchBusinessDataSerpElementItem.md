[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ITripadvisorReviewSearchBusinessDataSerpElementItem

# Interface: ITripadvisorReviewSearchBusinessDataSerpElementItem

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_of\_visit?

> `optional` **date\_of\_visit**: `string`

date of the reviewer’s visit to the local establishment
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:219035

***

### position?

> `optional` **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Defined in

main.ts:219026

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Defined in

main.ts:219023

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:219020

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

main.ts:219030

***

### responses?

> `optional` **responses**: [`ReviewResponseItemInfo`](../classes/ReviewResponseItemInfo.md)[]

contains information about the owner’s response

#### Defined in

main.ts:219050

***

### review\_highlights?

> `optional` **review\_highlights**: [`ReviewHighlights`](../classes/ReviewHighlights.md)[]

review highlights
contains highlighted review criteria and assessments

#### Defined in

main.ts:219053

***

### review\_images?

> `optional` **review\_images**: [`ImageUrlInfo`](../classes/ImageUrlInfo.md)[]

contains URLs of the images used in the review

#### Defined in

main.ts:219046

***

### review\_text?

> `optional` **review\_text**: `string`

content of the review

#### Defined in

main.ts:219044

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:219040

***

### title?

> `optional` **title**: `string`

title of the review

#### Defined in

main.ts:219042

***

### url?

> `optional` **url**: `string`

URL of the review

#### Defined in

main.ts:219028

***

### user\_profile?

> `optional` **user\_profile**: [`BusinessDataUserProfileInfo`](../classes/BusinessDataUserProfileInfo.md)

information from the reviewer’s profile

#### Defined in

main.ts:219048
