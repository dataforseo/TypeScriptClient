[Documentation](../README.md) / [Exports](../modules.md) / ContentGenerationGenerateTextLiveResponseInfo

# Class: ContentGenerationGenerateTextLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`ContentGenerationGenerateTextLiveResponseInfo`**

## Implements

- [`IContentGenerationGenerateTextLiveResponseInfo`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationGenerateTextLiveResponseInfo.md#constructor)

### Properties

- [cost](ContentGenerationGenerateTextLiveResponseInfo.md#cost)
- [status\_code](ContentGenerationGenerateTextLiveResponseInfo.md#status_code)
- [status\_message](ContentGenerationGenerateTextLiveResponseInfo.md#status_message)
- [tasks](ContentGenerationGenerateTextLiveResponseInfo.md#tasks)
- [tasks\_count](ContentGenerationGenerateTextLiveResponseInfo.md#tasks_count)
- [tasks\_error](ContentGenerationGenerateTextLiveResponseInfo.md#tasks_error)
- [time](ContentGenerationGenerateTextLiveResponseInfo.md#time)
- [version](ContentGenerationGenerateTextLiveResponseInfo.md#version)

### Methods

- [init](ContentGenerationGenerateTextLiveResponseInfo.md#init)
- [toJSON](ContentGenerationGenerateTextLiveResponseInfo.md#tojson)
- [fromJS](ContentGenerationGenerateTextLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationGenerateTextLiveResponseInfo**(`data?`): [`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationGenerateTextLiveResponseInfo`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md) |

#### Returns

[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:165947

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationGenerateTextLiveResponseInfo](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[cost](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#cost)

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

[IContentGenerationGenerateTextLiveResponseInfo](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[status_code](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#status_code)

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

[IContentGenerationGenerateTextLiveResponseInfo](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[status_message](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`ContentGenerationGenerateTextLiveTaskInfo`](ContentGenerationGenerateTextLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IContentGenerationGenerateTextLiveResponseInfo](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[tasks](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#tasks)

#### Defined in

main.ts:165943

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IContentGenerationGenerateTextLiveResponseInfo](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[tasks_count](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IContentGenerationGenerateTextLiveResponseInfo](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[tasks_error](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IContentGenerationGenerateTextLiveResponseInfo](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[time](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IContentGenerationGenerateTextLiveResponseInfo](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[version](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#version)

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

main.ts:165951

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

main.ts:165973

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:165966
