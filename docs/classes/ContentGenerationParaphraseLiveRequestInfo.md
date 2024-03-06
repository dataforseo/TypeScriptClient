[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationParaphraseLiveRequestInfo

# Class: ContentGenerationParaphraseLiveRequestInfo

## Implements

- [`IContentGenerationParaphraseLiveRequestInfo`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationParaphraseLiveRequestInfo.md#constructor)

### Properties

- [creativity\_index](ContentGenerationParaphraseLiveRequestInfo.md#creativity_index)
- [tag](ContentGenerationParaphraseLiveRequestInfo.md#tag)
- [text](ContentGenerationParaphraseLiveRequestInfo.md#text)

### Methods

- [init](ContentGenerationParaphraseLiveRequestInfo.md#init)
- [toJSON](ContentGenerationParaphraseLiveRequestInfo.md#tojson)
- [fromJS](ContentGenerationParaphraseLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationParaphraseLiveRequestInfo**(`data?`): [`ContentGenerationParaphraseLiveRequestInfo`](ContentGenerationParaphraseLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationParaphraseLiveRequestInfo`](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md) |

#### Returns

[`ContentGenerationParaphraseLiveRequestInfo`](ContentGenerationParaphraseLiveRequestInfo.md)

#### Defined in

[main.ts:161135](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161135)

## Properties

### creativity\_index

• `Optional` **creativity\_index**: `number`

creativity of content generation
required field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1;
default value: 0.8
learn more about this parameter on our help center

#### Implementation of

[IContentGenerationParaphraseLiveRequestInfo](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md).[creativity_index](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md#creativity_index)

#### Defined in

[main.ts:161125](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161125)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IContentGenerationParaphraseLiveRequestInfo](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md).[tag](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md#tag)

#### Defined in

[main.ts:161131](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161131)

___


### text

• `Optional` **text**: `string`

target text
required field
can contain from 1 to 500 tokens
learn more about tokens on our help center

#### Implementation of

[IContentGenerationParaphraseLiveRequestInfo](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md).[text](../interfaces/IContentGenerationParaphraseLiveRequestInfo.md#text)

#### Defined in

[main.ts:161118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161118)

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

[main.ts:161144](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161144)

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

[main.ts:161163](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161163)

___


### fromJS

▸ **fromJS**(`data`): [`ContentGenerationParaphraseLiveRequestInfo`](ContentGenerationParaphraseLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationParaphraseLiveRequestInfo`](ContentGenerationParaphraseLiveRequestInfo.md)

#### Defined in

[main.ts:161156](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L161156)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")