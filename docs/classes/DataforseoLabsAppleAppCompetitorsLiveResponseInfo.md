[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAppleAppCompetitorsLiveResponseInfo

# Class: DataforseoLabsAppleAppCompetitorsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`**

## Implements

- [`IDataforseoLabsAppleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#time)
- [version](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAppleAppCompetitorsLiveResponseInfo**(`data?`): [`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAppleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:111815

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#cost)

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

[IDataforseoLabsAppleAppCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#status_code)

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

[IDataforseoLabsAppleAppCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsAppleAppCompetitorsLiveTaskInfo`](DataforseoLabsAppleAppCompetitorsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#tasks)

#### Defined in

main.ts:111811

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsAppleAppCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsAppleAppCompetitorsLiveResponseInfo.md#version)

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

main.ts:111819

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

main.ts:111841

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:111834
