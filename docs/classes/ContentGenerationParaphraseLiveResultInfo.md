[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationParaphraseLiveResultInfo

# Class: ContentGenerationParaphraseLiveResultInfo

Defined in: main.ts:182918

## Implements

- [`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationParaphraseLiveResultInfo()

> **new ContentGenerationParaphraseLiveResultInfo**(`data`?): [`ContentGenerationParaphraseLiveResultInfo`](ContentGenerationParaphraseLiveResultInfo.md)

Defined in: main.ts:182930

#### Parameters

##### data?

[`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md)

#### Returns

[`ContentGenerationParaphraseLiveResultInfo`](ContentGenerationParaphraseLiveResultInfo.md)

## Properties

### generated\_text?

> `optional` **generated\_text**: `string`

Defined in: main.ts:182926

paraphrased version of the given text

#### Implementation of

[`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md).[`generated_text`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md#generated_text)

***

### input\_tokens?

> `optional` **input\_tokens**: `number`

Defined in: main.ts:182920

number of input tokens in the POST request

#### Implementation of

[`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md).[`input_tokens`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md#input_tokens)

***

### new\_tokens?

> `optional` **new\_tokens**: `number`

Defined in: main.ts:182924

number of new tokens in the response

#### Implementation of

[`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md).[`new_tokens`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md#new_tokens)

***

### output\_tokens?

> `optional` **output\_tokens**: `number`

Defined in: main.ts:182922

number of output tokens in the response

#### Implementation of

[`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md).[`output_tokens`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md#output_tokens)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:182939

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:182959

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationParaphraseLiveResultInfo`](ContentGenerationParaphraseLiveResultInfo.md)

Defined in: main.ts:182952

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationParaphraseLiveResultInfo`](ContentGenerationParaphraseLiveResultInfo.md)
