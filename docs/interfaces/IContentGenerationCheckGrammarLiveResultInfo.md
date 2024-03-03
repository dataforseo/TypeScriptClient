[Documentation](../README.md) / [Exports](../modules.md) / IContentGenerationCheckGrammarLiveResultInfo

# Interface: IContentGenerationCheckGrammarLiveResultInfo

## Implemented by

- [`ContentGenerationCheckGrammarLiveResultInfo`](../classes/ContentGenerationCheckGrammarLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [initial\_text](IContentGenerationCheckGrammarLiveResultInfo.md#initial_text)
- [input\_tokens](IContentGenerationCheckGrammarLiveResultInfo.md#input_tokens)
- [items](IContentGenerationCheckGrammarLiveResultInfo.md#items)
- [items\_count](IContentGenerationCheckGrammarLiveResultInfo.md#items_count)
- [language\_code](IContentGenerationCheckGrammarLiveResultInfo.md#language_code)
- [new\_tokens](IContentGenerationCheckGrammarLiveResultInfo.md#new_tokens)
- [output\_tokens](IContentGenerationCheckGrammarLiveResultInfo.md#output_tokens)

## Properties

### initial\_text

• `Optional` **initial\_text**: `string`

initial text in the POST request

#### Defined in

main.ts:161790

___

### input\_tokens

• `Optional` **input\_tokens**: `number`

number of input tokens in the POST request

#### Defined in

main.ts:161784

___

### items

• `Optional` **items**: [`ContentGenerationCheckGrammarLiveItem`](../classes/ContentGenerationCheckGrammarLiveItem.md)[]

contains grammar or spelling errors and related data

#### Defined in

main.ts:161796

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:161794

___

### language\_code

• `Optional` **language\_code**: `string`

language code in the POST request

#### Defined in

main.ts:161792

___

### new\_tokens

• `Optional` **new\_tokens**: `number`

number of new tokens in the response

#### Defined in

main.ts:161788

___

### output\_tokens

• `Optional` **output\_tokens**: `number`

number of output tokens in the response

#### Defined in

main.ts:161786
