**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / YelpReviewsSearchBusinessDataSerpElementItem

# Class: YelpReviewsSearchBusinessDataSerpElementItem

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`IYelpReviewsSearchBusinessDataSerpElementItem`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new YelpReviewsSearchBusinessDataSerpElementItem(data)

> **new YelpReviewsSearchBusinessDataSerpElementItem**(`data`?): [`YelpReviewsSearchBusinessDataSerpElementItem`](YelpReviewsSearchBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`IYelpReviewsSearchBusinessDataSerpElementItem`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md)

#### Returns

[`YelpReviewsSearchBusinessDataSerpElementItem`](YelpReviewsSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Source

main.ts:210874

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Source

main.ts:20532

***

### position?

> **`optional`** **position**: `string`

the alignment of the review in SERP
can take the following values: left

#### Implementation of

[`IYelpReviewsSearchBusinessDataSerpElementItem`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[`position`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#position)

#### Source

main.ts:210852

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Implementation of

[`IYelpReviewsSearchBusinessDataSerpElementItem`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#rank_absolute)

#### Source

main.ts:210849

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IYelpReviewsSearchBusinessDataSerpElementItem`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#rank_group)

#### Source

main.ts:210846

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[`IYelpReviewsSearchBusinessDataSerpElementItem`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[`rating`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#rating)

#### Source

main.ts:210858

***

### responses?

> **`optional`** **responses**: [`ReviewResponseItemInfo`](ReviewResponseItemInfo.md)[]

text of the owner’s response

#### Implementation of

[`IYelpReviewsSearchBusinessDataSerpElementItem`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[`responses`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#responses)

#### Source

main.ts:210870

***

### review\_id?

> **`optional`** **review\_id**: `string`

the unique identifier of a review received from Yelp
example:
WvjNtncj8PDZytbofWlC5A

#### Implementation of

[`IYelpReviewsSearchBusinessDataSerpElementItem`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[`review_id`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#review_id)

#### Source

main.ts:210856

***

### review\_images?

> **`optional`** **review\_images**: `string`[]

images submitted by the reviewer
you will find URLs to the images provided by the author of this review

#### Implementation of

[`IYelpReviewsSearchBusinessDataSerpElementItem`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[`review_images`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#review_images)

#### Source

main.ts:210866

***

### review\_text?

> **`optional`** **review\_text**: `string`

the content of the review

#### Implementation of

[`IYelpReviewsSearchBusinessDataSerpElementItem`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[`review_text`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#review_text)

#### Source

main.ts:210863

***

### timestamp?

> **`optional`** **timestamp**: `string`

the time of publication
indicates timestamp of when the review was listed

#### Implementation of

[`IYelpReviewsSearchBusinessDataSerpElementItem`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[`timestamp`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#timestamp)

#### Source

main.ts:210861

***

### user\_profile?

> **`optional`** **user\_profile**: [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

information listed in the reviewer’s profile

#### Implementation of

[`IYelpReviewsSearchBusinessDataSerpElementItem`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[`user_profile`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#user_profile)

#### Source

main.ts:210868

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

#### Source

main.ts:210879

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

#### Source

main.ts:210914

***

### fromJS()

> **`static`** **fromJS**(`data`): [`YelpReviewsSearchBusinessDataSerpElementItem`](YelpReviewsSearchBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`YelpReviewsSearchBusinessDataSerpElementItem`](YelpReviewsSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Source

main.ts:210907
