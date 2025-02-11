[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentGenerationCheckGrammarLiveResultInfo

# Interface: IContentGenerationCheckGrammarLiveResultInfo

Defined in: main.ts:183381

## Indexable

\[`key`: `string`\]: `any`

## Properties

### initial\_text?

> `optional` **initial\_text**: `string`

Defined in: main.ts:183389

initial text in the POST request

***

### input\_tokens?

> `optional` **input\_tokens**: `number`

Defined in: main.ts:183383

number of input tokens in the POST request

***

### items?

> `optional` **items**: [`ContentGenerationCheckGrammarLiveItem`](../classes/ContentGenerationCheckGrammarLiveItem.md)[]

Defined in: main.ts:183395

contains grammar or spelling errors and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:183393

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:183391

language code in the POST request

***

### new\_tokens?

> `optional` **new\_tokens**: `number`

Defined in: main.ts:183387

number of new tokens in the response

***

### output\_tokens?

> `optional` **output\_tokens**: `number`

Defined in: main.ts:183385

number of output tokens in the response
