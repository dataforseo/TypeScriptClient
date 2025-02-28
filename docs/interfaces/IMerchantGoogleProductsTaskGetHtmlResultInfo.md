[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantGoogleProductsTaskGetHtmlResultInfo

# Interface: IMerchantGoogleProductsTaskGetHtmlResultInfo

Defined in: main.ts:187577

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:187593

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

Defined in: main.ts:187597

elements of search results found on Google Shopping

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:187595

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:187580

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:187588

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:187586

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:187584

search engine domain in a POST array

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:187582

type of element
