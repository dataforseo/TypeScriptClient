[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBingRelevantPagesLiveResponseInfo

# Class: DataforseoLabsBingRelevantPagesLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsBingRelevantPagesLiveResponseInfo`**

## Implements

- [`IDataforseoLabsBingRelevantPagesLiveResponseInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingRelevantPagesLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingRelevantPagesLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsBingRelevantPagesLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsBingRelevantPagesLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsBingRelevantPagesLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsBingRelevantPagesLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsBingRelevantPagesLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsBingRelevantPagesLiveResponseInfo.md#time)
- [version](DataforseoLabsBingRelevantPagesLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsBingRelevantPagesLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsBingRelevantPagesLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsBingRelevantPagesLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingRelevantPagesLiveResponseInfo**(`data?`): [`DataforseoLabsBingRelevantPagesLiveResponseInfo`](DataforseoLabsBingRelevantPagesLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingRelevantPagesLiveResponseInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsBingRelevantPagesLiveResponseInfo`](DataforseoLabsBingRelevantPagesLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:109078

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveResponseInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md#cost)

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

[IDataforseoLabsBingRelevantPagesLiveResponseInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md#status_code)

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

[IDataforseoLabsBingRelevantPagesLiveResponseInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsBingRelevantPagesLiveTaskInfo`](DataforseoLabsBingRelevantPagesLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveResponseInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md#tasks)

#### Defined in

main.ts:109074

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveResponseInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveResponseInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveResponseInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveResponseInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsBingRelevantPagesLiveResponseInfo.md#version)

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

main.ts:109082

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

main.ts:109104

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingRelevantPagesLiveResponseInfo`](DataforseoLabsBingRelevantPagesLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingRelevantPagesLiveResponseInfo`](DataforseoLabsBingRelevantPagesLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:109097
