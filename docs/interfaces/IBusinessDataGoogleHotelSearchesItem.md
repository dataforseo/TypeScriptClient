[**Documentation**](../README.md) • **Docs**

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

main.ts:208817

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

#### Defined in

main.ts:208826

***

### location?

> `optional` **location**: [`GpsCoordinatesLocationInfo`](../classes/GpsCoordinatesLocationInfo.md)

GPS coordinates of the hotel’s location

#### Defined in

main.ts:208828

***

### overview\_images?

> `optional` **overview\_images**: `string`[]

featured images for a hotel

#### Defined in

main.ts:208832

***

### prices?

> `optional` **prices**: [`HotelPriceInfo`](../classes/HotelPriceInfo.md)

hotel price

#### Defined in

main.ts:208834

***

### reviews?

> `optional` **reviews**: [`HotelReviewInfo`](../classes/HotelReviewInfo.md)

hotel reviews and rating information

#### Defined in

main.ts:208830

***

### stars?

> `optional` **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars

#### Defined in

main.ts:208822

***

### title?

> `optional` **title**: `string`

title of the hotel

#### Defined in

main.ts:208819

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:208813
