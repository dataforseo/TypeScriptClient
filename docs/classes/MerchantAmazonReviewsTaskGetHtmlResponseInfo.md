[Documentation](../README.md) / [Exports](../modules.md) / MerchantAmazonReviewsTaskGetHtmlResponseInfo

# Class: MerchantAmazonReviewsTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantAmazonReviewsTaskGetHtmlResponseInfo`**

## Implements

- [`IMerchantAmazonReviewsTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md#cost)
- [status\_code](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md#status_message)
- [tasks](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md#tasks_error)
- [time](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md#time)
- [version](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md#init)
- [toJSON](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonReviewsTaskGetHtmlResponseInfo**(`data?`): [`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonReviewsTaskGetHtmlResponseInfo`](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md) |

#### Returns

[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:176347

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonReviewsTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md).[cost](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md#cost)

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

[IMerchantAmazonReviewsTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md).[status_code](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md#status_code)

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

[IMerchantAmazonReviewsTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md).[status_message](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`MerchantAmazonReviewsTaskGetHtmlTaskInfo`](MerchantAmazonReviewsTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantAmazonReviewsTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md).[tasks](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

main.ts:176343

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantAmazonReviewsTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantAmazonReviewsTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantAmazonReviewsTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md).[time](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantAmazonReviewsTaskGetHtmlResponseInfo](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md).[version](../interfaces/IMerchantAmazonReviewsTaskGetHtmlResponseInfo.md#version)

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

main.ts:176351

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

main.ts:176373

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:176366
