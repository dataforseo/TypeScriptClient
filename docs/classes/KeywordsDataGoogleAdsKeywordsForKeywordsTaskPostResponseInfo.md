[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo

# Class: KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`**

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#time)
- [version](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:118355

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#cost)

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

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#status_code)

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

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:118351

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md#version)

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

main.ts:118359

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

main.ts:118381

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:118374
