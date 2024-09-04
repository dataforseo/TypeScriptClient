[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo

# Interface: IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo

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

main.ts:211335

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

HTML pages

#### Defined in

main.ts:211339

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:211337

***

### keyword?

> `optional` **keyword**: `string`

identifier received in a POST array
this field will contain the hotel_identifier parameter specified when setting a task;
example:
CgoI-KWyzenM_MV3EAE

#### Defined in

main.ts:211326

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:211330

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:211328

***

### se\_domain?

> `optional` **se\_domain**: `string`

#### Defined in

main.ts:211341

***

### type?

> `optional` **type**: `string`

#### Defined in

main.ts:211340
