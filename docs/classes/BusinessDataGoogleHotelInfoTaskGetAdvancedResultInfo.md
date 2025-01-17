[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo

# Class: BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo

Defined in: main.ts:219748

## Implements

- [`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo()

> **new BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo**(`data`?): [`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

Defined in: main.ts:219798

#### Parameters

##### data?

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

## Properties

### about?

> `optional` **about**: [`HotelAboutInfo`](HotelAboutInfo.md)

Defined in: main.ts:219782

information about the hotel

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`about`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#about)

***

### address?

> `optional` **address**: `string`

Defined in: main.ts:219777

hotel address
physical address of the hotel

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`address`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#address)

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:219760

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:219765

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#datetime)

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

Defined in: main.ts:219753

unique hotel identifier
this field will contain the hotel_identifier parameter;
example:
CgoI-KWyzenM_MV3EAE

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`hotel_identifier`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#hotel_identifier)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:219757

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#language_code)

***

### location?

> `optional` **location**: [`HotelLocationInfo`](HotelLocationInfo.md)

Defined in: main.ts:219785

information about the hotel location
information about the location where the hotel is located

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`location`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#location)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:219755

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#location_code)

***

### overview\_images?

> `optional` **overview\_images**: `string`[]

Defined in: main.ts:219791

images displayed in the hotel overview
array containing URLs to images displayed in the hotel overview

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`overview_images`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#overview_images)

***

### phone?

> `optional` **phone**: `string`

Defined in: main.ts:219780

hotel phone number
contact phone number of the hotel

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`phone`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#phone)

***

### prices?

> `optional` **prices**: [`HotelPriceInfo`](HotelPriceInfo.md)

Defined in: main.ts:219794

pricing details of the hotel entity
contains information about the hotel’s prices

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`prices`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#prices)

***

### reviews?

> `optional` **reviews**: [`HotelReviewInfo`](HotelReviewInfo.md)

Defined in: main.ts:219788

hotel reviews by criteria
information about reviews of the hotel entity

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`reviews`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#reviews)

***

### stars?

> `optional` **stars**: `number`

Defined in: main.ts:219771

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in hotel summary

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`stars`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#stars)

***

### stars\_description?

> `optional` **stars\_description**: `string`

Defined in: main.ts:219774

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in the hotel summary

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`stars_description`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#stars_description)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:219768

hotel title
the title of the hotel entity for which the results are collected

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#title)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:219807

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:219842

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

Defined in: main.ts:219835

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)
