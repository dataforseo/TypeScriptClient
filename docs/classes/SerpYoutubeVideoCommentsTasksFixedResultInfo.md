[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoCommentsTasksFixedResultInfo

# Class: SerpYoutubeVideoCommentsTasksFixedResultInfo

## Implements

- [`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoCommentsTasksFixedResultInfo.md#constructor)

### Properties

- [date\_fixed](SerpYoutubeVideoCommentsTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](SerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_regular)
- [id](SerpYoutubeVideoCommentsTasksFixedResultInfo.md#id)
- [se](SerpYoutubeVideoCommentsTasksFixedResultInfo.md#se)
- [se\_type](SerpYoutubeVideoCommentsTasksFixedResultInfo.md#se_type)
- [tag](SerpYoutubeVideoCommentsTasksFixedResultInfo.md#tag)

### Methods

- [init](SerpYoutubeVideoCommentsTasksFixedResultInfo.md#init)
- [toJSON](SerpYoutubeVideoCommentsTasksFixedResultInfo.md#tojson)
- [fromJS](SerpYoutubeVideoCommentsTasksFixedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoCommentsTasksFixedResultInfo**(`data?`): [`SerpYoutubeVideoCommentsTasksFixedResultInfo`](SerpYoutubeVideoCommentsTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md) |

#### Returns

[`SerpYoutubeVideoCommentsTasksFixedResultInfo`](SerpYoutubeVideoCommentsTasksFixedResultInfo.md)

#### Defined in

[main.ts:61637](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61637)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[ISerpYoutubeVideoCommentsTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[date_fixed](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#date_fixed)

#### Defined in

[main.ts:61622](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61622)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoCommentsTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[endpoint_advanced](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:61630](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61630)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoCommentsTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[endpoint_html](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_html)

#### Defined in

[main.ts:61633](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61633)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoCommentsTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[endpoint_regular](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

[main.ts:61627](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61627)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpYoutubeVideoCommentsTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[id](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#id)

#### Defined in

[main.ts:61615](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61615)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpYoutubeVideoCommentsTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[se](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#se)

#### Defined in

[main.ts:61617](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61617)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: video_comments

#### Implementation of

[ISerpYoutubeVideoCommentsTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[se_type](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#se_type)

#### Defined in

[main.ts:61620](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61620)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpYoutubeVideoCommentsTasksFixedResultInfo](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[tag](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#tag)

#### Defined in

[main.ts:61624](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61624)

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

[main.ts:61646](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61646)

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

[main.ts:61670](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61670)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoCommentsTasksFixedResultInfo`](SerpYoutubeVideoCommentsTasksFixedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoCommentsTasksFixedResultInfo`](SerpYoutubeVideoCommentsTasksFixedResultInfo.md)

#### Defined in

[main.ts:61663](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61663)
