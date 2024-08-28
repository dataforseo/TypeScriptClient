[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo

# Class: BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo

## Implements

- [`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo()

> **new BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo**(`data`?): [`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:211004

## Properties

### about?

> `optional` **about**: [`HotelAboutInfo`](HotelAboutInfo.md)

information about the hotel

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`about`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#about)

#### Defined in

main.ts:210988

***

### address?

> `optional` **address**: `string`

hotel address
physical address of the hotel

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`address`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#address)

#### Defined in

main.ts:210983

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:210966

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:210971

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

unique hotel identifier
this field will contain the hotel_identifier parameter;
example:
CgoI-KWyzenM_MV3EAE

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`hotel_identifier`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#hotel_identifier)

#### Defined in

main.ts:210959

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:210963

***

### location?

> `optional` **location**: [`HotelLocationInfo`](HotelLocationInfo.md)

information about the hotel location
information about the location where the hotel is located

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`location`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#location)

#### Defined in

main.ts:210991

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:210961

***

### overview\_images?

> `optional` **overview\_images**: `string`[]

images displayed in the hotel overview
array containing URLs to images displayed in the hotel overview

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`overview_images`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#overview_images)

#### Defined in

main.ts:210997

***

### phone?

> `optional` **phone**: `string`

hotel phone number
contact phone number of the hotel

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`phone`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#phone)

#### Defined in

main.ts:210986

***

### prices?

> `optional` **prices**: [`HotelPriceInfo`](HotelPriceInfo.md)

pricing details of the hotel entity
contains information about the hotel’s prices

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`prices`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#prices)

#### Defined in

main.ts:211000

***

### reviews?

> `optional` **reviews**: [`HotelReviewInfo`](HotelReviewInfo.md)

hotel reviews by criteria
information about reviews of the hotel entity

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`reviews`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#reviews)

#### Defined in

main.ts:210994

***

### stars?

> `optional` **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in hotel summary

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`stars`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#stars)

#### Defined in

main.ts:210977

***

### stars\_description?

> `optional` **stars\_description**: `string`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in the hotel summary

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`stars_description`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#stars_description)

#### Defined in

main.ts:210980

***

### title?

> `optional` **title**: `string`

hotel title
the title of the hotel entity for which the results are collected

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#title)

#### Defined in

main.ts:210974

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:211013

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:211048

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:211041
