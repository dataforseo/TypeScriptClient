[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo

# Class: KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`**

## Implements

- [`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#cost)
- [status\_code](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#status_code)
- [status\_message](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#status_message)
- [tasks](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#tasks_error)
- [time](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#time)
- [version](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#version)

### Methods

- [init](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#init)
- [toJSON](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#tojson)
- [fromJS](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo**(`data?`): [`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md) |

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:127241

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[cost](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#cost)

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

[IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[status_code](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#status_code)

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

[IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[status_message](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo`](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[tasks](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#tasks)

#### Defined in

main.ts:127237

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[time](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md).[version](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md#version)

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

main.ts:127245

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

main.ts:127267

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:127260
