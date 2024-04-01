[Documentation](../README.md) / [Exports](../modules.md) / ContentGenerationGrammarRulesResponseInfo

# Class: ContentGenerationGrammarRulesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`ContentGenerationGrammarRulesResponseInfo`**

## Implements

- [`IContentGenerationGrammarRulesResponseInfo`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationGrammarRulesResponseInfo.md#constructor)

### Properties

- [cost](ContentGenerationGrammarRulesResponseInfo.md#cost)
- [status\_code](ContentGenerationGrammarRulesResponseInfo.md#status_code)
- [status\_message](ContentGenerationGrammarRulesResponseInfo.md#status_message)
- [tasks](ContentGenerationGrammarRulesResponseInfo.md#tasks)
- [tasks\_count](ContentGenerationGrammarRulesResponseInfo.md#tasks_count)
- [tasks\_error](ContentGenerationGrammarRulesResponseInfo.md#tasks_error)
- [time](ContentGenerationGrammarRulesResponseInfo.md#time)
- [version](ContentGenerationGrammarRulesResponseInfo.md#version)

### Methods

- [init](ContentGenerationGrammarRulesResponseInfo.md#init)
- [toJSON](ContentGenerationGrammarRulesResponseInfo.md#tojson)
- [fromJS](ContentGenerationGrammarRulesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationGrammarRulesResponseInfo**(`data?`): [`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationGrammarRulesResponseInfo`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md) |

#### Returns

[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:167503

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationGrammarRulesResponseInfo](../interfaces/IContentGenerationGrammarRulesResponseInfo.md).[cost](../interfaces/IContentGenerationGrammarRulesResponseInfo.md#cost)

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

[IContentGenerationGrammarRulesResponseInfo](../interfaces/IContentGenerationGrammarRulesResponseInfo.md).[status_code](../interfaces/IContentGenerationGrammarRulesResponseInfo.md#status_code)

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

[IContentGenerationGrammarRulesResponseInfo](../interfaces/IContentGenerationGrammarRulesResponseInfo.md).[status_message](../interfaces/IContentGenerationGrammarRulesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`ContentGenerationGrammarRulesTaskInfo`](ContentGenerationGrammarRulesTaskInfo.md)[]

array of tasks

#### Implementation of

[IContentGenerationGrammarRulesResponseInfo](../interfaces/IContentGenerationGrammarRulesResponseInfo.md).[tasks](../interfaces/IContentGenerationGrammarRulesResponseInfo.md#tasks)

#### Defined in

main.ts:167499

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IContentGenerationGrammarRulesResponseInfo](../interfaces/IContentGenerationGrammarRulesResponseInfo.md).[tasks_count](../interfaces/IContentGenerationGrammarRulesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IContentGenerationGrammarRulesResponseInfo](../interfaces/IContentGenerationGrammarRulesResponseInfo.md).[tasks_error](../interfaces/IContentGenerationGrammarRulesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IContentGenerationGrammarRulesResponseInfo](../interfaces/IContentGenerationGrammarRulesResponseInfo.md).[time](../interfaces/IContentGenerationGrammarRulesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IContentGenerationGrammarRulesResponseInfo](../interfaces/IContentGenerationGrammarRulesResponseInfo.md).[version](../interfaces/IContentGenerationGrammarRulesResponseInfo.md#version)

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

main.ts:167507

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

main.ts:167529

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:167522
