# BacklinksApi

All URIs are relative to *https://api.dataforseo.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**backlinksIdList**](BacklinksApi.md#backlinksIdList) | **POST**  /v3/backlinks/id_list  |
[**backlinksErrors**](BacklinksApi.md#backlinksErrors) | **POST**  /v3/backlinks/errors  |
[**backlinksAvailableFilters**](BacklinksApi.md#backlinksAvailableFilters) | **GET**  /v3/backlinks/available_filters  |
[**index**](BacklinksApi.md#index) | **GET**  /v3/backlinks/index  |
[**summaryLive**](BacklinksApi.md#summaryLive) | **POST**  /v3/backlinks/summary/live  |
[**historyLive**](BacklinksApi.md#historyLive) | **POST**  /v3/backlinks/history/live  |
[**backlinksLive**](BacklinksApi.md#backlinksLive) | **POST**  /v3/backlinks/backlinks/live  |
[**anchorsLive**](BacklinksApi.md#anchorsLive) | **POST**  /v3/backlinks/anchors/live  |
[**domainPagesLive**](BacklinksApi.md#domainPagesLive) | **POST**  /v3/backlinks/domain_pages/live  |
[**domainPagesSummaryLive**](BacklinksApi.md#domainPagesSummaryLive) | **POST**  /v3/backlinks/domain_pages_summary/live  |
[**referringDomainsLive**](BacklinksApi.md#referringDomainsLive) | **POST**  /v3/backlinks/referring_domains/live  |
[**referringNetworksLive**](BacklinksApi.md#referringNetworksLive) | **POST**  /v3/backlinks/referring_networks/live  |
[**competitorsLive**](BacklinksApi.md#competitorsLive) | **POST**  /v3/backlinks/competitors/live  |
[**domainIntersectionLive**](BacklinksApi.md#domainIntersectionLive) | **POST**  /v3/backlinks/domain_intersection/live  |
[**pageIntersectionLive**](BacklinksApi.md#pageIntersectionLive) | **POST**  /v3/backlinks/page_intersection/live  |
[**timeseriesSummaryLive**](BacklinksApi.md#timeseriesSummaryLive) | **POST**  /v3/backlinks/timeseries_summary/live  |
[**timeseriesNewLostSummaryLive**](BacklinksApi.md#timeseriesNewLostSummaryLive) | **POST**  /v3/backlinks/timeseries_new_lost_summary/live  |
[**bulkRanksLive**](BacklinksApi.md#bulkRanksLive) | **POST**  /v3/backlinks/bulk_ranks/live  |
[**bulkBacklinksLive**](BacklinksApi.md#bulkBacklinksLive) | **POST**  /v3/backlinks/bulk_backlinks/live  |
[**bulkSpamScoreLive**](BacklinksApi.md#bulkSpamScoreLive) | **POST**  /v3/backlinks/bulk_spam_score/live  |
[**bulkReferringDomainsLive**](BacklinksApi.md#bulkReferringDomainsLive) | **POST**  /v3/backlinks/bulk_referring_domains/live  |
[**bulkNewLostBacklinksLive**](BacklinksApi.md#bulkNewLostBacklinksLive) | **POST**  /v3/backlinks/bulk_new_lost_backlinks/live  |
[**bulkNewLostReferringDomainsLive**](BacklinksApi.md#bulkNewLostReferringDomainsLive) | **POST**  /v3/backlinks/bulk_new_lost_referring_domains/live  |
[**bulkPagesSummaryLive**](BacklinksApi.md#bulkPagesSummaryLive) | **POST**  /v3/backlinks/bulk_pages_summary/live  |

<a id="backlinksIdList"></a>
# **backlinksIdList**
> BacklinksIdListResponseInfo backlinksIdList()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksIdListRequestInfo();
   task.datetime_from = "2025-07-14 10:26:34 +00:00";
   task.datetime_to = "2025-09-14 10:26:34 +00:00";
   task.limit = 100;
   task.offset = 0;
   task.sort = "desc";
 let response = await api.backlinksIdList([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksIdListRequestInfo[]&gt;**](BacklinksIdListRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksIdListResponseInfo**](BacklinksIdListResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="backlinksErrors"></a>
# **backlinksErrors**
> BacklinksErrorsResponseInfo backlinksErrors()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksErrorsRequestInfo();
   task.limit = 10;
   task.offset = 0;
   task.filtered_function = "backlinks/content_duplicates";
 let response = await api.backlinksErrors([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksErrorsRequestInfo[]&gt;**](BacklinksErrorsRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksErrorsResponseInfo**](BacklinksErrorsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="backlinksAvailableFilters"></a>
# **backlinksAvailableFilters**
> BacklinksAvailableFiltersResponseInfo backlinksAvailableFilters()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.backlinksAvailableFilters();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BacklinksAvailableFiltersResponseInfo**](BacklinksAvailableFiltersResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="index"></a>
# **index**
> BacklinksIndexResponseInfo index()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.index();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BacklinksIndexResponseInfo**](BacklinksIndexResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="summaryLive"></a>
# **summaryLive**
> BacklinksSummaryLiveResponseInfo summaryLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksSummaryLiveRequestInfo();
   task.target = "explodingtopics.com";
   task.include_subdomains = true;
   task.internal_list_limit = 10;
   task.backlinks_status_type = "all";
 let response = await api.summaryLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksSummaryLiveRequestInfo[]&gt;**](BacklinksSummaryLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksSummaryLiveResponseInfo**](BacklinksSummaryLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="historyLive"></a>
# **historyLive**
> BacklinksHistoryLiveResponseInfo historyLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksHistoryLiveRequestInfo();
   task.target = "cnn.com";
   task.date_from = "2025-07-14";
   task.date_to = "2025-09-14";
 let response = await api.historyLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksHistoryLiveRequestInfo[]&gt;**](BacklinksHistoryLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksHistoryLiveResponseInfo**](BacklinksHistoryLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="backlinksLive"></a>
# **backlinksLive**
> BacklinksBacklinksLiveResponseInfo backlinksLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksBacklinksLiveRequestInfo();
   task.target = "forbes.com";
   task.mode = "as_is";
   task.limit = 5;
 let response = await api.backlinksLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksBacklinksLiveRequestInfo[]&gt;**](BacklinksBacklinksLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksBacklinksLiveResponseInfo**](BacklinksBacklinksLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="anchorsLive"></a>
# **anchorsLive**
> BacklinksAnchorsLiveResponseInfo anchorsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksAnchorsLiveRequestInfo();
   task.target = "forbes.com";
   task.limit = 4;
 let response = await api.anchorsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksAnchorsLiveRequestInfo[]&gt;**](BacklinksAnchorsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksAnchorsLiveResponseInfo**](BacklinksAnchorsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="domainPagesLive"></a>
# **domainPagesLive**
> BacklinksDomainPagesLiveResponseInfo domainPagesLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksDomainPagesLiveRequestInfo();
   task.target = "forbes.com";
   task.limit = 5;
 let response = await api.domainPagesLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksDomainPagesLiveRequestInfo[]&gt;**](BacklinksDomainPagesLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksDomainPagesLiveResponseInfo**](BacklinksDomainPagesLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="domainPagesSummaryLive"></a>
# **domainPagesSummaryLive**
> BacklinksDomainPagesSummaryLiveResponseInfo domainPagesSummaryLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksDomainPagesSummaryLiveRequestInfo();
   task.target = "forbes.com";
   task.limit = 4;
 let response = await api.domainPagesSummaryLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksDomainPagesSummaryLiveRequestInfo[]&gt;**](BacklinksDomainPagesSummaryLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksDomainPagesSummaryLiveResponseInfo**](BacklinksDomainPagesSummaryLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="referringDomainsLive"></a>
# **referringDomainsLive**
> BacklinksReferringDomainsLiveResponseInfo referringDomainsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksReferringDomainsLiveRequestInfo();
   task.target = "backlinko.com";
   task.limit = 5;
   task.exclude_internal_backlinks = true;
 let response = await api.referringDomainsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksReferringDomainsLiveRequestInfo[]&gt;**](BacklinksReferringDomainsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksReferringDomainsLiveResponseInfo**](BacklinksReferringDomainsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="referringNetworksLive"></a>
# **referringNetworksLive**
> BacklinksReferringNetworksLiveResponseInfo referringNetworksLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksReferringNetworksLiveRequestInfo();
   task.target = "backlinko.com";
   task.network_address_type = "subnet";
   task.limit = 5;
   task.exclude_internal_backlinks = true;
 let response = await api.referringNetworksLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksReferringNetworksLiveRequestInfo[]&gt;**](BacklinksReferringNetworksLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksReferringNetworksLiveResponseInfo**](BacklinksReferringNetworksLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="competitorsLive"></a>
# **competitorsLive**
> BacklinksCompetitorsLiveResponseInfo competitorsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksCompetitorsLiveRequestInfo();
   task.target = "dataforseo.com";
   task.limit = 5;
 let response = await api.competitorsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksCompetitorsLiveRequestInfo[]&gt;**](BacklinksCompetitorsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksCompetitorsLiveResponseInfo**](BacklinksCompetitorsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="domainIntersectionLive"></a>
# **domainIntersectionLive**
> BacklinksDomainIntersectionLiveResponseInfo domainIntersectionLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksDomainIntersectionLiveRequestInfo();
   task.targets = {
       1: "moz.com",
       2: "ahrefs.com",
   };
   task.exclude_targets = [
       "semrush.com",
   ];
   task.limit = 5;
   task.include_subdomains = false;
   task.exclude_internal_backlinks = true;
 let response = await api.domainIntersectionLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksDomainIntersectionLiveRequestInfo[]&gt;**](BacklinksDomainIntersectionLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksDomainIntersectionLiveResponseInfo**](BacklinksDomainIntersectionLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="pageIntersectionLive"></a>
# **pageIntersectionLive**
> BacklinksPageIntersectionLiveResponseInfo pageIntersectionLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksPageIntersectionLiveRequestInfo();
   task.targets = {
       1: "football.com",
       2: "fifa.com",
   };
   task.exclude_targets = [
       "skysports.com",
   ];
   task.limit = 5;
 let response = await api.pageIntersectionLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksPageIntersectionLiveRequestInfo[]&gt;**](BacklinksPageIntersectionLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksPageIntersectionLiveResponseInfo**](BacklinksPageIntersectionLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="timeseriesSummaryLive"></a>
# **timeseriesSummaryLive**
> BacklinksTimeseriesSummaryLiveResponseInfo timeseriesSummaryLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksTimeseriesSummaryLiveRequestInfo();
   task.target = "dataforseo.com";
   task.date_from = "2025-07-14";
   task.date_to = "2025-09-14";
   task.group_range = "month";
 let response = await api.timeseriesSummaryLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksTimeseriesSummaryLiveRequestInfo[]&gt;**](BacklinksTimeseriesSummaryLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksTimeseriesSummaryLiveResponseInfo**](BacklinksTimeseriesSummaryLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="timeseriesNewLostSummaryLive"></a>
# **timeseriesNewLostSummaryLive**
> BacklinksTimeseriesNewLostSummaryLiveResponseInfo timeseriesNewLostSummaryLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksTimeseriesNewLostSummaryLiveRequestInfo();
   task.target = "dataforseo.com";
   task.date_from = "2025-07-14";
   task.date_to = "2025-09-14";
   task.group_range = "month";
 let response = await api.timeseriesNewLostSummaryLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksTimeseriesNewLostSummaryLiveRequestInfo[]&gt;**](BacklinksTimeseriesNewLostSummaryLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksTimeseriesNewLostSummaryLiveResponseInfo**](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bulkRanksLive"></a>
# **bulkRanksLive**
> BacklinksBulkRanksLiveResponseInfo bulkRanksLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksBulkRanksLiveRequestInfo();
   task.targets = [
       "forbes.com",
       "cnn.com",
       "bbc.com",
       "yelp.com",
       "https://www.apple.com/iphone/",
       "https://ahrefs.com/blog/",
       "ibm.com",
       "https://variety.com/",
       "https://stackoverflow.com/",
       "www.trustpilot.com",
   ];
 let response = await api.bulkRanksLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksBulkRanksLiveRequestInfo[]&gt;**](BacklinksBulkRanksLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksBulkRanksLiveResponseInfo**](BacklinksBulkRanksLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bulkBacklinksLive"></a>
# **bulkBacklinksLive**
> BacklinksBulkBacklinksLiveResponseInfo bulkBacklinksLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksBulkBacklinksLiveRequestInfo();
   task.targets = [
       "forbes.com",
       "cnn.com",
       "bbc.com",
       "yelp.com",
       "https://www.apple.com/iphone/",
       "https://ahrefs.com/blog/",
       "ibm.com",
       "https://variety.com/",
       "https://stackoverflow.com/",
       "www.trustpilot.com",
   ];
 let response = await api.bulkBacklinksLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksBulkBacklinksLiveRequestInfo[]&gt;**](BacklinksBulkBacklinksLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksBulkBacklinksLiveResponseInfo**](BacklinksBulkBacklinksLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bulkSpamScoreLive"></a>
# **bulkSpamScoreLive**
> BacklinksBulkSpamScoreLiveResponseInfo bulkSpamScoreLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksBulkSpamScoreLiveRequestInfo();
   task.targets = [
       "forbes.com",
       "cnn.com",
       "bbc.com",
       "yelp.com",
       "https://www.apple.com/iphone/",
       "https://ahrefs.com/blog/",
       "ibm.com",
       "https://variety.com/",
       "https://stackoverflow.com/",
       "www.trustpilot.com",
   ];
 let response = await api.bulkSpamScoreLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksBulkSpamScoreLiveRequestInfo[]&gt;**](BacklinksBulkSpamScoreLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksBulkSpamScoreLiveResponseInfo**](BacklinksBulkSpamScoreLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bulkReferringDomainsLive"></a>
# **bulkReferringDomainsLive**
> BacklinksBulkReferringDomainsLiveResponseInfo bulkReferringDomainsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksBulkReferringDomainsLiveRequestInfo();
   task.targets = [
       "forbes.com",
       "cnn.com",
       "bbc.com",
       "yelp.com",
       "https://www.apple.com/iphone/",
       "https://ahrefs.com/blog/",
       "ibm.com",
       "https://variety.com/",
       "https://stackoverflow.com/",
       "www.trustpilot.com",
   ];
 let response = await api.bulkReferringDomainsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksBulkReferringDomainsLiveRequestInfo[]&gt;**](BacklinksBulkReferringDomainsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksBulkReferringDomainsLiveResponseInfo**](BacklinksBulkReferringDomainsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bulkNewLostBacklinksLive"></a>
# **bulkNewLostBacklinksLive**
> BacklinksBulkNewLostBacklinksLiveResponseInfo bulkNewLostBacklinksLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksBulkNewLostBacklinksLiveRequestInfo();
   task.targets = [
       "forbes.com",
       "cnn.com",
       "bbc.com",
       "yelp.com",
       "https://www.apple.com/iphone/",
       "https://ahrefs.com/blog/",
       "ibm.com",
       "https://variety.com/",
       "https://stackoverflow.com/",
       "www.trustpilot.com",
   ];
   task.date_from = "2025-07-14";
 let response = await api.bulkNewLostBacklinksLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksBulkNewLostBacklinksLiveRequestInfo[]&gt;**](BacklinksBulkNewLostBacklinksLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksBulkNewLostBacklinksLiveResponseInfo**](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bulkNewLostReferringDomainsLive"></a>
# **bulkNewLostReferringDomainsLive**
> BacklinksBulkNewLostReferringDomainsLiveResponseInfo bulkNewLostReferringDomainsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksBulkNewLostReferringDomainsLiveRequestInfo();
   task.targets = [
       "forbes.com",
       "cnn.com",
       "bbc.com",
       "yelp.com",
       "https://www.apple.com/iphone/",
       "https://ahrefs.com/blog/",
       "ibm.com",
       "https://variety.com/",
       "https://stackoverflow.com/",
       "www.trustpilot.com",
   ];
   task.date_from = "2025-07-14";
 let response = await api.bulkNewLostReferringDomainsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksBulkNewLostReferringDomainsLiveRequestInfo[]&gt;**](BacklinksBulkNewLostReferringDomainsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksBulkNewLostReferringDomainsLiveResponseInfo**](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bulkPagesSummaryLive"></a>
# **bulkPagesSummaryLive**
> BacklinksBulkPagesSummaryLiveResponseInfo bulkPagesSummaryLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BacklinksApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BacklinksBulkPagesSummaryLiveRequestInfo();
   task.targets = [
       "https://dataforseo.com/solutions",
       "https://dataforseo.com/about-us",
   ];
 let response = await api.bulkPagesSummaryLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BacklinksBulkPagesSummaryLiveRequestInfo[]&gt;**](BacklinksBulkPagesSummaryLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BacklinksBulkPagesSummaryLiveResponseInfo**](BacklinksBulkPagesSummaryLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |