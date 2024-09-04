[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ContentGenerationCheckGrammarLiveResultInfo

# Class: ContentGenerationCheckGrammarLiveResultInfo

## Implements

- [`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationCheckGrammarLiveResultInfo()

> **new ContentGenerationCheckGrammarLiveResultInfo**(`data`?): [`ContentGenerationCheckGrammarLiveResultInfo`](ContentGenerationCheckGrammarLiveResultInfo.md)

#### Parameters

• **data?**: [`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md)

#### Returns

[`ContentGenerationCheckGrammarLiveResultInfo`](ContentGenerationCheckGrammarLiveResultInfo.md)

#### Defined in

main.ts:175342

## Properties

### initial\_text?

> `optional` **initial\_text**: `string`

initial text in the POST request

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`initial_text`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#initial_text)

#### Defined in

main.ts:175332

***

### input\_tokens?

> `optional` **input\_tokens**: `number`

number of input tokens in the POST request

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`input_tokens`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#input_tokens)

#### Defined in

main.ts:175326

***

### items?

> `optional` **items**: [`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)[]

contains grammar or spelling errors and related data

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`items`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#items)

#### Defined in

main.ts:175338

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`items_count`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#items_count)

#### Defined in

main.ts:175336

***

### language\_code?

> `optional` **language\_code**: `string`

language code in the POST request

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`language_code`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#language_code)

#### Defined in

main.ts:175334

***

### new\_tokens?

> `optional` **new\_tokens**: `number`

number of new tokens in the response

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`new_tokens`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#new_tokens)

#### Defined in

main.ts:175330

***

### output\_tokens?

> `optional` **output\_tokens**: `number`

number of output tokens in the response

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`output_tokens`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#output_tokens)

#### Defined in

main.ts:175328

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:175351

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:175378

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationCheckGrammarLiveResultInfo`](ContentGenerationCheckGrammarLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentGenerationCheckGrammarLiveResultInfo`](ContentGenerationCheckGrammarLiveResultInfo.md)

#### Defined in

main.ts:175371
