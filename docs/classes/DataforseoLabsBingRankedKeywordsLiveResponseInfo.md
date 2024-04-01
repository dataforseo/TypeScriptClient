[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBingRankedKeywordsLiveResponseInfo

# Class: DataforseoLabsBingRankedKeywordsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsBingRankedKeywordsLiveResponseInfo`**

## Implements

- [`IDataforseoLabsBingRankedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#time)
- [version](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingRankedKeywordsLiveResponseInfo**(`data?`): [`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingRankedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:107948

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md#cost)

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

[IDataforseoLabsBingRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md#status_code)

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

[IDataforseoLabsBingRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsBingRankedKeywordsLiveTaskInfo`](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md#tasks)

#### Defined in

main.ts:107944

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md#version)

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

main.ts:107952

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

main.ts:107974

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:107967
