[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForSiteLiveResponseInfo

# Class: KeywordsDataBingKeywordsForSiteLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataBingKeywordsForSiteLiveResponseInfo`**

## Implements

- [`IKeywordsDataBingKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md#cost)
- [status\_code](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md#status_message)
- [tasks](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md#tasks_error)
- [time](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md#time)
- [version](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md#version)

### Methods

- [init](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForSiteLiveResponseInfo**(`data?`): [`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:130277

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md#cost)

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

[IKeywordsDataBingKeywordsForSiteLiveResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md#status_code)

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

[IKeywordsDataBingKeywordsForSiteLiveResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`KeywordsDataBingKeywordsForSiteLiveTaskInfo`](KeywordsDataBingKeywordsForSiteLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md).[tasks](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md#tasks)

#### Defined in

main.ts:130273

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md).[time](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md).[version](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResponseInfo.md#version)

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

main.ts:130281

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

main.ts:130303

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:130296
