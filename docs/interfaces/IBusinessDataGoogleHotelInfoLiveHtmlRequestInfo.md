[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo

# Interface: IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo

## Implemented by

- [`BusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](../classes/BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [adults](IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#adults)
- [check\_in](IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#check_in)
- [check\_out](IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#check_out)
- [children](IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#children)
- [currency](IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#currency)
- [hotel\_identifier](IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#hotel_identifier)
- [language\_code](IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#language_code)
- [language\_name](IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#language_name)
- [location\_code](IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#location_code)
- [location\_coordinate](IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#location_coordinate)
- [location\_name](IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#location_name)
- [priority](IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#priority)
- [tag](IBusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md#tag)

## Properties

### adults

• `Optional` **adults**: `number`

number of adults
optional field
if you don’t specify this field, two adults will be used by default
example:
1

#### Defined in

main.ts:197642

___

### check\_in

• `Optional` **check\_in**: `string`

check-in date
optional field
if you don’t specify this field, tomorrow’s date will be used by default;
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

main.ts:197624

___

### check\_out

• `Optional` **check\_out**: `string`

check-out date
optional field
if you don’t specify this field, our system will apply the date of two days from now by default;
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

main.ts:197631

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

#### Defined in

main.ts:197650

___

### currency

• `Optional` **currency**: `string`

currency
optional field
example:
"USD"

#### Defined in

main.ts:197636

___

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

unique hotel identifier
required field
unique identifier of a hotel entity in Google search;
you can obtain the value by making a request to Advanced Google SERP API (enclosed in the hotels element of the response), or the Hotel Searches endpoint of Business Data API
example:
ChYIq6SB--i6p6cpGgovbS8wN2s5ODZfEAE

#### Defined in

main.ts:197572

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
en

#### Defined in

main.ts:197617

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with language_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/languages
example:
English

#### Defined in

main.ts:197610

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/business_data/google/locations
example:
2840

#### Defined in

main.ts:197594

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

#### Defined in

main.ts:197603

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/business_data/google/locations
example:
London,England,United Kingdom

#### Defined in

main.ts:197587

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

#### Defined in

main.ts:197580

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data array of the response

#### Defined in

main.ts:197656
