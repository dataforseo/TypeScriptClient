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

main.ts:170882

***

### input\_tokens?

> **`optional`** **input\_tokens**: `number`

number of input tokens in the POST request

#### Source

main.ts:170876

***

### items?

> **`optional`** **items**: [`ContentGenerationCheckGrammarLiveItem`](../classes/ContentGenerationCheckGrammarLiveItem.md)[]

contains grammar or spelling errors and related data

#### Source

main.ts:170888

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:170886

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in the POST request

#### Source

main.ts:170884

***

### new\_tokens?

> **`optional`** **new\_tokens**: `number`

number of new tokens in the response

#### Source

main.ts:170880

***

### output\_tokens?

> **`optional`** **output\_tokens**: `number`

number of output tokens in the response

#### Source

main.ts:170878
