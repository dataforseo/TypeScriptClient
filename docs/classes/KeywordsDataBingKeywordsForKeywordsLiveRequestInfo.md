[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForKeywordsLiveRequestInfo

# Class: KeywordsDataBingKeywordsForKeywordsLiveRequestInfo

Defined in: main.ts:143834

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForKeywordsLiveRequestInfo()

> **new KeywordsDataBingKeywordsForKeywordsLiveRequestInfo**(`data`?): [`KeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)

Defined in: main.ts:143925

#### Parameters

##### data?

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:143900

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

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:143910

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

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:143891

device type
optional field
specify this field if you want to get the data for a particular device type;
possible values: all, mobile, desktop, tablet
default value: all

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`device`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#device)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:143840

keywords
required field
you can specify the maximum of 200 keywords with each keyword containing no more than 100 characters;
the specified keywords will be converted to lowercase, data will be provided in a separate array
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#keywords)

***

### keywords\_negative?

> `optional` **keywords\_negative**: `string`[]

Defined in: main.ts:143885

keywords negative array
optional field
These keywords will be ignored in the results array;
You can specify a maximum of 200 terms that you want to exclude from the results;
the specified keywords will be converted to lowercase format

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`keywords_negative`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#keywords_negative)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:143874

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
supported languages:
en, fr, de

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:143868

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
supported languages:
English, French, German

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:143854

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
2840

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:143862

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the data will be provided for the country the specified coordinates belong to
example:
52.6178549,-155.352142

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:143847

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#location_name)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:143915

Bing search partners type
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Bing, Yahoo, AOL and partner sites that host Bing, AOL, and Yahoo search.
default value: false – results are returned for Bing, AOL, and Yahoo search networks

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#search_partners)

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: main.ts:143879

results sorting parameters
optional field
Use these parameters to sort the results by search_volume, cpc, competition or relevance in the descending order
default value: relevance

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`sort_by`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#sort_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:143921

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:143934

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:143971

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)

Defined in: main.ts:143964

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)
