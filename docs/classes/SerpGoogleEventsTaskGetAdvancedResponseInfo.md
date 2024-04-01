[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleEventsTaskGetAdvancedResponseInfo

# Class: SerpGoogleEventsTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleEventsTaskGetAdvancedResponseInfo`**

## Implements

- [`ISerpGoogleEventsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleEventsTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleEventsTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](SerpGoogleEventsTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](SerpGoogleEventsTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](SerpGoogleEventsTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleEventsTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleEventsTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](SerpGoogleEventsTaskGetAdvancedResponseInfo.md#time)
- [version](SerpGoogleEventsTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](SerpGoogleEventsTaskGetAdvancedResponseInfo.md#init)
- [toJSON](SerpGoogleEventsTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](SerpGoogleEventsTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleEventsTaskGetAdvancedResponseInfo**(`data?`): [`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleEventsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md) |

#### Returns

[`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:45762

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md).[cost](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md#cost)

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

[ISerpGoogleEventsTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md#status_code)

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

[ISerpGoogleEventsTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpGoogleEventsTaskGetAdvancedTaskInfo`](SerpGoogleEventsTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:45758

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md).[time](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md).[version](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md#version)

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

main.ts:45766

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

main.ts:45788

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:45781
