[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ContentGenerationGenerateLiveResultInfo

# Class: ContentGenerationGenerateLiveResultInfo

## Implements

- [`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationGenerateLiveResultInfo()

> **new ContentGenerationGenerateLiveResultInfo**(`data`?): [`ContentGenerationGenerateLiveResultInfo`](ContentGenerationGenerateLiveResultInfo.md)

#### Parameters

• **data?**: [`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md)

#### Returns

[`ContentGenerationGenerateLiveResultInfo`](ContentGenerationGenerateLiveResultInfo.md)

#### Defined in

main.ts:173768

## Properties

### generated\_text?

> `optional` **generated\_text**: `string`

resulting text

#### Implementation of

[`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[`generated_text`](../interfaces/IContentGenerationGenerateLiveResultInfo.md#generated_text)

#### Defined in

main.ts:173760

***

### input\_tokens?

> `optional` **input\_tokens**: `number`

number of input tokens

#### Implementation of

[`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[`input_tokens`](../interfaces/IContentGenerationGenerateLiveResultInfo.md#input_tokens)

#### Defined in

main.ts:173754

***

### new\_tokens?

> `optional` **new\_tokens**: `number`

number of new tokens

#### Implementation of

[`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[`new_tokens`](../interfaces/IContentGenerationGenerateLiveResultInfo.md#new_tokens)

#### Defined in

main.ts:173758

***

### output\_tokens?

> `optional` **output\_tokens**: `number`

number of output tokens

#### Implementation of

[`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[`output_tokens`](../interfaces/IContentGenerationGenerateLiveResultInfo.md#output_tokens)

#### Defined in

main.ts:173756

***

### supplement\_token?

> `optional` **supplement\_token**: `string`

token for generating subsequent results
you can use this parameter to continue the generation from the end of the current result;
supplement_token values are unique for each subsequent task

#### Implementation of

[`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[`supplement_token`](../interfaces/IContentGenerationGenerateLiveResultInfo.md#supplement_token)

#### Defined in

main.ts:173764

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:173777

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:173798

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationGenerateLiveResultInfo`](ContentGenerationGenerateLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentGenerationGenerateLiveResultInfo`](ContentGenerationGenerateLiveResultInfo.md)

#### Defined in

main.ts:173791
