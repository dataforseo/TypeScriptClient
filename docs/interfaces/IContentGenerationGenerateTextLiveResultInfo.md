[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentGenerationGenerateTextLiveResultInfo

# Interface: IContentGenerationGenerateTextLiveResultInfo

Defined in: main.ts:181799

## Indexable

\[`key`: `string`\]: `any`

## Properties

### generated\_text?

> `optional` **generated\_text**: `string`

Defined in: main.ts:181807

resulting text

***

### input\_tokens?

> `optional` **input\_tokens**: `number`

Defined in: main.ts:181801

number of input tokens

***

### new\_tokens?

> `optional` **new\_tokens**: `number`

Defined in: main.ts:181805

number of new tokens

***

### output\_tokens?

> `optional` **output\_tokens**: `number`

Defined in: main.ts:181803

number of output tokens

***

### supplement\_token?

> `optional` **supplement\_token**: `string`

Defined in: main.ts:181811

token for generating subsequent results
you can use this parameter to continue the generation from the end of the current result;
supplement_token values are unique for each subsequent task
