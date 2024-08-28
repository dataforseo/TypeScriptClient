[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ContentAnalysisApi

# Class: ContentAnalysisApi

## Constructors

### new ContentAnalysisApi()

> **new ContentAnalysisApi**(`baseUrl`?, `http`?): [`ContentAnalysisApi`](ContentAnalysisApi.md)

#### Parameters

• **baseUrl?**: `string`

• **http?**

• **http.fetch?**

#### Returns

[`ContentAnalysisApi`](ContentAnalysisApi.md)

#### Defined in

main.ts:13764

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Defined in

main.ts:13762

## Methods

### categoryTrendsLive()

> **categoryTrendsLive**(`body`): `Promise`\<[`ContentAnalysisCategoryTrendsLiveResponseInfo`](ContentAnalysisCategoryTrendsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentAnalysisCategoryTrendsLiveRequestInfo`](ContentAnalysisCategoryTrendsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisCategoryTrendsLiveResponseInfo`](ContentAnalysisCategoryTrendsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:14173

***

### contentAnalysisAvailableFilters()

> **contentAnalysisAvailableFilters**(): `Promise`\<[`ContentAnalysisAvailableFiltersResponseInfo`](ContentAnalysisAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`ContentAnalysisAvailableFiltersResponseInfo`](ContentAnalysisAvailableFiltersResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13814

***

### contentAnalysisCategories()

> **contentAnalysisCategories**(): `Promise`\<[`ContentAnalysisCategoriesResponseInfo`](ContentAnalysisCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`ContentAnalysisCategoriesResponseInfo`](ContentAnalysisCategoriesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13925

***

### contentAnalysisIdList()

> **contentAnalysisIdList**(`body`): `Promise`\<[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)\>

#### Parameters

• **body**: [`ContentAnalysisIdListRequestInfo`](ContentAnalysisIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13773

***

### contentAnalysisLanguages()

> **contentAnalysisLanguages**(): `Promise`\<[`ContentAnalysisLanguagesResponseInfo`](ContentAnalysisLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`ContentAnalysisLanguagesResponseInfo`](ContentAnalysisLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13888

***

### contentAnalysisLocations()

> **contentAnalysisLocations**(): `Promise`\<[`ContentAnalysisLocationsResponseInfo`](ContentAnalysisLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`ContentAnalysisLocationsResponseInfo`](ContentAnalysisLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13851

***

### contentAnalysisSummaryLive()

> **contentAnalysisSummaryLive**(`body`): `Promise`\<[`ContentAnalysisSummaryLiveResponseInfo`](ContentAnalysisSummaryLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentAnalysisSummaryLiveRequestInfo`](ContentAnalysisSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisSummaryLiveResponseInfo`](ContentAnalysisSummaryLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:14005

***

### phraseTrendsLive()

> **phraseTrendsLive**(`body`): `Promise`\<[`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentAnalysisPhraseTrendsLiveRequestInfo`](ContentAnalysisPhraseTrendsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:14131

***

### processCategoryTrendsLive()

> `protected` **processCategoryTrendsLive**(`response`): `Promise`\<[`ContentAnalysisCategoryTrendsLiveResponseInfo`](ContentAnalysisCategoryTrendsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisCategoryTrendsLiveResponseInfo`](ContentAnalysisCategoryTrendsLiveResponseInfo.md)\>

#### Defined in

main.ts:14193

***

### processContentAnalysisAvailableFilters()

> `protected` **processContentAnalysisAvailableFilters**(`response`): `Promise`\<[`ContentAnalysisAvailableFiltersResponseInfo`](ContentAnalysisAvailableFiltersResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisAvailableFiltersResponseInfo`](ContentAnalysisAvailableFiltersResponseInfo.md)\>

#### Defined in

main.ts:13830

***

### processContentAnalysisCategories()

> `protected` **processContentAnalysisCategories**(`response`): `Promise`\<[`ContentAnalysisCategoriesResponseInfo`](ContentAnalysisCategoriesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisCategoriesResponseInfo`](ContentAnalysisCategoriesResponseInfo.md)\>

#### Defined in

main.ts:13941

***

### processContentAnalysisIdList()

> `protected` **processContentAnalysisIdList**(`response`): `Promise`\<[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)\>

#### Defined in

main.ts:13793

***

### processContentAnalysisLanguages()

> `protected` **processContentAnalysisLanguages**(`response`): `Promise`\<[`ContentAnalysisLanguagesResponseInfo`](ContentAnalysisLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisLanguagesResponseInfo`](ContentAnalysisLanguagesResponseInfo.md)\>

#### Defined in

main.ts:13904

***

### processContentAnalysisLocations()

> `protected` **processContentAnalysisLocations**(`response`): `Promise`\<[`ContentAnalysisLocationsResponseInfo`](ContentAnalysisLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisLocationsResponseInfo`](ContentAnalysisLocationsResponseInfo.md)\>

#### Defined in

main.ts:13867

***

### processContentAnalysisSummaryLive()

> `protected` **processContentAnalysisSummaryLive**(`response`): `Promise`\<[`ContentAnalysisSummaryLiveResponseInfo`](ContentAnalysisSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisSummaryLiveResponseInfo`](ContentAnalysisSummaryLiveResponseInfo.md)\>

#### Defined in

main.ts:14025

***

### processPhraseTrendsLive()

> `protected` **processPhraseTrendsLive**(`response`): `Promise`\<[`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)\>

#### Defined in

main.ts:14151

***

### processRatingDistributionLive()

> `protected` **processRatingDistributionLive**(`response`): `Promise`\<[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)\>

#### Defined in

main.ts:14109

***

### processSearchLive()

> `protected` **processSearchLive**(`response`): `Promise`\<[`ContentAnalysisSearchLiveResponseInfo`](ContentAnalysisSearchLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisSearchLiveResponseInfo`](ContentAnalysisSearchLiveResponseInfo.md)\>

#### Defined in

main.ts:13983

***

### processSentimentAnalysisLive()

> `protected` **processSentimentAnalysisLive**(`response`): `Promise`\<[`ContentAnalysisSentimentAnalysisLiveResponseInfo`](ContentAnalysisSentimentAnalysisLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisSentimentAnalysisLiveResponseInfo`](ContentAnalysisSentimentAnalysisLiveResponseInfo.md)\>

#### Defined in

main.ts:14067

***

### ratingDistributionLive()

> **ratingDistributionLive**(`body`): `Promise`\<[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentAnalysisRatingDistributionLiveRequestInfo`](ContentAnalysisRatingDistributionLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:14089

***

### searchLive()

> **searchLive**(`body`): `Promise`\<[`ContentAnalysisSearchLiveResponseInfo`](ContentAnalysisSearchLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentAnalysisSearchLiveRequestInfo`](ContentAnalysisSearchLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisSearchLiveResponseInfo`](ContentAnalysisSearchLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13963

***

### sentimentAnalysisLive()

> **sentimentAnalysisLive**(`body`): `Promise`\<[`ContentAnalysisSentimentAnalysisLiveResponseInfo`](ContentAnalysisSentimentAnalysisLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentAnalysisSentimentAnalysisLiveRequestInfo`](ContentAnalysisSentimentAnalysisLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisSentimentAnalysisLiveResponseInfo`](ContentAnalysisSentimentAnalysisLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:14047
