[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentGenerationGenerateLiveResultInfo

# Interface: IContentGenerationGenerateLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### generated\_text?

> `optional` **generated\_text**: `string`

resulting text

#### Defined in

main.ts:181373

***

### input\_tokens?

> `optional` **input\_tokens**: `number`

number of input tokens

#### Defined in

main.ts:181367

***

### new\_tokens?

> `optional` **new\_tokens**: `number`

number of new tokens

#### Defined in

main.ts:181371

***

### output\_tokens?

> `optional` **output\_tokens**: `number`

number of output tokens

#### Defined in

main.ts:181369

***

### supplement\_token?

> `optional` **supplement\_token**: `string`

token for generating subsequent results
you can use this parameter to continue the generation from the end of the current result;
supplement_token values are unique for each subsequent task

#### Defined in

main.ts:181377
