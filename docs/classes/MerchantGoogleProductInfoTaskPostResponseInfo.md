[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleProductInfoTaskPostResponseInfo

# Class: MerchantGoogleProductInfoTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`MerchantGoogleProductInfoTaskPostResponseInfo`**

## Implements

- [`IMerchantGoogleProductInfoTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductInfoTaskPostResponseInfo.md#constructor)

### Properties

- [cost](MerchantGoogleProductInfoTaskPostResponseInfo.md#cost)
- [status\_code](MerchantGoogleProductInfoTaskPostResponseInfo.md#status_code)
- [status\_message](MerchantGoogleProductInfoTaskPostResponseInfo.md#status_message)
- [tasks](MerchantGoogleProductInfoTaskPostResponseInfo.md#tasks)
- [tasks\_count](MerchantGoogleProductInfoTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](MerchantGoogleProductInfoTaskPostResponseInfo.md#tasks_error)
- [time](MerchantGoogleProductInfoTaskPostResponseInfo.md#time)
- [version](MerchantGoogleProductInfoTaskPostResponseInfo.md#version)

### Methods

- [init](MerchantGoogleProductInfoTaskPostResponseInfo.md#init)
- [toJSON](MerchantGoogleProductInfoTaskPostResponseInfo.md#tojson)
- [fromJS](MerchantGoogleProductInfoTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductInfoTaskPostResponseInfo**(`data?`): [`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductInfoTaskPostResponseInfo`](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md) |

#### Returns

[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:168726](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168726)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleProductInfoTaskPostResponseInfo](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md).[cost](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md#cost)

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

[IMerchantGoogleProductInfoTaskPostResponseInfo](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md).[status_code](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md#status_code)

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

[IMerchantGoogleProductInfoTaskPostResponseInfo](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md).[status_message](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`MerchantGoogleProductInfoTaskPostTaskInfo`](MerchantGoogleProductInfoTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantGoogleProductInfoTaskPostResponseInfo](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md).[tasks](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:168722](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168722)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantGoogleProductInfoTaskPostResponseInfo](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md).[tasks_count](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantGoogleProductInfoTaskPostResponseInfo](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md).[tasks_error](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantGoogleProductInfoTaskPostResponseInfo](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md).[time](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantGoogleProductInfoTaskPostResponseInfo](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md).[version](../interfaces/IMerchantGoogleProductInfoTaskPostResponseInfo.md#version)

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

[main.ts:168730](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168730)

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

[main.ts:168752](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168752)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:168745](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168745)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")