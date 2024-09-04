[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpBingOrganicLiveHtmlResultInfo

# Interface: ISerpBingOrganicLiveHtmlResultInfo

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

main.ts:59111

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:59115

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:59113

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:59098

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:59106

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:59104

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:59102

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:59100
