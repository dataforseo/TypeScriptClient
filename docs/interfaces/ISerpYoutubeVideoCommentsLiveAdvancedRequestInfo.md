[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo

# Interface: ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo

## Implemented by

- [`SerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../classes/SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [depth](ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#depth)
- [device](ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#device)
- [language\_code](ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#language_code)
- [language\_name](ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#language_name)
- [location\_code](ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#location_code)
- [location\_name](ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#location_name)
- [os](ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#os)
- [tag](ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#tag)
- [video\_id](ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#video_id)

## Properties

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 20
max value: 700
Note: your account will be billed per each SERP containing up to 20 results;
thus, setting a depth above 20 may result in additional charges if the search engine returns more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Defined in

[main.ts:62363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62363)

___


### device

• `Optional` **device**: `string`

device type
optional field
only value: desktop

#### Defined in

[main.ts:62349](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62349)

___


### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
en

#### Defined in

[main.ts:62345](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62345)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
English

#### Defined in

[main.ts:62338](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62338)

___


### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name 
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
2840

#### Defined in

[main.ts:62331](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62331)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
United States

#### Defined in

[main.ts:62324](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62324)

___


### os

• `Optional` **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Defined in

[main.ts:62354](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62354)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:62369](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62369)

___


### video\_id

• `Optional` **video\_id**: `string`

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
vQXvyV0zIP4

#### Defined in

[main.ts:62317](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62317)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")