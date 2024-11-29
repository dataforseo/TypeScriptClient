[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationParaphraseLiveResultInfo

# Class: ContentGenerationParaphraseLiveResultInfo

## Implements

- [`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationParaphraseLiveResultInfo()

> **new ContentGenerationParaphraseLiveResultInfo**(`data`?): [`ContentGenerationParaphraseLiveResultInfo`](ContentGenerationParaphraseLiveResultInfo.md)

#### Parameters

##### data?

[`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md)

#### Returns

[`ContentGenerationParaphraseLiveResultInfo`](ContentGenerationParaphraseLiveResultInfo.md)

#### Defined in

main.ts:182500

## Properties

### generated\_text?

> `optional` **generated\_text**: `string`

paraphrased version of the given text

#### Implementation of

[`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md).[`generated_text`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md#generated_text)

#### Defined in

main.ts:182496

***

### input\_tokens?

> `optional` **input\_tokens**: `number`

number of input tokens in the POST request

#### Implementation of

[`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md).[`input_tokens`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md#input_tokens)

#### Defined in

main.ts:182490

***

### new\_tokens?

> `optional` **new\_tokens**: `number`

number of new tokens in the response

#### Implementation of

[`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md).[`new_tokens`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md#new_tokens)

#### Defined in

main.ts:182494

***

### output\_tokens?

> `optional` **output\_tokens**: `number`

number of output tokens in the response

#### Implementation of

[`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md).[`output_tokens`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md#output_tokens)

#### Defined in

main.ts:182492

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:182509

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:182529

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationParaphraseLiveResultInfo`](ContentGenerationParaphraseLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationParaphraseLiveResultInfo`](ContentGenerationParaphraseLiveResultInfo.md)

#### Defined in

main.ts:182522
