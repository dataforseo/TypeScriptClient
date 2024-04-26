**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IHotelInfoPriceOffer

# Interface: IHotelInfoPriceOffer

featured price offers

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### currency?

> **`optional`** **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Source

main.ts:200019

***

### free\_cancellation\_until?

> **`optional`** **free\_cancellation\_until**: `string`

date until free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

#### Source

main.ts:200032

***

### max\_visitors?

> **`optional`** **max\_visitors**: `number`

the maximal number of visitors
the maximum number of visitors for which the price offer is valid

#### Source

main.ts:200025

***

### offer\_images?

> **`optional`** **offer\_images**: `string`[]

price offer images
URLs of the images featured in the price offer

#### Source

main.ts:200028

***

### price?

> **`optional`** **price**: `number`

price per night

#### Source

main.ts:200016

***

### title?

> **`optional`** **title**: `string`

title of the hotel

#### Source

main.ts:200014

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:200012

***

### url?

> **`optional`** **url**: `string`

url of the price offer
URL to the page of the website where price offer appears

#### Source

main.ts:200022
