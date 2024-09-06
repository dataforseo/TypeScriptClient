[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IContentGenerationTextSummaryLiveResultInfo

# Interface: IContentGenerationTextSummaryLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### automated\_readability\_index?

> `optional` **automated\_readability\_index**: `number`

Automated Readability Index

#### Defined in

main.ts:172060

***

### characters\_per\_word?

> `optional` **characters\_per\_word**: `number`

average number of characters per word in the target text

#### Defined in

main.ts:172053

***

### characters\_with\_spaces?

> `optional` **characters\_with\_spaces**: `number`

number of characters with spaces found in the target text

#### Defined in

main.ts:172049

***

### characters\_without\_spaces?

> `optional` **characters\_without\_spaces**: `number`

number of characters without spaces found in the target text

#### Defined in

main.ts:172047

***

### coleman\_liau\_index?

> `optional` **coleman\_liau\_index**: `number`

Coleman–Liau Index

#### Defined in

main.ts:172062

***

### flesch\_kincaid\_grade\_level?

> `optional` **flesch\_kincaid\_grade\_level**: `number`

Flesch–Kincaid Readability Index

#### Defined in

main.ts:172064

***

### grammar\_errors?

> `optional` **grammar\_errors**: `number`

number of grammar errors found in the target text

#### Defined in

main.ts:172070

***

### keyword\_density?

> `optional` **keyword\_density**: `object`

keyword density of the target text
contains most common words and their count

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:172058

***

### paragraphs?

> `optional` **paragraphs**: `number`

number of paragraphs found in the target text

#### Defined in

main.ts:172043

***

### sentences?

> `optional` **sentences**: `number`

number of sentences found in the target text

#### Defined in

main.ts:172041

***

### smog\_readability\_index?

> `optional` **smog\_readability\_index**: `number`

SMOG Readability Index

#### Defined in

main.ts:172066

***

### spelling\_errors?

> `optional` **spelling\_errors**: `number`

number of spelling errors found in the target text

#### Defined in

main.ts:172068

***

### vocabulary\_density?

> `optional` **vocabulary\_density**: `number`

vocabulary density of the target text

#### Defined in

main.ts:172055

***

### words?

> `optional` **words**: `number`

number of words found in the target text

#### Defined in

main.ts:172045

***

### words\_per\_sentence?

> `optional` **words\_per\_sentence**: `number`

average number of words per sentence in the target text

#### Defined in

main.ts:172051
