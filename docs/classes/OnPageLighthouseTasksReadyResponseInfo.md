[Documentation](../README.md) / [Exports](../modules.md) / OnPageLighthouseTasksReadyResponseInfo

# Class: OnPageLighthouseTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`OnPageLighthouseTasksReadyResponseInfo`**

## Implements

- [`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageLighthouseTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](OnPageLighthouseTasksReadyResponseInfo.md#cost)
- [status\_code](OnPageLighthouseTasksReadyResponseInfo.md#status_code)
- [status\_message](OnPageLighthouseTasksReadyResponseInfo.md#status_message)
- [tasks](OnPageLighthouseTasksReadyResponseInfo.md#tasks)
- [tasks\_count](OnPageLighthouseTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](OnPageLighthouseTasksReadyResponseInfo.md#tasks_error)
- [time](OnPageLighthouseTasksReadyResponseInfo.md#time)
- [version](OnPageLighthouseTasksReadyResponseInfo.md#version)

### Methods

- [init](OnPageLighthouseTasksReadyResponseInfo.md#init)
- [toJSON](OnPageLighthouseTasksReadyResponseInfo.md#tojson)
- [fromJS](OnPageLighthouseTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageLighthouseTasksReadyResponseInfo**(`data?`): [`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageLighthouseTasksReadyResponseInfo`](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md) |

#### Returns

[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:154684

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageLighthouseTasksReadyResponseInfo](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[cost](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:22652

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IOnPageLighthouseTasksReadyResponseInfo](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[status_code](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:22645

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IOnPageLighthouseTasksReadyResponseInfo](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[status_message](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`OnPageLighthouseTasksReadyTaskInfo`](OnPageLighthouseTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageLighthouseTasksReadyResponseInfo](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[tasks](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:154680

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageLighthouseTasksReadyResponseInfo](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[tasks_count](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageLighthouseTasksReadyResponseInfo](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[tasks_error](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageLighthouseTasksReadyResponseInfo](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[time](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageLighthouseTasksReadyResponseInfo](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md).[version](../interfaces/IOnPageLighthouseTasksReadyResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:22642

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

main.ts:154688

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

main.ts:154710

___

### fromJS

▸ **fromJS**(`data`): [`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:154703
