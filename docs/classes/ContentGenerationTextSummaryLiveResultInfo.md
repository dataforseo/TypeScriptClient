[Documentation](../README.md) / [Exports](../modules.md) / ContentGenerationTextSummaryLiveResultInfo

# Class: ContentGenerationTextSummaryLiveResultInfo

## Implements

- [`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationTextSummaryLiveResultInfo.md#constructor)

### Properties

- [automated\_readability\_index](ContentGenerationTextSummaryLiveResultInfo.md#automated_readability_index)
- [characters\_per\_word](ContentGenerationTextSummaryLiveResultInfo.md#characters_per_word)
- [characters\_with\_spaces](ContentGenerationTextSummaryLiveResultInfo.md#characters_with_spaces)
- [characters\_without\_spaces](ContentGenerationTextSummaryLiveResultInfo.md#characters_without_spaces)
- [coleman\_liau\_index](ContentGenerationTextSummaryLiveResultInfo.md#coleman_liau_index)
- [flesch\_kincaid\_grade\_level](ContentGenerationTextSummaryLiveResultInfo.md#flesch_kincaid_grade_level)
- [grammar\_errors](ContentGenerationTextSummaryLiveResultInfo.md#grammar_errors)
- [keyword\_density](ContentGenerationTextSummaryLiveResultInfo.md#keyword_density)
- [paragraphs](ContentGenerationTextSummaryLiveResultInfo.md#paragraphs)
- [sentences](ContentGenerationTextSummaryLiveResultInfo.md#sentences)
- [smog\_readability\_index](ContentGenerationTextSummaryLiveResultInfo.md#smog_readability_index)
- [spelling\_errors](ContentGenerationTextSummaryLiveResultInfo.md#spelling_errors)
- [vocabulary\_density](ContentGenerationTextSummaryLiveResultInfo.md#vocabulary_density)
- [words](ContentGenerationTextSummaryLiveResultInfo.md#words)
- [words\_per\_sentence](ContentGenerationTextSummaryLiveResultInfo.md#words_per_sentence)

### Methods

- [init](ContentGenerationTextSummaryLiveResultInfo.md#init)
- [toJSON](ContentGenerationTextSummaryLiveResultInfo.md#tojson)
- [fromJS](ContentGenerationTextSummaryLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationTextSummaryLiveResultInfo**(`data?`): [`ContentGenerationTextSummaryLiveResultInfo`](ContentGenerationTextSummaryLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md) |

#### Returns

[`ContentGenerationTextSummaryLiveResultInfo`](ContentGenerationTextSummaryLiveResultInfo.md)

#### Defined in

main.ts:167689

## Properties

### automated\_readability\_index

• `Optional` **automated\_readability\_index**: `number`

Automated Readability Index

#### Implementation of

[IContentGenerationTextSummaryLiveResultInfo](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[automated_readability_index](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#automated_readability_index)

#### Defined in

main.ts:167675

___

### characters\_per\_word

• `Optional` **characters\_per\_word**: `number`

average number of characters per word in the target text

#### Implementation of

[IContentGenerationTextSummaryLiveResultInfo](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[characters_per_word](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#characters_per_word)

#### Defined in

main.ts:167668

___

### characters\_with\_spaces

• `Optional` **characters\_with\_spaces**: `number`

number of characters with spaces found in the target text

#### Implementation of

[IContentGenerationTextSummaryLiveResultInfo](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[characters_with_spaces](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#characters_with_spaces)

#### Defined in

main.ts:167664

___

### characters\_without\_spaces

• `Optional` **characters\_without\_spaces**: `number`

number of characters without spaces found in the target text

#### Implementation of

[IContentGenerationTextSummaryLiveResultInfo](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[characters_without_spaces](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#characters_without_spaces)

#### Defined in

main.ts:167662

___

### coleman\_liau\_index

• `Optional` **coleman\_liau\_index**: `number`

Coleman–Liau Index

#### Implementation of

[IContentGenerationTextSummaryLiveResultInfo](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[coleman_liau_index](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#coleman_liau_index)

#### Defined in

main.ts:167677

___

### flesch\_kincaid\_grade\_level

• `Optional` **flesch\_kincaid\_grade\_level**: `number`

Flesch–Kincaid Readability Index

#### Implementation of

[IContentGenerationTextSummaryLiveResultInfo](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[flesch_kincaid_grade_level](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#flesch_kincaid_grade_level)

#### Defined in

main.ts:167679

___

### grammar\_errors

• `Optional` **grammar\_errors**: `number`

number of grammar errors found in the target text

#### Implementation of

[IContentGenerationTextSummaryLiveResultInfo](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[grammar_errors](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#grammar_errors)

#### Defined in

main.ts:167685

___

### keyword\_density

• `Optional` **keyword\_density**: `Object`

keyword density of the target text
contains most common words and their count

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IContentGenerationTextSummaryLiveResultInfo](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[keyword_density](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#keyword_density)

#### Defined in

main.ts:167673

___

### paragraphs

• `Optional` **paragraphs**: `number`

number of paragraphs found in the target text

#### Implementation of

[IContentGenerationTextSummaryLiveResultInfo](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[paragraphs](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#paragraphs)

#### Defined in

main.ts:167658

___

### sentences

• `Optional` **sentences**: `number`

number of sentences found in the target text

#### Implementation of

[IContentGenerationTextSummaryLiveResultInfo](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[sentences](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#sentences)

#### Defined in

main.ts:167656

___

### smog\_readability\_index

• `Optional` **smog\_readability\_index**: `number`

SMOG Readability Index

#### Implementation of

[IContentGenerationTextSummaryLiveResultInfo](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[smog_readability_index](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#smog_readability_index)

#### Defined in

main.ts:167681

___

### spelling\_errors

• `Optional` **spelling\_errors**: `number`

number of spelling errors found in the target text

#### Implementation of

[IContentGenerationTextSummaryLiveResultInfo](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[spelling_errors](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#spelling_errors)

#### Defined in

main.ts:167683

___

### vocabulary\_density

• `Optional` **vocabulary\_density**: `number`

vocabulary density of the target text

#### Implementation of

[IContentGenerationTextSummaryLiveResultInfo](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[vocabulary_density](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#vocabulary_density)

#### Defined in

main.ts:167670

___

### words

• `Optional` **words**: `number`

number of words found in the target text

#### Implementation of

[IContentGenerationTextSummaryLiveResultInfo](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[words](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#words)

#### Defined in

main.ts:167660

___

### words\_per\_sentence

• `Optional` **words\_per\_sentence**: `number`

average number of words per sentence in the target text

#### Implementation of

[IContentGenerationTextSummaryLiveResultInfo](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[words_per_sentence](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#words_per_sentence)

#### Defined in

main.ts:167666

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

main.ts:167698

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

main.ts:167735

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationTextSummaryLiveResultInfo`](ContentGenerationTextSummaryLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationTextSummaryLiveResultInfo`](ContentGenerationTextSummaryLiveResultInfo.md)

#### Defined in

main.ts:167728
