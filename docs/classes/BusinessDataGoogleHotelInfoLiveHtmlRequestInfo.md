**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoLiveHtmlRequestInfo

# Class: BusinessDataGoogleHotelInfoLiveHtmlRequestInfo

## Implements

- [`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoLiveHtmlRequestInfo(data)

> **new BusinessDataGoogleHotelInfoLiveHtmlRequestInfo**(`data`?): [`BusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)

#### Source

main.ts:203847

## Properties

### adults?

> **`optional`** **adults**: `number`

number of adults
optional field
if you don’t specify this field, two adults will be used by default
example:
1

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`adults`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#adults)

#### Source

main.ts:203829

***

### check\_in?

> **`optional`** **check\_in**: `string`

check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`check_in`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#check_in)

#### Source

main.ts:203811

***

### check\_out?

> **`optional`** **check\_out**: `string`

check-out date
optional field
if you don’t specify this field, our system will apply the date of two days from now by default;
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`check_out`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#check_out)

#### Source

main.ts:203818

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

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`children`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#children)

#### Source

main.ts:203837

***

### currency?

> **`optional`** **currency**: `string`

currency
optional field
example:
"USD"

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`currency`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#currency)

#### Source

main.ts:203823

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

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`hotel_identifier`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#hotel_identifier)

#### Source

main.ts:203759

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

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#language_code)

#### Source

main.ts:203804

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

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`language_name`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#language_name)

#### Source

main.ts:203797

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

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#location_code)

#### Source

main.ts:203781

***

### location\_coordinate?

> **`optional`** **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
Note: if the coordinates are used to set a location, the search will occur in the nearest settlement;
example:
53.476225,-2.243572

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`location_coordinate`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#location_coordinate)

#### Source

main.ts:203790

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

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#location_name)

#### Source

main.ts:203774

***

### priority?

> **`optional`** **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`priority`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#priority)

#### Source

main.ts:203767

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data array of the response

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`tag`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#tag)

#### Source

main.ts:203843

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:203856

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:203889

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)

#### Source

main.ts:203882
