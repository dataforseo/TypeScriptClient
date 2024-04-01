[Documentation](../README.md) / [Exports](../modules.md) / SerpYahooLanguagesResponseInfo

# Class: SerpYahooLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpYahooLanguagesResponseInfo`**

## Implements

- [`ISerpYahooLanguagesResponseInfo`](../interfaces/ISerpYahooLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooLanguagesResponseInfo.md#constructor)

### Properties

- [cost](SerpYahooLanguagesResponseInfo.md#cost)
- [status\_code](SerpYahooLanguagesResponseInfo.md#status_code)
- [status\_message](SerpYahooLanguagesResponseInfo.md#status_message)
- [tasks](SerpYahooLanguagesResponseInfo.md#tasks)
- [tasks\_count](SerpYahooLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](SerpYahooLanguagesResponseInfo.md#tasks_error)
- [time](SerpYahooLanguagesResponseInfo.md#time)
- [version](SerpYahooLanguagesResponseInfo.md#version)

### Methods

- [init](SerpYahooLanguagesResponseInfo.md#init)
- [toJSON](SerpYahooLanguagesResponseInfo.md#tojson)
- [fromJS](SerpYahooLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooLanguagesResponseInfo**(`data?`): [`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooLanguagesResponseInfo`](../interfaces/ISerpYahooLanguagesResponseInfo.md) |

#### Returns

[`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:65520

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYahooLanguagesResponseInfo](../interfaces/ISerpYahooLanguagesResponseInfo.md).[cost](../interfaces/ISerpYahooLanguagesResponseInfo.md#cost)

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

[ISerpYahooLanguagesResponseInfo](../interfaces/ISerpYahooLanguagesResponseInfo.md).[status_code](../interfaces/ISerpYahooLanguagesResponseInfo.md#status_code)

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

[ISerpYahooLanguagesResponseInfo](../interfaces/ISerpYahooLanguagesResponseInfo.md).[status_message](../interfaces/ISerpYahooLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpYahooLanguagesTaskInfo`](SerpYahooLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYahooLanguagesResponseInfo](../interfaces/ISerpYahooLanguagesResponseInfo.md).[tasks](../interfaces/ISerpYahooLanguagesResponseInfo.md#tasks)

#### Defined in

main.ts:65516

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYahooLanguagesResponseInfo](../interfaces/ISerpYahooLanguagesResponseInfo.md).[tasks_count](../interfaces/ISerpYahooLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYahooLanguagesResponseInfo](../interfaces/ISerpYahooLanguagesResponseInfo.md).[tasks_error](../interfaces/ISerpYahooLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYahooLanguagesResponseInfo](../interfaces/ISerpYahooLanguagesResponseInfo.md).[time](../interfaces/ISerpYahooLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYahooLanguagesResponseInfo](../interfaces/ISerpYahooLanguagesResponseInfo.md).[version](../interfaces/ISerpYahooLanguagesResponseInfo.md#version)

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

main.ts:65524

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

main.ts:65546

___

### fromJS

▸ **fromJS**(`data`): [`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:65539
