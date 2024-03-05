[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantErrorsResponseInfo

# Class: MerchantErrorsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantErrorsResponseInfo`**

## Implements

- [`IMerchantErrorsResponseInfo`](../interfaces/IMerchantErrorsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantErrorsResponseInfo.md#constructor)

### Properties

- [cost](MerchantErrorsResponseInfo.md#cost)
- [status\_code](MerchantErrorsResponseInfo.md#status_code)
- [status\_message](MerchantErrorsResponseInfo.md#status_message)
- [tasks](MerchantErrorsResponseInfo.md#tasks)
- [tasks\_count](MerchantErrorsResponseInfo.md#tasks_count)
- [tasks\_error](MerchantErrorsResponseInfo.md#tasks_error)
- [time](MerchantErrorsResponseInfo.md#time)
- [version](MerchantErrorsResponseInfo.md#version)

### Methods

- [init](MerchantErrorsResponseInfo.md#init)
- [toJSON](MerchantErrorsResponseInfo.md#tojson)
- [fromJS](MerchantErrorsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantErrorsResponseInfo**(`data?`): [`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantErrorsResponseInfo`](../interfaces/IMerchantErrorsResponseInfo.md) |

#### Returns

[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:163292](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163292)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantErrorsResponseInfo](../interfaces/IMerchantErrorsResponseInfo.md).[cost](../interfaces/IMerchantErrorsResponseInfo.md#cost)

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

[IMerchantErrorsResponseInfo](../interfaces/IMerchantErrorsResponseInfo.md).[status_code](../interfaces/IMerchantErrorsResponseInfo.md#status_code)

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

[IMerchantErrorsResponseInfo](../interfaces/IMerchantErrorsResponseInfo.md).[status_message](../interfaces/IMerchantErrorsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`MerchantErrorsTaskInfo`](MerchantErrorsTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantErrorsResponseInfo](../interfaces/IMerchantErrorsResponseInfo.md).[tasks](../interfaces/IMerchantErrorsResponseInfo.md#tasks)

#### Defined in

[main.ts:163288](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163288)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantErrorsResponseInfo](../interfaces/IMerchantErrorsResponseInfo.md).[tasks_count](../interfaces/IMerchantErrorsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantErrorsResponseInfo](../interfaces/IMerchantErrorsResponseInfo.md).[tasks_error](../interfaces/IMerchantErrorsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantErrorsResponseInfo](../interfaces/IMerchantErrorsResponseInfo.md).[time](../interfaces/IMerchantErrorsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantErrorsResponseInfo](../interfaces/IMerchantErrorsResponseInfo.md).[version](../interfaces/IMerchantErrorsResponseInfo.md#version)

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

[main.ts:163296](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163296)

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

[main.ts:163318](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163318)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:163311](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163311)
