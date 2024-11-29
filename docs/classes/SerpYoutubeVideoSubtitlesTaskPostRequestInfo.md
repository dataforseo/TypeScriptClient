[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoSubtitlesTaskPostRequestInfo

# Class: SerpYoutubeVideoSubtitlesTaskPostRequestInfo

## Implements

- [`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoSubtitlesTaskPostRequestInfo()

> **new SerpYoutubeVideoSubtitlesTaskPostRequestInfo**(`data`?): [`SerpYoutubeVideoSubtitlesTaskPostRequestInfo`](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md)

#### Parameters

##### data?

[`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md)

#### Returns

[`SerpYoutubeVideoSubtitlesTaskPostRequestInfo`](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md)

#### Defined in

main.ts:71506

## Properties

### device?

> `optional` **device**: `string`

device type
optional field
only value: desktop

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[`device`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#device)

#### Defined in

main.ts:71463

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
en

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#language_code)

#### Defined in

main.ts:71459

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
English

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#language_name)

#### Defined in

main.ts:71452

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
2840

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:71445

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
United States

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:71438

***

### os?

> `optional` **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[`os`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#os)

#### Defined in

main.ts:71468

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:71502

***

### postback\_data?

> `optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible value:
advanced

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#postback_data)

#### Defined in

main.ts:71491

***

### postback\_url?

> `optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:71485

***

### priority?

> `optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#priority)

#### Defined in

main.ts:71424

***

### subtitles\_language?

> `optional` **subtitles\_language**: `string`

language code of original text
you can get the language code from YouTube Video Info result

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[`subtitles_language`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#subtitles_language)

#### Defined in

main.ts:71427

***

### subtitles\_translate\_language?

> `optional` **subtitles\_translate\_language**: `string`

language code of translated text
possible values:
"az", "ay", "ak", "sq", "am", "en", "ar", "hy", "as", "af", "eu", "be", "bn", "my", "bg", "bs", "bho", "cy", "hu", "vi", "haw", "ht", "gl", "lg", "el", "ka", "gn", "gu", "gd", "da", "fy", "zu", "iw", "ig", "yi", "id", "ga", "is", "es", "it", "yo", "kk", "kn", "ca", "qu", "rw", "ky", "zh-Hant", "zh-Hans", "ko", "co", "xh", "ku", "km", "lo", "la", "lv", "ln", "lt", "lb", "mk", "mg", "ms", "ml", "dv", "mt", "mi", "mr", "mn", "und", "de", "ne", "nl", "no", "ny", "or", "om", "pa", "fa", "pl", "pt", "ps", "ro", "ru", "sm", "sa", "ceb", "nso", "sr", "si", "sd", "sk", "sl", "so", "sw", "su", "tg", "th", "ta", "tt", "te", "ti", "ts", "tr", "tk", "uz", "ug", "uk", "ur", "fil", "fi", "fr", "ha", "hi", "hmn", "hr", "cs", "sv", "sn", "ee", "eo", "et", "st", "jv", "ja", "kri"

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[`subtitles_translate_language`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#subtitles_translate_language)

#### Defined in

main.ts:71431

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:71474

***

### video\_id?

> `optional` **video\_id**: `string`

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
Y8Wu4rSNJms

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoSubtitlesTaskPostRequestInfo.md#video_id)

#### Defined in

main.ts:71416

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:71515

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:71545

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTaskPostRequestInfo`](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoSubtitlesTaskPostRequestInfo`](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md)

#### Defined in

main.ts:71538
