[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationGenerateSubTopicsLiveRequestInfo

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

[main.ts:160863](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160863)

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

[main.ts:160853](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160853)

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

[main.ts:160859](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160859)

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

[main.ts:160846](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160846)

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

[main.ts:160872](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160872)

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

[main.ts:160891](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160891)

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

[main.ts:160884](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160884)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")