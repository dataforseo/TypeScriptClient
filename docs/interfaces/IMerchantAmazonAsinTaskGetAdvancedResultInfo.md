[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantAmazonAsinTaskGetAdvancedResultInfo

# Interface: IMerchantAmazonAsinTaskGetAdvancedResultInfo

Defined in: main.ts:195568

## Indexable

\[`key`: `string`\]: `any`

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:195572

ASIN received in a POST array
the unique product identifier in Amazon (ASIN) received in a POST array
learn more about the identified in this help center guide

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:195583

direct URL to Amazon results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:195588

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:195593

types of search results found on Amazon
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_product_info

***

### items?

> `optional` **items**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

Defined in: main.ts:195597

Amazon product info items

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:195595

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:195580

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:195578

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:195576

Amazon domain in a POST array

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:195574

type of element
