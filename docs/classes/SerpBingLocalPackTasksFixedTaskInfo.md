[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingLocalPackTasksFixedTaskInfo

# Class: SerpBingLocalPackTasksFixedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpBingLocalPackTasksFixedTaskInfo`**

## Implements

- [`ISerpBingLocalPackTasksFixedTaskInfo`](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackTasksFixedTaskInfo.md#constructor)

### Properties

- [cost](SerpBingLocalPackTasksFixedTaskInfo.md#cost)
- [data](SerpBingLocalPackTasksFixedTaskInfo.md#data)
- [id](SerpBingLocalPackTasksFixedTaskInfo.md#id)
- [path](SerpBingLocalPackTasksFixedTaskInfo.md#path)
- [result](SerpBingLocalPackTasksFixedTaskInfo.md#result)
- [result\_count](SerpBingLocalPackTasksFixedTaskInfo.md#result_count)
- [status\_code](SerpBingLocalPackTasksFixedTaskInfo.md#status_code)
- [status\_message](SerpBingLocalPackTasksFixedTaskInfo.md#status_message)
- [time](SerpBingLocalPackTasksFixedTaskInfo.md#time)

### Methods

- [init](SerpBingLocalPackTasksFixedTaskInfo.md#init)
- [toJSON](SerpBingLocalPackTasksFixedTaskInfo.md#tojson)
- [fromJS](SerpBingLocalPackTasksFixedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackTasksFixedTaskInfo**(`data?`): [`SerpBingLocalPackTasksFixedTaskInfo`](SerpBingLocalPackTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackTasksFixedTaskInfo`](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md) |

#### Returns

[`SerpBingLocalPackTasksFixedTaskInfo`](SerpBingLocalPackTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:56110](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56110)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingLocalPackTasksFixedTaskInfo](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md).[cost](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md#cost)

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

[ISerpBingLocalPackTasksFixedTaskInfo](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md).[data](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md#data)

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

[ISerpBingLocalPackTasksFixedTaskInfo](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md).[id](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBingLocalPackTasksFixedTaskInfo](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md).[path](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpBingLocalPackTasksFixedResultInfo`](SerpBingLocalPackTasksFixedResultInfo.md)[]

array of results

#### Implementation of

[ISerpBingLocalPackTasksFixedTaskInfo](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md).[result](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md#result)

#### Defined in

[main.ts:56106](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56106)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBingLocalPackTasksFixedTaskInfo](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md).[result_count](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md#result_count)

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

[ISerpBingLocalPackTasksFixedTaskInfo](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md).[status_code](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md#status_code)

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

[ISerpBingLocalPackTasksFixedTaskInfo](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md).[status_message](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBingLocalPackTasksFixedTaskInfo](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md).[time](../interfaces/ISerpBingLocalPackTasksFixedTaskInfo.md#time)

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

[main.ts:56114](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56114)

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

[main.ts:56136](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56136)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackTasksFixedTaskInfo`](SerpBingLocalPackTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackTasksFixedTaskInfo`](SerpBingLocalPackTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:56129](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56129)
