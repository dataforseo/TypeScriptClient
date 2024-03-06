[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpYoutubeVideoCommentsTaskPostRequestInfo

# Interface: ISerpYoutubeVideoCommentsTaskPostRequestInfo

## Implemented by

- [`SerpYoutubeVideoCommentsTaskPostRequestInfo`](../classes/SerpYoutubeVideoCommentsTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [depth](ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#depth)
- [device](ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#device)
- [language\_code](ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#language_code)
- [language\_name](ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#language_name)
- [location\_code](ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#location_code)
- [location\_name](ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#location_name)
- [os](ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#os)
- [pingback\_url](ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#pingback_url)
- [postback\_data](ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#postback_data)
- [postback\_url](ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#postback_url)
- [priority](ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#priority)
- [tag](ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#tag)
- [video\_id](ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#video_id)

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

[main.ts:61259](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61259)

___


### device

• `Optional` **device**: `string`

device type
optional field
only value: desktop

#### Defined in

[main.ts:61245](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61245)

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

[main.ts:61241](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61241)

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

[main.ts:61234](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61234)

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

[main.ts:61227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61227)

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

[main.ts:61220](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61220)

___


### os

• `Optional` **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Defined in

[main.ts:61250](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61250)

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

[main.ts:61291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61291)

___


### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible value:
advanced

#### Defined in

[main.ts:61281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61281)

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

[main.ts:61275](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61275)

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

[main.ts:61213](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61213)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:61265](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61265)

___


### video\_id

• `Optional` **video\_id**: `string`

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
vQXvyV0zIP4

#### Defined in

[main.ts:61205](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61205)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")