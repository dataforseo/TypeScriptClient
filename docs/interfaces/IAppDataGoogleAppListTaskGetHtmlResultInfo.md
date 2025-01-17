[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppListTaskGetHtmlResultInfo

# Interface: IAppDataGoogleAppListTaskGetHtmlResultInfo

Defined in: main.ts:201346

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:201361

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

Defined in: main.ts:201365

HTML pages and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:201363

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:201348

app collection received in a POST array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:201356

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:201354

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:201352

search engine domain in a POST array

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:201350

type of element
