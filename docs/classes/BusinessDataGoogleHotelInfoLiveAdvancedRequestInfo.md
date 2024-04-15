**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo

# Class: BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo

## Implements

- [`IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo(data)

> **new BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo**(`data`?): [`BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md)

#### Source

main.ts:202232

## Properties

### adults?

> **`optional`** **adults**: `number`

number of adults
optional field
if you don’t specify this field, two adults will be used by default
example:
1

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[`adults`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#adults)

#### Source

main.ts:202214

***

### check\_in?

> **`optional`** **check\_in**: `string`

check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
the value must not be earlier than today’s date
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[`check_in`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#check_in)

#### Source

main.ts:202194

***

### check\_out?

> **`optional`** **check\_out**: `string`

check-out date
optional field
if you don’t specify this field, our system will apply the date of two days from now by default;
Note: the value cannot be less than or equal to check_in;
the range between check_in and check_out values cannot exceed 30 days
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[`check_out`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#check_out)

#### Source

main.ts:202203

***

### children?

> **`optional`** **children**: `string`[]

number and age of children
optional field
if you don’t specify this field, no children will be included in the search;
set the following value if you want to include one 14-years-old child:
[14]
set the following value if you want to include one 13-years-old child and one 8-years-old child:
[13,8]

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[`children`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#children)

#### Source

main.ts:202222

***

### currency?

> **`optional`** **currency**: `string`

currency
optional field
example:
"USD"

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[`currency`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#currency)

#### Source

main.ts:202208

***

### hotel\_identifier?

> **`optional`** **hotel\_identifier**: `string`

unique hotel identifier
required field
unique identifier of a hotel entity in Google search;
you can obtain the value by making a request to Advanced Google SERP API (enclosed in the hotels element of the response), or the Hotel Searches endpoint of Business Data API
example:
ChYIq6SB--i6p6cpGgovbS8wN2s5ODZfEAE

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[`hotel_identifier`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#hotel_identifier)

#### Source

main.ts:202149

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#language_code)

#### Source

main.ts:202186

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#language_name)

#### Source

main.ts:202179

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#location_code)

#### Source

main.ts:202163

***

### location\_coordinate?

> **`optional`** **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude, longitude” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
Note: if the coordinates are used to set a location, the search will occur in the nearest settlement;
example:
53.476225,-2.243572

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[`location_coordinate`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#location_coordinate)

#### Source

main.ts:202172

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#location_name)

#### Source

main.ts:202156

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md).[`tag`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md#tag)

#### Source

main.ts:202228

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:202241

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:202273

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md)

#### Source

main.ts:202266
