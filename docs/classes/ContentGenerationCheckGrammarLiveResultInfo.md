[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationCheckGrammarLiveResultInfo

# Class: ContentGenerationCheckGrammarLiveResultInfo

Defined in: main.ts:183306

## Implements

- [`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationCheckGrammarLiveResultInfo()

> **new ContentGenerationCheckGrammarLiveResultInfo**(`data`?): [`ContentGenerationCheckGrammarLiveResultInfo`](ContentGenerationCheckGrammarLiveResultInfo.md)

Defined in: main.ts:183324

#### Parameters

##### data?

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md)

#### Returns

[`ContentGenerationCheckGrammarLiveResultInfo`](ContentGenerationCheckGrammarLiveResultInfo.md)

## Properties

### initial\_text?

> `optional` **initial\_text**: `string`

Defined in: main.ts:183314

initial text in the POST request

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`initial_text`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#initial_text)

***

### input\_tokens?

> `optional` **input\_tokens**: `number`

Defined in: main.ts:183308

number of input tokens in the POST request

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`input_tokens`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#input_tokens)

***

### items?

> `optional` **items**: [`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)[]

Defined in: main.ts:183320

contains grammar or spelling errors and related data

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`items`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:183318

the number of results returned in the items array

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`items_count`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:183316

language code in the POST request

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`language_code`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#language_code)

***

### new\_tokens?

> `optional` **new\_tokens**: `number`

Defined in: main.ts:183312

number of new tokens in the response

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`new_tokens`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#new_tokens)

***

### output\_tokens?

> `optional` **output\_tokens**: `number`

Defined in: main.ts:183310

number of output tokens in the response

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`output_tokens`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#output_tokens)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:183333

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:183360

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationCheckGrammarLiveResultInfo`](ContentGenerationCheckGrammarLiveResultInfo.md)

Defined in: main.ts:183353

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationCheckGrammarLiveResultInfo`](ContentGenerationCheckGrammarLiveResultInfo.md)
