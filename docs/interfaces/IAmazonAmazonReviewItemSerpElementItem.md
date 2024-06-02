**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAmazonAmazonReviewItemSerpElementItem

# Interface: IAmazonAmazonReviewItemSerpElementItem

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### helpful\_votes?

> **`optional`** **helpful\_votes**: `number`

helpful votes count
number of users who clicked on the ‘Helpful” button under the review text

#### Source

main.ts:183510

***

### images?

> **`optional`** **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the product submitted by the reviewer

#### Source

main.ts:183512

***

### position?

> **`optional`** **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Source

main.ts:183501

***

### publication\_date?

> **`optional`** **publication\_date**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:183527

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Source

main.ts:183498

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:183495

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Source

main.ts:183529

***

### review\_text?

> **`optional`** **review\_text**: `string`

content of the review

#### Source

main.ts:183522

***

### subtitle?

> **`optional`** **subtitle**: `string`

subtitle of the review

#### Source

main.ts:183507

***

### title?

> **`optional`** **title**: `string`

title of the review

#### Source

main.ts:183518

***

### url?

> **`optional`** **url**: `string`

URL to the review

#### Source

main.ts:183520

***

### user\_profile?

> **`optional`** **user\_profile**: [`UserProfileInfo`](../classes/UserProfileInfo.md)

user profile of the reviewer

#### Source

main.ts:183516

***

### verified?

> **`optional`** **verified**: `boolean`

indicates whether the review has the “Verified Purchase” mark

#### Source

main.ts:183505

***

### videos?

> **`optional`** **videos**: [`VideoElement`](../classes/VideoElement.md)[]

videos of the product submitted by the reviewer

#### Source

main.ts:183514

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:183503
