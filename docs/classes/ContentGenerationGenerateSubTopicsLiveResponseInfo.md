[Documentation](../README.md) / [Exports](../modules.md) / ContentGenerationGenerateSubTopicsLiveResponseInfo

# Class: ContentGenerationGenerateSubTopicsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`ContentGenerationGenerateSubTopicsLiveResponseInfo`**

## Implements

- [`IContentGenerationGenerateSubTopicsLiveResponseInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationGenerateSubTopicsLiveResponseInfo.md#constructor)

### Properties

- [cost](ContentGenerationGenerateSubTopicsLiveResponseInfo.md#cost)
- [status\_code](ContentGenerationGenerateSubTopicsLiveResponseInfo.md#status_code)
- [status\_message](ContentGenerationGenerateSubTopicsLiveResponseInfo.md#status_message)
- [tasks](ContentGenerationGenerateSubTopicsLiveResponseInfo.md#tasks)
- [tasks\_count](ContentGenerationGenerateSubTopicsLiveResponseInfo.md#tasks_count)
- [tasks\_error](ContentGenerationGenerateSubTopicsLiveResponseInfo.md#tasks_error)
- [time](ContentGenerationGenerateSubTopicsLiveResponseInfo.md#time)
- [version](ContentGenerationGenerateSubTopicsLiveResponseInfo.md#version)

### Methods

- [init](ContentGenerationGenerateSubTopicsLiveResponseInfo.md#init)
- [toJSON](ContentGenerationGenerateSubTopicsLiveResponseInfo.md#tojson)
- [fromJS](ContentGenerationGenerateSubTopicsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationGenerateSubTopicsLiveResponseInfo**(`data?`): [`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationGenerateSubTopicsLiveResponseInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md) |

#### Returns

[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:161184

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationGenerateSubTopicsLiveResponseInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md).[cost](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md#cost)

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

[IContentGenerationGenerateSubTopicsLiveResponseInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md).[status_code](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md#status_code)

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

[IContentGenerationGenerateSubTopicsLiveResponseInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md).[status_message](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`ContentGenerationGenerateSubTopicsLiveTaskInfo`](ContentGenerationGenerateSubTopicsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IContentGenerationGenerateSubTopicsLiveResponseInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md).[tasks](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md#tasks)

#### Defined in

main.ts:161180

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IContentGenerationGenerateSubTopicsLiveResponseInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md).[tasks_count](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IContentGenerationGenerateSubTopicsLiveResponseInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md).[tasks_error](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IContentGenerationGenerateSubTopicsLiveResponseInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md).[time](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IContentGenerationGenerateSubTopicsLiveResponseInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md).[version](../interfaces/IContentGenerationGenerateSubTopicsLiveResponseInfo.md#version)

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

main.ts:161188

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

main.ts:161210

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:161203
