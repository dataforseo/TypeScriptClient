[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationGenerateTextLiveRequestInfo

# Class: ContentGenerationGenerateTextLiveRequestInfo

## Implements

- [`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationGenerateTextLiveRequestInfo.md#constructor)

### Properties

- [creativity\_index](ContentGenerationGenerateTextLiveRequestInfo.md#creativity_index)
- [description](ContentGenerationGenerateTextLiveRequestInfo.md#description)
- [include\_conclusion](ContentGenerationGenerateTextLiveRequestInfo.md#include_conclusion)
- [meta\_keywords](ContentGenerationGenerateTextLiveRequestInfo.md#meta_keywords)
- [sub\_topics](ContentGenerationGenerateTextLiveRequestInfo.md#sub_topics)
- [supplement\_token](ContentGenerationGenerateTextLiveRequestInfo.md#supplement_token)
- [tag](ContentGenerationGenerateTextLiveRequestInfo.md#tag)
- [topic](ContentGenerationGenerateTextLiveRequestInfo.md#topic)
- [word\_count](ContentGenerationGenerateTextLiveRequestInfo.md#word_count)

### Methods

- [init](ContentGenerationGenerateTextLiveRequestInfo.md#init)
- [toJSON](ContentGenerationGenerateTextLiveRequestInfo.md#tojson)
- [fromJS](ContentGenerationGenerateTextLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationGenerateTextLiveRequestInfo**(`data?`): [`ContentGenerationGenerateTextLiveRequestInfo`](ContentGenerationGenerateTextLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationGenerateTextLiveRequestInfo`](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md) |

#### Returns

[`ContentGenerationGenerateTextLiveRequestInfo`](ContentGenerationGenerateTextLiveRequestInfo.md)

#### Defined in

[main.ts:160257](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160257)

## Properties

### creativity\_index

• `Optional` **creativity\_index**: `number`

creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1
default value: 0.8
learn more about this parameter on our help center

#### Implementation of

[IContentGenerationGenerateTextLiveRequestInfo](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[creativity_index](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#creativity_index)

#### Defined in

[main.ts:160237](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160237)

___

### description

• `Optional` **description**: `string`

meta description of the content to generate
optional field
can contain from 1 to 1000 tokens
learn more about this parameter on our help center

#### Implementation of

[IContentGenerationGenerateTextLiveRequestInfo](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[description](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#description)

#### Defined in

[main.ts:160224](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160224)

___

### include\_conclusion

• `Optional` **include\_conclusion**: `boolean`

include conclusion in generated text
optional field
if set to true, generated content will include a logical conclusion

#### Implementation of

[IContentGenerationGenerateTextLiveRequestInfo](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[include_conclusion](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#include_conclusion)

#### Defined in

[main.ts:160241](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160241)

___

### meta\_keywords

• `Optional` **meta\_keywords**: `string`[]

keywords for the content to generate
optional field
can contain up to 10 terms;
learn more about this parameter on our help center
example: "meta_keywords": ["iPhone","sell","CEO"]

#### Implementation of

[IContentGenerationGenerateTextLiveRequestInfo](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[meta_keywords](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#meta_keywords)

#### Defined in

[main.ts:160230](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160230)

___

### sub\_topics

• `Optional` **sub\_topics**: `string`[]

secondary topics of the content to generate
optional field
secondary topics for generating content;
can contain up to 10 terms;
example: "sub_topics": ["Apple","Pixar","Amazing Products"]

#### Implementation of

[IContentGenerationGenerateTextLiveRequestInfo](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[sub_topics](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#sub_topics)

#### Defined in

[main.ts:160219](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160219)

___

### supplement\_token

• `Optional` **supplement\_token**: `string`

token for generating subsequent results
optional field
provided in the identical filed of the response to each request;
you can use this parameter to continue the generation of text from the initial response
supplement_token values are unique for each subsequent task

#### Implementation of

[IContentGenerationGenerateTextLiveRequestInfo](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[supplement_token](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#supplement_token)

#### Defined in

[main.ts:160247](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160247)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IContentGenerationGenerateTextLiveRequestInfo](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[tag](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#tag)

#### Defined in

[main.ts:160253](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160253)

___

### topic

• `Optional` **topic**: `string`

main topic of the content to generate
required field
main topic for generating content;
can contain from 1 to 50 tokens

#### Implementation of

[IContentGenerationGenerateTextLiveRequestInfo](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[topic](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#topic)

#### Defined in

[main.ts:160208](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160208)

___

### word\_count

• `Optional` **word\_count**: `number`

number of words in content
required field
the number of tokens in the generated text;
can take values from 1 to 1000

#### Implementation of

[IContentGenerationGenerateTextLiveRequestInfo](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md).[word_count](../interfaces/IContentGenerationGenerateTextLiveRequestInfo.md#word_count)

#### Defined in

[main.ts:160213](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160213)

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

[main.ts:160266](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160266)

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

[main.ts:160299](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160299)

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationGenerateTextLiveRequestInfo`](ContentGenerationGenerateTextLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationGenerateTextLiveRequestInfo`](ContentGenerationGenerateTextLiveRequestInfo.md)

#### Defined in

[main.ts:160292](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160292)
