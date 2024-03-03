[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsApi

# Class: DataforseoLabsApi

## Table of contents

### Constructors

- [constructor](DataforseoLabsApi.md#constructor)

### Properties

- [baseUrl](DataforseoLabsApi.md#baseurl)
- [http](DataforseoLabsApi.md#http)
- [jsonParseReviver](DataforseoLabsApi.md#jsonparsereviver)

### Methods

- [amazonBulkSearchVolumeLive](DataforseoLabsApi.md#amazonbulksearchvolumelive)
- [amazonProductCompetitorsLive](DataforseoLabsApi.md#amazonproductcompetitorslive)
- [amazonProductKeywordIntersectionsLive](DataforseoLabsApi.md#amazonproductkeywordintersectionslive)
- [amazonProductRankOverviewLive](DataforseoLabsApi.md#amazonproductrankoverviewlive)
- [amazonRankedKeywordsLive](DataforseoLabsApi.md#amazonrankedkeywordslive)
- [amazonRelatedKeywordsLive](DataforseoLabsApi.md#amazonrelatedkeywordslive)
- [appleAppCompetitorsLive](DataforseoLabsApi.md#appleappcompetitorslive)
- [appleAppIntersectionLive](DataforseoLabsApi.md#appleappintersectionlive)
- [appleBulkAppMetricsLive](DataforseoLabsApi.md#applebulkappmetricslive)
- [appleKeywordsForAppLive](DataforseoLabsApi.md#applekeywordsforapplive)
- [availableFilters](DataforseoLabsApi.md#availablefilters)
- [bingBulkKeywordDifficultyLive](DataforseoLabsApi.md#bingbulkkeyworddifficultylive)
- [bingBulkTrafficEstimationLive](DataforseoLabsApi.md#bingbulktrafficestimationlive)
- [bingCompetitorsDomainLive](DataforseoLabsApi.md#bingcompetitorsdomainlive)
- [bingDomainIntersectionLive](DataforseoLabsApi.md#bingdomainintersectionlive)
- [bingDomainRankOverviewLive](DataforseoLabsApi.md#bingdomainrankoverviewlive)
- [bingPageIntersectionLive](DataforseoLabsApi.md#bingpageintersectionlive)
- [bingRankedKeywordsLive](DataforseoLabsApi.md#bingrankedkeywordslive)
- [bingRelatedKeywordsLive](DataforseoLabsApi.md#bingrelatedkeywordslive)
- [bingRelevantPagesLive](DataforseoLabsApi.md#bingrelevantpageslive)
- [bingSerpCompetitorsLive](DataforseoLabsApi.md#bingserpcompetitorslive)
- [bingSubdomainsLive](DataforseoLabsApi.md#bingsubdomainslive)
- [categories](DataforseoLabsApi.md#categories)
- [dataforseoLabsErrors](DataforseoLabsApi.md#dataforseolabserrors)
- [dataforseoLabsIdList](DataforseoLabsApi.md#dataforseolabsidlist)
- [dataforseoLabsLocationsAndLanguages](DataforseoLabsApi.md#dataforseolabslocationsandlanguages)
- [dataforseoLabsStatus](DataforseoLabsApi.md#dataforseolabsstatus)
- [googleAppCompetitorsLive](DataforseoLabsApi.md#googleappcompetitorslive)
- [googleAppIntersectionLive](DataforseoLabsApi.md#googleappintersectionlive)
- [googleAvailableHistory](DataforseoLabsApi.md#googleavailablehistory)
- [googleBulkAppMetricsLive](DataforseoLabsApi.md#googlebulkappmetricslive)
- [googleBulkKeywordDifficultyLive](DataforseoLabsApi.md#googlebulkkeyworddifficultylive)
- [googleBulkTrafficEstimationLive](DataforseoLabsApi.md#googlebulktrafficestimationlive)
- [googleCategoriesForDomainLive](DataforseoLabsApi.md#googlecategoriesfordomainlive)
- [googleCompetitorsDomainLive](DataforseoLabsApi.md#googlecompetitorsdomainlive)
- [googleDomainIntersectionLive](DataforseoLabsApi.md#googledomainintersectionlive)
- [googleDomainMetricsByCategoriesLive](DataforseoLabsApi.md#googledomainmetricsbycategorieslive)
- [googleDomainRankOverviewLive](DataforseoLabsApi.md#googledomainrankoverviewlive)
- [googleDomainWhoisOverviewLive](DataforseoLabsApi.md#googledomainwhoisoverviewlive)
- [googleHistoricalBulkTrafficEstimationLive](DataforseoLabsApi.md#googlehistoricalbulktrafficestimationlive)
- [googleHistoricalRankOverviewLive](DataforseoLabsApi.md#googlehistoricalrankoverviewlive)
- [googleHistoricalSearchVolumeLive](DataforseoLabsApi.md#googlehistoricalsearchvolumelive)
- [googleHistoricalSerpsLive](DataforseoLabsApi.md#googlehistoricalserpslive)
- [googleKeywordIdeasLive](DataforseoLabsApi.md#googlekeywordideaslive)
- [googleKeywordSuggestionsLive](DataforseoLabsApi.md#googlekeywordsuggestionslive)
- [googleKeywordsForAppLive](DataforseoLabsApi.md#googlekeywordsforapplive)
- [googleKeywordsForCategoriesLive](DataforseoLabsApi.md#googlekeywordsforcategorieslive)
- [googleKeywordsForSiteLive](DataforseoLabsApi.md#googlekeywordsforsitelive)
- [googlePageIntersectionLive](DataforseoLabsApi.md#googlepageintersectionlive)
- [googleRankedKeywordsLive](DataforseoLabsApi.md#googlerankedkeywordslive)
- [googleRelatedKeywordsLive](DataforseoLabsApi.md#googlerelatedkeywordslive)
- [googleRelevantPagesLive](DataforseoLabsApi.md#googlerelevantpageslive)
- [googleSearchIntentLive](DataforseoLabsApi.md#googlesearchintentlive)
- [googleSerpCompetitorsLive](DataforseoLabsApi.md#googleserpcompetitorslive)
- [googleSubdomainsLive](DataforseoLabsApi.md#googlesubdomainslive)
- [googleTopSearchesLive](DataforseoLabsApi.md#googletopsearcheslive)
- [processAmazonBulkSearchVolumeLive](DataforseoLabsApi.md#processamazonbulksearchvolumelive)
- [processAmazonProductCompetitorsLive](DataforseoLabsApi.md#processamazonproductcompetitorslive)
- [processAmazonProductKeywordIntersectionsLive](DataforseoLabsApi.md#processamazonproductkeywordintersectionslive)
- [processAmazonProductRankOverviewLive](DataforseoLabsApi.md#processamazonproductrankoverviewlive)
- [processAmazonRankedKeywordsLive](DataforseoLabsApi.md#processamazonrankedkeywordslive)
- [processAmazonRelatedKeywordsLive](DataforseoLabsApi.md#processamazonrelatedkeywordslive)
- [processAppleAppCompetitorsLive](DataforseoLabsApi.md#processappleappcompetitorslive)
- [processAppleAppIntersectionLive](DataforseoLabsApi.md#processappleappintersectionlive)
- [processAppleBulkAppMetricsLive](DataforseoLabsApi.md#processapplebulkappmetricslive)
- [processAppleKeywordsForAppLive](DataforseoLabsApi.md#processapplekeywordsforapplive)
- [processAvailableFilters](DataforseoLabsApi.md#processavailablefilters)
- [processBingBulkKeywordDifficultyLive](DataforseoLabsApi.md#processbingbulkkeyworddifficultylive)
- [processBingBulkTrafficEstimationLive](DataforseoLabsApi.md#processbingbulktrafficestimationlive)
- [processBingCompetitorsDomainLive](DataforseoLabsApi.md#processbingcompetitorsdomainlive)
- [processBingDomainIntersectionLive](DataforseoLabsApi.md#processbingdomainintersectionlive)
- [processBingDomainRankOverviewLive](DataforseoLabsApi.md#processbingdomainrankoverviewlive)
- [processBingPageIntersectionLive](DataforseoLabsApi.md#processbingpageintersectionlive)
- [processBingRankedKeywordsLive](DataforseoLabsApi.md#processbingrankedkeywordslive)
- [processBingRelatedKeywordsLive](DataforseoLabsApi.md#processbingrelatedkeywordslive)
- [processBingRelevantPagesLive](DataforseoLabsApi.md#processbingrelevantpageslive)
- [processBingSerpCompetitorsLive](DataforseoLabsApi.md#processbingserpcompetitorslive)
- [processBingSubdomainsLive](DataforseoLabsApi.md#processbingsubdomainslive)
- [processCategories](DataforseoLabsApi.md#processcategories)
- [processDataforseoLabsErrors](DataforseoLabsApi.md#processdataforseolabserrors)
- [processDataforseoLabsIdList](DataforseoLabsApi.md#processdataforseolabsidlist)
- [processDataforseoLabsLocationsAndLanguages](DataforseoLabsApi.md#processdataforseolabslocationsandlanguages)
- [processDataforseoLabsStatus](DataforseoLabsApi.md#processdataforseolabsstatus)
- [processGoogleAppCompetitorsLive](DataforseoLabsApi.md#processgoogleappcompetitorslive)
- [processGoogleAppIntersectionLive](DataforseoLabsApi.md#processgoogleappintersectionlive)
- [processGoogleAvailableHistory](DataforseoLabsApi.md#processgoogleavailablehistory)
- [processGoogleBulkAppMetricsLive](DataforseoLabsApi.md#processgooglebulkappmetricslive)
- [processGoogleBulkKeywordDifficultyLive](DataforseoLabsApi.md#processgooglebulkkeyworddifficultylive)
- [processGoogleBulkTrafficEstimationLive](DataforseoLabsApi.md#processgooglebulktrafficestimationlive)
- [processGoogleCategoriesForDomainLive](DataforseoLabsApi.md#processgooglecategoriesfordomainlive)
- [processGoogleCompetitorsDomainLive](DataforseoLabsApi.md#processgooglecompetitorsdomainlive)
- [processGoogleDomainIntersectionLive](DataforseoLabsApi.md#processgoogledomainintersectionlive)
- [processGoogleDomainMetricsByCategoriesLive](DataforseoLabsApi.md#processgoogledomainmetricsbycategorieslive)
- [processGoogleDomainRankOverviewLive](DataforseoLabsApi.md#processgoogledomainrankoverviewlive)
- [processGoogleDomainWhoisOverviewLive](DataforseoLabsApi.md#processgoogledomainwhoisoverviewlive)
- [processGoogleHistoricalBulkTrafficEstimationLive](DataforseoLabsApi.md#processgooglehistoricalbulktrafficestimationlive)
- [processGoogleHistoricalRankOverviewLive](DataforseoLabsApi.md#processgooglehistoricalrankoverviewlive)
- [processGoogleHistoricalSearchVolumeLive](DataforseoLabsApi.md#processgooglehistoricalsearchvolumelive)
- [processGoogleHistoricalSerpsLive](DataforseoLabsApi.md#processgooglehistoricalserpslive)
- [processGoogleKeywordIdeasLive](DataforseoLabsApi.md#processgooglekeywordideaslive)
- [processGoogleKeywordSuggestionsLive](DataforseoLabsApi.md#processgooglekeywordsuggestionslive)
- [processGoogleKeywordsForAppLive](DataforseoLabsApi.md#processgooglekeywordsforapplive)
- [processGoogleKeywordsForCategoriesLive](DataforseoLabsApi.md#processgooglekeywordsforcategorieslive)
- [processGoogleKeywordsForSiteLive](DataforseoLabsApi.md#processgooglekeywordsforsitelive)
- [processGooglePageIntersectionLive](DataforseoLabsApi.md#processgooglepageintersectionlive)
- [processGoogleRankedKeywordsLive](DataforseoLabsApi.md#processgooglerankedkeywordslive)
- [processGoogleRelatedKeywordsLive](DataforseoLabsApi.md#processgooglerelatedkeywordslive)
- [processGoogleRelevantPagesLive](DataforseoLabsApi.md#processgooglerelevantpageslive)
- [processGoogleSearchIntentLive](DataforseoLabsApi.md#processgooglesearchintentlive)
- [processGoogleSerpCompetitorsLive](DataforseoLabsApi.md#processgoogleserpcompetitorslive)
- [processGoogleSubdomainsLive](DataforseoLabsApi.md#processgooglesubdomainslive)
- [processGoogleTopSearchesLive](DataforseoLabsApi.md#processgoogletopsearcheslive)

## Constructors

### constructor

• **new DataforseoLabsApi**(`baseUrl?`, `http?`): [`DataforseoLabsApi`](DataforseoLabsApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseUrl?` | `string` |
| `http?` | `Object` |
| `http.fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Returns

[`DataforseoLabsApi`](DataforseoLabsApi.md)

#### Defined in

main.ts:6245

## Properties

### baseUrl

• `Private` **baseUrl**: `string`

#### Defined in

main.ts:6242

___

### http

• `Private` **http**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Defined in

main.ts:6241

___

### jsonParseReviver

• `Protected` **jsonParseReviver**: (`key`: `string`, `value`: `any`) => `any` = `undefined`

#### Type declaration

▸ (`key`, `value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

##### Returns

`any`

#### Defined in

main.ts:6243

## Methods

### amazonBulkSearchVolumeLive

▸ **amazonBulkSearchVolumeLive**(`body`): `Promise`\<[`DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7531

___

### amazonProductCompetitorsLive

▸ **amazonProductCompetitorsLive**(`body`): `Promise`\<[`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7699

___

### amazonProductKeywordIntersectionsLive

▸ **amazonProductKeywordIntersectionsLive**(`body`): `Promise`\<[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7741

___

### amazonProductRankOverviewLive

▸ **amazonProductRankOverviewLive**(`body`): `Promise`\<[`DataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](DataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](DataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7657

___

### amazonRankedKeywordsLive

▸ **amazonRankedKeywordsLive**(`body`): `Promise`\<[`DataforseoLabsAmazonRankedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsAmazonRankedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7615

___

### amazonRelatedKeywordsLive

▸ **amazonRelatedKeywordsLive**(`body`): `Promise`\<[`DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7573

___

### appleAppCompetitorsLive

▸ **appleAppCompetitorsLive**(`body`): `Promise`\<[`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsAppleAppCompetitorsLiveRequestInfo`](DataforseoLabsAppleAppCompetitorsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:8497

___

### appleAppIntersectionLive

▸ **appleAppIntersectionLive**(`body`): `Promise`\<[`DataforseoLabsAppleAppIntersectionLiveResponseInfo`](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsAppleAppIntersectionLiveRequestInfo`](DataforseoLabsAppleAppIntersectionLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsAppleAppIntersectionLiveResponseInfo`](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:8539

___

### appleBulkAppMetricsLive

▸ **appleBulkAppMetricsLive**(`body`): `Promise`\<[`DataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](DataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsAppleBulkAppMetricsLiveRequestInfo`](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](DataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:8413

___

### appleKeywordsForAppLive

▸ **appleKeywordsForAppLive**(`body`): `Promise`\<[`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsAppleKeywordsForAppLiveRequestInfo`](DataforseoLabsAppleKeywordsForAppLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:8455

___

### availableFilters

▸ **availableFilters**(): `Promise`\<[`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6374

___

### bingBulkKeywordDifficultyLive

▸ **bingBulkKeywordDifficultyLive**(`body`): `Promise`\<[`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7783

___

### bingBulkTrafficEstimationLive

▸ **bingBulkTrafficEstimationLive**(`body`): `Promise`\<[`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7825

___

### bingCompetitorsDomainLive

▸ **bingCompetitorsDomainLive**(`body`): `Promise`\<[`DataforseoLabsBingCompetitorsDomainLiveResponseInfo`](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsBingCompetitorsDomainLiveRequestInfo`](DataforseoLabsBingCompetitorsDomainLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsBingCompetitorsDomainLiveResponseInfo`](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7867

___

### bingDomainIntersectionLive

▸ **bingDomainIntersectionLive**(`body`): `Promise`\<[`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsBingDomainIntersectionLiveRequestInfo`](DataforseoLabsBingDomainIntersectionLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7909

___

### bingDomainRankOverviewLive

▸ **bingDomainRankOverviewLive**(`body`): `Promise`\<[`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsBingDomainRankOverviewLiveRequestInfo`](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7951

___

### bingPageIntersectionLive

▸ **bingPageIntersectionLive**(`body`): `Promise`\<[`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsBingPageIntersectionLiveRequestInfo`](DataforseoLabsBingPageIntersectionLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7993

___

### bingRankedKeywordsLive

▸ **bingRankedKeywordsLive**(`body`): `Promise`\<[`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsBingRankedKeywordsLiveRequestInfo`](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:8035

___

### bingRelatedKeywordsLive

▸ **bingRelatedKeywordsLive**(`body`): `Promise`\<[`DataforseoLabsBingRelatedKeywordsLiveResponseInfo`](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsBingRelatedKeywordsLiveRequestInfo`](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsBingRelatedKeywordsLiveResponseInfo`](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:8077

___

### bingRelevantPagesLive

▸ **bingRelevantPagesLive**(`body`): `Promise`\<[`DataforseoLabsBingRelevantPagesLiveResponseInfo`](DataforseoLabsBingRelevantPagesLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsBingRelevantPagesLiveRequestInfo`](DataforseoLabsBingRelevantPagesLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsBingRelevantPagesLiveResponseInfo`](DataforseoLabsBingRelevantPagesLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:8119

___

### bingSerpCompetitorsLive

▸ **bingSerpCompetitorsLive**(`body`): `Promise`\<[`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsBingSerpCompetitorsLiveRequestInfo`](DataforseoLabsBingSerpCompetitorsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:8161

___

### bingSubdomainsLive

▸ **bingSubdomainsLive**(`body`): `Promise`\<[`DataforseoLabsBingSubdomainsLiveResponseInfo`](DataforseoLabsBingSubdomainsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsBingSubdomainsLiveRequestInfo`](DataforseoLabsBingSubdomainsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsBingSubdomainsLiveResponseInfo`](DataforseoLabsBingSubdomainsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:8203

___

### categories

▸ **categories**(): `Promise`\<[`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6448

___

### dataforseoLabsErrors

▸ **dataforseoLabsErrors**(`body`): `Promise`\<[`DataforseoLabsErrorsResponseInfo`](DataforseoLabsErrorsResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsErrorsRequestInfo`](DataforseoLabsErrorsRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsErrorsResponseInfo`](DataforseoLabsErrorsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6333

___

### dataforseoLabsIdList

▸ **dataforseoLabsIdList**(`body`): `Promise`\<[`DataforseoLabsIdListResponseInfo`](DataforseoLabsIdListResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsIdListRequestInfo`](DataforseoLabsIdListRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsIdListResponseInfo`](DataforseoLabsIdListResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6254

___

### dataforseoLabsLocationsAndLanguages

▸ **dataforseoLabsLocationsAndLanguages**(): `Promise`\<[`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6411

___

### dataforseoLabsStatus

▸ **dataforseoLabsStatus**(): `Promise`\<[`DataforseoLabsStatusResponseInfo`](DataforseoLabsStatusResponseInfo.md)\>

#### Returns

`Promise`\<[`DataforseoLabsStatusResponseInfo`](DataforseoLabsStatusResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6295

___

### googleAppCompetitorsLive

▸ **googleAppCompetitorsLive**(`body`): `Promise`\<[`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleAppCompetitorsLiveRequestInfo`](DataforseoLabsGoogleAppCompetitorsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:8329

___

### googleAppIntersectionLive

▸ **googleAppIntersectionLive**(`body`): `Promise`\<[`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleAppIntersectionLiveRequestInfo`](DataforseoLabsGoogleAppIntersectionLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:8371

___

### googleAvailableHistory

▸ **googleAvailableHistory**(): `Promise`\<[`DataforseoLabsGoogleAvailableHistoryResponseInfo`](DataforseoLabsGoogleAvailableHistoryResponseInfo.md)\>

#### Returns

`Promise`\<[`DataforseoLabsGoogleAvailableHistoryResponseInfo`](DataforseoLabsGoogleAvailableHistoryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6485

___

### googleBulkAppMetricsLive

▸ **googleBulkAppMetricsLive**(`body`): `Promise`\<[`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo`](DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:8245

___

### googleBulkKeywordDifficultyLive

▸ **googleBulkKeywordDifficultyLive**(`body`): `Promise`\<[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6733

___

### googleBulkTrafficEstimationLive

▸ **googleBulkTrafficEstimationLive**(`body`): `Promise`\<[`DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7447

___

### googleCategoriesForDomainLive

▸ **googleCategoriesForDomainLive**(`body`): `Promise`\<[`DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo`](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6817

___

### googleCompetitorsDomainLive

▸ **googleCompetitorsDomainLive**(`body`): `Promise`\<[`DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo`](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7111

___

### googleDomainIntersectionLive

▸ **googleDomainIntersectionLive**(`body`): `Promise`\<[`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleDomainIntersectionLiveRequestInfo`](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7153

___

### googleDomainMetricsByCategoriesLive

▸ **googleDomainMetricsByCategoriesLive**(`body`): `Promise`\<[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6901

___

### googleDomainRankOverviewLive

▸ **googleDomainRankOverviewLive**(`body`): `Promise`\<[`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo`](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7279

___

### googleDomainWhoisOverviewLive

▸ **googleDomainWhoisOverviewLive**(`body`): `Promise`\<[`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6985

___

### googleHistoricalBulkTrafficEstimationLive

▸ **googleHistoricalBulkTrafficEstimationLive**(`body`): `Promise`\<[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7489

___

### googleHistoricalRankOverviewLive

▸ **googleHistoricalRankOverviewLive**(`body`): `Promise`\<[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7363

___

### googleHistoricalSearchVolumeLive

▸ **googleHistoricalSearchVolumeLive**(`body`): `Promise`\<[`DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleHistoricalSearchVolumeLiveRequestInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6691

___

### googleHistoricalSerpsLive

▸ **googleHistoricalSerpsLive**(`body`): `Promise`\<[`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo`](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7321

___

### googleKeywordIdeasLive

▸ **googleKeywordIdeasLive**(`body`): `Promise`\<[`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](DataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6649

___

### googleKeywordSuggestionsLive

▸ **googleKeywordSuggestionsLive**(`body`): `Promise`\<[`DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6607

___

### googleKeywordsForAppLive

▸ **googleKeywordsForAppLive**(`body`): `Promise`\<[`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleKeywordsForAppLiveRequestInfo`](DataforseoLabsGoogleKeywordsForAppLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:8287

___

### googleKeywordsForCategoriesLive

▸ **googleKeywordsForCategoriesLive**(`body`): `Promise`\<[`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6859

___

### googleKeywordsForSiteLive

▸ **googleKeywordsForSiteLive**(`body`): `Promise`\<[`DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6523

___

### googlePageIntersectionLive

▸ **googlePageIntersectionLive**(`body`): `Promise`\<[`DataforseoLabsGooglePageIntersectionLiveResponseInfo`](DataforseoLabsGooglePageIntersectionLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGooglePageIntersectionLiveRequestInfo`](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGooglePageIntersectionLiveResponseInfo`](DataforseoLabsGooglePageIntersectionLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7405

___

### googleRankedKeywordsLive

▸ **googleRankedKeywordsLive**(`body`): `Promise`\<[`DataforseoLabsGoogleRankedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](DataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleRankedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7027

___

### googleRelatedKeywordsLive

▸ **googleRelatedKeywordsLive**(`body`): `Promise`\<[`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6565

___

### googleRelevantPagesLive

▸ **googleRelevantPagesLive**(`body`): `Promise`\<[`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleRelevantPagesLiveRequestInfo`](DataforseoLabsGoogleRelevantPagesLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7237

___

### googleSearchIntentLive

▸ **googleSearchIntentLive**(`body`): `Promise`\<[`DataforseoLabsGoogleSearchIntentLiveResponseInfo`](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleSearchIntentLiveRequestInfo`](DataforseoLabsGoogleSearchIntentLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleSearchIntentLiveResponseInfo`](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6775

___

### googleSerpCompetitorsLive

▸ **googleSerpCompetitorsLive**(`body`): `Promise`\<[`DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7069

___

### googleSubdomainsLive

▸ **googleSubdomainsLive**(`body`): `Promise`\<[`DataforseoLabsGoogleSubdomainsLiveResponseInfo`](DataforseoLabsGoogleSubdomainsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleSubdomainsLiveRequestInfo`](DataforseoLabsGoogleSubdomainsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleSubdomainsLiveResponseInfo`](DataforseoLabsGoogleSubdomainsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:7195

___

### googleTopSearchesLive

▸ **googleTopSearchesLive**(`body`): `Promise`\<[`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DataforseoLabsGoogleTopSearchesLiveRequestInfo`](DataforseoLabsGoogleTopSearchesLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6943

___

### processAmazonBulkSearchVolumeLive

▸ **processAmazonBulkSearchVolumeLive**(`response`): `Promise`\<[`DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md)\>

#### Defined in

main.ts:7551

___

### processAmazonProductCompetitorsLive

▸ **processAmazonProductCompetitorsLive**(`response`): `Promise`\<[`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsAmazonProductCompetitorsLiveResponseInfo`](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)\>

#### Defined in

main.ts:7719

___

### processAmazonProductKeywordIntersectionsLive

▸ **processAmazonProductKeywordIntersectionsLive**(`response`): `Promise`\<[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)\>

#### Defined in

main.ts:7761

___

### processAmazonProductRankOverviewLive

▸ **processAmazonProductRankOverviewLive**(`response`): `Promise`\<[`DataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](DataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsAmazonProductRankOverviewLiveResponseInfo`](DataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md)\>

#### Defined in

main.ts:7677

___

### processAmazonRankedKeywordsLive

▸ **processAmazonRankedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsAmazonRankedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsAmazonRankedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md)\>

#### Defined in

main.ts:7635

___

### processAmazonRelatedKeywordsLive

▸ **processAmazonRelatedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md)\>

#### Defined in

main.ts:7593

___

### processAppleAppCompetitorsLive

▸ **processAppleAppCompetitorsLive**(`response`): `Promise`\<[`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsAppleAppCompetitorsLiveResponseInfo`](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)\>

#### Defined in

main.ts:8517

___

### processAppleAppIntersectionLive

▸ **processAppleAppIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsAppleAppIntersectionLiveResponseInfo`](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsAppleAppIntersectionLiveResponseInfo`](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md)\>

#### Defined in

main.ts:8559

___

### processAppleBulkAppMetricsLive

▸ **processAppleBulkAppMetricsLive**(`response`): `Promise`\<[`DataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](DataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsAppleBulkAppMetricsLiveResponseInfo`](DataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md)\>

#### Defined in

main.ts:8433

___

### processAppleKeywordsForAppLive

▸ **processAppleKeywordsForAppLive**(`response`): `Promise`\<[`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)\>

#### Defined in

main.ts:8475

___

### processAvailableFilters

▸ **processAvailableFilters**(`response`): `Promise`\<[`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsAvailableFiltersResponseInfo`](DataforseoLabsAvailableFiltersResponseInfo.md)\>

#### Defined in

main.ts:6390

___

### processBingBulkKeywordDifficultyLive

▸ **processBingBulkKeywordDifficultyLive**(`response`): `Promise`\<[`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)\>

#### Defined in

main.ts:7803

___

### processBingBulkTrafficEstimationLive

▸ **processBingBulkTrafficEstimationLive**(`response`): `Promise`\<[`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)\>

#### Defined in

main.ts:7845

___

### processBingCompetitorsDomainLive

▸ **processBingCompetitorsDomainLive**(`response`): `Promise`\<[`DataforseoLabsBingCompetitorsDomainLiveResponseInfo`](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsBingCompetitorsDomainLiveResponseInfo`](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md)\>

#### Defined in

main.ts:7887

___

### processBingDomainIntersectionLive

▸ **processBingDomainIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)\>

#### Defined in

main.ts:7929

___

### processBingDomainRankOverviewLive

▸ **processBingDomainRankOverviewLive**(`response`): `Promise`\<[`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)\>

#### Defined in

main.ts:7971

___

### processBingPageIntersectionLive

▸ **processBingPageIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)\>

#### Defined in

main.ts:8013

___

### processBingRankedKeywordsLive

▸ **processBingRankedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)\>

#### Defined in

main.ts:8055

___

### processBingRelatedKeywordsLive

▸ **processBingRelatedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsBingRelatedKeywordsLiveResponseInfo`](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsBingRelatedKeywordsLiveResponseInfo`](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md)\>

#### Defined in

main.ts:8097

___

### processBingRelevantPagesLive

▸ **processBingRelevantPagesLive**(`response`): `Promise`\<[`DataforseoLabsBingRelevantPagesLiveResponseInfo`](DataforseoLabsBingRelevantPagesLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsBingRelevantPagesLiveResponseInfo`](DataforseoLabsBingRelevantPagesLiveResponseInfo.md)\>

#### Defined in

main.ts:8139

___

### processBingSerpCompetitorsLive

▸ **processBingSerpCompetitorsLive**(`response`): `Promise`\<[`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)\>

#### Defined in

main.ts:8181

___

### processBingSubdomainsLive

▸ **processBingSubdomainsLive**(`response`): `Promise`\<[`DataforseoLabsBingSubdomainsLiveResponseInfo`](DataforseoLabsBingSubdomainsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsBingSubdomainsLiveResponseInfo`](DataforseoLabsBingSubdomainsLiveResponseInfo.md)\>

#### Defined in

main.ts:8223

___

### processCategories

▸ **processCategories**(`response`): `Promise`\<[`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)\>

#### Defined in

main.ts:6464

___

### processDataforseoLabsErrors

▸ **processDataforseoLabsErrors**(`response`): `Promise`\<[`DataforseoLabsErrorsResponseInfo`](DataforseoLabsErrorsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsErrorsResponseInfo`](DataforseoLabsErrorsResponseInfo.md)\>

#### Defined in

main.ts:6353

___

### processDataforseoLabsIdList

▸ **processDataforseoLabsIdList**(`response`): `Promise`\<[`DataforseoLabsIdListResponseInfo`](DataforseoLabsIdListResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsIdListResponseInfo`](DataforseoLabsIdListResponseInfo.md)\>

#### Defined in

main.ts:6274

___

### processDataforseoLabsLocationsAndLanguages

▸ **processDataforseoLabsLocationsAndLanguages**(`response`): `Promise`\<[`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)\>

#### Defined in

main.ts:6427

___

### processDataforseoLabsStatus

▸ **processDataforseoLabsStatus**(`response`): `Promise`\<[`DataforseoLabsStatusResponseInfo`](DataforseoLabsStatusResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsStatusResponseInfo`](DataforseoLabsStatusResponseInfo.md)\>

#### Defined in

main.ts:6311

___

### processGoogleAppCompetitorsLive

▸ **processGoogleAppCompetitorsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)\>

#### Defined in

main.ts:8349

___

### processGoogleAppIntersectionLive

▸ **processGoogleAppIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)\>

#### Defined in

main.ts:8391

___

### processGoogleAvailableHistory

▸ **processGoogleAvailableHistory**(`response`): `Promise`\<[`DataforseoLabsGoogleAvailableHistoryResponseInfo`](DataforseoLabsGoogleAvailableHistoryResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleAvailableHistoryResponseInfo`](DataforseoLabsGoogleAvailableHistoryResponseInfo.md)\>

#### Defined in

main.ts:6501

___

### processGoogleBulkAppMetricsLive

▸ **processGoogleBulkAppMetricsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo`](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)\>

#### Defined in

main.ts:8265

___

### processGoogleBulkKeywordDifficultyLive

▸ **processGoogleBulkKeywordDifficultyLive**(`response`): `Promise`\<[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)\>

#### Defined in

main.ts:6753

___

### processGoogleBulkTrafficEstimationLive

▸ **processGoogleBulkTrafficEstimationLive**(`response`): `Promise`\<[`DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo.md)\>

#### Defined in

main.ts:7467

___

### processGoogleCategoriesForDomainLive

▸ **processGoogleCategoriesForDomainLive**(`response`): `Promise`\<[`DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md)\>

#### Defined in

main.ts:6837

___

### processGoogleCompetitorsDomainLive

▸ **processGoogleCompetitorsDomainLive**(`response`): `Promise`\<[`DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo`](DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md)\>

#### Defined in

main.ts:7131

___

### processGoogleDomainIntersectionLive

▸ **processGoogleDomainIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)\>

#### Defined in

main.ts:7173

___

### processGoogleDomainMetricsByCategoriesLive

▸ **processGoogleDomainMetricsByCategoriesLive**(`response`): `Promise`\<[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md)\>

#### Defined in

main.ts:6921

___

### processGoogleDomainRankOverviewLive

▸ **processGoogleDomainRankOverviewLive**(`response`): `Promise`\<[`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)\>

#### Defined in

main.ts:7299

___

### processGoogleDomainWhoisOverviewLive

▸ **processGoogleDomainWhoisOverviewLive**(`response`): `Promise`\<[`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)\>

#### Defined in

main.ts:7005

___

### processGoogleHistoricalBulkTrafficEstimationLive

▸ **processGoogleHistoricalBulkTrafficEstimationLive**(`response`): `Promise`\<[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)\>

#### Defined in

main.ts:7509

___

### processGoogleHistoricalRankOverviewLive

▸ **processGoogleHistoricalRankOverviewLive**(`response`): `Promise`\<[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo`](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)\>

#### Defined in

main.ts:7383

___

### processGoogleHistoricalSearchVolumeLive

▸ **processGoogleHistoricalSearchVolumeLive**(`response`): `Promise`\<[`DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo`](DataforseoLabsGoogleHistoricalSearchVolumeLiveResponseInfo.md)\>

#### Defined in

main.ts:6711

___

### processGoogleHistoricalSerpsLive

▸ **processGoogleHistoricalSerpsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)\>

#### Defined in

main.ts:7341

___

### processGoogleKeywordIdeasLive

▸ **processGoogleKeywordIdeasLive**(`response`): `Promise`\<[`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordIdeasLiveResponseInfo`](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)\>

#### Defined in

main.ts:6669

___

### processGoogleKeywordSuggestionsLive

▸ **processGoogleKeywordSuggestionsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo.md)\>

#### Defined in

main.ts:6627

___

### processGoogleKeywordsForAppLive

▸ **processGoogleKeywordsForAppLive**(`response`): `Promise`\<[`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)\>

#### Defined in

main.ts:8307

___

### processGoogleKeywordsForCategoriesLive

▸ **processGoogleKeywordsForCategoriesLive**(`response`): `Promise`\<[`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)\>

#### Defined in

main.ts:6879

___

### processGoogleKeywordsForSiteLive

▸ **processGoogleKeywordsForSiteLive**(`response`): `Promise`\<[`DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo`](DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md)\>

#### Defined in

main.ts:6543

___

### processGooglePageIntersectionLive

▸ **processGooglePageIntersectionLive**(`response`): `Promise`\<[`DataforseoLabsGooglePageIntersectionLiveResponseInfo`](DataforseoLabsGooglePageIntersectionLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGooglePageIntersectionLiveResponseInfo`](DataforseoLabsGooglePageIntersectionLiveResponseInfo.md)\>

#### Defined in

main.ts:7425

___

### processGoogleRankedKeywordsLive

▸ **processGoogleRankedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleRankedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleRankedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md)\>

#### Defined in

main.ts:7047

___

### processGoogleRelatedKeywordsLive

▸ **processGoogleRelatedKeywordsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)\>

#### Defined in

main.ts:6585

___

### processGoogleRelevantPagesLive

▸ **processGoogleRelevantPagesLive**(`response`): `Promise`\<[`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)\>

#### Defined in

main.ts:7257

___

### processGoogleSearchIntentLive

▸ **processGoogleSearchIntentLive**(`response`): `Promise`\<[`DataforseoLabsGoogleSearchIntentLiveResponseInfo`](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleSearchIntentLiveResponseInfo`](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md)\>

#### Defined in

main.ts:6795

___

### processGoogleSerpCompetitorsLive

▸ **processGoogleSerpCompetitorsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo`](DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md)\>

#### Defined in

main.ts:7089

___

### processGoogleSubdomainsLive

▸ **processGoogleSubdomainsLive**(`response`): `Promise`\<[`DataforseoLabsGoogleSubdomainsLiveResponseInfo`](DataforseoLabsGoogleSubdomainsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleSubdomainsLiveResponseInfo`](DataforseoLabsGoogleSubdomainsLiveResponseInfo.md)\>

#### Defined in

main.ts:7215

___

### processGoogleTopSearchesLive

▸ **processGoogleTopSearchesLive**(`response`): `Promise`\<[`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)\>

#### Defined in

main.ts:6963
