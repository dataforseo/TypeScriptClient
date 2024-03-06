[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleSellersTaskPostResponseInfo

# Class: MerchantGoogleSellersTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`MerchantGoogleSellersTaskPostResponseInfo`**

## Implements

- [`IMerchantGoogleSellersTaskPostResponseInfo`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleSellersTaskPostResponseInfo.md#constructor)

### Properties

- [cost](MerchantGoogleSellersTaskPostResponseInfo.md#cost)
- [status\_code](MerchantGoogleSellersTaskPostResponseInfo.md#status_code)
- [status\_message](MerchantGoogleSellersTaskPostResponseInfo.md#status_message)
- [tasks](MerchantGoogleSellersTaskPostResponseInfo.md#tasks)
- [tasks\_count](MerchantGoogleSellersTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](MerchantGoogleSellersTaskPostResponseInfo.md#tasks_error)
- [time](MerchantGoogleSellersTaskPostResponseInfo.md#time)
- [version](MerchantGoogleSellersTaskPostResponseInfo.md#version)

### Methods

- [init](MerchantGoogleSellersTaskPostResponseInfo.md#init)
- [toJSON](MerchantGoogleSellersTaskPostResponseInfo.md#tojson)
- [fromJS](MerchantGoogleSellersTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleSellersTaskPostResponseInfo**(`data?`): [`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleSellersTaskPostResponseInfo`](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md) |

#### Returns

[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:166192](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166192)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleSellersTaskPostResponseInfo](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md).[cost](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md#cost)

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

[IMerchantGoogleSellersTaskPostResponseInfo](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md).[status_code](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md#status_code)

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

[IMerchantGoogleSellersTaskPostResponseInfo](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md).[status_message](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`MerchantGoogleSellersTaskPostTaskInfo`](MerchantGoogleSellersTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantGoogleSellersTaskPostResponseInfo](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md).[tasks](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:166188](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166188)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantGoogleSellersTaskPostResponseInfo](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md).[tasks_count](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantGoogleSellersTaskPostResponseInfo](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md).[tasks_error](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantGoogleSellersTaskPostResponseInfo](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md).[time](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantGoogleSellersTaskPostResponseInfo](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md).[version](../interfaces/IMerchantGoogleSellersTaskPostResponseInfo.md#version)

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

[main.ts:166196](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166196)

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

[main.ts:166218](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166218)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:166211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166211)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")