[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingSearchVolumeLiveResponseInfo

# Class: KeywordsDataBingSearchVolumeLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataBingSearchVolumeLiveResponseInfo`**

## Implements

- [`IKeywordsDataBingSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingSearchVolumeLiveResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingSearchVolumeLiveResponseInfo.md#cost)
- [status\_code](KeywordsDataBingSearchVolumeLiveResponseInfo.md#status_code)
- [status\_message](KeywordsDataBingSearchVolumeLiveResponseInfo.md#status_message)
- [tasks](KeywordsDataBingSearchVolumeLiveResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataBingSearchVolumeLiveResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataBingSearchVolumeLiveResponseInfo.md#tasks_error)
- [time](KeywordsDataBingSearchVolumeLiveResponseInfo.md#time)
- [version](KeywordsDataBingSearchVolumeLiveResponseInfo.md#version)

### Methods

- [init](KeywordsDataBingSearchVolumeLiveResponseInfo.md#init)
- [toJSON](KeywordsDataBingSearchVolumeLiveResponseInfo.md#tojson)
- [fromJS](KeywordsDataBingSearchVolumeLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingSearchVolumeLiveResponseInfo**(`data?`): [`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md) |

#### Returns

[`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:128933

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md).[cost](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md#cost)

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

[IKeywordsDataBingSearchVolumeLiveResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md).[status_code](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md#status_code)

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

[IKeywordsDataBingSearchVolumeLiveResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md).[status_message](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`KeywordsDataBingSearchVolumeLiveTaskInfo`](KeywordsDataBingSearchVolumeLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md).[tasks](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md#tasks)

#### Defined in

main.ts:128929

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md).[time](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md).[version](../interfaces/IKeywordsDataBingSearchVolumeLiveResponseInfo.md#version)

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

main.ts:128937

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

main.ts:128959

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:128952
