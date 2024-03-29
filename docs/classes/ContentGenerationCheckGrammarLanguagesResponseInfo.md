[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationCheckGrammarLanguagesResponseInfo

# Class: ContentGenerationCheckGrammarLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`ContentGenerationCheckGrammarLanguagesResponseInfo`**

## Implements

- [`IContentGenerationCheckGrammarLanguagesResponseInfo`](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationCheckGrammarLanguagesResponseInfo.md#constructor)

### Properties

- [cost](ContentGenerationCheckGrammarLanguagesResponseInfo.md#cost)
- [status\_code](ContentGenerationCheckGrammarLanguagesResponseInfo.md#status_code)
- [status\_message](ContentGenerationCheckGrammarLanguagesResponseInfo.md#status_message)
- [tasks](ContentGenerationCheckGrammarLanguagesResponseInfo.md#tasks)
- [tasks\_count](ContentGenerationCheckGrammarLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](ContentGenerationCheckGrammarLanguagesResponseInfo.md#tasks_error)
- [time](ContentGenerationCheckGrammarLanguagesResponseInfo.md#time)
- [version](ContentGenerationCheckGrammarLanguagesResponseInfo.md#version)

### Methods

- [init](ContentGenerationCheckGrammarLanguagesResponseInfo.md#init)
- [toJSON](ContentGenerationCheckGrammarLanguagesResponseInfo.md#tojson)
- [fromJS](ContentGenerationCheckGrammarLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationCheckGrammarLanguagesResponseInfo**(`data?`): [`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationCheckGrammarLanguagesResponseInfo`](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md) |

#### Returns

[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:161908](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161908)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationCheckGrammarLanguagesResponseInfo](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md).[cost](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

[main.ts:22510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22510)

___


### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IContentGenerationCheckGrammarLanguagesResponseInfo](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md).[status_code](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

[main.ts:22503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22503)

___


### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IContentGenerationCheckGrammarLanguagesResponseInfo](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md).[status_message](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`ContentGenerationCheckGrammarLanguagesTaskInfo`](ContentGenerationCheckGrammarLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[IContentGenerationCheckGrammarLanguagesResponseInfo](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md).[tasks](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md#tasks)

#### Defined in

[main.ts:161904](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161904)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IContentGenerationCheckGrammarLanguagesResponseInfo](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md).[tasks_count](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IContentGenerationCheckGrammarLanguagesResponseInfo](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md).[tasks_error](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IContentGenerationCheckGrammarLanguagesResponseInfo](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md).[time](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IContentGenerationCheckGrammarLanguagesResponseInfo](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md).[version](../interfaces/IContentGenerationCheckGrammarLanguagesResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

[main.ts:22500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22500)

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

[main.ts:161912](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161912)

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

[main.ts:161934](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161934)

___


### fromJS

▸ **fromJS**(`data`): [`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:161927](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161927)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")