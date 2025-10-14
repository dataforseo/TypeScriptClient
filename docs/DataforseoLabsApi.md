# DataforseoLabsApi

All URIs are relative to *https://api.dataforseo.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**dataforseoLabsIdList**](DataforseoLabsApi.md#dataforseoLabsIdList) | **POST**  /v3/dataforseo_labs/id_list  |
[**dataforseoLabsStatus**](DataforseoLabsApi.md#dataforseoLabsStatus) | **GET**  /v3/dataforseo_labs/status  |
[**dataforseoLabsErrors**](DataforseoLabsApi.md#dataforseoLabsErrors) | **POST**  /v3/dataforseo_labs/errors  |
[**availableFilters**](DataforseoLabsApi.md#availableFilters) | **GET**  /v3/dataforseo_labs/available_filters  |
[**dataforseoLabsLocationsAndLanguages**](DataforseoLabsApi.md#dataforseoLabsLocationsAndLanguages) | **GET**  /v3/dataforseo_labs/locations_and_languages  |
[**categories**](DataforseoLabsApi.md#categories) | **GET**  /v3/dataforseo_labs/categories  |
[**googleAvailableHistory**](DataforseoLabsApi.md#googleAvailableHistory) | **GET**  /v3/dataforseo_labs/google/available_history  |
[**googleKeywordsForSiteLive**](DataforseoLabsApi.md#googleKeywordsForSiteLive) | **POST**  /v3/dataforseo_labs/google/keywords_for_site/live  |
[**googleRelatedKeywordsLive**](DataforseoLabsApi.md#googleRelatedKeywordsLive) | **POST**  /v3/dataforseo_labs/google/related_keywords/live  |
[**googleKeywordSuggestionsLive**](DataforseoLabsApi.md#googleKeywordSuggestionsLive) | **POST**  /v3/dataforseo_labs/google/keyword_suggestions/live  |
[**googleKeywordIdeasLive**](DataforseoLabsApi.md#googleKeywordIdeasLive) | **POST**  /v3/dataforseo_labs/google/keyword_ideas/live  |
[**googleBulkKeywordDifficultyLive**](DataforseoLabsApi.md#googleBulkKeywordDifficultyLive) | **POST**  /v3/dataforseo_labs/google/bulk_keyword_difficulty/live  |
[**googleSearchIntentLive**](DataforseoLabsApi.md#googleSearchIntentLive) | **POST**  /v3/dataforseo_labs/google/search_intent/live  |
[**dataforseoLabsGoogleCategoriesForKeywordsLanguages**](DataforseoLabsApi.md#dataforseoLabsGoogleCategoriesForKeywordsLanguages) | **GET**  /v3/dataforseo_labs/google/categories_for_keywords/languages  |
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

 let task = new DataforseoLabsIdListRequestInfo();
   task.datetime_from = "2025-07-14 10:25:03 +00:00";
   task.datetime_to = "2025-09-14 10:25:03 +00:00";
   task.limit = 100;
   task.offset = 0;
   task.sort = "desc";
 let response = await api.dataforseoLabsIdList([task]);
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

<a id="dataforseoLabsStatus"></a>
# **dataforseoLabsStatus**
> DataforseoLabsStatusResponseInfo dataforseoLabsStatus()


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

 let response = await api.dataforseoLabsStatus();
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

 let task = new DataforseoLabsErrorsRequestInfo();
   task.limit = 10;
   task.offset = 0;
 let response = await api.dataforseoLabsErrors([task]);
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

<a id="dataforseoLabsLocationsAndLanguages"></a>
# **dataforseoLabsLocationsAndLanguages**
> DataforseoLabsLocationsAndLanguagesResponseInfo dataforseoLabsLocationsAndLanguages()


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

 let response = await api.dataforseoLabsLocationsAndLanguages();
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

 let task = new DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo();
   task.target = "apple.com";
   task.location_code = 2840;
   task.language_code = "en";
   task.include_serp_info = true;
   task.include_subdomains = true;
   task.limit = 3;
 let response = await api.googleKeywordsForSiteLive([task]);
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

 let task = new DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo();
   task.keyword = "phone";
   task.location_code = 2840;
   task.language_name = "English";
   task.limit = 3;
 let response = await api.googleRelatedKeywordsLive([task]);
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

 let task = new DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo();
   task.keyword = "phone";
   task.location_code = 2840;
   task.language_code = "en";
   task.include_seed_keyword = true;
   task.include_serp_info = true;
   task.limit = 1;
 let response = await api.googleKeywordSuggestionsLive([task]);
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

 let task = new DataforseoLabsGoogleKeywordIdeasLiveRequestInfo();
   task.keywords = [
       "phone",
       "watch",
   ];
   task.location_code = 2840;
   task.language_code = "en";
   task.include_serp_info = true;
   task.limit = 3;
 let response = await api.googleKeywordIdeasLive([task]);
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

 let task = new DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo();
   task.keywords = [
       "dentist new york",
       "pizza brooklyn",
       "car dealer los angeles",
   ];
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleBulkKeywordDifficultyLive([task]);
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

 let task = new DataforseoLabsGoogleSearchIntentLiveRequestInfo();
   task.keywords = [
       "login page",
       "audi a7",
       "elon musk",
       "milk store new york",
   ];
   task.language_code = "en";
 let response = await api.googleSearchIntentLive([task]);
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

<a id="dataforseoLabsGoogleCategoriesForKeywordsLanguages"></a>
# **dataforseoLabsGoogleCategoriesForKeywordsLanguages**
> DataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo dataforseoLabsGoogleCategoriesForKeywordsLanguages()


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

 let response = await api.dataforseoLabsGoogleCategoriesForKeywordsLanguages();
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

 let task = new DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo();
   task.target = "dataforseo.com";
   task.location_name = "United States";
   task.language_code = "en";
   task.item_types = [
       "paid",
       "organic",
       "featured_snippet",
       "local_pack",
   ];
   task.limit = 3;
 let response = await api.googleCategoriesForDomainLive([task]);
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

 let task = new DataforseoLabsGoogleCategoriesForKeywordsLiveRequestInfo();
   task.keywords = [
       "dentist new york",
       "pizza brooklyn",
       "car dealer los angeles",
   ];
   task.language_code = "en";
 let response = await api.googleCategoriesForKeywordsLive([task]);
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

 let task = new DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo();
   task.category_codes = [
       "12191",
       "12193",
   ];
   task.location_code = 2840;
   task.language_name = "English";
   task.include_serp_info = true;
   task.limit = 3;
 let response = await api.googleKeywordsForCategoriesLive([task]);
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

 let task = new DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo();
   task.category_codes = [
       "13418",
       "11494",
   ];
   task.first_date = "2025-07-14";
   task.second_date = "2025-09-14";
   task.location_code = 2840;
   task.language_code = "en";
   task.limit = 3;
 let response = await api.googleDomainMetricsByCategoriesLive([task]);
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

 let task = new DataforseoLabsGoogleTopSearchesLiveRequestInfo();
   task.location_code = 2840;
   task.language_name = "English";
   task.limit = 3;
 let response = await api.googleTopSearchesLive([task]);
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

 let task = new DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo();
   task.limit = 2;
 let response = await api.googleDomainWhoisOverviewLive([task]);
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

 let task = new DataforseoLabsGoogleRankedKeywordsLiveRequestInfo();
   task.target = "dataforseo.com";
   task.location_name = "United States";
   task.language_name = "English";
   task.limit = 3;
   task.load_rank_absolute = true;
 let response = await api.googleRankedKeywordsLive([task]);
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

 let task = new DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo();
   task.keywords = [
       "phone",
   ];
   task.location_code = 2840;
   task.language_name = "English";
   task.item_types = [
       "organic",
   ];
   task.limit = 5;
 let response = await api.googleSerpCompetitorsLive([task]);
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

 let task = new DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo();
   task.target = "newmouth.com";
   task.location_code = 2840;
   task.language_name = "English";
   task.limit = 3;
   task.intersecting_domains = [
       "dentaly.org",
       "health.com",
       "trysnow.com",
   ];
 let response = await api.googleCompetitorsDomainLive([task]);
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

 let task = new DataforseoLabsGoogleDomainIntersectionLiveRequestInfo();
   task.target_1 = "mom.com";
   task.target_2 = "quora.com";
   task.location_code = 2840;
   task.language_code = "en";
   task.include_serp_info = true;
   task.limit = 3;
 let response = await api.googleDomainIntersectionLive([task]);
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

 let task = new DataforseoLabsGoogleSubdomainsLiveRequestInfo();
   task.target = "dataforseo.com";
   task.location_code = 2840;
   task.language_name = "English";
 let response = await api.googleSubdomainsLive([task]);
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

 let task = new DataforseoLabsGoogleRelevantPagesLiveRequestInfo();
   task.target = "amazon.com";
   task.location_code = 2840;
   task.language_name = "English";
   task.limit = 3;
 let response = await api.googleRelevantPagesLive([task]);
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

 let task = new DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo();
   task.target = "dataforseo.com";
   task.location_code = 2840;
   task.language_name = "English";
 let response = await api.googleDomainRankOverviewLive([task]);
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

 let task = new DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo();
   task.keyword = "albert einstein";
   task.date_from = "2025-07-14";
   task.date_to = "2025-09-14";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleHistoricalSerpsLive([task]);
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

 let task = new DataforseoLabsGoogleHistoricalRankOverviewLiveRequestInfo();
   task.target = "dataforseo.com";
   task.location_code = 2840;
   task.language_code = "en";
   task.date_from = "2025-07-14";
   task.date_to = "2025-09-14";
 let response = await api.googleHistoricalRankOverviewLive([task]);
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

 let task = new DataforseoLabsGooglePageIntersectionLiveRequestInfo();
   task.pages = {
       1: "https://forbes.com",
       2: "https://cnn.com/*",
   };
   task.location_code = 2840;
   task.language_name = "English";
   task.limit = 3;
   task.include_serp_info = true;
 let response = await api.googlePageIntersectionLive([task]);
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

 let task = new DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo();
   task.targets = [
       "dataforseo.com",
       "cnn.com",
       "forbes.com",
   ];
   task.location_code = 2840;
   task.language_code = "en";
   task.item_types = [
       "organic",
       "paid",
   ];
 let response = await api.googleBulkTrafficEstimationLive([task]);
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

 let task = new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveRequestInfo();
   task.targets = [
       "dataforseo.com",
       "cnn.com",
       "forbes.com",
   ];
   task.location_code = 2840;
   task.language_code = "en";
   task.date_from = "2025-07-14";
   task.date_to = "2025-09-14";
   task.item_types = [
       "organic",
       "paid",
   ];
 let response = await api.googleHistoricalBulkTrafficEstimationLive([task]);
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

 let task = new DataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo();
   task.keywords = [
       "iphone",
   ];
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleHistoricalKeywordDataLive([task]);
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

 let task = new DataforseoLabsGoogleKeywordOverviewLiveRequestInfo();
   task.keywords = [
       "iphone",
   ];
   task.location_code = 2840;
   task.language_code = "en";
   task.include_serp_info = true;
   task.include_clickstream_data = true;
 let response = await api.googleKeywordOverviewLive([task]);
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

 let task = new DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo();
   task.keywords = [
       "buy laptop",
       "cheap laptops for sale",
       "purchase laptop",
   ];
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.amazonBulkSearchVolumeLive([task]);
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

 let task = new DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo();
   task.keyword = "computer mouse";
   task.location_code = 2840;
   task.language_name = "English";
   task.include_seed_keyword = true;
   task.limit = 5;
 let response = await api.amazonRelatedKeywordsLive([task]);
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

 let task = new DataforseoLabsAmazonRankedKeywordsLiveRequestInfo();
   task.asin = "B00R92CL5E";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.amazonRankedKeywordsLive([task]);
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

 let task = new DataforseoLabsAmazonProductRankOverviewLiveRequestInfo();
   task.asins = [
       "B001TJ3HUG",
       "B01LW2SL7R",
   ];
   task.location_code = 2840;
   task.language_name = "English";
 let response = await api.amazonProductRankOverviewLive([task]);
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

 let task = new DataforseoLabsAmazonProductCompetitorsLiveRequestInfo();
   task.asin = "019005476X";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.amazonProductCompetitorsLive([task]);
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

 let task = new DataforseoLabsAmazonProductKeywordIntersectionsLiveRequestInfo();
   task.asins = {
       1: "B09172433Z",
       2: "B07GBZ4Q68",
       3: "B07GCKQD77",
   };
   task.location_code = 2840;
   task.language_name = "English";
 let response = await api.amazonProductKeywordIntersectionsLive([task]);
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

 let task = new DataforseoLabsBingBulkKeywordDifficultyLiveRequestInfo();
   task.keywords = [
       "dentist new york",
       "pizza brooklyn",
       "car dealer los angeles",
   ];
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.bingBulkKeywordDifficultyLive([task]);
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

 let task = new DataforseoLabsBingBulkTrafficEstimationLiveRequestInfo();
   task.targets = [
       "dataforseo.com",
       "cnn.com",
       "forbes.com",
   ];
   task.location_code = 2840;
   task.language_code = "en";
   task.item_types = [
       "organic",
       "paid",
   ];
 let response = await api.bingBulkTrafficEstimationLive([task]);
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

 let task = new DataforseoLabsBingCompetitorsDomainLiveRequestInfo();
   task.target = "newmouth.com";
   task.location_code = 2840;
   task.language_name = "English";
   task.limit = 3;
   task.intersecting_domains = [
       "dentaly.org",
       "health.com",
       "trysnow.com",
   ];
 let response = await api.bingCompetitorsDomainLive([task]);
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

 let task = new DataforseoLabsBingDomainIntersectionLiveRequestInfo();
   task.target_1 = "mom.me";
   task.target_2 = "quora.com";
   task.location_code = 2840;
   task.language_code = "en";
   task.limit = 5;
 let response = await api.bingDomainIntersectionLive([task]);
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

 let task = new DataforseoLabsBingDomainRankOverviewLiveRequestInfo();
   task.target = "dataforseo.com";
   task.location_code = 2840;
   task.language_name = "English";
 let response = await api.bingDomainRankOverviewLive([task]);
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

 let task = new DataforseoLabsBingPageIntersectionLiveRequestInfo();
   task.pages = {
       1: "https://dataforseo.com",
       2: "https://ahrefs.com/*",
   };
   task.location_code = 2840;
   task.language_name = "English";
   task.limit = 3;
 let response = await api.bingPageIntersectionLive([task]);
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

 let task = new DataforseoLabsBingRankedKeywordsLiveRequestInfo();
   task.target = "dataforseo.com";
   task.location_name = "United States";
   task.language_name = "English";
   task.limit = 3;
   task.load_rank_absolute = true;
 let response = await api.bingRankedKeywordsLive([task]);
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

 let task = new DataforseoLabsBingRelatedKeywordsLiveRequestInfo();
   task.keyword = "phone";
   task.location_code = 2840;
   task.language_name = "English";
   task.limit = 3;
 let response = await api.bingRelatedKeywordsLive([task]);
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

 let task = new DataforseoLabsBingRelevantPagesLiveRequestInfo();
   task.target = "dataforseo.com";
   task.location_code = 2840;
   task.language_name = "English";
   task.limit = 5;
 let response = await api.bingRelevantPagesLive([task]);
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

 let task = new DataforseoLabsBingSerpCompetitorsLiveRequestInfo();
   task.keywords = [
       "phone",
   ];
   task.location_code = 2840;
   task.language_name = "English";
   task.item_types = [
       "organic",
   ];
   task.limit = 5;
 let response = await api.bingSerpCompetitorsLive([task]);
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

 let task = new DataforseoLabsBingSubdomainsLiveRequestInfo();
   task.target = "dataforseo.com";
   task.location_code = 2840;
   task.language_name = "English";
   task.limit = 5;
 let response = await api.bingSubdomainsLive([task]);
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

 let task = new DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo();
   task.app_ids = [
       "org.telegram.messenger",
       "com.zhiliaoapp.musically",
   ];
   task.location_code = 2840;
   task.language_name = "English";
 let response = await api.googleBulkAppMetricsLive([task]);
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

 let task = new DataforseoLabsGoogleKeywordsForAppLiveRequestInfo();
   task.app_id = "org.telegram.messenger";
   task.location_code = 2840;
   task.language_name = "English";
   task.limit = 10;
 let response = await api.googleKeywordsForAppLive([task]);
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

 let task = new DataforseoLabsGoogleAppCompetitorsLiveRequestInfo();
   task.app_id = "org.telegram.messenger";
   task.location_code = 2840;
   task.language_name = "English";
   task.limit = 10;
 let response = await api.googleAppCompetitorsLive([task]);
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

 let task = new DataforseoLabsGoogleAppIntersectionLiveRequestInfo();
   task.app_ids = {
       1: "686449807",
       2: "382617920",
   };
   task.location_code = 2840;
   task.language_name = "English";
   task.limit = 10;
 let response = await api.googleAppIntersectionLive([task]);
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

 let task = new DataforseoLabsAppleBulkAppMetricsLiveRequestInfo();
   task.app_ids = [
       "686449807",
       "382617920",
   ];
   task.location_code = 2840;
   task.language_name = "English";
 let response = await api.appleBulkAppMetricsLive([task]);
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

 let task = new DataforseoLabsAppleKeywordsForAppLiveRequestInfo();
   task.app_id = "686449807";
   task.location_code = 2840;
   task.language_name = "English";
   task.limit = 10;
 let response = await api.appleKeywordsForAppLive([task]);
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

 let task = new DataforseoLabsAppleAppCompetitorsLiveRequestInfo();
   task.app_id = "686449807";
   task.location_code = 2840;
   task.language_name = "English";
   task.limit = 10;
 let response = await api.appleAppCompetitorsLive([task]);
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

 let task = new DataforseoLabsAppleAppIntersectionLiveRequestInfo();
   task.app_ids = {
       1: "686449807",
       2: "382617920",
   };
   task.location_code = 2840;
   task.language_name = "English";
   task.limit = 10;
 let response = await api.appleAppIntersectionLive([task]);
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