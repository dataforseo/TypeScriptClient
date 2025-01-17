[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGoogleAppInfoTaskGetHtmlResultInfo

# Interface: IAppDataGoogleAppInfoTaskGetHtmlResultInfo

Defined in: main.ts:202656

## Indexable

\[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:202658

application ID received in a POST request

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:202671

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

Defined in: main.ts:202675

HTML pages and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:202673

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:202666

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:202664

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:202662

search engine domain in a POST array

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:202660

type of element
