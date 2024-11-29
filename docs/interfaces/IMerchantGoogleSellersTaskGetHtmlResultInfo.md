[**Documentation**](../README.md)

***

[Documentation](../README.md) / IMerchantGoogleSellersTaskGetHtmlResultInfo

# Interface: IMerchantGoogleSellersTaskGetHtmlResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:188541

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found on Google Shopping

#### Defined in

main.ts:188545

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:188543

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:188536

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:188534

***

### product\_id?

> `optional` **product\_id**: `string`

product_id received in a POST array

#### Defined in

main.ts:188528

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:188532

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:188530
