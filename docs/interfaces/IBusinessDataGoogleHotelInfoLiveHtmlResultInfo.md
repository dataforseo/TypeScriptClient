[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleHotelInfoLiveHtmlResultInfo

# Interface: IBusinessDataGoogleHotelInfoLiveHtmlResultInfo

Defined in: main.ts:221342

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:221357

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

Defined in: main.ts:221361

HTML pages

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:221359

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:221344

unique hotel identifier specified as "hotel_id:$"

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:221352

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:221350

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:221348

search engine domain in a POST array

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:221346

type of element
