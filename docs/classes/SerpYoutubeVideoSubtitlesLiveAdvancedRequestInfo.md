**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo

# Class: SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo

## Implements

- [`ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo(data)

> **new SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo**(`data`?): [`SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md)

#### Returns

[`SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md)

#### Source

main.ts:63039

## Properties

### device?

> **`optional`** **device**: `string`

device type
optional field
only value: desktop

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#device)

#### Source

main.ts:63024

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

[`ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#language_code)

#### Source

main.ts:63020

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

[`ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#language_name)

#### Source

main.ts:63013

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

[`ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#location_code)

#### Source

main.ts:63006

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

[`ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#location_name)

#### Source

main.ts:62999

***

### os?

> **`optional`** **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#os)

#### Source

main.ts:63029

***

### subtitles\_language?

> **`optional`** **subtitles\_language**: `string`

language code of original text
you can get the language code from YouTube Video Info result

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md).[`subtitles_language`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#subtitles_language)

#### Source

main.ts:62988

***

### subtitles\_translate\_language?

> **`optional`** **subtitles\_translate\_language**: `string`

language code of translated text
possible values:
"az", "ay", "ak", "sq", "am", "en", "ar", "hy", "as", "af", "eu", "be", "bn", "my", "bg", "bs", "bho", "cy", "hu", "vi", "haw", "ht", "gl", "lg", "el", "ka", "gn", "gu", "gd", "da", "fy", "zu", "iw", "ig", "yi", "id", "ga", "is", "es", "it", "yo", "kk", "kn", "ca", "qu", "rw", "ky", "zh-Hant", "zh-Hans", "ko", "co", "xh", "ku", "km", "lo", "la", "lv", "ln", "lt", "lb", "mk", "mg", "ms", "ml", "dv", "mt", "mi", "mr", "mn", "und", "de", "ne", "nl", "no", "ny", "or", "om", "pa", "fa", "pl", "pt", "ps", "ro", "ru", "sm", "sa", "ceb", "nso", "sr", "si", "sd", "sk", "sl", "so", "sw", "su", "tg", "th", "ta", "tt", "te", "ti", "ts", "tr", "tk", "uz", "ug", "uk", "ur", "fil", "fi", "fr", "ha", "hi", "hmn", "hr", "cs", "sv", "sn", "ee", "eo", "et", "st", "jv", "ja", "kri"

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md).[`subtitles_translate_language`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#subtitles_translate_language)

#### Source

main.ts:62992

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#tag)

#### Source

main.ts:63035

***

### video\_id?

> **`optional`** **video\_id**: `string`

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
Y8Wu4rSNJms

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#video_id)

#### Source

main.ts:62985

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:63048

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:63074

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md)

#### Source

main.ts:63067
