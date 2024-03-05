[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoInfoTaskPostRequestInfo

# Class: SerpYoutubeVideoInfoTaskPostRequestInfo

## Implements

- [`ISerpYoutubeVideoInfoTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoInfoTaskPostRequestInfo.md#constructor)

### Properties

- [device](SerpYoutubeVideoInfoTaskPostRequestInfo.md#device)
- [language\_code](SerpYoutubeVideoInfoTaskPostRequestInfo.md#language_code)
- [language\_name](SerpYoutubeVideoInfoTaskPostRequestInfo.md#language_name)
- [location\_code](SerpYoutubeVideoInfoTaskPostRequestInfo.md#location_code)
- [location\_name](SerpYoutubeVideoInfoTaskPostRequestInfo.md#location_name)
- [os](SerpYoutubeVideoInfoTaskPostRequestInfo.md#os)
- [pingback\_url](SerpYoutubeVideoInfoTaskPostRequestInfo.md#pingback_url)
- [postback\_data](SerpYoutubeVideoInfoTaskPostRequestInfo.md#postback_data)
- [postback\_url](SerpYoutubeVideoInfoTaskPostRequestInfo.md#postback_url)
- [priority](SerpYoutubeVideoInfoTaskPostRequestInfo.md#priority)
- [tag](SerpYoutubeVideoInfoTaskPostRequestInfo.md#tag)
- [video\_id](SerpYoutubeVideoInfoTaskPostRequestInfo.md#video_id)

### Methods

- [init](SerpYoutubeVideoInfoTaskPostRequestInfo.md#init)
- [toJSON](SerpYoutubeVideoInfoTaskPostRequestInfo.md#tojson)
- [fromJS](SerpYoutubeVideoInfoTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoInfoTaskPostRequestInfo**(`data?`): [`SerpYoutubeVideoInfoTaskPostRequestInfo`](SerpYoutubeVideoInfoTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoInfoTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md) |

#### Returns

[`SerpYoutubeVideoInfoTaskPostRequestInfo`](SerpYoutubeVideoInfoTaskPostRequestInfo.md)

#### Defined in

[main.ts:57819](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57819)

## Properties

### device

• `Optional` **device**: `string`

device type
optional field
only value: desktop

#### Implementation of

[ISerpYoutubeVideoInfoTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[device](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#device)

#### Defined in

[main.ts:57778](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57778)

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

[ISerpYoutubeVideoInfoTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[language_code](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#language_code)

#### Defined in

[main.ts:57774](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57774)

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

[ISerpYoutubeVideoInfoTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[language_name](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#language_name)

#### Defined in

[main.ts:57767](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57767)

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

[ISerpYoutubeVideoInfoTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[location_code](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#location_code)

#### Defined in

[main.ts:57760](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57760)

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

[ISerpYoutubeVideoInfoTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[location_name](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#location_name)

#### Defined in

[main.ts:57753](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57753)

___

### os

• `Optional` **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[ISerpYoutubeVideoInfoTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[os](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#os)

#### Defined in

[main.ts:57783](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57783)

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

[ISerpYoutubeVideoInfoTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[pingback_url](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#pingback_url)

#### Defined in

[main.ts:57815](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57815)

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible value:
advanced

#### Implementation of

[ISerpYoutubeVideoInfoTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[postback_data](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#postback_data)

#### Defined in

[main.ts:57805](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57805)

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

[ISerpYoutubeVideoInfoTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[postback_url](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#postback_url)

#### Defined in

[main.ts:57799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57799)

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

[ISerpYoutubeVideoInfoTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[priority](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#priority)

#### Defined in

[main.ts:57746](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57746)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[ISerpYoutubeVideoInfoTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[tag](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#tag)

#### Defined in

[main.ts:57789](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57789)

___

### video\_id

• `Optional` **video\_id**: `string`

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
vQXvyV0zIP4

#### Implementation of

[ISerpYoutubeVideoInfoTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md).[video_id](../interfaces/ISerpYoutubeVideoInfoTaskPostRequestInfo.md#video_id)

#### Defined in

[main.ts:57738](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57738)

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

[main.ts:57828](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57828)

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

[main.ts:57856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57856)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoInfoTaskPostRequestInfo`](SerpYoutubeVideoInfoTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoInfoTaskPostRequestInfo`](SerpYoutubeVideoInfoTaskPostRequestInfo.md)

#### Defined in

[main.ts:57849](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57849)
