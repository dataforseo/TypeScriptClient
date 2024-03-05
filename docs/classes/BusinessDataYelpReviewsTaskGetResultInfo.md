[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataYelpReviewsTaskGetResultInfo

# Class: BusinessDataYelpReviewsTaskGetResultInfo

## Implements

- [`IBusinessDataYelpReviewsTaskGetResultInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpReviewsTaskGetResultInfo.md#constructor)

### Properties

- [alias](BusinessDataYelpReviewsTaskGetResultInfo.md#alias)
- [check\_url](BusinessDataYelpReviewsTaskGetResultInfo.md#check_url)
- [datetime](BusinessDataYelpReviewsTaskGetResultInfo.md#datetime)
- [items](BusinessDataYelpReviewsTaskGetResultInfo.md#items)
- [items\_count](BusinessDataYelpReviewsTaskGetResultInfo.md#items_count)
- [keyword](BusinessDataYelpReviewsTaskGetResultInfo.md#keyword)
- [language\_code](BusinessDataYelpReviewsTaskGetResultInfo.md#language_code)
- [location\_code](BusinessDataYelpReviewsTaskGetResultInfo.md#location_code)
- [rating](BusinessDataYelpReviewsTaskGetResultInfo.md#rating)
- [reviews\_count](BusinessDataYelpReviewsTaskGetResultInfo.md#reviews_count)
- [se\_domain](BusinessDataYelpReviewsTaskGetResultInfo.md#se_domain)
- [title](BusinessDataYelpReviewsTaskGetResultInfo.md#title)
- [type](BusinessDataYelpReviewsTaskGetResultInfo.md#type)

### Methods

- [init](BusinessDataYelpReviewsTaskGetResultInfo.md#init)
- [toJSON](BusinessDataYelpReviewsTaskGetResultInfo.md#tojson)
- [fromJS](BusinessDataYelpReviewsTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpReviewsTaskGetResultInfo**(`data?`): [`BusinessDataYelpReviewsTaskGetResultInfo`](BusinessDataYelpReviewsTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpReviewsTaskGetResultInfo`](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md) |

#### Returns

[`BusinessDataYelpReviewsTaskGetResultInfo`](BusinessDataYelpReviewsTaskGetResultInfo.md)

#### Defined in

[main.ts:205403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205403)

## Properties

### alias

• `Optional` **alias**: `string`

Yelp business identifier

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResultInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[alias](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#alias)

#### Defined in

[main.ts:205369](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205369)

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Yelp results
you can use it to make sure that we provided accurate results

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResultInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[check_url](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#check_url)

#### Defined in

[main.ts:205381](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205381)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResultInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[datetime](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#datetime)

#### Defined in

[main.ts:205386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205386)

___

### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResultInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[items](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#items)

#### Defined in

[main.ts:205399](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205399)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResultInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[items_count](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#items_count)

#### Defined in

[main.ts:205396](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205396)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
this field will contain the alias parameter if it was specified in a POST array

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResultInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[keyword](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#keyword)

#### Defined in

[main.ts:205367](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205367)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResultInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[language_code](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#language_code)

#### Defined in

[main.ts:205378](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205378)

___

### location\_code

• `Optional` **location\_code**: `string`

location code in a POST array
if location_code was not specified in a POST array, the value equals null

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResultInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[location_code](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#location_code)

#### Defined in

[main.ts:205376](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205376)

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResultInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[rating](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#rating)

#### Defined in

[main.ts:205391](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205391)

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResultInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[reviews_count](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#reviews_count)

#### Defined in

[main.ts:205393](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205393)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResultInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[se_domain](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#se_domain)

#### Defined in

[main.ts:205373](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205373)

___

### title

• `Optional` **title**: `string`

title of the reviews from Yelp
the name of the local establishment for which the reviews are collected

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResultInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[title](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#title)

#### Defined in

[main.ts:205389](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205389)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBusinessDataYelpReviewsTaskGetResultInfo](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md).[type](../interfaces/IBusinessDataYelpReviewsTaskGetResultInfo.md#type)

#### Defined in

[main.ts:205371](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205371)

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

[main.ts:205412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205412)

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

[main.ts:205445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205445)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpReviewsTaskGetResultInfo`](BusinessDataYelpReviewsTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpReviewsTaskGetResultInfo`](BusinessDataYelpReviewsTaskGetResultInfo.md)

#### Defined in

[main.ts:205438](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205438)
