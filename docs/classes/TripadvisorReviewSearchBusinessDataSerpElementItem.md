[**Documentation**](../README.md)

***

[Documentation](../README.md) / TripadvisorReviewSearchBusinessDataSerpElementItem

# Class: TripadvisorReviewSearchBusinessDataSerpElementItem

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TripadvisorReviewSearchBusinessDataSerpElementItem()

> **new TripadvisorReviewSearchBusinessDataSerpElementItem**(`data`?): [`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

#### Parameters

##### data?

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md)

#### Returns

[`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Defined in

main.ts:229180

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:22211

***

### date\_of\_visit?

> `optional` **date\_of\_visit**: `string`

date of the reviewer’s visit to the local establishment
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`date_of_visit`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#date_of_visit)

#### Defined in

main.ts:229158

***

### position?

> `optional` **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`position`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#position)

#### Defined in

main.ts:229149

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank among all the elements

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_absolute`](BaseBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:22209

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#rank_group)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_group`](BaseBusinessDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:22207

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`rating`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#rating)

#### Defined in

main.ts:229153

***

### responses?

> `optional` **responses**: [`ReviewResponseItemInfo`](ReviewResponseItemInfo.md)[]

contains information about the owner’s response

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`responses`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#responses)

#### Defined in

main.ts:229173

***

### review\_highlights?

> `optional` **review\_highlights**: [`ReviewHighlights`](ReviewHighlights.md)[]

review highlights
contains highlighted review criteria and assessments

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`review_highlights`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#review_highlights)

#### Defined in

main.ts:229176

***

### review\_images?

> `optional` **review\_images**: [`ImageUrlInfo`](ImageUrlInfo.md)[]

contains URLs of the images used in the review

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`review_images`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#review_images)

#### Defined in

main.ts:229169

***

### review\_text?

> `optional` **review\_text**: `string`

content of the review

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`review_text`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#review_text)

#### Defined in

main.ts:229167

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`timestamp`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#timestamp)

#### Defined in

main.ts:229163

***

### title?

> `optional` **title**: `string`

title of the review

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`title`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#title)

#### Defined in

main.ts:229165

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`type`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#type)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`type`](BaseBusinessDataSerpElementItem.md#type)

#### Defined in

main.ts:22204

***

### url?

> `optional` **url**: `string`

URL of the review

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`url`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#url)

#### Defined in

main.ts:229151

***

### user\_profile?

> `optional` **user\_profile**: [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

information from the reviewer’s profile

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`user_profile`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#user_profile)

#### Defined in

main.ts:229171

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

#### Defined in

main.ts:229185

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

#### Defined in

main.ts:229225

***

### fromJS()

> `static` **fromJS**(`data`): [`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

main.ts:229218
