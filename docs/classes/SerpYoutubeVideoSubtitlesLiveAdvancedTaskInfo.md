[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo

# Class: SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo`**

## Implements

- [`ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#cost)
- [data](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#data)
- [id](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#id)
- [path](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#path)
- [result](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#result)
- [result\_count](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#result_count)
- [status\_code](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#status_code)
- [status\_message](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#status_message)
- [time](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#time)

### Methods

- [init](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#init)
- [toJSON](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#tojson)
- [fromJS](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo**(`data?`): [`SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md) |

#### Returns

[`SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:60938](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60938)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md).[cost](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#cost)

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

[ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md).[data](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#data)

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

[ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md).[id](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md).[path](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md).[result](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:60934](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60934)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md).[result_count](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#result_count)

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

[ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md).[status_code](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#status_code)

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

[ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md).[status_message](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md).[time](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md#time)

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

[main.ts:60942](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60942)

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

[main.ts:60964](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60964)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:60957](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60957)
