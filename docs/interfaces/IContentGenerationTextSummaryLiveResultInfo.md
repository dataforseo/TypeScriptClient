[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentGenerationTextSummaryLiveResultInfo

# Interface: IContentGenerationTextSummaryLiveResultInfo

Defined in: main.ts:183696

## Indexable

\[`key`: `string`\]: `any`

## Properties

### automated\_readability\_index?

> `optional` **automated\_readability\_index**: `number`

Defined in: main.ts:183717

Automated Readability Index

***

### characters\_per\_word?

> `optional` **characters\_per\_word**: `number`

Defined in: main.ts:183710

average number of characters per word in the target text

***

### characters\_with\_spaces?

> `optional` **characters\_with\_spaces**: `number`

Defined in: main.ts:183706

number of characters with spaces found in the target text

***

### characters\_without\_spaces?

> `optional` **characters\_without\_spaces**: `number`

Defined in: main.ts:183704

number of characters without spaces found in the target text

***

### coleman\_liau\_index?

> `optional` **coleman\_liau\_index**: `number`

Defined in: main.ts:183719

Coleman–Liau Index

***

### flesch\_kincaid\_grade\_level?

> `optional` **flesch\_kincaid\_grade\_level**: `number`

Defined in: main.ts:183721

Flesch–Kincaid Readability Index

***

### grammar\_errors?

> `optional` **grammar\_errors**: `number`

Defined in: main.ts:183727

number of grammar errors found in the target text

***

### keyword\_density?

> `optional` **keyword\_density**: `object`

Defined in: main.ts:183715

keyword density of the target text
contains most common words and their count

#### Index Signature

\[`key`: `string`\]: `number`

***

### paragraphs?

> `optional` **paragraphs**: `number`

Defined in: main.ts:183700

number of paragraphs found in the target text

***

### sentences?

> `optional` **sentences**: `number`

Defined in: main.ts:183698

number of sentences found in the target text

***

### smog\_readability\_index?

> `optional` **smog\_readability\_index**: `number`

Defined in: main.ts:183723

SMOG Readability Index

***

### spelling\_errors?

> `optional` **spelling\_errors**: `number`

Defined in: main.ts:183725

number of spelling errors found in the target text

***

### vocabulary\_density?

> `optional` **vocabulary\_density**: `number`

Defined in: main.ts:183712

vocabulary density of the target text

***

### words?

> `optional` **words**: `number`

Defined in: main.ts:183702

number of words found in the target text

***

### words\_per\_sentence?

> `optional` **words\_per\_sentence**: `number`

Defined in: main.ts:183708

average number of words per sentence in the target text
