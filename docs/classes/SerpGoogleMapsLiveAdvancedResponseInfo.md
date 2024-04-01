[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleMapsLiveAdvancedResponseInfo

# Class: SerpGoogleMapsLiveAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleMapsLiveAdvancedResponseInfo`**

## Implements

- [`ISerpGoogleMapsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleMapsLiveAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleMapsLiveAdvancedResponseInfo.md#cost)
- [status\_code](SerpGoogleMapsLiveAdvancedResponseInfo.md#status_code)
- [status\_message](SerpGoogleMapsLiveAdvancedResponseInfo.md#status_message)
- [tasks](SerpGoogleMapsLiveAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleMapsLiveAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleMapsLiveAdvancedResponseInfo.md#tasks_error)
- [time](SerpGoogleMapsLiveAdvancedResponseInfo.md#time)
- [version](SerpGoogleMapsLiveAdvancedResponseInfo.md#version)

### Methods

- [init](SerpGoogleMapsLiveAdvancedResponseInfo.md#init)
- [toJSON](SerpGoogleMapsLiveAdvancedResponseInfo.md#tojson)
- [fromJS](SerpGoogleMapsLiveAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleMapsLiveAdvancedResponseInfo**(`data?`): [`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleMapsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md) |

#### Returns

[`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:40336

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md).[cost](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md#cost)

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

[ISerpGoogleMapsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md).[status_code](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md#status_code)

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

[ISerpGoogleMapsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md).[status_message](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpGoogleMapsLiveAdvancedTaskInfo`](SerpGoogleMapsLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md).[tasks](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:40332

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md).[time](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md).[version](../interfaces/ISerpGoogleMapsLiveAdvancedResponseInfo.md#version)

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

main.ts:40340

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

main.ts:40362

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:40355
