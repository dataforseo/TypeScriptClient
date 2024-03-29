[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonSellersTaskGetAdvancedResultInfo

# Class: MerchantAmazonSellersTaskGetAdvancedResultInfo

## Implements

- [`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonSellersTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [asin](MerchantAmazonSellersTaskGetAdvancedResultInfo.md#asin)
- [check\_url](MerchantAmazonSellersTaskGetAdvancedResultInfo.md#check_url)
- [datetime](MerchantAmazonSellersTaskGetAdvancedResultInfo.md#datetime)
- [image](MerchantAmazonSellersTaskGetAdvancedResultInfo.md#image)
- [item\_types](MerchantAmazonSellersTaskGetAdvancedResultInfo.md#item_types)
- [items](MerchantAmazonSellersTaskGetAdvancedResultInfo.md#items)
- [items\_count](MerchantAmazonSellersTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](MerchantAmazonSellersTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](MerchantAmazonSellersTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](MerchantAmazonSellersTaskGetAdvancedResultInfo.md#se_domain)
- [title](MerchantAmazonSellersTaskGetAdvancedResultInfo.md#title)
- [type](MerchantAmazonSellersTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](MerchantAmazonSellersTaskGetAdvancedResultInfo.md#init)
- [toJSON](MerchantAmazonSellersTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](MerchantAmazonSellersTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonSellersTaskGetAdvancedResultInfo**(`data?`): [`MerchantAmazonSellersTaskGetAdvancedResultInfo`](MerchantAmazonSellersTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonSellersTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md) |

#### Returns

[`MerchantAmazonSellersTaskGetAdvancedResultInfo`](MerchantAmazonSellersTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:174414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174414)

## Properties

### asin

• `Optional` **asin**: `string`

asin received in a POST array
learn more about ASINs in this help center guide

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[asin](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#asin)

#### Defined in

[main.ts:174379](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174379)

___


### check\_url

• `Optional` **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure the provided results are accurate

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[check_url](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:174390](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174390)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[datetime](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:174395](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174395)

___


### image

• `Optional` **image**: `string`

product image url
image URL of the product relevant to the asin received in a POST array

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[image](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#image)

#### Defined in

[main.ts:174401](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174401)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in Amazon Sellers SERP
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_seller_main_item, amazon_seller_item

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[item_types](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:174406](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174406)

___


### items

• `Optional` **items**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

items in SERP

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[items](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:174410](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174410)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[items_count](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:174408](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174408)

___


### language\_code

• `Optional` **language\_code**: `string`

language code received in a POST array

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[language_code](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:174387](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174387)

___


### location\_code

• `Optional` **location\_code**: `number`

location code received in a POST array

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[location_code](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:174385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174385)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain received in a POST array

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:174383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174383)

___


### title

• `Optional` **title**: `string`

product title
title of the product relevant to the asin received in a POST array

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[title](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#title)

#### Defined in

[main.ts:174398](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174398)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md).[type](../interfaces/IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:174381](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174381)

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

[main.ts:174423](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174423)

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

[main.ts:174459](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174459)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonSellersTaskGetAdvancedResultInfo`](MerchantAmazonSellersTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonSellersTaskGetAdvancedResultInfo`](MerchantAmazonSellersTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:174452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174452)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")