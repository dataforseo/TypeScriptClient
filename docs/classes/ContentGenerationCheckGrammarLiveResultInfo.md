[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationCheckGrammarLiveResultInfo

# Class: ContentGenerationCheckGrammarLiveResultInfo

## Implements

- [`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationCheckGrammarLiveResultInfo.md#constructor)

### Properties

- [initial\_text](ContentGenerationCheckGrammarLiveResultInfo.md#initial_text)
- [input\_tokens](ContentGenerationCheckGrammarLiveResultInfo.md#input_tokens)
- [items](ContentGenerationCheckGrammarLiveResultInfo.md#items)
- [items\_count](ContentGenerationCheckGrammarLiveResultInfo.md#items_count)
- [language\_code](ContentGenerationCheckGrammarLiveResultInfo.md#language_code)
- [new\_tokens](ContentGenerationCheckGrammarLiveResultInfo.md#new_tokens)
- [output\_tokens](ContentGenerationCheckGrammarLiveResultInfo.md#output_tokens)

### Methods

- [init](ContentGenerationCheckGrammarLiveResultInfo.md#init)
- [toJSON](ContentGenerationCheckGrammarLiveResultInfo.md#tojson)
- [fromJS](ContentGenerationCheckGrammarLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationCheckGrammarLiveResultInfo**(`data?`): [`ContentGenerationCheckGrammarLiveResultInfo`](ContentGenerationCheckGrammarLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md) |

#### Returns

[`ContentGenerationCheckGrammarLiveResultInfo`](ContentGenerationCheckGrammarLiveResultInfo.md)

#### Defined in

[main.ts:161605](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161605)

## Properties

### initial\_text

• `Optional` **initial\_text**: `string`

initial text in the POST request

#### Implementation of

[IContentGenerationCheckGrammarLiveResultInfo](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[initial_text](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#initial_text)

#### Defined in

[main.ts:161595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161595)

___

### input\_tokens

• `Optional` **input\_tokens**: `number`

number of input tokens in the POST request

#### Implementation of

[IContentGenerationCheckGrammarLiveResultInfo](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[input_tokens](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#input_tokens)

#### Defined in

[main.ts:161589](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161589)

___

### items

• `Optional` **items**: [`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)[]

contains grammar or spelling errors and related data

#### Implementation of

[IContentGenerationCheckGrammarLiveResultInfo](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[items](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#items)

#### Defined in

[main.ts:161601](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161601)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IContentGenerationCheckGrammarLiveResultInfo](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[items_count](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#items_count)

#### Defined in

[main.ts:161599](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161599)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in the POST request

#### Implementation of

[IContentGenerationCheckGrammarLiveResultInfo](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[language_code](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#language_code)

#### Defined in

[main.ts:161597](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161597)

___

### new\_tokens

• `Optional` **new\_tokens**: `number`

number of new tokens in the response

#### Implementation of

[IContentGenerationCheckGrammarLiveResultInfo](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[new_tokens](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#new_tokens)

#### Defined in

[main.ts:161593](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161593)

___

### output\_tokens

• `Optional` **output\_tokens**: `number`

number of output tokens in the response

#### Implementation of

[IContentGenerationCheckGrammarLiveResultInfo](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[output_tokens](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#output_tokens)

#### Defined in

[main.ts:161591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161591)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:161614](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161614)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:161641](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161641)

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationCheckGrammarLiveResultInfo`](ContentGenerationCheckGrammarLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationCheckGrammarLiveResultInfo`](ContentGenerationCheckGrammarLiveResultInfo.md)

#### Defined in

[main.ts:161634](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161634)
