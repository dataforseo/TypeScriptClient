[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationApi

# Class: ContentGenerationApi

## Constructors

### new ContentGenerationApi()

> **new ContentGenerationApi**(`baseUrl`?, `http`?): [`ContentGenerationApi`](ContentGenerationApi.md)

#### Parameters

##### baseUrl?

`string`

##### http?

###### http.fetch

#### Returns

[`ContentGenerationApi`](ContentGenerationApi.md)

#### Defined in

main.ts:14773

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

#### Defined in

main.ts:14771

## Methods

### checkGrammarLive()

> **checkGrammarLive**(`body`): `Promise`\<[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)\>

#### Parameters

##### body

[`ContentGenerationCheckGrammarLiveRequestInfo`](ContentGenerationCheckGrammarLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:14992

***

### contentGenerationCheckGrammarLanguages()

> **contentGenerationCheckGrammarLanguages**(): `Promise`\<[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15033

***

### contentGenerationTextSummaryLanguages()

> **contentGenerationTextSummaryLanguages**(): `Promise`\<[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15149

***

### generateLive()

> **generateLive**(`body`): `Promise`\<[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)\>

#### Parameters

##### body

[`ContentGenerationGenerateLiveRequestInfo`](ContentGenerationGenerateLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:14782

***

### generateMetaTagsLive()

> **generateMetaTagsLive**(`body`): `Promise`\<[`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)\>

#### Parameters

##### body

[`ContentGenerationGenerateMetaTagsLiveRequestInfo`](ContentGenerationGenerateMetaTagsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:14866

***

### generateSubTopicsLive()

> **generateSubTopicsLive**(`body`): `Promise`\<[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)\>

#### Parameters

##### body

[`ContentGenerationGenerateSubTopicsLiveRequestInfo`](ContentGenerationGenerateSubTopicsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:14908

***

### generateTextLive()

> **generateTextLive**(`body`): `Promise`\<[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)\>

#### Parameters

##### body

[`ContentGenerationGenerateTextLiveRequestInfo`](ContentGenerationGenerateTextLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:14824

***

### grammarRules()

> **grammarRules**(): `Promise`\<[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)\>

#### Returns

`Promise`\<[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15070

***

### paraphraseLive()

> **paraphraseLive**(`body`): `Promise`\<[`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)\>

#### Parameters

##### body

[`ContentGenerationParaphraseLiveRequestInfo`](ContentGenerationParaphraseLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:14950

***

### processCheckGrammarLive()

> `protected` **processCheckGrammarLive**(`response`): `Promise`\<[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationCheckGrammarLiveResponseInfo`](ContentGenerationCheckGrammarLiveResponseInfo.md)\>

#### Defined in

main.ts:15012

***

### processContentGenerationCheckGrammarLanguages()

> `protected` **processContentGenerationCheckGrammarLanguages**(`response`): `Promise`\<[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationCheckGrammarLanguagesResponseInfo`](ContentGenerationCheckGrammarLanguagesResponseInfo.md)\>

#### Defined in

main.ts:15049

***

### processContentGenerationTextSummaryLanguages()

> `protected` **processContentGenerationTextSummaryLanguages**(`response`): `Promise`\<[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationTextSummaryLanguagesResponseInfo`](ContentGenerationTextSummaryLanguagesResponseInfo.md)\>

#### Defined in

main.ts:15165

***

### processGenerateLive()

> `protected` **processGenerateLive**(`response`): `Promise`\<[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)\>

#### Defined in

main.ts:14802

***

### processGenerateMetaTagsLive()

> `protected` **processGenerateMetaTagsLive**(`response`): `Promise`\<[`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationGenerateMetaTagsLiveResponseInfo`](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)\>

#### Defined in

main.ts:14886

***

### processGenerateSubTopicsLive()

> `protected` **processGenerateSubTopicsLive**(`response`): `Promise`\<[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationGenerateSubTopicsLiveResponseInfo`](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)\>

#### Defined in

main.ts:14928

***

### processGenerateTextLive()

> `protected` **processGenerateTextLive**(`response`): `Promise`\<[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)\>

#### Defined in

main.ts:14844

***

### processGrammarRules()

> `protected` **processGrammarRules**(`response`): `Promise`\<[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)\>

#### Defined in

main.ts:15086

***

### processParaphraseLive()

> `protected` **processParaphraseLive**(`response`): `Promise`\<[`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationParaphraseLiveResponseInfo`](ContentGenerationParaphraseLiveResponseInfo.md)\>

#### Defined in

main.ts:14970

***

### processTextSummaryLive()

> `protected` **processTextSummaryLive**(`response`): `Promise`\<[`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)\>

#### Defined in

main.ts:15128

***

### textSummaryLive()

> **textSummaryLive**(`body`): `Promise`\<[`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)\>

#### Parameters

##### body

[`ContentGenerationTextSummaryLiveRequestInfo`](ContentGenerationTextSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15108
