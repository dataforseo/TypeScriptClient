[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppStoreReviewsSearchSerpElementItem

# Class: AppDataAppStoreReviewsSearchSerpElementItem

## Hierarchy

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

  ↳ **`AppDataAppStoreReviewsSearchSerpElementItem`**

## Implements

- [`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppStoreReviewsSearchSerpElementItem.md#constructor)

### Properties

- [\_discriminator](AppDataAppStoreReviewsSearchSerpElementItem.md#_discriminator)
- [id](AppDataAppStoreReviewsSearchSerpElementItem.md#id)
- [position](AppDataAppStoreReviewsSearchSerpElementItem.md#position)
- [rank\_absolute](AppDataAppStoreReviewsSearchSerpElementItem.md#rank_absolute)
- [rank\_group](AppDataAppStoreReviewsSearchSerpElementItem.md#rank_group)
- [rating](AppDataAppStoreReviewsSearchSerpElementItem.md#rating)
- [review\_text](AppDataAppStoreReviewsSearchSerpElementItem.md#review_text)
- [timestamp](AppDataAppStoreReviewsSearchSerpElementItem.md#timestamp)
- [title](AppDataAppStoreReviewsSearchSerpElementItem.md#title)
- [user\_profile](AppDataAppStoreReviewsSearchSerpElementItem.md#user_profile)
- [version](AppDataAppStoreReviewsSearchSerpElementItem.md#version)

### Methods

- [init](AppDataAppStoreReviewsSearchSerpElementItem.md#init)
- [toJSON](AppDataAppStoreReviewsSearchSerpElementItem.md#tojson)
- [fromJS](AppDataAppStoreReviewsSearchSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new AppDataAppStoreReviewsSearchSerpElementItem**(`data?`): [`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md) |

#### Returns

[`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

#### Overrides

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[constructor](BaseAppDataSerpElementItem.md#constructor)

#### Defined in

[main.ts:186231](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186231)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[_discriminator](BaseAppDataSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:20450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20450)

___

### id

• `Optional` **id**: `string`

id of the review

#### Implementation of

[IAppDataAppStoreReviewsSearchSerpElementItem](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[id](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#id)

#### Defined in

[main.ts:186221](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186221)

___

### position

• `Optional` **position**: `string`

the alignment of the review in SERP
can take the following values: left

#### Implementation of

[IAppDataAppStoreReviewsSearchSerpElementItem](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[position](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#position)

#### Defined in

[main.ts:186209](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186209)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Implementation of

[IAppDataAppStoreReviewsSearchSerpElementItem](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[rank_absolute](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:186206](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186206)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IAppDataAppStoreReviewsSearchSerpElementItem](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[rank_group](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#rank_group)

#### Defined in

[main.ts:186203](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186203)

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[IAppDataAppStoreReviewsSearchSerpElementItem](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[rating](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#rating)

#### Defined in

[main.ts:186214](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186214)

___

### review\_text

• `Optional` **review\_text**: `string`

content of the review

#### Implementation of

[IAppDataAppStoreReviewsSearchSerpElementItem](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[review_text](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#review_text)

#### Defined in

[main.ts:186225](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186225)

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAppDataAppStoreReviewsSearchSerpElementItem](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[timestamp](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#timestamp)

#### Defined in

[main.ts:186219](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186219)

___

### title

• `Optional` **title**: `string`

title of the review

#### Implementation of

[IAppDataAppStoreReviewsSearchSerpElementItem](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[title](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#title)

#### Defined in

[main.ts:186223](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186223)

___

### user\_profile

• `Optional` **user\_profile**: [`AppUserProfileInfo`](AppUserProfileInfo.md)

user profile of the reviewer

#### Implementation of

[IAppDataAppStoreReviewsSearchSerpElementItem](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[user_profile](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#user_profile)

#### Defined in

[main.ts:186227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186227)

___

### version

• `Optional` **version**: `string`

version of the app
version of the app for which the review is submitted

#### Implementation of

[IAppDataAppStoreReviewsSearchSerpElementItem](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[version](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#version)

#### Defined in

[main.ts:186212](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186212)

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

[main.ts:186236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186236)

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

[main.ts:186263](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186263)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

#### Overrides

[BaseAppDataSerpElementItem](BaseAppDataSerpElementItem.md).[fromJS](BaseAppDataSerpElementItem.md#fromjs)

#### Defined in

[main.ts:186256](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186256)
