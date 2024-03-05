[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoCommentsTaskPostRequestInfo

# Class: SerpYoutubeVideoCommentsTaskPostRequestInfo

## Implements

- [`ISerpYoutubeVideoCommentsTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoCommentsTaskPostRequestInfo.md#constructor)

### Properties

- [depth](SerpYoutubeVideoCommentsTaskPostRequestInfo.md#depth)
- [device](SerpYoutubeVideoCommentsTaskPostRequestInfo.md#device)
- [language\_code](SerpYoutubeVideoCommentsTaskPostRequestInfo.md#language_code)
- [language\_name](SerpYoutubeVideoCommentsTaskPostRequestInfo.md#language_name)
- [location\_code](SerpYoutubeVideoCommentsTaskPostRequestInfo.md#location_code)
- [location\_name](SerpYoutubeVideoCommentsTaskPostRequestInfo.md#location_name)
- [os](SerpYoutubeVideoCommentsTaskPostRequestInfo.md#os)
- [pingback\_url](SerpYoutubeVideoCommentsTaskPostRequestInfo.md#pingback_url)
- [postback\_data](SerpYoutubeVideoCommentsTaskPostRequestInfo.md#postback_data)
- [postback\_url](SerpYoutubeVideoCommentsTaskPostRequestInfo.md#postback_url)
- [priority](SerpYoutubeVideoCommentsTaskPostRequestInfo.md#priority)
- [tag](SerpYoutubeVideoCommentsTaskPostRequestInfo.md#tag)
- [video\_id](SerpYoutubeVideoCommentsTaskPostRequestInfo.md#video_id)

### Methods

- [init](SerpYoutubeVideoCommentsTaskPostRequestInfo.md#init)
- [toJSON](SerpYoutubeVideoCommentsTaskPostRequestInfo.md#tojson)
- [fromJS](SerpYoutubeVideoCommentsTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoCommentsTaskPostRequestInfo**(`data?`): [`SerpYoutubeVideoCommentsTaskPostRequestInfo`](SerpYoutubeVideoCommentsTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoCommentsTaskPostRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md) |

#### Returns

[`SerpYoutubeVideoCommentsTaskPostRequestInfo`](SerpYoutubeVideoCommentsTaskPostRequestInfo.md)

#### Defined in

[main.ts:61138](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61138)

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

#### Implementation of

[ISerpYoutubeVideoCommentsTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[depth](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#depth)

#### Defined in

[main.ts:61102](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61102)

___

### device

• `Optional` **device**: `string`

device type
optional field
only value: desktop

#### Implementation of

[ISerpYoutubeVideoCommentsTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[device](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#device)

#### Defined in

[main.ts:61088](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61088)

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

[ISerpYoutubeVideoCommentsTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[language_code](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#language_code)

#### Defined in

[main.ts:61084](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61084)

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

[ISerpYoutubeVideoCommentsTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[language_name](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#language_name)

#### Defined in

[main.ts:61077](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61077)

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

[ISerpYoutubeVideoCommentsTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[location_code](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#location_code)

#### Defined in

[main.ts:61070](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61070)

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

[ISerpYoutubeVideoCommentsTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[location_name](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#location_name)

#### Defined in

[main.ts:61063](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61063)

___

### os

• `Optional` **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[ISerpYoutubeVideoCommentsTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[os](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#os)

#### Defined in

[main.ts:61093](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61093)

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

[ISerpYoutubeVideoCommentsTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[pingback_url](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#pingback_url)

#### Defined in

[main.ts:61134](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61134)

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible value:
advanced

#### Implementation of

[ISerpYoutubeVideoCommentsTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[postback_data](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#postback_data)

#### Defined in

[main.ts:61124](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61124)

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

[ISerpYoutubeVideoCommentsTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[postback_url](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#postback_url)

#### Defined in

[main.ts:61118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61118)

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

[ISerpYoutubeVideoCommentsTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[priority](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#priority)

#### Defined in

[main.ts:61056](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61056)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[ISerpYoutubeVideoCommentsTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[tag](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#tag)

#### Defined in

[main.ts:61108](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61108)

___

### video\_id

• `Optional` **video\_id**: `string`

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
vQXvyV0zIP4

#### Implementation of

[ISerpYoutubeVideoCommentsTaskPostRequestInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md).[video_id](../interfaces/ISerpYoutubeVideoCommentsTaskPostRequestInfo.md#video_id)

#### Defined in

[main.ts:61048](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61048)

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

[main.ts:61147](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61147)

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

[main.ts:61176](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61176)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoCommentsTaskPostRequestInfo`](SerpYoutubeVideoCommentsTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoCommentsTaskPostRequestInfo`](SerpYoutubeVideoCommentsTaskPostRequestInfo.md)

#### Defined in

[main.ts:61169](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61169)
