[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoTasksReadyResponseInfo

# Class: BusinessDataGoogleHotelInfoTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`**

## Implements

- [`IBusinessDataGoogleHotelInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#time)
- [version](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoTasksReadyResponseInfo**(`data?`): [`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:195228](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195228)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelInfoTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#cost)

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

[IBusinessDataGoogleHotelInfoTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#status_code)

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

[IBusinessDataGoogleHotelInfoTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BusinessDataGoogleHotelInfoTasksReadyTaskInfo`](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleHotelInfoTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:195224](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195224)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleHotelInfoTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleHotelInfoTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelInfoTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md).[time](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleHotelInfoTasksReadyResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md).[version](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyResponseInfo.md#version)

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

[main.ts:195232](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195232)

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

[main.ts:195254](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195254)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:195247](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195247)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")