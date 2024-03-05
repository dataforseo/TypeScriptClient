[dataforseo-client](../README.md) / [Exports](../modules.md) / YelpReviewsSearchBusinessDataSerpElementItem

# Class: YelpReviewsSearchBusinessDataSerpElementItem

## Hierarchy

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

  ↳ **`YelpReviewsSearchBusinessDataSerpElementItem`**

## Implements

- [`IYelpReviewsSearchBusinessDataSerpElementItem`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](YelpReviewsSearchBusinessDataSerpElementItem.md#constructor)

### Properties

- [\_discriminator](YelpReviewsSearchBusinessDataSerpElementItem.md#_discriminator)
- [position](YelpReviewsSearchBusinessDataSerpElementItem.md#position)
- [rank\_absolute](YelpReviewsSearchBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](YelpReviewsSearchBusinessDataSerpElementItem.md#rank_group)
- [rating](YelpReviewsSearchBusinessDataSerpElementItem.md#rating)
- [responses](YelpReviewsSearchBusinessDataSerpElementItem.md#responses)
- [review\_id](YelpReviewsSearchBusinessDataSerpElementItem.md#review_id)
- [review\_images](YelpReviewsSearchBusinessDataSerpElementItem.md#review_images)
- [review\_text](YelpReviewsSearchBusinessDataSerpElementItem.md#review_text)
- [timestamp](YelpReviewsSearchBusinessDataSerpElementItem.md#timestamp)
- [user\_profile](YelpReviewsSearchBusinessDataSerpElementItem.md#user_profile)

### Methods

- [init](YelpReviewsSearchBusinessDataSerpElementItem.md#init)
- [toJSON](YelpReviewsSearchBusinessDataSerpElementItem.md#tojson)
- [fromJS](YelpReviewsSearchBusinessDataSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new YelpReviewsSearchBusinessDataSerpElementItem**(`data?`): [`YelpReviewsSearchBusinessDataSerpElementItem`](YelpReviewsSearchBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IYelpReviewsSearchBusinessDataSerpElementItem`](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md) |

#### Returns

[`YelpReviewsSearchBusinessDataSerpElementItem`](YelpReviewsSearchBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[constructor](BaseBusinessDataSerpElementItem.md#constructor)

#### Defined in

[main.ts:205263](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205263)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[_discriminator](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:20076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20076)

___

### position

• `Optional` **position**: `string`

the alignment of the review in SERP
can take the following values: left

#### Implementation of

[IYelpReviewsSearchBusinessDataSerpElementItem](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[position](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#position)

#### Defined in

[main.ts:205241](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205241)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Implementation of

[IYelpReviewsSearchBusinessDataSerpElementItem](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[rank_absolute](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:205238](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205238)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IYelpReviewsSearchBusinessDataSerpElementItem](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[rank_group](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#rank_group)

#### Defined in

[main.ts:205235](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205235)

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[IYelpReviewsSearchBusinessDataSerpElementItem](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[rating](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#rating)

#### Defined in

[main.ts:205247](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205247)

___

### responses

• `Optional` **responses**: [`ReviewResponseItemInfo`](ReviewResponseItemInfo.md)[]

text of the owner’s response

#### Implementation of

[IYelpReviewsSearchBusinessDataSerpElementItem](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[responses](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#responses)

#### Defined in

[main.ts:205259](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205259)

___

### review\_id

• `Optional` **review\_id**: `string`

the unique identifier of a review received from Yelp
example:
WvjNtncj8PDZytbofWlC5A

#### Implementation of

[IYelpReviewsSearchBusinessDataSerpElementItem](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[review_id](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#review_id)

#### Defined in

[main.ts:205245](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205245)

___

### review\_images

• `Optional` **review\_images**: `string`[]

images submitted by the reviewer
you will find URLs to the images provided by the author of this review

#### Implementation of

[IYelpReviewsSearchBusinessDataSerpElementItem](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[review_images](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#review_images)

#### Defined in

[main.ts:205255](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205255)

___

### review\_text

• `Optional` **review\_text**: `string`

the content of the review

#### Implementation of

[IYelpReviewsSearchBusinessDataSerpElementItem](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[review_text](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#review_text)

#### Defined in

[main.ts:205252](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205252)

___

### timestamp

• `Optional` **timestamp**: `string`

the time of publication
indicates timestamp of when the review was listed

#### Implementation of

[IYelpReviewsSearchBusinessDataSerpElementItem](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[timestamp](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#timestamp)

#### Defined in

[main.ts:205250](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205250)

___

### user\_profile

• `Optional` **user\_profile**: [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

information listed in the reviewer’s profile

#### Implementation of

[IYelpReviewsSearchBusinessDataSerpElementItem](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md).[user_profile](../interfaces/IYelpReviewsSearchBusinessDataSerpElementItem.md#user_profile)

#### Defined in

[main.ts:205257](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205257)

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

[main.ts:205268](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205268)

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

[main.ts:205303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205303)

___

### fromJS

▸ **fromJS**(`data`): [`YelpReviewsSearchBusinessDataSerpElementItem`](YelpReviewsSearchBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`YelpReviewsSearchBusinessDataSerpElementItem`](YelpReviewsSearchBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[fromJS](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

[main.ts:205296](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205296)
