[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoLiveHtmlRequestInfo

# Class: BusinessDataGoogleHotelInfoLiveHtmlRequestInfo

## Implements

- [`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#constructor)

### Properties

- [adults](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#adults)
- [check\_in](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#check_in)
- [check\_out](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#check_out)
- [children](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#children)
- [currency](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#currency)
- [hotel\_identifier](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#hotel_identifier)
- [language\_code](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#language_code)
- [language\_name](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#language_name)
- [location\_code](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#location_code)
- [location\_coordinate](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#location_coordinate)
- [location\_name](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#location_name)
- [priority](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#priority)
- [tag](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#tag)

### Methods

- [init](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoLiveHtmlRequestInfo**(`data?`): [`BusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)

#### Defined in

[main.ts:197376](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197376)

## Properties

### adults

• `Optional` **adults**: `number`

number of adults
optional field
if you don’t specify this field, two adults will be used by default
example:
1

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[adults](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#adults)

#### Defined in

[main.ts:197358](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197358)

___


### check\_in

• `Optional` **check\_in**: `string`

check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[check_in](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#check_in)

#### Defined in

[main.ts:197340](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197340)

___


### check\_out

• `Optional` **check\_out**: `string`

check-out date
optional field
if you don’t specify this field, our system will apply the date of two days from now by default;
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[check_out](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#check_out)

#### Defined in

[main.ts:197347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197347)

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

[IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[children](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#children)

#### Defined in

[main.ts:197366](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197366)

___


### currency

• `Optional` **currency**: `string`

currency
optional field
example:
"USD"

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[currency](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#currency)

#### Defined in

[main.ts:197352](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197352)

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

[IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[hotel_identifier](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#hotel_identifier)

#### Defined in

[main.ts:197288](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197288)

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

[IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[language_code](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#language_code)

#### Defined in

[main.ts:197333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197333)

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

[IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[language_name](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#language_name)

#### Defined in

[main.ts:197326](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197326)

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

[IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[location_code](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#location_code)

#### Defined in

[main.ts:197310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197310)

___


### location\_coordinate

• `Optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
Note: if the coordinates are used to set a location, the search will occur in the nearest settlement;
example:
53.476225,-2.243572

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[location_coordinate](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#location_coordinate)

#### Defined in

[main.ts:197319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197319)

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

[IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[location_name](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#location_name)

#### Defined in

[main.ts:197303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197303)

___


### priority

• `Optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[priority](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#priority)

#### Defined in

[main.ts:197296](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197296)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data array of the response

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[tag](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#tag)

#### Defined in

[main.ts:197372](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197372)

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

[main.ts:197385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197385)

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

[main.ts:197418](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197418)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)

#### Defined in

[main.ts:197411](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197411)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")