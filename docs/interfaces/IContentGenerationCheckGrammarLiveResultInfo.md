[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentGenerationCheckGrammarLiveResultInfo

# Interface: IContentGenerationCheckGrammarLiveResultInfo

Defined in: main.ts:183019

## Indexable

\[`key`: `string`\]: `any`

## Properties

### initial\_text?

> `optional` **initial\_text**: `string`

Defined in: main.ts:183027

initial text in the POST request

***

### input\_tokens?

> `optional` **input\_tokens**: `number`

Defined in: main.ts:183021

number of input tokens in the POST request

***

### items?

> `optional` **items**: [`ContentGenerationCheckGrammarLiveItem`](../classes/ContentGenerationCheckGrammarLiveItem.md)[]

Defined in: main.ts:183033

contains grammar or spelling errors and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:183031

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:183029

language code in the POST request

***

### new\_tokens?

> `optional` **new\_tokens**: `number`

Defined in: main.ts:183025

number of new tokens in the response

***

### output\_tokens?

> `optional` **output\_tokens**: `number`

Defined in: main.ts:183023

number of output tokens in the response
