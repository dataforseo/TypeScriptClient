[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo

# Interface: IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo

## Implemented by

- [`KeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../classes/KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#date_from)
- [date\_to](IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#date_to)
- [device](IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#device)
- [keywords](IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#keywords)
- [keywords\_negative](IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#keywords_negative)
- [language\_code](IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#language_code)
- [language\_name](IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#language_name)
- [location\_code](IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#location_code)
- [location\_coordinate](IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#location_coordinate)
- [location\_name](IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#location_name)
- [search\_partners](IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#search_partners)
- [sort\_by](IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#sort_by)
- [tag](IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#tag)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
you can specify a date from the past 24 months
if you don’t specify this field, data will be provided for the last 12 months
date format: "yyyy-mm-dd"
example:
"2020-01-01"

#### Defined in

[main.ts:126047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126047)

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

[main.ts:126057](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126057)

___


### device

• `Optional` **device**: `string`

device type
optional field
specify this field if you want to get the data for a particular device type;
possible values: all, mobile, desktop, tablet
default value: all

#### Defined in

[main.ts:126039](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126039)

___


### keywords

• `Optional` **keywords**: `string`[]

keywords
required field
you can specify the maximum of 200 keywords with each keyword containing no more than 100 characters;
the specified keywords will be converted to lowercase, data will be provided in a separate array

#### Defined in

[main.ts:125988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125988)

___


### keywords\_negative

• `Optional` **keywords\_negative**: `string`[]

keywords negative array
optional field
These keywords will be ignored in the results array;
You can specify a maximum of 200 terms that you want to exclude from the results;
the specified keywords will be converted to lowercase format

#### Defined in

[main.ts:126033](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126033)

___


### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
supported languages:
en, fr, de

#### Defined in

[main.ts:126022](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126022)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
supported languages:
English, French, German

#### Defined in

[main.ts:126016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126016)

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

[main.ts:126002](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126002)

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

[main.ts:126010](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126010)

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

[main.ts:125995](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125995)

___


### search\_partners

• `Optional` **search\_partners**: `boolean`

Bing search partners type
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Bing, Yahoo, AOL and partner sites that host Bing, AOL, and Yahoo search.
default value: false – results are returned for Bing, AOL, and Yahoo search networks

#### Defined in

[main.ts:126062](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126062)

___


### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
Use these parameters to sort the results by search_volume, cpc, competition or relevance in the descending order
default value: relevance

#### Defined in

[main.ts:126027](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126027)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:126068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126068)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")