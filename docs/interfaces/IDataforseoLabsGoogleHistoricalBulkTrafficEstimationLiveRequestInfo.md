[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo

# Interface: IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](../classes/DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#date_from)
- [date\_to](IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#date_to)
- [item\_types](IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#item_types)
- [language\_code](IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#language_name)
- [location\_code](IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#location_name)
- [tag](IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#tag)
- [targets](IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md#targets)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, the data will be provided for the previous 12 months
minimal possible value: 2020-10-01
date format: "yyyy-mm-dd"

#### Defined in

[main.ts:98149](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98149)

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default;
date format: "yyyy-mm-dd"
example:
"2021-04-01"

#### Defined in

[main.ts:98156](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98156)

___

### item\_types

• `Optional` **item\_types**: `string`[]

display results by item type
optional field
indicates the type of search results included in the response;
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array;
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid"]

#### Defined in

[main.ts:98165](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98165)

___

### language\_code

• `Optional` **language\_code**: `string`

language code
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Defined in

[main.ts:98143](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98143)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Defined in

[main.ts:98135](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98135)

___

### location\_code

• `Optional` **location\_code**: `number`

location code
if you use this field, you don’t have to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840

#### Defined in

[main.ts:98127](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98127)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
if you use this field, you don’t have to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom

#### Defined in

[main.ts:98119](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98119)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:98171](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98171)

___

### targets

• `Optional` **targets**: `string`[]

target domains and subdomains
required field
you can specify domains and subdomains in this field;
domains and subdomains should be specified without https:// and www.;
you can set up to 1000 domains or subdomains

#### Defined in

[main.ts:98111](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98111)
