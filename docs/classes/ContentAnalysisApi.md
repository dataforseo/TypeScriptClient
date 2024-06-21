**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentAnalysisApi

# Class: ContentAnalysisApi

## Constructors

### new ContentAnalysisApi(baseUrl, http)

> **new ContentAnalysisApi**(`baseUrl`?, `http`?): [`ContentAnalysisApi`](ContentAnalysisApi.md)

#### Parameters

• **baseUrl?**: `string`

• **http?**

• **http\.fetch?**

#### Returns

[`ContentAnalysisApi`](ContentAnalysisApi.md)

#### Source

main.ts:13314

## Properties

### baseUrl

> **`private`** **baseUrl**: `string`

#### Source

main.ts:13311

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

main.ts:13310

***

### jsonParseReviver

> **`protected`** **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Source

main.ts:13312

## Methods

### categoryTrendsLive()

> **categoryTrendsLive**(`body`): `Promise`\<[`ContentAnalysisCategoryTrendsLiveResponseInfo`](ContentAnalysisCategoryTrendsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentAnalysisCategoryTrendsLiveRequestInfo`](ContentAnalysisCategoryTrendsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisCategoryTrendsLiveResponseInfo`](ContentAnalysisCategoryTrendsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:13723

***

### contentAnalysisAvailableFilters()

> **contentAnalysisAvailableFilters**(): `Promise`\<[`ContentAnalysisAvailableFiltersResponseInfo`](ContentAnalysisAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`ContentAnalysisAvailableFiltersResponseInfo`](ContentAnalysisAvailableFiltersResponseInfo.md)\>

Successful operation

#### Source

main.ts:13364

***

### contentAnalysisCategories()

> **contentAnalysisCategories**(): `Promise`\<[`ContentAnalysisCategoriesResponseInfo`](ContentAnalysisCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`ContentAnalysisCategoriesResponseInfo`](ContentAnalysisCategoriesResponseInfo.md)\>

Successful operation

#### Source

main.ts:13475

***

### contentAnalysisIdList()

> **contentAnalysisIdList**(`body`): `Promise`\<[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)\>

#### Parameters

• **body**: [`ContentAnalysisIdListRequestInfo`](ContentAnalysisIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)\>

Successful operation

#### Source

main.ts:13323

***

### contentAnalysisLanguages()

> **contentAnalysisLanguages**(): `Promise`\<[`ContentAnalysisLanguagesResponseInfo`](ContentAnalysisLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`ContentAnalysisLanguagesResponseInfo`](ContentAnalysisLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:13438

***

### contentAnalysisLocations()

> **contentAnalysisLocations**(): `Promise`\<[`ContentAnalysisLocationsResponseInfo`](ContentAnalysisLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`ContentAnalysisLocationsResponseInfo`](ContentAnalysisLocationsResponseInfo.md)\>

Successful operation

#### Source

main.ts:13401

***

### contentAnalysisSummaryLive()

> **contentAnalysisSummaryLive**(`body`): `Promise`\<[`ContentAnalysisSummaryLiveResponseInfo`](ContentAnalysisSummaryLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentAnalysisSummaryLiveRequestInfo`](ContentAnalysisSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisSummaryLiveResponseInfo`](ContentAnalysisSummaryLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:13555

***

### phraseTrendsLive()

> **phraseTrendsLive**(`body`): `Promise`\<[`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentAnalysisPhraseTrendsLiveRequestInfo`](ContentAnalysisPhraseTrendsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:13681

***

### processCategoryTrendsLive()

> **`protected`** **processCategoryTrendsLive**(`response`): `Promise`\<[`ContentAnalysisCategoryTrendsLiveResponseInfo`](ContentAnalysisCategoryTrendsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisCategoryTrendsLiveResponseInfo`](ContentAnalysisCategoryTrendsLiveResponseInfo.md)\>

#### Source

main.ts:13743

***

### processContentAnalysisAvailableFilters()

> **`protected`** **processContentAnalysisAvailableFilters**(`response`): `Promise`\<[`ContentAnalysisAvailableFiltersResponseInfo`](ContentAnalysisAvailableFiltersResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisAvailableFiltersResponseInfo`](ContentAnalysisAvailableFiltersResponseInfo.md)\>

#### Source

main.ts:13380

***

### processContentAnalysisCategories()

> **`protected`** **processContentAnalysisCategories**(`response`): `Promise`\<[`ContentAnalysisCategoriesResponseInfo`](ContentAnalysisCategoriesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisCategoriesResponseInfo`](ContentAnalysisCategoriesResponseInfo.md)\>

#### Source

main.ts:13491

***

### processContentAnalysisIdList()

> **`protected`** **processContentAnalysisIdList**(`response`): `Promise`\<[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)\>

#### Source

main.ts:13343

***

### processContentAnalysisLanguages()

> **`protected`** **processContentAnalysisLanguages**(`response`): `Promise`\<[`ContentAnalysisLanguagesResponseInfo`](ContentAnalysisLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisLanguagesResponseInfo`](ContentAnalysisLanguagesResponseInfo.md)\>

#### Source

main.ts:13454

***

### processContentAnalysisLocations()

> **`protected`** **processContentAnalysisLocations**(`response`): `Promise`\<[`ContentAnalysisLocationsResponseInfo`](ContentAnalysisLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisLocationsResponseInfo`](ContentAnalysisLocationsResponseInfo.md)\>

#### Source

main.ts:13417

***

### processContentAnalysisSummaryLive()

> **`protected`** **processContentAnalysisSummaryLive**(`response`): `Promise`\<[`ContentAnalysisSummaryLiveResponseInfo`](ContentAnalysisSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisSummaryLiveResponseInfo`](ContentAnalysisSummaryLiveResponseInfo.md)\>

#### Source

main.ts:13575

***

### processPhraseTrendsLive()

> **`protected`** **processPhraseTrendsLive**(`response`): `Promise`\<[`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)\>

#### Source

main.ts:13701

***

### processRatingDistributionLive()

> **`protected`** **processRatingDistributionLive**(`response`): `Promise`\<[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)\>

#### Source

main.ts:13659

***

### processSearchLive()

> **`protected`** **processSearchLive**(`response`): `Promise`\<[`ContentAnalysisSearchLiveResponseInfo`](ContentAnalysisSearchLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisSearchLiveResponseInfo`](ContentAnalysisSearchLiveResponseInfo.md)\>

#### Source

main.ts:13533

***

### processSentimentAnalysisLive()

> **`protected`** **processSentimentAnalysisLive**(`response`): `Promise`\<[`ContentAnalysisSentimentAnalysisLiveResponseInfo`](ContentAnalysisSentimentAnalysisLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`ContentAnalysisSentimentAnalysisLiveResponseInfo`](ContentAnalysisSentimentAnalysisLiveResponseInfo.md)\>

#### Source

main.ts:13617

***

### ratingDistributionLive()

> **ratingDistributionLive**(`body`): `Promise`\<[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentAnalysisRatingDistributionLiveRequestInfo`](ContentAnalysisRatingDistributionLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:13639

***

### searchLive()

> **searchLive**(`body`): `Promise`\<[`ContentAnalysisSearchLiveResponseInfo`](ContentAnalysisSearchLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentAnalysisSearchLiveRequestInfo`](ContentAnalysisSearchLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisSearchLiveResponseInfo`](ContentAnalysisSearchLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:13513

***

### sentimentAnalysisLive()

> **sentimentAnalysisLive**(`body`): `Promise`\<[`ContentAnalysisSentimentAnalysisLiveResponseInfo`](ContentAnalysisSentimentAnalysisLiveResponseInfo.md)\>

#### Parameters

• **body**: [`ContentAnalysisSentimentAnalysisLiveRequestInfo`](ContentAnalysisSentimentAnalysisLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisSentimentAnalysisLiveResponseInfo`](ContentAnalysisSentimentAnalysisLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:13597
