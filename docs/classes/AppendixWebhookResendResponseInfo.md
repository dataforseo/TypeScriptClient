[Documentation](../README.md) / [Exports](../modules.md) / AppendixWebhookResendResponseInfo

# Class: AppendixWebhookResendResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppendixWebhookResendResponseInfo`**

## Implements

- [`IAppendixWebhookResendResponseInfo`](../interfaces/IAppendixWebhookResendResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppendixWebhookResendResponseInfo.md#constructor)

### Properties

- [cost](AppendixWebhookResendResponseInfo.md#cost)
- [status\_code](AppendixWebhookResendResponseInfo.md#status_code)
- [status\_message](AppendixWebhookResendResponseInfo.md#status_message)
- [tasks](AppendixWebhookResendResponseInfo.md#tasks)
- [tasks\_count](AppendixWebhookResendResponseInfo.md#tasks_count)
- [tasks\_error](AppendixWebhookResendResponseInfo.md#tasks_error)
- [time](AppendixWebhookResendResponseInfo.md#time)
- [version](AppendixWebhookResendResponseInfo.md#version)

### Methods

- [init](AppendixWebhookResendResponseInfo.md#init)
- [toJSON](AppendixWebhookResendResponseInfo.md#tojson)
- [fromJS](AppendixWebhookResendResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppendixWebhookResendResponseInfo**(`data?`): [`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppendixWebhookResendResponseInfo`](../interfaces/IAppendixWebhookResendResponseInfo.md) |

#### Returns

[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:218280

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppendixWebhookResendResponseInfo](../interfaces/IAppendixWebhookResendResponseInfo.md).[cost](../interfaces/IAppendixWebhookResendResponseInfo.md#cost)

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

[IAppendixWebhookResendResponseInfo](../interfaces/IAppendixWebhookResendResponseInfo.md).[status_code](../interfaces/IAppendixWebhookResendResponseInfo.md#status_code)

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

[IAppendixWebhookResendResponseInfo](../interfaces/IAppendixWebhookResendResponseInfo.md).[status_message](../interfaces/IAppendixWebhookResendResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`AppendixWebhookResendTaskInfo`](AppendixWebhookResendTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppendixWebhookResendResponseInfo](../interfaces/IAppendixWebhookResendResponseInfo.md).[tasks](../interfaces/IAppendixWebhookResendResponseInfo.md#tasks)

#### Defined in

main.ts:218276

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppendixWebhookResendResponseInfo](../interfaces/IAppendixWebhookResendResponseInfo.md).[tasks_count](../interfaces/IAppendixWebhookResendResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppendixWebhookResendResponseInfo](../interfaces/IAppendixWebhookResendResponseInfo.md).[tasks_error](../interfaces/IAppendixWebhookResendResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppendixWebhookResendResponseInfo](../interfaces/IAppendixWebhookResendResponseInfo.md).[time](../interfaces/IAppendixWebhookResendResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppendixWebhookResendResponseInfo](../interfaces/IAppendixWebhookResendResponseInfo.md).[version](../interfaces/IAppendixWebhookResendResponseInfo.md#version)

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

main.ts:218284

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

main.ts:218306

___

### fromJS

▸ **fromJS**(`data`): [`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:218299
