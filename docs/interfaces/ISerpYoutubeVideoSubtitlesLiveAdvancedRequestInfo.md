[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo

# Interface: ISerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo

Defined in: main.ts:72665

## Indexable

\[`key`: `string`\]: `any`

## Properties

### device?

> `optional` **device**: `string`

Defined in: main.ts:72710

device type
optional field
only value: desktop

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:72706

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:72699

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:72692

search engine location code
required field if you don’t specify location_name 
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:72685

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
United States

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:72715

device operating system
optional field
choose from the following values: windows, macos
default value: windows

***

### subtitles\_language?

> `optional` **subtitles\_language**: `string`

Defined in: main.ts:72674

language code of original text
you can get the language code from YouTube Video Info result

***

### subtitles\_translate\_language?

> `optional` **subtitles\_translate\_language**: `string`

Defined in: main.ts:72678

language code of translated text
possible values:
"az", "ay", "ak", "sq", "am", "en", "ar", "hy", "as", "af", "eu", "be", "bn", "my", "bg", "bs", "bho", "cy", "hu", "vi", "haw", "ht", "gl", "lg", "el", "ka", "gn", "gu", "gd", "da", "fy", "zu", "iw", "ig", "yi", "id", "ga", "is", "es", "it", "yo", "kk", "kn", "ca", "qu", "rw", "ky", "zh-Hant", "zh-Hans", "ko", "co", "xh", "ku", "km", "lo", "la", "lv", "ln", "lt", "lb", "mk", "mg", "ms", "ml", "dv", "mt", "mi", "mr", "mn", "und", "de", "ne", "nl", "no", "ny", "or", "om", "pa", "fa", "pl", "pt", "ps", "ro", "ru", "sm", "sa", "ceb", "nso", "sr", "si", "sd", "sk", "sl", "so", "sw", "su", "tg", "th", "ta", "tt", "te", "ti", "ts", "tr", "tk", "uz", "ug", "uk", "ur", "fil", "fi", "fr", "ha", "hi", "hmn", "hr", "cs", "sv", "sn", "ee", "eo", "et", "st", "jv", "ja", "kri"

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:72721

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### video\_id?

> `optional` **video\_id**: `string`

Defined in: main.ts:72671

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
Y8Wu4rSNJms
