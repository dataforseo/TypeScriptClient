[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo

# Class: BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`**

## Implements

- [`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#time)
- [version](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#init)
- [toJSON](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo**(`data?`): [`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md) |

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:192298](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192298)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#cost)

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

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#status_code)

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

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:192294](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192294)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md).[time](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md).[version](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md#version)

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

[main.ts:192302](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192302)

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

[main.ts:192324](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192324)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:192317](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192317)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")