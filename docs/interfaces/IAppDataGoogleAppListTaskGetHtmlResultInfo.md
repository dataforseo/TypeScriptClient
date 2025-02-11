[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppListTaskGetHtmlResultInfo

# Interface: IAppDataGoogleAppListTaskGetHtmlResultInfo

Defined in: main.ts:201848

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:201863

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

Defined in: main.ts:201867

HTML pages and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:201865

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:201850

app collection received in a POST array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:201858

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:201856

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:201854

search engine domain in a POST array

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:201852

type of element
