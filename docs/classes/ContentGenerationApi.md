**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentGenerationApi

# Class: ContentGenerationApi

## Constructors

### new ContentGenerationApi(baseUrl, http)

> **new ContentGenerationApi**(`baseUrl`?, `http`?): [`ContentGenerationApi`](ContentGenerationApi.md)

#### Parameters

• **baseUrl?**: `string`

• **http?**

• **http\.fetch?**

#### Returns

[`ContentGenerationApi`](ContentGenerationApi.md)

#### Source

main.ts:13692

## Properties

### baseUrl

> **`private`** **baseUrl**: `string`

#### Source

main.ts:13689

***

### http

> **`private`** **http**: `Object`

#### http.fetch()

##### Parameters

• **url**: `RequestInfo`

• **init?**: `RequestInit`

##### Returns

`Promise`\<`Response`\>

#### Source

main.ts:13688

***

### jsonParseReviver

> **`protected`** **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Source

main.ts:13690

## Methods

### checkGrammarLive()

> **checkGrammarLive**(`body`): `Promise`\<[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentGenerationCheckGrammarLiveRequestInfo`](ContentGenerationCheckGrammarLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:13911

***

### contentGenerationCheckGrammarLanguages()

> **contentGenerationCheckGrammarLanguages**(): `Promise`\<[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:13952

***

### contentGenerationTextSummaryLanguages()

> **contentGenerationTextSummaryLanguages**(): `Promise`\<[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:14068

***

### generateLive()

> **generateLive**(`body`): `Promise`\<[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentGenerationGenerateLiveRequestInfo`](ContentGenerationGenerateLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:13701

***

### generateMetaTagsLive()

> **generateMetaTagsLive**(`body`): `Promise`\<[`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentGenerationGenerateMetaTagsLiveRequestInfo`](ContentGenerationGenerateMetaTagsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:13785

***

### generateSubTopicsLive()

> **generateSubTopicsLive**(`body`): `Promise`\<[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentGenerationGenerateSubTopicsLiveRequestInfo`](ContentGenerationGenerateSubTopicsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:13827

***

### generateTextLive()

> **generateTextLive**(`body`): `Promise`\<[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentGenerationGenerateTextLiveRequestInfo`](ContentGenerationGenerateTextLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:13743

***

### grammarRules()

> **grammarRules**(): `Promise`\<[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)\>

#### Returns

`Promise`\<[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)\>

Successful operation

#### Source

main.ts:13989

***

### paraphraseLive()

> **paraphraseLive**(`body`): `Promise`\<[`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentGenerationParaphraseLiveRequestInfo`](ContentGenerationParaphraseLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:13869

***

### processCheckGrammarLive()

> **`protected`** **processCheckGrammarLive**(`response`): `Promise`\<[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)\>

#### Source

main.ts:13931

***

### processContentGenerationCheckGrammarLanguages()

> **`protected`** **processContentGenerationCheckGrammarLanguages**(`response`): `Promise`\<[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)\>

#### Source

main.ts:13968

***

### processContentGenerationTextSummaryLanguages()

> **`protected`** **processContentGenerationTextSummaryLanguages**(`response`): `Promise`\<[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)\>

#### Source

main.ts:14084

***

### processGenerateLive()

> **`protected`** **processGenerateLive**(`response`): `Promise`\<[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)\>

#### Source

main.ts:13721

***

### processGenerateMetaTagsLive()

> **`protected`** **processGenerateMetaTagsLive**(`response`): `Promise`\<[`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)\>

#### Source

main.ts:13805

***

### processGenerateSubTopicsLive()

> **`protected`** **processGenerateSubTopicsLive**(`response`): `Promise`\<[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)\>

#### Source

main.ts:13847

***

### processGenerateTextLive()

> **`protected`** **processGenerateTextLive**(`response`): `Promise`\<[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)\>

#### Source

main.ts:13763

***

### processGrammarRules()

> **`protected`** **processGrammarRules**(`response`): `Promise`\<[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)\>

#### Source

main.ts:14005

***

### processParaphraseLive()

> **`protected`** **processParaphraseLive**(`response`): `Promise`\<[`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)\>

#### Source

main.ts:13889

***

### processTextSummaryLive()

> **`protected`** **processTextSummaryLive**(`response`): `Promise`\<[`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)\>

#### Source

main.ts:14047

***

### textSummaryLive()

> **textSummaryLive**(`body`): `Promise`\<[`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentGenerationTextSummaryLiveRequestInfo`](ContentGenerationTextSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:14027
