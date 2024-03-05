[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoCommentsTasksReadyTaskInfo

# Class: SerpYoutubeVideoCommentsTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpYoutubeVideoCommentsTasksReadyTaskInfo`**

## Implements

- [`ISerpYoutubeVideoCommentsTasksReadyTaskInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md#cost)
- [data](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md#data)
- [id](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md#id)
- [path](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md#path)
- [result](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md#result)
- [result\_count](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md#result_count)
- [status\_code](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md#status_code)
- [status\_message](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md#status_message)
- [time](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md#time)

### Methods

- [init](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md#init)
- [toJSON](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md#tojson)
- [fromJS](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoCommentsTasksReadyTaskInfo**(`data?`): [`SerpYoutubeVideoCommentsTasksReadyTaskInfo`](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoCommentsTasksReadyTaskInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md) |

#### Returns

[`SerpYoutubeVideoCommentsTasksReadyTaskInfo`](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:61508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61508)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md).[cost](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md#cost)

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

[ISerpYoutubeVideoCommentsTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md).[data](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md#data)

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

[ISerpYoutubeVideoCommentsTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md).[id](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md).[path](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpYoutubeVideoCommentsTasksReadyResultInfo`](SerpYoutubeVideoCommentsTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md).[result](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:61504](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61504)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md).[result_count](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md#result_count)

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

[ISerpYoutubeVideoCommentsTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md).[status_code](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md#status_code)

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

[ISerpYoutubeVideoCommentsTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md).[status_message](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpYoutubeVideoCommentsTasksReadyTaskInfo](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md).[time](../interfaces/ISerpYoutubeVideoCommentsTasksReadyTaskInfo.md#time)

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

[main.ts:61512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61512)

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

[main.ts:61534](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61534)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoCommentsTasksReadyTaskInfo`](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoCommentsTasksReadyTaskInfo`](SerpYoutubeVideoCommentsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:61527](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61527)
