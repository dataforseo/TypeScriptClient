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
[**lighthouseLanguages**](OnPageApi.md#lighthouseLanguages) | **GET**  /v3/on_page/lighthouse/languages  |
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

 let response = await api.onPageIdList([
   [
       new OnPageIdListRequestInfo({
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

 let response = await api.onPageErrors([
   [
       new OnPageErrorsRequestInfo({
           limit: 10,
           offset: 0,
           filtered_function: "pingback_url",
       }),
   ]
 ]);
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

 let response = await api.forceStop([
   [
       new OnPageForceStopRequestInfo({
           id: "08121600-1535-0216-0000-37b4c7a34453",
       }),
       new OnPageForceStopRequestInfo({
           id: "08121600-1535-0216-0000-d6a5000b6897",
       }),
   ]
 ]);
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

 let response = await api.taskPost([
   [
       new OnPageTaskPostRequestInfo({
           target: "dataforseo.com",
           max_crawl_pages: 10,
           load_resources: true,
           enable_javascript: true,
           custom_js: "meta = {}; meta.url = document.URL; meta;",
           tag: "some_string_123",
           pingback_url: "https://your-server.com/pingscript?id=$id&tag=$tag",
       }),
   ]
 ]);
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

 let id = ;
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

 let response = await api.pages([
   [
       new OnPagePagesRequestInfo({
           id: "07281559-0695-0216-0000-c269be8b7592",
           filters: [
           [
               "resource_type",
               "=",
               "html",
           ],
           "and",
           [
               "meta.scripts_count",
               ">",
               40,
           ],
       ],
           order_by: [
           "meta.content.plain_text_word_count,desc",
       ],
           limit: 10,
       }),
   ]
 ]);
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

 let response = await api.pagesByResource([
   [
       new OnPagePagesByResourceRequestInfo({
           id: "02241700-1535-0216-0000-034137259bc1",
           url: "https://www.etsy.com/about/jobs.workco2018.js?",
       }),
   ]
 ]);
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

 let response = await api.resources([
   [
       new OnPageResourcesRequestInfo({
           id: "07281559-0695-0216-0000-c269be8b7592",
           filters: [
           [
               "resource_type",
               "=",
               "image",
           ],
           "and",
           [
               "size",
               ">",
               100000,
           ],
       ],
           order_by: [
           "size,desc",
       ],
           limit: 10,
       }),
   ]
 ]);
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

 let response = await api.duplicateTags([
   [
       new OnPageDuplicateTagsRequestInfo({
           id: "07281559-0695-0216-0000-c269be8b7592",
           type: "duplicate_description",
           limit: 10,
       }),
   ]
 ]);
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

 let response = await api.duplicateContent([
   [
       new OnPageDuplicateContentRequestInfo({
           id: "07281559-0695-0216-0000-c269be8b7592",
           url: "https://www.etsy.com/",
       }),
   ]
 ]);
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

 let response = await api.links([
   [
       new OnPageLinksRequestInfo({
           id: "07281559-0695-0216-0000-c269be8b7592",
           page_from: "/apis/google-trends-api",
           filters: [
           [
               "dofollow",
               "=",
               true,
           ],
           "and",
           [
               "direction",
               "=",
               "external",
           ],
       ],
           limit: 10,
       }),
   ]
 ]);
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

 let response = await api.redirectChains([
   [
       new OnPageRedirectChainsRequestInfo({
           id: "03051327-4536-0216-1000-3b458a2cfcca",
           url: "https://test_rdr.dataforseo.com/a/",
       }),
   ]
 ]);
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

 let response = await api.nonIndexable([
   [
       new OnPageNonIndexableRequestInfo({
           id: "07281559-0695-0216-0000-c269be8b7592",
           filters: [
           [
               "reason",
               "=",
               "robots_txt",
           ],
           "and",
           [
               "url",
               "like",
               "%go%",
           ],
       ],
           limit: 10,
       }),
   ]
 ]);
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

 let response = await api.waterfall([
   [
       new OnPageWaterfallRequestInfo({
           id: "08101204-0696-0216-0000-644a7b21a48a",
           url: "https://dataforseo.com/tag/broken-links",
       }),
   ]
 ]);
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

 let response = await api.keywordDensity([
   [
       new OnPageKeywordDensityRequestInfo({
           id: "09101923-1535-0216-0000-2389a8854b70",
           url: "https://dataforseo.com/",
           keyword_length: 2,
           filters: [
           "frequency",
           ">",
           5,
       ],
       }),
   ]
 ]);
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

 let response = await api.microdata([
   [
       new OnPageMicrodataRequestInfo({
           id: "02241700-1535-0216-0000-034137259bc1",
           url: "https://dataforseo.com/apis",
       }),
   ]
 ]);
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

 let response = await api.rawHtml([
   [
       new OnPageRawHtmlRequestInfo({
           id: "07281559-0695-0216-0000-c269be8b7592",
           url: "https://dataforseo.com/apis",
       }),
   ]
 ]);
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

 let response = await api.pageScreenshot([
   [
       new OnPagePageScreenshotRequestInfo({
           url: "https://dataforseo.com/apis",
       }),
   ]
 ]);
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

 let response = await api.contentParsing([
   [
       new OnPageContentParsingRequestInfo({
           url: "https://dataforseo.com/blog/a-versatile-alternative-to-google-trends-exploring-the-power-of-dataforseo-trends-api",
           id: "11161551-1535-0216-0000-500b3f307f92",
       }),
   ]
 ]);
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

 let response = await api.contentParsingLive([
   [
       new OnPageContentParsingLiveRequestInfo({
           url: "https://dataforseo.com/blog/a-versatile-alternative-to-google-trends-exploring-the-power-of-dataforseo-trends-api",
       }),
   ]
 ]);
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

 let response = await api.instantPages([
   [
       new OnPageInstantPagesRequestInfo({
           url: "https://dataforseo.com/blog",
           enable_javascript: true,
           custom_js: "meta = {}; meta.url = document.URL; meta;",
       }),
   ]
 ]);
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

<a id="lighthouseLanguages"></a>
# **lighthouseLanguages**
> OnPageLighthouseLanguagesResponseInfo lighthouseLanguages()


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

 let response = await api.lighthouseLanguages();
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

 let response = await api.lighthouseTaskPost([
   [
       new OnPageLighthouseTaskPostRequestInfo({
           url: "https://dataforseo.com",
           for_mobile: true,
           tag: "some_string_123",
           pingback_url: "https://your-server.com/pingscript?id=$id&tag=$tag",
       }),
   ]
 ]);
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

 let id = ;
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

 let response = await api.lighthouseLiveJson([
   [
       new OnPageLighthouseLiveJsonRequestInfo({
           url: "https://dataforseo.com",
           for_mobile: true,
           tag: "some_string_123",
       }),
   ]
 ]);
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