[Documentation](../README.md) / [Exports](../modules.md) / SerpYahooOrganicTasksReadyResponseInfo

# Class: SerpYahooOrganicTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpYahooOrganicTasksReadyResponseInfo`**

## Implements

- [`ISerpYahooOrganicTasksReadyResponseInfo`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](SerpYahooOrganicTasksReadyResponseInfo.md#cost)
- [status\_code](SerpYahooOrganicTasksReadyResponseInfo.md#status_code)
- [status\_message](SerpYahooOrganicTasksReadyResponseInfo.md#status_message)
- [tasks](SerpYahooOrganicTasksReadyResponseInfo.md#tasks)
- [tasks\_count](SerpYahooOrganicTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](SerpYahooOrganicTasksReadyResponseInfo.md#tasks_error)
- [time](SerpYahooOrganicTasksReadyResponseInfo.md#time)
- [version](SerpYahooOrganicTasksReadyResponseInfo.md#version)

### Methods

- [init](SerpYahooOrganicTasksReadyResponseInfo.md#init)
- [toJSON](SerpYahooOrganicTasksReadyResponseInfo.md#tojson)
- [fromJS](SerpYahooOrganicTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicTasksReadyResponseInfo**(`data?`): [`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicTasksReadyResponseInfo`](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md) |

#### Returns

[`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:65836

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYahooOrganicTasksReadyResponseInfo](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md).[cost](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23029

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[ISerpYahooOrganicTasksReadyResponseInfo](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md).[status_code](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:23022

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[ISerpYahooOrganicTasksReadyResponseInfo](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md).[status_message](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpYahooOrganicTasksReadyTaskInfo`](SerpYahooOrganicTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYahooOrganicTasksReadyResponseInfo](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md).[tasks](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:65832

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYahooOrganicTasksReadyResponseInfo](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md).[tasks_count](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYahooOrganicTasksReadyResponseInfo](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md).[tasks_error](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYahooOrganicTasksReadyResponseInfo](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md).[time](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYahooOrganicTasksReadyResponseInfo](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md).[version](../interfaces/ISerpYahooOrganicTasksReadyResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:23019

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

main.ts:65840

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

main.ts:65862

___

### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:65855
