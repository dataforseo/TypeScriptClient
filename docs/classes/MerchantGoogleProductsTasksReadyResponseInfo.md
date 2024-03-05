[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleProductsTasksReadyResponseInfo

# Class: MerchantGoogleProductsTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantGoogleProductsTasksReadyResponseInfo`**

## Implements

- [`IMerchantGoogleProductsTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductsTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](MerchantGoogleProductsTasksReadyResponseInfo.md#cost)
- [status\_code](MerchantGoogleProductsTasksReadyResponseInfo.md#status_code)
- [status\_message](MerchantGoogleProductsTasksReadyResponseInfo.md#status_message)
- [tasks](MerchantGoogleProductsTasksReadyResponseInfo.md#tasks)
- [tasks\_count](MerchantGoogleProductsTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](MerchantGoogleProductsTasksReadyResponseInfo.md#tasks_error)
- [time](MerchantGoogleProductsTasksReadyResponseInfo.md#time)
- [version](MerchantGoogleProductsTasksReadyResponseInfo.md#version)

### Methods

- [init](MerchantGoogleProductsTasksReadyResponseInfo.md#init)
- [toJSON](MerchantGoogleProductsTasksReadyResponseInfo.md#tojson)
- [fromJS](MerchantGoogleProductsTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductsTasksReadyResponseInfo**(`data?`): [`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductsTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md) |

#### Returns

[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:164378](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164378)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleProductsTasksReadyResponseInfo](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md).[cost](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

[main.ts:22510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22510)

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IMerchantGoogleProductsTasksReadyResponseInfo](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md).[status_code](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

[main.ts:22503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22503)

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IMerchantGoogleProductsTasksReadyResponseInfo](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md).[status_message](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`MerchantGoogleProductsTasksReadyTaskInfo`](MerchantGoogleProductsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantGoogleProductsTasksReadyResponseInfo](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md).[tasks](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:164374](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164374)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantGoogleProductsTasksReadyResponseInfo](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md).[tasks_count](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantGoogleProductsTasksReadyResponseInfo](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md).[tasks_error](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantGoogleProductsTasksReadyResponseInfo](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md).[time](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantGoogleProductsTasksReadyResponseInfo](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md).[version](../interfaces/IMerchantGoogleProductsTasksReadyResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

[main.ts:22500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22500)

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

[main.ts:164382](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164382)

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

[main.ts:164404](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164404)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:164397](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164397)
