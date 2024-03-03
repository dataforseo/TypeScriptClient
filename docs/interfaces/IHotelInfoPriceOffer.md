[Documentation](../README.md) / [Exports](../modules.md) / IHotelInfoPriceOffer

# Interface: IHotelInfoPriceOffer

featured price offers

## Implemented by

- [`HotelInfoPriceOffer`](../classes/HotelInfoPriceOffer.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [currency](IHotelInfoPriceOffer.md#currency)
- [free\_cancellation\_until](IHotelInfoPriceOffer.md#free_cancellation_until)
- [max\_visitors](IHotelInfoPriceOffer.md#max_visitors)
- [offer\_images](IHotelInfoPriceOffer.md#offer_images)
- [price](IHotelInfoPriceOffer.md#price)
- [title](IHotelInfoPriceOffer.md#title)
- [type](IHotelInfoPriceOffer.md#type)
- [url](IHotelInfoPriceOffer.md#url)

## Properties

### currency

• `Optional` **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Defined in

main.ts:193668

___

### free\_cancellation\_until

• `Optional` **free\_cancellation\_until**: `string`

date until free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

#### Defined in

main.ts:193681

___

### max\_visitors

• `Optional` **max\_visitors**: `number`

the maximal number of visitors
the maximum number of visitors for which the price offer is valid

#### Defined in

main.ts:193674

___

### offer\_images

• `Optional` **offer\_images**: `string`[]

price offer images
URLs of the images featured in the price offer

#### Defined in

main.ts:193677

___

### price

• `Optional` **price**: `number`

price per night

#### Defined in

main.ts:193665

___

### title

• `Optional` **title**: `string`

title of the hotel

#### Defined in

main.ts:193663

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:193661

___

### url

• `Optional` **url**: `string`

url of the price offer
URL to the page of the website where price offer appears

#### Defined in

main.ts:193671
