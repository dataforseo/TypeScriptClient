[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo

# Class: BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo

## Implements

- [`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [about](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#about)
- [address](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#address)
- [check\_url](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#check_url)
- [datetime](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#datetime)
- [hotel\_identifier](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#hotel_identifier)
- [language\_code](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#language_code)
- [location](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#location)
- [location\_code](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#location_code)
- [overview\_images](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#overview_images)
- [phone](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#phone)
- [prices](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#prices)
- [reviews](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#reviews)
- [stars](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#stars)
- [stars\_description](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#stars_description)
- [title](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#title)

### Methods

- [init](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo**(`data?`): [`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:196079](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196079)

## Properties

### about

• `Optional` **about**: [`HotelAboutInfo`](HotelAboutInfo.md)

information about the hotel

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[about](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#about)

#### Defined in

[main.ts:196063](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196063)

___

### address

• `Optional` **address**: `string`

hotel address
physical address of the hotel

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[address](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#address)

#### Defined in

[main.ts:196058](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196058)

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[check_url](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:196041](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196041)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[datetime](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:196046](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196046)

___

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

unique hotel identifier
this field will contain the hotel_identifier parameter;
example:
CgoI-KWyzenM_MV3EAE

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[hotel_identifier](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#hotel_identifier)

#### Defined in

[main.ts:196034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196034)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[language_code](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:196038](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196038)

___

### location

• `Optional` **location**: [`HotelLocationInfo`](HotelLocationInfo.md)

information about the hotel location
information about the location where the hotel is located

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[location](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#location)

#### Defined in

[main.ts:196066](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196066)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[location_code](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:196036](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196036)

___

### overview\_images

• `Optional` **overview\_images**: `string`[]

images displayed in the hotel overview
array containing URLs to images displayed in the hotel overview

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[overview_images](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#overview_images)

#### Defined in

[main.ts:196072](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196072)

___

### phone

• `Optional` **phone**: `string`

hotel phone number
contact phone number of the hotel

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[phone](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#phone)

#### Defined in

[main.ts:196061](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196061)

___

### prices

• `Optional` **prices**: [`HotelPriceInfo`](HotelPriceInfo.md)

pricing details of the hotel entity
contains information about the hotel’s prices

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[prices](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#prices)

#### Defined in

[main.ts:196075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196075)

___

### reviews

• `Optional` **reviews**: [`HotelReviewInfo`](HotelReviewInfo.md)

hotel reviews by criteria
information about reviews of the hotel entity

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[reviews](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#reviews)

#### Defined in

[main.ts:196069](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196069)

___

### stars

• `Optional` **stars**: `number`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in hotel summary

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[stars](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#stars)

#### Defined in

[main.ts:196052](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196052)

___

### stars\_description

• `Optional` **stars\_description**: `string`

hotel class rating
class rating that ranges between 1-5 stars and displayed after review ratings in the hotel summary

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[stars_description](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#stars_description)

#### Defined in

[main.ts:196055](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196055)

___

### title

• `Optional` **title**: `string`

hotel title
the title of the hotel entity for which the results are collected

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md).[title](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md#title)

#### Defined in

[main.ts:196049](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196049)

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

[main.ts:196088](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196088)

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

[main.ts:196123](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196123)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:196116](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196116)
