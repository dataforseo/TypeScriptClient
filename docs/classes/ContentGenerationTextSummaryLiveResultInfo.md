[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationTextSummaryLiveResultInfo

# Class: ContentGenerationTextSummaryLiveResultInfo

Defined in: main.ts:183584

## Implements

- [`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationTextSummaryLiveResultInfo()

> **new ContentGenerationTextSummaryLiveResultInfo**(`data`?): [`ContentGenerationTextSummaryLiveResultInfo`](ContentGenerationTextSummaryLiveResultInfo.md)

Defined in: main.ts:183619

#### Parameters

##### data?

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md)

#### Returns

[`ContentGenerationTextSummaryLiveResultInfo`](ContentGenerationTextSummaryLiveResultInfo.md)

## Properties

### automated\_readability\_index?

> `optional` **automated\_readability\_index**: `number`

Defined in: main.ts:183605

Automated Readability Index

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`automated_readability_index`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#automated_readability_index)

***

### characters\_per\_word?

> `optional` **characters\_per\_word**: `number`

Defined in: main.ts:183598

average number of characters per word in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`characters_per_word`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#characters_per_word)

***

### characters\_with\_spaces?

> `optional` **characters\_with\_spaces**: `number`

Defined in: main.ts:183594

number of characters with spaces found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`characters_with_spaces`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#characters_with_spaces)

***

### characters\_without\_spaces?

> `optional` **characters\_without\_spaces**: `number`

Defined in: main.ts:183592

number of characters without spaces found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`characters_without_spaces`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#characters_without_spaces)

***

### coleman\_liau\_index?

> `optional` **coleman\_liau\_index**: `number`

Defined in: main.ts:183607

Coleman–Liau Index

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`coleman_liau_index`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#coleman_liau_index)

***

### flesch\_kincaid\_grade\_level?

> `optional` **flesch\_kincaid\_grade\_level**: `number`

Defined in: main.ts:183609

Flesch–Kincaid Readability Index

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`flesch_kincaid_grade_level`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#flesch_kincaid_grade_level)

***

### grammar\_errors?

> `optional` **grammar\_errors**: `number`

Defined in: main.ts:183615

number of grammar errors found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`grammar_errors`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#grammar_errors)

***

### keyword\_density?

> `optional` **keyword\_density**: `object`

Defined in: main.ts:183603

keyword density of the target text
contains most common words and their count

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`keyword_density`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#keyword_density)

***

### paragraphs?

> `optional` **paragraphs**: `number`

Defined in: main.ts:183588

number of paragraphs found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`paragraphs`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#paragraphs)

***

### sentences?

> `optional` **sentences**: `number`

Defined in: main.ts:183586

number of sentences found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`sentences`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#sentences)

***

### smog\_readability\_index?

> `optional` **smog\_readability\_index**: `number`

Defined in: main.ts:183611

SMOG Readability Index

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`smog_readability_index`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#smog_readability_index)

***

### spelling\_errors?

> `optional` **spelling\_errors**: `number`

Defined in: main.ts:183613

number of spelling errors found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`spelling_errors`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#spelling_errors)

***

### vocabulary\_density?

> `optional` **vocabulary\_density**: `number`

Defined in: main.ts:183600

vocabulary density of the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`vocabulary_density`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#vocabulary_density)

***

### words?

> `optional` **words**: `number`

Defined in: main.ts:183590

number of words found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`words`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#words)

***

### words\_per\_sentence?

> `optional` **words\_per\_sentence**: `number`

Defined in: main.ts:183596

average number of words per sentence in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`words_per_sentence`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#words_per_sentence)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:183628

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:183665

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationTextSummaryLiveResultInfo`](ContentGenerationTextSummaryLiveResultInfo.md)

Defined in: main.ts:183658

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationTextSummaryLiveResultInfo`](ContentGenerationTextSummaryLiveResultInfo.md)
