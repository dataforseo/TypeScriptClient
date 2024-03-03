[Documentation](../README.md) / [Exports](../modules.md) / SerpBingOrganicTaskGetAdvancedResponseInfo

# Class: SerpBingOrganicTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBingOrganicTaskGetAdvancedResponseInfo`**

## Implements

- [`ISerpBingOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpBingOrganicTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](SerpBingOrganicTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](SerpBingOrganicTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](SerpBingOrganicTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpBingOrganicTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpBingOrganicTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](SerpBingOrganicTaskGetAdvancedResponseInfo.md#time)
- [version](SerpBingOrganicTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](SerpBingOrganicTaskGetAdvancedResponseInfo.md#init)
- [toJSON](SerpBingOrganicTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](SerpBingOrganicTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicTaskGetAdvancedResponseInfo**(`data?`): [`SerpBingOrganicTaskGetAdvancedResponseInfo`](SerpBingOrganicTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md) |

#### Returns

[`SerpBingOrganicTaskGetAdvancedResponseInfo`](SerpBingOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:54823

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md).[cost](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md#cost)

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

[ISerpBingOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md#status_code)

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

[ISerpBingOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpBingOrganicTaskGetAdvancedTaskInfo`](SerpBingOrganicTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:54819

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md).[time](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md).[version](../interfaces/ISerpBingOrganicTaskGetAdvancedResponseInfo.md#version)

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

main.ts:54827

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

main.ts:54849

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicTaskGetAdvancedResponseInfo`](SerpBingOrganicTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicTaskGetAdvancedResponseInfo`](SerpBingOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:54842
