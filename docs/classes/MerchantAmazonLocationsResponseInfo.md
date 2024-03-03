[Documentation](../README.md) / [Exports](../modules.md) / MerchantAmazonLocationsResponseInfo

# Class: MerchantAmazonLocationsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`MerchantAmazonLocationsResponseInfo`**

## Implements

- [`IMerchantAmazonLocationsResponseInfo`](../interfaces/IMerchantAmazonLocationsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonLocationsResponseInfo.md#constructor)

### Properties

- [cost](MerchantAmazonLocationsResponseInfo.md#cost)
- [status\_code](MerchantAmazonLocationsResponseInfo.md#status_code)
- [status\_message](MerchantAmazonLocationsResponseInfo.md#status_message)
- [tasks](MerchantAmazonLocationsResponseInfo.md#tasks)
- [tasks\_count](MerchantAmazonLocationsResponseInfo.md#tasks_count)
- [tasks\_error](MerchantAmazonLocationsResponseInfo.md#tasks_error)
- [time](MerchantAmazonLocationsResponseInfo.md#time)
- [version](MerchantAmazonLocationsResponseInfo.md#version)

### Methods

- [init](MerchantAmazonLocationsResponseInfo.md#init)
- [toJSON](MerchantAmazonLocationsResponseInfo.md#tojson)
- [fromJS](MerchantAmazonLocationsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonLocationsResponseInfo**(`data?`): [`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonLocationsResponseInfo`](../interfaces/IMerchantAmazonLocationsResponseInfo.md) |

#### Returns

[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:170010

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonLocationsResponseInfo](../interfaces/IMerchantAmazonLocationsResponseInfo.md).[cost](../interfaces/IMerchantAmazonLocationsResponseInfo.md#cost)

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

[IMerchantAmazonLocationsResponseInfo](../interfaces/IMerchantAmazonLocationsResponseInfo.md).[status_code](../interfaces/IMerchantAmazonLocationsResponseInfo.md#status_code)

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

[IMerchantAmazonLocationsResponseInfo](../interfaces/IMerchantAmazonLocationsResponseInfo.md).[status_message](../interfaces/IMerchantAmazonLocationsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`MerchantAmazonLocationsTaskInfo`](MerchantAmazonLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantAmazonLocationsResponseInfo](../interfaces/IMerchantAmazonLocationsResponseInfo.md).[tasks](../interfaces/IMerchantAmazonLocationsResponseInfo.md#tasks)

#### Defined in

main.ts:170006

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantAmazonLocationsResponseInfo](../interfaces/IMerchantAmazonLocationsResponseInfo.md).[tasks_count](../interfaces/IMerchantAmazonLocationsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantAmazonLocationsResponseInfo](../interfaces/IMerchantAmazonLocationsResponseInfo.md).[tasks_error](../interfaces/IMerchantAmazonLocationsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantAmazonLocationsResponseInfo](../interfaces/IMerchantAmazonLocationsResponseInfo.md).[time](../interfaces/IMerchantAmazonLocationsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantAmazonLocationsResponseInfo](../interfaces/IMerchantAmazonLocationsResponseInfo.md).[version](../interfaces/IMerchantAmazonLocationsResponseInfo.md#version)

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

main.ts:170014

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

main.ts:170036

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:170029
