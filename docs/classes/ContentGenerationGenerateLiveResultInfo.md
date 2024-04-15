**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentGenerationGenerateLiveResultInfo

# Class: ContentGenerationGenerateLiveResultInfo

## Implements

- [`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationGenerateLiveResultInfo(data)

> **new ContentGenerationGenerateLiveResultInfo**(`data`?): [`ContentGenerationGenerateLiveResultInfo`](ContentGenerationGenerateLiveResultInfo.md)

#### Parameters

• **data?**: [`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md)

#### Returns

[`ContentGenerationGenerateLiveResultInfo`](ContentGenerationGenerateLiveResultInfo.md)

#### Source

main.ts:165616

## Properties

### generated\_text?

> **`optional`** **generated\_text**: `string`

resulting text

#### Implementation of

[`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[`generated_text`](../interfaces/IContentGenerationGenerateLiveResultInfo.md#generated_text)

#### Source

main.ts:165608

***

### input\_tokens?

> **`optional`** **input\_tokens**: `number`

number of input tokens

#### Implementation of

[`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[`input_tokens`](../interfaces/IContentGenerationGenerateLiveResultInfo.md#input_tokens)

#### Source

main.ts:165602

***

### new\_tokens?

> **`optional`** **new\_tokens**: `number`

number of new tokens

#### Implementation of

[`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[`new_tokens`](../interfaces/IContentGenerationGenerateLiveResultInfo.md#new_tokens)

#### Source

main.ts:165606

***

### output\_tokens?

> **`optional`** **output\_tokens**: `number`

number of output tokens

#### Implementation of

[`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[`output_tokens`](../interfaces/IContentGenerationGenerateLiveResultInfo.md#output_tokens)

#### Source

main.ts:165604

***

### supplement\_token?

> **`optional`** **supplement\_token**: `string`

token for generating subsequent results
you can use this parameter to continue the generation from the end of the current result;
supplement_token values are unique for each subsequent task

#### Implementation of

[`IContentGenerationGenerateLiveResultInfo`](../interfaces/IContentGenerationGenerateLiveResultInfo.md).[`supplement_token`](../interfaces/IContentGenerationGenerateLiveResultInfo.md#supplement_token)

#### Source

main.ts:165612

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:165625

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:165646

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentGenerationGenerateLiveResultInfo`](ContentGenerationGenerateLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentGenerationGenerateLiveResultInfo`](ContentGenerationGenerateLiveResultInfo.md)

#### Source

main.ts:165639
