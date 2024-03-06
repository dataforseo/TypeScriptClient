[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoSubtitlesTaskPostRequestInfo

# Class: SerpYoutubeVideoSubtitlesTaskPostRequestInfo

## Implements

- [`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#constructor)

### Properties

- [device](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#device)
- [language\_code](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#language_code)
- [language\_name](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#language_name)
- [location\_code](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#location_code)
- [location\_name](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#location_name)
- [os](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#os)
- [pingback\_url](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#pingback_url)
- [postback\_data](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#postback_data)
- [postback\_url](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#postback_url)
- [priority](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#priority)
- [subtitles\_language](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#subtitles_language)
- [subtitles\_translate\_language](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#subtitles_translate_language)
- [tag](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#tag)
- [video\_id](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#video_id)

### Methods

- [init](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#init)
- [toJSON](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#tojson)
- [fromJS](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoSubtitlesTaskPostRequestInfo**(`data?`): [`SerpYoutubeVideoSubtitlesTaskPostRequestInfo`](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md) |

#### Returns

[`SerpYoutubeVideoSubtitlesTaskPostRequestInfo`](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md)

#### Defined in

[main.ts:59532](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59532)

## Properties

### device

• `Optional` **device**: `string`

device type
optional field
only value: desktop

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[device](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#device)

#### Defined in

[main.ts:59491](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59491)

___


### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
en

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[language_code](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#language_code)

#### Defined in

[main.ts:59487](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59487)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
English

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[language_name](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#language_name)

#### Defined in

[main.ts:59480](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59480)

___


### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
2840

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[location_code](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#location_code)

#### Defined in

[main.ts:59473](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59473)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
United States

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[location_name](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#location_name)

#### Defined in

[main.ts:59466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59466)

___


### os

• `Optional` **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[os](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#os)

#### Defined in

[main.ts:59496](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59496)

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

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[pingback_url](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#pingback_url)

#### Defined in

[main.ts:59528](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59528)

___


### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible value:
advanced

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[postback_data](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#postback_data)

#### Defined in

[main.ts:59518](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59518)

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

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[postback_url](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#postback_url)

#### Defined in

[main.ts:59512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59512)

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

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[priority](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#priority)

#### Defined in

[main.ts:59452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59452)

___


### subtitles\_language

• `Optional` **subtitles\_language**: `string`

language code of original text
you can get the language code from YouTube Video Info result

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[subtitles_language](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#subtitles_language)

#### Defined in

[main.ts:59455](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59455)

___


### subtitles\_translate\_language

• `Optional` **subtitles\_translate\_language**: `string`

language code of translated text
possible values:
"az", "ay", "ak", "sq", "am", "en", "ar", "hy", "as", "af", "eu", "be", "bn", "my", "bg", "bs", "bho", "cy", "hu", "vi", "haw", "ht", "gl", "lg", "el", "ka", "gn", "gu", "gd", "da", "fy", "zu", "iw", "ig", "yi", "id", "ga", "is", "es", "it", "yo", "kk", "kn", "ca", "qu", "rw", "ky", "zh-Hant", "zh-Hans", "ko", "co", "xh", "ku", "km", "lo", "la", "lv", "ln", "lt", "lb", "mk", "mg", "ms", "ml", "dv", "mt", "mi", "mr", "mn", "und", "de", "ne", "nl", "no", "ny", "or", "om", "pa", "fa", "pl", "pt", "ps", "ro", "ru", "sm", "sa", "ceb", "nso", "sr", "si", "sd", "sk", "sl", "so", "sw", "su", "tg", "th", "ta", "tt", "te", "ti", "ts", "tr", "tk", "uz", "ug", "uk", "ur", "fil", "fi", "fr", "ha", "hi", "hmn", "hr", "cs", "sv", "sn", "ee", "eo", "et", "st", "jv", "ja", "kri"

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[subtitles_translate_language](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#subtitles_translate_language)

#### Defined in

[main.ts:59459](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59459)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[tag](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#tag)

#### Defined in

[main.ts:59502](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59502)

___


### video\_id

• `Optional` **video\_id**: `string`

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
Y8Wu4rSNJms

#### Implementation of

[ISerpYoutubeVideoSubtitlesTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[video_id](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#video_id)

#### Defined in

[main.ts:59444](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59444)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:59541](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59541)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:59571](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59571)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTaskPostRequestInfo`](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoSubtitlesTaskPostRequestInfo`](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md)

#### Defined in

[main.ts:59564](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59564)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")