[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo

# Interface: IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo

## Implemented by

- [`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../classes/BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [about](IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#about)
- [address](IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#address)
- [check\_url](IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#check_url)
- [datetime](IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#datetime)
- [hotel\_identifier](IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#hotel_identifier)
- [language\_code](IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#language_code)
- [location](IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#location)
- [location\_code](IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#location_code)
- [overview\_images](IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#overview_images)
- [phone](IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#phone)
- [prices](IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#prices)
- [reviews](IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#reviews)
- [stars](IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#stars)
- [stars\_description](IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#stars_description)
- [title](IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#title)

## Properties

### about

• `Optional` **about**: [`HotelAboutInfo`](../classes/HotelAboutInfo.md)

information about the hotel

#### Defined in

[main.ts:196186](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196186)

___

### address

• `Optional` **address**: `string`

hotel address
physical address of the hotel

#### Defined in

[main.ts:196181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196181)

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:196164](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196164)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:196169](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196169)

___

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

unique hotel identifier
this field will contain the hotel_identifier parameter;
example:
CgoI-KWyzenM_MV3EAE

#### Defined in

[main.ts:196157](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196157)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:196161](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196161)

___

### location

• `Optional` **location**: [`HotelLocationInfo`](../classes/HotelLocationInfo.md)

information about the hotel location
information about the location where the hotel is located

#### Defined in

[main.ts:196189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196189)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:196159](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196159)

___

### overview\_images

• `Optional` **overview\_images**: `string`[]

images displayed in the hotel overview
array containing URLs to images displayed in the hotel overview

#### Defined in

[main.ts:196195](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196195)

___

### phone

• `Optional` **phone**: `string`

hotel phone number
contact phone number of the hotel

#### Defined in

[main.ts:196184](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196184)

___

### prices

• `Optional` **prices**: [`HotelPriceInfo`](../classes/HotelPriceInfo.md)

pricing details of the hotel entity
contains information about the hotel’s prices

#### Defined in

[main.ts:196198](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196198)

___

### reviews

• `Optional` **reviews**: [`HotelReviewInfo`](../classes/HotelReviewInfo.md)

hotel reviews by criteria
information about reviews of the hotel entity

#### Defined in

[main.ts:196192](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196192)

___

### stars

• `Optional` **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in hotel summary

#### Defined in

[main.ts:196175](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196175)

___

### stars\_description

• `Optional` **stars\_description**: `string`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in the hotel summary

#### Defined in

[main.ts:196178](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196178)

___

### title

• `Optional` **title**: `string`

hotel title
the title of the hotel entity for which the results are collected

#### Defined in

[main.ts:196172](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196172)
