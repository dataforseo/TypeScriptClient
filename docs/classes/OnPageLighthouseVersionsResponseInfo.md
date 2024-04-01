[Documentation](../README.md) / [Exports](../modules.md) / OnPageLighthouseVersionsResponseInfo

# Class: OnPageLighthouseVersionsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`OnPageLighthouseVersionsResponseInfo`**

## Implements

- [`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageLighthouseVersionsResponseInfo.md#constructor)

### Properties

- [cost](OnPageLighthouseVersionsResponseInfo.md#cost)
- [status\_code](OnPageLighthouseVersionsResponseInfo.md#status_code)
- [status\_message](OnPageLighthouseVersionsResponseInfo.md#status_message)
- [tasks](OnPageLighthouseVersionsResponseInfo.md#tasks)
- [tasks\_count](OnPageLighthouseVersionsResponseInfo.md#tasks_count)
- [tasks\_error](OnPageLighthouseVersionsResponseInfo.md#tasks_error)
- [time](OnPageLighthouseVersionsResponseInfo.md#time)
- [version](OnPageLighthouseVersionsResponseInfo.md#version)

### Methods

- [init](OnPageLighthouseVersionsResponseInfo.md#init)
- [toJSON](OnPageLighthouseVersionsResponseInfo.md#tojson)
- [fromJS](OnPageLighthouseVersionsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageLighthouseVersionsResponseInfo**(`data?`): [`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md) |

#### Returns

[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:159449

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageLighthouseVersionsResponseInfo](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[cost](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#cost)

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

[IOnPageLighthouseVersionsResponseInfo](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[status_code](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#status_code)

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

[IOnPageLighthouseVersionsResponseInfo](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[status_message](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`OnPageLighthouseVersionsTaskInfo`](OnPageLighthouseVersionsTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageLighthouseVersionsResponseInfo](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[tasks](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#tasks)

#### Defined in

main.ts:159445

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageLighthouseVersionsResponseInfo](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[tasks_count](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageLighthouseVersionsResponseInfo](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[tasks_error](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageLighthouseVersionsResponseInfo](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[time](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageLighthouseVersionsResponseInfo](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[version](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#version)

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

main.ts:159453

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

main.ts:159475

___

### fromJS

▸ **fromJS**(`data`): [`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:159468
