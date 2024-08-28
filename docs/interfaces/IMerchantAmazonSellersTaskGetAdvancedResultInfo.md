[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IMerchantAmazonSellersTaskGetAdvancedResultInfo

# Interface: IMerchantAmazonSellersTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### asin?

> `optional` **asin**: `string`

asin received in a POST array
learn more about ASINs in this help center guide

#### Defined in

main.ts:188357

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure the provided results are accurate

#### Defined in

main.ts:188368

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:188373

***

### image?

> `optional` **image**: `string`

product image url
image URL of the product relevant to the asin received in a POST array

#### Defined in

main.ts:188379

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found in Amazon Sellers SERP
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_seller_main_item, amazon_seller_item

#### Defined in

main.ts:188384

***

### items?

> `optional` **items**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

items in SERP

#### Defined in

main.ts:188388

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:188386

***

### language\_code?

> `optional` **language\_code**: `string`

language code received in a POST array

#### Defined in

main.ts:188365

***

### location\_code?

> `optional` **location\_code**: `number`

location code received in a POST array

#### Defined in

main.ts:188363

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain received in a POST array

#### Defined in

main.ts:188361

***

### title?

> `optional` **title**: `string`

product title
title of the product relevant to the asin received in a POST array

#### Defined in

main.ts:188376

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:188359
