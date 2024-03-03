[Documentation](../README.md) / [Exports](../modules.md) / MerchantGoogleProductsTaskGetHtmlResponseInfo

# Class: MerchantGoogleProductsTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantGoogleProductsTaskGetHtmlResponseInfo`**

## Implements

- [`IMerchantGoogleProductsTaskGetHtmlResponseInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductsTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](MerchantGoogleProductsTaskGetHtmlResponseInfo.md#cost)
- [status\_code](MerchantGoogleProductsTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](MerchantGoogleProductsTaskGetHtmlResponseInfo.md#status_message)
- [tasks](MerchantGoogleProductsTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](MerchantGoogleProductsTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](MerchantGoogleProductsTaskGetHtmlResponseInfo.md#tasks_error)
- [time](MerchantGoogleProductsTaskGetHtmlResponseInfo.md#time)
- [version](MerchantGoogleProductsTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](MerchantGoogleProductsTaskGetHtmlResponseInfo.md#init)
- [toJSON](MerchantGoogleProductsTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](MerchantGoogleProductsTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductsTaskGetHtmlResponseInfo**(`data?`): [`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductsTaskGetHtmlResponseInfo`](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md) |

#### Returns

[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:165916

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleProductsTaskGetHtmlResponseInfo](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md).[cost](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:22652

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IMerchantGoogleProductsTaskGetHtmlResponseInfo](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md).[status_code](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:22645

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IMerchantGoogleProductsTaskGetHtmlResponseInfo](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md).[status_message](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`MerchantGoogleProductsTaskGetHtmlTaskInfo`](MerchantGoogleProductsTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantGoogleProductsTaskGetHtmlResponseInfo](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md).[tasks](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

main.ts:165912

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantGoogleProductsTaskGetHtmlResponseInfo](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantGoogleProductsTaskGetHtmlResponseInfo](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantGoogleProductsTaskGetHtmlResponseInfo](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md).[time](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantGoogleProductsTaskGetHtmlResponseInfo](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md).[version](../interfaces/IMerchantGoogleProductsTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:22642

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

main.ts:165920

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

main.ts:165942

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:165935
