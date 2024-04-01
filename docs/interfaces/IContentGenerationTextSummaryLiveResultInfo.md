[Documentation](../README.md) / [Exports](../modules.md) / IContentGenerationTextSummaryLiveResultInfo

# Interface: IContentGenerationTextSummaryLiveResultInfo

## Implemented by

- [`ContentGenerationTextSummaryLiveResultInfo`](../classes/ContentGenerationTextSummaryLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [automated\_readability\_index](IContentGenerationTextSummaryLiveResultInfo.md#automated_readability_index)
- [characters\_per\_word](IContentGenerationTextSummaryLiveResultInfo.md#characters_per_word)
- [characters\_with\_spaces](IContentGenerationTextSummaryLiveResultInfo.md#characters_with_spaces)
- [characters\_without\_spaces](IContentGenerationTextSummaryLiveResultInfo.md#characters_without_spaces)
- [coleman\_liau\_index](IContentGenerationTextSummaryLiveResultInfo.md#coleman_liau_index)
- [flesch\_kincaid\_grade\_level](IContentGenerationTextSummaryLiveResultInfo.md#flesch_kincaid_grade_level)
- [grammar\_errors](IContentGenerationTextSummaryLiveResultInfo.md#grammar_errors)
- [keyword\_density](IContentGenerationTextSummaryLiveResultInfo.md#keyword_density)
- [paragraphs](IContentGenerationTextSummaryLiveResultInfo.md#paragraphs)
- [sentences](IContentGenerationTextSummaryLiveResultInfo.md#sentences)
- [smog\_readability\_index](IContentGenerationTextSummaryLiveResultInfo.md#smog_readability_index)
- [spelling\_errors](IContentGenerationTextSummaryLiveResultInfo.md#spelling_errors)
- [vocabulary\_density](IContentGenerationTextSummaryLiveResultInfo.md#vocabulary_density)
- [words](IContentGenerationTextSummaryLiveResultInfo.md#words)
- [words\_per\_sentence](IContentGenerationTextSummaryLiveResultInfo.md#words_per_sentence)

## Properties

### automated\_readability\_index

• `Optional` **automated\_readability\_index**: `number`

Automated Readability Index

#### Defined in

main.ts:167787

___

### characters\_per\_word

• `Optional` **characters\_per\_word**: `number`

average number of characters per word in the target text

#### Defined in

main.ts:167780

___

### characters\_with\_spaces

• `Optional` **characters\_with\_spaces**: `number`

number of characters with spaces found in the target text

#### Defined in

main.ts:167776

___

### characters\_without\_spaces

• `Optional` **characters\_without\_spaces**: `number`

number of characters without spaces found in the target text

#### Defined in

main.ts:167774

___

### coleman\_liau\_index

• `Optional` **coleman\_liau\_index**: `number`

Coleman–Liau Index

#### Defined in

main.ts:167789

___

### flesch\_kincaid\_grade\_level

• `Optional` **flesch\_kincaid\_grade\_level**: `number`

Flesch–Kincaid Readability Index

#### Defined in

main.ts:167791

___

### grammar\_errors

• `Optional` **grammar\_errors**: `number`

number of grammar errors found in the target text

#### Defined in

main.ts:167797

___

### keyword\_density

• `Optional` **keyword\_density**: `Object`

keyword density of the target text
contains most common words and their count

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:167785

___

### paragraphs

• `Optional` **paragraphs**: `number`

number of paragraphs found in the target text

#### Defined in

main.ts:167770

___

### sentences

• `Optional` **sentences**: `number`

number of sentences found in the target text

#### Defined in

main.ts:167768

___

### smog\_readability\_index

• `Optional` **smog\_readability\_index**: `number`

SMOG Readability Index

#### Defined in

main.ts:167793

___

### spelling\_errors

• `Optional` **spelling\_errors**: `number`

number of spelling errors found in the target text

#### Defined in

main.ts:167795

___

### vocabulary\_density

• `Optional` **vocabulary\_density**: `number`

vocabulary density of the target text

#### Defined in

main.ts:167782

___

### words

• `Optional` **words**: `number`

number of words found in the target text

#### Defined in

main.ts:167772

___

### words\_per\_sentence

• `Optional` **words\_per\_sentence**: `number`

average number of words per sentence in the target text

#### Defined in

main.ts:167778
