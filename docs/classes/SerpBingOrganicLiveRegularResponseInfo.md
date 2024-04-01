[Documentation](../README.md) / [Exports](../modules.md) / SerpBingOrganicLiveRegularResponseInfo

# Class: SerpBingOrganicLiveRegularResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBingOrganicLiveRegularResponseInfo`**

## Implements

- [`ISerpBingOrganicLiveRegularResponseInfo`](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicLiveRegularResponseInfo.md#constructor)

### Properties

- [cost](SerpBingOrganicLiveRegularResponseInfo.md#cost)
- [status\_code](SerpBingOrganicLiveRegularResponseInfo.md#status_code)
- [status\_message](SerpBingOrganicLiveRegularResponseInfo.md#status_message)
- [tasks](SerpBingOrganicLiveRegularResponseInfo.md#tasks)
- [tasks\_count](SerpBingOrganicLiveRegularResponseInfo.md#tasks_count)
- [tasks\_error](SerpBingOrganicLiveRegularResponseInfo.md#tasks_error)
- [time](SerpBingOrganicLiveRegularResponseInfo.md#time)
- [version](SerpBingOrganicLiveRegularResponseInfo.md#version)

### Methods

- [init](SerpBingOrganicLiveRegularResponseInfo.md#init)
- [toJSON](SerpBingOrganicLiveRegularResponseInfo.md#tojson)
- [fromJS](SerpBingOrganicLiveRegularResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicLiveRegularResponseInfo**(`data?`): [`SerpBingOrganicLiveRegularResponseInfo`](SerpBingOrganicLiveRegularResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicLiveRegularResponseInfo`](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md) |

#### Returns

[`SerpBingOrganicLiveRegularResponseInfo`](SerpBingOrganicLiveRegularResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:57534

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingOrganicLiveRegularResponseInfo](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md).[cost](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md#cost)

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

[ISerpBingOrganicLiveRegularResponseInfo](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md).[status_code](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md#status_code)

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

[ISerpBingOrganicLiveRegularResponseInfo](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md).[status_message](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpBingOrganicLiveRegularTaskInfo`](SerpBingOrganicLiveRegularTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBingOrganicLiveRegularResponseInfo](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md).[tasks](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md#tasks)

#### Defined in

main.ts:57530

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBingOrganicLiveRegularResponseInfo](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md).[tasks_count](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBingOrganicLiveRegularResponseInfo](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md).[tasks_error](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBingOrganicLiveRegularResponseInfo](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md).[time](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBingOrganicLiveRegularResponseInfo](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md).[version](../interfaces/ISerpBingOrganicLiveRegularResponseInfo.md#version)

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

main.ts:57538

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

main.ts:57560

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicLiveRegularResponseInfo`](SerpBingOrganicLiveRegularResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicLiveRegularResponseInfo`](SerpBingOrganicLiveRegularResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:57553
