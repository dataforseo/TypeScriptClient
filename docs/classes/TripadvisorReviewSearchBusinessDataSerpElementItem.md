**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new TripadvisorReviewSearchBusinessDataSerpElementItem(data)

> **new TripadvisorReviewSearchBusinessDataSerpElementItem**(`data`?): [`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md)

#### Returns

[`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Source

main.ts:213599

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Source

main.ts:20770

***

### date\_of\_visit?

> **`optional`** **date\_of\_visit**: `string`

date of the reviewer’s visit to the local establishment
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`date_of_visit`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#date_of_visit)

#### Source

main.ts:213577

***

### position?

> **`optional`** **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`position`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#position)

#### Source

main.ts:213568

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#rank_absolute)

#### Source

main.ts:213565

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#rank_group)

#### Source

main.ts:213562

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`rating`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#rating)

#### Source

main.ts:213572

***

### responses?

> **`optional`** **responses**: [`ReviewResponseItemInfo`](ReviewResponseItemInfo.md)[]

contains information about the owner’s response

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`responses`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#responses)

#### Source

main.ts:213592

***

### review\_highlights?

> **`optional`** **review\_highlights**: [`ReviewHighlights`](ReviewHighlights.md)[]

review highlights
contains highlighted review criteria and assessments

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`review_highlights`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#review_highlights)

#### Source

main.ts:213595

***

### review\_images?

> **`optional`** **review\_images**: [`ImageUrlInfo`](ImageUrlInfo.md)[]

contains URLs of the images used in the review

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`review_images`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#review_images)

#### Source

main.ts:213588

***

### review\_text?

> **`optional`** **review\_text**: `string`

content of the review

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`review_text`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#review_text)

#### Source

main.ts:213586

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`timestamp`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#timestamp)

#### Source

main.ts:213582

***

### title?

> **`optional`** **title**: `string`

title of the review

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`title`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#title)

#### Source

main.ts:213584

***

### url?

> **`optional`** **url**: `string`

URL of the review

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`url`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#url)

#### Source

main.ts:213570

***

### user\_profile?

> **`optional`** **user\_profile**: [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

information from the reviewer’s profile

#### Implementation of

[`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[`user_profile`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#user_profile)

#### Source

main.ts:213590

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

main.ts:213604

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

main.ts:213646

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Source

main.ts:213639
