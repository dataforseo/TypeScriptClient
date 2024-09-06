[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IContentGenerationCheckGrammarLiveResultInfo

# Interface: IContentGenerationCheckGrammarLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### initial\_text?

> `optional` **initial\_text**: `string`

initial text in the POST request

#### Defined in

main.ts:171370

***

### input\_tokens?

> `optional` **input\_tokens**: `number`

number of input tokens in the POST request

#### Defined in

main.ts:171364

***

### items?

> `optional` **items**: [`ContentGenerationCheckGrammarLiveItem`](../classes/ContentGenerationCheckGrammarLiveItem.md)[]

contains grammar or spelling errors and related data

#### Defined in

main.ts:171376

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:171374

***

### language\_code?

> `optional` **language\_code**: `string`

language code in the POST request

#### Defined in

main.ts:171372

***

### new\_tokens?

> `optional` **new\_tokens**: `number`

number of new tokens in the response

#### Defined in

main.ts:171368

***

### output\_tokens?

> `optional` **output\_tokens**: `number`

number of output tokens in the response

#### Defined in

main.ts:171366
