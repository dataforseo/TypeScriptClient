[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingSearchVolumeTaskPostResponseInfo

# Class: KeywordsDataBingSearchVolumeTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataBingSearchVolumeTaskPostResponseInfo`**

## Implements

- [`IKeywordsDataBingSearchVolumeTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md#cost)
- [status\_code](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md#status_code)
- [status\_message](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md#status_message)
- [tasks](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md#tasks_error)
- [time](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md#time)
- [version](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md#version)

### Methods

- [init](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md#init)
- [toJSON](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md#tojson)
- [fromJS](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingSearchVolumeTaskPostResponseInfo**(`data?`): [`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingSearchVolumeTaskPostResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md) |

#### Returns

[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:127985

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md).[cost](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md#cost)

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

[IKeywordsDataBingSearchVolumeTaskPostResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md).[status_code](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md#status_code)

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

[IKeywordsDataBingSearchVolumeTaskPostResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md).[status_message](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`KeywordsDataBingSearchVolumeTaskPostTaskInfo`](KeywordsDataBingSearchVolumeTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md).[tasks](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:127981

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md).[time](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskPostResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md).[version](../interfaces/IKeywordsDataBingSearchVolumeTaskPostResponseInfo.md#version)

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

main.ts:127989

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

main.ts:128011

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:128004
