[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderTasksReadyTaskInfo

# Class: SerpGoogleLocalFinderTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleLocalFinderTasksReadyTaskInfo`**

## Implements

- [`ISerpGoogleLocalFinderTasksReadyTaskInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleLocalFinderTasksReadyTaskInfo.md#cost)
- [data](SerpGoogleLocalFinderTasksReadyTaskInfo.md#data)
- [id](SerpGoogleLocalFinderTasksReadyTaskInfo.md#id)
- [path](SerpGoogleLocalFinderTasksReadyTaskInfo.md#path)
- [result](SerpGoogleLocalFinderTasksReadyTaskInfo.md#result)
- [result\_count](SerpGoogleLocalFinderTasksReadyTaskInfo.md#result_count)
- [status\_code](SerpGoogleLocalFinderTasksReadyTaskInfo.md#status_code)
- [status\_message](SerpGoogleLocalFinderTasksReadyTaskInfo.md#status_message)
- [time](SerpGoogleLocalFinderTasksReadyTaskInfo.md#time)

### Methods

- [init](SerpGoogleLocalFinderTasksReadyTaskInfo.md#init)
- [toJSON](SerpGoogleLocalFinderTasksReadyTaskInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderTasksReadyTaskInfo**(`data?`): [`SerpGoogleLocalFinderTasksReadyTaskInfo`](SerpGoogleLocalFinderTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderTasksReadyTaskInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md) |

#### Returns

[`SerpGoogleLocalFinderTasksReadyTaskInfo`](SerpGoogleLocalFinderTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:40164](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40164)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleLocalFinderTasksReadyTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[cost](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#cost)

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

[ISerpGoogleLocalFinderTasksReadyTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[data](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#data)

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

[ISerpGoogleLocalFinderTasksReadyTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[id](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleLocalFinderTasksReadyTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[path](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleLocalFinderTasksReadyResultInfo`](SerpGoogleLocalFinderTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleLocalFinderTasksReadyTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[result](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:40160](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40160)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleLocalFinderTasksReadyTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[result_count](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#result_count)

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

[ISerpGoogleLocalFinderTasksReadyTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[status_code](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#status_code)

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

[ISerpGoogleLocalFinderTasksReadyTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[status_message](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleLocalFinderTasksReadyTaskInfo](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md).[time](../interfaces/ISerpGoogleLocalFinderTasksReadyTaskInfo.md#time)

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

[main.ts:40168](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40168)

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

[main.ts:40190](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40190)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderTasksReadyTaskInfo`](SerpGoogleLocalFinderTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderTasksReadyTaskInfo`](SerpGoogleLocalFinderTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:40183](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40183)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")