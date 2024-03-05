[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppReviewsTaskGetAdvancedResultInfo

# Class: AppDataGoogleAppReviewsTaskGetAdvancedResultInfo

## Implements

- [`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [app\_id](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#app_id)
- [check\_url](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#check_url)
- [datetime](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#datetime)
- [items](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#items)
- [items\_count](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#location_code)
- [rating](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#rating)
- [reviews\_count](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#reviews_count)
- [se\_domain](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#se_domain)
- [title](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#title)
- [type](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#init)
- [toJSON](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppReviewsTaskGetAdvancedResultInfo**(`data?`): [`AppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md) |

#### Returns

[`AppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:181462](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181462)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

application id received in a POST array

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[app_id](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#app_id)

#### Defined in

[main.ts:181428](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181428)

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[check_url](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:181439](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181439)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[datetime](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:181444](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181444)

___

### items

• `Optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[items](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:181458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181458)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[items_count](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:181455](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181455)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[language_code](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:181436](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181436)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[location_code](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:181434](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181434)

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

rating of the app
rating of the application for which the reviews are collected

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[rating](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#rating)

#### Defined in

[main.ts:181450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181450)

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[reviews_count](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#reviews_count)

#### Defined in

[main.ts:181452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181452)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:181432](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181432)

___

### title

• `Optional` **title**: `string`

title of the app
title of the application for which the reviews are collected

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[title](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#title)

#### Defined in

[main.ts:181447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181447)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[type](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:181430](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181430)

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

[main.ts:181471](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181471)

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

[main.ts:181503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181503)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:181496](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181496)
