[Documentation](../README.md) / [Exports](../modules.md) / ContentGenerationGenerateMetaTagsLiveResponseInfo

# Class: ContentGenerationGenerateMetaTagsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`ContentGenerationGenerateMetaTagsLiveResponseInfo`**

## Implements

- [`IContentGenerationGenerateMetaTagsLiveResponseInfo`](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationGenerateMetaTagsLiveResponseInfo.md#constructor)

### Properties

- [cost](ContentGenerationGenerateMetaTagsLiveResponseInfo.md#cost)
- [status\_code](ContentGenerationGenerateMetaTagsLiveResponseInfo.md#status_code)
- [status\_message](ContentGenerationGenerateMetaTagsLiveResponseInfo.md#status_message)
- [tasks](ContentGenerationGenerateMetaTagsLiveResponseInfo.md#tasks)
- [tasks\_count](ContentGenerationGenerateMetaTagsLiveResponseInfo.md#tasks_count)
- [tasks\_error](ContentGenerationGenerateMetaTagsLiveResponseInfo.md#tasks_error)
- [time](ContentGenerationGenerateMetaTagsLiveResponseInfo.md#time)
- [version](ContentGenerationGenerateMetaTagsLiveResponseInfo.md#version)

### Methods

- [init](ContentGenerationGenerateMetaTagsLiveResponseInfo.md#init)
- [toJSON](ContentGenerationGenerateMetaTagsLiveResponseInfo.md#tojson)
- [fromJS](ContentGenerationGenerateMetaTagsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationGenerateMetaTagsLiveResponseInfo**(`data?`): [`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationGenerateMetaTagsLiveResponseInfo`](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md) |

#### Returns

[`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:160912

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationGenerateMetaTagsLiveResponseInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md).[cost](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md#cost)

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

[IContentGenerationGenerateMetaTagsLiveResponseInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md).[status_code](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md#status_code)

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

[IContentGenerationGenerateMetaTagsLiveResponseInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md).[status_message](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`ContentGenerationGenerateMetaTagsLiveTaskInfo`](ContentGenerationGenerateMetaTagsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IContentGenerationGenerateMetaTagsLiveResponseInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md).[tasks](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md#tasks)

#### Defined in

main.ts:160908

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IContentGenerationGenerateMetaTagsLiveResponseInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md).[tasks_count](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IContentGenerationGenerateMetaTagsLiveResponseInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md).[tasks_error](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IContentGenerationGenerateMetaTagsLiveResponseInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md).[time](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IContentGenerationGenerateMetaTagsLiveResponseInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md).[version](../interfaces/IContentGenerationGenerateMetaTagsLiveResponseInfo.md#version)

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

main.ts:160916

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

main.ts:160938

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:160931
