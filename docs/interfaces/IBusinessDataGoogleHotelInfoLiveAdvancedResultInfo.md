[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo

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

main.ts:197274

___

### address

• `Optional` **address**: `string`

hotel address
physical address of the hotel

#### Defined in

main.ts:197269

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:197252

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:197257

___

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

identifier received in a POST array
this field will contain the hotel_identifier parameter specified when setting a task;
example:
CgoI-KWyzenM_MV3EAE

#### Defined in

main.ts:197245

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:197249

___

### location

• `Optional` **location**: [`Location`](../classes/Location.md)

information about the hotel location
information about the location where the hotel is located

#### Defined in

main.ts:197277

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:197247

___

### overview\_images

• `Optional` **overview\_images**: `string`[]

images displayed in the hotel overview
array containing URLs to images displayed in the hotel overview

#### Defined in

main.ts:197283

___

### phone

• `Optional` **phone**: `string`

hotel phone number
contact phone number of the hotel

#### Defined in

main.ts:197272

___

### prices

• `Optional` **prices**: [`HotelPriceInfo`](../classes/HotelPriceInfo.md)

pricing details of the hotel entity
contains information about the hotel’s prices

#### Defined in

main.ts:197286

___

### reviews

• `Optional` **reviews**: [`HotelReviewInfo`](../classes/HotelReviewInfo.md)

hotel reviews by criteria
information about reviews of the hotel entity

#### Defined in

main.ts:197280

___

### stars

• `Optional` **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in hotel summary

#### Defined in

main.ts:197263

___

### stars\_description

• `Optional` **stars\_description**: `string`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in the hotel summary

#### Defined in

main.ts:197266

___

### title

• `Optional` **title**: `string`

hotel title
the title of the hotel entity for which the results are collected

#### Defined in

main.ts:197260
