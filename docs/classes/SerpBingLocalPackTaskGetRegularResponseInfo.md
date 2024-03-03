[Documentation](../README.md) / [Exports](../modules.md) / SerpBingLocalPackTaskGetRegularResponseInfo

# Class: SerpBingLocalPackTaskGetRegularResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBingLocalPackTaskGetRegularResponseInfo`**

## Implements

- [`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackTaskGetRegularResponseInfo.md#constructor)

### Properties

- [cost](SerpBingLocalPackTaskGetRegularResponseInfo.md#cost)
- [status\_code](SerpBingLocalPackTaskGetRegularResponseInfo.md#status_code)
- [status\_message](SerpBingLocalPackTaskGetRegularResponseInfo.md#status_message)
- [tasks](SerpBingLocalPackTaskGetRegularResponseInfo.md#tasks)
- [tasks\_count](SerpBingLocalPackTaskGetRegularResponseInfo.md#tasks_count)
- [tasks\_error](SerpBingLocalPackTaskGetRegularResponseInfo.md#tasks_error)
- [time](SerpBingLocalPackTaskGetRegularResponseInfo.md#time)
- [version](SerpBingLocalPackTaskGetRegularResponseInfo.md#version)

### Methods

- [init](SerpBingLocalPackTaskGetRegularResponseInfo.md#init)
- [toJSON](SerpBingLocalPackTaskGetRegularResponseInfo.md#tojson)
- [fromJS](SerpBingLocalPackTaskGetRegularResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackTaskGetRegularResponseInfo**(`data?`): [`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackTaskGetRegularResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md) |

#### Returns

[`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:56569

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResponseInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[cost](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#cost)

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

[ISerpBingLocalPackTaskGetRegularResponseInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[status_code](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#status_code)

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

[ISerpBingLocalPackTaskGetRegularResponseInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[status_message](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpBingLocalPackTaskGetRegularTaskInfo`](SerpBingLocalPackTaskGetRegularTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResponseInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[tasks](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#tasks)

#### Defined in

main.ts:56565

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResponseInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[tasks_count](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResponseInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[tasks_error](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResponseInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[time](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResponseInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md).[version](../interfaces/ISerpBingLocalPackTaskGetRegularResponseInfo.md#version)

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

main.ts:56573

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

main.ts:56595

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:56588
