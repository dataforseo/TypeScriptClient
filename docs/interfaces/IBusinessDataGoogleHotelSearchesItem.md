[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleHotelSearchesItem

# Interface: IBusinessDataGoogleHotelSearchesItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

unique identifier of a hotel entity in Google search
example:
CgoI-KWyzenM_MV3EAE

#### Defined in

main.ts:217354

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

#### Defined in

main.ts:217363

***

### location?

> `optional` **location**: [`GpsCoordinatesLocationInfo`](../classes/GpsCoordinatesLocationInfo.md)

GPS coordinates of the hotel’s location

#### Defined in

main.ts:217365

***

### overview\_images?

> `optional` **overview\_images**: `string`[]

featured images for a hotel

#### Defined in

main.ts:217369

***

### prices?

> `optional` **prices**: [`HotelPriceInfo`](../classes/HotelPriceInfo.md)

hotel price

#### Defined in

main.ts:217371

***

### reviews?

> `optional` **reviews**: [`HotelReviewInfo`](../classes/HotelReviewInfo.md)

hotel reviews and rating information

#### Defined in

main.ts:217367

***

### stars?

> `optional` **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars

#### Defined in

main.ts:217359

***

### title?

> `optional` **title**: `string`

title of the hotel

#### Defined in

main.ts:217356

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:217350
