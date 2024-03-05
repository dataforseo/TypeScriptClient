[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationCheckGrammarLanguagesTaskInfo

# Class: ContentGenerationCheckGrammarLanguagesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`ContentGenerationCheckGrammarLanguagesTaskInfo`**

## Implements

- [`IContentGenerationCheckGrammarLanguagesTaskInfo`](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationCheckGrammarLanguagesTaskInfo.md#constructor)

### Properties

- [cost](ContentGenerationCheckGrammarLanguagesTaskInfo.md#cost)
- [data](ContentGenerationCheckGrammarLanguagesTaskInfo.md#data)
- [id](ContentGenerationCheckGrammarLanguagesTaskInfo.md#id)
- [path](ContentGenerationCheckGrammarLanguagesTaskInfo.md#path)
- [result](ContentGenerationCheckGrammarLanguagesTaskInfo.md#result)
- [result\_count](ContentGenerationCheckGrammarLanguagesTaskInfo.md#result_count)
- [status\_code](ContentGenerationCheckGrammarLanguagesTaskInfo.md#status_code)
- [status\_message](ContentGenerationCheckGrammarLanguagesTaskInfo.md#status_message)
- [time](ContentGenerationCheckGrammarLanguagesTaskInfo.md#time)

### Methods

- [init](ContentGenerationCheckGrammarLanguagesTaskInfo.md#init)
- [toJSON](ContentGenerationCheckGrammarLanguagesTaskInfo.md#tojson)
- [fromJS](ContentGenerationCheckGrammarLanguagesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationCheckGrammarLanguagesTaskInfo**(`data?`): [`ContentGenerationCheckGrammarLanguagesTaskInfo`](ContentGenerationCheckGrammarLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationCheckGrammarLanguagesTaskInfo`](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md) |

#### Returns

[`ContentGenerationCheckGrammarLanguagesTaskInfo`](ContentGenerationCheckGrammarLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:161853](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161853)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationCheckGrammarLanguagesTaskInfo](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md).[cost](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md#cost)

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

[IContentGenerationCheckGrammarLanguagesTaskInfo](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md).[data](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md#data)

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

[IContentGenerationCheckGrammarLanguagesTaskInfo](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md).[id](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IContentGenerationCheckGrammarLanguagesTaskInfo](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md).[path](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`ContentGenerationCheckGrammarLanguagesResultInfo`](ContentGenerationCheckGrammarLanguagesResultInfo.md)[]

array of results

#### Implementation of

[IContentGenerationCheckGrammarLanguagesTaskInfo](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md).[result](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md#result)

#### Defined in

[main.ts:161849](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161849)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IContentGenerationCheckGrammarLanguagesTaskInfo](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md).[result_count](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md#result_count)

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

[IContentGenerationCheckGrammarLanguagesTaskInfo](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md).[status_code](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md#status_code)

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

[IContentGenerationCheckGrammarLanguagesTaskInfo](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md).[status_message](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IContentGenerationCheckGrammarLanguagesTaskInfo](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md).[time](../interfaces/IContentGenerationCheckGrammarLanguagesTaskInfo.md#time)

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

[main.ts:161857](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161857)

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

[main.ts:161879](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161879)

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationCheckGrammarLanguagesTaskInfo`](ContentGenerationCheckGrammarLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationCheckGrammarLanguagesTaskInfo`](ContentGenerationCheckGrammarLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:161872](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161872)
