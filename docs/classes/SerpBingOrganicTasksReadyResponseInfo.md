[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingOrganicTasksReadyResponseInfo

# Class: SerpBingOrganicTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpBingOrganicTasksReadyResponseInfo`**

## Implements

- [`ISerpBingOrganicTasksReadyResponseInfo`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](SerpBingOrganicTasksReadyResponseInfo.md#cost)
- [status\_code](SerpBingOrganicTasksReadyResponseInfo.md#status_code)
- [status\_message](SerpBingOrganicTasksReadyResponseInfo.md#status_message)
- [tasks](SerpBingOrganicTasksReadyResponseInfo.md#tasks)
- [tasks\_count](SerpBingOrganicTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](SerpBingOrganicTasksReadyResponseInfo.md#tasks_error)
- [time](SerpBingOrganicTasksReadyResponseInfo.md#time)
- [version](SerpBingOrganicTasksReadyResponseInfo.md#version)

### Methods

- [init](SerpBingOrganicTasksReadyResponseInfo.md#init)
- [toJSON](SerpBingOrganicTasksReadyResponseInfo.md#tojson)
- [fromJS](SerpBingOrganicTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicTasksReadyResponseInfo**(`data?`): [`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicTasksReadyResponseInfo`](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md) |

#### Returns

[`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:53947](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53947)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingOrganicTasksReadyResponseInfo](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md).[cost](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md#cost)

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

[ISerpBingOrganicTasksReadyResponseInfo](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md).[status_code](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md#status_code)

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

[ISerpBingOrganicTasksReadyResponseInfo](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md).[status_message](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpBingOrganicTasksReadyTaskInfo`](SerpBingOrganicTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBingOrganicTasksReadyResponseInfo](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md).[tasks](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:53943](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53943)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBingOrganicTasksReadyResponseInfo](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md).[tasks_count](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBingOrganicTasksReadyResponseInfo](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md).[tasks_error](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBingOrganicTasksReadyResponseInfo](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md).[time](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBingOrganicTasksReadyResponseInfo](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md).[version](../interfaces/ISerpBingOrganicTasksReadyResponseInfo.md#version)

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

[main.ts:53951](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53951)

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

[main.ts:53973](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53973)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:53966](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53966)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")