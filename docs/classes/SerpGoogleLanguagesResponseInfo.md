[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleLanguagesResponseInfo

# Class: SerpGoogleLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleLanguagesResponseInfo`**

## Implements

- [`ISerpGoogleLanguagesResponseInfo`](../interfaces/ISerpGoogleLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLanguagesResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleLanguagesResponseInfo.md#cost)
- [status\_code](SerpGoogleLanguagesResponseInfo.md#status_code)
- [status\_message](SerpGoogleLanguagesResponseInfo.md#status_message)
- [tasks](SerpGoogleLanguagesResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleLanguagesResponseInfo.md#tasks_error)
- [time](SerpGoogleLanguagesResponseInfo.md#time)
- [version](SerpGoogleLanguagesResponseInfo.md#version)

### Methods

- [init](SerpGoogleLanguagesResponseInfo.md#init)
- [toJSON](SerpGoogleLanguagesResponseInfo.md#tojson)
- [fromJS](SerpGoogleLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLanguagesResponseInfo**(`data?`): [`SerpGoogleLanguagesResponseInfo`](SerpGoogleLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLanguagesResponseInfo`](../interfaces/ISerpGoogleLanguagesResponseInfo.md) |

#### Returns

[`SerpGoogleLanguagesResponseInfo`](SerpGoogleLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:25090

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleLanguagesResponseInfo](../interfaces/ISerpGoogleLanguagesResponseInfo.md).[cost](../interfaces/ISerpGoogleLanguagesResponseInfo.md#cost)

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

[ISerpGoogleLanguagesResponseInfo](../interfaces/ISerpGoogleLanguagesResponseInfo.md).[status_code](../interfaces/ISerpGoogleLanguagesResponseInfo.md#status_code)

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

[ISerpGoogleLanguagesResponseInfo](../interfaces/ISerpGoogleLanguagesResponseInfo.md).[status_message](../interfaces/ISerpGoogleLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpGoogleLanguagesTaskInfo`](SerpGoogleLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleLanguagesResponseInfo](../interfaces/ISerpGoogleLanguagesResponseInfo.md).[tasks](../interfaces/ISerpGoogleLanguagesResponseInfo.md#tasks)

#### Defined in

main.ts:25086

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleLanguagesResponseInfo](../interfaces/ISerpGoogleLanguagesResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleLanguagesResponseInfo](../interfaces/ISerpGoogleLanguagesResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleLanguagesResponseInfo](../interfaces/ISerpGoogleLanguagesResponseInfo.md).[time](../interfaces/ISerpGoogleLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleLanguagesResponseInfo](../interfaces/ISerpGoogleLanguagesResponseInfo.md).[version](../interfaces/ISerpGoogleLanguagesResponseInfo.md#version)

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

main.ts:25094

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

main.ts:25116

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLanguagesResponseInfo`](SerpGoogleLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLanguagesResponseInfo`](SerpGoogleLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:25109
