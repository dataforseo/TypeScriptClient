**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo

# Class: BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo

## Implements

- [`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo(data)

> **new BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo**(`data`?): [`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

#### Source

main.ts:205683

## Properties

### about?

> **`optional`** **about**: [`HotelAboutInfo`](HotelAboutInfo.md)

information about the hotel

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`about`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#about)

#### Source

main.ts:205667

***

### address?

> **`optional`** **address**: `string`

hotel address
physical address of the hotel

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`address`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#address)

#### Source

main.ts:205662

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:205645

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:205650

***

### hotel\_identifier?

> **`optional`** **hotel\_identifier**: `string`

unique hotel identifier
this field will contain the hotel_identifier parameter;
example:
CgoI-KWyzenM_MV3EAE

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`hotel_identifier`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#hotel_identifier)

#### Source

main.ts:205638

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:205642

***

### location?

> **`optional`** **location**: [`HotelLocationInfo`](HotelLocationInfo.md)

information about the hotel location
information about the location where the hotel is located

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`location`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#location)

#### Source

main.ts:205670

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:205640

***

### overview\_images?

> **`optional`** **overview\_images**: `string`[]

images displayed in the hotel overview
array containing URLs to images displayed in the hotel overview

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`overview_images`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#overview_images)

#### Source

main.ts:205676

***

### phone?

> **`optional`** **phone**: `string`

hotel phone number
contact phone number of the hotel

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`phone`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#phone)

#### Source

main.ts:205665

***

### prices?

> **`optional`** **prices**: [`HotelPriceInfo`](HotelPriceInfo.md)

pricing details of the hotel entity
contains information about the hotel’s prices

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`prices`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#prices)

#### Source

main.ts:205679

***

### reviews?

> **`optional`** **reviews**: [`HotelReviewInfo`](HotelReviewInfo.md)

hotel reviews by criteria
information about reviews of the hotel entity

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`reviews`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#reviews)

#### Source

main.ts:205673

***

### stars?

> **`optional`** **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in hotel summary

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`stars`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#stars)

#### Source

main.ts:205656

***

### stars\_description?

> **`optional`** **stars\_description**: `string`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in the hotel summary

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`stars_description`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#stars_description)

#### Source

main.ts:205659

***

### title?

> **`optional`** **title**: `string`

hotel title
the title of the hotel entity for which the results are collected

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#title)

#### Source

main.ts:205653

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:205692

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:205727

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

#### Source

main.ts:205720
