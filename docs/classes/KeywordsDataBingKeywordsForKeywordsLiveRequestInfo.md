[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataBingKeywordsForKeywordsLiveRequestInfo

# Class: KeywordsDataBingKeywordsForKeywordsLiveRequestInfo

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForKeywordsLiveRequestInfo()

> **new KeywordsDataBingKeywordsForKeywordsLiveRequestInfo**(`data`?): [`KeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)

#### Defined in

main.ts:134952

## Properties

### date\_from?

> `optional` **date\_from**: `string`

starting date of the time range
optional field
you can specify a date from the past 24 months
if you don’t specify this field, data will be provided for the last 12 months
date format: "yyyy-mm-dd"
example:
"2020-01-01"
Note: we do not recommend using a custom time range for the past year’s dates

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#date_from)

#### Defined in

main.ts:134927

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, data will be provided for the last 12 months;
minimum value: two years back from today’s date;
maximum value: one month from today’s date;
date format: "yyyy-mm-dd"
example:
"2020-03-15"
Note: we do not recommend using a custom time range for the past year’s dates

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#date_to)

#### Defined in

main.ts:134937

***

### device?

> `optional` **device**: `string`

device type
optional field
specify this field if you want to get the data for a particular device type;
possible values: all, mobile, desktop, tablet
default value: all

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`device`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#device)

#### Defined in

main.ts:134918

***

### keywords?

> `optional` **keywords**: `string`[]

keywords
required field
you can specify the maximum of 200 keywords with each keyword containing no more than 100 characters;
the specified keywords will be converted to lowercase, data will be provided in a separate array

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#keywords)

#### Defined in

main.ts:134867

***

### keywords\_negative?

> `optional` **keywords\_negative**: `string`[]

keywords negative array
optional field
These keywords will be ignored in the results array;
You can specify a maximum of 200 terms that you want to exclude from the results;
the specified keywords will be converted to lowercase format

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`keywords_negative`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#keywords_negative)

#### Defined in

main.ts:134912

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
supported languages:
en, fr, de

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#language_code)

#### Defined in

main.ts:134901

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
supported languages:
English, French, German

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#language_name)

#### Defined in

main.ts:134895

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
2840

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#location_code)

#### Defined in

main.ts:134881

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the data will be provided for the country the specified coordinates belong to
example:
52.6178549,-155.352142

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#location_coordinate)

#### Defined in

main.ts:134889

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#location_name)

#### Defined in

main.ts:134874

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Bing search partners type
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Bing, Yahoo, AOL and partner sites that host Bing, AOL, and Yahoo search.
default value: false – results are returned for Bing, AOL, and Yahoo search networks

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#search_partners)

#### Defined in

main.ts:134942

***

### sort\_by?

> `optional` **sort\_by**: `string`

results sorting parameters
optional field
Use these parameters to sort the results by search_volume, cpc, competition or relevance in the descending order
default value: relevance

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`sort_by`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#sort_by)

#### Defined in

main.ts:134906

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#tag)

#### Defined in

main.ts:134948

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:134961

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:134998

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)

#### Defined in

main.ts:134991
