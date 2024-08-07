**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataGoogleHotelSearchesItem

# Interface: IBusinessDataGoogleHotelSearchesItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### hotel\_identifier?

> **`optional`** **hotel\_identifier**: `string`

unique identifier of a hotel entity in Google search
example:
CgoI-KWyzenM_MV3EAE

#### Source

main.ts:206967

***

### is\_paid?

> **`optional`** **is\_paid**: `boolean`

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

#### Source

main.ts:206976

***

### location?

> **`optional`** **location**: [`GpsCoordinatesLocationInfo`](../classes/GpsCoordinatesLocationInfo.md)

GPS coordinates of the hotel’s location

#### Source

main.ts:206978

***

### overview\_images?

> **`optional`** **overview\_images**: `string`[]

featured images for a hotel

#### Source

main.ts:206982

***

### prices?

> **`optional`** **prices**: [`HotelPriceInfo`](../classes/HotelPriceInfo.md)

hotel price

#### Source

main.ts:206984

***

### reviews?

> **`optional`** **reviews**: [`HotelReviewInfo`](../classes/HotelReviewInfo.md)

hotel reviews and rating information

#### Source

main.ts:206980

***

### stars?

> **`optional`** **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars

#### Source

main.ts:206972

***

### title?

> **`optional`** **title**: `string`

title of the hotel

#### Source

main.ts:206969

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:206963
