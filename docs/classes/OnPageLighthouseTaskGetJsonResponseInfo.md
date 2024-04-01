[Documentation](../README.md) / [Exports](../modules.md) / OnPageLighthouseTaskGetJsonResponseInfo

# Class: OnPageLighthouseTaskGetJsonResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`OnPageLighthouseTaskGetJsonResponseInfo`**

## Implements

- [`IOnPageLighthouseTaskGetJsonResponseInfo`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageLighthouseTaskGetJsonResponseInfo.md#constructor)

### Properties

- [cost](OnPageLighthouseTaskGetJsonResponseInfo.md#cost)
- [status\_code](OnPageLighthouseTaskGetJsonResponseInfo.md#status_code)
- [status\_message](OnPageLighthouseTaskGetJsonResponseInfo.md#status_message)
- [tasks](OnPageLighthouseTaskGetJsonResponseInfo.md#tasks)
- [tasks\_count](OnPageLighthouseTaskGetJsonResponseInfo.md#tasks_count)
- [tasks\_error](OnPageLighthouseTaskGetJsonResponseInfo.md#tasks_error)
- [time](OnPageLighthouseTaskGetJsonResponseInfo.md#time)
- [version](OnPageLighthouseTaskGetJsonResponseInfo.md#version)

### Methods

- [init](OnPageLighthouseTaskGetJsonResponseInfo.md#init)
- [toJSON](OnPageLighthouseTaskGetJsonResponseInfo.md#tojson)
- [fromJS](OnPageLighthouseTaskGetJsonResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageLighthouseTaskGetJsonResponseInfo**(`data?`): [`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageLighthouseTaskGetJsonResponseInfo`](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md) |

#### Returns

[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:160081

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageLighthouseTaskGetJsonResponseInfo](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md).[cost](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md#cost)

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

[IOnPageLighthouseTaskGetJsonResponseInfo](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md).[status_code](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md#status_code)

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

[IOnPageLighthouseTaskGetJsonResponseInfo](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md).[status_message](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`OnPageLighthouseTaskGetJsonTaskInfo`](OnPageLighthouseTaskGetJsonTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageLighthouseTaskGetJsonResponseInfo](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md).[tasks](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md#tasks)

#### Defined in

main.ts:160077

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageLighthouseTaskGetJsonResponseInfo](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md).[tasks_count](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageLighthouseTaskGetJsonResponseInfo](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md).[tasks_error](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageLighthouseTaskGetJsonResponseInfo](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md).[time](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageLighthouseTaskGetJsonResponseInfo](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md).[version](../interfaces/IOnPageLighthouseTaskGetJsonResponseInfo.md#version)

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

main.ts:160085

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

main.ts:160107

___

### fromJS

▸ **fromJS**(`data`): [`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:160100
