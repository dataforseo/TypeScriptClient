[**Documentation**](../README.md)

***

[Documentation](../README.md) / TripadvisorReviewSearchBusinessDataSerpElementItem

# Class: TripadvisorReviewSearchBusinessDataSerpElementItem

Defined in: main.ts:229722

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new TripadvisorReviewSearchBusinessDataSerpElementItem()

> **new TripadvisorReviewSearchBusinessDataSerpElementItem**(`data`?): [`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

Defined in: main.ts:229756

#### Parameters

##### data?

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md)

#### Returns

[`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22211

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

***

### date\_of\_visit?

> `optional` **date\_of\_visit**: `string`

Defined in: main.ts:229734

date of the reviewer’s visit to the local establishment
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`date_of_visit`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#date_of_visit)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:229725

the alignment of the review in SERP
can take the following values: right

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`position`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22209

absolute rank among all the elements

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_absolute`](BaseBusinessDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22207

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#rank_group)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_group`](BaseBusinessDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:229729

the rating score submitted by the reviewer

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`rating`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#rating)

***

### responses?

> `optional` **responses**: [`ReviewResponseItemInfo`](ReviewResponseItemInfo.md)[]

Defined in: main.ts:229749

contains information about the owner’s response

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`responses`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#responses)

***

### review\_highlights?

> `optional` **review\_highlights**: [`ReviewHighlights`](ReviewHighlights.md)[]

Defined in: main.ts:229752

review highlights
contains highlighted review criteria and assessments

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`review_highlights`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#review_highlights)

***

### review\_images?

> `optional` **review\_images**: [`ImageUrlInfo`](ImageUrlInfo.md)[]

Defined in: main.ts:229745

contains URLs of the images used in the review

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`review_images`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#review_images)

***

### review\_text?

> `optional` **review\_text**: `string`

Defined in: main.ts:229743

content of the review

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`review_text`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#review_text)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:229739

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`timestamp`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:229741

title of the review

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`title`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22204

type of element

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`type`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#type)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`type`](BaseBusinessDataSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:229727

URL of the review

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`url`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#url)

***

### user\_profile?

> `optional` **user\_profile**: [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

Defined in: main.ts:229747

information from the reviewer’s profile

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`user_profile`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#user_profile)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:229761

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:229801

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

Defined in: main.ts:229794

#### Parameters

##### data

`any`

#### Returns

[`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)
