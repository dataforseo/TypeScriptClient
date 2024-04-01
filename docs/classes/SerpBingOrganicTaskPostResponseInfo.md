[Documentation](../README.md) / [Exports](../modules.md) / SerpBingOrganicTaskPostResponseInfo

# Class: SerpBingOrganicTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBingOrganicTaskPostResponseInfo`**

## Implements

- [`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicTaskPostResponseInfo.md#constructor)

### Properties

- [cost](SerpBingOrganicTaskPostResponseInfo.md#cost)
- [status\_code](SerpBingOrganicTaskPostResponseInfo.md#status_code)
- [status\_message](SerpBingOrganicTaskPostResponseInfo.md#status_message)
- [tasks](SerpBingOrganicTaskPostResponseInfo.md#tasks)
- [tasks\_count](SerpBingOrganicTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](SerpBingOrganicTaskPostResponseInfo.md#tasks_error)
- [time](SerpBingOrganicTaskPostResponseInfo.md#time)
- [version](SerpBingOrganicTaskPostResponseInfo.md#version)

### Methods

- [init](SerpBingOrganicTaskPostResponseInfo.md#init)
- [toJSON](SerpBingOrganicTaskPostResponseInfo.md#tojson)
- [fromJS](SerpBingOrganicTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicTaskPostResponseInfo**(`data?`): [`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicTaskPostResponseInfo`](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md) |

#### Returns

[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:56110

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingOrganicTaskPostResponseInfo](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[cost](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#cost)

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

[ISerpBingOrganicTaskPostResponseInfo](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[status_code](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#status_code)

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

[ISerpBingOrganicTaskPostResponseInfo](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[status_message](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpBingOrganicTaskPostTaskInfo`](SerpBingOrganicTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBingOrganicTaskPostResponseInfo](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[tasks](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:56106

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBingOrganicTaskPostResponseInfo](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[tasks_count](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBingOrganicTaskPostResponseInfo](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[tasks_error](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBingOrganicTaskPostResponseInfo](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[time](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBingOrganicTaskPostResponseInfo](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md).[version](../interfaces/ISerpBingOrganicTaskPostResponseInfo.md#version)

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

main.ts:56114

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

main.ts:56136

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:56129
