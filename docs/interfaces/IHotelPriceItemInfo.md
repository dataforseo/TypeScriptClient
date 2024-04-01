[Documentation](../README.md) / [Exports](../modules.md) / IHotelPriceItemInfo

# Interface: IHotelPriceItemInfo

## Implemented by

- [`HotelPriceItemInfo`](../classes/HotelPriceItemInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [currency](IHotelPriceItemInfo.md#currency)
- [domain](IHotelPriceItemInfo.md#domain)
- [free\_cancellation\_until](IHotelPriceItemInfo.md#free_cancellation_until)
- [is\_paid](IHotelPriceItemInfo.md#is_paid)
- [offers](IHotelPriceItemInfo.md#offers)
- [price](IHotelPriceItemInfo.md#price)
- [title](IHotelPriceItemInfo.md#title)
- [type](IHotelPriceItemInfo.md#type)
- [url](IHotelPriceItemInfo.md#url)

## Properties

### currency

• `Optional` **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Defined in

main.ts:199126

___

### domain

• `Optional` **domain**: `string`

third-party domain
domain of the third-party website page with pricing information

#### Defined in

main.ts:199132

___

### free\_cancellation\_until

• `Optional` **free\_cancellation\_until**: `string`

date until which free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

#### Defined in

main.ts:199140

___

### is\_paid

• `Optional` **is\_paid**: `boolean`

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

#### Defined in

main.ts:199136

___

### offers

• `Optional` **offers**: [`HotelInfoPriceOffer`](../classes/HotelInfoPriceOffer.md)[]

featured price offers

#### Defined in

main.ts:199142

___

### price

• `Optional` **price**: `number`

price per night

#### Defined in

main.ts:199123

___

### title

• `Optional` **title**: `string`

title of the hotel

#### Defined in

main.ts:199121

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:199119

___

### url

• `Optional` **url**: `string`

third-party page url
URL to the third-party website page with pricing information

#### Defined in

main.ts:199129
