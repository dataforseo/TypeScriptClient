[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelSearchesTasksReadyResponseInfo

# Class: BusinessDataGoogleHotelSearchesTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`**

## Implements

- [`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#time)
- [version](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#init)
- [toJSON](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelSearchesTasksReadyResponseInfo**(`data?`): [`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md) |

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:193339](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193339)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#cost)

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

[IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#status_code)

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

[IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BusinessDataGoogleHotelSearchesTasksReadyTaskInfo`](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:193335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193335)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[time](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md).[version](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md#version)

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

[main.ts:193343](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193343)

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

[main.ts:193365](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193365)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:193358](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193358)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")