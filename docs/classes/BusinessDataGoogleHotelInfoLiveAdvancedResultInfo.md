[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoLiveAdvancedResultInfo

# Class: BusinessDataGoogleHotelInfoLiveAdvancedResultInfo

## Implements

- [`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoLiveAdvancedResultInfo()

> **new BusinessDataGoogleHotelInfoLiveAdvancedResultInfo**(`data`?): [`BusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

#### Defined in

main.ts:211972

## Properties

### about?

> `optional` **about**: [`HotelAboutInfo`](HotelAboutInfo.md)

information about the hotel

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`about`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#about)

#### Defined in

main.ts:211956

***

### address?

> `optional` **address**: `string`

hotel address
physical address of the hotel

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`address`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#address)

#### Defined in

main.ts:211951

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:211934

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:211939

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

identifier received in a POST array
this field will contain the hotel_identifier parameter specified when setting a task;
example:
CgoI-KWyzenM_MV3EAE

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`hotel_identifier`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#hotel_identifier)

#### Defined in

main.ts:211927

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:211931

***

### location?

> `optional` **location**: [`Location`](Location.md)

information about the hotel location
information about the location where the hotel is located

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`location`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#location)

#### Defined in

main.ts:211959

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:211929

***

### overview\_images?

> `optional` **overview\_images**: `string`[]

images displayed in the hotel overview
array containing URLs to images displayed in the hotel overview

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`overview_images`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#overview_images)

#### Defined in

main.ts:211965

***

### phone?

> `optional` **phone**: `string`

hotel phone number
contact phone number of the hotel

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`phone`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#phone)

#### Defined in

main.ts:211954

***

### prices?

> `optional` **prices**: [`HotelPriceInfo`](HotelPriceInfo.md)

pricing details of the hotel entity
contains information about the hotel’s prices

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`prices`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#prices)

#### Defined in

main.ts:211968

***

### reviews?

> `optional` **reviews**: [`HotelReviewInfo`](HotelReviewInfo.md)

hotel reviews by criteria
information about reviews of the hotel entity

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`reviews`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#reviews)

#### Defined in

main.ts:211962

***

### stars?

> `optional` **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in hotel summary

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`stars`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#stars)

#### Defined in

main.ts:211945

***

### stars\_description?

> `optional` **stars\_description**: `string`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in the hotel summary

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`stars_description`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#stars_description)

#### Defined in

main.ts:211948

***

### title?

> `optional` **title**: `string`

hotel title
the title of the hotel entity for which the results are collected

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`title`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#title)

#### Defined in

main.ts:211942

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:211981

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:212016

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

#### Defined in

main.ts:212009
