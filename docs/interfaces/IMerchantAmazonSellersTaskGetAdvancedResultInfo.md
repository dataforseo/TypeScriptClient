**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IMerchantAmazonSellersTaskGetAdvancedResultInfo

# Interface: IMerchantAmazonSellersTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### asin?

> **`optional`** **asin**: `string`

asin received in a POST array
learn more about ASINs in this help center guide

#### Source

main.ts:186525

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure the provided results are accurate

#### Source

main.ts:186536

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:186541

***

### image?

> **`optional`** **image**: `string`

product image url
image URL of the product relevant to the asin received in a POST array

#### Source

main.ts:186547

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results found in Amazon Sellers SERP
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_seller_main_item, amazon_seller_item

#### Source

main.ts:186552

***

### items?

> **`optional`** **items**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

items in SERP

#### Source

main.ts:186556

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:186554

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code received in a POST array

#### Source

main.ts:186533

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code received in a POST array

#### Source

main.ts:186531

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain received in a POST array

#### Source

main.ts:186529

***

### title?

> **`optional`** **title**: `string`

product title
title of the product relevant to the asin received in a POST array

#### Source

main.ts:186544

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:186527
