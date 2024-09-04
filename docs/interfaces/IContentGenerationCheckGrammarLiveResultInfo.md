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

main.ts:171337

***

### input\_tokens?

> `optional` **input\_tokens**: `number`

number of input tokens in the POST request

#### Defined in

main.ts:171331

***

### items?

> `optional` **items**: [`ContentGenerationCheckGrammarLiveItem`](../classes/ContentGenerationCheckGrammarLiveItem.md)[]

contains grammar or spelling errors and related data

#### Defined in

main.ts:171343

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:171341

***

### language\_code?

> `optional` **language\_code**: `string`

language code in the POST request

#### Defined in

main.ts:171339

***

### new\_tokens?

> `optional` **new\_tokens**: `number`

number of new tokens in the response

#### Defined in

main.ts:171335

***

### output\_tokens?

> `optional` **output\_tokens**: `number`

number of output tokens in the response

#### Defined in

main.ts:171333
