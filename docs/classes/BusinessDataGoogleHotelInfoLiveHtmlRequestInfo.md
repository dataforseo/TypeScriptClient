[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoLiveHtmlRequestInfo

# Class: BusinessDataGoogleHotelInfoLiveHtmlRequestInfo

Defined in: main.ts:221508

## Implements

- [`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoLiveHtmlRequestInfo()

> **new BusinessDataGoogleHotelInfoLiveHtmlRequestInfo**(`data`?): [`BusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)

Defined in: main.ts:221603

#### Parameters

##### data?

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)

## Properties

### adults?

> `optional` **adults**: `number`

Defined in: main.ts:221585

number of adults
optional field
if you don’t specify this field, two adults will be used by default
example:
1

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`adults`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#adults)

***

### check\_in?

> `optional` **check\_in**: `string`

Defined in: main.ts:221567

check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`check_in`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#check_in)

***

### check\_out?

> `optional` **check\_out**: `string`

Defined in: main.ts:221574

check-out date
optional field
if you don’t specify this field, our system will apply the date of two days from now by default;
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`check_out`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#check_out)

***

### children?

> `optional` **children**: `string`[]

Defined in: main.ts:221593

number and age of children
optional field
if you don’t specify this field, no children will be included in the search;
set the following value if you want to include one 14-years-old child:
[14]
set the following value if you want to include one 13-years-old child and one 8-years-old child:
[13,8]

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`children`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#children)

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:221579

currency
optional field
example:
"USD"

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`currency`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#currency)

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

Defined in: main.ts:221515

unique hotel identifier
required field
unique identifier of a hotel entity in Google search;
you can obtain the value by making a request to Advanced Google SERP API (enclosed in the hotels element of the response), or the Hotel Searches endpoint of Business Data API
example:
ChYIq6SB--i6p6cpGgovbS8wN2s5ODZfEAE

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`hotel_identifier`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#hotel_identifier)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:221560

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:221553

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`language_name`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:221537

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:221546

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

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:221530

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`location_name`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#location_name)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:221523

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`priority`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#priority)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:221599

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data array of the response

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md).[`tag`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:221612

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:221645

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)

Defined in: main.ts:221638

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)
