[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo

# Class: BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo

## Implements

- [`IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#constructor)

### Properties

- [adults](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#adults)
- [check\_in](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#check_in)
- [check\_out](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#check_out)
- [children](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#children)
- [currency](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#currency)
- [hotel\_identifier](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#hotel_identifier)
- [language\_code](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#language_code)
- [language\_name](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#language_name)
- [location\_code](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#location_code)
- [location\_coordinate](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#location_coordinate)
- [location\_name](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#location_name)
- [tag](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#tag)

### Methods

- [init](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo**(`data?`): [`BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md)

#### Defined in

[main.ts:196621](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196621)

## Properties

### adults

• `Optional` **adults**: `number`

number of adults
optional field
if you don’t specify this field, two adults will be used by default
example:
1

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[adults](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#adults)

#### Defined in

[main.ts:196603](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196603)

___


### check\_in

• `Optional` **check\_in**: `string`

check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
the value must not be earlier than today’s date
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[check_in](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#check_in)

#### Defined in

[main.ts:196583](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196583)

___


### check\_out

• `Optional` **check\_out**: `string`

check-out date
optional field
if you don’t specify this field, our system will apply the date of two days from now by default;
Note: the value cannot be less than or equal to check_in;
the range between check_in and check_out values cannot exceed 30 days
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[check_out](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#check_out)

#### Defined in

[main.ts:196592](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196592)

___


### children

• `Optional` **children**: `string`[]

number and age of children
optional field
if you don’t specify this field, no children will be included in the search;
set the following value if you want to include one 14-years-old child:
[14]
set the following value if you want to include one 13-years-old child and one 8-years-old child:
[13,8]

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[children](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#children)

#### Defined in

[main.ts:196611](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196611)

___


### currency

• `Optional` **currency**: `string`

currency
optional field
example:
"USD"

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[currency](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#currency)

#### Defined in

[main.ts:196597](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196597)

___


### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

unique hotel identifier
required field
unique identifier of a hotel entity in Google search;
you can obtain the value by making a request to Advanced Google SERP API (enclosed in the hotels element of the response), or the Hotel Searches endpoint of Business Data API
example:
ChYIq6SB--i6p6cpGgovbS8wN2s5ODZfEAE

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[hotel_identifier](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#hotel_identifier)

#### Defined in

[main.ts:196538](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196538)

___


### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[language_code](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#language_code)

#### Defined in

[main.ts:196575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196575)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[language_name](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#language_name)

#### Defined in

[main.ts:196568](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196568)

___


### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[location_code](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#location_code)

#### Defined in

[main.ts:196552](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196552)

___


### location\_coordinate

• `Optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude, longitude” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
Note: if the coordinates are used to set a location, the search will occur in the nearest settlement;
example:
53.476225,-2.243572

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[location_coordinate](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#location_coordinate)

#### Defined in

[main.ts:196561](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196561)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[location_name](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#location_name)

#### Defined in

[main.ts:196545](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196545)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[tag](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#tag)

#### Defined in

[main.ts:196617](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196617)

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

[main.ts:196630](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196630)

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

[main.ts:196662](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196662)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md)

#### Defined in

[main.ts:196655](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196655)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")