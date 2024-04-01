[Documentation](../README.md) / [Exports](../modules.md) / ISerpYoutubeVideoInfoLiveAdvancedRequestInfo

# Interface: ISerpYoutubeVideoInfoLiveAdvancedRequestInfo

## Implemented by

- [`SerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../classes/SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [device](ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#device)
- [language\_code](ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#language_code)
- [language\_name](ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#language_name)
- [location\_code](ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#location_code)
- [location\_name](ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#location_name)
- [os](ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#os)
- [tag](ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#tag)
- [video\_id](ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#video_id)

## Properties

### device

• `Optional` **device**: `string`

device type
optional field
only value: desktop

#### Defined in

main.ts:61551

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

main.ts:61547

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

main.ts:61540

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

main.ts:61533

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

main.ts:61526

___

### os

• `Optional` **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Defined in

main.ts:61556

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:61562

___

### video\_id

• `Optional` **video\_id**: `string`

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
vQXvyV0zIP4

#### Defined in

main.ts:61519
