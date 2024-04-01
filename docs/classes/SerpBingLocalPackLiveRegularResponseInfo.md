[Documentation](../README.md) / [Exports](../modules.md) / SerpBingLocalPackLiveRegularResponseInfo

# Class: SerpBingLocalPackLiveRegularResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBingLocalPackLiveRegularResponseInfo`**

## Implements

- [`ISerpBingLocalPackLiveRegularResponseInfo`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackLiveRegularResponseInfo.md#constructor)

### Properties

- [cost](SerpBingLocalPackLiveRegularResponseInfo.md#cost)
- [status\_code](SerpBingLocalPackLiveRegularResponseInfo.md#status_code)
- [status\_message](SerpBingLocalPackLiveRegularResponseInfo.md#status_message)
- [tasks](SerpBingLocalPackLiveRegularResponseInfo.md#tasks)
- [tasks\_count](SerpBingLocalPackLiveRegularResponseInfo.md#tasks_count)
- [tasks\_error](SerpBingLocalPackLiveRegularResponseInfo.md#tasks_error)
- [time](SerpBingLocalPackLiveRegularResponseInfo.md#time)
- [version](SerpBingLocalPackLiveRegularResponseInfo.md#version)

### Methods

- [init](SerpBingLocalPackLiveRegularResponseInfo.md#init)
- [toJSON](SerpBingLocalPackLiveRegularResponseInfo.md#tojson)
- [fromJS](SerpBingLocalPackLiveRegularResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackLiveRegularResponseInfo**(`data?`): [`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackLiveRegularResponseInfo`](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md) |

#### Returns

[`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:59278

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingLocalPackLiveRegularResponseInfo](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md).[cost](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md#cost)

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

[ISerpBingLocalPackLiveRegularResponseInfo](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md).[status_code](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md#status_code)

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

[ISerpBingLocalPackLiveRegularResponseInfo](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md).[status_message](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpBingLocalPackLiveRegularTaskInfo`](SerpBingLocalPackLiveRegularTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBingLocalPackLiveRegularResponseInfo](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md).[tasks](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md#tasks)

#### Defined in

main.ts:59274

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBingLocalPackLiveRegularResponseInfo](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md).[tasks_count](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBingLocalPackLiveRegularResponseInfo](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md).[tasks_error](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBingLocalPackLiveRegularResponseInfo](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md).[time](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBingLocalPackLiveRegularResponseInfo](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md).[version](../interfaces/ISerpBingLocalPackLiveRegularResponseInfo.md#version)

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

main.ts:59282

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

main.ts:59304

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:59297
