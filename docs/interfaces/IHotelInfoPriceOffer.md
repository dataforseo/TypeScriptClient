[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IHotelInfoPriceOffer

# Interface: IHotelInfoPriceOffer

featured price offers

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### currency?

> `optional` **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Defined in

main.ts:208467

***

### free\_cancellation\_until?

> `optional` **free\_cancellation\_until**: `string`

date until free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

#### Defined in

main.ts:208480

***

### max\_visitors?

> `optional` **max\_visitors**: `number`

the maximal number of visitors
the maximum number of visitors for which the price offer is valid

#### Defined in

main.ts:208473

***

### offer\_images?

> `optional` **offer\_images**: `string`[]

price offer images
URLs of the images featured in the price offer

#### Defined in

main.ts:208476

***

### price?

> `optional` **price**: `number`

price per night

#### Defined in

main.ts:208464

***

### title?

> `optional` **title**: `string`

title of the hotel

#### Defined in

main.ts:208462

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:208460

***

### url?

> `optional` **url**: `string`

url of the price offer
URL to the page of the website where price offer appears

#### Defined in

main.ts:208470
