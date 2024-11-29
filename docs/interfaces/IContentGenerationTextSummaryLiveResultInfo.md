[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentGenerationTextSummaryLiveResultInfo

# Interface: IContentGenerationTextSummaryLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### automated\_readability\_index?

> `optional` **automated\_readability\_index**: `number`

Automated Readability Index

#### Defined in

main.ts:183649

***

### characters\_per\_word?

> `optional` **characters\_per\_word**: `number`

average number of characters per word in the target text

#### Defined in

main.ts:183642

***

### characters\_with\_spaces?

> `optional` **characters\_with\_spaces**: `number`

number of characters with spaces found in the target text

#### Defined in

main.ts:183638

***

### characters\_without\_spaces?

> `optional` **characters\_without\_spaces**: `number`

number of characters without spaces found in the target text

#### Defined in

main.ts:183636

***

### coleman\_liau\_index?

> `optional` **coleman\_liau\_index**: `number`

Coleman–Liau Index

#### Defined in

main.ts:183651

***

### flesch\_kincaid\_grade\_level?

> `optional` **flesch\_kincaid\_grade\_level**: `number`

Flesch–Kincaid Readability Index

#### Defined in

main.ts:183653

***

### grammar\_errors?

> `optional` **grammar\_errors**: `number`

number of grammar errors found in the target text

#### Defined in

main.ts:183659

***

### keyword\_density?

> `optional` **keyword\_density**: `object`

keyword density of the target text
contains most common words and their count

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:183647

***

### paragraphs?

> `optional` **paragraphs**: `number`

number of paragraphs found in the target text

#### Defined in

main.ts:183632

***

### sentences?

> `optional` **sentences**: `number`

number of sentences found in the target text

#### Defined in

main.ts:183630

***

### smog\_readability\_index?

> `optional` **smog\_readability\_index**: `number`

SMOG Readability Index

#### Defined in

main.ts:183655

***

### spelling\_errors?

> `optional` **spelling\_errors**: `number`

number of spelling errors found in the target text

#### Defined in

main.ts:183657

***

### vocabulary\_density?

> `optional` **vocabulary\_density**: `number`

vocabulary density of the target text

#### Defined in

main.ts:183644

***

### words?

> `optional` **words**: `number`

number of words found in the target text

#### Defined in

main.ts:183634

***

### words\_per\_sentence?

> `optional` **words\_per\_sentence**: `number`

average number of words per sentence in the target text

#### Defined in

main.ts:183640
