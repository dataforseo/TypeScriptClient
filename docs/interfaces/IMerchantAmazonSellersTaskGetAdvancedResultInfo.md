[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantAmazonSellersTaskGetAdvancedResultInfo

# Interface: IMerchantAmazonSellersTaskGetAdvancedResultInfo

## Implemented by

- [`MerchantAmazonSellersTaskGetAdvancedResultInfo`](../classes/MerchantAmazonSellersTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [asin](IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#asin)
- [check\_url](IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#check_url)
- [datetime](IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#datetime)
- [image](IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#image)
- [item\_types](IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#item_types)
- [items](IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#items)
- [items\_count](IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#se_domain)
- [title](IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#title)
- [type](IMerchantAmazonSellersTaskGetAdvancedResultInfo.md#type)

## Properties

### asin

• `Optional` **asin**: `string`

asin received in a POST array
learn more about ASINs in this help center guide

#### Defined in

[main.ts:174492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174492)

___


### check\_url

• `Optional` **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure the provided results are accurate

#### Defined in

[main.ts:174503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174503)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:174508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174508)

___


### image

• `Optional` **image**: `string`

product image url
image URL of the product relevant to the asin received in a POST array

#### Defined in

[main.ts:174514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174514)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in Amazon Sellers SERP
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_seller_main_item, amazon_seller_item

#### Defined in

[main.ts:174519](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174519)

___


### items

• `Optional` **items**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

items in SERP

#### Defined in

[main.ts:174523](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174523)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:174521](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174521)

___


### language\_code

• `Optional` **language\_code**: `string`

language code received in a POST array

#### Defined in

[main.ts:174500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174500)

___


### location\_code

• `Optional` **location\_code**: `number`

location code received in a POST array

#### Defined in

[main.ts:174498](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174498)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain received in a POST array

#### Defined in

[main.ts:174496](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174496)

___


### title

• `Optional` **title**: `string`

product title
title of the product relevant to the asin received in a POST array

#### Defined in

[main.ts:174511](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174511)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:174494](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174494)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")