[Documentation](../README.md) / [Exports](../modules.md) / OnPageLighthouseAuditsResponseInfo

# Class: OnPageLighthouseAuditsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`OnPageLighthouseAuditsResponseInfo`**

## Implements

- [`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageLighthouseAuditsResponseInfo.md#constructor)

### Properties

- [cost](OnPageLighthouseAuditsResponseInfo.md#cost)
- [status\_code](OnPageLighthouseAuditsResponseInfo.md#status_code)
- [status\_message](OnPageLighthouseAuditsResponseInfo.md#status_message)
- [tasks](OnPageLighthouseAuditsResponseInfo.md#tasks)
- [tasks\_count](OnPageLighthouseAuditsResponseInfo.md#tasks_count)
- [tasks\_error](OnPageLighthouseAuditsResponseInfo.md#tasks_error)
- [time](OnPageLighthouseAuditsResponseInfo.md#time)
- [version](OnPageLighthouseAuditsResponseInfo.md#version)

### Methods

- [init](OnPageLighthouseAuditsResponseInfo.md#init)
- [toJSON](OnPageLighthouseAuditsResponseInfo.md#tojson)
- [fromJS](OnPageLighthouseAuditsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageLighthouseAuditsResponseInfo**(`data?`): [`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md) |

#### Returns

[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:159225

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageLighthouseAuditsResponseInfo](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[cost](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#cost)

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

[IOnPageLighthouseAuditsResponseInfo](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[status_code](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#status_code)

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

[IOnPageLighthouseAuditsResponseInfo](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[status_message](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`OnPageLighthouseAuditsTaskInfo`](OnPageLighthouseAuditsTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageLighthouseAuditsResponseInfo](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[tasks](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#tasks)

#### Defined in

main.ts:159221

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageLighthouseAuditsResponseInfo](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[tasks_count](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageLighthouseAuditsResponseInfo](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[tasks_error](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageLighthouseAuditsResponseInfo](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[time](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageLighthouseAuditsResponseInfo](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[version](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#version)

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

main.ts:159229

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

main.ts:159251

___

### fromJS

▸ **fromJS**(`data`): [`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:159244
