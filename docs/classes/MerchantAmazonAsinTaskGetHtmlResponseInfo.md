[Documentation](../README.md) / [Exports](../modules.md) / MerchantAmazonAsinTaskGetHtmlResponseInfo

# Class: MerchantAmazonAsinTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantAmazonAsinTaskGetHtmlResponseInfo`**

## Implements

- [`IMerchantAmazonAsinTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonAsinTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](MerchantAmazonAsinTaskGetHtmlResponseInfo.md#cost)
- [status\_code](MerchantAmazonAsinTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](MerchantAmazonAsinTaskGetHtmlResponseInfo.md#status_message)
- [tasks](MerchantAmazonAsinTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](MerchantAmazonAsinTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](MerchantAmazonAsinTaskGetHtmlResponseInfo.md#tasks_error)
- [time](MerchantAmazonAsinTaskGetHtmlResponseInfo.md#time)
- [version](MerchantAmazonAsinTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](MerchantAmazonAsinTaskGetHtmlResponseInfo.md#init)
- [toJSON](MerchantAmazonAsinTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](MerchantAmazonAsinTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonAsinTaskGetHtmlResponseInfo**(`data?`): [`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonAsinTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md) |

#### Returns

[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:178960

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md).[cost](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md#cost)

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

[IMerchantAmazonAsinTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md).[status_code](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md#status_code)

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

[IMerchantAmazonAsinTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md).[status_message](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`MerchantAmazonAsinTaskGetHtmlTaskInfo`](MerchantAmazonAsinTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md).[tasks](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

main.ts:178956

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md).[time](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md).[version](../interfaces/IMerchantAmazonAsinTaskGetHtmlResponseInfo.md#version)

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

main.ts:178964

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

main.ts:178986

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:178979
