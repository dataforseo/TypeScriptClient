**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IHotelPriceItemInfo

# Interface: IHotelPriceItemInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### currency?

> **`optional`** **currency**: `string`

price currency
USD is applied by default, unless specified in the POST array

#### Source

main.ts:201516

***

### domain?

> **`optional`** **domain**: `string`

third-party domain
domain of the third-party website page with pricing information

#### Source

main.ts:201522

***

### free\_cancellation\_until?

> **`optional`** **free\_cancellation\_until**: `string`

date until which free cancellation is available
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
equals null if free cancellation is not available for the selected dates

#### Source

main.ts:201530

***

### is\_paid?

> **`optional`** **is\_paid**: `boolean`

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

#### Source

main.ts:201526

***

### offers?

> **`optional`** **offers**: [`HotelInfoPriceOffer`](../classes/HotelInfoPriceOffer.md)[]

featured price offers

#### Source

main.ts:201532

***

### price?

> **`optional`** **price**: `number`

price per night

#### Source

main.ts:201513

***

### title?

> **`optional`** **title**: `string`

title of the hotel

#### Source

main.ts:201511

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:201509

***

### url?

> **`optional`** **url**: `string`

third-party page url
URL to the third-party website page with pricing information

#### Source

main.ts:201519
