**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsApi

# Class: DataforseoLabsApi

## Constructors

### new DataforseoLabsApi(baseUrl, http)

> **new DataforseoLabsApi**(`baseUrl`?, `http`?): [`DataforseoLabsApi`](DataforseoLabsApi.md)

#### Parameters

• **baseUrl?**: `string`

• **http?**

• **http\.fetch?**

#### Returns

[`DataforseoLabsApi`](DataforseoLabsApi.md)

#### Source

main.ts:6446

## Properties

### baseUrl

> **`private`** **baseUrl**: `string`

#### Source

main.ts:6443

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

main.ts:6442

***

### jsonParseReviver

> **`protected`** **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Source

main.ts:6444

## Methods

### amazonBulkSearchVolumeLive()

> **amazonBulkSearchVolumeLive**(`body`): `Promise`\<[`DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7732

***

### amazonProductCompetitorsLive()

> **amazonProductCompetitorsLive**(`body`): `Promise`\<[`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7900

***

### amazonProductKeywordIntersectionsLive()

> **amazonProductKeywordIntersectionsLive**(`body`): `Promise`\<[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7942

***

### amazonProductRankOverviewLive()

> **amazonProductRankOverviewLive**(`body`): `Promise`\<[`DataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](DataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](DataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7858

***

### amazonRankedKeywordsLive()

> **amazonRankedKeywordsLive**(`body`): `Promise`\<[`DataforseoLabsAmazonRankedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsAmazonRankedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7816

***

### amazonRelatedKeywordsLive()

> **amazonRelatedKeywordsLive**(`body`): `Promise`\<[`DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7774

***

### appleAppCompetitorsLive()

> **appleAppCompetitorsLive**(`body`): `Promise`\<[`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsAppleAppCompetitorsLiveRequestInfo`](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8698

***

### appleAppIntersectionLive()

> **appleAppIntersectionLive**(`body`): `Promise`\<[`DataforseoLabsAppleAppIntersectionLiveResponseInfo`](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsAppleAppIntersectionLiveRequestInfo`](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsAppleAppIntersectionLiveResponseInfo`](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8740

***

### appleBulkAppMetricsLive()

> **appleBulkAppMetricsLive**(`body`): `Promise`\<[`DataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](DataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](DataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8614

***

### appleKeywordsForAppLive()

> **appleKeywordsForAppLive**(`body`): `Promise`\<[`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsAppleKeywordsForAppLiveRequestInfo`](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8656

***

### availableFilters()

> **availableFilters**(): `Promise`\<[`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)\>

Successful operation

#### Source

main.ts:6575

***

### bingBulkKeywordDifficultyLive()

> **bingBulkKeywordDifficultyLive**(`body`): `Promise`\<[`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7984

***

### bingBulkTrafficEstimationLive()

> **bingBulkTrafficEstimationLive**(`body`): `Promise`\<[`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8026

***

### bingCompetitorsDomainLive()

> **bingCompetitorsDomainLive**(`body`): `Promise`\<[`DataforseoLabsBingCompetitorsDomainLiveResponseInfo`](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsBingCompetitorsDomainLiveRequestInfo`](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsBingCompetitorsDomainLiveResponseInfo`](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8068

***

### bingDomainIntersectionLive()

> **bingDomainIntersectionLive**(`body`): `Promise`\<[`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsBingDomainIntersectionLiveRequestInfo`](DataforseoLabsBingDomainIntersectionLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8110

***

### bingDomainRankOverviewLive()

> **bingDomainRankOverviewLive**(`body`): `Promise`\<[`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsBingDomainRankOverviewLiveRequestInfo`](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8152

***

### bingPageIntersectionLive()

> **bingPageIntersectionLive**(`body`): `Promise`\<[`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsBingPageIntersectionLiveRequestInfo`](DataforseoLabsBingPageIntersectionLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8194

***

### bingRankedKeywordsLive()

> **bingRankedKeywordsLive**(`body`): `Promise`\<[`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsBingRankedKeywordsLiveRequestInfo`](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8236

***

### bingRelatedKeywordsLive()

> **bingRelatedKeywordsLive**(`body`): `Promise`\<[`DataforseoLabsBingRelatedKeywordsLiveResponseInfo`](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsBingRelatedKeywordsLiveRequestInfo`](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsBingRelatedKeywordsLiveResponseInfo`](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8278

***

### bingRelevantPagesLive()

> **bingRelevantPagesLive**(`body`): `Promise`\<[`DataforseoLabsBingRelevantPagesLiveResponseInfo`](DataforseoLabsBingRelevantPagesLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsBingRelevantPagesLiveRequestInfo`](DataforseoLabsBingRelevantPagesLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsBingRelevantPagesLiveResponseInfo`](DataforseoLabsBingRelevantPagesLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8320

***

### bingSerpCompetitorsLive()

> **bingSerpCompetitorsLive**(`body`): `Promise`\<[`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsBingSerpCompetitorsLiveRequestInfo`](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8362

***

### bingSubdomainsLive()

> **bingSubdomainsLive**(`body`): `Promise`\<[`DataforseoLabsBingSubdomainsLiveResponseInfo`](DataforseoLabsBingSubdomainsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsBingSubdomainsLiveRequestInfo`](DataforseoLabsBingSubdomainsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsBingSubdomainsLiveResponseInfo`](DataforseoLabsBingSubdomainsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8404

***

### categories()

> **categories**(): `Promise`\<[`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)\>

Successful operation

#### Source

main.ts:6649

***

### dataforseoLabsErrors()

> **dataforseoLabsErrors**(`body`): `Promise`\<[`DataforseoLabsErrorsResponseInfo`](DataforseoLabsErrorsResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsErrorsRequestInfo`](DataforseoLabsErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsErrorsResponseInfo`](DataforseoLabsErrorsResponseInfo.md)\>

Successful operation

#### Source

main.ts:6534

***

### dataforseoLabsIdList()

> **dataforseoLabsIdList**(`body`): `Promise`\<[`DataforseoLabsIdListResponseInfo`](DataforseoLabsIdListResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsIdListRequestInfo`](DataforseoLabsIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsIdListResponseInfo`](DataforseoLabsIdListResponseInfo.md)\>

Successful operation

#### Source

main.ts:6455

***

### dataforseoLabsLocationsAndLanguages()

> **dataforseoLabsLocationsAndLanguages**(): `Promise`\<[`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:6612

***

### dataforseoLabsStatus()

> **dataforseoLabsStatus**(): `Promise`\<[`DataforseoLabsStatusResponseInfo`](DataforseoLabsStatusResponseInfo.md)\>

#### Returns

`Promise`\<[`DataforseoLabsStatusResponseInfo`](DataforseoLabsStatusResponseInfo.md)\>

Successful operation

#### Source

main.ts:6496

***

### googleAppCompetitorsLive()

> **googleAppCompetitorsLive**(`body`): `Promise`\<[`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleAppCompetitorsLiveRequestInfo`](DataforseoLabsGoogleAppCompetitorsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8530

***

### googleAppIntersectionLive()

> **googleAppIntersectionLive**(`body`): `Promise`\<[`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleAppIntersectionLiveRequestInfo`](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8572

***

### googleAvailableHistory()

> **googleAvailableHistory**(): `Promise`\<[`DataforseoLabsGoogleAvailableHistoryResponseInfo`](DataforseoLabsGoogleAvailableHistoryResponseInfo.md)\>

#### Returns

`Promise`\<[`DataforseoLabsGoogleAvailableHistoryResponseInfo`](DataforseoLabsGoogleAvailableHistoryResponseInfo.md)\>

Successful operation

#### Source

main.ts:6686

***

### googleBulkAppMetricsLive()

> **googleBulkAppMetricsLive**(`body`): `Promise`\<[`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8446

***

### googleBulkKeywordDifficultyLive()

> **googleBulkKeywordDifficultyLive**(`body`): `Promise`\<[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:6934

***

### googleBulkTrafficEstimationLive()

> **googleBulkTrafficEstimationLive**(`body`): `Promise`\<[`DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7648

***

### googleCategoriesForDomainLive()

> **googleCategoriesForDomainLive**(`body`): `Promise`\<[`DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7018

***

### googleCompetitorsDomainLive()

> **googleCompetitorsDomainLive**(`body`): `Promise`\<[`DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo`](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7312

***

### googleDomainIntersectionLive()

> **googleDomainIntersectionLive**(`body`): `Promise`\<[`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleDomainIntersectionLiveRequestInfo`](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7354

***

### googleDomainMetricsByCategoriesLive()

> **googleDomainMetricsByCategoriesLive**(`body`): `Promise`\<[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7102

***

### googleDomainRankOverviewLive()

> **googleDomainRankOverviewLive**(`body`): `Promise`\<[`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7480

***

### googleDomainWhoisOverviewLive()

> **googleDomainWhoisOverviewLive**(`body`): `Promise`\<[`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7186

***

### googleHistoricalBulkTrafficEstimationLive()

> **googleHistoricalBulkTrafficEstimationLive**(`body`): `Promise`\<[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7690

***

### googleHistoricalRankOverviewLive()

> **googleHistoricalRankOverviewLive**(`body`): `Promise`\<[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7564

***

### googleHistoricalSearchVolumeLive()

> **googleHistoricalSearchVolumeLive**(`body`): `Promise`\<[`DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleHistoricalSearchVolumeLiveRequestInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:6892

***

### googleHistoricalSerpsLive()

> **googleHistoricalSerpsLive**(`body`): `Promise`\<[`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7522

***

### googleKeywordIdeasLive()

> **googleKeywordIdeasLive**(`body`): `Promise`\<[`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](DataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:6850

***

### googleKeywordSuggestionsLive()

> **googleKeywordSuggestionsLive**(`body`): `Promise`\<[`DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:6808

***

### googleKeywordsForAppLive()

> **googleKeywordsForAppLive**(`body`): `Promise`\<[`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](DataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:8488

***

### googleKeywordsForCategoriesLive()

> **googleKeywordsForCategoriesLive**(`body`): `Promise`\<[`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7060

***

### googleKeywordsForSiteLive()

> **googleKeywordsForSiteLive**(`body`): `Promise`\<[`DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:6724

***

### googlePageIntersectionLive()

> **googlePageIntersectionLive**(`body`): `Promise`\<[`DataforseoLabsGooglePageIntersectionLiveResponseInfo`](DataforseoLabsGooglePageIntersectionLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGooglePageIntersectionLiveRequestInfo`](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGooglePageIntersectionLiveResponseInfo`](DataforseoLabsGooglePageIntersectionLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7606

***

### googleRankedKeywordsLive()

> **googleRankedKeywordsLive**(`body`): `Promise`\<[`DataforseoLabsGoogleRankedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](DataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleRankedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7228

***

### googleRelatedKeywordsLive()

> **googleRelatedKeywordsLive**(`body`): `Promise`\<[`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:6766

***

### googleRelevantPagesLive()

> **googleRelevantPagesLive**(`body`): `Promise`\<[`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleRelevantPagesLiveRequestInfo`](DataforseoLabsGoogleRelevantPagesLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7438

***

### googleSearchIntentLive()

> **googleSearchIntentLive**(`body`): `Promise`\<[`DataforseoLabsGoogleSearchIntentLiveResponseInfo`](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleSearchIntentLiveRequestInfo`](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleSearchIntentLiveResponseInfo`](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:6976

***

### googleSerpCompetitorsLive()

> **googleSerpCompetitorsLive**(`body`): `Promise`\<[`DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7270

***

### googleSubdomainsLive()

> **googleSubdomainsLive**(`body`): `Promise`\<[`DataforseoLabsGoogleSubdomainsLiveResponseInfo`](DataforseoLabsGoogleSubdomainsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleSubdomainsLiveRequestInfo`](DataforseoLabsGoogleSubdomainsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleSubdomainsLiveResponseInfo`](DataforseoLabsGoogleSubdomainsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7396

***

### googleTopSearchesLive()

> **googleTopSearchesLive**(`body`): `Promise`\<[`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DataforseoLabsGoogleTopSearchesLiveRequestInfo`](DataforseoLabsGoogleTopSearchesLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:7144

***

### processAmazonBulkSearchVolumeLive()

> **`protected`** **processAmazonBulkSearchVolumeLive**(`response`): `Promise`\<[`DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md)\>

#### Source

main.ts:7752

***

### processAmazonProductCompetitorsLive()

> **`protected`** **processAmazonProductCompetitorsLive**(`response`): `Promise`\<[`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)\>

#### Source

main.ts:7920

***

### processAmazonProductKeywordIntersectionsLive()

> **`protected`** **processAmazonProductKeywordIntersectionsLive**(`response`): `Promise`\<[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)\>

#### Source

main.ts:7962

***

### processAmazonProductRankOverviewLive()

> **`protected`** **processAmazonProductRankOverviewLive**(`response`): `Promise`\<[`DataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](DataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](DataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md)\>

#### Source

main.ts:7878

***

### processAmazonRankedKeywordsLive()

> **`protected`** **processAmazonRankedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsAmazonRankedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAmazonRankedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md)\>

#### Source

main.ts:7836

***

### processAmazonRelatedKeywordsLive()

> **`protected`** **processAmazonRelatedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md)\>

#### Source

main.ts:7794

***

### processAppleAppCompetitorsLive()

> **`protected`** **processAppleAppCompetitorsLive**(`response`): `Promise`\<[`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)\>

#### Source

main.ts:8718

***

### processAppleAppIntersectionLive()

> **`protected`** **processAppleAppIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsAppleAppIntersectionLiveResponseInfo`](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAppleAppIntersectionLiveResponseInfo`](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md)\>

#### Source

main.ts:8760

***

### processAppleBulkAppMetricsLive()

> **`protected`** **processAppleBulkAppMetricsLive**(`response`): `Promise`\<[`DataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](DataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](DataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md)\>

#### Source

main.ts:8634

***

### processAppleKeywordsForAppLive()

> **`protected`** **processAppleKeywordsForAppLive**(`response`): `Promise`\<[`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)\>

#### Source

main.ts:8676

***

### processAvailableFilters()

> **`protected`** **processAvailableFilters**(`response`): `Promise`\<[`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)\>

#### Source

main.ts:6591

***

### processBingBulkKeywordDifficultyLive()

> **`protected`** **processBingBulkKeywordDifficultyLive**(`response`): `Promise`\<[`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)\>

#### Source

main.ts:8004

***

### processBingBulkTrafficEstimationLive()

> **`protected`** **processBingBulkTrafficEstimationLive**(`response`): `Promise`\<[`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)\>

#### Source

main.ts:8046

***

### processBingCompetitorsDomainLive()

> **`protected`** **processBingCompetitorsDomainLive**(`response`): `Promise`\<[`DataforseoLabsBingCompetitorsDomainLiveResponseInfo`](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingCompetitorsDomainLiveResponseInfo`](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md)\>

#### Source

main.ts:8088

***

### processBingDomainIntersectionLive()

> **`protected`** **processBingDomainIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)\>

#### Source

main.ts:8130

***

### processBingDomainRankOverviewLive()

> **`protected`** **processBingDomainRankOverviewLive**(`response`): `Promise`\<[`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)\>

#### Source

main.ts:8172

***

### processBingPageIntersectionLive()

> **`protected`** **processBingPageIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)\>

#### Source

main.ts:8214

***

### processBingRankedKeywordsLive()

> **`protected`** **processBingRankedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)\>

#### Source

main.ts:8256

***

### processBingRelatedKeywordsLive()

> **`protected`** **processBingRelatedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsBingRelatedKeywordsLiveResponseInfo`](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingRelatedKeywordsLiveResponseInfo`](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md)\>

#### Source

main.ts:8298

***

### processBingRelevantPagesLive()

> **`protected`** **processBingRelevantPagesLive**(`response`): `Promise`\<[`DataforseoLabsBingRelevantPagesLiveResponseInfo`](DataforseoLabsBingRelevantPagesLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingRelevantPagesLiveResponseInfo`](DataforseoLabsBingRelevantPagesLiveResponseInfo.md)\>

#### Source

main.ts:8340

***

### processBingSerpCompetitorsLive()

> **`protected`** **processBingSerpCompetitorsLive**(`response`): `Promise`\<[`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)\>

#### Source

main.ts:8382

***

### processBingSubdomainsLive()

> **`protected`** **processBingSubdomainsLive**(`response`): `Promise`\<[`DataforseoLabsBingSubdomainsLiveResponseInfo`](DataforseoLabsBingSubdomainsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingSubdomainsLiveResponseInfo`](DataforseoLabsBingSubdomainsLiveResponseInfo.md)\>

#### Source

main.ts:8424

***

### processCategories()

> **`protected`** **processCategories**(`response`): `Promise`\<[`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)\>

#### Source

main.ts:6665

***

### processDataforseoLabsErrors()

> **`protected`** **processDataforseoLabsErrors**(`response`): `Promise`\<[`DataforseoLabsErrorsResponseInfo`](DataforseoLabsErrorsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsErrorsResponseInfo`](DataforseoLabsErrorsResponseInfo.md)\>

#### Source

main.ts:6554

***

### processDataforseoLabsIdList()

> **`protected`** **processDataforseoLabsIdList**(`response`): `Promise`\<[`DataforseoLabsIdListResponseInfo`](DataforseoLabsIdListResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsIdListResponseInfo`](DataforseoLabsIdListResponseInfo.md)\>

#### Source

main.ts:6475

***

### processDataforseoLabsLocationsAndLanguages()

> **`protected`** **processDataforseoLabsLocationsAndLanguages**(`response`): `Promise`\<[`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)\>

#### Source

main.ts:6628

***

### processDataforseoLabsStatus()

> **`protected`** **processDataforseoLabsStatus**(`response`): `Promise`\<[`DataforseoLabsStatusResponseInfo`](DataforseoLabsStatusResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsStatusResponseInfo`](DataforseoLabsStatusResponseInfo.md)\>

#### Source

main.ts:6512

***

### processGoogleAppCompetitorsLive()

> **`protected`** **processGoogleAppCompetitorsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)\>

#### Source

main.ts:8550

***

### processGoogleAppIntersectionLive()

> **`protected`** **processGoogleAppIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)\>

#### Source

main.ts:8592

***

### processGoogleAvailableHistory()

> **`protected`** **processGoogleAvailableHistory**(`response`): `Promise`\<[`DataforseoLabsGoogleAvailableHistoryResponseInfo`](DataforseoLabsGoogleAvailableHistoryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleAvailableHistoryResponseInfo`](DataforseoLabsGoogleAvailableHistoryResponseInfo.md)\>

#### Source

main.ts:6702

***

### processGoogleBulkAppMetricsLive()

> **`protected`** **processGoogleBulkAppMetricsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)\>

#### Source

main.ts:8466

***

### processGoogleBulkKeywordDifficultyLive()

> **`protected`** **processGoogleBulkKeywordDifficultyLive**(`response`): `Promise`\<[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)\>

#### Source

main.ts:6954

***

### processGoogleBulkTrafficEstimationLive()

> **`protected`** **processGoogleBulkTrafficEstimationLive**(`response`): `Promise`\<[`DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo.md)\>

#### Source

main.ts:7668

***

### processGoogleCategoriesForDomainLive()

> **`protected`** **processGoogleCategoriesForDomainLive**(`response`): `Promise`\<[`DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md)\>

#### Source

main.ts:7038

***

### processGoogleCompetitorsDomainLive()

> **`protected`** **processGoogleCompetitorsDomainLive**(`response`): `Promise`\<[`DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md)\>

#### Source

main.ts:7332

***

### processGoogleDomainIntersectionLive()

> **`protected`** **processGoogleDomainIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)\>

#### Source

main.ts:7374

***

### processGoogleDomainMetricsByCategoriesLive()

> **`protected`** **processGoogleDomainMetricsByCategoriesLive**(`response`): `Promise`\<[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md)\>

#### Source

main.ts:7122

***

### processGoogleDomainRankOverviewLive()

> **`protected`** **processGoogleDomainRankOverviewLive**(`response`): `Promise`\<[`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)\>

#### Source

main.ts:7500

***

### processGoogleDomainWhoisOverviewLive()

> **`protected`** **processGoogleDomainWhoisOverviewLive**(`response`): `Promise`\<[`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)\>

#### Source

main.ts:7206

***

### processGoogleHistoricalBulkTrafficEstimationLive()

> **`protected`** **processGoogleHistoricalBulkTrafficEstimationLive**(`response`): `Promise`\<[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)\>

#### Source

main.ts:7710

***

### processGoogleHistoricalRankOverviewLive()

> **`protected`** **processGoogleHistoricalRankOverviewLive**(`response`): `Promise`\<[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)\>

#### Source

main.ts:7584

***

### processGoogleHistoricalSearchVolumeLive()

> **`protected`** **processGoogleHistoricalSearchVolumeLive**(`response`): `Promise`\<[`DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo.md)\>

#### Source

main.ts:6912

***

### processGoogleHistoricalSerpsLive()

> **`protected`** **processGoogleHistoricalSerpsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)\>

#### Source

main.ts:7542

***

### processGoogleKeywordIdeasLive()

> **`protected`** **processGoogleKeywordIdeasLive**(`response`): `Promise`\<[`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)\>

#### Source

main.ts:6870

***

### processGoogleKeywordSuggestionsLive()

> **`protected`** **processGoogleKeywordSuggestionsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo.md)\>

#### Source

main.ts:6828

***

### processGoogleKeywordsForAppLive()

> **`protected`** **processGoogleKeywordsForAppLive**(`response`): `Promise`\<[`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)\>

#### Source

main.ts:8508

***

### processGoogleKeywordsForCategoriesLive()

> **`protected`** **processGoogleKeywordsForCategoriesLive**(`response`): `Promise`\<[`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)\>

#### Source

main.ts:7080

***

### processGoogleKeywordsForSiteLive()

> **`protected`** **processGoogleKeywordsForSiteLive**(`response`): `Promise`\<[`DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md)\>

#### Source

main.ts:6744

***

### processGooglePageIntersectionLive()

> **`protected`** **processGooglePageIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsGooglePageIntersectionLiveResponseInfo`](DataforseoLabsGooglePageIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGooglePageIntersectionLiveResponseInfo`](DataforseoLabsGooglePageIntersectionLiveResponseInfo.md)\>

#### Source

main.ts:7626

***

### processGoogleRankedKeywordsLive()

> **`protected`** **processGoogleRankedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleRankedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleRankedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md)\>

#### Source

main.ts:7248

***

### processGoogleRelatedKeywordsLive()

> **`protected`** **processGoogleRelatedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)\>

#### Source

main.ts:6786

***

### processGoogleRelevantPagesLive()

> **`protected`** **processGoogleRelevantPagesLive**(`response`): `Promise`\<[`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)\>

#### Source

main.ts:7458

***

### processGoogleSearchIntentLive()

> **`protected`** **processGoogleSearchIntentLive**(`response`): `Promise`\<[`DataforseoLabsGoogleSearchIntentLiveResponseInfo`](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleSearchIntentLiveResponseInfo`](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md)\>

#### Source

main.ts:6996

***

### processGoogleSerpCompetitorsLive()

> **`protected`** **processGoogleSerpCompetitorsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md)\>

#### Source

main.ts:7290

***

### processGoogleSubdomainsLive()

> **`protected`** **processGoogleSubdomainsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleSubdomainsLiveResponseInfo`](DataforseoLabsGoogleSubdomainsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleSubdomainsLiveResponseInfo`](DataforseoLabsGoogleSubdomainsLiveResponseInfo.md)\>

#### Source

main.ts:7416

***

### processGoogleTopSearchesLive()

> **`protected`** **processGoogleTopSearchesLive**(`response`): `Promise`\<[`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)\>

#### Source

main.ts:7164
