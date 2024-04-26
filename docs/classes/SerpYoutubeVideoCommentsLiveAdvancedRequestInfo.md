**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYoutubeVideoCommentsLiveAdvancedRequestInfo

# Class: SerpYoutubeVideoCommentsLiveAdvancedRequestInfo

## Implements

- [`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsLiveAdvancedRequestInfo(data)

> **new SerpYoutubeVideoCommentsLiveAdvancedRequestInfo**(`data`?): [`SerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)

#### Source

main.ts:64783

## Properties

### depth?

> **`optional`** **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 20
max value: 700
Note: your account will be billed per each SERP containing up to 20 results;
thus, setting a depth above 20 may result in additional charges if the search engine returns more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[`depth`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#depth)

#### Source

main.ts:64773

***

### device?

> **`optional`** **device**: `string`

device type
optional field
only value: desktop

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#device)

#### Source

main.ts:64759

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

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#language_code)

#### Source

main.ts:64755

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

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#language_name)

#### Source

main.ts:64748

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

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#location_code)

#### Source

main.ts:64741

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

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#location_name)

#### Source

main.ts:64734

***

### os?

> **`optional`** **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#os)

#### Source

main.ts:64764

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#tag)

#### Source

main.ts:64779

***

### video\_id?

> **`optional`** **video\_id**: `string`

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
vQXvyV0zIP4

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#video_id)

#### Source

main.ts:64727

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:64792

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:64817

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)

#### Source

main.ts:64810
