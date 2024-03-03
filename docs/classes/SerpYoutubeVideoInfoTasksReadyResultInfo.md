[Documentation](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoInfoTasksReadyResultInfo

# Class: SerpYoutubeVideoInfoTasksReadyResultInfo

## Implements

- [`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoInfoTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](SerpYoutubeVideoInfoTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](SerpYoutubeVideoInfoTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](SerpYoutubeVideoInfoTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](SerpYoutubeVideoInfoTasksReadyResultInfo.md#endpoint_regular)
- [id](SerpYoutubeVideoInfoTasksReadyResultInfo.md#id)
- [se](SerpYoutubeVideoInfoTasksReadyResultInfo.md#se)
- [se\_type](SerpYoutubeVideoInfoTasksReadyResultInfo.md#se_type)
- [tag](SerpYoutubeVideoInfoTasksReadyResultInfo.md#tag)

### Methods

- [init](SerpYoutubeVideoInfoTasksReadyResultInfo.md#init)
- [toJSON](SerpYoutubeVideoInfoTasksReadyResultInfo.md#tojson)
- [fromJS](SerpYoutubeVideoInfoTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoInfoTasksReadyResultInfo**(`data?`): [`SerpYoutubeVideoInfoTasksReadyResultInfo`](SerpYoutubeVideoInfoTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md) |

#### Returns

[`SerpYoutubeVideoInfoTasksReadyResultInfo`](SerpYoutubeVideoInfoTasksReadyResultInfo.md)

#### Defined in

main.ts:58239

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[ISerpYoutubeVideoInfoTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[date_posted](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:58224

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoInfoTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:58232

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoInfoTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[endpoint_html](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:58235

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[ISerpYoutubeVideoInfoTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[endpoint_regular](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:58229

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpYoutubeVideoInfoTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[id](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#id)

#### Defined in

main.ts:58217

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[ISerpYoutubeVideoInfoTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[se](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#se)

#### Defined in

main.ts:58219

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: video_info

#### Implementation of

[ISerpYoutubeVideoInfoTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[se_type](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:58222

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[ISerpYoutubeVideoInfoTasksReadyResultInfo](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[tag](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:58226

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

main.ts:58248

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

main.ts:58272

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoInfoTasksReadyResultInfo`](SerpYoutubeVideoInfoTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoInfoTasksReadyResultInfo`](SerpYoutubeVideoInfoTasksReadyResultInfo.md)

#### Defined in

main.ts:58265
