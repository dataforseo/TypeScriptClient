**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IContentGenerationGenerateTextLiveResultInfo

# Interface: IContentGenerationGenerateTextLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### generated\_text?

> **`optional`** **generated\_text**: `string`

resulting text

#### Source

main.ts:172355

***

### input\_tokens?

> **`optional`** **input\_tokens**: `number`

number of input tokens

#### Source

main.ts:172349

***

### new\_tokens?

> **`optional`** **new\_tokens**: `number`

number of new tokens

#### Source

main.ts:172353

***

### output\_tokens?

> **`optional`** **output\_tokens**: `number`

number of output tokens

#### Source

main.ts:172351

***

### supplement\_token?

> **`optional`** **supplement\_token**: `string`

token for generating subsequent results
you can use this parameter to continue the generation from the end of the current result;
supplement_token values are unique for each subsequent task

#### Source

main.ts:172359
