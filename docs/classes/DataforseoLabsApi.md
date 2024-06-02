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

main.ts:6483

## Properties

### baseUrl

> **`private`** **baseUrl**: `string`

#### Source

main.ts:6480

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

main.ts:6479

***

### jsonParseReviver

> **`protected`** **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Source

main.ts:6481

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

main.ts:7769

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

main.ts:7937

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

main.ts:7979

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

main.ts:7895

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

main.ts:7853

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

main.ts:7811

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

main.ts:8735

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

main.ts:8777

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

main.ts:8651

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

main.ts:8693

***

### availableFilters()

> **availableFilters**(): `Promise`\<[`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)\>

Successful operation

#### Source

main.ts:6612

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

main.ts:8021

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

main.ts:8063

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

main.ts:8105

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

main.ts:8147

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

main.ts:8189

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

main.ts:8231

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

main.ts:8273

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

main.ts:8315

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

main.ts:8357

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

main.ts:8399

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

main.ts:8441

***

### categories()

> **categories**(): `Promise`\<[`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)\>

Successful operation

#### Source

main.ts:6686

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

main.ts:6571

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

main.ts:6492

***

### dataforseoLabsLocationsAndLanguages()

> **dataforseoLabsLocationsAndLanguages**(): `Promise`\<[`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:6649

***

### dataforseoLabsStatus()

> **dataforseoLabsStatus**(): `Promise`\<[`DataforseoLabsStatusResponseInfo`](DataforseoLabsStatusResponseInfo.md)\>

#### Returns

`Promise`\<[`DataforseoLabsStatusResponseInfo`](DataforseoLabsStatusResponseInfo.md)\>

Successful operation

#### Source

main.ts:6533

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

main.ts:8567

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

main.ts:8609

***

### googleAvailableHistory()

> **googleAvailableHistory**(): `Promise`\<[`DataforseoLabsGoogleAvailableHistoryResponseInfo`](DataforseoLabsGoogleAvailableHistoryResponseInfo.md)\>

#### Returns

`Promise`\<[`DataforseoLabsGoogleAvailableHistoryResponseInfo`](DataforseoLabsGoogleAvailableHistoryResponseInfo.md)\>

Successful operation

#### Source

main.ts:6723

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

main.ts:8483

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

main.ts:6971

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

main.ts:7685

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

main.ts:7055

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

main.ts:7349

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

main.ts:7391

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

main.ts:7139

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

main.ts:7517

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

main.ts:7223

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

main.ts:7727

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

main.ts:7601

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

main.ts:6929

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

main.ts:7559

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

main.ts:6887

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

main.ts:6845

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

main.ts:8525

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

main.ts:7097

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

main.ts:6761

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

main.ts:7643

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

main.ts:7265

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

main.ts:6803

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

main.ts:7475

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

main.ts:7013

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

main.ts:7307

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

main.ts:7433

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

main.ts:7181

***

### processAmazonBulkSearchVolumeLive()

> **`protected`** **processAmazonBulkSearchVolumeLive**(`response`): `Promise`\<[`DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md)\>

#### Source

main.ts:7789

***

### processAmazonProductCompetitorsLive()

> **`protected`** **processAmazonProductCompetitorsLive**(`response`): `Promise`\<[`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)\>

#### Source

main.ts:7957

***

### processAmazonProductKeywordIntersectionsLive()

> **`protected`** **processAmazonProductKeywordIntersectionsLive**(`response`): `Promise`\<[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)\>

#### Source

main.ts:7999

***

### processAmazonProductRankOverviewLive()

> **`protected`** **processAmazonProductRankOverviewLive**(`response`): `Promise`\<[`DataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](DataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](DataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md)\>

#### Source

main.ts:7915

***

### processAmazonRankedKeywordsLive()

> **`protected`** **processAmazonRankedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsAmazonRankedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAmazonRankedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md)\>

#### Source

main.ts:7873

***

### processAmazonRelatedKeywordsLive()

> **`protected`** **processAmazonRelatedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md)\>

#### Source

main.ts:7831

***

### processAppleAppCompetitorsLive()

> **`protected`** **processAppleAppCompetitorsLive**(`response`): `Promise`\<[`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)\>

#### Source

main.ts:8755

***

### processAppleAppIntersectionLive()

> **`protected`** **processAppleAppIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsAppleAppIntersectionLiveResponseInfo`](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAppleAppIntersectionLiveResponseInfo`](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md)\>

#### Source

main.ts:8797

***

### processAppleBulkAppMetricsLive()

> **`protected`** **processAppleBulkAppMetricsLive**(`response`): `Promise`\<[`DataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](DataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](DataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md)\>

#### Source

main.ts:8671

***

### processAppleKeywordsForAppLive()

> **`protected`** **processAppleKeywordsForAppLive**(`response`): `Promise`\<[`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)\>

#### Source

main.ts:8713

***

### processAvailableFilters()

> **`protected`** **processAvailableFilters**(`response`): `Promise`\<[`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)\>

#### Source

main.ts:6628

***

### processBingBulkKeywordDifficultyLive()

> **`protected`** **processBingBulkKeywordDifficultyLive**(`response`): `Promise`\<[`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)\>

#### Source

main.ts:8041

***

### processBingBulkTrafficEstimationLive()

> **`protected`** **processBingBulkTrafficEstimationLive**(`response`): `Promise`\<[`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)\>

#### Source

main.ts:8083

***

### processBingCompetitorsDomainLive()

> **`protected`** **processBingCompetitorsDomainLive**(`response`): `Promise`\<[`DataforseoLabsBingCompetitorsDomainLiveResponseInfo`](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingCompetitorsDomainLiveResponseInfo`](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md)\>

#### Source

main.ts:8125

***

### processBingDomainIntersectionLive()

> **`protected`** **processBingDomainIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)\>

#### Source

main.ts:8167

***

### processBingDomainRankOverviewLive()

> **`protected`** **processBingDomainRankOverviewLive**(`response`): `Promise`\<[`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)\>

#### Source

main.ts:8209

***

### processBingPageIntersectionLive()

> **`protected`** **processBingPageIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)\>

#### Source

main.ts:8251

***

### processBingRankedKeywordsLive()

> **`protected`** **processBingRankedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)\>

#### Source

main.ts:8293

***

### processBingRelatedKeywordsLive()

> **`protected`** **processBingRelatedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsBingRelatedKeywordsLiveResponseInfo`](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingRelatedKeywordsLiveResponseInfo`](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md)\>

#### Source

main.ts:8335

***

### processBingRelevantPagesLive()

> **`protected`** **processBingRelevantPagesLive**(`response`): `Promise`\<[`DataforseoLabsBingRelevantPagesLiveResponseInfo`](DataforseoLabsBingRelevantPagesLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingRelevantPagesLiveResponseInfo`](DataforseoLabsBingRelevantPagesLiveResponseInfo.md)\>

#### Source

main.ts:8377

***

### processBingSerpCompetitorsLive()

> **`protected`** **processBingSerpCompetitorsLive**(`response`): `Promise`\<[`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)\>

#### Source

main.ts:8419

***

### processBingSubdomainsLive()

> **`protected`** **processBingSubdomainsLive**(`response`): `Promise`\<[`DataforseoLabsBingSubdomainsLiveResponseInfo`](DataforseoLabsBingSubdomainsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsBingSubdomainsLiveResponseInfo`](DataforseoLabsBingSubdomainsLiveResponseInfo.md)\>

#### Source

main.ts:8461

***

### processCategories()

> **`protected`** **processCategories**(`response`): `Promise`\<[`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)\>

#### Source

main.ts:6702

***

### processDataforseoLabsErrors()

> **`protected`** **processDataforseoLabsErrors**(`response`): `Promise`\<[`DataforseoLabsErrorsResponseInfo`](DataforseoLabsErrorsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsErrorsResponseInfo`](DataforseoLabsErrorsResponseInfo.md)\>

#### Source

main.ts:6591

***

### processDataforseoLabsIdList()

> **`protected`** **processDataforseoLabsIdList**(`response`): `Promise`\<[`DataforseoLabsIdListResponseInfo`](DataforseoLabsIdListResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsIdListResponseInfo`](DataforseoLabsIdListResponseInfo.md)\>

#### Source

main.ts:6512

***

### processDataforseoLabsLocationsAndLanguages()

> **`protected`** **processDataforseoLabsLocationsAndLanguages**(`response`): `Promise`\<[`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)\>

#### Source

main.ts:6665

***

### processDataforseoLabsStatus()

> **`protected`** **processDataforseoLabsStatus**(`response`): `Promise`\<[`DataforseoLabsStatusResponseInfo`](DataforseoLabsStatusResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsStatusResponseInfo`](DataforseoLabsStatusResponseInfo.md)\>

#### Source

main.ts:6549

***

### processGoogleAppCompetitorsLive()

> **`protected`** **processGoogleAppCompetitorsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)\>

#### Source

main.ts:8587

***

### processGoogleAppIntersectionLive()

> **`protected`** **processGoogleAppIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)\>

#### Source

main.ts:8629

***

### processGoogleAvailableHistory()

> **`protected`** **processGoogleAvailableHistory**(`response`): `Promise`\<[`DataforseoLabsGoogleAvailableHistoryResponseInfo`](DataforseoLabsGoogleAvailableHistoryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleAvailableHistoryResponseInfo`](DataforseoLabsGoogleAvailableHistoryResponseInfo.md)\>

#### Source

main.ts:6739

***

### processGoogleBulkAppMetricsLive()

> **`protected`** **processGoogleBulkAppMetricsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)\>

#### Source

main.ts:8503

***

### processGoogleBulkKeywordDifficultyLive()

> **`protected`** **processGoogleBulkKeywordDifficultyLive**(`response`): `Promise`\<[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)\>

#### Source

main.ts:6991

***

### processGoogleBulkTrafficEstimationLive()

> **`protected`** **processGoogleBulkTrafficEstimationLive**(`response`): `Promise`\<[`DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo.md)\>

#### Source

main.ts:7705

***

### processGoogleCategoriesForDomainLive()

> **`protected`** **processGoogleCategoriesForDomainLive**(`response`): `Promise`\<[`DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md)\>

#### Source

main.ts:7075

***

### processGoogleCompetitorsDomainLive()

> **`protected`** **processGoogleCompetitorsDomainLive**(`response`): `Promise`\<[`DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md)\>

#### Source

main.ts:7369

***

### processGoogleDomainIntersectionLive()

> **`protected`** **processGoogleDomainIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)\>

#### Source

main.ts:7411

***

### processGoogleDomainMetricsByCategoriesLive()

> **`protected`** **processGoogleDomainMetricsByCategoriesLive**(`response`): `Promise`\<[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md)\>

#### Source

main.ts:7159

***

### processGoogleDomainRankOverviewLive()

> **`protected`** **processGoogleDomainRankOverviewLive**(`response`): `Promise`\<[`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)\>

#### Source

main.ts:7537

***

### processGoogleDomainWhoisOverviewLive()

> **`protected`** **processGoogleDomainWhoisOverviewLive**(`response`): `Promise`\<[`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)\>

#### Source

main.ts:7243

***

### processGoogleHistoricalBulkTrafficEstimationLive()

> **`protected`** **processGoogleHistoricalBulkTrafficEstimationLive**(`response`): `Promise`\<[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)\>

#### Source

main.ts:7747

***

### processGoogleHistoricalRankOverviewLive()

> **`protected`** **processGoogleHistoricalRankOverviewLive**(`response`): `Promise`\<[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)\>

#### Source

main.ts:7621

***

### processGoogleHistoricalSearchVolumeLive()

> **`protected`** **processGoogleHistoricalSearchVolumeLive**(`response`): `Promise`\<[`DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo.md)\>

#### Source

main.ts:6949

***

### processGoogleHistoricalSerpsLive()

> **`protected`** **processGoogleHistoricalSerpsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)\>

#### Source

main.ts:7579

***

### processGoogleKeywordIdeasLive()

> **`protected`** **processGoogleKeywordIdeasLive**(`response`): `Promise`\<[`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)\>

#### Source

main.ts:6907

***

### processGoogleKeywordSuggestionsLive()

> **`protected`** **processGoogleKeywordSuggestionsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo.md)\>

#### Source

main.ts:6865

***

### processGoogleKeywordsForAppLive()

> **`protected`** **processGoogleKeywordsForAppLive**(`response`): `Promise`\<[`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)\>

#### Source

main.ts:8545

***

### processGoogleKeywordsForCategoriesLive()

> **`protected`** **processGoogleKeywordsForCategoriesLive**(`response`): `Promise`\<[`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)\>

#### Source

main.ts:7117

***

### processGoogleKeywordsForSiteLive()

> **`protected`** **processGoogleKeywordsForSiteLive**(`response`): `Promise`\<[`DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md)\>

#### Source

main.ts:6781

***

### processGooglePageIntersectionLive()

> **`protected`** **processGooglePageIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsGooglePageIntersectionLiveResponseInfo`](DataforseoLabsGooglePageIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGooglePageIntersectionLiveResponseInfo`](DataforseoLabsGooglePageIntersectionLiveResponseInfo.md)\>

#### Source

main.ts:7663

***

### processGoogleRankedKeywordsLive()

> **`protected`** **processGoogleRankedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleRankedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleRankedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md)\>

#### Source

main.ts:7285

***

### processGoogleRelatedKeywordsLive()

> **`protected`** **processGoogleRelatedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)\>

#### Source

main.ts:6823

***

### processGoogleRelevantPagesLive()

> **`protected`** **processGoogleRelevantPagesLive**(`response`): `Promise`\<[`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)\>

#### Source

main.ts:7495

***

### processGoogleSearchIntentLive()

> **`protected`** **processGoogleSearchIntentLive**(`response`): `Promise`\<[`DataforseoLabsGoogleSearchIntentLiveResponseInfo`](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleSearchIntentLiveResponseInfo`](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md)\>

#### Source

main.ts:7033

***

### processGoogleSerpCompetitorsLive()

> **`protected`** **processGoogleSerpCompetitorsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md)\>

#### Source

main.ts:7327

***

### processGoogleSubdomainsLive()

> **`protected`** **processGoogleSubdomainsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleSubdomainsLiveResponseInfo`](DataforseoLabsGoogleSubdomainsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleSubdomainsLiveResponseInfo`](DataforseoLabsGoogleSubdomainsLiveResponseInfo.md)\>

#### Source

main.ts:7453

***

### processGoogleTopSearchesLive()

> **`protected`** **processGoogleTopSearchesLive**(`response`): `Promise`\<[`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)\>

#### Source

main.ts:7201
