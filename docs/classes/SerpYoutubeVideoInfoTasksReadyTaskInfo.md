[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoInfoTasksReadyTaskInfo

# Class: SerpYoutubeVideoInfoTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpYoutubeVideoInfoTasksReadyTaskInfo`**

## Implements

- [`ISerpYoutubeVideoInfoTasksReadyTaskInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoInfoTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoInfoTasksReadyTaskInfo.md#cost)
- [data](SerpYoutubeVideoInfoTasksReadyTaskInfo.md#data)
- [id](SerpYoutubeVideoInfoTasksReadyTaskInfo.md#id)
- [path](SerpYoutubeVideoInfoTasksReadyTaskInfo.md#path)
- [result](SerpYoutubeVideoInfoTasksReadyTaskInfo.md#result)
- [result\_count](SerpYoutubeVideoInfoTasksReadyTaskInfo.md#result_count)
- [status\_code](SerpYoutubeVideoInfoTasksReadyTaskInfo.md#status_code)
- [status\_message](SerpYoutubeVideoInfoTasksReadyTaskInfo.md#status_message)
- [time](SerpYoutubeVideoInfoTasksReadyTaskInfo.md#time)

### Methods

- [init](SerpYoutubeVideoInfoTasksReadyTaskInfo.md#init)
- [toJSON](SerpYoutubeVideoInfoTasksReadyTaskInfo.md#tojson)
- [fromJS](SerpYoutubeVideoInfoTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoInfoTasksReadyTaskInfo**(`data?`): [`SerpYoutubeVideoInfoTasksReadyTaskInfo`](SerpYoutubeVideoInfoTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoInfoTasksReadyTaskInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md) |

#### Returns

[`SerpYoutubeVideoInfoTasksReadyTaskInfo`](SerpYoutubeVideoInfoTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:58178](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58178)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoInfoTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md).[cost](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md#cost)

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

[ISerpYoutubeVideoInfoTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md).[data](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md#data)

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

[ISerpYoutubeVideoInfoTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md).[id](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYoutubeVideoInfoTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md).[path](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpYoutubeVideoInfoTasksReadyResultInfo`](SerpYoutubeVideoInfoTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[ISerpYoutubeVideoInfoTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md).[result](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:58174](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58174)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYoutubeVideoInfoTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md).[result_count](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md#result_count)

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

[ISerpYoutubeVideoInfoTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md).[status_code](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md#status_code)

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

[ISerpYoutubeVideoInfoTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md).[status_message](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYoutubeVideoInfoTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md).[time](../interfaces/ISerpYoutubeVideoInfoTasksReadyTaskInfo.md#time)

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

[main.ts:58182](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58182)

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

[main.ts:58204](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58204)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoInfoTasksReadyTaskInfo`](SerpYoutubeVideoInfoTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoInfoTasksReadyTaskInfo`](SerpYoutubeVideoInfoTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:58197](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58197)
