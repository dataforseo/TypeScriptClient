[**Documentation**](../README.md)

***

[Documentation](../README.md) / IHotelInfoPriceOffer

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

main.ts:217004

***

### free\_cancellation\_until?

> `optional` **free\_cancellation\_until**: `string`

date until free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

#### Defined in

main.ts:217017

***

### max\_visitors?

> `optional` **max\_visitors**: `number`

the maximal number of visitors
the maximum number of visitors for which the price offer is valid

#### Defined in

main.ts:217010

***

### offer\_images?

> `optional` **offer\_images**: `string`[]

price offer images
URLs of the images featured in the price offer

#### Defined in

main.ts:217013

***

### price?

> `optional` **price**: `number`

price per night

#### Defined in

main.ts:217001

***

### title?

> `optional` **title**: `string`

title of the hotel

#### Defined in

main.ts:216999

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:216997

***

### url?

> `optional` **url**: `string`

url of the price offer
URL to the page of the website where price offer appears

#### Defined in

main.ts:217007
