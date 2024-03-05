[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonAsinTaskPostResponseInfo

# Class: MerchantAmazonAsinTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantAmazonAsinTaskPostResponseInfo`**

## Implements

- [`IMerchantAmazonAsinTaskPostResponseInfo`](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonAsinTaskPostResponseInfo.md#constructor)

### Properties

- [cost](MerchantAmazonAsinTaskPostResponseInfo.md#cost)
- [status\_code](MerchantAmazonAsinTaskPostResponseInfo.md#status_code)
- [status\_message](MerchantAmazonAsinTaskPostResponseInfo.md#status_message)
- [tasks](MerchantAmazonAsinTaskPostResponseInfo.md#tasks)
- [tasks\_count](MerchantAmazonAsinTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](MerchantAmazonAsinTaskPostResponseInfo.md#tasks_error)
- [time](MerchantAmazonAsinTaskPostResponseInfo.md#time)
- [version](MerchantAmazonAsinTaskPostResponseInfo.md#version)

### Methods

- [init](MerchantAmazonAsinTaskPostResponseInfo.md#init)
- [toJSON](MerchantAmazonAsinTaskPostResponseInfo.md#tojson)
- [fromJS](MerchantAmazonAsinTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonAsinTaskPostResponseInfo**(`data?`): [`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonAsinTaskPostResponseInfo`](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md) |

#### Returns

[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:172071](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172071)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonAsinTaskPostResponseInfo](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md).[cost](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md#cost)

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

[IMerchantAmazonAsinTaskPostResponseInfo](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md).[status_code](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md#status_code)

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

[IMerchantAmazonAsinTaskPostResponseInfo](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md).[status_message](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`MerchantAmazonAsinTaskPostTaskInfo`](MerchantAmazonAsinTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantAmazonAsinTaskPostResponseInfo](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md).[tasks](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:172067](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172067)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantAmazonAsinTaskPostResponseInfo](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md).[tasks_count](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantAmazonAsinTaskPostResponseInfo](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md).[tasks_error](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantAmazonAsinTaskPostResponseInfo](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md).[time](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantAmazonAsinTaskPostResponseInfo](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md).[version](../interfaces/IMerchantAmazonAsinTaskPostResponseInfo.md#version)

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

[main.ts:172075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172075)

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

[main.ts:172097](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172097)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:172090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172090)
