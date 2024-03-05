[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonAsinTaskGetAdvancedResponseInfo

# Class: MerchantAmazonAsinTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantAmazonAsinTaskGetAdvancedResponseInfo`**

## Implements

- [`IMerchantAmazonAsinTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md#time)
- [version](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md#init)
- [toJSON](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonAsinTaskGetAdvancedResponseInfo**(`data?`): [`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonAsinTaskGetAdvancedResponseInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md) |

#### Returns

[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:173291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173291)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md).[cost](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md#cost)

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

[IMerchantAmazonAsinTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md#status_code)

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

[IMerchantAmazonAsinTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`MerchantAmazonAsinTaskGetAdvancedTaskInfo`](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

[main.ts:173287](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173287)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md).[time](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedResponseInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md).[version](../interfaces/IMerchantAmazonAsinTaskGetAdvancedResponseInfo.md#version)

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

[main.ts:173295](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173295)

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

[main.ts:173317](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173317)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:173310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173310)
