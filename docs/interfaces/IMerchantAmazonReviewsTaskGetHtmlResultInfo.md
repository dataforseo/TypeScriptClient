[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantAmazonReviewsTaskGetHtmlResultInfo

# Interface: IMerchantAmazonReviewsTaskGetHtmlResultInfo

Defined in: main.ts:197732

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:197747

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

Defined in: main.ts:197751

HTML pages and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:197749

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:197742

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:197740

location code in a POST array

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:197734

ASIN received in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:197738

search engine domain in a POST array

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:197736

type of element
