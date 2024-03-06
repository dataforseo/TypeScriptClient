[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleReviewsTaskGetResultInfo

# Class: BusinessDataGoogleReviewsTaskGetResultInfo

## Implements

- [`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleReviewsTaskGetResultInfo.md#constructor)

### Properties

- [check\_url](BusinessDataGoogleReviewsTaskGetResultInfo.md#check_url)
- [cid](BusinessDataGoogleReviewsTaskGetResultInfo.md#cid)
- [datetime](BusinessDataGoogleReviewsTaskGetResultInfo.md#datetime)
- [feature\_id](BusinessDataGoogleReviewsTaskGetResultInfo.md#feature_id)
- [items](BusinessDataGoogleReviewsTaskGetResultInfo.md#items)
- [items\_count](BusinessDataGoogleReviewsTaskGetResultInfo.md#items_count)
- [keyword](BusinessDataGoogleReviewsTaskGetResultInfo.md#keyword)
- [language\_code](BusinessDataGoogleReviewsTaskGetResultInfo.md#language_code)
- [location\_code](BusinessDataGoogleReviewsTaskGetResultInfo.md#location_code)
- [place\_id](BusinessDataGoogleReviewsTaskGetResultInfo.md#place_id)
- [rating](BusinessDataGoogleReviewsTaskGetResultInfo.md#rating)
- [reviews\_count](BusinessDataGoogleReviewsTaskGetResultInfo.md#reviews_count)
- [se\_domain](BusinessDataGoogleReviewsTaskGetResultInfo.md#se_domain)
- [sub\_title](BusinessDataGoogleReviewsTaskGetResultInfo.md#sub_title)
- [title](BusinessDataGoogleReviewsTaskGetResultInfo.md#title)
- [type](BusinessDataGoogleReviewsTaskGetResultInfo.md#type)

### Methods

- [init](BusinessDataGoogleReviewsTaskGetResultInfo.md#init)
- [toJSON](BusinessDataGoogleReviewsTaskGetResultInfo.md#tojson)
- [fromJS](BusinessDataGoogleReviewsTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleReviewsTaskGetResultInfo**(`data?`): [`BusinessDataGoogleReviewsTaskGetResultInfo`](BusinessDataGoogleReviewsTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md) |

#### Returns

[`BusinessDataGoogleReviewsTaskGetResultInfo`](BusinessDataGoogleReviewsTaskGetResultInfo.md)

#### Defined in

[main.ts:198428](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198428)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResultInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[check_url](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#check_url)

#### Defined in

[main.ts:198392](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198392)

___


### cid

• `Optional` **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResultInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[cid](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#cid)

#### Defined in

[main.ts:198416](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198416)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResultInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[datetime](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#datetime)

#### Defined in

[main.ts:198397](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198397)

___


### feature\_id

• `Optional` **feature\_id**: `string`

the unique identifier of the ‘reviews’ element in SERP
learn more about the identifier in this help center article

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResultInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[feature_id](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#feature_id)

#### Defined in

[main.ts:198409](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198409)

___


### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResultInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[items](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#items)

#### Defined in

[main.ts:198424](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198424)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResultInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[items_count](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#items_count)

#### Defined in

[main.ts:198421](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198421)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResultInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[keyword](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#keyword)

#### Defined in

[main.ts:198381](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198381)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResultInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[language_code](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#language_code)

#### Defined in

[main.ts:198389](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198389)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResultInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[location_code](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#location_code)

#### Defined in

[main.ts:198387](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198387)

___


### place\_id

• `Optional` **place\_id**: `string`

unique identifier of a business location assigned by Google
learn more about the identifier in this help center article

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResultInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[place_id](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#place_id)

#### Defined in

[main.ts:198412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198412)

___


### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResultInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[rating](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#rating)

#### Defined in

[main.ts:198406](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198406)

___


### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResultInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[reviews_count](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#reviews_count)

#### Defined in

[main.ts:198418](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198418)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResultInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[se_domain](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#se_domain)

#### Defined in

[main.ts:198385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198385)

___


### sub\_title

• `Optional` **sub\_title**: `string`

subtitle of the ‘reviews’ element in SERP
additional information (e.g., address) on the ‘reviews’ element for which the reviews are collected

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResultInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[sub_title](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#sub_title)

#### Defined in

[main.ts:198403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198403)

___


### title

• `Optional` **title**: `string`

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResultInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[title](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#title)

#### Defined in

[main.ts:198400](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198400)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetResultInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md).[type](../interfaces/IBusinessDataGoogleReviewsTaskGetResultInfo.md#type)

#### Defined in

[main.ts:198383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198383)

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

[main.ts:198437](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198437)

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

[main.ts:198473](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198473)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleReviewsTaskGetResultInfo`](BusinessDataGoogleReviewsTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleReviewsTaskGetResultInfo`](BusinessDataGoogleReviewsTaskGetResultInfo.md)

#### Defined in

[main.ts:198466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198466)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")