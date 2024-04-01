[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleImagesTaskPostResponseInfo

# Class: SerpGoogleImagesTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleImagesTaskPostResponseInfo`**

## Implements

- [`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesTaskPostResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleImagesTaskPostResponseInfo.md#cost)
- [status\_code](SerpGoogleImagesTaskPostResponseInfo.md#status_code)
- [status\_message](SerpGoogleImagesTaskPostResponseInfo.md#status_message)
- [tasks](SerpGoogleImagesTaskPostResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleImagesTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleImagesTaskPostResponseInfo.md#tasks_error)
- [time](SerpGoogleImagesTaskPostResponseInfo.md#time)
- [version](SerpGoogleImagesTaskPostResponseInfo.md#version)

### Methods

- [init](SerpGoogleImagesTaskPostResponseInfo.md#init)
- [toJSON](SerpGoogleImagesTaskPostResponseInfo.md#tojson)
- [fromJS](SerpGoogleImagesTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesTaskPostResponseInfo**(`data?`): [`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md) |

#### Returns

[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:46372

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleImagesTaskPostResponseInfo](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[cost](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#cost)

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

[ISerpGoogleImagesTaskPostResponseInfo](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[status_code](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#status_code)

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

[ISerpGoogleImagesTaskPostResponseInfo](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[status_message](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpGoogleImagesTaskPostTaskInfo`](SerpGoogleImagesTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleImagesTaskPostResponseInfo](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[tasks](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:46368

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleImagesTaskPostResponseInfo](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleImagesTaskPostResponseInfo](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleImagesTaskPostResponseInfo](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[time](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleImagesTaskPostResponseInfo](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[version](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#version)

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

main.ts:46376

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

main.ts:46398

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:46391
