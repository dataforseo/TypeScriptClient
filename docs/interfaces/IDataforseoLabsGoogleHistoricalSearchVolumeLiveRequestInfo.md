[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleHistoricalSearchVolumeLiveRequestInfo

# Interface: IDataforseoLabsGoogleHistoricalSearchVolumeLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleHistoricalSearchVolumeLiveRequestInfo`](../classes/DataforseoLabsGoogleHistoricalSearchVolumeLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [include\_serp\_info](IDataforseoLabsGoogleHistoricalSearchVolumeLiveRequestInfo.md#include_serp_info)
- [keywords](IDataforseoLabsGoogleHistoricalSearchVolumeLiveRequestInfo.md#keywords)
- [language\_code](IDataforseoLabsGoogleHistoricalSearchVolumeLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsGoogleHistoricalSearchVolumeLiveRequestInfo.md#language_name)
- [location\_code](IDataforseoLabsGoogleHistoricalSearchVolumeLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsGoogleHistoricalSearchVolumeLiveRequestInfo.md#location_name)
- [tag](IDataforseoLabsGoogleHistoricalSearchVolumeLiveRequestInfo.md#tag)

## Properties

### include\_serp\_info

• `Optional` **include\_serp\_info**: `boolean`

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Defined in

main.ts:82039

___

### keywords

• `Optional` **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 700
The maximum number of characters for each keyword: 80
The maximum number of words for each keyword phrase: 10
the specified keywords will be converted to lowercase format, data will be provided in a separate array
note that if some of the keywords specified in this array are omitted in the results you receive, then our database doesn’t contain such keywords and cannot return data on them
you will not be charged for the keywords omitted in the results

#### Defined in

main.ts:82002

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Defined in

main.ts:82034

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Defined in

main.ts:82026

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Defined in

main.ts:82018

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Defined in

main.ts:82010

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:82045
