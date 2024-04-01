[Documentation](../README.md) / [Exports](../modules.md) / IMerchantGoogleSellersTaskGetAdvancedResultInfo

# Interface: IMerchantGoogleSellersTaskGetAdvancedResultInfo

## Implemented by

- [`MerchantGoogleSellersTaskGetAdvancedResultInfo`](../classes/MerchantGoogleSellersTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#check_url)
- [datetime](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#datetime)
- [image\_url](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#image_url)
- [item\_types](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#item_types)
- [items](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#items)
- [items\_count](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#location_code)
- [product\_id](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#product_id)
- [rating](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#rating)
- [se\_domain](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#se_domain)
- [title](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#title)
- [type](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#type)
- [url](IMerchantGoogleSellersTaskGetAdvancedResultInfo.md#url)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Google Shopping results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:172352

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:172357

___

### image\_url

• `Optional` **image\_url**: `string`

URL to the product image

#### Defined in

main.ts:172363

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
shops_list, buy_on_google

#### Defined in

main.ts:172371

___

### items

• `Optional` **items**: [`BaseMerchantSerpElementItem`](../classes/BaseMerchantSerpElementItem.md)[]

items in SERP

#### Defined in

main.ts:172375

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:172373

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:172349

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:172347

___

### product\_id

• `Optional` **product\_id**: `string`

product_id received in a POST array
learn more about the parameter in this help center guide

#### Defined in

main.ts:172341

___

### rating

• `Optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Defined in

main.ts:172366

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:172345

___

### title

• `Optional` **title**: `string`

title of the product

#### Defined in

main.ts:172359

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:172343

___

### url

• `Optional` **url**: `string`

URL to the product page

#### Defined in

main.ts:172361
