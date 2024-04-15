**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo

# Interface: IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:202021

***

### items?

> **`optional`** **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

HTML pages

#### Source

main.ts:202025

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:202023

***

### keyword?

> **`optional`** **keyword**: `string`

identifier received in a POST array
this field will contain the hotel_identifier parameter specified when setting a task;
example:
CgoI-KWyzenM_MV3EAE

#### Source

main.ts:202012

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:202016

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:202014

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

#### Source

main.ts:202027

***

### type?

> **`optional`** **type**: `string`

#### Source

main.ts:202026
