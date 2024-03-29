[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorSearchTasksReadyResponseInfo

# Class: BusinessDataTripadvisorSearchTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BusinessDataTripadvisorSearchTasksReadyResponseInfo`**

## Implements

- [`IBusinessDataTripadvisorSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md#cost)
- [status\_code](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md#status_code)
- [status\_message](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md#status_message)
- [tasks](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md#tasks)
- [tasks\_count](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md#tasks_error)
- [time](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md#time)
- [version](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md#version)

### Methods

- [init](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md#init)
- [toJSON](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorSearchTasksReadyResponseInfo**(`data?`): [`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorSearchTasksReadyResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md) |

#### Returns

[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:201317](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201317)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTripadvisorSearchTasksReadyResponseInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md).[cost](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md#cost)

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

[IBusinessDataTripadvisorSearchTasksReadyResponseInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md).[status_code](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md#status_code)

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

[IBusinessDataTripadvisorSearchTasksReadyResponseInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md).[status_message](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BusinessDataTripadvisorSearchTasksReadyTaskInfo`](BusinessDataTripadvisorSearchTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataTripadvisorSearchTasksReadyResponseInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md).[tasks](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:201313](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201313)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataTripadvisorSearchTasksReadyResponseInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md).[tasks_count](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataTripadvisorSearchTasksReadyResponseInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md).[tasks_error](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataTripadvisorSearchTasksReadyResponseInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md).[time](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataTripadvisorSearchTasksReadyResponseInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md).[version](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResponseInfo.md#version)

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

[main.ts:201321](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201321)

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

[main.ts:201343](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201343)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:201336](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201336)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")