[Documentation](../README.md) / [Exports](../modules.md) / SerpBingOrganicLiveAdvancedResponseInfo

# Class: SerpBingOrganicLiveAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBingOrganicLiveAdvancedResponseInfo`**

## Implements

- [`ISerpBingOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicLiveAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpBingOrganicLiveAdvancedResponseInfo.md#cost)
- [status\_code](SerpBingOrganicLiveAdvancedResponseInfo.md#status_code)
- [status\_message](SerpBingOrganicLiveAdvancedResponseInfo.md#status_message)
- [tasks](SerpBingOrganicLiveAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpBingOrganicLiveAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpBingOrganicLiveAdvancedResponseInfo.md#tasks_error)
- [time](SerpBingOrganicLiveAdvancedResponseInfo.md#time)
- [version](SerpBingOrganicLiveAdvancedResponseInfo.md#version)

### Methods

- [init](SerpBingOrganicLiveAdvancedResponseInfo.md#init)
- [toJSON](SerpBingOrganicLiveAdvancedResponseInfo.md#tojson)
- [fromJS](SerpBingOrganicLiveAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicLiveAdvancedResponseInfo**(`data?`): [`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md) |

#### Returns

[`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:57794

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingOrganicLiveAdvancedResponseInfo](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md).[cost](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md#cost)

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

[ISerpBingOrganicLiveAdvancedResponseInfo](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md).[status_code](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md#status_code)

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

[ISerpBingOrganicLiveAdvancedResponseInfo](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md).[status_message](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpBingOrganicLiveAdvancedTaskInfo`](SerpBingOrganicLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBingOrganicLiveAdvancedResponseInfo](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md).[tasks](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:57790

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBingOrganicLiveAdvancedResponseInfo](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBingOrganicLiveAdvancedResponseInfo](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBingOrganicLiveAdvancedResponseInfo](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md).[time](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBingOrganicLiveAdvancedResponseInfo](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md).[version](../interfaces/ISerpBingOrganicLiveAdvancedResponseInfo.md#version)

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

main.ts:57798

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

main.ts:57820

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:57813
