[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppReviewsTaskGetHtmlResultInfo

# Interface: IAppDataGoogleAppReviewsTaskGetHtmlResultInfo

Defined in: main.ts:203932

## Indexable

\[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:203934

app id received in a POST array

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:203947

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

Defined in: main.ts:203951

HTML pages and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:203949

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:203942

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:203940

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:203938

search engine domain in a POST array

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:203936

type of element
