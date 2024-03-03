[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleLocationsResponseInfo

# Class: SerpGoogleLocationsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleLocationsResponseInfo`**

## Implements

- [`ISerpGoogleLocationsResponseInfo`](../interfaces/ISerpGoogleLocationsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocationsResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleLocationsResponseInfo.md#cost)
- [status\_code](SerpGoogleLocationsResponseInfo.md#status_code)
- [status\_message](SerpGoogleLocationsResponseInfo.md#status_message)
- [tasks](SerpGoogleLocationsResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleLocationsResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleLocationsResponseInfo.md#tasks_error)
- [time](SerpGoogleLocationsResponseInfo.md#time)
- [version](SerpGoogleLocationsResponseInfo.md#version)

### Methods

- [init](SerpGoogleLocationsResponseInfo.md#init)
- [toJSON](SerpGoogleLocationsResponseInfo.md#tojson)
- [fromJS](SerpGoogleLocationsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocationsResponseInfo**(`data?`): [`SerpGoogleLocationsResponseInfo`](SerpGoogleLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocationsResponseInfo`](../interfaces/ISerpGoogleLocationsResponseInfo.md) |

#### Returns

[`SerpGoogleLocationsResponseInfo`](SerpGoogleLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:24349

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleLocationsResponseInfo](../interfaces/ISerpGoogleLocationsResponseInfo.md).[cost](../interfaces/ISerpGoogleLocationsResponseInfo.md#cost)

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

[ISerpGoogleLocationsResponseInfo](../interfaces/ISerpGoogleLocationsResponseInfo.md).[status_code](../interfaces/ISerpGoogleLocationsResponseInfo.md#status_code)

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

[ISerpGoogleLocationsResponseInfo](../interfaces/ISerpGoogleLocationsResponseInfo.md).[status_message](../interfaces/ISerpGoogleLocationsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpGoogleLocationsTaskInfo`](SerpGoogleLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleLocationsResponseInfo](../interfaces/ISerpGoogleLocationsResponseInfo.md).[tasks](../interfaces/ISerpGoogleLocationsResponseInfo.md#tasks)

#### Defined in

main.ts:24345

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleLocationsResponseInfo](../interfaces/ISerpGoogleLocationsResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleLocationsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleLocationsResponseInfo](../interfaces/ISerpGoogleLocationsResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleLocationsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleLocationsResponseInfo](../interfaces/ISerpGoogleLocationsResponseInfo.md).[time](../interfaces/ISerpGoogleLocationsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleLocationsResponseInfo](../interfaces/ISerpGoogleLocationsResponseInfo.md).[version](../interfaces/ISerpGoogleLocationsResponseInfo.md#version)

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

main.ts:24353

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

main.ts:24375

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocationsResponseInfo`](SerpGoogleLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocationsResponseInfo`](SerpGoogleLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:24368
