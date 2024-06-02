**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentGenerationParaphraseLiveResultInfo

# Class: ContentGenerationParaphraseLiveResultInfo

## Implements

- [`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationParaphraseLiveResultInfo(data)

> **new ContentGenerationParaphraseLiveResultInfo**(`data`?): [`ContentGenerationParaphraseLiveResultInfo`](ContentGenerationParaphraseLiveResultInfo.md)

#### Parameters

• **data?**: [`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md)

#### Returns

[`ContentGenerationParaphraseLiveResultInfo`](ContentGenerationParaphraseLiveResultInfo.md)

#### Source

main.ts:169041

## Properties

### generated\_text?

> **`optional`** **generated\_text**: `string`

paraphrased version of the given text

#### Implementation of

[`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md).[`generated_text`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md#generated_text)

#### Source

main.ts:169037

***

### input\_tokens?

> **`optional`** **input\_tokens**: `number`

number of input tokens in the POST request

#### Implementation of

[`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md).[`input_tokens`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md#input_tokens)

#### Source

main.ts:169031

***

### new\_tokens?

> **`optional`** **new\_tokens**: `number`

number of new tokens in the response

#### Implementation of

[`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md).[`new_tokens`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md#new_tokens)

#### Source

main.ts:169035

***

### output\_tokens?

> **`optional`** **output\_tokens**: `number`

number of output tokens in the response

#### Implementation of

[`IContentGenerationParaphraseLiveResultInfo`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md).[`output_tokens`](../interfaces/IContentGenerationParaphraseLiveResultInfo.md#output_tokens)

#### Source

main.ts:169033

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:169050

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:169070

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentGenerationParaphraseLiveResultInfo`](ContentGenerationParaphraseLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentGenerationParaphraseLiveResultInfo`](ContentGenerationParaphraseLiveResultInfo.md)

#### Source

main.ts:169063
