[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAppleAppIntersectionLiveResponseInfo

# Class: DataforseoLabsAppleAppIntersectionLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsAppleAppIntersectionLiveResponseInfo`**

## Implements

- [`IDataforseoLabsAppleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md#time)
- [version](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAppleAppIntersectionLiveResponseInfo**(`data?`): [`DataforseoLabsAppleAppIntersectionLiveResponseInfo`](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAppleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveResponseInfo`](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:112313

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md#cost)

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

[IDataforseoLabsAppleAppIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md#status_code)

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

[IDataforseoLabsAppleAppIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsAppleAppIntersectionLiveTaskInfo`](DataforseoLabsAppleAppIntersectionLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md#tasks)

#### Defined in

main.ts:112309

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsAppleAppIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResponseInfo.md#version)

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

main.ts:112317

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

main.ts:112339

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAppleAppIntersectionLiveResponseInfo`](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveResponseInfo`](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:112332
