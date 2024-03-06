[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpNaverOrganicTasksReadyResponseInfo

# Class: SerpNaverOrganicTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpNaverOrganicTasksReadyResponseInfo`**

## Implements

- [`ISerpNaverOrganicTasksReadyResponseInfo`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpNaverOrganicTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](SerpNaverOrganicTasksReadyResponseInfo.md#cost)
- [status\_code](SerpNaverOrganicTasksReadyResponseInfo.md#status_code)
- [status\_message](SerpNaverOrganicTasksReadyResponseInfo.md#status_message)
- [tasks](SerpNaverOrganicTasksReadyResponseInfo.md#tasks)
- [tasks\_count](SerpNaverOrganicTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](SerpNaverOrganicTasksReadyResponseInfo.md#tasks_error)
- [time](SerpNaverOrganicTasksReadyResponseInfo.md#time)
- [version](SerpNaverOrganicTasksReadyResponseInfo.md#version)

### Methods

- [init](SerpNaverOrganicTasksReadyResponseInfo.md#init)
- [toJSON](SerpNaverOrganicTasksReadyResponseInfo.md#tojson)
- [fromJS](SerpNaverOrganicTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpNaverOrganicTasksReadyResponseInfo**(`data?`): [`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpNaverOrganicTasksReadyResponseInfo`](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md) |

#### Returns

[`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:67745](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67745)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpNaverOrganicTasksReadyResponseInfo](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md).[cost](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

[main.ts:22510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22510)

___


### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[ISerpNaverOrganicTasksReadyResponseInfo](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md).[status_code](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

[main.ts:22503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22503)

___


### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[ISerpNaverOrganicTasksReadyResponseInfo](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md).[status_message](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpNaverOrganicTasksReadyTaskInfo`](SerpNaverOrganicTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpNaverOrganicTasksReadyResponseInfo](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md).[tasks](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:67741](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67741)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpNaverOrganicTasksReadyResponseInfo](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md).[tasks_count](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpNaverOrganicTasksReadyResponseInfo](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md).[tasks_error](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpNaverOrganicTasksReadyResponseInfo](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md).[time](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpNaverOrganicTasksReadyResponseInfo](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md).[version](../interfaces/ISerpNaverOrganicTasksReadyResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

[main.ts:22500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22500)

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

[BaseResponseInfo](BaseResponseInfo.md).[init](BaseResponseInfo.md#init)

#### Defined in

[main.ts:67749](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67749)

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

[BaseResponseInfo](BaseResponseInfo.md).[toJSON](BaseResponseInfo.md#tojson)

#### Defined in

[main.ts:67771](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67771)

___


### fromJS

▸ **fromJS**(`data`): [`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:67764](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67764)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")