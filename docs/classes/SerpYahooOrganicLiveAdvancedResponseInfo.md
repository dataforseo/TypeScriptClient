[Documentation](../README.md) / [Exports](../modules.md) / SerpYahooOrganicLiveAdvancedResponseInfo

# Class: SerpYahooOrganicLiveAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpYahooOrganicLiveAdvancedResponseInfo`**

## Implements

- [`ISerpYahooOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicLiveAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpYahooOrganicLiveAdvancedResponseInfo.md#cost)
- [status\_code](SerpYahooOrganicLiveAdvancedResponseInfo.md#status_code)
- [status\_message](SerpYahooOrganicLiveAdvancedResponseInfo.md#status_message)
- [tasks](SerpYahooOrganicLiveAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpYahooOrganicLiveAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpYahooOrganicLiveAdvancedResponseInfo.md#tasks_error)
- [time](SerpYahooOrganicLiveAdvancedResponseInfo.md#time)
- [version](SerpYahooOrganicLiveAdvancedResponseInfo.md#version)

### Methods

- [init](SerpYahooOrganicLiveAdvancedResponseInfo.md#init)
- [toJSON](SerpYahooOrganicLiveAdvancedResponseInfo.md#tojson)
- [fromJS](SerpYahooOrganicLiveAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicLiveAdvancedResponseInfo**(`data?`): [`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md) |

#### Returns

[`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:67310

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResponseInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md).[cost](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md#cost)

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

[ISerpYahooOrganicLiveAdvancedResponseInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md).[status_code](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md#status_code)

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

[ISerpYahooOrganicLiveAdvancedResponseInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md).[status_message](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpYahooOrganicLiveAdvancedTaskInfo`](SerpYahooOrganicLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResponseInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md).[tasks](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:67306

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResponseInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResponseInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResponseInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md).[time](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResponseInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md).[version](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md#version)

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

main.ts:67314

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

main.ts:67336

___

### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:67329
