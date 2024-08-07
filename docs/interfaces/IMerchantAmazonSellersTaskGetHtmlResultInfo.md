**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IMerchantAmazonSellersTaskGetHtmlResultInfo

# Interface: IMerchantAmazonSellersTaskGetHtmlResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### asin?

> **`optional`** **asin**: `string`

ASIN received in a POST array

#### Source

main.ts:186755

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:186768

***

### items?

> **`optional`** **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found on Amazon

#### Source

main.ts:186772

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:186770

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:186763

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:186761

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Source

main.ts:186759

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:186757
