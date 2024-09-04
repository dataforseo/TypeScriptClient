[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IHotelPriceItemInfo

# Interface: IHotelPriceItemInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### currency?

> `optional` **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Defined in

main.ts:208584

***

### domain?

> `optional` **domain**: `string`

third-party domain
domain of the third-party website page with pricing information

#### Defined in

main.ts:208590

***

### free\_cancellation\_until?

> `optional` **free\_cancellation\_until**: `string`

date until which free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

#### Defined in

main.ts:208598

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

#### Defined in

main.ts:208594

***

### offers?

> `optional` **offers**: [`HotelInfoPriceOffer`](../classes/HotelInfoPriceOffer.md)[]

featured price offers

#### Defined in

main.ts:208600

***

### price?

> `optional` **price**: `number`

price per night

#### Defined in

main.ts:208581

***

### title?

> `optional` **title**: `string`

title of the hotel

#### Defined in

main.ts:208579

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:208577

***

### url?

> `optional` **url**: `string`

third-party page url
URL to the third-party website page with pricing information

#### Defined in

main.ts:208587
