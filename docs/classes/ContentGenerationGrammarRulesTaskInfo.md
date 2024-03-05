[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationGrammarRulesTaskInfo

# Class: ContentGenerationGrammarRulesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`ContentGenerationGrammarRulesTaskInfo`**

## Implements

- [`IContentGenerationGrammarRulesTaskInfo`](../interfaces/IContentGenerationGrammarRulesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationGrammarRulesTaskInfo.md#constructor)

### Properties

- [cost](ContentGenerationGrammarRulesTaskInfo.md#cost)
- [data](ContentGenerationGrammarRulesTaskInfo.md#data)
- [id](ContentGenerationGrammarRulesTaskInfo.md#id)
- [path](ContentGenerationGrammarRulesTaskInfo.md#path)
- [result](ContentGenerationGrammarRulesTaskInfo.md#result)
- [result\_count](ContentGenerationGrammarRulesTaskInfo.md#result_count)
- [status\_code](ContentGenerationGrammarRulesTaskInfo.md#status_code)
- [status\_message](ContentGenerationGrammarRulesTaskInfo.md#status_message)
- [time](ContentGenerationGrammarRulesTaskInfo.md#time)

### Methods

- [init](ContentGenerationGrammarRulesTaskInfo.md#init)
- [toJSON](ContentGenerationGrammarRulesTaskInfo.md#tojson)
- [fromJS](ContentGenerationGrammarRulesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationGrammarRulesTaskInfo**(`data?`): [`ContentGenerationGrammarRulesTaskInfo`](ContentGenerationGrammarRulesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationGrammarRulesTaskInfo`](../interfaces/IContentGenerationGrammarRulesTaskInfo.md) |

#### Returns

[`ContentGenerationGrammarRulesTaskInfo`](ContentGenerationGrammarRulesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:162021](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162021)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationGrammarRulesTaskInfo](../interfaces/IContentGenerationGrammarRulesTaskInfo.md).[cost](../interfaces/IContentGenerationGrammarRulesTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

[main.ts:22602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22602)

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IContentGenerationGrammarRulesTaskInfo](../interfaces/IContentGenerationGrammarRulesTaskInfo.md).[data](../interfaces/IContentGenerationGrammarRulesTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

[main.ts:22608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22608)

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[IContentGenerationGrammarRulesTaskInfo](../interfaces/IContentGenerationGrammarRulesTaskInfo.md).[id](../interfaces/IContentGenerationGrammarRulesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IContentGenerationGrammarRulesTaskInfo](../interfaces/IContentGenerationGrammarRulesTaskInfo.md).[path](../interfaces/IContentGenerationGrammarRulesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`ContentGenerationGrammarRulesResultInfo`](ContentGenerationGrammarRulesResultInfo.md)[]

array of results

#### Implementation of

[IContentGenerationGrammarRulesTaskInfo](../interfaces/IContentGenerationGrammarRulesTaskInfo.md).[result](../interfaces/IContentGenerationGrammarRulesTaskInfo.md#result)

#### Defined in

[main.ts:162017](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162017)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IContentGenerationGrammarRulesTaskInfo](../interfaces/IContentGenerationGrammarRulesTaskInfo.md).[result_count](../interfaces/IContentGenerationGrammarRulesTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

[main.ts:22604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22604)

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[IContentGenerationGrammarRulesTaskInfo](../interfaces/IContentGenerationGrammarRulesTaskInfo.md).[status_code](../interfaces/IContentGenerationGrammarRulesTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

[main.ts:22595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22595)

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IContentGenerationGrammarRulesTaskInfo](../interfaces/IContentGenerationGrammarRulesTaskInfo.md).[status_message](../interfaces/IContentGenerationGrammarRulesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IContentGenerationGrammarRulesTaskInfo](../interfaces/IContentGenerationGrammarRulesTaskInfo.md).[time](../interfaces/IContentGenerationGrammarRulesTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

[main.ts:22600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22600)

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

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[init](BaseResponseTaskInfo.md#init)

#### Defined in

[main.ts:162025](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162025)

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

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[toJSON](BaseResponseTaskInfo.md#tojson)

#### Defined in

[main.ts:162047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162047)

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationGrammarRulesTaskInfo`](ContentGenerationGrammarRulesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationGrammarRulesTaskInfo`](ContentGenerationGrammarRulesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:162040](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162040)
