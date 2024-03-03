[Documentation](../README.md) / [Exports](../modules.md) / ContentAnalysisCategoriesResponseInfo

# Class: ContentAnalysisCategoriesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`ContentAnalysisCategoriesResponseInfo`**

## Implements

- [`IContentAnalysisCategoriesResponseInfo`](../interfaces/IContentAnalysisCategoriesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisCategoriesResponseInfo.md#constructor)

### Properties

- [cost](ContentAnalysisCategoriesResponseInfo.md#cost)
- [status\_code](ContentAnalysisCategoriesResponseInfo.md#status_code)
- [status\_message](ContentAnalysisCategoriesResponseInfo.md#status_message)
- [tasks](ContentAnalysisCategoriesResponseInfo.md#tasks)
- [tasks\_count](ContentAnalysisCategoriesResponseInfo.md#tasks_count)
- [tasks\_error](ContentAnalysisCategoriesResponseInfo.md#tasks_error)
- [time](ContentAnalysisCategoriesResponseInfo.md#time)
- [version](ContentAnalysisCategoriesResponseInfo.md#version)

### Methods

- [init](ContentAnalysisCategoriesResponseInfo.md#init)
- [toJSON](ContentAnalysisCategoriesResponseInfo.md#tojson)
- [fromJS](ContentAnalysisCategoriesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisCategoriesResponseInfo**(`data?`): [`ContentAnalysisCategoriesResponseInfo`](ContentAnalysisCategoriesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisCategoriesResponseInfo`](../interfaces/IContentAnalysisCategoriesResponseInfo.md) |

#### Returns

[`ContentAnalysisCategoriesResponseInfo`](ContentAnalysisCategoriesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:156134

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentAnalysisCategoriesResponseInfo](../interfaces/IContentAnalysisCategoriesResponseInfo.md).[cost](../interfaces/IContentAnalysisCategoriesResponseInfo.md#cost)

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

[IContentAnalysisCategoriesResponseInfo](../interfaces/IContentAnalysisCategoriesResponseInfo.md).[status_code](../interfaces/IContentAnalysisCategoriesResponseInfo.md#status_code)

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

[IContentAnalysisCategoriesResponseInfo](../interfaces/IContentAnalysisCategoriesResponseInfo.md).[status_message](../interfaces/IContentAnalysisCategoriesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`ContentAnalysisCategoriesTaskInfo`](ContentAnalysisCategoriesTaskInfo.md)[]

array of tasks

#### Implementation of

[IContentAnalysisCategoriesResponseInfo](../interfaces/IContentAnalysisCategoriesResponseInfo.md).[tasks](../interfaces/IContentAnalysisCategoriesResponseInfo.md#tasks)

#### Defined in

main.ts:156130

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IContentAnalysisCategoriesResponseInfo](../interfaces/IContentAnalysisCategoriesResponseInfo.md).[tasks_count](../interfaces/IContentAnalysisCategoriesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IContentAnalysisCategoriesResponseInfo](../interfaces/IContentAnalysisCategoriesResponseInfo.md).[tasks_error](../interfaces/IContentAnalysisCategoriesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IContentAnalysisCategoriesResponseInfo](../interfaces/IContentAnalysisCategoriesResponseInfo.md).[time](../interfaces/IContentAnalysisCategoriesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IContentAnalysisCategoriesResponseInfo](../interfaces/IContentAnalysisCategoriesResponseInfo.md).[version](../interfaces/IContentAnalysisCategoriesResponseInfo.md#version)

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

main.ts:156138

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

main.ts:156160

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisCategoriesResponseInfo`](ContentAnalysisCategoriesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisCategoriesResponseInfo`](ContentAnalysisCategoriesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:156153
