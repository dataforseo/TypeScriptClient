[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoCommentsLiveAdvancedRequestInfo

# Class: SerpYoutubeVideoCommentsLiveAdvancedRequestInfo

Defined in: main.ts:74200

## Implements

- [`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsLiveAdvancedRequestInfo()

> **new SerpYoutubeVideoCommentsLiveAdvancedRequestInfo**(`data`?): [`SerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)

Defined in: main.ts:74262

#### Parameters

##### data?

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:74252

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

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:74238

device type
optional field
only value: desktop

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#device)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:74234

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
en

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:74227

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
English

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:74220

search engine location code
required field if you don’t specify location_name 
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
2840

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:74213

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
United States

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#location_name)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:74243

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#os)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:74258

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#tag)

***

### video\_id?

> `optional` **video\_id**: `string`

Defined in: main.ts:74206

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
vQXvyV0zIP4

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#video_id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:74271

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:74296

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)

Defined in: main.ts:74289

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)
