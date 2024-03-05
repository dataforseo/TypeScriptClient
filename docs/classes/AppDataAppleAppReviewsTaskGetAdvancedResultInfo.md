[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppReviewsTaskGetAdvancedResultInfo

# Class: AppDataAppleAppReviewsTaskGetAdvancedResultInfo

## Implements

- [`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [app\_id](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#app_id)
- [check\_url](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#check_url)
- [datetime](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#datetime)
- [items](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#items)
- [items\_count](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#location_code)
- [rating](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#rating)
- [reviews\_count](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#reviews_count)
- [se\_domain](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#se_domain)
- [title](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#title)
- [type](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#init)
- [toJSON](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppReviewsTaskGetAdvancedResultInfo**(`data?`): [`AppDataAppleAppReviewsTaskGetAdvancedResultInfo`](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md) |

#### Returns

[`AppDataAppleAppReviewsTaskGetAdvancedResultInfo`](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:186352](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186352)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

application id received in a POST array

#### Implementation of

[IAppDataAppleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[app_id](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#app_id)

#### Defined in

[main.ts:186318](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186318)

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IAppDataAppleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[check_url](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:186329](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186329)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAppDataAppleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[datetime](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:186334](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186334)

___

### items

• `Optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found reviews

#### Implementation of

[IAppDataAppleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[items](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:186348](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186348)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IAppDataAppleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[items_count](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:186346](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186346)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IAppDataAppleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[language_code](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:186326](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186326)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IAppDataAppleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[location_code](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:186324](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186324)

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

rating of the app
rating of the application for which the reviews are collected

#### Implementation of

[IAppDataAppleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[rating](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#rating)

#### Defined in

[main.ts:186340](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186340)

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews
in this case, the value will be null as App Store does not indicate the total number of app reviews

#### Implementation of

[IAppDataAppleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[reviews_count](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#reviews_count)

#### Defined in

[main.ts:186343](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186343)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IAppDataAppleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:186322](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186322)

___

### title

• `Optional` **title**: `string`

title of the app
title of the application for which the reviews are collected

#### Implementation of

[IAppDataAppleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[title](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#title)

#### Defined in

[main.ts:186337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186337)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IAppDataAppleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[type](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:186320](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186320)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:186361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186361)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:186393](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186393)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppReviewsTaskGetAdvancedResultInfo`](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppReviewsTaskGetAdvancedResultInfo`](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:186386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186386)
