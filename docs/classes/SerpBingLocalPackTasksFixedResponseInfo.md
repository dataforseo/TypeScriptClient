[Documentation](../README.md) / [Exports](../modules.md) / SerpBingLocalPackTasksFixedResponseInfo

# Class: SerpBingLocalPackTasksFixedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBingLocalPackTasksFixedResponseInfo`**

## Implements

- [`ISerpBingLocalPackTasksFixedResponseInfo`](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackTasksFixedResponseInfo.md#constructor)

### Properties

- [cost](SerpBingLocalPackTasksFixedResponseInfo.md#cost)
- [status\_code](SerpBingLocalPackTasksFixedResponseInfo.md#status_code)
- [status\_message](SerpBingLocalPackTasksFixedResponseInfo.md#status_message)
- [tasks](SerpBingLocalPackTasksFixedResponseInfo.md#tasks)
- [tasks\_count](SerpBingLocalPackTasksFixedResponseInfo.md#tasks_count)
- [tasks\_error](SerpBingLocalPackTasksFixedResponseInfo.md#tasks_error)
- [time](SerpBingLocalPackTasksFixedResponseInfo.md#time)
- [version](SerpBingLocalPackTasksFixedResponseInfo.md#version)

### Methods

- [init](SerpBingLocalPackTasksFixedResponseInfo.md#init)
- [toJSON](SerpBingLocalPackTasksFixedResponseInfo.md#tojson)
- [fromJS](SerpBingLocalPackTasksFixedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackTasksFixedResponseInfo**(`data?`): [`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackTasksFixedResponseInfo`](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md) |

#### Returns

[`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:56309

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingLocalPackTasksFixedResponseInfo](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md).[cost](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md#cost)

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

[ISerpBingLocalPackTasksFixedResponseInfo](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md).[status_code](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md#status_code)

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

[ISerpBingLocalPackTasksFixedResponseInfo](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md).[status_message](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpBingLocalPackTasksFixedTaskInfo`](SerpBingLocalPackTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBingLocalPackTasksFixedResponseInfo](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md).[tasks](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md#tasks)

#### Defined in

main.ts:56305

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBingLocalPackTasksFixedResponseInfo](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md).[tasks_count](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBingLocalPackTasksFixedResponseInfo](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md).[tasks_error](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBingLocalPackTasksFixedResponseInfo](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md).[time](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBingLocalPackTasksFixedResponseInfo](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md).[version](../interfaces/ISerpBingLocalPackTasksFixedResponseInfo.md#version)

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

main.ts:56313

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

main.ts:56335

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:56328
