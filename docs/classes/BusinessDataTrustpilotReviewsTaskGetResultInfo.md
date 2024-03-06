[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotReviewsTaskGetResultInfo

# Class: BusinessDataTrustpilotReviewsTaskGetResultInfo

## Implements

- [`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTrustpilotReviewsTaskGetResultInfo.md#constructor)

### Properties

- [check\_url](BusinessDataTrustpilotReviewsTaskGetResultInfo.md#check_url)
- [datetime](BusinessDataTrustpilotReviewsTaskGetResultInfo.md#datetime)
- [domain](BusinessDataTrustpilotReviewsTaskGetResultInfo.md#domain)
- [items](BusinessDataTrustpilotReviewsTaskGetResultInfo.md#items)
- [items\_count](BusinessDataTrustpilotReviewsTaskGetResultInfo.md#items_count)
- [location](BusinessDataTrustpilotReviewsTaskGetResultInfo.md#location)
- [rating](BusinessDataTrustpilotReviewsTaskGetResultInfo.md#rating)
- [reviews\_count](BusinessDataTrustpilotReviewsTaskGetResultInfo.md#reviews_count)
- [se\_domain](BusinessDataTrustpilotReviewsTaskGetResultInfo.md#se_domain)
- [title](BusinessDataTrustpilotReviewsTaskGetResultInfo.md#title)
- [type](BusinessDataTrustpilotReviewsTaskGetResultInfo.md#type)

### Methods

- [init](BusinessDataTrustpilotReviewsTaskGetResultInfo.md#init)
- [toJSON](BusinessDataTrustpilotReviewsTaskGetResultInfo.md#tojson)
- [fromJS](BusinessDataTrustpilotReviewsTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTrustpilotReviewsTaskGetResultInfo**(`data?`): [`BusinessDataTrustpilotReviewsTaskGetResultInfo`](BusinessDataTrustpilotReviewsTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTrustpilotReviewsTaskGetResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md) |

#### Returns

[`BusinessDataTrustpilotReviewsTaskGetResultInfo`](BusinessDataTrustpilotReviewsTaskGetResultInfo.md)

#### Defined in

[main.ts:200133](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200133)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[check_url](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#check_url)

#### Defined in

[main.ts:200107](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200107)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[datetime](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#datetime)

#### Defined in

[main.ts:200112](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200112)

___


### domain

• `Optional` **domain**: `string`

domain of the business entity

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[domain](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#domain)

#### Defined in

[main.ts:200100](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200100)

___


### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[items](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#items)

#### Defined in

[main.ts:200129](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200129)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[items_count](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#items_count)

#### Defined in

[main.ts:200126](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200126)

___


### location

• `Optional` **location**: `string`

location of the business entity as specified on Trustpilot
address of the business entity for which the reviews are collected

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[location](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#location)

#### Defined in

[main.ts:200118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200118)

___


### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

rating of the corresponding business entity
popularity rate based on reviews and displayed in SERP

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[rating](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#rating)

#### Defined in

[main.ts:200123](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200123)

___


### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[reviews_count](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#reviews_count)

#### Defined in

[main.ts:200120](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200120)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[se_domain](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#se_domain)

#### Defined in

[main.ts:200104](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200104)

___


### title

• `Optional` **title**: `string`

title of the ‘reviews’ element on Trustpilot
the name of the business entity for which the reviews are collected

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[title](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#title)

#### Defined in

[main.ts:200115](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200115)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md).[type](../interfaces/IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#type)

#### Defined in

[main.ts:200102](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200102)

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

[main.ts:200142](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200142)

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

[main.ts:200173](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200173)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTaskGetResultInfo`](BusinessDataTrustpilotReviewsTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTrustpilotReviewsTaskGetResultInfo`](BusinessDataTrustpilotReviewsTaskGetResultInfo.md)

#### Defined in

[main.ts:200166](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200166)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")