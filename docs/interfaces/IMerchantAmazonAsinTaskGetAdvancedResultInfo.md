[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IMerchantAmazonAsinTaskGetAdvancedResultInfo

# Interface: IMerchantAmazonAsinTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### asin?

> `optional` **asin**: `string`

ASIN received in a POST array
the unique product identifier in Amazon (ASIN) received in a POST array
learn more about the identified in this help center guide

#### Defined in

main.ts:182607

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:182618

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:182623

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found on Amazon
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_product_info

#### Defined in

main.ts:182628

***

### items?

> `optional` **items**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

Amazon product info items

#### Defined in

main.ts:182632

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:182630

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:182615

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:182613

***

### se\_domain?

> `optional` **se\_domain**: `string`

Amazon domain in a POST array

#### Defined in

main.ts:182611

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:182609
