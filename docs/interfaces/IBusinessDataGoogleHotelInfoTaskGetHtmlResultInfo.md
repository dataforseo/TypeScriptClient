[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo

# Interface: IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo

Defined in: main.ts:220623

## Indexable

\[`key`: `string`\]: `any`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:220637

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

Defined in: main.ts:220641

HTML pages

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:220639

the number of results returned in the items array

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:220628

identifier received in a POST array
this field will contain the hotel_identifier parameter specified when setting a task;
example:
CgoI-KWyzenM_MV3EAE

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:220632

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:220630

location code in a POST array

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:220643

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:220642
