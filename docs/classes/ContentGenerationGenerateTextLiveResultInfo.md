[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationGenerateTextLiveResultInfo

# Class: ContentGenerationGenerateTextLiveResultInfo

## Implements

- [`IContentGenerationGenerateTextLiveResultInfo`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationGenerateTextLiveResultInfo.md#constructor)

### Properties

- [generated\_text](ContentGenerationGenerateTextLiveResultInfo.md#generated_text)
- [input\_tokens](ContentGenerationGenerateTextLiveResultInfo.md#input_tokens)
- [new\_tokens](ContentGenerationGenerateTextLiveResultInfo.md#new_tokens)
- [output\_tokens](ContentGenerationGenerateTextLiveResultInfo.md#output_tokens)
- [supplement\_token](ContentGenerationGenerateTextLiveResultInfo.md#supplement_token)

### Methods

- [init](ContentGenerationGenerateTextLiveResultInfo.md#init)
- [toJSON](ContentGenerationGenerateTextLiveResultInfo.md#tojson)
- [fromJS](ContentGenerationGenerateTextLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationGenerateTextLiveResultInfo**(`data?`): [`ContentGenerationGenerateTextLiveResultInfo`](ContentGenerationGenerateTextLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationGenerateTextLiveResultInfo`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md) |

#### Returns

[`ContentGenerationGenerateTextLiveResultInfo`](ContentGenerationGenerateTextLiveResultInfo.md)

#### Defined in

[main.ts:160397](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160397)

## Properties

### generated\_text

• `Optional` **generated\_text**: `string`

resulting text

#### Implementation of

[IContentGenerationGenerateTextLiveResultInfo](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md).[generated_text](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md#generated_text)

#### Defined in

[main.ts:160389](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160389)

___


### input\_tokens

• `Optional` **input\_tokens**: `number`

number of input tokens

#### Implementation of

[IContentGenerationGenerateTextLiveResultInfo](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md).[input_tokens](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md#input_tokens)

#### Defined in

[main.ts:160383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160383)

___


### new\_tokens

• `Optional` **new\_tokens**: `number`

number of new tokens

#### Implementation of

[IContentGenerationGenerateTextLiveResultInfo](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md).[new_tokens](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md#new_tokens)

#### Defined in

[main.ts:160387](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160387)

___


### output\_tokens

• `Optional` **output\_tokens**: `number`

number of output tokens

#### Implementation of

[IContentGenerationGenerateTextLiveResultInfo](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md).[output_tokens](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md#output_tokens)

#### Defined in

[main.ts:160385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160385)

___


### supplement\_token

• `Optional` **supplement\_token**: `string`

token for generating subsequent results
you can use this parameter to continue the generation from the end of the current result;
supplement_token values are unique for each subsequent task

#### Implementation of

[IContentGenerationGenerateTextLiveResultInfo](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md).[supplement_token](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md#supplement_token)

#### Defined in

[main.ts:160393](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160393)

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

[main.ts:160406](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160406)

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

[main.ts:160427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160427)

___


### fromJS

▸ **fromJS**(`data`): [`ContentGenerationGenerateTextLiveResultInfo`](ContentGenerationGenerateTextLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationGenerateTextLiveResultInfo`](ContentGenerationGenerateTextLiveResultInfo.md)

#### Defined in

[main.ts:160420](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160420)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")