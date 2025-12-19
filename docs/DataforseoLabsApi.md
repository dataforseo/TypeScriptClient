# DataforseoLabsApi

All URIs are relative to *https://api.dataforseo.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**dataforseoLabsIdList**](DataforseoLabsApi.md#dataforseoLabsIdList) | **POST**  /v3/dataforseo_labs/id_list  |
[**status**](DataforseoLabsApi.md#status) | **GET**  /v3/dataforseo_labs/status  |
[**dataforseoLabsErrors**](DataforseoLabsApi.md#dataforseoLabsErrors) | **POST**  /v3/dataforseo_labs/errors  |
[**availableFilters**](DataforseoLabsApi.md#availableFilters) | **GET**  /v3/dataforseo_labs/available_filters  |
[**locationsAndLanguages**](DataforseoLabsApi.md#locationsAndLanguages) | **GET**  /v3/dataforseo_labs/locations_and_languages  |
[**categories**](DataforseoLabsApi.md#categories) | **GET**  /v3/dataforseo_labs/categories  |
[**googleAvailableHistory**](DataforseoLabsApi.md#googleAvailableHistory) | **GET**  /v3/dataforseo_labs/google/available_history  |
[**googleKeywordsForSiteLive**](DataforseoLabsApi.md#googleKeywordsForSiteLive) | **POST**  /v3/dataforseo_labs/google/keywords_for_site/live  |
[**googleRelatedKeywordsLive**](DataforseoLabsApi.md#googleRelatedKeywordsLive) | **POST**  /v3/dataforseo_labs/google/related_keywords/live  |
[**googleKeywordSuggestionsLive**](DataforseoLabsApi.md#googleKeywordSuggestionsLive) | **POST**  /v3/dataforseo_labs/google/keyword_suggestions/live  |
[**googleKeywordIdeasLive**](DataforseoLabsApi.md#googleKeywordIdeasLive) | **POST**  /v3/dataforseo_labs/google/keyword_ideas/live  |
[**googleBulkKeywordDifficultyLive**](DataforseoLabsApi.md#googleBulkKeywordDifficultyLive) | **POST**  /v3/dataforseo_labs/google/bulk_keyword_difficulty/live  |
[**googleSearchIntentLive**](DataforseoLabsApi.md#googleSearchIntentLive) | **POST**  /v3/dataforseo_labs/google/search_intent/live  |
[**googleCategoriesForKeywordsLanguages**](DataforseoLabsApi.md#googleCategoriesForKeywordsLanguages) | **GET**  /v3/dataforseo_labs/google/categories_for_keywords/languages  |
[**googleCategoriesForDomainLive**](DataforseoLabsApi.md#googleCategoriesForDomainLive) | **POST**  /v3/dataforseo_labs/google/categories_for_domain/live  |
[**googleCategoriesForKeywordsLive**](DataforseoLabsApi.md#googleCategoriesForKeywordsLive) | **POST**  /v3/dataforseo_labs/google/categories_for_keywords/live  |
[**googleKeywordsForCategoriesLive**](DataforseoLabsApi.md#googleKeywordsForCategoriesLive) | **POST**  /v3/dataforseo_labs/google/keywords_for_categories/live  |
[**googleDomainMetricsByCategoriesLive**](DataforseoLabsApi.md#googleDomainMetricsByCategoriesLive) | **POST**  /v3/dataforseo_labs/google/domain_metrics_by_categories/live  |
[**googleTopSearchesLive**](DataforseoLabsApi.md#googleTopSearchesLive) | **POST**  /v3/dataforseo_labs/google/top_searches/live  |
[**googleDomainWhoisOverviewLive**](DataforseoLabsApi.md#googleDomainWhoisOverviewLive) | **POST**  /v3/dataforseo_labs/google/domain_whois_overview/live  |
[**googleRankedKeywordsLive**](DataforseoLabsApi.md#googleRankedKeywordsLive) | **POST**  /v3/dataforseo_labs/google/ranked_keywords/live  |
[**googleSerpCompetitorsLive**](DataforseoLabsApi.md#googleSerpCompetitorsLive) | **POST**  /v3/dataforseo_labs/google/serp_competitors/live  |
[**googleCompetitorsDomainLive**](DataforseoLabsApi.md#googleCompetitorsDomainLive) | **POST**  /v3/dataforseo_labs/google/competitors_domain/live  |
[**googleDomainIntersectionLive**](DataforseoLabsApi.md#googleDomainIntersectionLive) | **POST**  /v3/dataforseo_labs/google/domain_intersection/live  |
[**googleSubdomainsLive**](DataforseoLabsApi.md#googleSubdomainsLive) | **POST**  /v3/dataforseo_labs/google/subdomains/live  |
[**googleRelevantPagesLive**](DataforseoLabsApi.md#googleRelevantPagesLive) | **POST**  /v3/dataforseo_labs/google/relevant_pages/live  |
[**googleDomainRankOverviewLive**](DataforseoLabsApi.md#googleDomainRankOverviewLive) | **POST**  /v3/dataforseo_labs/google/domain_rank_overview/live  |
[**googleHistoricalSerpsLive**](DataforseoLabsApi.md#googleHistoricalSerpsLive) | **POST**  /v3/dataforseo_labs/google/historical_serps/live  |
[**googleHistoricalRankOverviewLive**](DataforseoLabsApi.md#googleHistoricalRankOverviewLive) | **POST**  /v3/dataforseo_labs/google/historical_rank_overview/live  |
[**googlePageIntersectionLive**](DataforseoLabsApi.md#googlePageIntersectionLive) | **POST**  /v3/dataforseo_labs/google/page_intersection/live  |
[**googleBulkTrafficEstimationLive**](DataforseoLabsApi.md#googleBulkTrafficEstimationLive) | **POST**  /v3/dataforseo_labs/google/bulk_traffic_estimation/live  |
[**googleHistoricalBulkTrafficEstimationLive**](DataforseoLabsApi.md#googleHistoricalBulkTrafficEstimationLive) | **POST**  /v3/dataforseo_labs/google/historical_bulk_traffic_estimation/live  |
[**googleHistoricalKeywordDataLive**](DataforseoLabsApi.md#googleHistoricalKeywordDataLive) | **POST**  /v3/dataforseo_labs/google/historical_keyword_data/live  |
[**googleKeywordOverviewLive**](DataforseoLabsApi.md#googleKeywordOverviewLive) | **POST**  /v3/dataforseo_labs/google/keyword_overview/live  |
[**amazonBulkSearchVolumeLive**](DataforseoLabsApi.md#amazonBulkSearchVolumeLive) | **POST**  /v3/dataforseo_labs/amazon/bulk_search_volume/live  |
[**amazonRelatedKeywordsLive**](DataforseoLabsApi.md#amazonRelatedKeywordsLive) | **POST**  /v3/dataforseo_labs/amazon/related_keywords/live  |
[**amazonRankedKeywordsLive**](DataforseoLabsApi.md#amazonRankedKeywordsLive) | **POST**  /v3/dataforseo_labs/amazon/ranked_keywords/live  |
[**amazonProductRankOverviewLive**](DataforseoLabsApi.md#amazonProductRankOverviewLive) | **POST**  /v3/dataforseo_labs/amazon/product_rank_overview/live  |
[**amazonProductCompetitorsLive**](DataforseoLabsApi.md#amazonProductCompetitorsLive) | **POST**  /v3/dataforseo_labs/amazon/product_competitors/live  |
[**amazonProductKeywordIntersectionsLive**](DataforseoLabsApi.md#amazonProductKeywordIntersectionsLive) | **POST**  /v3/dataforseo_labs/amazon/product_keyword_intersections/live  |
[**bingBulkKeywordDifficultyLive**](DataforseoLabsApi.md#bingBulkKeywordDifficultyLive) | **POST**  /v3/dataforseo_labs/bing/bulk_keyword_difficulty/live  |
[**bingBulkTrafficEstimationLive**](DataforseoLabsApi.md#bingBulkTrafficEstimationLive) | **POST**  /v3/dataforseo_labs/bing/bulk_traffic_estimation/live  |
[**bingCompetitorsDomainLive**](DataforseoLabsApi.md#bingCompetitorsDomainLive) | **POST**  /v3/dataforseo_labs/bing/competitors_domain/live  |
[**bingDomainIntersectionLive**](DataforseoLabsApi.md#bingDomainIntersectionLive) | **POST**  /v3/dataforseo_labs/bing/domain_intersection/live  |
[**bingDomainRankOverviewLive**](DataforseoLabsApi.md#bingDomainRankOverviewLive) | **POST**  /v3/dataforseo_labs/bing/domain_rank_overview/live  |
[**bingPageIntersectionLive**](DataforseoLabsApi.md#bingPageIntersectionLive) | **POST**  /v3/dataforseo_labs/bing/page_intersection/live  |
[**bingRankedKeywordsLive**](DataforseoLabsApi.md#bingRankedKeywordsLive) | **POST**  /v3/dataforseo_labs/bing/ranked_keywords/live  |
[**bingRelatedKeywordsLive**](DataforseoLabsApi.md#bingRelatedKeywordsLive) | **POST**  /v3/dataforseo_labs/bing/related_keywords/live  |
[**bingRelevantPagesLive**](DataforseoLabsApi.md#bingRelevantPagesLive) | **POST**  /v3/dataforseo_labs/bing/relevant_pages/live  |
[**bingSerpCompetitorsLive**](DataforseoLabsApi.md#bingSerpCompetitorsLive) | **POST**  /v3/dataforseo_labs/bing/serp_competitors/live  |
[**bingSubdomainsLive**](DataforseoLabsApi.md#bingSubdomainsLive) | **POST**  /v3/dataforseo_labs/bing/subdomains/live  |
[**googleBulkAppMetricsLive**](DataforseoLabsApi.md#googleBulkAppMetricsLive) | **POST**  /v3/dataforseo_labs/google/bulk_app_metrics/live  |
[**googleKeywordsForAppLive**](DataforseoLabsApi.md#googleKeywordsForAppLive) | **POST**  /v3/dataforseo_labs/google/keywords_for_app/live  |
[**googleAppCompetitorsLive**](DataforseoLabsApi.md#googleAppCompetitorsLive) | **POST**  /v3/dataforseo_labs/google/app_competitors/live  |
[**googleAppIntersectionLive**](DataforseoLabsApi.md#googleAppIntersectionLive) | **POST**  /v3/dataforseo_labs/google/app_intersection/live  |
[**appleBulkAppMetricsLive**](DataforseoLabsApi.md#appleBulkAppMetricsLive) | **POST**  /v3/dataforseo_labs/apple/bulk_app_metrics/live  |
[**appleKeywordsForAppLive**](DataforseoLabsApi.md#appleKeywordsForAppLive) | **POST**  /v3/dataforseo_labs/apple/keywords_for_app/live  |
[**appleAppCompetitorsLive**](DataforseoLabsApi.md#appleAppCompetitorsLive) | **POST**  /v3/dataforseo_labs/apple/app_competitors/live  |
[**appleAppIntersectionLive**](DataforseoLabsApi.md#appleAppIntersectionLive) | **POST**  /v3/dataforseo_labs/apple/app_intersection/live  |

<a id="dataforseoLabsIdList"></a>
# **dataforseoLabsIdList**
> DataforseoLabsIdListResponseInfo dataforseoLabsIdList()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.dataforseoLabsIdList([
   [
       new DataforseoLabsIdListRequestInfo({
           datetime_from: ,
           datetime_to: ,
           limit: 100,
           offset: 0,
           sort: "desc",
           include_metadata: true,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsIdListRequestInfo[]&gt;**](DataforseoLabsIdListRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsIdListResponseInfo**](DataforseoLabsIdListResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="status"></a>
# **status**
> DataforseoLabsStatusResponseInfo status()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.status();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**DataforseoLabsStatusResponseInfo**](DataforseoLabsStatusResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="dataforseoLabsErrors"></a>
# **dataforseoLabsErrors**
> DataforseoLabsErrorsResponseInfo dataforseoLabsErrors()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.dataforseoLabsErrors([
   [
       new DataforseoLabsErrorsRequestInfo({
           limit: 10,
           offset: 0,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsErrorsRequestInfo[]&gt;**](DataforseoLabsErrorsRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsErrorsResponseInfo**](DataforseoLabsErrorsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="availableFilters"></a>
# **availableFilters**
> DataforseoLabsAvailableFiltersResponseInfo availableFilters()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.availableFilters();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**DataforseoLabsAvailableFiltersResponseInfo**](DataforseoLabsAvailableFiltersResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="locationsAndLanguages"></a>
# **locationsAndLanguages**
> DataforseoLabsLocationsAndLanguagesResponseInfo locationsAndLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.locationsAndLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**DataforseoLabsLocationsAndLanguagesResponseInfo**](DataforseoLabsLocationsAndLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="categories"></a>
# **categories**
> DataforseoLabsCategoriesResponseInfo categories()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.categories();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**DataforseoLabsCategoriesResponseInfo**](DataforseoLabsCategoriesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAvailableHistory"></a>
# **googleAvailableHistory**
> DataforseoLabsGoogleAvailableHistoryResponseInfo googleAvailableHistory()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleAvailableHistory();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**DataforseoLabsGoogleAvailableHistoryResponseInfo**](DataforseoLabsGoogleAvailableHistoryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleKeywordsForSiteLive"></a>
# **googleKeywordsForSiteLive**
> DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo googleKeywordsForSiteLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleKeywordsForSiteLive([
   [
       new DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo({
           target: "apple.com",
           language_code: "en",
           location_code: 2840,
           include_serp_info: true,
           include_subdomains: true,
           filters: [
           "serp_info.se_results_count",
           ">",
           0,
       ],
           limit: 3,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo[]&gt;**](DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo**](DataforseoLabsGoogleKeywordsForSiteLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleRelatedKeywordsLive"></a>
# **googleRelatedKeywordsLive**
> DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo googleRelatedKeywordsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleRelatedKeywordsLive([
   [
       new DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo({
           keyword: "phone",
           language_name: "English",
           location_code: 2840,
           limit: 3,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo[]&gt;**](DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo**](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleKeywordSuggestionsLive"></a>
# **googleKeywordSuggestionsLive**
> DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo googleKeywordSuggestionsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleKeywordSuggestionsLive([
   [
       new DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo({
           keyword: "phone",
           location_code: 2840,
           language_code: "en",
           include_serp_info: true,
           include_seed_keyword: true,
           limit: 1,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo[]&gt;**](DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo**](DataforseoLabsGoogleKeywordSuggestionsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleKeywordIdeasLive"></a>
# **googleKeywordIdeasLive**
> DataforseoLabsGoogleKeywordIdeasLiveResponseInfo googleKeywordIdeasLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleKeywordIdeasLive([
   [
       new DataforseoLabsGoogleKeywordIdeasLiveRequestInfo({
           keywords: [
           "phone",
           "watch",
       ],
           location_code: 2840,
           language_code: "en",
           include_serp_info: true,
           limit: 3,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleKeywordIdeasLiveRequestInfo[]&gt;**](DataforseoLabsGoogleKeywordIdeasLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleKeywordIdeasLiveResponseInfo**](DataforseoLabsGoogleKeywordIdeasLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleBulkKeywordDifficultyLive"></a>
# **googleBulkKeywordDifficultyLive**
> DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo googleBulkKeywordDifficultyLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleBulkKeywordDifficultyLive([
   [
       new DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo({
           location_code: 2840,
           language_code: "en",
           keywords: [
           "dentist new york",
           "pizza brooklyn",
           "car dealer los angeles",
       ],
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo[]&gt;**](DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo**](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleSearchIntentLive"></a>
# **googleSearchIntentLive**
> DataforseoLabsGoogleSearchIntentLiveResponseInfo googleSearchIntentLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleSearchIntentLive([
   [
       new DataforseoLabsGoogleSearchIntentLiveRequestInfo({
           language_code: "en",
           keywords: [
           "login page",
           "audi a7",
           "elon musk",
           "milk store new york",
       ],
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleSearchIntentLiveRequestInfo[]&gt;**](DataforseoLabsGoogleSearchIntentLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleSearchIntentLiveResponseInfo**](DataforseoLabsGoogleSearchIntentLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleCategoriesForKeywordsLanguages"></a>
# **googleCategoriesForKeywordsLanguages**
> DataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo googleCategoriesForKeywordsLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleCategoriesForKeywordsLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**DataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo**](DataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleCategoriesForDomainLive"></a>
# **googleCategoriesForDomainLive**
> DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo googleCategoriesForDomainLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleCategoriesForDomainLive([
   [
       new DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo({
           target: "dataforseo.com",
           language_code: "en",
           location_name: "United States",
           item_types: [
           "paid",
           "organic",
           "featured_snippet",
           "local_pack",
       ],
           limit: 3,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo[]&gt;**](DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo**](DataforseoLabsGoogleCategoriesForDomainLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleCategoriesForKeywordsLive"></a>
# **googleCategoriesForKeywordsLive**
> DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo googleCategoriesForKeywordsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleCategoriesForKeywordsLive([
   [
       new DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo({
           language_code: "en",
           keywords: [
           "dentist new york",
           "pizza brooklyn",
           "car dealer los angeles",
       ],
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo[]&gt;**](DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo**](DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleKeywordsForCategoriesLive"></a>
# **googleKeywordsForCategoriesLive**
> DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo googleKeywordsForCategoriesLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleKeywordsForCategoriesLive([
   [
       new DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo({
           category_codes: [
           12191,
           12193,
       ],
           language_name: "English",
           location_code: 2840,
           include_serp_info: true,
           limit: 3,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo[]&gt;**](DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo**](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleDomainMetricsByCategoriesLive"></a>
# **googleDomainMetricsByCategoriesLive**
> DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo googleDomainMetricsByCategoriesLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleDomainMetricsByCategoriesLive([
   [
       new DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo({
           location_code: 2840,
           language_code: "en",
           category_codes: [
           13418,
           11494,
       ],
           first_date: ,
           second_date: ,
           limit: 3,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo[]&gt;**](DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo**](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleTopSearchesLive"></a>
# **googleTopSearchesLive**
> DataforseoLabsGoogleTopSearchesLiveResponseInfo googleTopSearchesLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleTopSearchesLive([
   [
       new DataforseoLabsGoogleTopSearchesLiveRequestInfo({
           language_name: "English",
           location_code: 2840,
           limit: 3,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleTopSearchesLiveRequestInfo[]&gt;**](DataforseoLabsGoogleTopSearchesLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleTopSearchesLiveResponseInfo**](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleDomainWhoisOverviewLive"></a>
# **googleDomainWhoisOverviewLive**
> DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo googleDomainWhoisOverviewLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleDomainWhoisOverviewLive([
   [
       new DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo({
           limit: 2,
           filters: [
           [
               "epp_status_codes",
               "in",
               [
                   "client_transfer_prohibited",
                   "client_update_prohibited",
               ],
           ],
       ],
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo[]&gt;**](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo**](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleRankedKeywordsLive"></a>
# **googleRankedKeywordsLive**
> DataforseoLabsGoogleRankedKeywordsLiveResponseInfo googleRankedKeywordsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleRankedKeywordsLive([
   [
       new DataforseoLabsGoogleRankedKeywordsLiveRequestInfo({
           target: "dataforseo.com",
           language_name: "English",
           location_name: "United States",
           load_rank_absolute: true,
           limit: 3,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleRankedKeywordsLiveRequestInfo[]&gt;**](DataforseoLabsGoogleRankedKeywordsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleRankedKeywordsLiveResponseInfo**](DataforseoLabsGoogleRankedKeywordsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleSerpCompetitorsLive"></a>
# **googleSerpCompetitorsLive**
> DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo googleSerpCompetitorsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleSerpCompetitorsLive([
   [
       new DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo({
           keywords: [
           "phone",
       ],
           language_name: "English",
           location_code: 2840,
           item_types: [
           "organic",
       ],
           limit: 5,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo[]&gt;**](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo**](DataforseoLabsGoogleSerpCompetitorsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleCompetitorsDomainLive"></a>
# **googleCompetitorsDomainLive**
> DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo googleCompetitorsDomainLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleCompetitorsDomainLive([
   [
       new DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo({
           target: "newmouth.com",
           intersecting_domains: [
           "dentaly.org",
           "health.com",
           "trysnow.com",
       ],
           language_name: "English",
           location_code: 2840,
           limit: 3,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo[]&gt;**](DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo**](DataforseoLabsGoogleCompetitorsDomainLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleDomainIntersectionLive"></a>
# **googleDomainIntersectionLive**
> DataforseoLabsGoogleDomainIntersectionLiveResponseInfo googleDomainIntersectionLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleDomainIntersectionLive([
   [
       new DataforseoLabsGoogleDomainIntersectionLiveRequestInfo({
           target_1: "mom.com",
           target_2: "quora.com",
           language_code: "en",
           location_code: 2840,
           include_serp_info: true,
           limit: 3,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleDomainIntersectionLiveRequestInfo[]&gt;**](DataforseoLabsGoogleDomainIntersectionLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleDomainIntersectionLiveResponseInfo**](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleSubdomainsLive"></a>
# **googleSubdomainsLive**
> DataforseoLabsGoogleSubdomainsLiveResponseInfo googleSubdomainsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleSubdomainsLive([
   [
       new DataforseoLabsGoogleSubdomainsLiveRequestInfo({
           target: "dataforseo.com",
           language_name: "English",
           location_code: 2840,
           filters: [
           [
               "metrics.organic.pos_1",
               "<>",
               0,
           ],
           "or",
           [
               "metrics.organic.pos_2_3",
               "<>",
               0,
           ],
       ],
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleSubdomainsLiveRequestInfo[]&gt;**](DataforseoLabsGoogleSubdomainsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleSubdomainsLiveResponseInfo**](DataforseoLabsGoogleSubdomainsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleRelevantPagesLive"></a>
# **googleRelevantPagesLive**
> DataforseoLabsGoogleRelevantPagesLiveResponseInfo googleRelevantPagesLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleRelevantPagesLive([
   [
       new DataforseoLabsGoogleRelevantPagesLiveRequestInfo({
           target: "amazon.com",
           language_name: "English",
           location_code: 2840,
           filters: [
           [
               "metrics.organic.pos_1",
               "<>",
               0,
           ],
           "or",
           [
               "metrics.organic.pos_2_3",
               "<>",
               0,
           ],
       ],
           limit: 3,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleRelevantPagesLiveRequestInfo[]&gt;**](DataforseoLabsGoogleRelevantPagesLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleRelevantPagesLiveResponseInfo**](DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleDomainRankOverviewLive"></a>
# **googleDomainRankOverviewLive**
> DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo googleDomainRankOverviewLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleDomainRankOverviewLive([
   [
       new DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo({
           target: "dataforseo.com",
           language_name: "English",
           location_code: 2840,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo[]&gt;**](DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo**](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleHistoricalSerpsLive"></a>
# **googleHistoricalSerpsLive**
> DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo googleHistoricalSerpsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleHistoricalSerpsLive([
   [
       new DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo({
           keyword: "albert einstein",
           location_code: 2840,
           language_code: "en",
           date_from: ,
           date_to: ,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo[]&gt;**](DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo**](DataforseoLabsGoogleHistoricalSerpsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleHistoricalRankOverviewLive"></a>
# **googleHistoricalRankOverviewLive**
> DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo googleHistoricalRankOverviewLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleHistoricalRankOverviewLive([
   [
       new DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo({
           target: "dataforseo.com",
           location_code: 2840,
           language_code: "en",
           date_from: ,
           date_to: ,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo[]&gt;**](DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo**](DataforseoLabsGoogleHistoricalRankOverviewLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googlePageIntersectionLive"></a>
# **googlePageIntersectionLive**
> DataforseoLabsGooglePageIntersectionLiveResponseInfo googlePageIntersectionLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googlePageIntersectionLive([
   [
       new DataforseoLabsGooglePageIntersectionLiveRequestInfo({
           pages: {
           "1": "https://forbes.com",
           "2": "https://cnn.com/*",
       },
           language_name: "English",
           location_code: 2840,
           include_serp_info: true,
           limit: 3,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGooglePageIntersectionLiveRequestInfo[]&gt;**](DataforseoLabsGooglePageIntersectionLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGooglePageIntersectionLiveResponseInfo**](DataforseoLabsGooglePageIntersectionLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleBulkTrafficEstimationLive"></a>
# **googleBulkTrafficEstimationLive**
> DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo googleBulkTrafficEstimationLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleBulkTrafficEstimationLive([
   [
       new DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo({
           targets: [
           "dataforseo.com",
           "cnn.com",
           "forbes.com",
       ],
           location_code: 2840,
           language_code: "en",
           item_types: [
           "organic",
           "paid",
       ],
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo[]&gt;**](DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo**](DataforseoLabsGoogleBulkTrafficEstimationLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleHistoricalBulkTrafficEstimationLive"></a>
# **googleHistoricalBulkTrafficEstimationLive**
> DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo googleHistoricalBulkTrafficEstimationLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleHistoricalBulkTrafficEstimationLive([
   [
       new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo({
           targets: [
           "dataforseo.com",
           "cnn.com",
           "forbes.com",
       ],
           location_code: 2840,
           language_code: "en",
           date_from: ,
           date_to: ,
           item_types: [
           "organic",
           "paid",
       ],
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo[]&gt;**](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo**](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleHistoricalKeywordDataLive"></a>
# **googleHistoricalKeywordDataLive**
> DataforseoLabsGoogleHistoricalKeywordDataLiveResponseInfo googleHistoricalKeywordDataLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleHistoricalKeywordDataLive([
   [
       new DataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo({
           language_code: "en",
           location_code: 2840,
           keywords: [
           "iphone",
       ],
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo[]&gt;**](DataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleHistoricalKeywordDataLiveResponseInfo**](DataforseoLabsGoogleHistoricalKeywordDataLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleKeywordOverviewLive"></a>
# **googleKeywordOverviewLive**
> DataforseoLabsGoogleKeywordOverviewLiveResponseInfo googleKeywordOverviewLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleKeywordOverviewLive([
   [
       new DataforseoLabsGoogleKeywordOverviewLiveRequestInfo({
           language_code: "en",
           location_code: 2840,
           include_clickstream_data: true,
           include_serp_info: true,
           keywords: [
           "iphone",
       ],
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleKeywordOverviewLiveRequestInfo[]&gt;**](DataforseoLabsGoogleKeywordOverviewLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleKeywordOverviewLiveResponseInfo**](DataforseoLabsGoogleKeywordOverviewLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonBulkSearchVolumeLive"></a>
# **amazonBulkSearchVolumeLive**
> DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo amazonBulkSearchVolumeLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.amazonBulkSearchVolumeLive([
   [
       new DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo({
           keywords: [
           "buy laptop",
           "cheap laptops for sale",
           "purchase laptop",
       ],
           location_code: 2840,
           language_code: "en",
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo[]&gt;**](DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo**](DataforseoLabsAmazonBulkSearchVolumeLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonRelatedKeywordsLive"></a>
# **amazonRelatedKeywordsLive**
> DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo amazonRelatedKeywordsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.amazonRelatedKeywordsLive([
   [
       new DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo({
           keyword: "computer mouse",
           language_name: "English",
           location_code: 2840,
           limit: 5,
           include_seed_keyword: true,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo[]&gt;**](DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo**](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonRankedKeywordsLive"></a>
# **amazonRankedKeywordsLive**
> DataforseoLabsAmazonRankedKeywordsLiveResponseInfo amazonRankedKeywordsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.amazonRankedKeywordsLive([
   [
       new DataforseoLabsAmazonRankedKeywordsLiveRequestInfo({
           asin: "B00R92CL5E",
           location_code: 2840,
           language_code: "en",
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsAmazonRankedKeywordsLiveRequestInfo[]&gt;**](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsAmazonRankedKeywordsLiveResponseInfo**](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonProductRankOverviewLive"></a>
# **amazonProductRankOverviewLive**
> DataforseoLabsAmazonProductRankOverviewLiveResponseInfo amazonProductRankOverviewLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.amazonProductRankOverviewLive([
   [
       new DataforseoLabsAmazonProductRankOverviewLiveRequestInfo({
           asins: [
           "B001TJ3HUG",
           "B01LW2SL7R",
       ],
           language_name: "English",
           location_code: 2840,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsAmazonProductRankOverviewLiveRequestInfo[]&gt;**](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsAmazonProductRankOverviewLiveResponseInfo**](DataforseoLabsAmazonProductRankOverviewLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonProductCompetitorsLive"></a>
# **amazonProductCompetitorsLive**
> DataforseoLabsAmazonProductCompetitorsLiveResponseInfo amazonProductCompetitorsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.amazonProductCompetitorsLive([
   [
       new DataforseoLabsAmazonProductCompetitorsLiveRequestInfo({
           asin: "019005476X",
           location_code: 2840,
           language_code: "en",
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsAmazonProductCompetitorsLiveRequestInfo[]&gt;**](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsAmazonProductCompetitorsLiveResponseInfo**](DataforseoLabsAmazonProductCompetitorsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonProductKeywordIntersectionsLive"></a>
# **amazonProductKeywordIntersectionsLive**
> DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo amazonProductKeywordIntersectionsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.amazonProductKeywordIntersectionsLive([
   [
       new DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo({
           asins: {
           "1": "B09172433Z",
           "2": "B07GBZ4Q68",
           "3": "B07GCKQD77",
       },
           language_name: "English",
           location_code: 2840,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo[]&gt;**](DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo**](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingBulkKeywordDifficultyLive"></a>
# **bingBulkKeywordDifficultyLive**
> DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo bingBulkKeywordDifficultyLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.bingBulkKeywordDifficultyLive([
   [
       new DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo({
           location_code: 2840,
           language_code: "en",
           keywords: [
           "dentist new york",
           "pizza brooklyn",
           "car dealer los angeles",
       ],
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo[]&gt;**](DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo**](DataforseoLabsBingBulkKeywordDifficultyLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingBulkTrafficEstimationLive"></a>
# **bingBulkTrafficEstimationLive**
> DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo bingBulkTrafficEstimationLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.bingBulkTrafficEstimationLive([
   [
       new DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo({
           targets: [
           "dataforseo.com",
           "cnn.com",
           "forbes.com",
       ],
           location_code: 2840,
           language_code: "en",
           item_types: [
           "organic",
           "paid",
       ],
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo[]&gt;**](DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo**](DataforseoLabsBingBulkTrafficEstimationLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingCompetitorsDomainLive"></a>
# **bingCompetitorsDomainLive**
> DataforseoLabsBingCompetitorsDomainLiveResponseInfo bingCompetitorsDomainLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.bingCompetitorsDomainLive([
   [
       new DataforseoLabsBingCompetitorsDomainLiveRequestInfo({
           target: "newmouth.com",
           intersecting_domains: [
           "dentaly.org",
           "health.com",
           "trysnow.com",
       ],
           language_name: "English",
           location_code: 2840,
           limit: 3,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsBingCompetitorsDomainLiveRequestInfo[]&gt;**](DataforseoLabsBingCompetitorsDomainLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsBingCompetitorsDomainLiveResponseInfo**](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingDomainIntersectionLive"></a>
# **bingDomainIntersectionLive**
> DataforseoLabsBingDomainIntersectionLiveResponseInfo bingDomainIntersectionLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.bingDomainIntersectionLive([
   [
       new DataforseoLabsBingDomainIntersectionLiveRequestInfo({
           target_1: "mom.me",
           target_2: "quora.com",
           language_code: "en",
           location_code: 2840,
           filters: [
           [
               "first_domain_serp_element.etv",
               ">",
               0,
           ],
           "and",
           [
               "first_domain_serp_element.description",
               "like",
               "%goat%",
           ],
       ],
           limit: 5,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsBingDomainIntersectionLiveRequestInfo[]&gt;**](DataforseoLabsBingDomainIntersectionLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsBingDomainIntersectionLiveResponseInfo**](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingDomainRankOverviewLive"></a>
# **bingDomainRankOverviewLive**
> DataforseoLabsBingDomainRankOverviewLiveResponseInfo bingDomainRankOverviewLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.bingDomainRankOverviewLive([
   [
       new DataforseoLabsBingDomainRankOverviewLiveRequestInfo({
           target: "dataforseo.com",
           language_name: "English",
           location_code: 2840,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsBingDomainRankOverviewLiveRequestInfo[]&gt;**](DataforseoLabsBingDomainRankOverviewLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsBingDomainRankOverviewLiveResponseInfo**](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingPageIntersectionLive"></a>
# **bingPageIntersectionLive**
> DataforseoLabsBingPageIntersectionLiveResponseInfo bingPageIntersectionLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.bingPageIntersectionLive([
   [
       new DataforseoLabsBingPageIntersectionLiveRequestInfo({
           pages: {
           "1": "https://dataforseo.com",
           "2": "https://ahrefs.com/*",
       },
           language_name: "English",
           location_code: 2840,
           limit: 3,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsBingPageIntersectionLiveRequestInfo[]&gt;**](DataforseoLabsBingPageIntersectionLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsBingPageIntersectionLiveResponseInfo**](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingRankedKeywordsLive"></a>
# **bingRankedKeywordsLive**
> DataforseoLabsBingRankedKeywordsLiveResponseInfo bingRankedKeywordsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.bingRankedKeywordsLive([
   [
       new DataforseoLabsBingRankedKeywordsLiveRequestInfo({
           target: "dataforseo.com",
           language_name: "English",
           location_name: "United States",
           load_rank_absolute: true,
           limit: 3,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsBingRankedKeywordsLiveRequestInfo[]&gt;**](DataforseoLabsBingRankedKeywordsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsBingRankedKeywordsLiveResponseInfo**](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingRelatedKeywordsLive"></a>
# **bingRelatedKeywordsLive**
> DataforseoLabsBingRelatedKeywordsLiveResponseInfo bingRelatedKeywordsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.bingRelatedKeywordsLive([
   [
       new DataforseoLabsBingRelatedKeywordsLiveRequestInfo({
           keyword: "phone",
           language_name: "English",
           location_code: 2840,
           limit: 3,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsBingRelatedKeywordsLiveRequestInfo[]&gt;**](DataforseoLabsBingRelatedKeywordsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsBingRelatedKeywordsLiveResponseInfo**](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingRelevantPagesLive"></a>
# **bingRelevantPagesLive**
> DataforseoLabsBingRelevantPagesLiveResponseInfo bingRelevantPagesLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.bingRelevantPagesLive([
   [
       new DataforseoLabsBingRelevantPagesLiveRequestInfo({
           target: "dataforseo.com",
           language_name: "English",
           location_code: 2840,
           filters: [
           [
               "metrics.organic.pos_1",
               "<>",
               0,
           ],
           "or",
           [
               "metrics.organic.pos_2_3",
               "<>",
               0,
           ],
       ],
           limit: 5,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsBingRelevantPagesLiveRequestInfo[]&gt;**](DataforseoLabsBingRelevantPagesLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsBingRelevantPagesLiveResponseInfo**](DataforseoLabsBingRelevantPagesLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingSerpCompetitorsLive"></a>
# **bingSerpCompetitorsLive**
> DataforseoLabsBingSerpCompetitorsLiveResponseInfo bingSerpCompetitorsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.bingSerpCompetitorsLive([
   [
       new DataforseoLabsBingSerpCompetitorsLiveRequestInfo({
           keywords: [
           "phone",
       ],
           language_name: "English",
           location_code: 2840,
           item_types: [
           "organic",
       ],
           limit: 5,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsBingSerpCompetitorsLiveRequestInfo[]&gt;**](DataforseoLabsBingSerpCompetitorsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsBingSerpCompetitorsLiveResponseInfo**](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingSubdomainsLive"></a>
# **bingSubdomainsLive**
> DataforseoLabsBingSubdomainsLiveResponseInfo bingSubdomainsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.bingSubdomainsLive([
   [
       new DataforseoLabsBingSubdomainsLiveRequestInfo({
           target: "dataforseo.com",
           language_name: "English",
           location_code: 2840,
           filters: [
           [
               "metrics.organic.pos_1",
               "<>",
               0,
           ],
           "or",
           [
               "metrics.organic.pos_2_3",
               "<>",
               0,
           ],
       ],
           limit: 5,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsBingSubdomainsLiveRequestInfo[]&gt;**](DataforseoLabsBingSubdomainsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsBingSubdomainsLiveResponseInfo**](DataforseoLabsBingSubdomainsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleBulkAppMetricsLive"></a>
# **googleBulkAppMetricsLive**
> DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo googleBulkAppMetricsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleBulkAppMetricsLive([
   [
       new DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo({
           app_ids: [
           "org.telegram.messenger",
           "com.zhiliaoapp.musically",
       ],
           language_name: "English",
           location_code: 2840,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo[]&gt;**](DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo**](DataforseoLabsGoogleBulkAppMetricsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleKeywordsForAppLive"></a>
# **googleKeywordsForAppLive**
> DataforseoLabsGoogleKeywordsForAppLiveResponseInfo googleKeywordsForAppLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleKeywordsForAppLive([
   [
       new DataforseoLabsGoogleKeywordsForAppLiveRequestInfo({
           app_id: "org.telegram.messenger",
           language_name: "English",
           location_code: 2840,
           limit: 10,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleKeywordsForAppLiveRequestInfo[]&gt;**](DataforseoLabsGoogleKeywordsForAppLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleKeywordsForAppLiveResponseInfo**](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppCompetitorsLive"></a>
# **googleAppCompetitorsLive**
> DataforseoLabsGoogleAppCompetitorsLiveResponseInfo googleAppCompetitorsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleAppCompetitorsLive([
   [
       new DataforseoLabsGoogleAppCompetitorsLiveRequestInfo({
           app_id: "org.telegram.messenger",
           language_name: "English",
           location_code: 2840,
           limit: 10,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleAppCompetitorsLiveRequestInfo[]&gt;**](DataforseoLabsGoogleAppCompetitorsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleAppCompetitorsLiveResponseInfo**](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppIntersectionLive"></a>
# **googleAppIntersectionLive**
> DataforseoLabsGoogleAppIntersectionLiveResponseInfo googleAppIntersectionLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleAppIntersectionLive([
   [
       new DataforseoLabsGoogleAppIntersectionLiveRequestInfo({
           app_ids: {
           "1": "org.telegram.messenger",
           "2": "com.zhiliaoapp.musically",
       },
           language_name: "English",
           location_code: 2840,
           limit: 10,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsGoogleAppIntersectionLiveRequestInfo[]&gt;**](DataforseoLabsGoogleAppIntersectionLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsGoogleAppIntersectionLiveResponseInfo**](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleBulkAppMetricsLive"></a>
# **appleBulkAppMetricsLive**
> DataforseoLabsAppleBulkAppMetricsLiveResponseInfo appleBulkAppMetricsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.appleBulkAppMetricsLive([
   [
       new DataforseoLabsAppleBulkAppMetricsLiveRequestInfo({
           app_ids: [
           "686449807",
           "382617920",
       ],
           language_name: "English",
           location_code: 2840,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsAppleBulkAppMetricsLiveRequestInfo[]&gt;**](DataforseoLabsAppleBulkAppMetricsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsAppleBulkAppMetricsLiveResponseInfo**](DataforseoLabsAppleBulkAppMetricsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleKeywordsForAppLive"></a>
# **appleKeywordsForAppLive**
> DataforseoLabsAppleKeywordsForAppLiveResponseInfo appleKeywordsForAppLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.appleKeywordsForAppLive([
   [
       new DataforseoLabsAppleKeywordsForAppLiveRequestInfo({
           app_id: "686449807",
           language_name: "English",
           location_code: 2840,
           limit: 10,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsAppleKeywordsForAppLiveRequestInfo[]&gt;**](DataforseoLabsAppleKeywordsForAppLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsAppleKeywordsForAppLiveResponseInfo**](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleAppCompetitorsLive"></a>
# **appleAppCompetitorsLive**
> DataforseoLabsAppleAppCompetitorsLiveResponseInfo appleAppCompetitorsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.appleAppCompetitorsLive([
   [
       new DataforseoLabsAppleAppCompetitorsLiveRequestInfo({
           app_id: "686449807",
           language_name: "English",
           location_code: 2840,
           limit: 10,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsAppleAppCompetitorsLiveRequestInfo[]&gt;**](DataforseoLabsAppleAppCompetitorsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsAppleAppCompetitorsLiveResponseInfo**](DataforseoLabsAppleAppCompetitorsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleAppIntersectionLive"></a>
# **appleAppIntersectionLive**
> DataforseoLabsAppleAppIntersectionLiveResponseInfo appleAppIntersectionLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DataforseoLabsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.appleAppIntersectionLive([
   [
       new DataforseoLabsAppleAppIntersectionLiveRequestInfo({
           app_ids: {
           "1": "686449807",
           "2": "382617920",
       },
           language_name: "English",
           location_code: 2840,
           limit: 10,
       }),
   ]
 ]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DataforseoLabsAppleAppIntersectionLiveRequestInfo[]&gt;**](DataforseoLabsAppleAppIntersectionLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DataforseoLabsAppleAppIntersectionLiveResponseInfo**](DataforseoLabsAppleAppIntersectionLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |