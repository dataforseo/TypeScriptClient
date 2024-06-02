**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoLiveAdvancedResultInfo

# Class: BusinessDataGoogleHotelInfoLiveAdvancedResultInfo

## Implements

- [`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoLiveAdvancedResultInfo(data)

> **new BusinessDataGoogleHotelInfoLiveAdvancedResultInfo**(`data`?): [`BusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

#### Source

main.ts:204891

## Properties

### about?

> **`optional`** **about**: [`HotelAboutInfo`](HotelAboutInfo.md)

information about the hotel

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`about`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#about)

#### Source

main.ts:204875

***

### address?

> **`optional`** **address**: `string`

hotel address
physical address of the hotel

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`address`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#address)

#### Source

main.ts:204870

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#check_url)

#### Source

main.ts:204853

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#datetime)

#### Source

main.ts:204858

***

### hotel\_identifier?

> **`optional`** **hotel\_identifier**: `string`

identifier received in a POST array
this field will contain the hotel_identifier parameter specified when setting a task;
example:
CgoI-KWyzenM_MV3EAE

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`hotel_identifier`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#hotel_identifier)

#### Source

main.ts:204846

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#language_code)

#### Source

main.ts:204850

***

### location?

> **`optional`** **location**: [`Location`](Location.md)

information about the hotel location
information about the location where the hotel is located

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`location`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#location)

#### Source

main.ts:204878

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#location_code)

#### Source

main.ts:204848

***

### overview\_images?

> **`optional`** **overview\_images**: `string`[]

images displayed in the hotel overview
array containing URLs to images displayed in the hotel overview

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`overview_images`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#overview_images)

#### Source

main.ts:204884

***

### phone?

> **`optional`** **phone**: `string`

hotel phone number
contact phone number of the hotel

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`phone`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#phone)

#### Source

main.ts:204873

***

### prices?

> **`optional`** **prices**: [`HotelPriceInfo`](HotelPriceInfo.md)

pricing details of the hotel entity
contains information about the hotel’s prices

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`prices`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#prices)

#### Source

main.ts:204887

***

### reviews?

> **`optional`** **reviews**: [`HotelReviewInfo`](HotelReviewInfo.md)

hotel reviews by criteria
information about reviews of the hotel entity

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`reviews`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#reviews)

#### Source

main.ts:204881

***

### stars?

> **`optional`** **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in hotel summary

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`stars`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#stars)

#### Source

main.ts:204864

***

### stars\_description?

> **`optional`** **stars\_description**: `string`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in the hotel summary

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`stars_description`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#stars_description)

#### Source

main.ts:204867

***

### title?

> **`optional`** **title**: `string`

hotel title
the title of the hotel entity for which the results are collected

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[`title`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#title)

#### Source

main.ts:204861

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:204900

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:204935

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

#### Source

main.ts:204928
