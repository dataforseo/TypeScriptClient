[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo

# Class: KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`**

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#time)
- [version](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo**(`data?`): [`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:115896

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#cost)

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

[IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#status_code)

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

[IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:115892

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md#version)

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

main.ts:115900

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

main.ts:115922

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:115915
