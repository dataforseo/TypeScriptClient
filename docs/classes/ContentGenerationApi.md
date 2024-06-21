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

main.ts:13767

## Properties

### baseUrl

> **`private`** **baseUrl**: `string`

#### Source

main.ts:13764

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

main.ts:13763

***

### jsonParseReviver

> **`protected`** **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Source

main.ts:13765

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

main.ts:13986

***

### contentGenerationCheckGrammarLanguages()

> **contentGenerationCheckGrammarLanguages**(): `Promise`\<[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:14027

***

### contentGenerationTextSummaryLanguages()

> **contentGenerationTextSummaryLanguages**(): `Promise`\<[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:14143

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

main.ts:13776

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

main.ts:13860

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

main.ts:13902

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

main.ts:13818

***

### grammarRules()

> **grammarRules**(): `Promise`\<[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)\>

#### Returns

`Promise`\<[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)\>

Successful operation

#### Source

main.ts:14064

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

main.ts:13944

***

### processCheckGrammarLive()

> **`protected`** **processCheckGrammarLive**(`response`): `Promise`\<[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)\>

#### Source

main.ts:14006

***

### processContentGenerationCheckGrammarLanguages()

> **`protected`** **processContentGenerationCheckGrammarLanguages**(`response`): `Promise`\<[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)\>

#### Source

main.ts:14043

***

### processContentGenerationTextSummaryLanguages()

> **`protected`** **processContentGenerationTextSummaryLanguages**(`response`): `Promise`\<[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)\>

#### Source

main.ts:14159

***

### processGenerateLive()

> **`protected`** **processGenerateLive**(`response`): `Promise`\<[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)\>

#### Source

main.ts:13796

***

### processGenerateMetaTagsLive()

> **`protected`** **processGenerateMetaTagsLive**(`response`): `Promise`\<[`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)\>

#### Source

main.ts:13880

***

### processGenerateSubTopicsLive()

> **`protected`** **processGenerateSubTopicsLive**(`response`): `Promise`\<[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)\>

#### Source

main.ts:13922

***

### processGenerateTextLive()

> **`protected`** **processGenerateTextLive**(`response`): `Promise`\<[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)\>

#### Source

main.ts:13838

***

### processGrammarRules()

> **`protected`** **processGrammarRules**(`response`): `Promise`\<[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)\>

#### Source

main.ts:14080

***

### processParaphraseLive()

> **`protected`** **processParaphraseLive**(`response`): `Promise`\<[`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)\>

#### Source

main.ts:13964

***

### processTextSummaryLive()

> **`protected`** **processTextSummaryLive**(`response`): `Promise`\<[`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)\>

#### Source

main.ts:14122

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

main.ts:14102
