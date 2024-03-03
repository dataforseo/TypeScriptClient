[Documentation](../README.md) / [Exports](../modules.md) / IMerchantAmazonAsinTaskGetAdvancedResultInfo

# Interface: IMerchantAmazonAsinTaskGetAdvancedResultInfo

## Implemented by

- [`MerchantAmazonAsinTaskGetAdvancedResultInfo`](../classes/MerchantAmazonAsinTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [asin](IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#asin)
- [check\_url](IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#check_url)
- [datetime](IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#item_types)
- [items](IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#items)
- [items\_count](IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#se_domain)
- [type](IMerchantAmazonAsinTaskGetAdvancedResultInfo.md#type)

## Properties

### asin

• `Optional` **asin**: `string`

ASIN received in a POST array
the unique product identifier in Amazon (ASIN) received in a POST array
learn more about the identified in this help center guide

#### Defined in

main.ts:173266

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:173277

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:173282

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found on Amazon
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_product_info

#### Defined in

main.ts:173287

___

### items

• `Optional` **items**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

Amazon product info items

#### Defined in

main.ts:173291

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:173289

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:173274

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:173272

___

### se\_domain

• `Optional` **se\_domain**: `string`

Amazon domain in a POST array

#### Defined in

main.ts:173270

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:173268
