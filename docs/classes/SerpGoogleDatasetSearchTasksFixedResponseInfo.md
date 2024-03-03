[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetSearchTasksFixedResponseInfo

# Class: SerpGoogleDatasetSearchTasksFixedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleDatasetSearchTasksFixedResponseInfo`**

## Implements

- [`ISerpGoogleDatasetSearchTasksFixedResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetSearchTasksFixedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleDatasetSearchTasksFixedResponseInfo.md#cost)
- [status\_code](SerpGoogleDatasetSearchTasksFixedResponseInfo.md#status_code)
- [status\_message](SerpGoogleDatasetSearchTasksFixedResponseInfo.md#status_message)
- [tasks](SerpGoogleDatasetSearchTasksFixedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleDatasetSearchTasksFixedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleDatasetSearchTasksFixedResponseInfo.md#tasks_error)
- [time](SerpGoogleDatasetSearchTasksFixedResponseInfo.md#time)
- [version](SerpGoogleDatasetSearchTasksFixedResponseInfo.md#version)

### Methods

- [init](SerpGoogleDatasetSearchTasksFixedResponseInfo.md#init)
- [toJSON](SerpGoogleDatasetSearchTasksFixedResponseInfo.md#tojson)
- [fromJS](SerpGoogleDatasetSearchTasksFixedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetSearchTasksFixedResponseInfo**(`data?`): [`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetSearchTasksFixedResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md) |

#### Returns

[`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:50653

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResponseInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md).[cost](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md#cost)

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

[ISerpGoogleDatasetSearchTasksFixedResponseInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md).[status_code](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md#status_code)

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

[ISerpGoogleDatasetSearchTasksFixedResponseInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md).[status_message](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpGoogleDatasetSearchTasksFixedTaskInfo`](SerpGoogleDatasetSearchTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResponseInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md).[tasks](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md#tasks)

#### Defined in

main.ts:50649

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResponseInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResponseInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResponseInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md).[time](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleDatasetSearchTasksFixedResponseInfo](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md).[version](../interfaces/ISerpGoogleDatasetSearchTasksFixedResponseInfo.md#version)

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

main.ts:50657

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

main.ts:50679

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:50672
