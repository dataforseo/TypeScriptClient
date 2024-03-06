[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleNewsTasksReadyTaskInfo

# Class: SerpGoogleNewsTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleNewsTasksReadyTaskInfo`**

## Implements

- [`ISerpGoogleNewsTasksReadyTaskInfo`](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleNewsTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleNewsTasksReadyTaskInfo.md#cost)
- [data](SerpGoogleNewsTasksReadyTaskInfo.md#data)
- [id](SerpGoogleNewsTasksReadyTaskInfo.md#id)
- [path](SerpGoogleNewsTasksReadyTaskInfo.md#path)
- [result](SerpGoogleNewsTasksReadyTaskInfo.md#result)
- [result\_count](SerpGoogleNewsTasksReadyTaskInfo.md#result_count)
- [status\_code](SerpGoogleNewsTasksReadyTaskInfo.md#status_code)
- [status\_message](SerpGoogleNewsTasksReadyTaskInfo.md#status_message)
- [time](SerpGoogleNewsTasksReadyTaskInfo.md#time)

### Methods

- [init](SerpGoogleNewsTasksReadyTaskInfo.md#init)
- [toJSON](SerpGoogleNewsTasksReadyTaskInfo.md#tojson)
- [fromJS](SerpGoogleNewsTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleNewsTasksReadyTaskInfo**(`data?`): [`SerpGoogleNewsTasksReadyTaskInfo`](SerpGoogleNewsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleNewsTasksReadyTaskInfo`](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md) |

#### Returns

[`SerpGoogleNewsTasksReadyTaskInfo`](SerpGoogleNewsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:42172](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42172)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleNewsTasksReadyTaskInfo](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md).[cost](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md#cost)

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

[ISerpGoogleNewsTasksReadyTaskInfo](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md).[data](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md#data)

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

[ISerpGoogleNewsTasksReadyTaskInfo](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md).[id](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleNewsTasksReadyTaskInfo](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md).[path](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleNewsTasksReadyResultInfo`](SerpGoogleNewsTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleNewsTasksReadyTaskInfo](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md).[result](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:42168](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42168)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleNewsTasksReadyTaskInfo](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md).[result_count](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md#result_count)

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

[ISerpGoogleNewsTasksReadyTaskInfo](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md).[status_code](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md#status_code)

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

[ISerpGoogleNewsTasksReadyTaskInfo](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md).[status_message](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleNewsTasksReadyTaskInfo](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md).[time](../interfaces/ISerpGoogleNewsTasksReadyTaskInfo.md#time)

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

[main.ts:42176](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42176)

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

[main.ts:42198](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42198)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleNewsTasksReadyTaskInfo`](SerpGoogleNewsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleNewsTasksReadyTaskInfo`](SerpGoogleNewsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:42191](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42191)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")