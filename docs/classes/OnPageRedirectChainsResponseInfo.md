[Documentation](../README.md) / [Exports](../modules.md) / OnPageRedirectChainsResponseInfo

# Class: OnPageRedirectChainsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`OnPageRedirectChainsResponseInfo`**

## Implements

- [`IOnPageRedirectChainsResponseInfo`](../interfaces/IOnPageRedirectChainsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageRedirectChainsResponseInfo.md#constructor)

### Properties

- [cost](OnPageRedirectChainsResponseInfo.md#cost)
- [status\_code](OnPageRedirectChainsResponseInfo.md#status_code)
- [status\_message](OnPageRedirectChainsResponseInfo.md#status_message)
- [tasks](OnPageRedirectChainsResponseInfo.md#tasks)
- [tasks\_count](OnPageRedirectChainsResponseInfo.md#tasks_count)
- [tasks\_error](OnPageRedirectChainsResponseInfo.md#tasks_error)
- [time](OnPageRedirectChainsResponseInfo.md#time)
- [version](OnPageRedirectChainsResponseInfo.md#version)

### Methods

- [init](OnPageRedirectChainsResponseInfo.md#init)
- [toJSON](OnPageRedirectChainsResponseInfo.md#tojson)
- [fromJS](OnPageRedirectChainsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageRedirectChainsResponseInfo**(`data?`): [`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageRedirectChainsResponseInfo`](../interfaces/IOnPageRedirectChainsResponseInfo.md) |

#### Returns

[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:154631

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageRedirectChainsResponseInfo](../interfaces/IOnPageRedirectChainsResponseInfo.md).[cost](../interfaces/IOnPageRedirectChainsResponseInfo.md#cost)

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

[IOnPageRedirectChainsResponseInfo](../interfaces/IOnPageRedirectChainsResponseInfo.md).[status_code](../interfaces/IOnPageRedirectChainsResponseInfo.md#status_code)

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

[IOnPageRedirectChainsResponseInfo](../interfaces/IOnPageRedirectChainsResponseInfo.md).[status_message](../interfaces/IOnPageRedirectChainsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`OnPageRedirectChainsTaskInfo`](OnPageRedirectChainsTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageRedirectChainsResponseInfo](../interfaces/IOnPageRedirectChainsResponseInfo.md).[tasks](../interfaces/IOnPageRedirectChainsResponseInfo.md#tasks)

#### Defined in

main.ts:154627

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageRedirectChainsResponseInfo](../interfaces/IOnPageRedirectChainsResponseInfo.md).[tasks_count](../interfaces/IOnPageRedirectChainsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageRedirectChainsResponseInfo](../interfaces/IOnPageRedirectChainsResponseInfo.md).[tasks_error](../interfaces/IOnPageRedirectChainsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageRedirectChainsResponseInfo](../interfaces/IOnPageRedirectChainsResponseInfo.md).[time](../interfaces/IOnPageRedirectChainsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageRedirectChainsResponseInfo](../interfaces/IOnPageRedirectChainsResponseInfo.md).[version](../interfaces/IOnPageRedirectChainsResponseInfo.md#version)

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

main.ts:154635

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

main.ts:154657

___

### fromJS

▸ **fromJS**(`data`): [`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:154650
