[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingLocalPackTasksReadyTaskInfo

# Class: SerpBingLocalPackTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpBingLocalPackTasksReadyTaskInfo`**

## Implements

- [`ISerpBingLocalPackTasksReadyTaskInfo`](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](SerpBingLocalPackTasksReadyTaskInfo.md#cost)
- [data](SerpBingLocalPackTasksReadyTaskInfo.md#data)
- [id](SerpBingLocalPackTasksReadyTaskInfo.md#id)
- [path](SerpBingLocalPackTasksReadyTaskInfo.md#path)
- [result](SerpBingLocalPackTasksReadyTaskInfo.md#result)
- [result\_count](SerpBingLocalPackTasksReadyTaskInfo.md#result_count)
- [status\_code](SerpBingLocalPackTasksReadyTaskInfo.md#status_code)
- [status\_message](SerpBingLocalPackTasksReadyTaskInfo.md#status_message)
- [time](SerpBingLocalPackTasksReadyTaskInfo.md#time)

### Methods

- [init](SerpBingLocalPackTasksReadyTaskInfo.md#init)
- [toJSON](SerpBingLocalPackTasksReadyTaskInfo.md#tojson)
- [fromJS](SerpBingLocalPackTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackTasksReadyTaskInfo**(`data?`): [`SerpBingLocalPackTasksReadyTaskInfo`](SerpBingLocalPackTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackTasksReadyTaskInfo`](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md) |

#### Returns

[`SerpBingLocalPackTasksReadyTaskInfo`](SerpBingLocalPackTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:55898](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55898)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingLocalPackTasksReadyTaskInfo](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md).[cost](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md#cost)

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

[ISerpBingLocalPackTasksReadyTaskInfo](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md).[data](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md#data)

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

[ISerpBingLocalPackTasksReadyTaskInfo](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md).[id](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBingLocalPackTasksReadyTaskInfo](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md).[path](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpBingLocalPackTasksReadyResultInfo`](SerpBingLocalPackTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[ISerpBingLocalPackTasksReadyTaskInfo](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md).[result](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:55894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55894)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBingLocalPackTasksReadyTaskInfo](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md).[result_count](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md#result_count)

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

[ISerpBingLocalPackTasksReadyTaskInfo](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md).[status_code](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md#status_code)

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

[ISerpBingLocalPackTasksReadyTaskInfo](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md).[status_message](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBingLocalPackTasksReadyTaskInfo](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md).[time](../interfaces/ISerpBingLocalPackTasksReadyTaskInfo.md#time)

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

[main.ts:55902](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55902)

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

[main.ts:55924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55924)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackTasksReadyTaskInfo`](SerpBingLocalPackTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackTasksReadyTaskInfo`](SerpBingLocalPackTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:55917](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55917)
