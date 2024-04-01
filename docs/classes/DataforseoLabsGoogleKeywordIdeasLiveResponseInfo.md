[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleKeywordIdeasLiveResponseInfo

# Class: DataforseoLabsGoogleKeywordIdeasLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleKeywordIdeasLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:84064

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#cost)

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

[IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#status_code)

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

[IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleKeywordIdeasLiveTaskInfo`](DataforseoLabsGoogleKeywordIdeasLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#tasks)

#### Defined in

main.ts:84060

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md#version)

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

main.ts:84068

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

main.ts:84090

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:84083
