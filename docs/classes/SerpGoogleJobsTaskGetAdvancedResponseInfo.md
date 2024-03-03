[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleJobsTaskGetAdvancedResponseInfo

# Class: SerpGoogleJobsTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleJobsTaskGetAdvancedResponseInfo`**

## Implements

- [`ISerpGoogleJobsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleJobsTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleJobsTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](SerpGoogleJobsTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](SerpGoogleJobsTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](SerpGoogleJobsTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleJobsTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleJobsTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](SerpGoogleJobsTaskGetAdvancedResponseInfo.md#time)
- [version](SerpGoogleJobsTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](SerpGoogleJobsTaskGetAdvancedResponseInfo.md#init)
- [toJSON](SerpGoogleJobsTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](SerpGoogleJobsTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleJobsTaskGetAdvancedResponseInfo**(`data?`): [`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleJobsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md) |

#### Returns

[`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:49625

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md).[cost](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md#cost)

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

[ISerpGoogleJobsTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md#status_code)

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

[ISerpGoogleJobsTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpGoogleJobsTaskGetAdvancedTaskInfo`](SerpGoogleJobsTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:49621

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md).[time](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleJobsTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md).[version](../interfaces/ISerpGoogleJobsTaskGetAdvancedResponseInfo.md#version)

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

main.ts:49629

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

main.ts:49651

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:49644
