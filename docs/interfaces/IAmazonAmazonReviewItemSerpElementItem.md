[**Documentation**](../README.md)

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

main.ts:195063

***

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the product submitted by the reviewer

#### Defined in

main.ts:195065

***

### position?

> `optional` **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Defined in

main.ts:195056

***

### publication\_date?

> `optional` **publication\_date**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:195080

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`rank_absolute`](IBaseAmazonSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:23310

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`rank_group`](IBaseAmazonSerpElementItem.md#rank_group)

#### Defined in

main.ts:23307

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

main.ts:195082

***

### review\_text?

> `optional` **review\_text**: `string`

content of the review

#### Defined in

main.ts:195075

***

### subtitle?

> `optional` **subtitle**: `string`

subtitle of the review

#### Defined in

main.ts:195060

***

### title?

> `optional` **title**: `string`

title of the review

#### Defined in

main.ts:195071

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`type`](IBaseAmazonSerpElementItem.md#type)

#### Defined in

main.ts:23304

***

### url?

> `optional` **url**: `string`

relevant url

#### Defined in

main.ts:195073

***

### user\_profile?

> `optional` **user\_profile**: [`UserProfileInfo`](../classes/UserProfileInfo.md)

user profile of the reviewer

#### Defined in

main.ts:195069

***

### verified?

> `optional` **verified**: `boolean`

indicates whether the review has the “Verified Purchase” mark

#### Defined in

main.ts:195058

***

### videos?

> `optional` **videos**: [`VideoElement`](../classes/VideoElement.md)[]

videos of the product submitted by the reviewer

#### Defined in

main.ts:195067

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`xpath`](IBaseAmazonSerpElementItem.md#xpath)

#### Defined in

main.ts:23312
