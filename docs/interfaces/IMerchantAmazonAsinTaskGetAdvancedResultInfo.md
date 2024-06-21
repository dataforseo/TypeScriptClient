**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IMerchantAmazonAsinTaskGetAdvancedResultInfo

# Interface: IMerchantAmazonAsinTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### asin?

> **`optional`** **asin**: `string`

ASIN received in a POST array
the unique product identifier in Amazon (ASIN) received in a POST array
learn more about the identified in this help center guide

#### Source

main.ts:182058

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure that we provided accurate results

#### Source

main.ts:182069

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:182074

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results found on Amazon
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_product_info

#### Source

main.ts:182079

***

### items?

> **`optional`** **items**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

Amazon product info items

#### Source

main.ts:182083

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:182081

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:182066

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:182064

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

Amazon domain in a POST array

#### Source

main.ts:182062

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:182060
