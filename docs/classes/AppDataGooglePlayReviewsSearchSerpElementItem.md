[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGooglePlayReviewsSearchSerpElementItem

# Class: AppDataGooglePlayReviewsSearchSerpElementItem

## Hierarchy

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

  ↳ **`AppDataGooglePlayReviewsSearchSerpElementItem`**

## Implements

- [`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGooglePlayReviewsSearchSerpElementItem.md#constructor)

### Properties

- [\_discriminator](AppDataGooglePlayReviewsSearchSerpElementItem.md#_discriminator)
- [helpful\_count](AppDataGooglePlayReviewsSearchSerpElementItem.md#helpful_count)
- [id](AppDataGooglePlayReviewsSearchSerpElementItem.md#id)
- [position](AppDataGooglePlayReviewsSearchSerpElementItem.md#position)
- [rank\_absolute](AppDataGooglePlayReviewsSearchSerpElementItem.md#rank_absolute)
- [rank\_group](AppDataGooglePlayReviewsSearchSerpElementItem.md#rank_group)
- [rating](AppDataGooglePlayReviewsSearchSerpElementItem.md#rating)
- [responses](AppDataGooglePlayReviewsSearchSerpElementItem.md#responses)
- [review\_text](AppDataGooglePlayReviewsSearchSerpElementItem.md#review_text)
- [timestamp](AppDataGooglePlayReviewsSearchSerpElementItem.md#timestamp)
- [title](AppDataGooglePlayReviewsSearchSerpElementItem.md#title)
- [user\_profile](AppDataGooglePlayReviewsSearchSerpElementItem.md#user_profile)
- [version](AppDataGooglePlayReviewsSearchSerpElementItem.md#version)

### Methods

- [init](AppDataGooglePlayReviewsSearchSerpElementItem.md#init)
- [toJSON](AppDataGooglePlayReviewsSearchSerpElementItem.md#tojson)
- [fromJS](AppDataGooglePlayReviewsSearchSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new AppDataGooglePlayReviewsSearchSerpElementItem**(`data?`): [`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md) |

#### Returns

[`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)

#### Overrides

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[constructor](BaseAppDataSerpElementItem.md#constructor)

#### Defined in

[main.ts:181323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181323)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[_discriminator](BaseAppDataSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:20450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20450)

___

### helpful\_count

• `Optional` **helpful\_count**: `number`

number of helpful votes
indicates how many users considered the review helpful and voted with the thumbs up icon

#### Implementation of

[IAppDataGooglePlayReviewsSearchSerpElementItem](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[helpful_count](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#helpful_count)

#### Defined in

[main.ts:181310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181310)

___

### id

• `Optional` **id**: `string`

id of the review

#### Implementation of

[IAppDataGooglePlayReviewsSearchSerpElementItem](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[id](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#id)

#### Defined in

[main.ts:181307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181307)

___

### position

• `Optional` **position**: `string`

the alignment of the review in SERP
can take the following values: left

#### Implementation of

[IAppDataGooglePlayReviewsSearchSerpElementItem](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[position](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#position)

#### Defined in

[main.ts:181295](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181295)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Implementation of

[IAppDataGooglePlayReviewsSearchSerpElementItem](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[rank_absolute](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:181292](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181292)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IAppDataGooglePlayReviewsSearchSerpElementItem](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[rank_group](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#rank_group)

#### Defined in

[main.ts:181289](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181289)

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[IAppDataGooglePlayReviewsSearchSerpElementItem](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[rating](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#rating)

#### Defined in

[main.ts:181300](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181300)

___

### responses

• `Optional` **responses**: [`ResponseDataInfo`](ResponseDataInfo.md)[]

response from the developer

#### Implementation of

[IAppDataGooglePlayReviewsSearchSerpElementItem](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[responses](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#responses)

#### Defined in

[main.ts:181319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181319)

___

### review\_text

• `Optional` **review\_text**: `string`

content of the review

#### Implementation of

[IAppDataGooglePlayReviewsSearchSerpElementItem](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[review_text](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#review_text)

#### Defined in

[main.ts:181315](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181315)

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAppDataGooglePlayReviewsSearchSerpElementItem](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[timestamp](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#timestamp)

#### Defined in

[main.ts:181305](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181305)

___

### title

• `Optional` **title**: `string`

title of the review
Google Play doesn’t provide an option to title reviews, so this parameter will always equal null

#### Implementation of

[IAppDataGooglePlayReviewsSearchSerpElementItem](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[title](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#title)

#### Defined in

[main.ts:181313](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181313)

___

### user\_profile

• `Optional` **user\_profile**: [`AppUserProfileInfo`](AppUserProfileInfo.md)

user profile of the reviewer

#### Implementation of

[IAppDataGooglePlayReviewsSearchSerpElementItem](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[user_profile](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#user_profile)

#### Defined in

[main.ts:181317](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181317)

___

### version

• `Optional` **version**: `string`

version of the app
version of the app for which the review is submitted

#### Implementation of

[IAppDataGooglePlayReviewsSearchSerpElementItem](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[version](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#version)

#### Defined in

[main.ts:181298](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181298)

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

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[init](BaseAppDataSerpElementItem.md#init)

#### Defined in

[main.ts:181328](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181328)

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

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[toJSON](BaseAppDataSerpElementItem.md#tojson)

#### Defined in

[main.ts:181361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181361)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)

#### Overrides

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[fromJS](BaseAppDataSerpElementItem.md#fromjs)

#### Defined in

[main.ts:181354](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181354)
