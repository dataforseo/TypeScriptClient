[Documentation](../README.md) / [Exports](../modules.md) / ContentAnalysisIdListResponseInfo

# Class: ContentAnalysisIdListResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`ContentAnalysisIdListResponseInfo`**

## Implements

- [`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisIdListResponseInfo.md#constructor)

### Properties

- [cost](ContentAnalysisIdListResponseInfo.md#cost)
- [status\_code](ContentAnalysisIdListResponseInfo.md#status_code)
- [status\_message](ContentAnalysisIdListResponseInfo.md#status_message)
- [tasks](ContentAnalysisIdListResponseInfo.md#tasks)
- [tasks\_count](ContentAnalysisIdListResponseInfo.md#tasks_count)
- [tasks\_error](ContentAnalysisIdListResponseInfo.md#tasks_error)
- [time](ContentAnalysisIdListResponseInfo.md#time)
- [version](ContentAnalysisIdListResponseInfo.md#version)

### Methods

- [init](ContentAnalysisIdListResponseInfo.md#init)
- [toJSON](ContentAnalysisIdListResponseInfo.md#tojson)
- [fromJS](ContentAnalysisIdListResponseInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisIdListResponseInfo**(`data?`): [`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisIdListResponseInfo`](../interfaces/IContentAnalysisIdListResponseInfo.md) |

#### Returns

[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:155448

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentAnalysisIdListResponseInfo](../interfaces/IContentAnalysisIdListResponseInfo.md).[cost](../interfaces/IContentAnalysisIdListResponseInfo.md#cost)

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

[IContentAnalysisIdListResponseInfo](../interfaces/IContentAnalysisIdListResponseInfo.md).[status_code](../interfaces/IContentAnalysisIdListResponseInfo.md#status_code)

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

[IContentAnalysisIdListResponseInfo](../interfaces/IContentAnalysisIdListResponseInfo.md).[status_message](../interfaces/IContentAnalysisIdListResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`ContentAnalysisIdListTaskInfo`](ContentAnalysisIdListTaskInfo.md)[]

array of tasks

#### Implementation of

[IContentAnalysisIdListResponseInfo](../interfaces/IContentAnalysisIdListResponseInfo.md).[tasks](../interfaces/IContentAnalysisIdListResponseInfo.md#tasks)

#### Defined in

main.ts:155444

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IContentAnalysisIdListResponseInfo](../interfaces/IContentAnalysisIdListResponseInfo.md).[tasks_count](../interfaces/IContentAnalysisIdListResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IContentAnalysisIdListResponseInfo](../interfaces/IContentAnalysisIdListResponseInfo.md).[tasks_error](../interfaces/IContentAnalysisIdListResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IContentAnalysisIdListResponseInfo](../interfaces/IContentAnalysisIdListResponseInfo.md).[time](../interfaces/IContentAnalysisIdListResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IContentAnalysisIdListResponseInfo](../interfaces/IContentAnalysisIdListResponseInfo.md).[version](../interfaces/IContentAnalysisIdListResponseInfo.md#version)

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

main.ts:155452

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

main.ts:155474

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:155467
