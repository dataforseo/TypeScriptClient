# DomainAnalyticsApi

All URIs are relative to *https://api.dataforseo.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**domainAnalyticsIdList**](DomainAnalyticsApi.md#domainAnalyticsIdList) | **POST**  /v3/domain_analytics/id_list  |
[**domainAnalyticsErrors**](DomainAnalyticsApi.md#domainAnalyticsErrors) | **POST**  /v3/domain_analytics/errors  |
[**technologiesAvailableFilters**](DomainAnalyticsApi.md#technologiesAvailableFilters) | **GET**  /v3/domain_analytics/technologies/available_filters  |
[**domainAnalyticsTechnologiesLocations**](DomainAnalyticsApi.md#domainAnalyticsTechnologiesLocations) | **GET**  /v3/domain_analytics/technologies/locations  |
[**domainAnalyticsTechnologiesLanguages**](DomainAnalyticsApi.md#domainAnalyticsTechnologiesLanguages) | **GET**  /v3/domain_analytics/technologies/languages  |
[**technologiesTechnologies**](DomainAnalyticsApi.md#technologiesTechnologies) | **GET**  /v3/domain_analytics/technologies/technologies  |
[**technologiesAggregationTechnologiesLive**](DomainAnalyticsApi.md#technologiesAggregationTechnologiesLive) | **POST**  /v3/domain_analytics/technologies/aggregation_technologies/live  |
[**technologiesTechnologiesSummaryLive**](DomainAnalyticsApi.md#technologiesTechnologiesSummaryLive) | **POST**  /v3/domain_analytics/technologies/technologies_summary/live  |
[**technologiesTechnologyStatsLive**](DomainAnalyticsApi.md#technologiesTechnologyStatsLive) | **POST**  /v3/domain_analytics/technologies/technology_stats/live  |
[**technologiesDomainsByTechnologyLive**](DomainAnalyticsApi.md#technologiesDomainsByTechnologyLive) | **POST**  /v3/domain_analytics/technologies/domains_by_technology/live  |
[**technologiesDomainsByHtmlTermsLive**](DomainAnalyticsApi.md#technologiesDomainsByHtmlTermsLive) | **POST**  /v3/domain_analytics/technologies/domains_by_html_terms/live  |
[**technologiesDomainTechnologiesLive**](DomainAnalyticsApi.md#technologiesDomainTechnologiesLive) | **POST**  /v3/domain_analytics/technologies/domain_technologies/live  |
[**whoisAvailableFilters**](DomainAnalyticsApi.md#whoisAvailableFilters) | **GET**  /v3/domain_analytics/whois/available_filters  |
[**whoisOverviewLive**](DomainAnalyticsApi.md#whoisOverviewLive) | **POST**  /v3/domain_analytics/whois/overview/live  |

<a id="domainAnalyticsIdList"></a>
# **domainAnalyticsIdList**
> DomainAnalyticsIdListResponseInfo domainAnalyticsIdList()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new DomainAnalyticsIdListRequestInfo();
   task.datetime_from = "2025-07-14 10:26:13 +00:00";
   task.datetime_to = "2025-09-14 10:26:13 +00:00";
   task.limit = 100;
   task.offset = 0;
   task.sort = "desc";
 let response = await api.domainAnalyticsIdList([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DomainAnalyticsIdListRequestInfo[]&gt;**](DomainAnalyticsIdListRequestInfo[].md)|  | [optional] |



### Return type

[**DomainAnalyticsIdListResponseInfo**](DomainAnalyticsIdListResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="domainAnalyticsErrors"></a>
# **domainAnalyticsErrors**
> DomainAnalyticsErrorsResponseInfo domainAnalyticsErrors()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new DomainAnalyticsErrorsRequestInfo();
   task.limit = 10;
   task.offset = 0;
   task.filtered_function = "pingback_url";
 let response = await api.domainAnalyticsErrors([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DomainAnalyticsErrorsRequestInfo[]&gt;**](DomainAnalyticsErrorsRequestInfo[].md)|  | [optional] |



### Return type

[**DomainAnalyticsErrorsResponseInfo**](DomainAnalyticsErrorsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="technologiesAvailableFilters"></a>
# **technologiesAvailableFilters**
> DomainAnalyticsTechnologiesAvailableFiltersResponseInfo technologiesAvailableFilters()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.technologiesAvailableFilters();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**DomainAnalyticsTechnologiesAvailableFiltersResponseInfo**](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="domainAnalyticsTechnologiesLocations"></a>
# **domainAnalyticsTechnologiesLocations**
> DomainAnalyticsTechnologiesLocationsResponseInfo domainAnalyticsTechnologiesLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.domainAnalyticsTechnologiesLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**DomainAnalyticsTechnologiesLocationsResponseInfo**](DomainAnalyticsTechnologiesLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="domainAnalyticsTechnologiesLanguages"></a>
# **domainAnalyticsTechnologiesLanguages**
> DomainAnalyticsTechnologiesLanguagesResponseInfo domainAnalyticsTechnologiesLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.domainAnalyticsTechnologiesLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**DomainAnalyticsTechnologiesLanguagesResponseInfo**](DomainAnalyticsTechnologiesLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="technologiesTechnologies"></a>
# **technologiesTechnologies**
> DomainAnalyticsTechnologiesTechnologiesResponseInfo technologiesTechnologies()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.technologiesTechnologies();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**DomainAnalyticsTechnologiesTechnologiesResponseInfo**](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="technologiesAggregationTechnologiesLive"></a>
# **technologiesAggregationTechnologiesLive**
> DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo technologiesAggregationTechnologiesLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo();
   task.technology = "Nginx";
   task.keyword = "WordPress";
   task.mode = "entry";
   task.limit = 10;
 let response = await api.technologiesAggregationTechnologiesLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo[]&gt;**](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo**](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="technologiesTechnologiesSummaryLive"></a>
# **technologiesTechnologiesSummaryLive**
> DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo technologiesTechnologiesSummaryLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo();
   task.technologies = [
       "Ngi",
   ];
   task.keywords = [
       "WordPress",
   ];
   task.mode = "entry";
 let response = await api.technologiesTechnologiesSummaryLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo[]&gt;**](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo**](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="technologiesTechnologyStatsLive"></a>
# **technologiesTechnologyStatsLive**
> DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo technologiesTechnologyStatsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo();
   task.technology = "jQuery";
   task.date_from = "2025-07-14";
   task.date_to = "2025-09-14";
 let response = await api.technologiesTechnologyStatsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo[]&gt;**](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo**](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="technologiesDomainsByTechnologyLive"></a>
# **technologiesDomainsByTechnologyLive**
> DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo technologiesDomainsByTechnologyLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo();
   task.technologies = [
       "Nginx",
   ];
   task.limit = 10;
 let response = await api.technologiesDomainsByTechnologyLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo[]&gt;**](DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo**](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="technologiesDomainsByHtmlTermsLive"></a>
# **technologiesDomainsByHtmlTermsLive**
> DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo technologiesDomainsByHtmlTermsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo();
   task.search_terms = [
       "data-attrid",
   ];
   task.limit = 10;
   task.offset = 0;
 let response = await api.technologiesDomainsByHtmlTermsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo[]&gt;**](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo**](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="technologiesDomainTechnologiesLive"></a>
# **technologiesDomainTechnologiesLive**
> DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo technologiesDomainTechnologiesLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new DomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo();
   task.target = "dataforseo.com";
 let response = await api.technologiesDomainTechnologiesLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo[]&gt;**](DomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo**](DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="whoisAvailableFilters"></a>
# **whoisAvailableFilters**
> DomainAnalyticsWhoisAvailableFiltersResponseInfo whoisAvailableFilters()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.whoisAvailableFilters();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**DomainAnalyticsWhoisAvailableFiltersResponseInfo**](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="whoisOverviewLive"></a>
# **whoisOverviewLive**
> DomainAnalyticsWhoisOverviewLiveResponseInfo whoisOverviewLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new DomainAnalyticsWhoisOverviewLiveRequestInfo();
   task.limit = 2;
 let response = await api.whoisOverviewLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;DomainAnalyticsWhoisOverviewLiveRequestInfo[]&gt;**](DomainAnalyticsWhoisOverviewLiveRequestInfo[].md)|  | [optional] |



### Return type

[**DomainAnalyticsWhoisOverviewLiveResponseInfo**](DomainAnalyticsWhoisOverviewLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |