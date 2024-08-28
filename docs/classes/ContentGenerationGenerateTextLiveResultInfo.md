[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ContentGenerationGenerateTextLiveResultInfo

# Class: ContentGenerationGenerateTextLiveResultInfo

## Implements

- [`IContentGenerationGenerateTextLiveResultInfo`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationGenerateTextLiveResultInfo()

> **new ContentGenerationGenerateTextLiveResultInfo**(`data`?): [`ContentGenerationGenerateTextLiveResultInfo`](ContentGenerationGenerateTextLiveResultInfo.md)

#### Parameters

• **data?**: [`IContentGenerationGenerateTextLiveResultInfo`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md)

#### Returns

[`ContentGenerationGenerateTextLiveResultInfo`](ContentGenerationGenerateTextLiveResultInfo.md)

#### Defined in

main.ts:174134

## Properties

### generated\_text?

> `optional` **generated\_text**: `string`

resulting text

#### Implementation of

[`IContentGenerationGenerateTextLiveResultInfo`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md).[`generated_text`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md#generated_text)

#### Defined in

main.ts:174126

***

### input\_tokens?

> `optional` **input\_tokens**: `number`

number of input tokens

#### Implementation of

[`IContentGenerationGenerateTextLiveResultInfo`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md).[`input_tokens`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md#input_tokens)

#### Defined in

main.ts:174120

***

### new\_tokens?

> `optional` **new\_tokens**: `number`

number of new tokens

#### Implementation of

[`IContentGenerationGenerateTextLiveResultInfo`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md).[`new_tokens`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md#new_tokens)

#### Defined in

main.ts:174124

***

### output\_tokens?

> `optional` **output\_tokens**: `number`

number of output tokens

#### Implementation of

[`IContentGenerationGenerateTextLiveResultInfo`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md).[`output_tokens`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md#output_tokens)

#### Defined in

main.ts:174122

***

### supplement\_token?

> `optional` **supplement\_token**: `string`

token for generating subsequent results
you can use this parameter to continue the generation from the end of the current result;
supplement_token values are unique for each subsequent task

#### Implementation of

[`IContentGenerationGenerateTextLiveResultInfo`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md).[`supplement_token`](../interfaces/IContentGenerationGenerateTextLiveResultInfo.md#supplement_token)

#### Defined in

main.ts:174130

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:174143

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:174164

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationGenerateTextLiveResultInfo`](ContentGenerationGenerateTextLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentGenerationGenerateTextLiveResultInfo`](ContentGenerationGenerateTextLiveResultInfo.md)

#### Defined in

main.ts:174157
