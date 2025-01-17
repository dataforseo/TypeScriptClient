[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleHotelSearchesItem

# Interface: IBusinessDataGoogleHotelSearchesItem

Defined in: main.ts:217416

## Indexable

\[`key`: `string`\]: `any`

## Properties

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

Defined in: main.ts:217422

unique identifier of a hotel entity in Google search
example:
CgoI-KWyzenM_MV3EAE

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

Defined in: main.ts:217431

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

***

### location?

> `optional` **location**: [`GpsCoordinatesLocationInfo`](../classes/GpsCoordinatesLocationInfo.md)

Defined in: main.ts:217433

GPS coordinates of the hotel’s location

***

### overview\_images?

> `optional` **overview\_images**: `string`[]

Defined in: main.ts:217437

featured images for a hotel

***

### prices?

> `optional` **prices**: [`HotelPriceInfo`](../classes/HotelPriceInfo.md)

Defined in: main.ts:217439

hotel price

***

### reviews?

> `optional` **reviews**: [`HotelReviewInfo`](../classes/HotelReviewInfo.md)

Defined in: main.ts:217435

hotel reviews and rating information

***

### stars?

> `optional` **stars**: `number`

Defined in: main.ts:217427

hotel class rating
class rating that ranges between 1-5 stars

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:217424

title of the hotel

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:217418

type of element
