[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpYoutubeVideoSubtitlesTaskPostRequestInfo

# Interface: ISerpYoutubeVideoSubtitlesTaskPostRequestInfo

## Implemented by

- [`SerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../classes/SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [device](ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#device)
- [language\_code](ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#language_code)
- [language\_name](ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#language_name)
- [location\_code](ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#location_code)
- [location\_name](ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#location_name)
- [os](ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#os)
- [pingback\_url](ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#pingback_url)
- [postback\_data](ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#postback_data)
- [postback\_url](ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#postback_url)
- [priority](ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#priority)
- [subtitles\_language](ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#subtitles_language)
- [subtitles\_translate\_language](ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#subtitles_translate_language)
- [tag](ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#tag)
- [video\_id](ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#video_id)

## Properties

### device

• `Optional` **device**: `string`

device type
optional field
only value: desktop

#### Defined in

[main.ts:59648](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59648)

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

[main.ts:59644](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59644)

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

[main.ts:59637](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59637)

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

[main.ts:59630](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59630)

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

[main.ts:59623](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59623)

___

### os

• `Optional` **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Defined in

[main.ts:59653](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59653)

___

### pingback\_url

• `Optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Defined in

[main.ts:59685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59685)

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible value:
advanced

#### Defined in

[main.ts:59675](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59675)

___

### postback\_url

• `Optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Defined in

[main.ts:59669](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59669)

___

### priority

• `Optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Defined in

[main.ts:59609](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59609)

___

### subtitles\_language

• `Optional` **subtitles\_language**: `string`

language code of original text
you can get the language code from YouTube Video Info result

#### Defined in

[main.ts:59612](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59612)

___

### subtitles\_translate\_language

• `Optional` **subtitles\_translate\_language**: `string`

language code of translated text
possible values:
"az", "ay", "ak", "sq", "am", "en", "ar", "hy", "as", "af", "eu", "be", "bn", "my", "bg", "bs", "bho", "cy", "hu", "vi", "haw", "ht", "gl", "lg", "el", "ka", "gn", "gu", "gd", "da", "fy", "zu", "iw", "ig", "yi", "id", "ga", "is", "es", "it", "yo", "kk", "kn", "ca", "qu", "rw", "ky", "zh-Hant", "zh-Hans", "ko", "co", "xh", "ku", "km", "lo", "la", "lv", "ln", "lt", "lb", "mk", "mg", "ms", "ml", "dv", "mt", "mi", "mr", "mn", "und", "de", "ne", "nl", "no", "ny", "or", "om", "pa", "fa", "pl", "pt", "ps", "ro", "ru", "sm", "sa", "ceb", "nso", "sr", "si", "sd", "sk", "sl", "so", "sw", "su", "tg", "th", "ta", "tt", "te", "ti", "ts", "tr", "tk", "uz", "ug", "uk", "ur", "fil", "fi", "fr", "ha", "hi", "hmn", "hr", "cs", "sv", "sn", "ee", "eo", "et", "st", "jv", "ja", "kri"

#### Defined in

[main.ts:59616](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59616)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:59659](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59659)

___

### video\_id

• `Optional` **video\_id**: `string`

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
Y8Wu4rSNJms

#### Defined in

[main.ts:59601](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59601)
