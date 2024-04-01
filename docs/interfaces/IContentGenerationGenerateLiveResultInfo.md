[Documentation](../README.md) / [Exports](../modules.md) / IContentGenerationGenerateLiveResultInfo

# Interface: IContentGenerationGenerateLiveResultInfo

## Implemented by

- [`ContentGenerationGenerateLiveResultInfo`](../classes/ContentGenerationGenerateLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [generated\_text](IContentGenerationGenerateLiveResultInfo.md#generated_text)
- [input\_tokens](IContentGenerationGenerateLiveResultInfo.md#input_tokens)
- [new\_tokens](IContentGenerationGenerateLiveResultInfo.md#new_tokens)
- [output\_tokens](IContentGenerationGenerateLiveResultInfo.md#output_tokens)
- [supplement\_token](IContentGenerationGenerateLiveResultInfo.md#supplement_token)

## Properties

### generated\_text

• `Optional` **generated\_text**: `string`

resulting text

#### Defined in

main.ts:165511

___

### input\_tokens

• `Optional` **input\_tokens**: `number`

number of input tokens

#### Defined in

main.ts:165505

___

### new\_tokens

• `Optional` **new\_tokens**: `number`

number of new tokens

#### Defined in

main.ts:165509

___

### output\_tokens

• `Optional` **output\_tokens**: `number`

number of output tokens

#### Defined in

main.ts:165507

___

### supplement\_token

• `Optional` **supplement\_token**: `string`

token for generating subsequent results
you can use this parameter to continue the generation from the end of the current result;
supplement_token values are unique for each subsequent task

#### Defined in

main.ts:165515
