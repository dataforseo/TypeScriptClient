[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderTaskGetHtmlResponseInfo

# Class: SerpGoogleLocalFinderTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleLocalFinderTaskGetHtmlResponseInfo`**

## Implements

- [`ISerpGoogleLocalFinderTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#cost)
- [status\_code](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#status_message)
- [tasks](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#tasks_error)
- [time](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#time)
- [version](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#init)
- [toJSON](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderTaskGetHtmlResponseInfo**(`data?`): [`SerpGoogleLocalFinderTaskGetHtmlResponseInfo`](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md) |

#### Returns

[`SerpGoogleLocalFinderTaskGetHtmlResponseInfo`](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:41660

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md).[cost](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#cost)

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

[ISerpGoogleLocalFinderTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md).[status_code](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#status_code)

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

[ISerpGoogleLocalFinderTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md).[status_message](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpGoogleLocalFinderTaskGetHtmlTaskInfo`](SerpGoogleLocalFinderTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md).[tasks](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

main.ts:41656

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md).[time](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md).[version](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResponseInfo.md#version)

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

main.ts:41664

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

main.ts:41686

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderTaskGetHtmlResponseInfo`](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderTaskGetHtmlResponseInfo`](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:41679
