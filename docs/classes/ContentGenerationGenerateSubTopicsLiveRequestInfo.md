[Documentation](../README.md) / [Exports](../modules.md) / ContentGenerationGenerateSubTopicsLiveRequestInfo

# Class: ContentGenerationGenerateSubTopicsLiveRequestInfo

## Implements

- [`IContentGenerationGenerateSubTopicsLiveRequestInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationGenerateSubTopicsLiveRequestInfo.md#constructor)

### Properties

- [creativity\_index](ContentGenerationGenerateSubTopicsLiveRequestInfo.md#creativity_index)
- [tag](ContentGenerationGenerateSubTopicsLiveRequestInfo.md#tag)
- [topic](ContentGenerationGenerateSubTopicsLiveRequestInfo.md#topic)

### Methods

- [init](ContentGenerationGenerateSubTopicsLiveRequestInfo.md#init)
- [toJSON](ContentGenerationGenerateSubTopicsLiveRequestInfo.md#tojson)
- [fromJS](ContentGenerationGenerateSubTopicsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationGenerateSubTopicsLiveRequestInfo**(`data?`): [`ContentGenerationGenerateSubTopicsLiveRequestInfo`](ContentGenerationGenerateSubTopicsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationGenerateSubTopicsLiveRequestInfo`](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md) |

#### Returns

[`ContentGenerationGenerateSubTopicsLiveRequestInfo`](ContentGenerationGenerateSubTopicsLiveRequestInfo.md)

#### Defined in

main.ts:166290

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

[IContentGenerationGenerateSubTopicsLiveRequestInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md).[creativity_index](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md#creativity_index)

#### Defined in

main.ts:166280

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IContentGenerationGenerateSubTopicsLiveRequestInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md).[tag](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md#tag)

#### Defined in

main.ts:166286

___

### topic

• `Optional` **topic**: `string`

main topic of the content to generate
required field
main topic for content generation;
can contain from 1 to 50 tokens

#### Implementation of

[IContentGenerationGenerateSubTopicsLiveRequestInfo](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md).[topic](../interfaces/IContentGenerationGenerateSubTopicsLiveRequestInfo.md#topic)

#### Defined in

main.ts:166273

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

main.ts:166299

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

main.ts:166318

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationGenerateSubTopicsLiveRequestInfo`](ContentGenerationGenerateSubTopicsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationGenerateSubTopicsLiveRequestInfo`](ContentGenerationGenerateSubTopicsLiveRequestInfo.md)

#### Defined in

main.ts:166311
