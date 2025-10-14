# ContentAnalysisApi

All URIs are relative to *https://api.dataforseo.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**contentAnalysisIdList**](ContentAnalysisApi.md#contentAnalysisIdList) | **POST**  /v3/content_analysis/id_list  |
[**contentAnalysisAvailableFilters**](ContentAnalysisApi.md#contentAnalysisAvailableFilters) | **GET**  /v3/content_analysis/available_filters  |
[**contentAnalysisLocations**](ContentAnalysisApi.md#contentAnalysisLocations) | **GET**  /v3/content_analysis/locations  |
[**contentAnalysisLanguages**](ContentAnalysisApi.md#contentAnalysisLanguages) | **GET**  /v3/content_analysis/languages  |
[**contentAnalysisCategories**](ContentAnalysisApi.md#contentAnalysisCategories) | **GET**  /v3/content_analysis/categories  |
[**searchLive**](ContentAnalysisApi.md#searchLive) | **POST**  /v3/content_analysis/search/live  |
[**contentAnalysisSummaryLive**](ContentAnalysisApi.md#contentAnalysisSummaryLive) | **POST**  /v3/content_analysis/summary/live  |
[**sentimentAnalysisLive**](ContentAnalysisApi.md#sentimentAnalysisLive) | **POST**  /v3/content_analysis/sentiment_analysis/live  |
[**ratingDistributionLive**](ContentAnalysisApi.md#ratingDistributionLive) | **POST**  /v3/content_analysis/rating_distribution/live  |
[**phraseTrendsLive**](ContentAnalysisApi.md#phraseTrendsLive) | **POST**  /v3/content_analysis/phrase_trends/live  |
[**categoryTrendsLive**](ContentAnalysisApi.md#categoryTrendsLive) | **POST**  /v3/content_analysis/category_trends/live  |

<a id="contentAnalysisIdList"></a>
# **contentAnalysisIdList**
> ContentAnalysisIdListResponseInfo contentAnalysisIdList()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

 let task = new ContentAnalysisIdListRequestInfo();
   task.datetime_from = "2025-07-14 10:27:56 +00:00";
   task.datetime_to = "2025-09-14 10:27:56 +00:00";
   task.limit = 100;
   task.offset = 0;
   task.sort = "desc";
 let response = await api.contentAnalysisIdList([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;ContentAnalysisIdListRequestInfo[]&gt;**](ContentAnalysisIdListRequestInfo[].md)|  | [optional] |



### Return type

[**ContentAnalysisIdListResponseInfo**](ContentAnalysisIdListResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="contentAnalysisAvailableFilters"></a>
# **contentAnalysisAvailableFilters**
> ContentAnalysisAvailableFiltersResponseInfo contentAnalysisAvailableFilters()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

 let response = await api.contentAnalysisAvailableFilters();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**ContentAnalysisAvailableFiltersResponseInfo**](ContentAnalysisAvailableFiltersResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="contentAnalysisLocations"></a>
# **contentAnalysisLocations**
> ContentAnalysisLocationsResponseInfo contentAnalysisLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

 let response = await api.contentAnalysisLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**ContentAnalysisLocationsResponseInfo**](ContentAnalysisLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="contentAnalysisLanguages"></a>
# **contentAnalysisLanguages**
> ContentAnalysisLanguagesResponseInfo contentAnalysisLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

 let response = await api.contentAnalysisLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**ContentAnalysisLanguagesResponseInfo**](ContentAnalysisLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="contentAnalysisCategories"></a>
# **contentAnalysisCategories**
> ContentAnalysisCategoriesResponseInfo contentAnalysisCategories()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

 let response = await api.contentAnalysisCategories();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**ContentAnalysisCategoriesResponseInfo**](ContentAnalysisCategoriesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="searchLive"></a>
# **searchLive**
> ContentAnalysisSearchLiveResponseInfo searchLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

 let task = new ContentAnalysisSearchLiveRequestInfo();
   task.keyword = "logitech";
   task.keyword_fields = {
       snippet: "logitech",
   };
   task.page_type = [
       "ecommerce",
       "news",
       "blogs",
       "message-boards",
       "organization",
   ];
   task.search_mode = "as_is";
   task.limit = 10;
 let response = await api.searchLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;ContentAnalysisSearchLiveRequestInfo[]&gt;**](ContentAnalysisSearchLiveRequestInfo[].md)|  | [optional] |



### Return type

[**ContentAnalysisSearchLiveResponseInfo**](ContentAnalysisSearchLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="contentAnalysisSummaryLive"></a>
# **contentAnalysisSummaryLive**
> ContentAnalysisSummaryLiveResponseInfo contentAnalysisSummaryLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

 let task = new ContentAnalysisSummaryLiveRequestInfo();
   task.keyword = "logitech";
   task.page_type = [
       "ecommerce",
       "news",
       "blogs",
       "message-boards",
       "organization",
   ];
   task.internal_list_limit = 8;
   task.positive_connotation_threshold = 0.5;
 let response = await api.contentAnalysisSummaryLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;ContentAnalysisSummaryLiveRequestInfo[]&gt;**](ContentAnalysisSummaryLiveRequestInfo[].md)|  | [optional] |



### Return type

[**ContentAnalysisSummaryLiveResponseInfo**](ContentAnalysisSummaryLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="sentimentAnalysisLive"></a>
# **sentimentAnalysisLive**
> ContentAnalysisSentimentAnalysisLiveResponseInfo sentimentAnalysisLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

 let task = new ContentAnalysisSentimentAnalysisLiveRequestInfo();
   task.keyword = "logitech";
   task.internal_list_limit = 1;
 let response = await api.sentimentAnalysisLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;ContentAnalysisSentimentAnalysisLiveRequestInfo[]&gt;**](ContentAnalysisSentimentAnalysisLiveRequestInfo[].md)|  | [optional] |



### Return type

[**ContentAnalysisSentimentAnalysisLiveResponseInfo**](ContentAnalysisSentimentAnalysisLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="ratingDistributionLive"></a>
# **ratingDistributionLive**
> ContentAnalysisRatingDistributionLiveResponseInfo ratingDistributionLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

 let task = new ContentAnalysisRatingDistributionLiveRequestInfo();
   task.keyword = "logitech";
   task.internal_list_limit = 10;
   task.search_mode = "as_is";
 let response = await api.ratingDistributionLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;ContentAnalysisRatingDistributionLiveRequestInfo[]&gt;**](ContentAnalysisRatingDistributionLiveRequestInfo[].md)|  | [optional] |



### Return type

[**ContentAnalysisRatingDistributionLiveResponseInfo**](ContentAnalysisRatingDistributionLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="phraseTrendsLive"></a>
# **phraseTrendsLive**
> ContentAnalysisPhraseTrendsLiveResponseInfo phraseTrendsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

 let task = new ContentAnalysisPhraseTrendsLiveRequestInfo();
   task.keyword = "logitech";
   task.search_mode = "as_is";
   task.date_from = "2025-07-14";
   task.date_group = "month";
 let response = await api.phraseTrendsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;ContentAnalysisPhraseTrendsLiveRequestInfo[]&gt;**](ContentAnalysisPhraseTrendsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**ContentAnalysisPhraseTrendsLiveResponseInfo**](ContentAnalysisPhraseTrendsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="categoryTrendsLive"></a>
# **categoryTrendsLive**
> ContentAnalysisCategoryTrendsLiveResponseInfo categoryTrendsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

 let task = new ContentAnalysisCategoryTrendsLiveRequestInfo();
   task.category_code = "10994";
   task.search_mode = "as_is";
   task.date_from = "2025-07-14";
   task.date_group = "month";
 let response = await api.categoryTrendsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;ContentAnalysisCategoryTrendsLiveRequestInfo[]&gt;**](ContentAnalysisCategoryTrendsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**ContentAnalysisCategoryTrendsLiveResponseInfo**](ContentAnalysisCategoryTrendsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |