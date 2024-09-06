[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo

# Class: KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo()

> **new KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo**(`data`?): [`KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md)

#### Defined in

main.ts:134174

## Properties

### date\_from?

> `optional` **date\_from**: `string`

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

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#date_from)

#### Defined in

main.ts:134131

***

### date\_to?

> `optional` **date\_to**: `string`

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

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#date_to)

#### Defined in

main.ts:134144

***

### device?

> `optional` **device**: `string`

device type
optional field
specify this field if you want to get the data for a particular device type
possible values: mobile, desktop, tablet, non_smartphones
default value:  mobile, desktop, tablet, non_smartphones

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`device`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#device)

#### Defined in

main.ts:134109

***

### keywords?

> `optional` **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 1000
The maximum number of characters for each keyword: 100
the specified keywords will be converted to lowercase, data will be provided in a separate array

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#keywords)

#### Defined in

main.ts:134071

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engines with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#language_code)

#### Defined in

main.ts:134103

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engines with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#language_name)

#### Defined in

main.ts:134098

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages
example:
2840

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:134085

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

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#location_coordinate)

#### Defined in

main.ts:134093

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:134078

***

### period?

> `optional` **period**: `string`

aggregates the returned data to a certain time period
optional field
specify this field if you want to get the data in monthly, weekly or daily format
possible values: monthly, weekly, daily
monthly – returns data up to past 24 months
weekly – returns data up to past 15 weeks
daily – returns data up to past 45 days
default value:  monthly

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`period`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#period)

#### Defined in

main.ts:134118

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:134164

***

### postback\_url?

> `optional` **postback\_url**: `string`

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

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`postback_url`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:134154

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`tag`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:134170

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:134183

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:134216

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md)

#### Defined in

main.ts:134209
