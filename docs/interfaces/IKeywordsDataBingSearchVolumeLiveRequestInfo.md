[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordsDataBingSearchVolumeLiveRequestInfo

# Interface: IKeywordsDataBingSearchVolumeLiveRequestInfo

## Implemented by

- [`KeywordsDataBingSearchVolumeLiveRequestInfo`](../classes/KeywordsDataBingSearchVolumeLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IKeywordsDataBingSearchVolumeLiveRequestInfo.md#date_from)
- [date\_to](IKeywordsDataBingSearchVolumeLiveRequestInfo.md#date_to)
- [device](IKeywordsDataBingSearchVolumeLiveRequestInfo.md#device)
- [keywords](IKeywordsDataBingSearchVolumeLiveRequestInfo.md#keywords)
- [language\_code](IKeywordsDataBingSearchVolumeLiveRequestInfo.md#language_code)
- [language\_name](IKeywordsDataBingSearchVolumeLiveRequestInfo.md#language_name)
- [location\_code](IKeywordsDataBingSearchVolumeLiveRequestInfo.md#location_code)
- [location\_coordinate](IKeywordsDataBingSearchVolumeLiveRequestInfo.md#location_coordinate)
- [location\_name](IKeywordsDataBingSearchVolumeLiveRequestInfo.md#location_name)
- [search\_partners](IKeywordsDataBingSearchVolumeLiveRequestInfo.md#search_partners)
- [sort\_by](IKeywordsDataBingSearchVolumeLiveRequestInfo.md#sort_by)
- [tag](IKeywordsDataBingSearchVolumeLiveRequestInfo.md#tag)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, data will be provided for the last 12 months
minimum value: two years back from today’s date
date format: "yyyy-mm-dd"
example:
"2020-01-01"

#### Defined in

[main.ts:123327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123327)

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, data will be provided for the last 12 months;
minimum value: two years back from today’s date;
maximum value: one month from today’s date;
note: we do not recommend using a custom time range for the past year’s dates;
date format: "yyyy-mm-dd"
example:
"2020-03-15"

#### Defined in

[main.ts:123337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123337)

___

### device

• `Optional` **device**: `string`

device type
optional field
specify this field if you want to get the data for a particular device typepossible values: all, mobile, desktop, tablet
default value: all

#### Defined in

[main.ts:123314](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123314)

___

### keywords

• `Optional` **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 200
The maximum number of characters for each keyword: 100
the specified keywords will be converted to lowercase, data will be provided in a separate array

#### Defined in

[main.ts:123275](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123275)

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
supported languages:
en, fr, de

#### Defined in

[main.ts:123309](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123309)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
supported languages:
English, French, German

#### Defined in

[main.ts:123303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123303)

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
2840

#### Defined in

[main.ts:123289](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123289)

___

### location\_coordinate

• `Optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the data will be provided for the country the specified coordinates belong to
example:
52.6178549,-155.352142

#### Defined in

[main.ts:123297](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123297)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
London,England,United Kingdom

#### Defined in

[main.ts:123282](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123282)

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

Bing search partners type
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Bing, Yahoo, AOL and partner sites that host Bing, AOL, and Yahoo search.
default value: false – results are returned for Bing, AOL, and Yahoo search networks

#### Defined in

[main.ts:123342](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123342)

___

### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
Use these parameters to sort the results by search_volume, cpc, competition or relevance in the descending order
default value: relevance

#### Defined in

[main.ts:123319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123319)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:123348](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123348)
