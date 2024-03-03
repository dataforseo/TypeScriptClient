[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleNewsTaskPostResponseInfo

# Class: SerpGoogleNewsTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleNewsTaskPostResponseInfo`**

## Implements

- [`ISerpGoogleNewsTaskPostResponseInfo`](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleNewsTaskPostResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleNewsTaskPostResponseInfo.md#cost)
- [status\_code](SerpGoogleNewsTaskPostResponseInfo.md#status_code)
- [status\_message](SerpGoogleNewsTaskPostResponseInfo.md#status_message)
- [tasks](SerpGoogleNewsTaskPostResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleNewsTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleNewsTaskPostResponseInfo.md#tasks_error)
- [time](SerpGoogleNewsTaskPostResponseInfo.md#time)
- [version](SerpGoogleNewsTaskPostResponseInfo.md#version)

### Methods

- [init](SerpGoogleNewsTaskPostResponseInfo.md#init)
- [toJSON](SerpGoogleNewsTaskPostResponseInfo.md#tojson)
- [fromJS](SerpGoogleNewsTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleNewsTaskPostResponseInfo**(`data?`): [`SerpGoogleNewsTaskPostResponseInfo`](SerpGoogleNewsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleNewsTaskPostResponseInfo`](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md) |

#### Returns

[`SerpGoogleNewsTaskPostResponseInfo`](SerpGoogleNewsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:42157

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleNewsTaskPostResponseInfo](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md).[cost](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md#cost)

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

[ISerpGoogleNewsTaskPostResponseInfo](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md).[status_code](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md#status_code)

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

[ISerpGoogleNewsTaskPostResponseInfo](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md).[status_message](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpGoogleNewsTaskPostTaskInfo`](SerpGoogleNewsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleNewsTaskPostResponseInfo](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md).[tasks](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:42153

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleNewsTaskPostResponseInfo](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleNewsTaskPostResponseInfo](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleNewsTaskPostResponseInfo](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md).[time](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleNewsTaskPostResponseInfo](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md).[version](../interfaces/ISerpGoogleNewsTaskPostResponseInfo.md#version)

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

main.ts:42161

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

main.ts:42183

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleNewsTaskPostResponseInfo`](SerpGoogleNewsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleNewsTaskPostResponseInfo`](SerpGoogleNewsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:42176
