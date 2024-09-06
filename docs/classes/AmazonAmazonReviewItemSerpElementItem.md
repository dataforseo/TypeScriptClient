[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AmazonAmazonReviewItemSerpElementItem

# Class: AmazonAmazonReviewItemSerpElementItem

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonAmazonReviewItemSerpElementItem()

> **new AmazonAmazonReviewItemSerpElementItem**(`data`?): [`AmazonAmazonReviewItemSerpElementItem`](AmazonAmazonReviewItemSerpElementItem.md)

#### Parameters

• **data?**: [`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md)

#### Returns

[`AmazonAmazonReviewItemSerpElementItem`](AmazonAmazonReviewItemSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

#### Defined in

main.ts:185093

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

#### Defined in

main.ts:22320

***

### helpful\_votes?

> `optional` **helpful\_votes**: `number`

helpful votes count
number of users who clicked on the ‘Helpful” button under the review text

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`helpful_votes`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#helpful_votes)

#### Defined in

main.ts:185070

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the product submitted by the reviewer

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`images`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#images)

#### Defined in

main.ts:185072

***

### position?

> `optional` **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`position`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#position)

#### Defined in

main.ts:185063

***

### publication\_date?

> `optional` **publication\_date**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`publication_date`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#publication_date)

#### Defined in

main.ts:185087

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_absolute`](BaseAmazonSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:22316

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`rank_group`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_group`](BaseAmazonSerpElementItem.md#rank_group)

#### Defined in

main.ts:22313

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`rating`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#rating)

#### Defined in

main.ts:185089

***

### review\_text?

> `optional` **review\_text**: `string`

content of the review

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`review_text`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#review_text)

#### Defined in

main.ts:185082

***

### subtitle?

> `optional` **subtitle**: `string`

subtitle of the review

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`subtitle`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#subtitle)

#### Defined in

main.ts:185067

***

### title?

> `optional` **title**: `string`

title of the review

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`title`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#title)

#### Defined in

main.ts:185078

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`type`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#type)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`type`](BaseAmazonSerpElementItem.md#type)

#### Defined in

main.ts:22310

***

### url?

> `optional` **url**: `string`

URL to the review

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`url`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#url)

#### Defined in

main.ts:185080

***

### user\_profile?

> `optional` **user\_profile**: [`UserProfileInfo`](UserProfileInfo.md)

user profile of the reviewer

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`user_profile`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#user_profile)

#### Defined in

main.ts:185076

***

### verified?

> `optional` **verified**: `boolean`

indicates whether the review has the “Verified Purchase” mark

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`verified`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#verified)

#### Defined in

main.ts:185065

***

### videos?

> `optional` **videos**: [`VideoElement`](VideoElement.md)[]

videos of the product submitted by the reviewer

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`videos`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#videos)

#### Defined in

main.ts:185074

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`xpath`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#xpath)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`xpath`](BaseAmazonSerpElementItem.md#xpath)

#### Defined in

main.ts:22318

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

#### Defined in

main.ts:185098

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

#### Defined in

main.ts:185135

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonAmazonReviewItemSerpElementItem`](AmazonAmazonReviewItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonAmazonReviewItemSerpElementItem`](AmazonAmazonReviewItemSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)

#### Defined in

main.ts:185128
