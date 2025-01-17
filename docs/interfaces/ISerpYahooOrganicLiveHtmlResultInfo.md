[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpYahooOrganicLiveHtmlResultInfo

# Interface: ISerpYahooOrganicLiveHtmlResultInfo

Defined in: main.ts:78215

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:78231

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

Defined in: main.ts:78235

elements of search results found in SERP

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:78233

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:78218

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:78226

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:78224

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:78222

search engine domain in a POST array

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:78220

type of element
