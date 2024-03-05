[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetInfoTasksReadyTaskInfo

# Class: SerpGoogleDatasetInfoTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpGoogleDatasetInfoTasksReadyTaskInfo`**

## Implements

- [`ISerpGoogleDatasetInfoTasksReadyTaskInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetInfoTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleDatasetInfoTasksReadyTaskInfo.md#cost)
- [data](SerpGoogleDatasetInfoTasksReadyTaskInfo.md#data)
- [id](SerpGoogleDatasetInfoTasksReadyTaskInfo.md#id)
- [path](SerpGoogleDatasetInfoTasksReadyTaskInfo.md#path)
- [result](SerpGoogleDatasetInfoTasksReadyTaskInfo.md#result)
- [result\_count](SerpGoogleDatasetInfoTasksReadyTaskInfo.md#result_count)
- [status\_code](SerpGoogleDatasetInfoTasksReadyTaskInfo.md#status_code)
- [status\_message](SerpGoogleDatasetInfoTasksReadyTaskInfo.md#status_message)
- [time](SerpGoogleDatasetInfoTasksReadyTaskInfo.md#time)

### Methods

- [init](SerpGoogleDatasetInfoTasksReadyTaskInfo.md#init)
- [toJSON](SerpGoogleDatasetInfoTasksReadyTaskInfo.md#tojson)
- [fromJS](SerpGoogleDatasetInfoTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetInfoTasksReadyTaskInfo**(`data?`): [`SerpGoogleDatasetInfoTasksReadyTaskInfo`](SerpGoogleDatasetInfoTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetInfoTasksReadyTaskInfo`](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md) |

#### Returns

[`SerpGoogleDatasetInfoTasksReadyTaskInfo`](SerpGoogleDatasetInfoTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:52188](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52188)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md).[cost](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md#cost)

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

[ISerpGoogleDatasetInfoTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md).[data](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md#data)

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

[ISerpGoogleDatasetInfoTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md).[id](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md).[path](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpGoogleDatasetInfoTasksReadyResultInfo`](SerpGoogleDatasetInfoTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md).[result](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:52184](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52184)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md).[result_count](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md#result_count)

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

[ISerpGoogleDatasetInfoTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md).[status_code](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md#status_code)

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

[ISerpGoogleDatasetInfoTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md).[status_message](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleDatasetInfoTasksReadyTaskInfo](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md).[time](../interfaces/ISerpGoogleDatasetInfoTasksReadyTaskInfo.md#time)

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

[main.ts:52192](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52192)

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

[main.ts:52214](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52214)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetInfoTasksReadyTaskInfo`](SerpGoogleDatasetInfoTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetInfoTasksReadyTaskInfo`](SerpGoogleDatasetInfoTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:52207](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52207)
