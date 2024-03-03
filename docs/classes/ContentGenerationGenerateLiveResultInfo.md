[Documentation](../README.md) / [Exports](../modules.md) / ContentGenerationGenerateLiveResultInfo

# Class: ContentGenerationGenerateLiveResultInfo

## Implements

- [`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationGenerateLiveResultInfo.md#constructor)

### Properties

- [generated\_text](ContentGenerationGenerateLiveResultInfo.md#generated_text)
- [input\_tokens](ContentGenerationGenerateLiveResultInfo.md#input_tokens)
- [new\_tokens](ContentGenerationGenerateLiveResultInfo.md#new_tokens)
- [output\_tokens](ContentGenerationGenerateLiveResultInfo.md#output_tokens)
- [supplement\_token](ContentGenerationGenerateLiveResultInfo.md#supplement_token)

### Methods

- [init](ContentGenerationGenerateLiveResultInfo.md#init)
- [toJSON](ContentGenerationGenerateLiveResultInfo.md#tojson)
- [fromJS](ContentGenerationGenerateLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationGenerateLiveResultInfo**(`data?`): [`ContentGenerationGenerateLiveResultInfo`](ContentGenerationGenerateLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md) |

#### Returns

[`ContentGenerationGenerateLiveResultInfo`](ContentGenerationGenerateLiveResultInfo.md)

#### Defined in

main.ts:160151

## Properties

### generated\_text

• `Optional` **generated\_text**: `string`

resulting text

#### Implementation of

[IContentGenerationGenerateLiveResultInfo](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[generated_text](../interfaces/IContentGenerationGenerateLiveResultInfo.md#generated_text)

#### Defined in

main.ts:160143

___

### input\_tokens

• `Optional` **input\_tokens**: `number`

number of input tokens

#### Implementation of

[IContentGenerationGenerateLiveResultInfo](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[input_tokens](../interfaces/IContentGenerationGenerateLiveResultInfo.md#input_tokens)

#### Defined in

main.ts:160137

___

### new\_tokens

• `Optional` **new\_tokens**: `number`

number of new tokens

#### Implementation of

[IContentGenerationGenerateLiveResultInfo](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[new_tokens](../interfaces/IContentGenerationGenerateLiveResultInfo.md#new_tokens)

#### Defined in

main.ts:160141

___

### output\_tokens

• `Optional` **output\_tokens**: `number`

number of output tokens

#### Implementation of

[IContentGenerationGenerateLiveResultInfo](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[output_tokens](../interfaces/IContentGenerationGenerateLiveResultInfo.md#output_tokens)

#### Defined in

main.ts:160139

___

### supplement\_token

• `Optional` **supplement\_token**: `string`

token for generating subsequent results
you can use this parameter to continue the generation from the end of the current result;
supplement_token values are unique for each subsequent task

#### Implementation of

[IContentGenerationGenerateLiveResultInfo](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[supplement_token](../interfaces/IContentGenerationGenerateLiveResultInfo.md#supplement_token)

#### Defined in

main.ts:160147

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

main.ts:160160

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

main.ts:160181

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationGenerateLiveResultInfo`](ContentGenerationGenerateLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationGenerateLiveResultInfo`](ContentGenerationGenerateLiveResultInfo.md)

#### Defined in

main.ts:160174
