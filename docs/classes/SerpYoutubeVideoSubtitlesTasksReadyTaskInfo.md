[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoSubtitlesTasksReadyTaskInfo

# Class: SerpYoutubeVideoSubtitlesTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpYoutubeVideoSubtitlesTasksReadyTaskInfo`**

## Implements

- [`ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#cost)
- [data](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#data)
- [id](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#id)
- [path](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#path)
- [result](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#result)
- [result\_count](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#result_count)
- [status\_code](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#status_code)
- [status\_message](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#status_message)
- [time](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#time)

### Methods

- [init](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#init)
- [toJSON](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#tojson)
- [fromJS](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoSubtitlesTasksReadyTaskInfo**(`data?`): [`SerpYoutubeVideoSubtitlesTasksReadyTaskInfo`](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md) |

#### Returns

[`SerpYoutubeVideoSubtitlesTasksReadyTaskInfo`](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:59902](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59902)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md).[cost](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

[main.ts:22602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22602)

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md).[data](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

[main.ts:22608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22608)

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md).[id](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md).[path](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpYoutubeVideoSubtitlesTasksReadyResultInfo`](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md).[result](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:59898](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59898)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md).[result_count](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

[main.ts:22604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22604)

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md).[status_code](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

[main.ts:22595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22595)

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md).[status_message](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md).[time](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

[main.ts:22600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22600)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[init](BaseResponseTaskInfo.md#init)

#### Defined in

[main.ts:59906](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59906)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[toJSON](BaseResponseTaskInfo.md#tojson)

#### Defined in

[main.ts:59928](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59928)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTasksReadyTaskInfo`](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoSubtitlesTasksReadyTaskInfo`](SerpYoutubeVideoSubtitlesTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:59921](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59921)
