[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleAutocompleteLiveAdvancedResponseInfo

# Class: SerpGoogleAutocompleteLiveAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleAutocompleteLiveAdvancedResponseInfo`**

## Implements

- [`ISerpGoogleAutocompleteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md#cost)
- [status\_code](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md#status_code)
- [status\_message](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md#status_message)
- [tasks](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md#tasks_error)
- [time](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md#time)
- [version](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md#version)

### Methods

- [init](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md#init)
- [toJSON](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md#tojson)
- [fromJS](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleAutocompleteLiveAdvancedResponseInfo**(`data?`): [`SerpGoogleAutocompleteLiveAdvancedResponseInfo`](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleAutocompleteLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md) |

#### Returns

[`SerpGoogleAutocompleteLiveAdvancedResponseInfo`](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:52076

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResponseInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md).[cost](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md#cost)

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

[ISerpGoogleAutocompleteLiveAdvancedResponseInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md).[status_code](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md#status_code)

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

[ISerpGoogleAutocompleteLiveAdvancedResponseInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md).[status_message](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpGoogleAutocompleteLiveAdvancedTaskInfo`](SerpGoogleAutocompleteLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResponseInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md).[tasks](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:52072

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResponseInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResponseInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResponseInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md).[time](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResponseInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md).[version](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResponseInfo.md#version)

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

main.ts:52080

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

main.ts:52102

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleAutocompleteLiveAdvancedResponseInfo`](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleAutocompleteLiveAdvancedResponseInfo`](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:52095
