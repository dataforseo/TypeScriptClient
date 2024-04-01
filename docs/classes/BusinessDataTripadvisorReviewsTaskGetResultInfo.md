[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorReviewsTaskGetResultInfo

# Class: BusinessDataTripadvisorReviewsTaskGetResultInfo

## Implements

- [`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorReviewsTaskGetResultInfo.md#constructor)

### Properties

- [check\_url](BusinessDataTripadvisorReviewsTaskGetResultInfo.md#check_url)
- [datetime](BusinessDataTripadvisorReviewsTaskGetResultInfo.md#datetime)
- [items](BusinessDataTripadvisorReviewsTaskGetResultInfo.md#items)
- [items\_count](BusinessDataTripadvisorReviewsTaskGetResultInfo.md#items_count)
- [language\_code](BusinessDataTripadvisorReviewsTaskGetResultInfo.md#language_code)
- [location](BusinessDataTripadvisorReviewsTaskGetResultInfo.md#location)
- [rating](BusinessDataTripadvisorReviewsTaskGetResultInfo.md#rating)
- [reviews\_count](BusinessDataTripadvisorReviewsTaskGetResultInfo.md#reviews_count)
- [se\_domain](BusinessDataTripadvisorReviewsTaskGetResultInfo.md#se_domain)
- [title](BusinessDataTripadvisorReviewsTaskGetResultInfo.md#title)
- [type](BusinessDataTripadvisorReviewsTaskGetResultInfo.md#type)
- [url\_path](BusinessDataTripadvisorReviewsTaskGetResultInfo.md#url_path)

### Methods

- [init](BusinessDataTripadvisorReviewsTaskGetResultInfo.md#init)
- [toJSON](BusinessDataTripadvisorReviewsTaskGetResultInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorReviewsTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorReviewsTaskGetResultInfo**(`data?`): [`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md) |

#### Returns

[`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)

#### Defined in

main.ts:208030

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[check_url](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#check_url)

#### Defined in

main.ts:208002

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[datetime](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#datetime)

#### Defined in

main.ts:208007

___

### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[items](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#items)

#### Defined in

main.ts:208024

___

### items\_count

• `Optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[items_count](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#items_count)

#### Defined in

main.ts:208021

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[language_code](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:208026

___

### location

• `Optional` **location**: `string`

location of the local establishment
address of the local establishment for which the reviews are collected

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[location](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#location)

#### Defined in

main.ts:208013

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[rating](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#rating)

#### Defined in

main.ts:208018

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[reviews_count](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#reviews_count)

#### Defined in

main.ts:208015

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[se_domain](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#se_domain)

#### Defined in

main.ts:207999

___

### title

• `Optional` **title**: `string`

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[title](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#title)

#### Defined in

main.ts:208010

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[type](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#type)

#### Defined in

main.ts:207997

___

### url\_path

• `Optional` **url\_path**: `string`

URL path received in a POST array

#### Implementation of

[IBusinessDataTripadvisorReviewsTaskGetResultInfo](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md).[url_path](../interfaces/IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#url_path)

#### Defined in

main.ts:207995

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

main.ts:208039

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

main.ts:208071

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorReviewsTaskGetResultInfo`](BusinessDataTripadvisorReviewsTaskGetResultInfo.md)

#### Defined in

main.ts:208064
