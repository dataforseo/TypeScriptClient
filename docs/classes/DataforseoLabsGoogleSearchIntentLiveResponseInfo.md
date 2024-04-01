[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleSearchIntentLiveResponseInfo

# Class: DataforseoLabsGoogleSearchIntentLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsGoogleSearchIntentLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleSearchIntentLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleSearchIntentLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleSearchIntentLiveResponseInfo`](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleSearchIntentLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveResponseInfo`](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:85432

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveResponseInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md#cost)

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

[IDataforseoLabsGoogleSearchIntentLiveResponseInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md#status_code)

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

[IDataforseoLabsGoogleSearchIntentLiveResponseInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleSearchIntentLiveTaskInfo`](DataforseoLabsGoogleSearchIntentLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveResponseInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md#tasks)

#### Defined in

main.ts:85428

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveResponseInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveResponseInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveResponseInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleSearchIntentLiveResponseInfo](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleSearchIntentLiveResponseInfo.md#version)

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

main.ts:85436

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

main.ts:85458

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleSearchIntentLiveResponseInfo`](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveResponseInfo`](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:85451
