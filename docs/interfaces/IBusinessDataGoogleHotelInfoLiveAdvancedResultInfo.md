[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo

# Interface: IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo

## Implemented by

- [`BusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../classes/BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [about](IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#about)
- [address](IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#address)
- [check\_url](IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#check_url)
- [datetime](IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#datetime)
- [hotel\_identifier](IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#hotel_identifier)
- [language\_code](IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#language_code)
- [location](IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#location)
- [location\_code](IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#location_code)
- [overview\_images](IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#overview_images)
- [phone](IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#phone)
- [prices](IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#prices)
- [reviews](IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#reviews)
- [stars](IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#stars)
- [stars\_description](IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#stars_description)
- [title](IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#title)

## Properties

### about

• `Optional` **about**: [`HotelAboutInfo`](../classes/HotelAboutInfo.md)

information about the hotel

#### Defined in

[main.ts:197154](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197154)

___

### address

• `Optional` **address**: `string`

hotel address
physical address of the hotel

#### Defined in

[main.ts:197149](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197149)

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:197132](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197132)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:197137](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197137)

___

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

identifier received in a POST array
this field will contain the hotel_identifier parameter specified when setting a task;
example:
CgoI-KWyzenM_MV3EAE

#### Defined in

[main.ts:197125](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197125)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:197129](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197129)

___

### location

• `Optional` **location**: [`Location`](../classes/Location.md)

information about the hotel location
information about the location where the hotel is located

#### Defined in

[main.ts:197157](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197157)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:197127](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197127)

___

### overview\_images

• `Optional` **overview\_images**: `string`[]

images displayed in the hotel overview
array containing URLs to images displayed in the hotel overview

#### Defined in

[main.ts:197163](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197163)

___

### phone

• `Optional` **phone**: `string`

hotel phone number
contact phone number of the hotel

#### Defined in

[main.ts:197152](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197152)

___

### prices

• `Optional` **prices**: [`HotelPriceInfo`](../classes/HotelPriceInfo.md)

pricing details of the hotel entity
contains information about the hotel’s prices

#### Defined in

[main.ts:197166](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197166)

___

### reviews

• `Optional` **reviews**: [`HotelReviewInfo`](../classes/HotelReviewInfo.md)

hotel reviews by criteria
information about reviews of the hotel entity

#### Defined in

[main.ts:197160](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197160)

___

### stars

• `Optional` **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in hotel summary

#### Defined in

[main.ts:197143](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197143)

___

### stars\_description

• `Optional` **stars\_description**: `string`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in the hotel summary

#### Defined in

[main.ts:197146](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197146)

___

### title

• `Optional` **title**: `string`

hotel title
the title of the hotel entity for which the results are collected

#### Defined in

[main.ts:197140](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197140)
