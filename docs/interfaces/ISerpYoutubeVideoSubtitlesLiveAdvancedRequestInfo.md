[Documentation](../README.md) / [Exports](../modules.md) / ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo

# Interface: ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo

## Implemented by

- [`SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](../classes/SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [device](ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#device)
- [language\_code](ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#language_code)
- [language\_name](ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#language_name)
- [location\_code](ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#location_code)
- [location\_name](ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#location_name)
- [os](ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#os)
- [subtitles\_language](ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#subtitles_language)
- [subtitles\_translate\_language](ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#subtitles_translate_language)
- [tag](ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#tag)
- [video\_id](ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md#video_id)

## Properties

### device

• `Optional` **device**: `string`

device type
optional field
only value: desktop

#### Defined in

main.ts:63119

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

main.ts:63115

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

main.ts:63108

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

main.ts:63101

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

main.ts:63094

___

### os

• `Optional` **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Defined in

main.ts:63124

___

### subtitles\_language

• `Optional` **subtitles\_language**: `string`

language code of original text
you can get the language code from YouTube Video Info result

#### Defined in

main.ts:63083

___

### subtitles\_translate\_language

• `Optional` **subtitles\_translate\_language**: `string`

language code of translated text
possible values:
"az", "ay", "ak", "sq", "am", "en", "ar", "hy", "as", "af", "eu", "be", "bn", "my", "bg", "bs", "bho", "cy", "hu", "vi", "haw", "ht", "gl", "lg", "el", "ka", "gn", "gu", "gd", "da", "fy", "zu", "iw", "ig", "yi", "id", "ga", "is", "es", "it", "yo", "kk", "kn", "ca", "qu", "rw", "ky", "zh-Hant", "zh-Hans", "ko", "co", "xh", "ku", "km", "lo", "la", "lv", "ln", "lt", "lb", "mk", "mg", "ms", "ml", "dv", "mt", "mi", "mr", "mn", "und", "de", "ne", "nl", "no", "ny", "or", "om", "pa", "fa", "pl", "pt", "ps", "ro", "ru", "sm", "sa", "ceb", "nso", "sr", "si", "sd", "sk", "sl", "so", "sw", "su", "tg", "th", "ta", "tt", "te", "ti", "ts", "tr", "tk", "uz", "ug", "uk", "ur", "fil", "fi", "fr", "ha", "hi", "hmn", "hr", "cs", "sv", "sn", "ee", "eo", "et", "st", "jv", "ja", "kri"

#### Defined in

main.ts:63087

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:63130

___

### video\_id

• `Optional` **video\_id**: `string`

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
Y8Wu4rSNJms

#### Defined in

main.ts:63080
