[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IAmazonAmazonReviewItemSerpElementItem

# Interface: IAmazonAmazonReviewItemSerpElementItem

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### helpful\_votes?

> `optional` **helpful\_votes**: `number`

helpful votes count
number of users who clicked on the ‘Helpful” button under the review text

#### Defined in

main.ts:189615

***

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the product submitted by the reviewer

#### Defined in

main.ts:189617

***

### position?

> `optional` **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Defined in

main.ts:189606

***

### publication\_date?

> `optional` **publication\_date**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:189632

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Defined in

main.ts:189603

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:189600

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

main.ts:189634

***

### review\_text?

> `optional` **review\_text**: `string`

content of the review

#### Defined in

main.ts:189627

***

### subtitle?

> `optional` **subtitle**: `string`

subtitle of the review

#### Defined in

main.ts:189612

***

### title?

> `optional` **title**: `string`

title of the review

#### Defined in

main.ts:189623

***

### url?

> `optional` **url**: `string`

URL to the review

#### Defined in

main.ts:189625

***

### user\_profile?

> `optional` **user\_profile**: [`UserProfileInfo`](../classes/UserProfileInfo.md)

user profile of the reviewer

#### Defined in

main.ts:189621

***

### verified?

> `optional` **verified**: `boolean`

indicates whether the review has the “Verified Purchase” mark

#### Defined in

main.ts:189610

***

### videos?

> `optional` **videos**: [`VideoElement`](../classes/VideoElement.md)[]

videos of the product submitted by the reviewer

#### Defined in

main.ts:189619

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:189608
