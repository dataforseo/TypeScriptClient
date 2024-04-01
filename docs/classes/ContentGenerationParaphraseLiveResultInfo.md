[Documentation](../README.md) / [Exports](../modules.md) / ContentGenerationParaphraseLiveResultInfo

# Class: ContentGenerationParaphraseLiveResultInfo

## Implements

- [`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationParaphraseLiveResultInfo.md#constructor)

### Properties

- [generated\_text](ContentGenerationParaphraseLiveResultInfo.md#generated_text)
- [input\_tokens](ContentGenerationParaphraseLiveResultInfo.md#input_tokens)
- [new\_tokens](ContentGenerationParaphraseLiveResultInfo.md#new_tokens)
- [output\_tokens](ContentGenerationParaphraseLiveResultInfo.md#output_tokens)

### Methods

- [init](ContentGenerationParaphraseLiveResultInfo.md#init)
- [toJSON](ContentGenerationParaphraseLiveResultInfo.md#tojson)
- [fromJS](ContentGenerationParaphraseLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationParaphraseLiveResultInfo**(`data?`): [`ContentGenerationParaphraseLiveResultInfo`](ContentGenerationParaphraseLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md) |

#### Returns

[`ContentGenerationParaphraseLiveResultInfo`](ContentGenerationParaphraseLiveResultInfo.md)

#### Defined in

main.ts:166638

## Properties

### generated\_text

• `Optional` **generated\_text**: `string`

paraphrased version of the given text

#### Implementation of

[IContentGenerationParaphraseLiveResultInfo](../interfaces/IContentGenerationParaphraseLiveResultInfo.md).[generated_text](../interfaces/IContentGenerationParaphraseLiveResultInfo.md#generated_text)

#### Defined in

main.ts:166634

___

### input\_tokens

• `Optional` **input\_tokens**: `number`

number of input tokens in the POST request

#### Implementation of

[IContentGenerationParaphraseLiveResultInfo](../interfaces/IContentGenerationParaphraseLiveResultInfo.md).[input_tokens](../interfaces/IContentGenerationParaphraseLiveResultInfo.md#input_tokens)

#### Defined in

main.ts:166628

___

### new\_tokens

• `Optional` **new\_tokens**: `number`

number of new tokens in the response

#### Implementation of

[IContentGenerationParaphraseLiveResultInfo](../interfaces/IContentGenerationParaphraseLiveResultInfo.md).[new_tokens](../interfaces/IContentGenerationParaphraseLiveResultInfo.md#new_tokens)

#### Defined in

main.ts:166632

___

### output\_tokens

• `Optional` **output\_tokens**: `number`

number of output tokens in the response

#### Implementation of

[IContentGenerationParaphraseLiveResultInfo](../interfaces/IContentGenerationParaphraseLiveResultInfo.md).[output_tokens](../interfaces/IContentGenerationParaphraseLiveResultInfo.md#output_tokens)

#### Defined in

main.ts:166630

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

main.ts:166647

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

main.ts:166667

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationParaphraseLiveResultInfo`](ContentGenerationParaphraseLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationParaphraseLiveResultInfo`](ContentGenerationParaphraseLiveResultInfo.md)

#### Defined in

main.ts:166660
