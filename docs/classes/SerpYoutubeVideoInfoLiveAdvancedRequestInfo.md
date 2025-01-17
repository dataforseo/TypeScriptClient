[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoInfoLiveAdvancedRequestInfo

# Class: SerpYoutubeVideoInfoLiveAdvancedRequestInfo

Defined in: main.ts:70998

## Implements

- [`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoInfoLiveAdvancedRequestInfo()

> **new SerpYoutubeVideoInfoLiveAdvancedRequestInfo**(`data`?): [`SerpYoutubeVideoInfoLiveAdvancedRequestInfo`](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)

Defined in: main.ts:71051

#### Parameters

##### data?

[`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)

#### Returns

[`SerpYoutubeVideoInfoLiveAdvancedRequestInfo`](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)

## Properties

### device?

> `optional` **device**: `string`

Defined in: main.ts:71036

device type
optional field
only value: desktop

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#device)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:71032

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
en

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:71025

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
English

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:71018

search engine location code
required field if you don’t specify location_name 
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
2840

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:71011

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
United States

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#location_name)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:71041

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#os)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:71047

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#tag)

***

### video\_id?

> `optional` **video\_id**: `string`

Defined in: main.ts:71004

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
vQXvyV0zIP4

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#video_id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:71060

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:71084

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoInfoLiveAdvancedRequestInfo`](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)

Defined in: main.ts:71077

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoInfoLiveAdvancedRequestInfo`](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)
