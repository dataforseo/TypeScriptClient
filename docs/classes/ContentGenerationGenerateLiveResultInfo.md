[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationGenerateLiveResultInfo

# Class: ContentGenerationGenerateLiveResultInfo

Defined in: main.ts:181734

## Implements

- [`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationGenerateLiveResultInfo()

> **new ContentGenerationGenerateLiveResultInfo**(`data`?): [`ContentGenerationGenerateLiveResultInfo`](ContentGenerationGenerateLiveResultInfo.md)

Defined in: main.ts:181750

#### Parameters

##### data?

[`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md)

#### Returns

[`ContentGenerationGenerateLiveResultInfo`](ContentGenerationGenerateLiveResultInfo.md)

## Properties

### generated\_text?

> `optional` **generated\_text**: `string`

Defined in: main.ts:181742

resulting text

#### Implementation of

[`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[`generated_text`](../interfaces/IContentGenerationGenerateLiveResultInfo.md#generated_text)

***

### input\_tokens?

> `optional` **input\_tokens**: `number`

Defined in: main.ts:181736

number of input tokens

#### Implementation of

[`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[`input_tokens`](../interfaces/IContentGenerationGenerateLiveResultInfo.md#input_tokens)

***

### new\_tokens?

> `optional` **new\_tokens**: `number`

Defined in: main.ts:181740

number of new tokens

#### Implementation of

[`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[`new_tokens`](../interfaces/IContentGenerationGenerateLiveResultInfo.md#new_tokens)

***

### output\_tokens?

> `optional` **output\_tokens**: `number`

Defined in: main.ts:181738

number of output tokens

#### Implementation of

[`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[`output_tokens`](../interfaces/IContentGenerationGenerateLiveResultInfo.md#output_tokens)

***

### supplement\_token?

> `optional` **supplement\_token**: `string`

Defined in: main.ts:181746

token for generating subsequent results
you can use this parameter to continue the generation from the end of the current result;
supplement_token values are unique for each subsequent task

#### Implementation of

[`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[`supplement_token`](../interfaces/IContentGenerationGenerateLiveResultInfo.md#supplement_token)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:181759

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:181780

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationGenerateLiveResultInfo`](ContentGenerationGenerateLiveResultInfo.md)

Defined in: main.ts:181773

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationGenerateLiveResultInfo`](ContentGenerationGenerateLiveResultInfo.md)
