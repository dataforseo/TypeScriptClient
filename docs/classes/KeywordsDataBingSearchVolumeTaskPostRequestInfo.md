[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeTaskPostRequestInfo

# Class: KeywordsDataBingSearchVolumeTaskPostRequestInfo

Defined in: main.ts:138538

## Implements

- [`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeTaskPostRequestInfo()

> **new KeywordsDataBingSearchVolumeTaskPostRequestInfo**(`data`?): [`KeywordsDataBingSearchVolumeTaskPostRequestInfo`](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md)

Defined in: main.ts:138646

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeTaskPostRequestInfo`](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md)

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:138598

starting date of the time range
optional field
if you don’t specify this field, data will be provided for the last 12 months
minimum value: two years back from today’s date
date format: "yyyy-mm-dd"
example:
"2020-01-01"
Note: we do not recommend using a custom time range for the past year’s dates

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:138609

ending date of the time range
optional field
if you don’t specify this field, data will be provided for the last 12 months;
minimum value: two years back from today’s date;
maximum value: one month from today’s date;
note: we do not recommend using a custom time range for the past year’s dates;
date format: "yyyy-mm-dd"
example:
"2020-03-15"
Note: we do not recommend using a custom time range for the past year’s dates

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#date_to)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:138584

device type
optional field
specify this field if you want to get the data for a particular device typepossible values: all, mobile, desktop, tablet
default value: all

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[`device`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#device)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:138545

keywords
required field
The maximum number of keywords you can specify: 1000
The maximum number of characters for each keyword: 100
the specified keywords will be converted to lowercase, data will be provided in a separate array
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:138579

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
supported languages:
en, fr, de

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:138573

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
supported languages:
English, French, German

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:138559

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
2840

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:138567

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the data will be provided for the country the specified coordinates belong to
example:
52.6178549,-155.352142

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:138552

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#location_name)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:138631

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#pingback_url)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:138620

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[`postback_url`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#postback_url)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:138636

Bing search partners type
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Bing, Yahoo, AOL and partner sites that host Bing, AOL, and Yahoo search.
default value: false – results are returned for Bing, AOL, and Yahoo search networks

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#search_partners)

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: main.ts:138589

results sorting parameters
optional field
Use these parameters to sort the results by search_volume, cpc, competition or relevance in the descending order
default value: relevance

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[`sort_by`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#sort_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:138642

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md).[`tag`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:138655

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:138689

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTaskPostRequestInfo`](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md)

Defined in: main.ts:138682

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingSearchVolumeTaskPostRequestInfo`](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md)
