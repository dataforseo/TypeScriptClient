[Documentation](../README.md) / [Exports](../modules.md) / SerpScreenshotResponseInfo

# Class: SerpScreenshotResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpScreenshotResponseInfo`**

## Implements

- [`ISerpScreenshotResponseInfo`](../interfaces/ISerpScreenshotResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpScreenshotResponseInfo.md#constructor)

### Properties

- [cost](SerpScreenshotResponseInfo.md#cost)
- [status\_code](SerpScreenshotResponseInfo.md#status_code)
- [status\_message](SerpScreenshotResponseInfo.md#status_message)
- [tasks](SerpScreenshotResponseInfo.md#tasks)
- [tasks\_count](SerpScreenshotResponseInfo.md#tasks_count)
- [tasks\_error](SerpScreenshotResponseInfo.md#tasks_error)
- [time](SerpScreenshotResponseInfo.md#time)
- [version](SerpScreenshotResponseInfo.md#version)

### Methods

- [init](SerpScreenshotResponseInfo.md#init)
- [toJSON](SerpScreenshotResponseInfo.md#tojson)
- [fromJS](SerpScreenshotResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpScreenshotResponseInfo**(`data?`): [`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpScreenshotResponseInfo`](../interfaces/ISerpScreenshotResponseInfo.md) |

#### Returns

[`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:23819

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpScreenshotResponseInfo](../interfaces/ISerpScreenshotResponseInfo.md).[cost](../interfaces/ISerpScreenshotResponseInfo.md#cost)

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

[ISerpScreenshotResponseInfo](../interfaces/ISerpScreenshotResponseInfo.md).[status_code](../interfaces/ISerpScreenshotResponseInfo.md#status_code)

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

[ISerpScreenshotResponseInfo](../interfaces/ISerpScreenshotResponseInfo.md).[status_message](../interfaces/ISerpScreenshotResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpScreenshotTaskInfo`](SerpScreenshotTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpScreenshotResponseInfo](../interfaces/ISerpScreenshotResponseInfo.md).[tasks](../interfaces/ISerpScreenshotResponseInfo.md#tasks)

#### Defined in

main.ts:23815

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpScreenshotResponseInfo](../interfaces/ISerpScreenshotResponseInfo.md).[tasks_count](../interfaces/ISerpScreenshotResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpScreenshotResponseInfo](../interfaces/ISerpScreenshotResponseInfo.md).[tasks_error](../interfaces/ISerpScreenshotResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpScreenshotResponseInfo](../interfaces/ISerpScreenshotResponseInfo.md).[time](../interfaces/ISerpScreenshotResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpScreenshotResponseInfo](../interfaces/ISerpScreenshotResponseInfo.md).[version](../interfaces/ISerpScreenshotResponseInfo.md#version)

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

main.ts:23823

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

main.ts:23845

___

### fromJS

▸ **fromJS**(`data`): [`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:23838
