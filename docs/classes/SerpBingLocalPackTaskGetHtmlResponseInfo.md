[Documentation](../README.md) / [Exports](../modules.md) / SerpBingLocalPackTaskGetHtmlResponseInfo

# Class: SerpBingLocalPackTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBingLocalPackTaskGetHtmlResponseInfo`**

## Implements

- [`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](SerpBingLocalPackTaskGetHtmlResponseInfo.md#cost)
- [status\_code](SerpBingLocalPackTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](SerpBingLocalPackTaskGetHtmlResponseInfo.md#status_message)
- [tasks](SerpBingLocalPackTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](SerpBingLocalPackTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](SerpBingLocalPackTaskGetHtmlResponseInfo.md#tasks_error)
- [time](SerpBingLocalPackTaskGetHtmlResponseInfo.md#time)
- [version](SerpBingLocalPackTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](SerpBingLocalPackTaskGetHtmlResponseInfo.md#init)
- [toJSON](SerpBingLocalPackTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](SerpBingLocalPackTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackTaskGetHtmlResponseInfo**(`data?`): [`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackTaskGetHtmlResponseInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md) |

#### Returns

[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:59018

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlResponseInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[cost](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#cost)

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

[ISerpBingLocalPackTaskGetHtmlResponseInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[status_code](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#status_code)

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

[ISerpBingLocalPackTaskGetHtmlResponseInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[status_message](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpBingLocalPackTaskGetHtmlTaskInfo`](SerpBingLocalPackTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlResponseInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[tasks](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

main.ts:59014

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlResponseInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlResponseInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlResponseInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[time](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlResponseInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md).[version](../interfaces/ISerpBingLocalPackTaskGetHtmlResponseInfo.md#version)

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

main.ts:59022

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

main.ts:59044

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:59037
