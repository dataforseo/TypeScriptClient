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

 let response = await api.backlinksIdList([
   [
       new BacklinksIdListRequestInfo({
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

 let response = await api.backlinksErrors([
   [
       new BacklinksErrorsRequestInfo({
           limit: 10,
           offset: 0,
           filtered_function: "backlinks/content_duplicates",
       }),
   ]
 ]);
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

 let response = await api.summaryLive([
   [
       new BacklinksSummaryLiveRequestInfo({
           target: "explodingtopics.com",
           internal_list_limit: 10,
           include_subdomains: true,
           backlinks_filters: [
           "dofollow",
           "=",
           true,
       ],
           backlinks_status_type: "all",
       }),
   ]
 ]);
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

 let response = await api.historyLive([
   [
       new BacklinksHistoryLiveRequestInfo({
           target: "cnn.com",
           date_from: ,
           date_to: ,
       }),
   ]
 ]);
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

 let response = await api.backlinksLive([
   [
       new BacklinksBacklinksLiveRequestInfo({
           target: "forbes.com",
           mode: "as_is",
           filters: [
           "dofollow",
           "=",
           true,
       ],
           limit: 5,
       }),
   ]
 ]);
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

 let response = await api.anchorsLive([
   [
       new BacklinksAnchorsLiveRequestInfo({
           target: "forbes.com",
           limit: 4,
           order_by: [
           "backlinks,desc",
       ],
           filters: [
           "anchor",
           "like",
           "%news%",
       ],
       }),
   ]
 ]);
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

 let response = await api.domainPagesLive([
   [
       new BacklinksDomainPagesLiveRequestInfo({
           target: "forbes.com",
           limit: 5,
           filters: [
           [
               "page_summary.backlinks",
               ">",
               5,
           ],
           "and",
           [
               "page",
               "like",
               "%sites%",
           ],
       ],
       }),
   ]
 ]);
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

 let response = await api.domainPagesSummaryLive([
   [
       new BacklinksDomainPagesSummaryLiveRequestInfo({
           target: "forbes.com",
           limit: 4,
           order_by: [
           "backlinks,desc",
       ],
       }),
   ]
 ]);
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

 let response = await api.referringDomainsLive([
   [
       new BacklinksReferringDomainsLiveRequestInfo({
           target: "backlinko.com",
           limit: 5,
           order_by: [
           "rank,desc",
       ],
           exclude_internal_backlinks: true,
           backlinks_filters: [
           "dofollow",
           "=",
           true,
       ],
           filters: [
           "backlinks",
           ">",
           100,
       ],
       }),
   ]
 ]);
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

 let response = await api.referringNetworksLive([
   [
       new BacklinksReferringNetworksLiveRequestInfo({
           target: "backlinko.com",
           network_address_type: "subnet",
           limit: 5,
           order_by: [
           "rank,desc",
       ],
           exclude_internal_backlinks: true,
           backlinks_filters: [
           "dofollow",
           "=",
           true,
       ],
           filters: [
           "backlinks",
           ">",
           100,
       ],
       }),
   ]
 ]);
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

 let response = await api.competitorsLive([
   [
       new BacklinksCompetitorsLiveRequestInfo({
           target: "dataforseo.com",
           filters: [
           "rank",
           ">",
           100,
       ],
           order_by: [
           "rank,desc",
       ],
           limit: 5,
       }),
   ]
 ]);
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

 let response = await api.domainIntersectionLive([
   [
       new BacklinksDomainIntersectionLiveRequestInfo({
           targets: {
           "1": "moz.com",
           "2": "ahrefs.com",
       },
           include_subdomains: false,
           exclude_targets: [
           "semrush.com",
       ],
           limit: 5,
           order_by: [
           "1.backlinks,desc",
       ],
           exclude_internal_backlinks: true,
       }),
   ]
 ]);
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

 let response = await api.pageIntersectionLive([
   [
       new BacklinksPageIntersectionLiveRequestInfo({
           targets: {
           "1": "football.com",
           "2": "fifa.com",
       },
           exclude_targets: [
           "skysports.com",
       ],
           limit: 5,
           order_by: [
           "1.rank,desc",
       ],
           filters: [
           [
               "2.domain_from_rank",
               ">",
               400,
           ],
           "and",
           [
               "1.dofollow",
               "=",
               true,
           ],
       ],
       }),
   ]
 ]);
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

 let response = await api.timeseriesSummaryLive([
   [
       new BacklinksTimeseriesSummaryLiveRequestInfo({
           target: "dataforseo.com",
           date_from: ,
           date_to: ,
           group_range: "month",
       }),
   ]
 ]);
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

 let response = await api.timeseriesNewLostSummaryLive([
   [
       new BacklinksTimeseriesNewLostSummaryLiveRequestInfo({
           target: "dataforseo.com",
           date_from: ,
           date_to: ,
           group_range: "month",
       }),
   ]
 ]);
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

 let response = await api.bulkRanksLive([
   [
       new BacklinksBulkRanksLiveRequestInfo({
           targets: [
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
       ],
       }),
   ]
 ]);
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

 let response = await api.bulkBacklinksLive([
   [
       new BacklinksBulkBacklinksLiveRequestInfo({
           targets: [
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
       ],
       }),
   ]
 ]);
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

 let response = await api.bulkSpamScoreLive([
   [
       new BacklinksBulkSpamScoreLiveRequestInfo({
           targets: [
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
       ],
       }),
   ]
 ]);
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

 let response = await api.bulkReferringDomainsLive([
   [
       new BacklinksBulkReferringDomainsLiveRequestInfo({
           targets: [
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
       ],
       }),
   ]
 ]);
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

 let response = await api.bulkNewLostBacklinksLive([
   [
       new BacklinksBulkNewLostBacklinksLiveRequestInfo({
           targets: [
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
       ],
           date_from: ,
       }),
   ]
 ]);
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

 let response = await api.bulkNewLostReferringDomainsLive([
   [
       new BacklinksBulkNewLostReferringDomainsLiveRequestInfo({
           targets: [
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
       ],
           date_from: ,
       }),
   ]
 ]);
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

 let response = await api.bulkPagesSummaryLive([
   [
       new BacklinksBulkPagesSummaryLiveRequestInfo({
           targets: [
           "https://dataforseo.com/solutions",
           "https://dataforseo.com/about-us",
       ],
       }),
   ]
 ]);
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