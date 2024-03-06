[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpSeznamOrganicTasksReadyTaskInfo

# Class: SerpSeznamOrganicTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpSeznamOrganicTasksReadyTaskInfo`**

## Implements

- [`ISerpSeznamOrganicTasksReadyTaskInfo`](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpSeznamOrganicTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](SerpSeznamOrganicTasksReadyTaskInfo.md#cost)
- [data](SerpSeznamOrganicTasksReadyTaskInfo.md#data)
- [id](SerpSeznamOrganicTasksReadyTaskInfo.md#id)
- [path](SerpSeznamOrganicTasksReadyTaskInfo.md#path)
- [result](SerpSeznamOrganicTasksReadyTaskInfo.md#result)
- [result\_count](SerpSeznamOrganicTasksReadyTaskInfo.md#result_count)
- [status\_code](SerpSeznamOrganicTasksReadyTaskInfo.md#status_code)
- [status\_message](SerpSeznamOrganicTasksReadyTaskInfo.md#status_message)
- [time](SerpSeznamOrganicTasksReadyTaskInfo.md#time)

### Methods

- [init](SerpSeznamOrganicTasksReadyTaskInfo.md#init)
- [toJSON](SerpSeznamOrganicTasksReadyTaskInfo.md#tojson)
- [fromJS](SerpSeznamOrganicTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpSeznamOrganicTasksReadyTaskInfo**(`data?`): [`SerpSeznamOrganicTasksReadyTaskInfo`](SerpSeznamOrganicTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpSeznamOrganicTasksReadyTaskInfo`](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md) |

#### Returns

[`SerpSeznamOrganicTasksReadyTaskInfo`](SerpSeznamOrganicTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:69800](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69800)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpSeznamOrganicTasksReadyTaskInfo](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md).[cost](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md#cost)

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

[ISerpSeznamOrganicTasksReadyTaskInfo](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md).[data](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md#data)

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

[ISerpSeznamOrganicTasksReadyTaskInfo](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md).[id](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpSeznamOrganicTasksReadyTaskInfo](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md).[path](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpSeznamOrganicTasksReadyResultInfo`](SerpSeznamOrganicTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[ISerpSeznamOrganicTasksReadyTaskInfo](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md).[result](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:69796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69796)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpSeznamOrganicTasksReadyTaskInfo](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md).[result_count](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md#result_count)

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

[ISerpSeznamOrganicTasksReadyTaskInfo](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md).[status_code](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md#status_code)

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

[ISerpSeznamOrganicTasksReadyTaskInfo](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md).[status_message](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpSeznamOrganicTasksReadyTaskInfo](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md).[time](../interfaces/ISerpSeznamOrganicTasksReadyTaskInfo.md#time)

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

[main.ts:69804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69804)

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

[main.ts:69826](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69826)

___


### fromJS

▸ **fromJS**(`data`): [`SerpSeznamOrganicTasksReadyTaskInfo`](SerpSeznamOrganicTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpSeznamOrganicTasksReadyTaskInfo`](SerpSeznamOrganicTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:69819](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69819)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")