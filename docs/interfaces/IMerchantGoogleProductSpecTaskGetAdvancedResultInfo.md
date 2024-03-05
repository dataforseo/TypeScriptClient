[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantGoogleProductSpecTaskGetAdvancedResultInfo

# Interface: IMerchantGoogleProductSpecTaskGetAdvancedResultInfo

## Implemented by

- [`MerchantGoogleProductSpecTaskGetAdvancedResultInfo`](../classes/MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#check_url)
- [datetime](IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#datetime)
- [description](IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#description)
- [image\_url](IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#image_url)
- [item\_types](IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#item_types)
- [items](IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#items)
- [items\_count](IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#location_code)
- [product\_id](IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#product_id)
- [se\_domain](IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#se_domain)
- [tags](IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#tags)
- [title](IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#title)
- [type](IMerchantGoogleProductSpecTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:168078](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168078)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:168083](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168083)

___

### description

• `Optional` **description**: `string`

description of the product

#### Defined in

[main.ts:168071](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168071)

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the product image

#### Defined in

[main.ts:168073](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168073)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of items found on the product specification page
possible item types:
shopping_specification

#### Defined in

[main.ts:168087](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168087)

___

### items

• `Optional` **items**: [`BaseMerchantSerpElementItem`](../classes/BaseMerchantSerpElementItem.md)[]

items on the product specification page
contains all product attributes and related data listed on the product specification page

#### Defined in

[main.ts:168092](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168092)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:168089](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168089)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:168067](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168067)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:168065](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168065)

___

### product\_id

• `Optional` **product\_id**: `string`

product ID in a POST array
learn more about the parameter in this help center guide

#### Defined in

[main.ts:168059](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168059)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:168063](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168063)

___

### tags

• `Optional` **tags**: `string`[]

tags of the product

#### Defined in

[main.ts:168075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168075)

___

### title

• `Optional` **title**: `string`

title of the product

#### Defined in

[main.ts:168069](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168069)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:168061](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168061)
