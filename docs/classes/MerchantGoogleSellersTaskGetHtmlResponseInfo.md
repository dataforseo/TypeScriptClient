[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleSellersTaskGetHtmlResponseInfo

# Class: MerchantGoogleSellersTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantGoogleSellersTaskGetHtmlResponseInfo`**

## Implements

- [`IMerchantGoogleSellersTaskGetHtmlResponseInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleSellersTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](MerchantGoogleSellersTaskGetHtmlResponseInfo.md#cost)
- [status\_code](MerchantGoogleSellersTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](MerchantGoogleSellersTaskGetHtmlResponseInfo.md#status_message)
- [tasks](MerchantGoogleSellersTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](MerchantGoogleSellersTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](MerchantGoogleSellersTaskGetHtmlResponseInfo.md#tasks_error)
- [time](MerchantGoogleSellersTaskGetHtmlResponseInfo.md#time)
- [version](MerchantGoogleSellersTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](MerchantGoogleSellersTaskGetHtmlResponseInfo.md#init)
- [toJSON](MerchantGoogleSellersTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](MerchantGoogleSellersTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleSellersTaskGetHtmlResponseInfo**(`data?`): [`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleSellersTaskGetHtmlResponseInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md) |

#### Returns

[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:167204](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167204)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlResponseInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md).[cost](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md#cost)

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

[IMerchantGoogleSellersTaskGetHtmlResponseInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md).[status_code](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md#status_code)

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

[IMerchantGoogleSellersTaskGetHtmlResponseInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md).[status_message](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`MerchantGoogleSellersTaskGetHtmlTaskInfo`](MerchantGoogleSellersTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlResponseInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md).[tasks](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

[main.ts:167200](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167200)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlResponseInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlResponseInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlResponseInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md).[time](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlResponseInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md).[version](../interfaces/IMerchantGoogleSellersTaskGetHtmlResponseInfo.md#version)

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

[main.ts:167208](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167208)

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

[main.ts:167230](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167230)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:167223](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167223)
