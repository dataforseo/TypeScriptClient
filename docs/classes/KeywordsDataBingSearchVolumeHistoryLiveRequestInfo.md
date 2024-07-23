**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeHistoryLiveRequestInfo

# Class: KeywordsDataBingSearchVolumeHistoryLiveRequestInfo

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeHistoryLiveRequestInfo(data)

> **new KeywordsDataBingSearchVolumeHistoryLiveRequestInfo**(`data`?): [`KeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](KeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](KeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md)

#### Source

main.ts:138397

## Properties

### date\_from?

> **`optional`** **date\_from**: `string`

starting date of the time range
optional field
minimum value: two years back from today’s date
maximum value: one day from today’s date
date format: "yyyy-mm-dd"
example:
"2020-01-01"
Note: we do not recommend using a custom time range
Note 2: if date_from and date_to parameters are not specified, the data will be returned for the past 24 months
if you specify the period parameter:
with value weekly, you will get results for the past 15 weeks
with value daily, you will get results for the past 45 days

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md#date_from)

#### Source

main.ts:138374

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of the time range
optional field
minimum value: two years back from today’s date;
maximum value: one day from today’s date;
date format: "yyyy-mm-dd"
example:
"2020-03-15"
Note: we do not recommend using a custom time range
Note 2: if date_from and date_to parameters are not specified, the data will be returned for the past 24 months
if you specify the period parameter:
with value weekly, you will get results for the past 15 weeks
with value daily, you will get results for the past 45 days

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md#date_to)

#### Source

main.ts:138387

***

### device?

> **`optional`** **device**: `string`

device type
optional field
specify this field if you want to get the data for a particular device type
possible values: mobile, desktop, tablet, non_smartphones
default value:  mobile, desktop, tablet, non_smartphones

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md).[`device`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md#device)

#### Source

main.ts:138352

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 1000
The maximum number of characters for each keyword: 100
the specified keywords will be converted to lowercase, data will be provided in a separate array

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md#keywords)

#### Source

main.ts:138314

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engines with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md#language_code)

#### Source

main.ts:138346

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engines with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md#language_name)

#### Source

main.ts:138341

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages
example:
2840

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md#location_code)

#### Source

main.ts:138328

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

[`IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md#location_coordinate)

#### Source

main.ts:138336

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md#location_name)

#### Source

main.ts:138321

***

### period?

> **`optional`** **period**: `string`

aggregates the returned data to a certain time period
optional field
specify this field if you want to get the data in monthly, weekly or daily format
possible values: monthly, weekly, daily
monthly – returns data up to past 24 months
weekly – returns data up to past 15 weeks
daily – returns data up to past 45 days
default value:  monthly

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md).[`period`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md#period)

#### Source

main.ts:138361

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md#tag)

#### Source

main.ts:138393

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:138406

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:138437

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](KeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](KeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md)

#### Source

main.ts:138430
