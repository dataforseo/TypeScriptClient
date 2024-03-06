[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonSellersTaskGetHtmlResponseInfo

# Class: MerchantAmazonSellersTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`MerchantAmazonSellersTaskGetHtmlResponseInfo`**

## Implements

- [`IMerchantAmazonSellersTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonSellersTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](MerchantAmazonSellersTaskGetHtmlResponseInfo.md#cost)
- [status\_code](MerchantAmazonSellersTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](MerchantAmazonSellersTaskGetHtmlResponseInfo.md#status_message)
- [tasks](MerchantAmazonSellersTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](MerchantAmazonSellersTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](MerchantAmazonSellersTaskGetHtmlResponseInfo.md#tasks_error)
- [time](MerchantAmazonSellersTaskGetHtmlResponseInfo.md#time)
- [version](MerchantAmazonSellersTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](MerchantAmazonSellersTaskGetHtmlResponseInfo.md#init)
- [toJSON](MerchantAmazonSellersTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](MerchantAmazonSellersTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonSellersTaskGetHtmlResponseInfo**(`data?`): [`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonSellersTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md) |

#### Returns

[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:174805](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174805)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md).[cost](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md#cost)

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

[IMerchantAmazonSellersTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md).[status_code](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md#status_code)

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

[IMerchantAmazonSellersTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md).[status_message](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`MerchantAmazonSellersTaskGetHtmlTaskInfo`](MerchantAmazonSellersTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md).[tasks](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

[main.ts:174801](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174801)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md).[time](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md).[version](../interfaces/IMerchantAmazonSellersTaskGetHtmlResponseInfo.md#version)

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

[main.ts:174809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174809)

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

[main.ts:174831](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174831)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:174824](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174824)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")