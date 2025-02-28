[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesItem

# Class: BusinessDataGoogleHotelSearchesItem

Defined in: main.ts:217830

## Implements

- [`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelSearchesItem()

> **new BusinessDataGoogleHotelSearchesItem**(`data`?): [`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)

Defined in: main.ts:217857

#### Parameters

##### data?

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md)

#### Returns

[`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)

## Properties

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

Defined in: main.ts:217836

unique identifier of a hotel entity in Google search
example:
CgoI-KWyzenM_MV3EAE

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`hotel_identifier`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#hotel_identifier)

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

Defined in: main.ts:217845

indicates a paid hotel listing
if true, related hotel_search_item is a paid ad
if false, related hotel_search_item is an organic hotel listing

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`is_paid`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#is_paid)

***

### location?

> `optional` **location**: [`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

Defined in: main.ts:217847

GPS coordinates of the hotel’s location

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`location`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#location)

***

### overview\_images?

> `optional` **overview\_images**: `string`[]

Defined in: main.ts:217851

featured images for a hotel

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`overview_images`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#overview_images)

***

### prices?

> `optional` **prices**: [`HotelPriceInfo`](HotelPriceInfo.md)

Defined in: main.ts:217853

hotel price

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`prices`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#prices)

***

### reviews?

> `optional` **reviews**: [`HotelReviewInfo`](HotelReviewInfo.md)

Defined in: main.ts:217849

hotel reviews and rating information

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`reviews`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#reviews)

***

### stars?

> `optional` **stars**: `number`

Defined in: main.ts:217841

hotel class rating
class rating that ranges between 1-5 stars

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`stars`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#stars)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:217838

title of the hotel

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`title`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:217832

type of element

#### Implementation of

[`IBusinessDataGoogleHotelSearchesItem`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md).[`type`](../interfaces/IBusinessDataGoogleHotelSearchesItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:217866

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:217895

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)

Defined in: main.ts:217888

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)
