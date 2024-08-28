[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesItem

# Class: BusinessDataGoogleHotelSearchesItem

## Implements

- [`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelSearchesItem()

> **new BusinessDataGoogleHotelSearchesItem**(`data`?): [`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md)

#### Returns

[`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)

#### Defined in

main.ts:208750

## Properties

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

unique identifier of a hotel entity in Google search
example:
CgoI-KWyzenM_MV3EAE

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`hotel_identifier`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#hotel_identifier)

#### Defined in

main.ts:208729

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`is_paid`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#is_paid)

#### Defined in

main.ts:208738

***

### location?

> `optional` **location**: [`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

GPS coordinates of the hotel’s location

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`location`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#location)

#### Defined in

main.ts:208740

***

### overview\_images?

> `optional` **overview\_images**: `string`[]

featured images for a hotel

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`overview_images`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#overview_images)

#### Defined in

main.ts:208744

***

### prices?

> `optional` **prices**: [`HotelPriceInfo`](HotelPriceInfo.md)

hotel price

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`prices`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#prices)

#### Defined in

main.ts:208746

***

### reviews?

> `optional` **reviews**: [`HotelReviewInfo`](HotelReviewInfo.md)

hotel reviews and rating information

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`reviews`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#reviews)

#### Defined in

main.ts:208742

***

### stars?

> `optional` **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`stars`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#stars)

#### Defined in

main.ts:208734

***

### title?

> `optional` **title**: `string`

title of the hotel

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`title`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#title)

#### Defined in

main.ts:208731

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`type`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#type)

#### Defined in

main.ts:208725

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:208759

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:208788

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)

#### Defined in

main.ts:208781
