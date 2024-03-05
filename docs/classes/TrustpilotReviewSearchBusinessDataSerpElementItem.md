[dataforseo-client](../README.md) / [Exports](../modules.md) / TrustpilotReviewSearchBusinessDataSerpElementItem

# Class: TrustpilotReviewSearchBusinessDataSerpElementItem

## Hierarchy

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

  ↳ **`TrustpilotReviewSearchBusinessDataSerpElementItem`**

## Implements

- [`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TrustpilotReviewSearchBusinessDataSerpElementItem.md#constructor)

### Properties

- [\_discriminator](TrustpilotReviewSearchBusinessDataSerpElementItem.md#_discriminator)
- [language](TrustpilotReviewSearchBusinessDataSerpElementItem.md#language)
- [position](TrustpilotReviewSearchBusinessDataSerpElementItem.md#position)
- [rank\_absolute](TrustpilotReviewSearchBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](TrustpilotReviewSearchBusinessDataSerpElementItem.md#rank_group)
- [rating](TrustpilotReviewSearchBusinessDataSerpElementItem.md#rating)
- [responses](TrustpilotReviewSearchBusinessDataSerpElementItem.md#responses)
- [review\_images](TrustpilotReviewSearchBusinessDataSerpElementItem.md#review_images)
- [review\_text](TrustpilotReviewSearchBusinessDataSerpElementItem.md#review_text)
- [timestamp](TrustpilotReviewSearchBusinessDataSerpElementItem.md#timestamp)
- [title](TrustpilotReviewSearchBusinessDataSerpElementItem.md#title)
- [url](TrustpilotReviewSearchBusinessDataSerpElementItem.md#url)
- [user\_profile](TrustpilotReviewSearchBusinessDataSerpElementItem.md#user_profile)
- [verified](TrustpilotReviewSearchBusinessDataSerpElementItem.md#verified)

### Methods

- [init](TrustpilotReviewSearchBusinessDataSerpElementItem.md#init)
- [toJSON](TrustpilotReviewSearchBusinessDataSerpElementItem.md#tojson)
- [fromJS](TrustpilotReviewSearchBusinessDataSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new TrustpilotReviewSearchBusinessDataSerpElementItem**(`data?`): [`TrustpilotReviewSearchBusinessDataSerpElementItem`](TrustpilotReviewSearchBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md) |

#### Returns

[`TrustpilotReviewSearchBusinessDataSerpElementItem`](TrustpilotReviewSearchBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[constructor](BaseBusinessDataSerpElementItem.md#constructor)

#### Defined in

[main.ts:199984](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199984)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[_discriminator](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:20076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20076)

___

### language

• `Optional` **language**: `string`

the language of the review

#### Implementation of

[ITrustpilotReviewSearchBusinessDataSerpElementItem](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[language](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#language)

#### Defined in

[main.ts:199963](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199963)

___

### position

• `Optional` **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Implementation of

[ITrustpilotReviewSearchBusinessDataSerpElementItem](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[position](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#position)

#### Defined in

[main.ts:199955](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199955)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Implementation of

[ITrustpilotReviewSearchBusinessDataSerpElementItem](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[rank_absolute](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:199952](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199952)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ITrustpilotReviewSearchBusinessDataSerpElementItem](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[rank_group](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#rank_group)

#### Defined in

[main.ts:199949](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199949)

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[ITrustpilotReviewSearchBusinessDataSerpElementItem](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[rating](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#rating)

#### Defined in

[main.ts:199959](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199959)

___

### responses

• `Optional` **responses**: [`ReviewResponseItemInfo`](ReviewResponseItemInfo.md)[]

owner’s response to the submitted review

#### Implementation of

[ITrustpilotReviewSearchBusinessDataSerpElementItem](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[responses](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#responses)

#### Defined in

[main.ts:199980](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199980)

___

### review\_images

• `Optional` **review\_images**: `string`[]

images submitted by the reviewer
displays URLs to the images provided by the author of the review;
please note that Trustpilot doesn’t allow adding images to reviews, so the review_images parameter will always equal null

#### Implementation of

[ITrustpilotReviewSearchBusinessDataSerpElementItem](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[review_images](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#review_images)

#### Defined in

[main.ts:199976](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199976)

___

### review\_text

• `Optional` **review\_text**: `string`

the content of the review

#### Implementation of

[ITrustpilotReviewSearchBusinessDataSerpElementItem](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[review_text](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#review_text)

#### Defined in

[main.ts:199972](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199972)

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ITrustpilotReviewSearchBusinessDataSerpElementItem](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[timestamp](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#timestamp)

#### Defined in

[main.ts:199968](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199968)

___

### title

• `Optional` **title**: `string`

the title of the review

#### Implementation of

[ITrustpilotReviewSearchBusinessDataSerpElementItem](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[title](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#title)

#### Defined in

[main.ts:199970](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199970)

___

### url

• `Optional` **url**: `string`

the URL of the review

#### Implementation of

[ITrustpilotReviewSearchBusinessDataSerpElementItem](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[url](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#url)

#### Defined in

[main.ts:199957](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199957)

___

### user\_profile

• `Optional` **user\_profile**: [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

user profile of the reviewer

#### Implementation of

[ITrustpilotReviewSearchBusinessDataSerpElementItem](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[user_profile](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#user_profile)

#### Defined in

[main.ts:199978](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199978)

___

### verified

• `Optional` **verified**: `boolean`

indicates whether the review has the “Verified” mark

#### Implementation of

[ITrustpilotReviewSearchBusinessDataSerpElementItem](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[verified](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#verified)

#### Defined in

[main.ts:199961](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199961)

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

[main.ts:199989](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199989)

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

[main.ts:200027](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200027)

___

### fromJS

▸ **fromJS**(`data`): [`TrustpilotReviewSearchBusinessDataSerpElementItem`](TrustpilotReviewSearchBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TrustpilotReviewSearchBusinessDataSerpElementItem`](TrustpilotReviewSearchBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[fromJS](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

[main.ts:200020](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200020)
