[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpBaiduOrganicTaskGetHtmlResultInfo

# Interface: ISerpBaiduOrganicTaskGetHtmlResultInfo

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

main.ts:72358

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:72362

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:72360

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:72345

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:72353

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:72351

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:72349

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:72347
