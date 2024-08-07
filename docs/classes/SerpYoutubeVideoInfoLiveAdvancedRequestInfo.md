**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYoutubeVideoInfoLiveAdvancedRequestInfo

# Class: SerpYoutubeVideoInfoLiveAdvancedRequestInfo

## Implements

- [`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoInfoLiveAdvancedRequestInfo(data)

> **new SerpYoutubeVideoInfoLiveAdvancedRequestInfo**(`data`?): [`SerpYoutubeVideoInfoLiveAdvancedRequestInfo`](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)

#### Returns

[`SerpYoutubeVideoInfoLiveAdvancedRequestInfo`](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)

#### Source

main.ts:63490

## Properties

### device?

> **`optional`** **device**: `string`

device type
optional field
only value: desktop

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#device)

#### Source

main.ts:63475

***

### language\_code?

> **`optional`** **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
en

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#language_code)

#### Source

main.ts:63471

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
English

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#language_name)

#### Source

main.ts:63464

***

### location\_code?

> **`optional`** **location\_code**: `number`

search engine location code
required field if you don’t specify location_name 
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
2840

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#location_code)

#### Source

main.ts:63457

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
United States

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#location_name)

#### Source

main.ts:63450

***

### os?

> **`optional`** **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#os)

#### Source

main.ts:63480

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#tag)

#### Source

main.ts:63486

***

### video\_id?

> **`optional`** **video\_id**: `string`

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
vQXvyV0zIP4

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#video_id)

#### Source

main.ts:63443

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:63499

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:63523

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYoutubeVideoInfoLiveAdvancedRequestInfo`](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoInfoLiveAdvancedRequestInfo`](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)

#### Source

main.ts:63516
