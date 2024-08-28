[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IBusinessDataGoogleHotelInfoLiveHtmlResultInfo

# Interface: IBusinessDataGoogleHotelInfoLiveHtmlResultInfo

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

main.ts:212563

***

### items?

> `optional` **items**: [`HtmlItem`](../classes/HtmlItem.md)[]

HTML pages

#### Defined in

main.ts:212567

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:212565

***

### keyword?

> `optional` **keyword**: `string`

unique hotel identifier specified as "hotel_id:$"

#### Defined in

main.ts:212550

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:212558

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:212556

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:212554

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:212552
