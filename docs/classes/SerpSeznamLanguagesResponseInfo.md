[Documentation](../README.md) / [Exports](../modules.md) / SerpSeznamLanguagesResponseInfo

# Class: SerpSeznamLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpSeznamLanguagesResponseInfo`**

## Implements

- [`ISerpSeznamLanguagesResponseInfo`](../interfaces/ISerpSeznamLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpSeznamLanguagesResponseInfo.md#constructor)

### Properties

- [cost](SerpSeznamLanguagesResponseInfo.md#cost)
- [status\_code](SerpSeznamLanguagesResponseInfo.md#status_code)
- [status\_message](SerpSeznamLanguagesResponseInfo.md#status_message)
- [tasks](SerpSeznamLanguagesResponseInfo.md#tasks)
- [tasks\_count](SerpSeznamLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](SerpSeznamLanguagesResponseInfo.md#tasks_error)
- [time](SerpSeznamLanguagesResponseInfo.md#time)
- [version](SerpSeznamLanguagesResponseInfo.md#version)

### Methods

- [init](SerpSeznamLanguagesResponseInfo.md#init)
- [toJSON](SerpSeznamLanguagesResponseInfo.md#tojson)
- [fromJS](SerpSeznamLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpSeznamLanguagesResponseInfo**(`data?`): [`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpSeznamLanguagesResponseInfo`](../interfaces/ISerpSeznamLanguagesResponseInfo.md) |

#### Returns

[`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:71622

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpSeznamLanguagesResponseInfo](../interfaces/ISerpSeznamLanguagesResponseInfo.md).[cost](../interfaces/ISerpSeznamLanguagesResponseInfo.md#cost)

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

[ISerpSeznamLanguagesResponseInfo](../interfaces/ISerpSeznamLanguagesResponseInfo.md).[status_code](../interfaces/ISerpSeznamLanguagesResponseInfo.md#status_code)

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

[ISerpSeznamLanguagesResponseInfo](../interfaces/ISerpSeznamLanguagesResponseInfo.md).[status_message](../interfaces/ISerpSeznamLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpSeznamLanguagesTaskInfo`](SerpSeznamLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpSeznamLanguagesResponseInfo](../interfaces/ISerpSeznamLanguagesResponseInfo.md).[tasks](../interfaces/ISerpSeznamLanguagesResponseInfo.md#tasks)

#### Defined in

main.ts:71618

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpSeznamLanguagesResponseInfo](../interfaces/ISerpSeznamLanguagesResponseInfo.md).[tasks_count](../interfaces/ISerpSeznamLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpSeznamLanguagesResponseInfo](../interfaces/ISerpSeznamLanguagesResponseInfo.md).[tasks_error](../interfaces/ISerpSeznamLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpSeznamLanguagesResponseInfo](../interfaces/ISerpSeznamLanguagesResponseInfo.md).[time](../interfaces/ISerpSeznamLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpSeznamLanguagesResponseInfo](../interfaces/ISerpSeznamLanguagesResponseInfo.md).[version](../interfaces/ISerpSeznamLanguagesResponseInfo.md#version)

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

main.ts:71626

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

main.ts:71648

___

### fromJS

▸ **fromJS**(`data`): [`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:71641
