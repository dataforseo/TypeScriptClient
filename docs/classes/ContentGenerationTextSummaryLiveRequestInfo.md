[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationTextSummaryLiveRequestInfo

# Class: ContentGenerationTextSummaryLiveRequestInfo

## Implements

- [`IContentGenerationTextSummaryLiveRequestInfo`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationTextSummaryLiveRequestInfo.md#constructor)

### Properties

- [internal\_list\_limit](ContentGenerationTextSummaryLiveRequestInfo.md#internal_list_limit)
- [language\_code](ContentGenerationTextSummaryLiveRequestInfo.md#language_code)
- [language\_name](ContentGenerationTextSummaryLiveRequestInfo.md#language_name)
- [tag](ContentGenerationTextSummaryLiveRequestInfo.md#tag)
- [text](ContentGenerationTextSummaryLiveRequestInfo.md#text)

### Methods

- [init](ContentGenerationTextSummaryLiveRequestInfo.md#init)
- [toJSON](ContentGenerationTextSummaryLiveRequestInfo.md#tojson)
- [fromJS](ContentGenerationTextSummaryLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationTextSummaryLiveRequestInfo**(`data?`): [`ContentGenerationTextSummaryLiveRequestInfo`](ContentGenerationTextSummaryLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationTextSummaryLiveRequestInfo`](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md) |

#### Returns

[`ContentGenerationTextSummaryLiveRequestInfo`](ContentGenerationTextSummaryLiveRequestInfo.md)

#### Defined in

[main.ts:162153](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162153)

## Properties

### internal\_list\_limit

• `Optional` **internal\_list\_limit**: `number`

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the keyword_density array
default value: 10

#### Implementation of

[IContentGenerationTextSummaryLiveRequestInfo](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md).[internal_list_limit](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md#internal_list_limit)

#### Defined in

[main.ts:162143](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162143)

___

### language\_code

• `Optional` **language\_code**: `string`

code of the text language
required field if you do not specify language_name
see the List of Languages for Content Generation Text Summary API

#### Implementation of

[IContentGenerationTextSummaryLiveRequestInfo](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md).[language_code](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:162138](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162138)

___

### language\_name

• `Optional` **language\_name**: `string`

name of the text language
required field if you do not specify language_code
see the List of Languages for Content Generation Text Summary API

#### Implementation of

[IContentGenerationTextSummaryLiveRequestInfo](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md).[language_name](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:162134](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162134)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IContentGenerationTextSummaryLiveRequestInfo](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md).[tag](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md#tag)

#### Defined in

[main.ts:162149](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162149)

___

### text

• `Optional` **text**: `string`

target text
required field
can contain from 1 to 10000 tokens
learn more about tokens on our help center

#### Implementation of

[IContentGenerationTextSummaryLiveRequestInfo](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md).[text](../interfaces/IContentGenerationTextSummaryLiveRequestInfo.md#text)

#### Defined in

[main.ts:162130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162130)

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

[main.ts:162162](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162162)

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

[main.ts:162183](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162183)

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationTextSummaryLiveRequestInfo`](ContentGenerationTextSummaryLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationTextSummaryLiveRequestInfo`](ContentGenerationTextSummaryLiveRequestInfo.md)

#### Defined in

[main.ts:162176](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162176)
