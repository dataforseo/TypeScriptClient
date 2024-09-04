[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAppDataGoogleAppReviewsTaskGetHtmlResultInfo

# Interface: IAppDataGoogleAppReviewsTaskGetHtmlResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

app id received in a POST array

#### Defined in

main.ts:196043

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:196056

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

HTML pages and related data

#### Defined in

main.ts:196060

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:196058

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:196051

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:196049

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:196047

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:196045
