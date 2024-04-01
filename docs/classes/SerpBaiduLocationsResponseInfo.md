[Documentation](../README.md) / [Exports](../modules.md) / SerpBaiduLocationsResponseInfo

# Class: SerpBaiduLocationsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBaiduLocationsResponseInfo`**

## Implements

- [`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduLocationsResponseInfo.md#constructor)

### Properties

- [cost](SerpBaiduLocationsResponseInfo.md#cost)
- [status\_code](SerpBaiduLocationsResponseInfo.md#status_code)
- [status\_message](SerpBaiduLocationsResponseInfo.md#status_message)
- [tasks](SerpBaiduLocationsResponseInfo.md#tasks)
- [tasks\_count](SerpBaiduLocationsResponseInfo.md#tasks_count)
- [tasks\_error](SerpBaiduLocationsResponseInfo.md#tasks_error)
- [time](SerpBaiduLocationsResponseInfo.md#time)
- [version](SerpBaiduLocationsResponseInfo.md#version)

### Methods

- [init](SerpBaiduLocationsResponseInfo.md#init)
- [toJSON](SerpBaiduLocationsResponseInfo.md#tojson)
- [fromJS](SerpBaiduLocationsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduLocationsResponseInfo**(`data?`): [`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduLocationsResponseInfo`](../interfaces/ISerpBaiduLocationsResponseInfo.md) |

#### Returns

[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:67718

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBaiduLocationsResponseInfo](../interfaces/ISerpBaiduLocationsResponseInfo.md).[cost](../interfaces/ISerpBaiduLocationsResponseInfo.md#cost)

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

[ISerpBaiduLocationsResponseInfo](../interfaces/ISerpBaiduLocationsResponseInfo.md).[status_code](../interfaces/ISerpBaiduLocationsResponseInfo.md#status_code)

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

[ISerpBaiduLocationsResponseInfo](../interfaces/ISerpBaiduLocationsResponseInfo.md).[status_message](../interfaces/ISerpBaiduLocationsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpBaiduLocationsTaskInfo`](SerpBaiduLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBaiduLocationsResponseInfo](../interfaces/ISerpBaiduLocationsResponseInfo.md).[tasks](../interfaces/ISerpBaiduLocationsResponseInfo.md#tasks)

#### Defined in

main.ts:67714

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBaiduLocationsResponseInfo](../interfaces/ISerpBaiduLocationsResponseInfo.md).[tasks_count](../interfaces/ISerpBaiduLocationsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBaiduLocationsResponseInfo](../interfaces/ISerpBaiduLocationsResponseInfo.md).[tasks_error](../interfaces/ISerpBaiduLocationsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBaiduLocationsResponseInfo](../interfaces/ISerpBaiduLocationsResponseInfo.md).[time](../interfaces/ISerpBaiduLocationsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBaiduLocationsResponseInfo](../interfaces/ISerpBaiduLocationsResponseInfo.md).[version](../interfaces/ISerpBaiduLocationsResponseInfo.md#version)

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

main.ts:67722

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

main.ts:67744

___

### fromJS

▸ **fromJS**(`data`): [`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:67737
