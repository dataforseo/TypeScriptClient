[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleJobsTasksFixedTaskInfo

# Class: SerpGoogleJobsTasksFixedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleJobsTasksFixedTaskInfo`**

## Implements

- [`ISerpGoogleJobsTasksFixedTaskInfo`](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleJobsTasksFixedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleJobsTasksFixedTaskInfo.md#cost)
- [data](SerpGoogleJobsTasksFixedTaskInfo.md#data)
- [id](SerpGoogleJobsTasksFixedTaskInfo.md#id)
- [path](SerpGoogleJobsTasksFixedTaskInfo.md#path)
- [result](SerpGoogleJobsTasksFixedTaskInfo.md#result)
- [result\_count](SerpGoogleJobsTasksFixedTaskInfo.md#result_count)
- [status\_code](SerpGoogleJobsTasksFixedTaskInfo.md#status_code)
- [status\_message](SerpGoogleJobsTasksFixedTaskInfo.md#status_message)
- [time](SerpGoogleJobsTasksFixedTaskInfo.md#time)

### Methods

- [init](SerpGoogleJobsTasksFixedTaskInfo.md#init)
- [toJSON](SerpGoogleJobsTasksFixedTaskInfo.md#tojson)
- [fromJS](SerpGoogleJobsTasksFixedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleJobsTasksFixedTaskInfo**(`data?`): [`SerpGoogleJobsTasksFixedTaskInfo`](SerpGoogleJobsTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleJobsTasksFixedTaskInfo`](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md) |

#### Returns

[`SerpGoogleJobsTasksFixedTaskInfo`](SerpGoogleJobsTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:49002](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49002)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleJobsTasksFixedTaskInfo](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md).[cost](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md#cost)

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

[ISerpGoogleJobsTasksFixedTaskInfo](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md).[data](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md#data)

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

[ISerpGoogleJobsTasksFixedTaskInfo](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md).[id](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleJobsTasksFixedTaskInfo](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md).[path](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleJobsTasksFixedResultInfo`](SerpGoogleJobsTasksFixedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleJobsTasksFixedTaskInfo](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md).[result](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md#result)

#### Defined in

[main.ts:48998](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48998)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleJobsTasksFixedTaskInfo](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md).[result_count](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md#result_count)

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

[ISerpGoogleJobsTasksFixedTaskInfo](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md).[status_code](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md#status_code)

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

[ISerpGoogleJobsTasksFixedTaskInfo](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md).[status_message](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleJobsTasksFixedTaskInfo](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md).[time](../interfaces/ISerpGoogleJobsTasksFixedTaskInfo.md#time)

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

[main.ts:49006](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49006)

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

[main.ts:49028](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49028)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleJobsTasksFixedTaskInfo`](SerpGoogleJobsTasksFixedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleJobsTasksFixedTaskInfo`](SerpGoogleJobsTasksFixedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:49021](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49021)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")