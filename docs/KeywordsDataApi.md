# KeywordsDataApi

All URIs are relative to *https://api.dataforseo.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**keywordsDataIdList**](KeywordsDataApi.md#keywordsDataIdList) | **POST**  /v3/keywords_data/id_list  |
[**keywordsDataErrors**](KeywordsDataApi.md#keywordsDataErrors) | **POST**  /v3/keywords_data/errors  |
[**googleAdsStatus**](KeywordsDataApi.md#googleAdsStatus) | **GET**  /v3/keywords_data/google_ads/status  |
[**keywordsDataGoogleAdsLocations**](KeywordsDataApi.md#keywordsDataGoogleAdsLocations) | **GET**  /v3/keywords_data/google_ads/locations  |
[**keywordsDataGoogleAdsLocationsCountry**](KeywordsDataApi.md#keywordsDataGoogleAdsLocationsCountry) | **GET**  /v3/keywords_data/google_ads/locations/{country}  |
[**keywordsDataGoogleAdsLanguages**](KeywordsDataApi.md#keywordsDataGoogleAdsLanguages) | **GET**  /v3/keywords_data/google_ads/languages  |
[**googleAdsSearchVolumeTaskPost**](KeywordsDataApi.md#googleAdsSearchVolumeTaskPost) | **POST**  /v3/keywords_data/google_ads/search_volume/task_post  |
[**googleAdsSearchVolumeTasksReady**](KeywordsDataApi.md#googleAdsSearchVolumeTasksReady) | **GET**  /v3/keywords_data/google_ads/search_volume/tasks_ready  |
[**googleAdsSearchVolumeTaskGet**](KeywordsDataApi.md#googleAdsSearchVolumeTaskGet) | **GET**  /v3/keywords_data/google_ads/search_volume/task_get/{id}  |
[**googleAdsSearchVolumeLive**](KeywordsDataApi.md#googleAdsSearchVolumeLive) | **POST**  /v3/keywords_data/google_ads/search_volume/live  |
[**googleAdsKeywordsForSiteTaskPost**](KeywordsDataApi.md#googleAdsKeywordsForSiteTaskPost) | **POST**  /v3/keywords_data/google_ads/keywords_for_site/task_post  |
[**googleAdsKeywordsForSiteTasksReady**](KeywordsDataApi.md#googleAdsKeywordsForSiteTasksReady) | **GET**  /v3/keywords_data/google_ads/keywords_for_site/tasks_ready  |
[**googleAdsKeywordsForSiteTaskGet**](KeywordsDataApi.md#googleAdsKeywordsForSiteTaskGet) | **GET**  /v3/keywords_data/google_ads/keywords_for_site/task_get/{id}  |
[**googleAdsKeywordsForSiteLive**](KeywordsDataApi.md#googleAdsKeywordsForSiteLive) | **POST**  /v3/keywords_data/google_ads/keywords_for_site/live  |
[**googleAdsKeywordsForKeywordsTaskPost**](KeywordsDataApi.md#googleAdsKeywordsForKeywordsTaskPost) | **POST**  /v3/keywords_data/google_ads/keywords_for_keywords/task_post  |
[**googleAdsKeywordsForKeywordsTasksReady**](KeywordsDataApi.md#googleAdsKeywordsForKeywordsTasksReady) | **GET**  /v3/keywords_data/google_ads/keywords_for_keywords/tasks_ready  |
[**googleAdsKeywordsForKeywordsTaskGet**](KeywordsDataApi.md#googleAdsKeywordsForKeywordsTaskGet) | **GET**  /v3/keywords_data/google_ads/keywords_for_keywords/task_get/{id}  |
[**googleAdsKeywordsForKeywordsLive**](KeywordsDataApi.md#googleAdsKeywordsForKeywordsLive) | **POST**  /v3/keywords_data/google_ads/keywords_for_keywords/live  |
[**googleAdsAdTrafficByKeywordsTaskPost**](KeywordsDataApi.md#googleAdsAdTrafficByKeywordsTaskPost) | **POST**  /v3/keywords_data/google_ads/ad_traffic_by_keywords/task_post  |
[**googleAdsAdTrafficByKeywordsTasksReady**](KeywordsDataApi.md#googleAdsAdTrafficByKeywordsTasksReady) | **GET**  /v3/keywords_data/google_ads/ad_traffic_by_keywords/tasks_ready  |
[**googleAdsAdTrafficByKeywordsTaskGet**](KeywordsDataApi.md#googleAdsAdTrafficByKeywordsTaskGet) | **GET**  /v3/keywords_data/google_ads/ad_traffic_by_keywords/task_get/{id}  |
[**googleAdsAdTrafficByKeywordsLive**](KeywordsDataApi.md#googleAdsAdTrafficByKeywordsLive) | **POST**  /v3/keywords_data/google_ads/ad_traffic_by_keywords/live  |
[**keywordsDataGoogleTrendsLocations**](KeywordsDataApi.md#keywordsDataGoogleTrendsLocations) | **GET**  /v3/keywords_data/google_trends/locations  |
[**keywordsDataGoogleTrendsLocationsCountry**](KeywordsDataApi.md#keywordsDataGoogleTrendsLocationsCountry) | **GET**  /v3/keywords_data/google_trends/locations/{country}  |
[**keywordsDataGoogleTrendsLanguages**](KeywordsDataApi.md#keywordsDataGoogleTrendsLanguages) | **GET**  /v3/keywords_data/google_trends/languages  |
[**googleTrendsCategories**](KeywordsDataApi.md#googleTrendsCategories) | **GET**  /v3/keywords_data/google_trends/categories  |
[**googleTrendsExploreTaskPost**](KeywordsDataApi.md#googleTrendsExploreTaskPost) | **POST**  /v3/keywords_data/google_trends/explore/task_post  |
[**googleTrendsExploreTasksReady**](KeywordsDataApi.md#googleTrendsExploreTasksReady) | **GET**  /v3/keywords_data/google_trends/explore/tasks_ready  |
[**googleTrendsExploreTaskGet**](KeywordsDataApi.md#googleTrendsExploreTaskGet) | **GET**  /v3/keywords_data/google_trends/explore/task_get/{id}  |
[**googleTrendsExploreLive**](KeywordsDataApi.md#googleTrendsExploreLive) | **POST**  /v3/keywords_data/google_trends/explore/live  |
[**keywordsDataDataforseoTrendsLocations**](KeywordsDataApi.md#keywordsDataDataforseoTrendsLocations) | **GET**  /v3/keywords_data/dataforseo_trends/locations  |
[**keywordsDataDataforseoTrendsLocationsCountry**](KeywordsDataApi.md#keywordsDataDataforseoTrendsLocationsCountry) | **GET**  /v3/keywords_data/dataforseo_trends/locations/{country}  |
[**dataforseoTrendsExploreLive**](KeywordsDataApi.md#dataforseoTrendsExploreLive) | **POST**  /v3/keywords_data/dataforseo_trends/explore/live  |
[**dataforseoTrendsSubregionInterestsLive**](KeywordsDataApi.md#dataforseoTrendsSubregionInterestsLive) | **POST**  /v3/keywords_data/dataforseo_trends/subregion_interests/live  |
[**dataforseoTrendsDemographyLive**](KeywordsDataApi.md#dataforseoTrendsDemographyLive) | **POST**  /v3/keywords_data/dataforseo_trends/demography/live  |
[**dataforseoTrendsMergedDataLive**](KeywordsDataApi.md#dataforseoTrendsMergedDataLive) | **POST**  /v3/keywords_data/dataforseo_trends/merged_data/live  |
[**keywordsDataBingLocations**](KeywordsDataApi.md#keywordsDataBingLocations) | **GET**  /v3/keywords_data/bing/locations  |
[**keywordsDataBingLanguages**](KeywordsDataApi.md#keywordsDataBingLanguages) | **GET**  /v3/keywords_data/bing/languages  |
[**bingSearchVolumeTaskPost**](KeywordsDataApi.md#bingSearchVolumeTaskPost) | **POST**  /v3/keywords_data/bing/search_volume/task_post  |
[**bingSearchVolumeTasksReady**](KeywordsDataApi.md#bingSearchVolumeTasksReady) | **GET**  /v3/keywords_data/bing/search_volume/tasks_ready  |
[**bingSearchVolumeTaskGet**](KeywordsDataApi.md#bingSearchVolumeTaskGet) | **GET**  /v3/keywords_data/bing/search_volume/task_get/{id}  |
[**bingSearchVolumeLive**](KeywordsDataApi.md#bingSearchVolumeLive) | **POST**  /v3/keywords_data/bing/search_volume/live  |
[**bingAudienceEstimationJobFunctions**](KeywordsDataApi.md#bingAudienceEstimationJobFunctions) | **GET**  /v3/keywords_data/bing/audience_estimation/job_functions  |
[**bingAudienceEstimationIndustries**](KeywordsDataApi.md#bingAudienceEstimationIndustries) | **GET**  /v3/keywords_data/bing/audience_estimation/industries  |
[**bingAudienceEstimationTaskPost**](KeywordsDataApi.md#bingAudienceEstimationTaskPost) | **POST**  /v3/keywords_data/bing/audience_estimation/task_post  |
[**bingAudienceEstimationTasksReady**](KeywordsDataApi.md#bingAudienceEstimationTasksReady) | **GET**  /v3/keywords_data/bing/audience_estimation/tasks_ready  |
[**bingAudienceEstimationTaskGet**](KeywordsDataApi.md#bingAudienceEstimationTaskGet) | **GET**  /v3/keywords_data/bing/audience_estimation/task_get/{id}  |
[**bingAudienceEstimationLive**](KeywordsDataApi.md#bingAudienceEstimationLive) | **POST**  /v3/keywords_data/bing/audience_estimation/live  |
[**bingKeywordsForSiteTaskPost**](KeywordsDataApi.md#bingKeywordsForSiteTaskPost) | **POST**  /v3/keywords_data/bing/keywords_for_site/task_post  |
[**bingKeywordsForSiteTasksReady**](KeywordsDataApi.md#bingKeywordsForSiteTasksReady) | **GET**  /v3/keywords_data/bing/keywords_for_site/tasks_ready  |
[**bingKeywordsForSiteTaskGet**](KeywordsDataApi.md#bingKeywordsForSiteTaskGet) | **GET**  /v3/keywords_data/bing/keywords_for_site/task_get/{id}  |
[**bingKeywordsForSiteLive**](KeywordsDataApi.md#bingKeywordsForSiteLive) | **POST**  /v3/keywords_data/bing/keywords_for_site/live  |
[**bingKeywordsForKeywordsTaskPost**](KeywordsDataApi.md#bingKeywordsForKeywordsTaskPost) | **POST**  /v3/keywords_data/bing/keywords_for_keywords/task_post  |
[**bingKeywordsForKeywordsTasksReady**](KeywordsDataApi.md#bingKeywordsForKeywordsTasksReady) | **GET**  /v3/keywords_data/bing/keywords_for_keywords/tasks_ready  |
[**bingKeywordsForKeywordsTaskGet**](KeywordsDataApi.md#bingKeywordsForKeywordsTaskGet) | **GET**  /v3/keywords_data/bing/keywords_for_keywords/task_get/{id}  |
[**bingKeywordsForKeywordsLive**](KeywordsDataApi.md#bingKeywordsForKeywordsLive) | **POST**  /v3/keywords_data/bing/keywords_for_keywords/live  |
[**keywordsDataBingKeywordPerformanceLocationsAndLanguages**](KeywordsDataApi.md#keywordsDataBingKeywordPerformanceLocationsAndLanguages) | **GET**  /v3/keywords_data/bing/keyword_performance/locations_and_languages  |
[**bingKeywordPerformanceTaskPost**](KeywordsDataApi.md#bingKeywordPerformanceTaskPost) | **POST**  /v3/keywords_data/bing/keyword_performance/task_post  |
[**bingKeywordPerformanceTasksReady**](KeywordsDataApi.md#bingKeywordPerformanceTasksReady) | **GET**  /v3/keywords_data/bing/keyword_performance/tasks_ready  |
[**bingKeywordPerformanceTaskGet**](KeywordsDataApi.md#bingKeywordPerformanceTaskGet) | **GET**  /v3/keywords_data/bing/keyword_performance/task_get/{id}  |
[**bingKeywordPerformanceLive**](KeywordsDataApi.md#bingKeywordPerformanceLive) | **POST**  /v3/keywords_data/bing/keyword_performance/live  |
[**keywordsDataBingSearchVolumeHistoryLocationsAndLanguages**](KeywordsDataApi.md#keywordsDataBingSearchVolumeHistoryLocationsAndLanguages) | **GET**  /v3/keywords_data/bing/search_volume_history/locations_and_languages  |
[**bingSearchVolumeHistoryTaskPost**](KeywordsDataApi.md#bingSearchVolumeHistoryTaskPost) | **POST**  /v3/keywords_data/bing/search_volume_history/task_post  |
[**bingSearchVolumeHistoryTasksReady**](KeywordsDataApi.md#bingSearchVolumeHistoryTasksReady) | **GET**  /v3/keywords_data/bing/search_volume_history/tasks_ready  |
[**bingSearchVolumeHistoryTaskGet**](KeywordsDataApi.md#bingSearchVolumeHistoryTaskGet) | **GET**  /v3/keywords_data/bing/search_volume_history/task_get/{id}  |
[**bingSearchVolumeHistoryLive**](KeywordsDataApi.md#bingSearchVolumeHistoryLive) | **POST**  /v3/keywords_data/bing/search_volume_history/live  |
[**keywordsDataClickstreamDataLocationsAndLanguages**](KeywordsDataApi.md#keywordsDataClickstreamDataLocationsAndLanguages) | **GET**  /v3/keywords_data/clickstream_data/locations_and_languages  |
[**clickstreamDataDataforseoSearchVolumeLive**](KeywordsDataApi.md#clickstreamDataDataforseoSearchVolumeLive) | **POST**  /v3/keywords_data/clickstream_data/dataforseo_search_volume/live  |
[**clickstreamDataGlobalSearchVolumeLive**](KeywordsDataApi.md#clickstreamDataGlobalSearchVolumeLive) | **POST**  /v3/keywords_data/clickstream_data/global_search_volume/live  |
[**clickstreamDataBulkSearchVolumeLive**](KeywordsDataApi.md#clickstreamDataBulkSearchVolumeLive) | **POST**  /v3/keywords_data/clickstream_data/bulk_search_volume/live  |

<a id="keywordsDataIdList"></a>
# **keywordsDataIdList**
> KeywordsDataIdListResponseInfo keywordsDataIdList()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataIdListRequestInfo();
   task.datetime_from = "2025-07-14 10:26:16 +00:00";
   task.datetime_to = "2025-09-14 10:26:16 +00:00";
   task.limit = 100;
   task.offset = 0;
   task.sort = "desc";
 let response = await api.keywordsDataIdList([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataIdListRequestInfo[]&gt;**](KeywordsDataIdListRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataIdListResponseInfo**](KeywordsDataIdListResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="keywordsDataErrors"></a>
# **keywordsDataErrors**
> KeywordsDataErrorsResponseInfo keywordsDataErrors()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataErrorsRequestInfo();
   task.limit = 10;
   task.offset = 0;
   task.filtered_function = "pingback_url";
 let response = await api.keywordsDataErrors([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataErrorsRequestInfo[]&gt;**](KeywordsDataErrorsRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataErrorsResponseInfo**](KeywordsDataErrorsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsStatus"></a>
# **googleAdsStatus**
> KeywordsDataGoogleAdsStatusResponseInfo googleAdsStatus()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.googleAdsStatus();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleAdsStatusResponseInfo**](KeywordsDataGoogleAdsStatusResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="keywordsDataGoogleAdsLocations"></a>
# **keywordsDataGoogleAdsLocations**
> KeywordsDataGoogleAdsLocationsResponseInfo keywordsDataGoogleAdsLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.keywordsDataGoogleAdsLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleAdsLocationsResponseInfo**](KeywordsDataGoogleAdsLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="keywordsDataGoogleAdsLocationsCountry"></a>
# **keywordsDataGoogleAdsLocationsCountry**
> KeywordsDataGoogleAdsLocationsCountryResponseInfo keywordsDataGoogleAdsLocationsCountry()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let country = "us";
 let response = await api.keywordsDataGoogleAdsLocationsCountry(country);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleAdsLocationsCountryResponseInfo**](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="keywordsDataGoogleAdsLanguages"></a>
# **keywordsDataGoogleAdsLanguages**
> KeywordsDataGoogleAdsLanguagesResponseInfo keywordsDataGoogleAdsLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.keywordsDataGoogleAdsLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleAdsLanguagesResponseInfo**](KeywordsDataGoogleAdsLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsSearchVolumeTaskPost"></a>
# **googleAdsSearchVolumeTaskPost**
> KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo googleAdsSearchVolumeTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo();
   task.keywords = [
       "buy laptop",
       "cheap laptops for sale",
       "purchase laptop",
   ];
   task.location_name = "United States";
 let response = await api.googleAdsSearchVolumeTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo[]&gt;**](KeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo**](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsSearchVolumeTasksReady"></a>
# **googleAdsSearchVolumeTasksReady**
> KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo googleAdsSearchVolumeTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.googleAdsSearchVolumeTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo**](KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsSearchVolumeTaskGet"></a>
# **googleAdsSearchVolumeTaskGet**
> KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo googleAdsSearchVolumeTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleAdsSearchVolumeTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo**](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsSearchVolumeLive"></a>
# **googleAdsSearchVolumeLive**
> KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo googleAdsSearchVolumeLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo();
   task.keywords = [
       "buy laptop",
       "cheap laptops for sale",
       "purchase laptop",
   ];
   task.location_code = 2840;
   task.search_partners = true;
   task.date_from = "2025-07-14";
 let response = await api.googleAdsSearchVolumeLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo[]&gt;**](KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo**](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsKeywordsForSiteTaskPost"></a>
# **googleAdsKeywordsForSiteTaskPost**
> KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo googleAdsKeywordsForSiteTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo();
   task.target = "dataforseo.com";
   task.location_code = 2840;
 let response = await api.googleAdsKeywordsForSiteTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo[]&gt;**](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo**](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsKeywordsForSiteTasksReady"></a>
# **googleAdsKeywordsForSiteTasksReady**
> KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo googleAdsKeywordsForSiteTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.googleAdsKeywordsForSiteTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo**](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsKeywordsForSiteTaskGet"></a>
# **googleAdsKeywordsForSiteTaskGet**
> KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo googleAdsKeywordsForSiteTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleAdsKeywordsForSiteTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo**](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsKeywordsForSiteLive"></a>
# **googleAdsKeywordsForSiteLive**
> KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo googleAdsKeywordsForSiteLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo();
   task.target = "dataforseo.com";
   task.location_code = 2840;
 let response = await api.googleAdsKeywordsForSiteLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo[]&gt;**](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo**](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsKeywordsForKeywordsTaskPost"></a>
# **googleAdsKeywordsForKeywordsTaskPost**
> KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo googleAdsKeywordsForKeywordsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo();
   task.keywords = [
       "phone",
       "cellphone",
   ];
   task.location_code = 2840;
 let response = await api.googleAdsKeywordsForKeywordsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo[]&gt;**](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo**](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsKeywordsForKeywordsTasksReady"></a>
# **googleAdsKeywordsForKeywordsTasksReady**
> KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo googleAdsKeywordsForKeywordsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.googleAdsKeywordsForKeywordsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo**](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsKeywordsForKeywordsTaskGet"></a>
# **googleAdsKeywordsForKeywordsTaskGet**
> KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo googleAdsKeywordsForKeywordsTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleAdsKeywordsForKeywordsTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo**](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsKeywordsForKeywordsLive"></a>
# **googleAdsKeywordsForKeywordsLive**
> KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo googleAdsKeywordsForKeywordsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataGoogleAdsKeywordsForKeywordsLiveRequestInfo();
   task.keywords = [
       "phone",
       "cellphone",
   ];
   task.location_code = 2840;
 let response = await api.googleAdsKeywordsForKeywordsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataGoogleAdsKeywordsForKeywordsLiveRequestInfo[]&gt;**](KeywordsDataGoogleAdsKeywordsForKeywordsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo**](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsAdTrafficByKeywordsTaskPost"></a>
# **googleAdsAdTrafficByKeywordsTaskPost**
> KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo googleAdsAdTrafficByKeywordsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostRequestInfo();
   task.keywords = [
       "seo marketing",
   ];
   task.bid = 999;
   task.match = "exact";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleAdsAdTrafficByKeywordsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostRequestInfo[]&gt;**](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo**](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsAdTrafficByKeywordsTasksReady"></a>
# **googleAdsAdTrafficByKeywordsTasksReady**
> KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo googleAdsAdTrafficByKeywordsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.googleAdsAdTrafficByKeywordsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo**](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsAdTrafficByKeywordsTaskGet"></a>
# **googleAdsAdTrafficByKeywordsTaskGet**
> KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo googleAdsAdTrafficByKeywordsTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleAdsAdTrafficByKeywordsTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo**](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsAdTrafficByKeywordsLive"></a>
# **googleAdsAdTrafficByKeywordsLive**
> KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo googleAdsAdTrafficByKeywordsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo();
   task.keywords = [
       "seo marketing",
   ];
   task.bid = 999;
   task.match = "exact";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleAdsAdTrafficByKeywordsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo[]&gt;**](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo**](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="keywordsDataGoogleTrendsLocations"></a>
# **keywordsDataGoogleTrendsLocations**
> KeywordsDataGoogleTrendsLocationsResponseInfo keywordsDataGoogleTrendsLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.keywordsDataGoogleTrendsLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleTrendsLocationsResponseInfo**](KeywordsDataGoogleTrendsLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="keywordsDataGoogleTrendsLocationsCountry"></a>
# **keywordsDataGoogleTrendsLocationsCountry**
> KeywordsDataGoogleTrendsLocationsCountryResponseInfo keywordsDataGoogleTrendsLocationsCountry()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let country = "us";
 let response = await api.keywordsDataGoogleTrendsLocationsCountry(country);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleTrendsLocationsCountryResponseInfo**](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="keywordsDataGoogleTrendsLanguages"></a>
# **keywordsDataGoogleTrendsLanguages**
> KeywordsDataGoogleTrendsLanguagesResponseInfo keywordsDataGoogleTrendsLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.keywordsDataGoogleTrendsLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleTrendsLanguagesResponseInfo**](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleTrendsCategories"></a>
# **googleTrendsCategories**
> KeywordsDataGoogleTrendsCategoriesResponseInfo googleTrendsCategories()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.googleTrendsCategories();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleTrendsCategoriesResponseInfo**](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleTrendsExploreTaskPost"></a>
# **googleTrendsExploreTaskPost**
> KeywordsDataGoogleTrendsExploreTaskPostResponseInfo googleTrendsExploreTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataGoogleTrendsExploreTaskPostRequestInfo();
   task.keywords = [
       "seo api",
       "rank api",
   ];
   task.type = "youtube";
   task.category_code = 3;
   task.date_from = "2025-07-14";
   task.date_to = "2025-09-14";
 let response = await api.googleTrendsExploreTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataGoogleTrendsExploreTaskPostRequestInfo[]&gt;**](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataGoogleTrendsExploreTaskPostResponseInfo**](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleTrendsExploreTasksReady"></a>
# **googleTrendsExploreTasksReady**
> KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo googleTrendsExploreTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.googleTrendsExploreTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo**](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleTrendsExploreTaskGet"></a>
# **googleTrendsExploreTaskGet**
> KeywordsDataGoogleTrendsExploreTaskGetResponseInfo googleTrendsExploreTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleTrendsExploreTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataGoogleTrendsExploreTaskGetResponseInfo**](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleTrendsExploreLive"></a>
# **googleTrendsExploreLive**
> KeywordsDataGoogleTrendsExploreLiveResponseInfo googleTrendsExploreLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataGoogleTrendsExploreLiveRequestInfo();
   task.keywords = [
       "rugby",
       "cricket",
   ];
   task.location_name = "United States";
   task.type = "youtube";
   task.category_code = 3;
   task.date_from = "2025-07-14";
   task.date_to = "2025-09-14";
 let response = await api.googleTrendsExploreLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataGoogleTrendsExploreLiveRequestInfo[]&gt;**](KeywordsDataGoogleTrendsExploreLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataGoogleTrendsExploreLiveResponseInfo**](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="keywordsDataDataforseoTrendsLocations"></a>
# **keywordsDataDataforseoTrendsLocations**
> KeywordsDataDataforseoTrendsLocationsResponseInfo keywordsDataDataforseoTrendsLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.keywordsDataDataforseoTrendsLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataDataforseoTrendsLocationsResponseInfo**](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="keywordsDataDataforseoTrendsLocationsCountry"></a>
# **keywordsDataDataforseoTrendsLocationsCountry**
> KeywordsDataDataforseoTrendsLocationsCountryResponseInfo keywordsDataDataforseoTrendsLocationsCountry()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let country = "us";
 let response = await api.keywordsDataDataforseoTrendsLocationsCountry(country);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataDataforseoTrendsLocationsCountryResponseInfo**](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="dataforseoTrendsExploreLive"></a>
# **dataforseoTrendsExploreLive**
> KeywordsDataDataforseoTrendsExploreLiveResponseInfo dataforseoTrendsExploreLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataDataforseoTrendsExploreLiveRequestInfo();
   task.keywords = [
       "iphone 14",
       "samsung s23",
   ];
   task.location_code = 2840;
 let response = await api.dataforseoTrendsExploreLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataDataforseoTrendsExploreLiveRequestInfo[]&gt;**](KeywordsDataDataforseoTrendsExploreLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataDataforseoTrendsExploreLiveResponseInfo**](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="dataforseoTrendsSubregionInterestsLive"></a>
# **dataforseoTrendsSubregionInterestsLive**
> KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo dataforseoTrendsSubregionInterestsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo();
   task.keywords = [
       "rugby",
       "cricket",
   ];
   task.location_name = "United States";
   task.type = "web";
   task.date_from = "2025-07-14";
   task.date_to = "2025-09-14";
 let response = await api.dataforseoTrendsSubregionInterestsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo[]&gt;**](KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo**](KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="dataforseoTrendsDemographyLive"></a>
# **dataforseoTrendsDemographyLive**
> KeywordsDataDataforseoTrendsDemographyLiveResponseInfo dataforseoTrendsDemographyLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataDataforseoTrendsDemographyLiveRequestInfo();
   task.keywords = [
       "rugby",
       "cricket",
   ];
   task.location_name = "United States";
   task.type = "web";
   task.date_from = "2025-07-14";
   task.date_to = "2025-09-14";
 let response = await api.dataforseoTrendsDemographyLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataDataforseoTrendsDemographyLiveRequestInfo[]&gt;**](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataDataforseoTrendsDemographyLiveResponseInfo**](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="dataforseoTrendsMergedDataLive"></a>
# **dataforseoTrendsMergedDataLive**
> KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo dataforseoTrendsMergedDataLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo();
   task.keywords = [
       "rugby",
       "cricket",
   ];
   task.location_name = "United States";
   task.type = "web";
   task.date_from = "2025-07-14";
   task.date_to = "2025-09-14";
 let response = await api.dataforseoTrendsMergedDataLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo[]&gt;**](KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo**](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="keywordsDataBingLocations"></a>
# **keywordsDataBingLocations**
> KeywordsDataBingLocationsResponseInfo keywordsDataBingLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.keywordsDataBingLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingLocationsResponseInfo**](KeywordsDataBingLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="keywordsDataBingLanguages"></a>
# **keywordsDataBingLanguages**
> KeywordsDataBingLanguagesResponseInfo keywordsDataBingLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.keywordsDataBingLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingLanguagesResponseInfo**](KeywordsDataBingLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingSearchVolumeTaskPost"></a>
# **bingSearchVolumeTaskPost**
> KeywordsDataBingSearchVolumeTaskPostResponseInfo bingSearchVolumeTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataBingSearchVolumeTaskPostRequestInfo();
   task.keywords = [
       "average page rpm adsense",
       "adsense blank ads how long",
       "leads and prospects",
   ];
   task.location_name = "United States";
   task.language_name = "English";
 let response = await api.bingSearchVolumeTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataBingSearchVolumeTaskPostRequestInfo[]&gt;**](KeywordsDataBingSearchVolumeTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataBingSearchVolumeTaskPostResponseInfo**](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingSearchVolumeTasksReady"></a>
# **bingSearchVolumeTasksReady**
> KeywordsDataBingSearchVolumeTasksReadyResponseInfo bingSearchVolumeTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.bingSearchVolumeTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingSearchVolumeTasksReadyResponseInfo**](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingSearchVolumeTaskGet"></a>
# **bingSearchVolumeTaskGet**
> KeywordsDataBingSearchVolumeTaskGetResponseInfo bingSearchVolumeTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.bingSearchVolumeTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingSearchVolumeTaskGetResponseInfo**](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingSearchVolumeLive"></a>
# **bingSearchVolumeLive**
> KeywordsDataBingSearchVolumeLiveResponseInfo bingSearchVolumeLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataBingSearchVolumeLiveRequestInfo();
   task.keywords = [
       "tom and jerry",
       "silicon valley",
       "spider man",
   ];
   task.location_name = "United States";
   task.language_code = "en";
 let response = await api.bingSearchVolumeLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataBingSearchVolumeLiveRequestInfo[]&gt;**](KeywordsDataBingSearchVolumeLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataBingSearchVolumeLiveResponseInfo**](KeywordsDataBingSearchVolumeLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingAudienceEstimationJobFunctions"></a>
# **bingAudienceEstimationJobFunctions**
> KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo bingAudienceEstimationJobFunctions()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.bingAudienceEstimationJobFunctions();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo**](KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingAudienceEstimationIndustries"></a>
# **bingAudienceEstimationIndustries**
> KeywordsDataBingAudienceEstimationIndustriesResponseInfo bingAudienceEstimationIndustries()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.bingAudienceEstimationIndustries();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingAudienceEstimationIndustriesResponseInfo**](KeywordsDataBingAudienceEstimationIndustriesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingAudienceEstimationTaskPost"></a>
# **bingAudienceEstimationTaskPost**
> KeywordsDataBingAudienceEstimationTaskPostResponseInfo bingAudienceEstimationTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataBingAudienceEstimationTaskPostRequestInfo();
   task.location_coordinate = "29.6821525,-82.4098881,100";
   task.age = [
       "twenty_five_to_thirty_four",
       "eighteen_to_twenty_four",
       "unknown",
   ];
   task.bid = 1;
   task.daily_budget = 24;
   task.gender = [
       "male",
   ];
   task.industry = [
       "806303407",
       "806301758",
   ];
   task.job_function = [
       "806298607",
   ];
 let response = await api.bingAudienceEstimationTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataBingAudienceEstimationTaskPostRequestInfo[]&gt;**](KeywordsDataBingAudienceEstimationTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataBingAudienceEstimationTaskPostResponseInfo**](KeywordsDataBingAudienceEstimationTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingAudienceEstimationTasksReady"></a>
# **bingAudienceEstimationTasksReady**
> KeywordsDataBingAudienceEstimationTasksReadyResponseInfo bingAudienceEstimationTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.bingAudienceEstimationTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingAudienceEstimationTasksReadyResponseInfo**](KeywordsDataBingAudienceEstimationTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingAudienceEstimationTaskGet"></a>
# **bingAudienceEstimationTaskGet**
> KeywordsDataBingAudienceEstimationTaskGetResponseInfo bingAudienceEstimationTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.bingAudienceEstimationTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingAudienceEstimationTaskGetResponseInfo**](KeywordsDataBingAudienceEstimationTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingAudienceEstimationLive"></a>
# **bingAudienceEstimationLive**
> KeywordsDataBingAudienceEstimationLiveResponseInfo bingAudienceEstimationLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataBingAudienceEstimationLiveRequestInfo();
   task.location_coordinate = "29.6821525,-82.4098881,100";
   task.age = [
       "twenty_five_to_thirty_four",
       "eighteen_to_twenty_four",
       "unknown",
   ];
   task.bid = 1;
   task.daily_budget = 24;
   task.gender = [
       "male",
   ];
   task.industry = [
       "806303407",
       "806301758",
   ];
   task.job_function = [
       "806298607",
   ];
 let response = await api.bingAudienceEstimationLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataBingAudienceEstimationLiveRequestInfo[]&gt;**](KeywordsDataBingAudienceEstimationLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataBingAudienceEstimationLiveResponseInfo**](KeywordsDataBingAudienceEstimationLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingKeywordsForSiteTaskPost"></a>
# **bingKeywordsForSiteTaskPost**
> KeywordsDataBingKeywordsForSiteTaskPostResponseInfo bingKeywordsForSiteTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataBingKeywordsForSiteTaskPostRequestInfo();
   task.target = "dataforseo.com";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.bingKeywordsForSiteTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataBingKeywordsForSiteTaskPostRequestInfo[]&gt;**](KeywordsDataBingKeywordsForSiteTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataBingKeywordsForSiteTaskPostResponseInfo**](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingKeywordsForSiteTasksReady"></a>
# **bingKeywordsForSiteTasksReady**
> KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo bingKeywordsForSiteTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.bingKeywordsForSiteTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo**](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingKeywordsForSiteTaskGet"></a>
# **bingKeywordsForSiteTaskGet**
> KeywordsDataBingKeywordsForSiteTaskGetResponseInfo bingKeywordsForSiteTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.bingKeywordsForSiteTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingKeywordsForSiteTaskGetResponseInfo**](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingKeywordsForSiteLive"></a>
# **bingKeywordsForSiteLive**
> KeywordsDataBingKeywordsForSiteLiveResponseInfo bingKeywordsForSiteLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataBingKeywordsForSiteLiveRequestInfo();
   task.target = "dataforseo.com";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.bingKeywordsForSiteLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataBingKeywordsForSiteLiveRequestInfo[]&gt;**](KeywordsDataBingKeywordsForSiteLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataBingKeywordsForSiteLiveResponseInfo**](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingKeywordsForKeywordsTaskPost"></a>
# **bingKeywordsForKeywordsTaskPost**
> KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo bingKeywordsForKeywordsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo();
   task.keywords = [
       "average page rpm adsense",
       "adsense blank ads how long",
       "leads and prospects",
   ];
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.bingKeywordsForKeywordsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo[]&gt;**](KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo**](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingKeywordsForKeywordsTasksReady"></a>
# **bingKeywordsForKeywordsTasksReady**
> KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo bingKeywordsForKeywordsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.bingKeywordsForKeywordsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo**](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingKeywordsForKeywordsTaskGet"></a>
# **bingKeywordsForKeywordsTaskGet**
> KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo bingKeywordsForKeywordsTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.bingKeywordsForKeywordsTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo**](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingKeywordsForKeywordsLive"></a>
# **bingKeywordsForKeywordsLive**
> KeywordsDataBingKeywordsForKeywordsLiveResponseInfo bingKeywordsForKeywordsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataBingKeywordsForKeywordsLiveRequestInfo();
   task.keywords = [
       "average page rpm adsense",
       "adsense blank ads how long",
       "leads and prospects",
   ];
   task.location_name = "United States";
   task.language_name = "English";
 let response = await api.bingKeywordsForKeywordsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataBingKeywordsForKeywordsLiveRequestInfo[]&gt;**](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataBingKeywordsForKeywordsLiveResponseInfo**](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="keywordsDataBingKeywordPerformanceLocationsAndLanguages"></a>
# **keywordsDataBingKeywordPerformanceLocationsAndLanguages**
> KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo keywordsDataBingKeywordPerformanceLocationsAndLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.keywordsDataBingKeywordPerformanceLocationsAndLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo**](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingKeywordPerformanceTaskPost"></a>
# **bingKeywordPerformanceTaskPost**
> KeywordsDataBingKeywordPerformanceTaskPostResponseInfo bingKeywordPerformanceTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataBingKeywordPerformanceTaskPostRequestInfo();
   task.keywords = [
       "dataforseo",
       "seo",
       "ranking",
   ];
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.bingKeywordPerformanceTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataBingKeywordPerformanceTaskPostRequestInfo[]&gt;**](KeywordsDataBingKeywordPerformanceTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataBingKeywordPerformanceTaskPostResponseInfo**](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingKeywordPerformanceTasksReady"></a>
# **bingKeywordPerformanceTasksReady**
> KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo bingKeywordPerformanceTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.bingKeywordPerformanceTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo**](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingKeywordPerformanceTaskGet"></a>
# **bingKeywordPerformanceTaskGet**
> KeywordsDataBingKeywordPerformanceTaskGetResponseInfo bingKeywordPerformanceTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.bingKeywordPerformanceTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingKeywordPerformanceTaskGetResponseInfo**](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingKeywordPerformanceLive"></a>
# **bingKeywordPerformanceLive**
> KeywordsDataBingKeywordPerformanceLiveResponseInfo bingKeywordPerformanceLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataBingKeywordPerformanceLiveRequestInfo();
   task.keywords = [
       "dataforseo",
       "seo",
       "ranking",
   ];
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.bingKeywordPerformanceLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataBingKeywordPerformanceLiveRequestInfo[]&gt;**](KeywordsDataBingKeywordPerformanceLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataBingKeywordPerformanceLiveResponseInfo**](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="keywordsDataBingSearchVolumeHistoryLocationsAndLanguages"></a>
# **keywordsDataBingSearchVolumeHistoryLocationsAndLanguages**
> KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo keywordsDataBingSearchVolumeHistoryLocationsAndLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.keywordsDataBingSearchVolumeHistoryLocationsAndLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo**](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingSearchVolumeHistoryTaskPost"></a>
# **bingSearchVolumeHistoryTaskPost**
> KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo bingSearchVolumeHistoryTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo();
   task.keywords = [
       "10 minute timer",
   ];
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.bingSearchVolumeHistoryTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo[]&gt;**](KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo**](KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingSearchVolumeHistoryTasksReady"></a>
# **bingSearchVolumeHistoryTasksReady**
> KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo bingSearchVolumeHistoryTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.bingSearchVolumeHistoryTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo**](KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingSearchVolumeHistoryTaskGet"></a>
# **bingSearchVolumeHistoryTaskGet**
> KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo bingSearchVolumeHistoryTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.bingSearchVolumeHistoryTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo**](KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingSearchVolumeHistoryLive"></a>
# **bingSearchVolumeHistoryLive**
> KeywordsDataBingSearchVolumeHistoryLiveResponseInfo bingSearchVolumeHistoryLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataBingSearchVolumeHistoryLiveRequestInfo();
   task.keywords = [
       "10 minute timer",
   ];
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.bingSearchVolumeHistoryLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataBingSearchVolumeHistoryLiveRequestInfo[]&gt;**](KeywordsDataBingSearchVolumeHistoryLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataBingSearchVolumeHistoryLiveResponseInfo**](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="keywordsDataClickstreamDataLocationsAndLanguages"></a>
# **keywordsDataClickstreamDataLocationsAndLanguages**
> KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo keywordsDataClickstreamDataLocationsAndLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let response = await api.keywordsDataClickstreamDataLocationsAndLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo**](KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="clickstreamDataDataforseoSearchVolumeLive"></a>
# **clickstreamDataDataforseoSearchVolumeLive**
> KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo clickstreamDataDataforseoSearchVolumeLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo();
   task.keywords = [
       "you tube",
       "youtube",
       "youtub",
   ];
   task.location_code = 2840;
   task.language_code = "en";
   task.tag = "test-tag";
 let response = await api.clickstreamDataDataforseoSearchVolumeLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo[]&gt;**](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo**](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="clickstreamDataGlobalSearchVolumeLive"></a>
# **clickstreamDataGlobalSearchVolumeLive**
> KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo clickstreamDataGlobalSearchVolumeLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo();
   task.keywords = [
       "you tube",
       "youtube",
       "youtub",
   ];
   task.tag = "test-tag";
 let response = await api.clickstreamDataGlobalSearchVolumeLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo[]&gt;**](KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo**](KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="clickstreamDataBulkSearchVolumeLive"></a>
# **clickstreamDataBulkSearchVolumeLive**
> KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo clickstreamDataBulkSearchVolumeLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

 let task = new KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo();
   task.keywords = [
       "you tube",
       "youtube",
       "youtub",
   ];
   task.location_code = 2840;
   task.tag = "test-tag";
 let response = await api.clickstreamDataBulkSearchVolumeLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo[]&gt;**](KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo[].md)|  | [optional] |



### Return type

[**KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo**](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |