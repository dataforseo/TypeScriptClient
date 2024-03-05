[dataforseo-client](../README.md) / [Exports](../modules.md) / TripadvisorReviewSearchBusinessDataSerpElementItem

# Class: TripadvisorReviewSearchBusinessDataSerpElementItem

## Hierarchy

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

  ↳ **`TripadvisorReviewSearchBusinessDataSerpElementItem`**

## Implements

- [`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TripadvisorReviewSearchBusinessDataSerpElementItem.md#constructor)

### Properties

- [\_discriminator](TripadvisorReviewSearchBusinessDataSerpElementItem.md#_discriminator)
- [date\_of\_visit](TripadvisorReviewSearchBusinessDataSerpElementItem.md#date_of_visit)
- [position](TripadvisorReviewSearchBusinessDataSerpElementItem.md#position)
- [rank\_absolute](TripadvisorReviewSearchBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](TripadvisorReviewSearchBusinessDataSerpElementItem.md#rank_group)
- [rating](TripadvisorReviewSearchBusinessDataSerpElementItem.md#rating)
- [responses](TripadvisorReviewSearchBusinessDataSerpElementItem.md#responses)
- [review\_images](TripadvisorReviewSearchBusinessDataSerpElementItem.md#review_images)
- [review\_text](TripadvisorReviewSearchBusinessDataSerpElementItem.md#review_text)
- [timestamp](TripadvisorReviewSearchBusinessDataSerpElementItem.md#timestamp)
- [title](TripadvisorReviewSearchBusinessDataSerpElementItem.md#title)
- [url](TripadvisorReviewSearchBusinessDataSerpElementItem.md#url)
- [user\_profile](TripadvisorReviewSearchBusinessDataSerpElementItem.md#user_profile)

### Methods

- [init](TripadvisorReviewSearchBusinessDataSerpElementItem.md#init)
- [toJSON](TripadvisorReviewSearchBusinessDataSerpElementItem.md#tojson)
- [fromJS](TripadvisorReviewSearchBusinessDataSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new TripadvisorReviewSearchBusinessDataSerpElementItem**(`data?`): [`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITripadvisorReviewSearchBusinessDataSerpElementItem`](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md) |

#### Returns

[`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[constructor](BaseBusinessDataSerpElementItem.md#constructor)

#### Defined in

[main.ts:202421](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202421)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[_discriminator](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:20076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20076)

___

### date\_of\_visit

• `Optional` **date\_of\_visit**: `string`

date of the reviewer’s visit to the local establishment
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ITripadvisorReviewSearchBusinessDataSerpElementItem](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[date_of_visit](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#date_of_visit)

#### Defined in

[main.ts:202402](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202402)

___

### position

• `Optional` **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Implementation of

[ITripadvisorReviewSearchBusinessDataSerpElementItem](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[position](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#position)

#### Defined in

[main.ts:202393](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202393)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Implementation of

[ITripadvisorReviewSearchBusinessDataSerpElementItem](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[rank_absolute](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:202390](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202390)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ITripadvisorReviewSearchBusinessDataSerpElementItem](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[rank_group](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#rank_group)

#### Defined in

[main.ts:202387](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202387)

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[ITripadvisorReviewSearchBusinessDataSerpElementItem](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[rating](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#rating)

#### Defined in

[main.ts:202397](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202397)

___

### responses

• `Optional` **responses**: [`ReviewResponseItemInfo`](ReviewResponseItemInfo.md)[]

contains information about the owner’s response

#### Implementation of

[ITripadvisorReviewSearchBusinessDataSerpElementItem](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[responses](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#responses)

#### Defined in

[main.ts:202417](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202417)

___

### review\_images

• `Optional` **review\_images**: [`ImageUrlInfo`](ImageUrlInfo.md)[]

contains URLs of the images used in the review

#### Implementation of

[ITripadvisorReviewSearchBusinessDataSerpElementItem](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[review_images](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#review_images)

#### Defined in

[main.ts:202413](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202413)

___

### review\_text

• `Optional` **review\_text**: `string`

content of the review

#### Implementation of

[ITripadvisorReviewSearchBusinessDataSerpElementItem](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[review_text](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#review_text)

#### Defined in

[main.ts:202411](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202411)

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ITripadvisorReviewSearchBusinessDataSerpElementItem](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[timestamp](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#timestamp)

#### Defined in

[main.ts:202407](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202407)

___

### title

• `Optional` **title**: `string`

title of the review

#### Implementation of

[ITripadvisorReviewSearchBusinessDataSerpElementItem](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[title](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#title)

#### Defined in

[main.ts:202409](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202409)

___

### url

• `Optional` **url**: `string`

URL of the review

#### Implementation of

[ITripadvisorReviewSearchBusinessDataSerpElementItem](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[url](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#url)

#### Defined in

[main.ts:202395](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202395)

___

### user\_profile

• `Optional` **user\_profile**: [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

information from the reviewer’s profile

#### Implementation of

[ITripadvisorReviewSearchBusinessDataSerpElementItem](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md).[user_profile](../interfaces/ITripadvisorReviewSearchBusinessDataSerpElementItem.md#user_profile)

#### Defined in

[main.ts:202415](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202415)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[init](BaseBusinessDataSerpElementItem.md#init)

#### Defined in

[main.ts:202426](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202426)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[toJSON](BaseBusinessDataSerpElementItem.md#tojson)

#### Defined in

[main.ts:202463](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202463)

___

### fromJS

▸ **fromJS**(`data`): [`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TripadvisorReviewSearchBusinessDataSerpElementItem`](TripadvisorReviewSearchBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[fromJS](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

[main.ts:202456](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202456)
