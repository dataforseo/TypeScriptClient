[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleProductSpecTaskGetAdvancedResultInfo

# Class: MerchantGoogleProductSpecTaskGetAdvancedResultInfo

## Implements

- [`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#check_url)
- [datetime](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#datetime)
- [description](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#description)
- [image\_url](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#image_url)
- [item\_types](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#item_types)
- [items](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#items)
- [items\_count](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#location_code)
- [product\_id](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#product_id)
- [se\_domain](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#se_domain)
- [tags](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#tags)
- [title](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#title)
- [type](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#init)
- [toJSON](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductSpecTaskGetAdvancedResultInfo**(`data?`): [`MerchantGoogleProductSpecTaskGetAdvancedResultInfo`](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md) |

#### Returns

[`MerchantGoogleProductSpecTaskGetAdvancedResultInfo`](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:167969](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167969)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[check_url](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:167951](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167951)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[datetime](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:167956](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167956)

___


### description

• `Optional` **description**: `string`

description of the product

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[description](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#description)

#### Defined in

[main.ts:167944](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167944)

___


### image\_url

• `Optional` **image\_url**: `string`

URL of the product image

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[image_url](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#image_url)

#### Defined in

[main.ts:167946](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167946)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of items found on the product specification page
possible item types:
shopping_specification

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[item_types](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:167960](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167960)

___


### items

• `Optional` **items**: [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)[]

items on the product specification page
contains all product attributes and related data listed on the product specification page

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[items](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:167965](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167965)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[items_count](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:167962](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167962)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[language_code](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:167940](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167940)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[location_code](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:167938](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167938)

___


### product\_id

• `Optional` **product\_id**: `string`

product ID in a POST array
learn more about the parameter in this help center guide

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[product_id](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#product_id)

#### Defined in

[main.ts:167932](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167932)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:167936](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167936)

___


### tags

• `Optional` **tags**: `string`[]

tags of the product

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[tags](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#tags)

#### Defined in

[main.ts:167948](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167948)

___


### title

• `Optional` **title**: `string`

title of the product

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[title](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#title)

#### Defined in

[main.ts:167942](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167942)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedResultInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md).[type](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:167934](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167934)

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

[main.ts:167978](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167978)

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

[main.ts:168020](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168020)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductSpecTaskGetAdvancedResultInfo`](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductSpecTaskGetAdvancedResultInfo`](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:168013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168013)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")