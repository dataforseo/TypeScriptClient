[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoInfoLiveAdvancedRequestInfo

# Class: SerpYoutubeVideoInfoLiveAdvancedRequestInfo

## Implements

- [`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#constructor)

### Properties

- [device](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#device)
- [language\_code](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#language_code)
- [language\_name](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#language_name)
- [location\_code](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#location_code)
- [location\_name](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#location_name)
- [os](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#os)
- [tag](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#tag)
- [video\_id](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#video_id)

### Methods

- [init](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#init)
- [toJSON](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#tojson)
- [fromJS](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoInfoLiveAdvancedRequestInfo**(`data?`): [`SerpYoutubeVideoInfoLiveAdvancedRequestInfo`](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoInfoLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md) |

#### Returns

[`SerpYoutubeVideoInfoLiveAdvancedRequestInfo`](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)

#### Defined in

[main.ts:59087](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59087)

## Properties

### device

• `Optional` **device**: `string`

device type
optional field
only value: desktop

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedRequestInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[device](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#device)

#### Defined in

[main.ts:59072](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59072)

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

[ISerpYoutubeVideoInfoLiveAdvancedRequestInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[language_code](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#language_code)

#### Defined in

[main.ts:59068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59068)

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

[ISerpYoutubeVideoInfoLiveAdvancedRequestInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[language_name](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#language_name)

#### Defined in

[main.ts:59061](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59061)

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

[ISerpYoutubeVideoInfoLiveAdvancedRequestInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[location_code](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#location_code)

#### Defined in

[main.ts:59054](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59054)

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

[ISerpYoutubeVideoInfoLiveAdvancedRequestInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[location_name](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#location_name)

#### Defined in

[main.ts:59047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59047)

___

### os

• `Optional` **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedRequestInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[os](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#os)

#### Defined in

[main.ts:59077](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59077)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedRequestInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[tag](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#tag)

#### Defined in

[main.ts:59083](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59083)

___

### video\_id

• `Optional` **video\_id**: `string`

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
vQXvyV0zIP4

#### Implementation of

[ISerpYoutubeVideoInfoLiveAdvancedRequestInfo](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md).[video_id](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedRequestInfo.md#video_id)

#### Defined in

[main.ts:59040](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59040)

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

[main.ts:59096](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59096)

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

[main.ts:59120](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59120)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoInfoLiveAdvancedRequestInfo`](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoInfoLiveAdvancedRequestInfo`](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)

#### Defined in

[main.ts:59113](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59113)
