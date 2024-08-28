[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / KeywordsDataApi

# Class: KeywordsDataApi

## Constructors

### new KeywordsDataApi()

> **new KeywordsDataApi**(`baseUrl`?, `http`?): [`KeywordsDataApi`](KeywordsDataApi.md)

#### Parameters

• **baseUrl?**: `string`

• **http?**

• **http.fetch?**

#### Returns

[`KeywordsDataApi`](KeywordsDataApi.md)

#### Defined in

main.ts:8900

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Defined in

main.ts:8898

## Methods

### bingKeywordPerformanceLive()

> **bingKeywordPerformanceLive**(`body`): `Promise`\<[`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataBingKeywordPerformanceLiveRequestInfo`](KeywordsDataBingKeywordPerformanceLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11100

***

### bingKeywordPerformanceTaskGet()

> **bingKeywordPerformanceTaskGet**(`id`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11059

***

### bingKeywordPerformanceTaskPost()

> **bingKeywordPerformanceTaskPost**(`body`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](KeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10978

***

### bingKeywordPerformanceTasksReady()

> **bingKeywordPerformanceTasksReady**(): `Promise`\<[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11019

***

### bingKeywordsForKeywordsLive()

> **bingKeywordsForKeywordsLive**(`body`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10899

***

### bingKeywordsForKeywordsTaskGet()

> **bingKeywordsForKeywordsTaskGet**(`id`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10858

***

### bingKeywordsForKeywordsTaskPost()

> **bingKeywordsForKeywordsTaskPost**(`body`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10777

***

### bingKeywordsForKeywordsTasksReady()

> **bingKeywordsForKeywordsTasksReady**(): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10818

***

### bingKeywordsForSiteLive()

> **bingKeywordsForSiteLive**(`body`): `Promise`\<[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataBingKeywordsForSiteLiveRequestInfo`](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10735

***

### bingKeywordsForSiteTaskGet()

> **bingKeywordsForSiteTaskGet**(`id`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10694

***

### bingKeywordsForSiteTaskPost()

> **bingKeywordsForSiteTaskPost**(`body`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataBingKeywordsForSiteTaskPostRequestInfo`](KeywordsDataBingKeywordsForSiteTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10613

***

### bingKeywordsForSiteTasksReady()

> **bingKeywordsForSiteTasksReady**(): `Promise`\<[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10654

***

### bingSearchVolumeHistoryLive()

> **bingSearchVolumeHistoryLive**(`body`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](KeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11301

***

### bingSearchVolumeHistoryTaskGet()

> **bingSearchVolumeHistoryTaskGet**(`id`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11260

***

### bingSearchVolumeHistoryTaskPost()

> **bingSearchVolumeHistoryTaskPost**(`body`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11179

***

### bingSearchVolumeHistoryTasksReady()

> **bingSearchVolumeHistoryTasksReady**(): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11220

***

### bingSearchVolumeLive()

> **bingSearchVolumeLive**(`body`): `Promise`\<[`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataBingSearchVolumeLiveRequestInfo`](KeywordsDataBingSearchVolumeLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10571

***

### bingSearchVolumeTaskGet()

> **bingSearchVolumeTaskGet**(`id`): `Promise`\<[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10530

***

### bingSearchVolumeTaskPost()

> **bingSearchVolumeTaskPost**(`body`): `Promise`\<[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataBingSearchVolumeTaskPostRequestInfo`](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10449

***

### bingSearchVolumeTasksReady()

> **bingSearchVolumeTasksReady**(): `Promise`\<[`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10490

***

### clickstreamDataBulkSearchVolumeLive()

> **clickstreamDataBulkSearchVolumeLive**(`body`): `Promise`\<[`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11464

***

### clickstreamDataDataforseoSearchVolumeLive()

> **clickstreamDataDataforseoSearchVolumeLive**(`body`): `Promise`\<[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11380

***

### clickstreamDataGlobalSearchVolumeLive()

> **clickstreamDataGlobalSearchVolumeLive**(`body`): `Promise`\<[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11422

***

### dataforseoTrendsDemographyLive()

> **dataforseoTrendsDemographyLive**(`body`): `Promise`\<[`KeywordsDataDataforseoTrendsDemographyLiveResponseInfo`](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsDemographyLiveResponseInfo`](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10291

***

### dataforseoTrendsExploreLive()

> **dataforseoTrendsExploreLive**(`body`): `Promise`\<[`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataDataforseoTrendsExploreLiveRequestInfo`](KeywordsDataDataforseoTrendsExploreLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10207

***

### dataforseoTrendsMergedDataLive()

> **dataforseoTrendsMergedDataLive**(`body`): `Promise`\<[`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo`](KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10333

***

### dataforseoTrendsSubregionInterestsLive()

> **dataforseoTrendsSubregionInterestsLive**(`body`): `Promise`\<[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10249

***

### googleAdsAdTrafficByKeywordsLive()

> **googleAdsAdTrafficByKeywordsLive**(`body`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9763

***

### googleAdsAdTrafficByKeywordsTaskGet()

> **googleAdsAdTrafficByKeywordsTaskGet**(`id`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9722

***

### googleAdsAdTrafficByKeywordsTaskPost()

> **googleAdsAdTrafficByKeywordsTaskPost**(`body`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostRequestInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9641

***

### googleAdsAdTrafficByKeywordsTasksReady()

> **googleAdsAdTrafficByKeywordsTasksReady**(): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9682

***

### googleAdsKeywordsForKeywordsLive()

> **googleAdsKeywordsForKeywordsLive**(`body`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9599

***

### googleAdsKeywordsForKeywordsTaskGet()

> **googleAdsKeywordsForKeywordsTaskGet**(`id`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9558

***

### googleAdsKeywordsForKeywordsTaskPost()

> **googleAdsKeywordsForKeywordsTaskPost**(`body`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9477

***

### googleAdsKeywordsForKeywordsTasksReady()

> **googleAdsKeywordsForKeywordsTasksReady**(): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9518

***

### googleAdsKeywordsForSiteLive()

> **googleAdsKeywordsForSiteLive**(`body`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9435

***

### googleAdsKeywordsForSiteTaskGet()

> **googleAdsKeywordsForSiteTaskGet**(`id`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9394

***

### googleAdsKeywordsForSiteTaskPost()

> **googleAdsKeywordsForSiteTaskPost**(`body`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9313

***

### googleAdsKeywordsForSiteTasksReady()

> **googleAdsKeywordsForSiteTasksReady**(): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9354

***

### googleAdsSearchVolumeLive()

> **googleAdsSearchVolumeLive**(`body`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9271

***

### googleAdsSearchVolumeTaskGet()

> **googleAdsSearchVolumeTaskGet**(`id`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9230

***

### googleAdsSearchVolumeTaskPost()

> **googleAdsSearchVolumeTaskPost**(`body`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9149

***

### googleAdsSearchVolumeTasksReady()

> **googleAdsSearchVolumeTasksReady**(): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9190

***

### googleAdsStatus()

> **googleAdsStatus**(): `Promise`\<[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:8992

***

### googleTrendsCategories()

> **googleTrendsCategories**(): `Promise`\<[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9923

***

### googleTrendsExploreLive()

> **googleTrendsExploreLive**(`body`): `Promise`\<[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataGoogleTrendsExploreLiveRequestInfo`](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10083

***

### googleTrendsExploreTaskGet()

> **googleTrendsExploreTaskGet**(`id`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10042

***

### googleTrendsExploreTaskPost()

> **googleTrendsExploreTaskPost**(`body`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9961

***

### googleTrendsExploreTasksReady()

> **googleTrendsExploreTasksReady**(): `Promise`\<[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10002

***

### keywordsDataBingKeywordPerformanceLocationsAndLanguages()

> **keywordsDataBingKeywordPerformanceLocationsAndLanguages**(): `Promise`\<[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10940

***

### keywordsDataBingLanguages()

> **keywordsDataBingLanguages**(): `Promise`\<[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10411

***

### keywordsDataBingLocations()

> **keywordsDataBingLocations**(): `Promise`\<[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10374

***

### keywordsDataBingSearchVolumeHistoryLocationsAndLanguages()

> **keywordsDataBingSearchVolumeHistoryLocationsAndLanguages**(): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11141

***

### keywordsDataClickstreamDataLocationsAndLanguages()

> **keywordsDataClickstreamDataLocationsAndLanguages**(): `Promise`\<[`KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11342

***

### keywordsDataDataforseoTrendsLocations()

> **keywordsDataDataforseoTrendsLocations**(): `Promise`\<[`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10124

***

### keywordsDataDataforseoTrendsLocationsCountry()

> **keywordsDataDataforseoTrendsLocationsCountry**(`country`): `Promise`\<[`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)\>

#### Parameters

• **country**: `string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:10166

***

### keywordsDataErrors()

> **keywordsDataErrors**(`body`): `Promise`\<[`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataErrorsRequestInfo`](KeywordsDataErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:8951

***

### keywordsDataGoogleAdsLanguages()

> **keywordsDataGoogleAdsLanguages**(): `Promise`\<[`KeywordsDataGoogleAdsLanguagesResponseInfo`](KeywordsDataGoogleAdsLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLanguagesResponseInfo`](KeywordsDataGoogleAdsLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9111

***

### keywordsDataGoogleAdsLocations()

> **keywordsDataGoogleAdsLocations**(): `Promise`\<[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9029

***

### keywordsDataGoogleAdsLocationsCountry()

> **keywordsDataGoogleAdsLocationsCountry**(`country`): `Promise`\<[`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)\>

#### Parameters

• **country**: `string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9071

***

### keywordsDataGoogleTrendsLanguages()

> **keywordsDataGoogleTrendsLanguages**(): `Promise`\<[`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9886

***

### keywordsDataGoogleTrendsLocations()

> **keywordsDataGoogleTrendsLocations**(): `Promise`\<[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9804

***

### keywordsDataGoogleTrendsLocationsCountry()

> **keywordsDataGoogleTrendsLocationsCountry**(`country`): `Promise`\<[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)\>

#### Parameters

• **country**: `string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:9846

***

### keywordsDataIdList()

> **keywordsDataIdList**(`body`): `Promise`\<[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)\>

#### Parameters

• **body**: [`KeywordsDataIdListRequestInfo`](KeywordsDataIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:8909

***

### processBingKeywordPerformanceLive()

> `protected` **processBingKeywordPerformanceLive**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)\>

#### Defined in

main.ts:11120

***

### processBingKeywordPerformanceTaskGet()

> `protected` **processBingKeywordPerformanceTaskGet**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)\>

#### Defined in

main.ts:11078

***

### processBingKeywordPerformanceTaskPost()

> `protected` **processBingKeywordPerformanceTaskPost**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)\>

#### Defined in

main.ts:10998

***

### processBingKeywordPerformanceTasksReady()

> `protected` **processBingKeywordPerformanceTasksReady**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:11035

***

### processBingKeywordsForKeywordsLive()

> `protected` **processBingKeywordsForKeywordsLive**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)\>

#### Defined in

main.ts:10919

***

### processBingKeywordsForKeywordsTaskGet()

> `protected` **processBingKeywordsForKeywordsTaskGet**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)\>

#### Defined in

main.ts:10877

***

### processBingKeywordsForKeywordsTaskPost()

> `protected` **processBingKeywordsForKeywordsTaskPost**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:10797

***

### processBingKeywordsForKeywordsTasksReady()

> `protected` **processBingKeywordsForKeywordsTasksReady**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:10834

***

### processBingKeywordsForSiteLive()

> `protected` **processBingKeywordsForSiteLive**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)\>

#### Defined in

main.ts:10755

***

### processBingKeywordsForSiteTaskGet()

> `protected` **processBingKeywordsForSiteTaskGet**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)\>

#### Defined in

main.ts:10713

***

### processBingKeywordsForSiteTaskPost()

> `protected` **processBingKeywordsForSiteTaskPost**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)\>

#### Defined in

main.ts:10633

***

### processBingKeywordsForSiteTasksReady()

> `protected` **processBingKeywordsForSiteTasksReady**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:10670

***

### processBingSearchVolumeHistoryLive()

> `protected` **processBingSearchVolumeHistoryLive**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)\>

#### Defined in

main.ts:11321

***

### processBingSearchVolumeHistoryTaskGet()

> `protected` **processBingSearchVolumeHistoryTaskGet**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md)\>

#### Defined in

main.ts:11279

***

### processBingSearchVolumeHistoryTaskPost()

> `protected` **processBingSearchVolumeHistoryTaskPost**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md)\>

#### Defined in

main.ts:11199

***

### processBingSearchVolumeHistoryTasksReady()

> `protected` **processBingSearchVolumeHistoryTasksReady**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:11236

***

### processBingSearchVolumeLive()

> `protected` **processBingSearchVolumeLive**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)\>

#### Defined in

main.ts:10591

***

### processBingSearchVolumeTaskGet()

> `protected` **processBingSearchVolumeTaskGet**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)\>

#### Defined in

main.ts:10549

***

### processBingSearchVolumeTaskPost()

> `protected` **processBingSearchVolumeTaskPost**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)\>

#### Defined in

main.ts:10469

***

### processBingSearchVolumeTasksReady()

> `protected` **processBingSearchVolumeTasksReady**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:10506

***

### processClickstreamDataBulkSearchVolumeLive()

> `protected` **processClickstreamDataBulkSearchVolumeLive**(`response`): `Promise`\<[`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)\>

#### Defined in

main.ts:11484

***

### processClickstreamDataDataforseoSearchVolumeLive()

> `protected` **processClickstreamDataDataforseoSearchVolumeLive**(`response`): `Promise`\<[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md)\>

#### Defined in

main.ts:11400

***

### processClickstreamDataGlobalSearchVolumeLive()

> `protected` **processClickstreamDataGlobalSearchVolumeLive**(`response`): `Promise`\<[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md)\>

#### Defined in

main.ts:11442

***

### processDataforseoTrendsDemographyLive()

> `protected` **processDataforseoTrendsDemographyLive**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsDemographyLiveResponseInfo`](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsDemographyLiveResponseInfo`](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md)\>

#### Defined in

main.ts:10311

***

### processDataforseoTrendsExploreLive()

> `protected` **processDataforseoTrendsExploreLive**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)\>

#### Defined in

main.ts:10227

***

### processDataforseoTrendsMergedDataLive()

> `protected` **processDataforseoTrendsMergedDataLive**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)\>

#### Defined in

main.ts:10353

***

### processDataforseoTrendsSubregionInterestsLive()

> `protected` **processDataforseoTrendsSubregionInterestsLive**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md)\>

#### Defined in

main.ts:10269

***

### processGoogleAdsAdTrafficByKeywordsLive()

> `protected` **processGoogleAdsAdTrafficByKeywordsLive**(`response`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)\>

#### Defined in

main.ts:9783

***

### processGoogleAdsAdTrafficByKeywordsTaskGet()

> `protected` **processGoogleAdsAdTrafficByKeywordsTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)\>

#### Defined in

main.ts:9741

***

### processGoogleAdsAdTrafficByKeywordsTaskPost()

> `protected` **processGoogleAdsAdTrafficByKeywordsTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:9661

***

### processGoogleAdsAdTrafficByKeywordsTasksReady()

> `protected` **processGoogleAdsAdTrafficByKeywordsTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:9698

***

### processGoogleAdsKeywordsForKeywordsLive()

> `protected` **processGoogleAdsKeywordsForKeywordsLive**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo.md)\>

#### Defined in

main.ts:9619

***

### processGoogleAdsKeywordsForKeywordsTaskGet()

> `protected` **processGoogleAdsKeywordsForKeywordsTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)\>

#### Defined in

main.ts:9577

***

### processGoogleAdsKeywordsForKeywordsTaskPost()

> `protected` **processGoogleAdsKeywordsForKeywordsTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:9497

***

### processGoogleAdsKeywordsForKeywordsTasksReady()

> `protected` **processGoogleAdsKeywordsForKeywordsTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:9534

***

### processGoogleAdsKeywordsForSiteLive()

> `protected` **processGoogleAdsKeywordsForSiteLive**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)\>

#### Defined in

main.ts:9455

***

### processGoogleAdsKeywordsForSiteTaskGet()

> `protected` **processGoogleAdsKeywordsForSiteTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo.md)\>

#### Defined in

main.ts:9413

***

### processGoogleAdsKeywordsForSiteTaskPost()

> `protected` **processGoogleAdsKeywordsForSiteTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)\>

#### Defined in

main.ts:9333

***

### processGoogleAdsKeywordsForSiteTasksReady()

> `protected` **processGoogleAdsKeywordsForSiteTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:9370

***

### processGoogleAdsSearchVolumeLive()

> `protected` **processGoogleAdsSearchVolumeLive**(`response`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)\>

#### Defined in

main.ts:9291

***

### processGoogleAdsSearchVolumeTaskGet()

> `protected` **processGoogleAdsSearchVolumeTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)\>

#### Defined in

main.ts:9249

***

### processGoogleAdsSearchVolumeTaskPost()

> `protected` **processGoogleAdsSearchVolumeTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)\>

#### Defined in

main.ts:9169

***

### processGoogleAdsSearchVolumeTasksReady()

> `protected` **processGoogleAdsSearchVolumeTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:9206

***

### processGoogleAdsStatus()

> `protected` **processGoogleAdsStatus**(`response`): `Promise`\<[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)\>

#### Defined in

main.ts:9008

***

### processGoogleTrendsCategories()

> `protected` **processGoogleTrendsCategories**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)\>

#### Defined in

main.ts:9939

***

### processGoogleTrendsExploreLive()

> `protected` **processGoogleTrendsExploreLive**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)\>

#### Defined in

main.ts:10103

***

### processGoogleTrendsExploreTaskGet()

> `protected` **processGoogleTrendsExploreTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)\>

#### Defined in

main.ts:10061

***

### processGoogleTrendsExploreTaskPost()

> `protected` **processGoogleTrendsExploreTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)\>

#### Defined in

main.ts:9981

***

### processGoogleTrendsExploreTasksReady()

> `protected` **processGoogleTrendsExploreTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:10018

***

### processKeywordsDataBingKeywordPerformanceLocationsAndLanguages()

> `protected` **processKeywordsDataBingKeywordPerformanceLocationsAndLanguages**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)\>

#### Defined in

main.ts:10956

***

### processKeywordsDataBingLanguages()

> `protected` **processKeywordsDataBingLanguages**(`response`): `Promise`\<[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)\>

#### Defined in

main.ts:10427

***

### processKeywordsDataBingLocations()

> `protected` **processKeywordsDataBingLocations**(`response`): `Promise`\<[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)\>

#### Defined in

main.ts:10390

***

### processKeywordsDataBingSearchVolumeHistoryLocationsAndLanguages()

> `protected` **processKeywordsDataBingSearchVolumeHistoryLocationsAndLanguages**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)\>

#### Defined in

main.ts:11157

***

### processKeywordsDataClickstreamDataLocationsAndLanguages()

> `protected` **processKeywordsDataClickstreamDataLocationsAndLanguages**(`response`): `Promise`\<[`KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo.md)\>

#### Defined in

main.ts:11358

***

### processKeywordsDataDataforseoTrendsLocations()

> `protected` **processKeywordsDataDataforseoTrendsLocations**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)\>

#### Defined in

main.ts:10140

***

### processKeywordsDataDataforseoTrendsLocationsCountry()

> `protected` **processKeywordsDataDataforseoTrendsLocationsCountry**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)\>

#### Defined in

main.ts:10185

***

### processKeywordsDataErrors()

> `protected` **processKeywordsDataErrors**(`response`): `Promise`\<[`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)\>

#### Defined in

main.ts:8971

***

### processKeywordsDataGoogleAdsLanguages()

> `protected` **processKeywordsDataGoogleAdsLanguages**(`response`): `Promise`\<[`KeywordsDataGoogleAdsLanguagesResponseInfo`](KeywordsDataGoogleAdsLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLanguagesResponseInfo`](KeywordsDataGoogleAdsLanguagesResponseInfo.md)\>

#### Defined in

main.ts:9127

***

### processKeywordsDataGoogleAdsLocations()

> `protected` **processKeywordsDataGoogleAdsLocations**(`response`): `Promise`\<[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)\>

#### Defined in

main.ts:9045

***

### processKeywordsDataGoogleAdsLocationsCountry()

> `protected` **processKeywordsDataGoogleAdsLocationsCountry**(`response`): `Promise`\<[`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)\>

#### Defined in

main.ts:9090

***

### processKeywordsDataGoogleTrendsLanguages()

> `protected` **processKeywordsDataGoogleTrendsLanguages**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)\>

#### Defined in

main.ts:9902

***

### processKeywordsDataGoogleTrendsLocations()

> `protected` **processKeywordsDataGoogleTrendsLocations**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)\>

#### Defined in

main.ts:9820

***

### processKeywordsDataGoogleTrendsLocationsCountry()

> `protected` **processKeywordsDataGoogleTrendsLocationsCountry**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)\>

#### Defined in

main.ts:9865

***

### processKeywordsDataIdList()

> `protected` **processKeywordsDataIdList**(`response`): `Promise`\<[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)\>

#### Defined in

main.ts:8929
