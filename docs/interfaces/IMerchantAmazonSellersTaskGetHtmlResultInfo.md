[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantAmazonSellersTaskGetHtmlResultInfo

# Interface: IMerchantAmazonSellersTaskGetHtmlResultInfo

Defined in: main.ts:196548

## Indexable

\[`key`: `string`\]: `any`

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:196550

ASIN received in a POST array

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:196563

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

Defined in: main.ts:196567

elements of search results found on Amazon

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:196565

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:196558

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:196556

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:196554

search engine domain in a POST array

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:196552

type of element
