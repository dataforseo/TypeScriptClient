**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentGenerationCheckGrammarLiveResultInfo

# Class: ContentGenerationCheckGrammarLiveResultInfo

## Implements

- [`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationCheckGrammarLiveResultInfo(data)

> **new ContentGenerationCheckGrammarLiveResultInfo**(`data`?): [`ContentGenerationCheckGrammarLiveResultInfo`](ContentGenerationCheckGrammarLiveResultInfo.md)

#### Parameters

• **data?**: [`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md)

#### Returns

[`ContentGenerationCheckGrammarLiveResultInfo`](ContentGenerationCheckGrammarLiveResultInfo.md)

#### Source

main.ts:169435

## Properties

### initial\_text?

> **`optional`** **initial\_text**: `string`

initial text in the POST request

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`initial_text`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#initial_text)

#### Source

main.ts:169425

***

### input\_tokens?

> **`optional`** **input\_tokens**: `number`

number of input tokens in the POST request

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`input_tokens`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#input_tokens)

#### Source

main.ts:169419

***

### items?

> **`optional`** **items**: [`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)[]

contains grammar or spelling errors and related data

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`items`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#items)

#### Source

main.ts:169431

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`items_count`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#items_count)

#### Source

main.ts:169429

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in the POST request

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`language_code`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#language_code)

#### Source

main.ts:169427

***

### new\_tokens?

> **`optional`** **new\_tokens**: `number`

number of new tokens in the response

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`new_tokens`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#new_tokens)

#### Source

main.ts:169423

***

### output\_tokens?

> **`optional`** **output\_tokens**: `number`

number of output tokens in the response

#### Implementation of

[`IContentGenerationCheckGrammarLiveResultInfo`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md).[`output_tokens`](../interfaces/IContentGenerationCheckGrammarLiveResultInfo.md#output_tokens)

#### Source

main.ts:169421

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:169444

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:169471

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentGenerationCheckGrammarLiveResultInfo`](ContentGenerationCheckGrammarLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentGenerationCheckGrammarLiveResultInfo`](ContentGenerationCheckGrammarLiveResultInfo.md)

#### Source

main.ts:169464
