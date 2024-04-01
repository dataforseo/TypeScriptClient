[Documentation](../README.md) / [Exports](../modules.md) / OnPageContentParsingLiveResponseInfo

# Class: OnPageContentParsingLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`OnPageContentParsingLiveResponseInfo`**

## Implements

- [`IOnPageContentParsingLiveResponseInfo`](../interfaces/IOnPageContentParsingLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageContentParsingLiveResponseInfo.md#constructor)

### Properties

- [cost](OnPageContentParsingLiveResponseInfo.md#cost)
- [status\_code](OnPageContentParsingLiveResponseInfo.md#status_code)
- [status\_message](OnPageContentParsingLiveResponseInfo.md#status_message)
- [tasks](OnPageContentParsingLiveResponseInfo.md#tasks)
- [tasks\_count](OnPageContentParsingLiveResponseInfo.md#tasks_count)
- [tasks\_error](OnPageContentParsingLiveResponseInfo.md#tasks_error)
- [time](OnPageContentParsingLiveResponseInfo.md#time)
- [version](OnPageContentParsingLiveResponseInfo.md#version)

### Methods

- [init](OnPageContentParsingLiveResponseInfo.md#init)
- [toJSON](OnPageContentParsingLiveResponseInfo.md#tojson)
- [fromJS](OnPageContentParsingLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageContentParsingLiveResponseInfo**(`data?`): [`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageContentParsingLiveResponseInfo`](../interfaces/IOnPageContentParsingLiveResponseInfo.md) |

#### Returns

[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:158363

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageContentParsingLiveResponseInfo](../interfaces/IOnPageContentParsingLiveResponseInfo.md).[cost](../interfaces/IOnPageContentParsingLiveResponseInfo.md#cost)

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

[IOnPageContentParsingLiveResponseInfo](../interfaces/IOnPageContentParsingLiveResponseInfo.md).[status_code](../interfaces/IOnPageContentParsingLiveResponseInfo.md#status_code)

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

[IOnPageContentParsingLiveResponseInfo](../interfaces/IOnPageContentParsingLiveResponseInfo.md).[status_message](../interfaces/IOnPageContentParsingLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`OnPageContentParsingLiveTaskInfo`](OnPageContentParsingLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageContentParsingLiveResponseInfo](../interfaces/IOnPageContentParsingLiveResponseInfo.md).[tasks](../interfaces/IOnPageContentParsingLiveResponseInfo.md#tasks)

#### Defined in

main.ts:158359

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageContentParsingLiveResponseInfo](../interfaces/IOnPageContentParsingLiveResponseInfo.md).[tasks_count](../interfaces/IOnPageContentParsingLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageContentParsingLiveResponseInfo](../interfaces/IOnPageContentParsingLiveResponseInfo.md).[tasks_error](../interfaces/IOnPageContentParsingLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageContentParsingLiveResponseInfo](../interfaces/IOnPageContentParsingLiveResponseInfo.md).[time](../interfaces/IOnPageContentParsingLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageContentParsingLiveResponseInfo](../interfaces/IOnPageContentParsingLiveResponseInfo.md).[version](../interfaces/IOnPageContentParsingLiveResponseInfo.md#version)

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

main.ts:158367

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

main.ts:158389

___

### fromJS

▸ **fromJS**(`data`): [`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:158382
