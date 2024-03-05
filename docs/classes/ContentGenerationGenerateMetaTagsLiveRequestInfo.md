[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationGenerateMetaTagsLiveRequestInfo

# Class: ContentGenerationGenerateMetaTagsLiveRequestInfo

## Implements

- [`IContentGenerationGenerateMetaTagsLiveRequestInfo`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationGenerateMetaTagsLiveRequestInfo.md#constructor)

### Properties

- [creativity\_index](ContentGenerationGenerateMetaTagsLiveRequestInfo.md#creativity_index)
- [tag](ContentGenerationGenerateMetaTagsLiveRequestInfo.md#tag)
- [text](ContentGenerationGenerateMetaTagsLiveRequestInfo.md#text)

### Methods

- [init](ContentGenerationGenerateMetaTagsLiveRequestInfo.md#init)
- [toJSON](ContentGenerationGenerateMetaTagsLiveRequestInfo.md#tojson)
- [fromJS](ContentGenerationGenerateMetaTagsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationGenerateMetaTagsLiveRequestInfo**(`data?`): [`ContentGenerationGenerateMetaTagsLiveRequestInfo`](ContentGenerationGenerateMetaTagsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationGenerateMetaTagsLiveRequestInfo`](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md) |

#### Returns

[`ContentGenerationGenerateMetaTagsLiveRequestInfo`](ContentGenerationGenerateMetaTagsLiveRequestInfo.md)

#### Defined in

[main.ts:160592](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160592)

## Properties

### creativity\_index

• `Optional` **creativity\_index**: `number`

creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1;
default value: 0.8
learn more about this parameter on our help center

#### Implementation of

[IContentGenerationGenerateMetaTagsLiveRequestInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md).[creativity_index](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md#creativity_index)

#### Defined in

[main.ts:160582](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160582)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IContentGenerationGenerateMetaTagsLiveRequestInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md).[tag](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md#tag)

#### Defined in

[main.ts:160588](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160588)

___

### text

• `Optional` **text**: `string`

initial target text
required field
text input for generating content;
can contain from 1 to 500 tokens
learn more about tokens on our help center

#### Implementation of

[IContentGenerationGenerateMetaTagsLiveRequestInfo](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md).[text](../interfaces/IContentGenerationGenerateMetaTagsLiveRequestInfo.md#text)

#### Defined in

[main.ts:160575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160575)

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

[main.ts:160601](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160601)

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

[main.ts:160620](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160620)

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationGenerateMetaTagsLiveRequestInfo`](ContentGenerationGenerateMetaTagsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationGenerateMetaTagsLiveRequestInfo`](ContentGenerationGenerateMetaTagsLiveRequestInfo.md)

#### Defined in

[main.ts:160613](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160613)
