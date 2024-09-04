[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IMerchantAmazonSellersTaskGetHtmlResultInfo

# Interface: IMerchantAmazonSellersTaskGetHtmlResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### asin?

> `optional` **asin**: `string`

ASIN received in a POST array

#### Defined in

main.ts:184137

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:184150

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found on Amazon

#### Defined in

main.ts:184154

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:184152

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:184145

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:184143

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:184141

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:184139
