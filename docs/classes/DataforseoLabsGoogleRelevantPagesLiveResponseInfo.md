[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleRelevantPagesLiveResponseInfo

# Class: DataforseoLabsGoogleRelevantPagesLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleRelevantPagesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleRelevantPagesLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleRelevantPagesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:92810

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleRelevantPagesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#cost)

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

[IDataforseoLabsGoogleRelevantPagesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#status_code)

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

[IDataforseoLabsGoogleRelevantPagesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleRelevantPagesLiveTaskInfo`](DataforseoLabsGoogleRelevantPagesLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleRelevantPagesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#tasks)

#### Defined in

main.ts:92806

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleRelevantPagesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleRelevantPagesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleRelevantPagesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleRelevantPagesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#version)

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

main.ts:92814

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

main.ts:92836

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:92829
