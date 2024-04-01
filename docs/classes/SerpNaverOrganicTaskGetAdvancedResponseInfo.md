[Documentation](../README.md) / [Exports](../modules.md) / SerpNaverOrganicTaskGetAdvancedResponseInfo

# Class: SerpNaverOrganicTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpNaverOrganicTaskGetAdvancedResponseInfo`**

## Implements

- [`ISerpNaverOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpNaverOrganicTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpNaverOrganicTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](SerpNaverOrganicTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](SerpNaverOrganicTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](SerpNaverOrganicTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpNaverOrganicTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpNaverOrganicTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](SerpNaverOrganicTaskGetAdvancedResponseInfo.md#time)
- [version](SerpNaverOrganicTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](SerpNaverOrganicTaskGetAdvancedResponseInfo.md#init)
- [toJSON](SerpNaverOrganicTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](SerpNaverOrganicTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpNaverOrganicTaskGetAdvancedResponseInfo**(`data?`): [`SerpNaverOrganicTaskGetAdvancedResponseInfo`](SerpNaverOrganicTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpNaverOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md) |

#### Returns

[`SerpNaverOrganicTaskGetAdvancedResponseInfo`](SerpNaverOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:70862

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md).[cost](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md#cost)

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

[ISerpNaverOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md#status_code)

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

[ISerpNaverOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpNaverOrganicTaskGetAdvancedTaskInfo`](SerpNaverOrganicTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:70858

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md).[time](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md).[version](../interfaces/ISerpNaverOrganicTaskGetAdvancedResponseInfo.md#version)

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

main.ts:70866

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

main.ts:70888

___

### fromJS

▸ **fromJS**(`data`): [`SerpNaverOrganicTaskGetAdvancedResponseInfo`](SerpNaverOrganicTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpNaverOrganicTaskGetAdvancedResponseInfo`](SerpNaverOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:70881
