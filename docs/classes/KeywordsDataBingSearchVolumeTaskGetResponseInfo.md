[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingSearchVolumeTaskGetResponseInfo

# Class: KeywordsDataBingSearchVolumeTaskGetResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataBingSearchVolumeTaskGetResponseInfo`**

## Implements

- [`IKeywordsDataBingSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md#cost)
- [status\_code](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md#status_code)
- [status\_message](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md#status_message)
- [tasks](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md#tasks_error)
- [time](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md#time)
- [version](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md#version)

### Methods

- [init](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md#init)
- [toJSON](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md#tojson)
- [fromJS](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingSearchVolumeTaskGetResponseInfo**(`data?`): [`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingSearchVolumeTaskGetResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md) |

#### Returns

[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:128437

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md).[cost](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md#cost)

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

[IKeywordsDataBingSearchVolumeTaskGetResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md).[status_code](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md#status_code)

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

[IKeywordsDataBingSearchVolumeTaskGetResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md).[status_message](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`KeywordsDataBingSearchVolumeTaskGetTaskInfo`](KeywordsDataBingSearchVolumeTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md).[tasks](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md#tasks)

#### Defined in

main.ts:128433

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md).[time](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md).[version](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResponseInfo.md#version)

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

main.ts:128441

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

main.ts:128463

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:128456
