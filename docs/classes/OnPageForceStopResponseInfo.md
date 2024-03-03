[Documentation](../README.md) / [Exports](../modules.md) / OnPageForceStopResponseInfo

# Class: OnPageForceStopResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`OnPageForceStopResponseInfo`**

## Implements

- [`IOnPageForceStopResponseInfo`](../interfaces/IOnPageForceStopResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageForceStopResponseInfo.md#constructor)

### Properties

- [cost](OnPageForceStopResponseInfo.md#cost)
- [status\_code](OnPageForceStopResponseInfo.md#status_code)
- [status\_message](OnPageForceStopResponseInfo.md#status_message)
- [tasks](OnPageForceStopResponseInfo.md#tasks)
- [tasks\_count](OnPageForceStopResponseInfo.md#tasks_count)
- [tasks\_error](OnPageForceStopResponseInfo.md#tasks_error)
- [time](OnPageForceStopResponseInfo.md#time)
- [version](OnPageForceStopResponseInfo.md#version)

### Methods

- [init](OnPageForceStopResponseInfo.md#init)
- [toJSON](OnPageForceStopResponseInfo.md#tojson)
- [fromJS](OnPageForceStopResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageForceStopResponseInfo**(`data?`): [`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageForceStopResponseInfo`](../interfaces/IOnPageForceStopResponseInfo.md) |

#### Returns

[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:142382

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageForceStopResponseInfo](../interfaces/IOnPageForceStopResponseInfo.md).[cost](../interfaces/IOnPageForceStopResponseInfo.md#cost)

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

[IOnPageForceStopResponseInfo](../interfaces/IOnPageForceStopResponseInfo.md).[status_code](../interfaces/IOnPageForceStopResponseInfo.md#status_code)

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

[IOnPageForceStopResponseInfo](../interfaces/IOnPageForceStopResponseInfo.md).[status_message](../interfaces/IOnPageForceStopResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`OnPageForceStopTaskInfo`](OnPageForceStopTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageForceStopResponseInfo](../interfaces/IOnPageForceStopResponseInfo.md).[tasks](../interfaces/IOnPageForceStopResponseInfo.md#tasks)

#### Defined in

main.ts:142378

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageForceStopResponseInfo](../interfaces/IOnPageForceStopResponseInfo.md).[tasks_count](../interfaces/IOnPageForceStopResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageForceStopResponseInfo](../interfaces/IOnPageForceStopResponseInfo.md).[tasks_error](../interfaces/IOnPageForceStopResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageForceStopResponseInfo](../interfaces/IOnPageForceStopResponseInfo.md).[time](../interfaces/IOnPageForceStopResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageForceStopResponseInfo](../interfaces/IOnPageForceStopResponseInfo.md).[version](../interfaces/IOnPageForceStopResponseInfo.md#version)

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

main.ts:142386

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

main.ts:142408

___

### fromJS

▸ **fromJS**(`data`): [`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:142401
