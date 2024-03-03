[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleJobsTaskGetHtmlResponseInfo

# Class: SerpGoogleJobsTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleJobsTaskGetHtmlResponseInfo`**

## Implements

- [`ISerpGoogleJobsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleJobsTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleJobsTaskGetHtmlResponseInfo.md#cost)
- [status\_code](SerpGoogleJobsTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](SerpGoogleJobsTaskGetHtmlResponseInfo.md#status_message)
- [tasks](SerpGoogleJobsTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleJobsTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleJobsTaskGetHtmlResponseInfo.md#tasks_error)
- [time](SerpGoogleJobsTaskGetHtmlResponseInfo.md#time)
- [version](SerpGoogleJobsTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](SerpGoogleJobsTaskGetHtmlResponseInfo.md#init)
- [toJSON](SerpGoogleJobsTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](SerpGoogleJobsTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleJobsTaskGetHtmlResponseInfo**(`data?`): [`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleJobsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md) |

#### Returns

[`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:49843

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md).[cost](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md#cost)

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

[ISerpGoogleJobsTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md).[status_code](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md#status_code)

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

[ISerpGoogleJobsTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md).[status_message](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpGoogleJobsTaskGetHtmlTaskInfo`](SerpGoogleJobsTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md).[tasks](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

main.ts:49839

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md).[time](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md).[version](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md#version)

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

main.ts:49847

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

main.ts:49869

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:49862
