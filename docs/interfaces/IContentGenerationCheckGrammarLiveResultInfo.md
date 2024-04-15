**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IContentGenerationCheckGrammarLiveResultInfo

# Interface: IContentGenerationCheckGrammarLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### initial\_text?

> **`optional`** **initial\_text**: `string`

initial text in the POST request

#### Source

main.ts:167255

***

### input\_tokens?

> **`optional`** **input\_tokens**: `number`

number of input tokens in the POST request

#### Source

main.ts:167249

***

### items?

> **`optional`** **items**: [`ContentGenerationCheckGrammarLiveItem`](../classes/ContentGenerationCheckGrammarLiveItem.md)[]

contains grammar or spelling errors and related data

#### Source

main.ts:167261

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:167259

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in the POST request

#### Source

main.ts:167257

***

### new\_tokens?

> **`optional`** **new\_tokens**: `number`

number of new tokens in the response

#### Source

main.ts:167253

***

### output\_tokens?

> **`optional`** **output\_tokens**: `number`

number of output tokens in the response

#### Source

main.ts:167251
