**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeLiveRequestInfo

# Class: KeywordsDataBingSearchVolumeLiveRequestInfo

## Implements

- [`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeLiveRequestInfo(data)

> **new KeywordsDataBingSearchVolumeLiveRequestInfo**(`data`?): [`KeywordsDataBingSearchVolumeLiveRequestInfo`](KeywordsDataBingSearchVolumeLiveRequestInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeLiveRequestInfo`](KeywordsDataBingSearchVolumeLiveRequestInfo.md)

#### Source

main.ts:130112

## Properties

### date\_from?

> **`optional`** **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, data will be provided for the last 12 months
minimum value: two years back from today’s date
date format: "yyyy-mm-dd"
example:
"2020-01-01"

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#date_from)

#### Source

main.ts:130087

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, data will be provided for the last 12 months;
minimum value: two years back from today’s date;
maximum value: one month from today’s date;
note: we do not recommend using a custom time range for the past year’s dates;
date format: "yyyy-mm-dd"
example:
"2020-03-15"

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#date_to)

#### Source

main.ts:130097

***

### device?

> **`optional`** **device**: `string`

device type
optional field
specify this field if you want to get the data for a particular device typepossible values: all, mobile, desktop, tablet
default value: all

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`device`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#device)

#### Source

main.ts:130074

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 1000
The maximum number of characters for each keyword: 100
the specified keywords will be converted to lowercase, data will be provided in a separate array

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#keywords)

#### Source

main.ts:130035

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
supported languages:
en, fr, de

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#language_code)

#### Source

main.ts:130069

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
supported languages:
English, French, German

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#language_name)

#### Source

main.ts:130063

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
2840

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#location_code)

#### Source

main.ts:130049

***

### location\_coordinate?

> **`optional`** **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the data will be provided for the country the specified coordinates belong to
example:
52.6178549,-155.352142

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#location_coordinate)

#### Source

main.ts:130057

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#location_name)

#### Source

main.ts:130042

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

Bing search partners type
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Bing, Yahoo, AOL and partner sites that host Bing, AOL, and Yahoo search.
default value: false – results are returned for Bing, AOL, and Yahoo search networks

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#search_partners)

#### Source

main.ts:130102

***

### sort\_by?

> **`optional`** **sort\_by**: `string`

results sorting parameters
optional field
Use these parameters to sort the results by search_volume, cpc, competition or relevance in the descending order
default value: relevance

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`sort_by`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#sort_by)

#### Source

main.ts:130079

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#tag)

#### Source

main.ts:130108

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:130121

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:130153

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingSearchVolumeLiveRequestInfo`](KeywordsDataBingSearchVolumeLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingSearchVolumeLiveRequestInfo`](KeywordsDataBingSearchVolumeLiveRequestInfo.md)

#### Source

main.ts:130146
