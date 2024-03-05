[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationCheckGrammarLiveRequestInfo

# Class: ContentGenerationCheckGrammarLiveRequestInfo

## Implements

- [`IContentGenerationCheckGrammarLiveRequestInfo`](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationCheckGrammarLiveRequestInfo.md#constructor)

### Properties

- [language\_code](ContentGenerationCheckGrammarLiveRequestInfo.md#language_code)
- [language\_name](ContentGenerationCheckGrammarLiveRequestInfo.md#language_name)
- [tag](ContentGenerationCheckGrammarLiveRequestInfo.md#tag)
- [text](ContentGenerationCheckGrammarLiveRequestInfo.md#text)

### Methods

- [init](ContentGenerationCheckGrammarLiveRequestInfo.md#init)
- [toJSON](ContentGenerationCheckGrammarLiveRequestInfo.md#tojson)
- [fromJS](ContentGenerationCheckGrammarLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationCheckGrammarLiveRequestInfo**(`data?`): [`ContentGenerationCheckGrammarLiveRequestInfo`](ContentGenerationCheckGrammarLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationCheckGrammarLiveRequestInfo`](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md) |

#### Returns

[`ContentGenerationCheckGrammarLiveRequestInfo`](ContentGenerationCheckGrammarLiveRequestInfo.md)

#### Defined in

[main.ts:161400](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161400)

## Properties

### language\_code

• `Optional` **language\_code**: `string`

code of the text language
required field if you do not specify language_name
see the List of Languages for Content Generation Check Grammar API

#### Implementation of

[IContentGenerationCheckGrammarLiveRequestInfo](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md).[language_code](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:161386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161386)

___

### language\_name

• `Optional` **language\_name**: `string`

name of the text language
required field if you do not specify language_code
see the List of Languages for Content Generation Check Grammar API

#### Implementation of

[IContentGenerationCheckGrammarLiveRequestInfo](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md).[language_name](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:161390](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161390)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IContentGenerationCheckGrammarLiveRequestInfo](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md).[tag](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md#tag)

#### Defined in

[main.ts:161396](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161396)

___

### text

• `Optional` **text**: `string`

target text
required field
can contain from 1 to 10000 tokens
learn more about tokens on our help center

#### Implementation of

[IContentGenerationCheckGrammarLiveRequestInfo](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md).[text](../interfaces/IContentGenerationCheckGrammarLiveRequestInfo.md#text)

#### Defined in

[main.ts:161382](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161382)

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

[main.ts:161409](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161409)

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

[main.ts:161429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161429)

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationCheckGrammarLiveRequestInfo`](ContentGenerationCheckGrammarLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationCheckGrammarLiveRequestInfo`](ContentGenerationCheckGrammarLiveRequestInfo.md)

#### Defined in

[main.ts:161422](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161422)
