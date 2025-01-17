[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonAmazonReviewItemSerpElementItem

# Class: AmazonAmazonReviewItemSerpElementItem

Defined in: main.ts:195015

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AmazonAmazonReviewItemSerpElementItem()

> **new AmazonAmazonReviewItemSerpElementItem**(`data`?): [`AmazonAmazonReviewItemSerpElementItem`](AmazonAmazonReviewItemSerpElementItem.md)

Defined in: main.ts:195048

#### Parameters

##### data?

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md)

#### Returns

[`AmazonAmazonReviewItemSerpElementItem`](AmazonAmazonReviewItemSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23218

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

***

### helpful\_votes?

> `optional` **helpful\_votes**: `number`

Defined in: main.ts:195025

helpful votes count
number of users who clicked on the ‘Helpful” button under the review text

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`helpful_votes`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#helpful_votes)

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

Defined in: main.ts:195027

images of the product submitted by the reviewer

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`images`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#images)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:195018

the alignment of the review in SERP
can take the following values: right

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`position`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#position)

***

### publication\_date?

> `optional` **publication\_date**: `string`

Defined in: main.ts:195042

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`publication_date`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#publication_date)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:23214

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_absolute`](BaseAmazonSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:23211

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`rank_group`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_group`](BaseAmazonSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:195044

the rating score submitted by the reviewer

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`rating`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#rating)

***

### review\_text?

> `optional` **review\_text**: `string`

Defined in: main.ts:195037

content of the review

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`review_text`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#review_text)

***

### subtitle?

> `optional` **subtitle**: `string`

Defined in: main.ts:195022

subtitle of the review

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`subtitle`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#subtitle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:195033

title of the review

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`title`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23208

type of element

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`type`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#type)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`type`](BaseAmazonSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:195035

relevant url

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`url`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#url)

***

### user\_profile?

> `optional` **user\_profile**: [`UserProfileInfo`](UserProfileInfo.md)

Defined in: main.ts:195031

user profile of the reviewer

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`user_profile`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#user_profile)

***

### verified?

> `optional` **verified**: `boolean`

Defined in: main.ts:195020

indicates whether the review has the “Verified Purchase” mark

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`verified`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#verified)

***

### videos?

> `optional` **videos**: [`VideoElement`](VideoElement.md)[]

Defined in: main.ts:195029

videos of the product submitted by the reviewer

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`videos`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#videos)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:23216

the XPath of the element

#### Implementation of

[`IAmazonAmazonReviewItemSerpElementItem`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md).[`xpath`](../interfaces/IAmazonAmazonReviewItemSerpElementItem.md#xpath)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`xpath`](BaseAmazonSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:195053

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:195090

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonAmazonReviewItemSerpElementItem`](AmazonAmazonReviewItemSerpElementItem.md)

Defined in: main.ts:195083

#### Parameters

##### data

`any`

#### Returns

[`AmazonAmazonReviewItemSerpElementItem`](AmazonAmazonReviewItemSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)
