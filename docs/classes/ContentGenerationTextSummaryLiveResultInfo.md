[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationTextSummaryLiveResultInfo

# Class: ContentGenerationTextSummaryLiveResultInfo

## Implements

- [`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationTextSummaryLiveResultInfo()

> **new ContentGenerationTextSummaryLiveResultInfo**(`data`?): [`ContentGenerationTextSummaryLiveResultInfo`](ContentGenerationTextSummaryLiveResultInfo.md)

#### Parameters

##### data?

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md)

#### Returns

[`ContentGenerationTextSummaryLiveResultInfo`](ContentGenerationTextSummaryLiveResultInfo.md)

#### Defined in

main.ts:183551

## Properties

### automated\_readability\_index?

> `optional` **automated\_readability\_index**: `number`

Automated Readability Index

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`automated_readability_index`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#automated_readability_index)

#### Defined in

main.ts:183537

***

### characters\_per\_word?

> `optional` **characters\_per\_word**: `number`

average number of characters per word in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`characters_per_word`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#characters_per_word)

#### Defined in

main.ts:183530

***

### characters\_with\_spaces?

> `optional` **characters\_with\_spaces**: `number`

number of characters with spaces found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`characters_with_spaces`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#characters_with_spaces)

#### Defined in

main.ts:183526

***

### characters\_without\_spaces?

> `optional` **characters\_without\_spaces**: `number`

number of characters without spaces found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`characters_without_spaces`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#characters_without_spaces)

#### Defined in

main.ts:183524

***

### coleman\_liau\_index?

> `optional` **coleman\_liau\_index**: `number`

Coleman–Liau Index

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`coleman_liau_index`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#coleman_liau_index)

#### Defined in

main.ts:183539

***

### flesch\_kincaid\_grade\_level?

> `optional` **flesch\_kincaid\_grade\_level**: `number`

Flesch–Kincaid Readability Index

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`flesch_kincaid_grade_level`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#flesch_kincaid_grade_level)

#### Defined in

main.ts:183541

***

### grammar\_errors?

> `optional` **grammar\_errors**: `number`

number of grammar errors found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`grammar_errors`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#grammar_errors)

#### Defined in

main.ts:183547

***

### keyword\_density?

> `optional` **keyword\_density**: `object`

keyword density of the target text
contains most common words and their count

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`keyword_density`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#keyword_density)

#### Defined in

main.ts:183535

***

### paragraphs?

> `optional` **paragraphs**: `number`

number of paragraphs found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`paragraphs`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#paragraphs)

#### Defined in

main.ts:183520

***

### sentences?

> `optional` **sentences**: `number`

number of sentences found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`sentences`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#sentences)

#### Defined in

main.ts:183518

***

### smog\_readability\_index?

> `optional` **smog\_readability\_index**: `number`

SMOG Readability Index

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`smog_readability_index`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#smog_readability_index)

#### Defined in

main.ts:183543

***

### spelling\_errors?

> `optional` **spelling\_errors**: `number`

number of spelling errors found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`spelling_errors`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#spelling_errors)

#### Defined in

main.ts:183545

***

### vocabulary\_density?

> `optional` **vocabulary\_density**: `number`

vocabulary density of the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`vocabulary_density`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#vocabulary_density)

#### Defined in

main.ts:183532

***

### words?

> `optional` **words**: `number`

number of words found in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`words`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#words)

#### Defined in

main.ts:183522

***

### words\_per\_sentence?

> `optional` **words\_per\_sentence**: `number`

average number of words per sentence in the target text

#### Implementation of

[`IContentGenerationTextSummaryLiveResultInfo`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md).[`words_per_sentence`](../interfaces/IContentGenerationTextSummaryLiveResultInfo.md#words_per_sentence)

#### Defined in

main.ts:183528

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:183560

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:183597

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationTextSummaryLiveResultInfo`](ContentGenerationTextSummaryLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationTextSummaryLiveResultInfo`](ContentGenerationTextSummaryLiveResultInfo.md)

#### Defined in

main.ts:183590
