# OnPageApi

All URIs are relative to *https://api.dataforseo.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**onPageIdList**](OnPageApi.md#onPageIdList) | **POST**  /v3/on_page/id_list  |
[**onPageErrors**](OnPageApi.md#onPageErrors) | **POST**  /v3/on_page/errors  |
[**forceStop**](OnPageApi.md#forceStop) | **POST**  /v3/on_page/force_stop  |
[**onPageAvailableFilters**](OnPageApi.md#onPageAvailableFilters) | **GET**  /v3/on_page/available_filters  |
[**taskPost**](OnPageApi.md#taskPost) | **POST**  /v3/on_page/task_post  |
[**onPageTasksReady**](OnPageApi.md#onPageTasksReady) | **GET**  /v3/on_page/tasks_ready  |
[**summary**](OnPageApi.md#summary) | **GET**  /v3/on_page/summary/{id}  |
[**pages**](OnPageApi.md#pages) | **POST**  /v3/on_page/pages  |
[**pagesByResource**](OnPageApi.md#pagesByResource) | **POST**  /v3/on_page/pages_by_resource  |
[**resources**](OnPageApi.md#resources) | **POST**  /v3/on_page/resources  |
[**duplicateTags**](OnPageApi.md#duplicateTags) | **POST**  /v3/on_page/duplicate_tags  |
[**duplicateContent**](OnPageApi.md#duplicateContent) | **POST**  /v3/on_page/duplicate_content  |
[**links**](OnPageApi.md#links) | **POST**  /v3/on_page/links  |
[**redirectChains**](OnPageApi.md#redirectChains) | **POST**  /v3/on_page/redirect_chains  |
[**nonIndexable**](OnPageApi.md#nonIndexable) | **POST**  /v3/on_page/non_indexable  |
[**waterfall**](OnPageApi.md#waterfall) | **POST**  /v3/on_page/waterfall  |
[**keywordDensity**](OnPageApi.md#keywordDensity) | **POST**  /v3/on_page/keyword_density  |
[**microdata**](OnPageApi.md#microdata) | **POST**  /v3/on_page/microdata  |
[**rawHtml**](OnPageApi.md#rawHtml) | **POST**  /v3/on_page/raw_html  |
[**pageScreenshot**](OnPageApi.md#pageScreenshot) | **POST**  /v3/on_page/page_screenshot  |
[**contentParsing**](OnPageApi.md#contentParsing) | **POST**  /v3/on_page/content_parsing  |
[**contentParsingLive**](OnPageApi.md#contentParsingLive) | **POST**  /v3/on_page/content_parsing/live  |
[**instantPages**](OnPageApi.md#instantPages) | **POST**  /v3/on_page/instant_pages  |
[**onPageLighthouseLanguages**](OnPageApi.md#onPageLighthouseLanguages) | **GET**  /v3/on_page/lighthouse/languages  |
[**lighthouseAudits**](OnPageApi.md#lighthouseAudits) | **GET**  /v3/on_page/lighthouse/audits  |
[**lighthouseVersions**](OnPageApi.md#lighthouseVersions) | **GET**  /v3/on_page/lighthouse/versions  |
[**lighthouseTaskPost**](OnPageApi.md#lighthouseTaskPost) | **POST**  /v3/on_page/lighthouse/task_post  |
[**lighthouseTasksReady**](OnPageApi.md#lighthouseTasksReady) | **GET**  /v3/on_page/lighthouse/tasks_ready  |
[**lighthouseTaskGetJson**](OnPageApi.md#lighthouseTaskGetJson) | **GET**  /v3/on_page/lighthouse/task_get/json/{id}  |
[**lighthouseLiveJson**](OnPageApi.md#lighthouseLiveJson) | **POST**  /v3/on_page/lighthouse/live/json  |

<a id="onPageIdList"></a>
# **onPageIdList**
> OnPageIdListResponseInfo onPageIdList()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageIdListRequestInfo();
   task.datetime_from = "2025-07-14 10:26:50 +00:00";
   task.datetime_to = "2025-09-14 10:26:50 +00:00";
   task.limit = 100;
   task.offset = 0;
   task.sort = "desc";
 let response = await api.onPageIdList([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageIdListRequestInfo[]&gt;**](OnPageIdListRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageIdListResponseInfo**](OnPageIdListResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="onPageErrors"></a>
# **onPageErrors**
> OnPageErrorsResponseInfo onPageErrors()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageErrorsRequestInfo();
   task.limit = 10;
   task.offset = 0;
   task.filtered_function = "pingback_url";
 let response = await api.onPageErrors([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageErrorsRequestInfo[]&gt;**](OnPageErrorsRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageErrorsResponseInfo**](OnPageErrorsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="forceStop"></a>
# **forceStop**
> OnPageForceStopResponseInfo forceStop()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageForceStopRequestInfo();
   task.id = "08121600-1535-0216-0000-37b4c7a34453";
 let response = await api.forceStop([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageForceStopRequestInfo[]&gt;**](OnPageForceStopRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageForceStopResponseInfo**](OnPageForceStopResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="onPageAvailableFilters"></a>
# **onPageAvailableFilters**
> OnPageAvailableFiltersResponseInfo onPageAvailableFilters()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let response = await api.onPageAvailableFilters();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**OnPageAvailableFiltersResponseInfo**](OnPageAvailableFiltersResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="taskPost"></a>
# **taskPost**
> OnPageTaskPostResponseInfo taskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageTaskPostRequestInfo();
   task.target = "dataforseo.com";
   task.max_crawl_pages = 10;
   task.load_resources = true;
   task.enable_javascript = true;
   task.custom_js = "meta = {}; meta.url = document.URL; meta;";
   task.tag = "some_string_123";
   task.pingback_url = "https://your-server.com/pingscript?id=$id&tag=$tag";
 let response = await api.taskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageTaskPostRequestInfo[]&gt;**](OnPageTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageTaskPostResponseInfo**](OnPageTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="onPageTasksReady"></a>
# **onPageTasksReady**
> OnPageTasksReadyResponseInfo onPageTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let response = await api.onPageTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**OnPageTasksReadyResponseInfo**](OnPageTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="summary"></a>
# **summary**
> OnPageSummaryResponseInfo summary()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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
 let response = await api.summary(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**OnPageSummaryResponseInfo**](OnPageSummaryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="pages"></a>
# **pages**
> OnPagePagesResponseInfo pages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPagePagesRequestInfo();
   task.id = "07281559-0695-0216-0000-c269be8b7592";
   task.limit = 10;
 let response = await api.pages([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPagePagesRequestInfo[]&gt;**](OnPagePagesRequestInfo[].md)|  | [optional] |



### Return type

[**OnPagePagesResponseInfo**](OnPagePagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="pagesByResource"></a>
# **pagesByResource**
> OnPagePagesByResourceResponseInfo pagesByResource()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPagePagesByResourceRequestInfo();
   task.id = "02241700-1535-0216-0000-034137259bc1";
   task.url = "https://www.etsy.com/about/jobs.workco2018.js?";
 let response = await api.pagesByResource([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPagePagesByResourceRequestInfo[]&gt;**](OnPagePagesByResourceRequestInfo[].md)|  | [optional] |



### Return type

[**OnPagePagesByResourceResponseInfo**](OnPagePagesByResourceResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="resources"></a>
# **resources**
> OnPageResourcesResponseInfo resources()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageResourcesRequestInfo();
   task.id = "07281559-0695-0216-0000-c269be8b7592";
   task.limit = 10;
 let response = await api.resources([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageResourcesRequestInfo[]&gt;**](OnPageResourcesRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageResourcesResponseInfo**](OnPageResourcesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="duplicateTags"></a>
# **duplicateTags**
> OnPageDuplicateTagsResponseInfo duplicateTags()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageDuplicateTagsRequestInfo();
   task.id = "07281559-0695-0216-0000-c269be8b7592";
   task.type = "duplicate_description";
   task.limit = 10;
 let response = await api.duplicateTags([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageDuplicateTagsRequestInfo[]&gt;**](OnPageDuplicateTagsRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageDuplicateTagsResponseInfo**](OnPageDuplicateTagsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="duplicateContent"></a>
# **duplicateContent**
> OnPageDuplicateContentResponseInfo duplicateContent()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageDuplicateContentRequestInfo();
   task.id = "07281559-0695-0216-0000-c269be8b7592";
   task.url = "https://www.etsy.com/";
 let response = await api.duplicateContent([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageDuplicateContentRequestInfo[]&gt;**](OnPageDuplicateContentRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageDuplicateContentResponseInfo**](OnPageDuplicateContentResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="links"></a>
# **links**
> OnPageLinksResponseInfo links()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageLinksRequestInfo();
   task.id = "07281559-0695-0216-0000-c269be8b7592";
   task.page_from = "/apis/google-trends-api";
   task.limit = 10;
 let response = await api.links([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageLinksRequestInfo[]&gt;**](OnPageLinksRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageLinksResponseInfo**](OnPageLinksResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="redirectChains"></a>
# **redirectChains**
> OnPageRedirectChainsResponseInfo redirectChains()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageRedirectChainsRequestInfo();
   task.id = "03051327-4536-0216-1000-3b458a2cfcca";
   task.url = "https://test_rdr.dataforseo.com/a/";
 let response = await api.redirectChains([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageRedirectChainsRequestInfo[]&gt;**](OnPageRedirectChainsRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageRedirectChainsResponseInfo**](OnPageRedirectChainsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="nonIndexable"></a>
# **nonIndexable**
> OnPageNonIndexableResponseInfo nonIndexable()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageNonIndexableRequestInfo();
   task.id = "07281559-0695-0216-0000-c269be8b7592";
   task.limit = 10;
 let response = await api.nonIndexable([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageNonIndexableRequestInfo[]&gt;**](OnPageNonIndexableRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageNonIndexableResponseInfo**](OnPageNonIndexableResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="waterfall"></a>
# **waterfall**
> OnPageWaterfallResponseInfo waterfall()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageWaterfallRequestInfo();
   task.id = "08101204-0696-0216-0000-644a7b21a48a";
   task.url = "https://dataforseo.com/tag/broken-links";
 let response = await api.waterfall([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageWaterfallRequestInfo[]&gt;**](OnPageWaterfallRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageWaterfallResponseInfo**](OnPageWaterfallResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="keywordDensity"></a>
# **keywordDensity**
> OnPageKeywordDensityResponseInfo keywordDensity()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageKeywordDensityRequestInfo();
   task.id = "09101923-1535-0216-0000-2389a8854b70";
   task.keyword_length = 2;
   task.url = "https://dataforseo.com/";
 let response = await api.keywordDensity([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageKeywordDensityRequestInfo[]&gt;**](OnPageKeywordDensityRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageKeywordDensityResponseInfo**](OnPageKeywordDensityResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="microdata"></a>
# **microdata**
> OnPageMicrodataResponseInfo microdata()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageMicrodataRequestInfo();
   task.id = "02241700-1535-0216-0000-034137259bc1";
   task.url = "https://dataforseo.com/apis";
 let response = await api.microdata([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageMicrodataRequestInfo[]&gt;**](OnPageMicrodataRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageMicrodataResponseInfo**](OnPageMicrodataResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="rawHtml"></a>
# **rawHtml**
> OnPageRawHtmlResponseInfo rawHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageRawHtmlRequestInfo();
   task.id = "07281559-0695-0216-0000-c269be8b7592";
   task.url = "https://dataforseo.com/apis";
 let response = await api.rawHtml([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageRawHtmlRequestInfo[]&gt;**](OnPageRawHtmlRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageRawHtmlResponseInfo**](OnPageRawHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="pageScreenshot"></a>
# **pageScreenshot**
> OnPagePageScreenshotResponseInfo pageScreenshot()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPagePageScreenshotRequestInfo();
   task.url = "https://dataforseo.com/apis";
 let response = await api.pageScreenshot([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPagePageScreenshotRequestInfo[]&gt;**](OnPagePageScreenshotRequestInfo[].md)|  | [optional] |



### Return type

[**OnPagePageScreenshotResponseInfo**](OnPagePageScreenshotResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="contentParsing"></a>
# **contentParsing**
> OnPageContentParsingResponseInfo contentParsing()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageContentParsingRequestInfo();
   task.url = "https://dataforseo.com/blog/a-versatile-alternative-to-google-trends-exploring-the-power-of-dataforseo-trends-api";
   task.id = "11161551-1535-0216-0000-500b3f307f92";
 let response = await api.contentParsing([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageContentParsingRequestInfo[]&gt;**](OnPageContentParsingRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageContentParsingResponseInfo**](OnPageContentParsingResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="contentParsingLive"></a>
# **contentParsingLive**
> OnPageContentParsingLiveResponseInfo contentParsingLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageContentParsingLiveRequestInfo();
   task.url = "https://dataforseo.com/blog/a-versatile-alternative-to-google-trends-exploring-the-power-of-dataforseo-trends-api";
 let response = await api.contentParsingLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageContentParsingLiveRequestInfo[]&gt;**](OnPageContentParsingLiveRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageContentParsingLiveResponseInfo**](OnPageContentParsingLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="instantPages"></a>
# **instantPages**
> OnPageInstantPagesResponseInfo instantPages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageInstantPagesRequestInfo();
   task.url = "https://dataforseo.com/blog";
   task.enable_javascript = true;
   task.custom_js = "meta = {}; meta.url = document.URL; meta;";
 let response = await api.instantPages([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageInstantPagesRequestInfo[]&gt;**](OnPageInstantPagesRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageInstantPagesResponseInfo**](OnPageInstantPagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="onPageLighthouseLanguages"></a>
# **onPageLighthouseLanguages**
> OnPageLighthouseLanguagesResponseInfo onPageLighthouseLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let response = await api.onPageLighthouseLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**OnPageLighthouseLanguagesResponseInfo**](OnPageLighthouseLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="lighthouseAudits"></a>
# **lighthouseAudits**
> OnPageLighthouseAuditsResponseInfo lighthouseAudits()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let response = await api.lighthouseAudits();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**OnPageLighthouseAuditsResponseInfo**](OnPageLighthouseAuditsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="lighthouseVersions"></a>
# **lighthouseVersions**
> OnPageLighthouseVersionsResponseInfo lighthouseVersions()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let response = await api.lighthouseVersions();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**OnPageLighthouseVersionsResponseInfo**](OnPageLighthouseVersionsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="lighthouseTaskPost"></a>
# **lighthouseTaskPost**
> OnPageLighthouseTaskPostResponseInfo lighthouseTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageLighthouseTaskPostRequestInfo();
   task.url = "https://dataforseo.com";
   task.for_mobile = true;
   task.tag = "some_string_123";
   task.pingback_url = "https://your-server.com/pingscript?id=$id&tag=$tag";
 let response = await api.lighthouseTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageLighthouseTaskPostRequestInfo[]&gt;**](OnPageLighthouseTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageLighthouseTaskPostResponseInfo**](OnPageLighthouseTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="lighthouseTasksReady"></a>
# **lighthouseTasksReady**
> OnPageLighthouseTasksReadyResponseInfo lighthouseTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let response = await api.lighthouseTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**OnPageLighthouseTasksReadyResponseInfo**](OnPageLighthouseTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="lighthouseTaskGetJson"></a>
# **lighthouseTaskGetJson**
> OnPageLighthouseTaskGetJsonResponseInfo lighthouseTaskGetJson()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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
 let response = await api.lighthouseTaskGetJson(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**OnPageLighthouseTaskGetJsonResponseInfo**](OnPageLighthouseTaskGetJsonResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="lighthouseLiveJson"></a>
# **lighthouseLiveJson**
> OnPageLighthouseLiveJsonResponseInfo lighthouseLiveJson()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new OnPageApi("https://api.dataforseo.com", {
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

 let task = new OnPageLighthouseLiveJsonRequestInfo();
   task.url = "https://dataforseo.com";
   task.for_mobile = true;
   task.tag = "some_string_123";
 let response = await api.lighthouseLiveJson([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;OnPageLighthouseLiveJsonRequestInfo[]&gt;**](OnPageLighthouseLiveJsonRequestInfo[].md)|  | [optional] |



### Return type

[**OnPageLighthouseLiveJsonResponseInfo**](OnPageLighthouseLiveJsonResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |