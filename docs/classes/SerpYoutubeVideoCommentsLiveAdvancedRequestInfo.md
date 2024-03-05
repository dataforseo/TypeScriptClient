[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoCommentsLiveAdvancedRequestInfo

# Class: SerpYoutubeVideoCommentsLiveAdvancedRequestInfo

## Implements

- [`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#constructor)

### Properties

- [depth](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#depth)
- [device](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#device)
- [language\_code](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#language_code)
- [language\_name](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#language_name)
- [location\_code](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#location_code)
- [location\_name](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#location_name)
- [os](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#os)
- [tag](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#tag)
- [video\_id](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#video_id)

### Methods

- [init](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#init)
- [toJSON](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#tojson)
- [fromJS](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoCommentsLiveAdvancedRequestInfo**(`data?`): [`SerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md) |

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)

#### Defined in

[main.ts:62258](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62258)

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

[ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[depth](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#depth)

#### Defined in

[main.ts:62248](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62248)

___

### device

• `Optional` **device**: `string`

device type
optional field
only value: desktop

#### Implementation of

[ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[device](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#device)

#### Defined in

[main.ts:62234](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62234)

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

[ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[language_code](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#language_code)

#### Defined in

[main.ts:62230](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62230)

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

[ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[language_name](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#language_name)

#### Defined in

[main.ts:62223](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62223)

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

[ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[location_code](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#location_code)

#### Defined in

[main.ts:62216](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62216)

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

[ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[location_name](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#location_name)

#### Defined in

[main.ts:62209](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62209)

___

### os

• `Optional` **os**: `string`

device operating system
optional field
choose from the following values: windows, macos
default value: windows

#### Implementation of

[ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[os](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#os)

#### Defined in

[main.ts:62239](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62239)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[tag](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#tag)

#### Defined in

[main.ts:62254](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62254)

___

### video\_id

• `Optional` **video\_id**: `string`

ID of the video
required field
you can find video ID in the URL or ‘youtube_video’ item of YouTube Organic result
example:
vQXvyV0zIP4

#### Implementation of

[ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md).[video_id](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md#video_id)

#### Defined in

[main.ts:62202](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62202)

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

[main.ts:62267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62267)

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

[main.ts:62292](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62292)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)

#### Defined in

[main.ts:62285](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62285)
