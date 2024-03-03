[Documentation](../README.md) / [Exports](../modules.md) / OnPageLighthouseTaskPostResponseInfo

# Class: OnPageLighthouseTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`OnPageLighthouseTaskPostResponseInfo`**

## Implements

- [`IOnPageLighthouseTaskPostResponseInfo`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageLighthouseTaskPostResponseInfo.md#constructor)

### Properties

- [cost](OnPageLighthouseTaskPostResponseInfo.md#cost)
- [status\_code](OnPageLighthouseTaskPostResponseInfo.md#status_code)
- [status\_message](OnPageLighthouseTaskPostResponseInfo.md#status_message)
- [tasks](OnPageLighthouseTaskPostResponseInfo.md#tasks)
- [tasks\_count](OnPageLighthouseTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](OnPageLighthouseTaskPostResponseInfo.md#tasks_error)
- [time](OnPageLighthouseTaskPostResponseInfo.md#time)
- [version](OnPageLighthouseTaskPostResponseInfo.md#version)

### Methods

- [init](OnPageLighthouseTaskPostResponseInfo.md#init)
- [toJSON](OnPageLighthouseTaskPostResponseInfo.md#tojson)
- [fromJS](OnPageLighthouseTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageLighthouseTaskPostResponseInfo**(`data?`): [`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageLighthouseTaskPostResponseInfo`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md) |

#### Returns

[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:154510

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageLighthouseTaskPostResponseInfo](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md).[cost](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:22652

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IOnPageLighthouseTaskPostResponseInfo](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md).[status_code](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:22645

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IOnPageLighthouseTaskPostResponseInfo](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md).[status_message](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`OnPageLighthouseTaskPostTaskInfo`](OnPageLighthouseTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageLighthouseTaskPostResponseInfo](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md).[tasks](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:154506

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageLighthouseTaskPostResponseInfo](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md).[tasks_count](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageLighthouseTaskPostResponseInfo](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md).[tasks_error](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageLighthouseTaskPostResponseInfo](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md).[time](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageLighthouseTaskPostResponseInfo](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md).[version](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:22642

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

main.ts:154514

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

main.ts:154536

___

### fromJS

▸ **fromJS**(`data`): [`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:154529
