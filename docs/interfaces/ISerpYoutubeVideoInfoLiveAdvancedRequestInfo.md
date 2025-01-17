[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpYoutubeVideoInfoLiveAdvancedRequestInfo

# Interface: ISerpYoutubeVideoInfoLiveAdvancedRequestInfo

Defined in: main.ts:71102

## Indexable

\[`key`: `string`\]: `any`

## Properties

### device?

> `optional` **device**: `string`

Defined in: main.ts:71140

device type
optional field
only value: desktop

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:71136

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:71129

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/languages
example:
English

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:71122

search engine location code
required field if you don’t specify location_name 
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:71115

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/youtube/locations
example:
United States

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:71145

device operating system
optional field
choose from the following values: windows, macos
default value: windows

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:71151

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### video\_id?

> `optional` **video\_id**: `string`

Defined in: main.ts:71108

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
vQXvyV0zIP4
