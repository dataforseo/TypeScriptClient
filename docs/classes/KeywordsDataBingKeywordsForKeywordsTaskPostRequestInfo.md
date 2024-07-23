**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo

# Class: KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo(data)

> **new KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo**(`data`?): [`KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md)

#### Source

main.ts:134286

## Properties

### date\_from?

> **`optional`** **date\_from**: `string`

starting date of the time range
optional field
you can specify a date from the past 24 months
if you don’t specify this field, data will be provided for the last 12 months
date format: "yyyy-mm-dd"
example:
"2020-01-01"
Note: we do not recommend using a custom time range for the past year’s dates

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md#date_from)

#### Source

main.ts:134241

***

### date\_to?

> **`optional`** **date\_to**: `string`

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

[`IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md#date_to)

#### Source

main.ts:134251

***

### device?

> **`optional`** **device**: `string`

device type
optional field
specify this field if you want to get the data for a particular device type;
possible values: all, mobile, desktop, tablet
default value: all

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md).[`device`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md#device)

#### Source

main.ts:134232

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords
required field
you can specify the maximum of 200 keywords with each keyword containing no more than 100 characters;
the specified keywords will be converted to lowercase, data will be provided in a separate array

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md#keywords)

#### Source

main.ts:134181

***

### keywords\_negative?

> **`optional`** **keywords\_negative**: `string`[]

keywords negative array
optional field
These keywords will be ignored in the results array;
You can specify a maximum of 200 terms that you want to exclude from the results;
the specified keywords will be converted to lowercase format

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md).[`keywords_negative`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md#keywords_negative)

#### Source

main.ts:134226

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
supported languages:
en, fr, de

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md#language_code)

#### Source

main.ts:134215

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
supported languages:
English, French, German

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md#language_name)

#### Source

main.ts:134209

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

[`IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md#location_code)

#### Source

main.ts:134195

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

[`IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md#location_coordinate)

#### Source

main.ts:134203

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

[`IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md#location_name)

#### Source

main.ts:134188

***

### pingback\_url?

> **`optional`** **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md#pingback_url)

#### Source

main.ts:134276

***

### postback\_url?

> **`optional`** **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md).[`postback_url`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md#postback_url)

#### Source

main.ts:134266

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

Bing search partners type
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Bing, Yahoo, AOL and partner sites that host Bing, AOL, and Yahoo search.
default value: false – results are returned for Bing, AOL, and Yahoo search networks

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md#search_partners)

#### Source

main.ts:134256

***

### sort\_by?

> **`optional`** **sort\_by**: `string`

results sorting parameters
optional field
Use these parameters to sort the results by search_volume, cpc, competition or relevance in the descending order
default value: relevance

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md).[`sort_by`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md#sort_by)

#### Source

main.ts:134220

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md).[`tag`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md#tag)

#### Source

main.ts:134282

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:134295

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:134334

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md)

#### Source

main.ts:134327
