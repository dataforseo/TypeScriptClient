[Documentation](../README.md) / [Exports](../modules.md) / ContentGenerationCheckGrammarLiveResponseInfo

# Class: ContentGenerationCheckGrammarLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`ContentGenerationCheckGrammarLiveResponseInfo`**

## Implements

- [`IContentGenerationCheckGrammarLiveResponseInfo`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationCheckGrammarLiveResponseInfo.md#constructor)

### Properties

- [cost](ContentGenerationCheckGrammarLiveResponseInfo.md#cost)
- [status\_code](ContentGenerationCheckGrammarLiveResponseInfo.md#status_code)
- [status\_message](ContentGenerationCheckGrammarLiveResponseInfo.md#status_message)
- [tasks](ContentGenerationCheckGrammarLiveResponseInfo.md#tasks)
- [tasks\_count](ContentGenerationCheckGrammarLiveResponseInfo.md#tasks_count)
- [tasks\_error](ContentGenerationCheckGrammarLiveResponseInfo.md#tasks_error)
- [time](ContentGenerationCheckGrammarLiveResponseInfo.md#time)
- [version](ContentGenerationCheckGrammarLiveResponseInfo.md#version)

### Methods

- [init](ContentGenerationCheckGrammarLiveResponseInfo.md#init)
- [toJSON](ContentGenerationCheckGrammarLiveResponseInfo.md#tojson)
- [fromJS](ContentGenerationCheckGrammarLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationCheckGrammarLiveResponseInfo**(`data?`): [`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationCheckGrammarLiveResponseInfo`](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md) |

#### Returns

[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:167169

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationCheckGrammarLiveResponseInfo](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md).[cost](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md#cost)

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

[IContentGenerationCheckGrammarLiveResponseInfo](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md).[status_code](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md#status_code)

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

[IContentGenerationCheckGrammarLiveResponseInfo](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md).[status_message](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`ContentGenerationCheckGrammarLiveTaskInfo`](ContentGenerationCheckGrammarLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IContentGenerationCheckGrammarLiveResponseInfo](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md).[tasks](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md#tasks)

#### Defined in

main.ts:167165

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IContentGenerationCheckGrammarLiveResponseInfo](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md).[tasks_count](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IContentGenerationCheckGrammarLiveResponseInfo](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md).[tasks_error](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IContentGenerationCheckGrammarLiveResponseInfo](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md).[time](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IContentGenerationCheckGrammarLiveResponseInfo](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md).[version](../interfaces/IContentGenerationCheckGrammarLiveResponseInfo.md#version)

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

main.ts:167173

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

main.ts:167195

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:167188
