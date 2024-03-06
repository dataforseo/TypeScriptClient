[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppendixWebhookResendResponseInfo

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

[main.ts:212627](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212627)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppendixWebhookResendResponseInfo](../interfaces/IAppendixWebhookResendResponseInfo.md).[cost](../interfaces/IAppendixWebhookResendResponseInfo.md#cost)

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

[IAppendixWebhookResendResponseInfo](../interfaces/IAppendixWebhookResendResponseInfo.md).[status_code](../interfaces/IAppendixWebhookResendResponseInfo.md#status_code)

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

[IAppendixWebhookResendResponseInfo](../interfaces/IAppendixWebhookResendResponseInfo.md).[status_message](../interfaces/IAppendixWebhookResendResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`AppendixWebhookResendTaskInfo`](AppendixWebhookResendTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppendixWebhookResendResponseInfo](../interfaces/IAppendixWebhookResendResponseInfo.md).[tasks](../interfaces/IAppendixWebhookResendResponseInfo.md#tasks)

#### Defined in

[main.ts:212623](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212623)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppendixWebhookResendResponseInfo](../interfaces/IAppendixWebhookResendResponseInfo.md).[tasks_count](../interfaces/IAppendixWebhookResendResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppendixWebhookResendResponseInfo](../interfaces/IAppendixWebhookResendResponseInfo.md).[tasks_error](../interfaces/IAppendixWebhookResendResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppendixWebhookResendResponseInfo](../interfaces/IAppendixWebhookResendResponseInfo.md).[time](../interfaces/IAppendixWebhookResendResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppendixWebhookResendResponseInfo](../interfaces/IAppendixWebhookResendResponseInfo.md).[version](../interfaces/IAppendixWebhookResendResponseInfo.md#version)

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

[main.ts:212631](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212631)

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

[main.ts:212653](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212653)

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

[main.ts:212646](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212646)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")