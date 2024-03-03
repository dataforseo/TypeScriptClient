[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoLiveAdvancedResultInfo

# Class: BusinessDataGoogleHotelInfoLiveAdvancedResultInfo

## Implements

- [`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#constructor)

### Properties

- [about](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#about)
- [address](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#address)
- [check\_url](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#check_url)
- [datetime](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#datetime)
- [hotel\_identifier](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#hotel_identifier)
- [language\_code](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#language_code)
- [location](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#location)
- [location\_code](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#location_code)
- [overview\_images](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#overview_images)
- [phone](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#phone)
- [prices](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#prices)
- [reviews](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#reviews)
- [stars](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#stars)
- [stars\_description](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#stars_description)
- [title](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#title)

### Methods

- [init](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoLiveAdvancedResultInfo**(`data?`): [`BusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

#### Defined in

main.ts:197167

## Properties

### about

• `Optional` **about**: [`HotelAboutInfo`](HotelAboutInfo.md)

information about the hotel

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[about](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#about)

#### Defined in

main.ts:197151

___

### address

• `Optional` **address**: `string`

hotel address
physical address of the hotel

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[address](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#address)

#### Defined in

main.ts:197146

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[check_url](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:197129

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[datetime](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:197134

___

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

identifier received in a POST array
this field will contain the hotel_identifier parameter specified when setting a task;
example:
CgoI-KWyzenM_MV3EAE

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[hotel_identifier](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#hotel_identifier)

#### Defined in

main.ts:197122

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[language_code](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:197126

___

### location

• `Optional` **location**: [`Location`](Location.md)

information about the hotel location
information about the location where the hotel is located

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[location](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#location)

#### Defined in

main.ts:197154

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[location_code](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:197124

___

### overview\_images

• `Optional` **overview\_images**: `string`[]

images displayed in the hotel overview
array containing URLs to images displayed in the hotel overview

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[overview_images](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#overview_images)

#### Defined in

main.ts:197160

___

### phone

• `Optional` **phone**: `string`

hotel phone number
contact phone number of the hotel

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[phone](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#phone)

#### Defined in

main.ts:197149

___

### prices

• `Optional` **prices**: [`HotelPriceInfo`](HotelPriceInfo.md)

pricing details of the hotel entity
contains information about the hotel’s prices

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[prices](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#prices)

#### Defined in

main.ts:197163

___

### reviews

• `Optional` **reviews**: [`HotelReviewInfo`](HotelReviewInfo.md)

hotel reviews by criteria
information about reviews of the hotel entity

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[reviews](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#reviews)

#### Defined in

main.ts:197157

___

### stars

• `Optional` **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in hotel summary

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[stars](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#stars)

#### Defined in

main.ts:197140

___

### stars\_description

• `Optional` **stars\_description**: `string`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in the hotel summary

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[stars_description](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#stars_description)

#### Defined in

main.ts:197143

___

### title

• `Optional` **title**: `string`

hotel title
the title of the hotel entity for which the results are collected

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md).[title](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md#title)

#### Defined in

main.ts:197137

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:197176

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:197211

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)

#### Defined in

main.ts:197204
