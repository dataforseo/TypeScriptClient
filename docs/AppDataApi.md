# AppDataApi

All URIs are relative to *https://api.dataforseo.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**appDataIdList**](AppDataApi.md#appDataIdList) | **POST**  /v3/app_data/id_list  |
[**appDataErrors**](AppDataApi.md#appDataErrors) | **POST**  /v3/app_data/errors  |
[**googleCategories**](AppDataApi.md#googleCategories) | **GET**  /v3/app_data/google/categories  |
[**appDataGoogleLocations**](AppDataApi.md#appDataGoogleLocations) | **GET**  /v3/app_data/google/locations  |
[**appDataGoogleLocationsCountry**](AppDataApi.md#appDataGoogleLocationsCountry) | **GET**  /v3/app_data/google/locations/{country}  |
[**appDataGoogleLanguages**](AppDataApi.md#appDataGoogleLanguages) | **GET**  /v3/app_data/google/languages  |
[**googleAppSearchesTaskPost**](AppDataApi.md#googleAppSearchesTaskPost) | **POST**  /v3/app_data/google/app_searches/task_post  |
[**googleAppSearchesTasksReady**](AppDataApi.md#googleAppSearchesTasksReady) | **GET**  /v3/app_data/google/app_searches/tasks_ready  |
[**appDataTasksReady**](AppDataApi.md#appDataTasksReady) | **GET**  /v3/app_data/tasks_ready  |
[**googleAppSearchesTaskGetAdvanced**](AppDataApi.md#googleAppSearchesTaskGetAdvanced) | **GET**  /v3/app_data/google/app_searches/task_get/advanced/{id}  |
[**googleAppSearchesTaskGetHtml**](AppDataApi.md#googleAppSearchesTaskGetHtml) | **GET**  /v3/app_data/google/app_searches/task_get/html/{id}  |
[**googleAppListTaskPost**](AppDataApi.md#googleAppListTaskPost) | **POST**  /v3/app_data/google/app_list/task_post  |
[**googleAppListTasksReady**](AppDataApi.md#googleAppListTasksReady) | **GET**  /v3/app_data/google/app_list/tasks_ready  |
[**googleAppListTaskGetAdvanced**](AppDataApi.md#googleAppListTaskGetAdvanced) | **GET**  /v3/app_data/google/app_list/task_get/advanced/{id}  |
[**googleAppListTaskGetHtml**](AppDataApi.md#googleAppListTaskGetHtml) | **GET**  /v3/app_data/google/app_list/task_get/html/{id}  |
[**googleAppInfoTaskPost**](AppDataApi.md#googleAppInfoTaskPost) | **POST**  /v3/app_data/google/app_info/task_post  |
[**googleAppInfoTasksReady**](AppDataApi.md#googleAppInfoTasksReady) | **GET**  /v3/app_data/google/app_info/tasks_ready  |
[**googleAppInfoTaskGetAdvanced**](AppDataApi.md#googleAppInfoTaskGetAdvanced) | **GET**  /v3/app_data/google/app_info/task_get/advanced/{id}  |
[**googleAppInfoTaskGetHtml**](AppDataApi.md#googleAppInfoTaskGetHtml) | **GET**  /v3/app_data/google/app_info/task_get/html/{id}  |
[**googleAppReviewsTaskPost**](AppDataApi.md#googleAppReviewsTaskPost) | **POST**  /v3/app_data/google/app_reviews/task_post  |
[**googleAppReviewsTasksReady**](AppDataApi.md#googleAppReviewsTasksReady) | **GET**  /v3/app_data/google/app_reviews/tasks_ready  |
[**googleAppReviewsTaskGetAdvanced**](AppDataApi.md#googleAppReviewsTaskGetAdvanced) | **GET**  /v3/app_data/google/app_reviews/task_get/advanced/{id}  |
[**googleAppReviewsTaskGetHtml**](AppDataApi.md#googleAppReviewsTaskGetHtml) | **GET**  /v3/app_data/google/app_reviews/task_get/html/{id}  |
[**googleAppListingsCategories**](AppDataApi.md#googleAppListingsCategories) | **GET**  /v3/app_data/google/app_listings/categories  |
[**googleAppListingsSearchLive**](AppDataApi.md#googleAppListingsSearchLive) | **POST**  /v3/app_data/google/app_listings/search/live  |
[**appleCategories**](AppDataApi.md#appleCategories) | **GET**  /v3/app_data/apple/categories  |
[**appDataAppleLocations**](AppDataApi.md#appDataAppleLocations) | **GET**  /v3/app_data/apple/locations  |
[**appDataAppleLanguages**](AppDataApi.md#appDataAppleLanguages) | **GET**  /v3/app_data/apple/languages  |
[**appleAppSearchesTaskPost**](AppDataApi.md#appleAppSearchesTaskPost) | **POST**  /v3/app_data/apple/app_searches/task_post  |
[**appleAppSearchesTasksReady**](AppDataApi.md#appleAppSearchesTasksReady) | **GET**  /v3/app_data/apple/app_searches/tasks_ready  |
[**appleAppSearchesTaskGetAdvanced**](AppDataApi.md#appleAppSearchesTaskGetAdvanced) | **GET**  /v3/app_data/apple/app_searches/task_get/advanced/{id}  |
[**appleAppInfoTaskPost**](AppDataApi.md#appleAppInfoTaskPost) | **POST**  /v3/app_data/apple/app_info/task_post  |
[**appleAppInfoTasksReady**](AppDataApi.md#appleAppInfoTasksReady) | **GET**  /v3/app_data/apple/app_info/tasks_ready  |
[**appleAppInfoTaskGetAdvanced**](AppDataApi.md#appleAppInfoTaskGetAdvanced) | **GET**  /v3/app_data/apple/app_info/task_get/advanced/{id}  |
[**appleAppListTaskPost**](AppDataApi.md#appleAppListTaskPost) | **POST**  /v3/app_data/apple/app_list/task_post  |
[**appleAppListTasksReady**](AppDataApi.md#appleAppListTasksReady) | **GET**  /v3/app_data/apple/app_list/tasks_ready  |
[**appleAppListTaskGetAdvanced**](AppDataApi.md#appleAppListTaskGetAdvanced) | **GET**  /v3/app_data/apple/app_list/task_get/advanced/{id}  |
[**appleAppReviewsTaskPost**](AppDataApi.md#appleAppReviewsTaskPost) | **POST**  /v3/app_data/apple/app_reviews/task_post  |
[**appleAppReviewsTasksReady**](AppDataApi.md#appleAppReviewsTasksReady) | **GET**  /v3/app_data/apple/app_reviews/tasks_ready  |
[**appleAppReviewsTaskGetAdvanced**](AppDataApi.md#appleAppReviewsTaskGetAdvanced) | **GET**  /v3/app_data/apple/app_reviews/task_get/advanced/{id}  |
[**appleAppListingsCategories**](AppDataApi.md#appleAppListingsCategories) | **GET**  /v3/app_data/apple/app_listings/categories  |
[**appleAppListingsSearchLive**](AppDataApi.md#appleAppListingsSearchLive) | **POST**  /v3/app_data/apple/app_listings/search/live  |

<a id="appDataIdList"></a>
# **appDataIdList**
> AppDataIdListResponseInfo appDataIdList()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AppDataIdListRequestInfo();
   task.datetime_from = "2025-07-14 10:28:15 +00:00";
   task.datetime_to = "2025-09-14 10:28:15 +00:00";
   task.limit = 100;
   task.offset = 0;
   task.sort = "desc";
 let response = await api.appDataIdList([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AppDataIdListRequestInfo[]&gt;**](AppDataIdListRequestInfo[].md)|  | [optional] |



### Return type

[**AppDataIdListResponseInfo**](AppDataIdListResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appDataErrors"></a>
# **appDataErrors**
> AppDataErrorsResponseInfo appDataErrors()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AppDataErrorsRequestInfo();
   task.limit = 10;
   task.offset = 0;
   task.filtered_function = "pingback_url";
 let response = await api.appDataErrors([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AppDataErrorsRequestInfo[]&gt;**](AppDataErrorsRequestInfo[].md)|  | [optional] |



### Return type

[**AppDataErrorsResponseInfo**](AppDataErrorsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleCategories"></a>
# **googleCategories**
> AppDataGoogleCategoriesResponseInfo googleCategories()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleCategories();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataGoogleCategoriesResponseInfo**](AppDataGoogleCategoriesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appDataGoogleLocations"></a>
# **appDataGoogleLocations**
> AppDataGoogleLocationsResponseInfo appDataGoogleLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.appDataGoogleLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataGoogleLocationsResponseInfo**](AppDataGoogleLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appDataGoogleLocationsCountry"></a>
# **appDataGoogleLocationsCountry**
> AppDataGoogleLocationsCountryResponseInfo appDataGoogleLocationsCountry()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.appDataGoogleLocationsCountry(country);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataGoogleLocationsCountryResponseInfo**](AppDataGoogleLocationsCountryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appDataGoogleLanguages"></a>
# **appDataGoogleLanguages**
> AppDataGoogleLanguagesResponseInfo appDataGoogleLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.appDataGoogleLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataGoogleLanguagesResponseInfo**](AppDataGoogleLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppSearchesTaskPost"></a>
# **googleAppSearchesTaskPost**
> AppDataGoogleAppSearchesTaskPostResponseInfo googleAppSearchesTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AppDataGoogleAppSearchesTaskPostRequestInfo();
   task.keyword = "vpn";
   task.location_code = 2840;
   task.language_code = "en";
   task.depth = 30;
 let response = await api.googleAppSearchesTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AppDataGoogleAppSearchesTaskPostRequestInfo[]&gt;**](AppDataGoogleAppSearchesTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**AppDataGoogleAppSearchesTaskPostResponseInfo**](AppDataGoogleAppSearchesTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppSearchesTasksReady"></a>
# **googleAppSearchesTasksReady**
> AppDataGoogleAppSearchesTasksReadyResponseInfo googleAppSearchesTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleAppSearchesTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataGoogleAppSearchesTasksReadyResponseInfo**](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appDataTasksReady"></a>
# **appDataTasksReady**
> AppDataTasksReadyResponseInfo appDataTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.appDataTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataTasksReadyResponseInfo**](AppDataTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppSearchesTaskGetAdvanced"></a>
# **googleAppSearchesTaskGetAdvanced**
> AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo googleAppSearchesTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleAppSearchesTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo**](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppSearchesTaskGetHtml"></a>
# **googleAppSearchesTaskGetHtml**
> AppDataGoogleAppSearchesTaskGetHtmlResponseInfo googleAppSearchesTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleAppSearchesTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataGoogleAppSearchesTaskGetHtmlResponseInfo**](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppListTaskPost"></a>
# **googleAppListTaskPost**
> AppDataGoogleAppListTaskPostResponseInfo googleAppListTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AppDataGoogleAppListTaskPostRequestInfo();
   task.app_collection = "topselling_free";
   task.location_code = 2840;
   task.language_code = "en";
   task.depth = 100;
 let response = await api.googleAppListTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AppDataGoogleAppListTaskPostRequestInfo[]&gt;**](AppDataGoogleAppListTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**AppDataGoogleAppListTaskPostResponseInfo**](AppDataGoogleAppListTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppListTasksReady"></a>
# **googleAppListTasksReady**
> AppDataGoogleAppListTasksReadyResponseInfo googleAppListTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleAppListTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataGoogleAppListTasksReadyResponseInfo**](AppDataGoogleAppListTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppListTaskGetAdvanced"></a>
# **googleAppListTaskGetAdvanced**
> AppDataGoogleAppListTaskGetAdvancedResponseInfo googleAppListTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleAppListTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataGoogleAppListTaskGetAdvancedResponseInfo**](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppListTaskGetHtml"></a>
# **googleAppListTaskGetHtml**
> AppDataGoogleAppListTaskGetHtmlResponseInfo googleAppListTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleAppListTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataGoogleAppListTaskGetHtmlResponseInfo**](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppInfoTaskPost"></a>
# **googleAppInfoTaskPost**
> AppDataGoogleAppInfoTaskPostResponseInfo googleAppInfoTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AppDataGoogleAppInfoTaskPostRequestInfo();
   task.app_id = "org.telegram.messenger";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleAppInfoTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AppDataGoogleAppInfoTaskPostRequestInfo[]&gt;**](AppDataGoogleAppInfoTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**AppDataGoogleAppInfoTaskPostResponseInfo**](AppDataGoogleAppInfoTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppInfoTasksReady"></a>
# **googleAppInfoTasksReady**
> AppDataGoogleAppInfoTasksReadyResponseInfo googleAppInfoTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleAppInfoTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataGoogleAppInfoTasksReadyResponseInfo**](AppDataGoogleAppInfoTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppInfoTaskGetAdvanced"></a>
# **googleAppInfoTaskGetAdvanced**
> AppDataGoogleAppInfoTaskGetAdvancedResponseInfo googleAppInfoTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleAppInfoTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataGoogleAppInfoTaskGetAdvancedResponseInfo**](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppInfoTaskGetHtml"></a>
# **googleAppInfoTaskGetHtml**
> AppDataGoogleAppInfoTaskGetHtmlResponseInfo googleAppInfoTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleAppInfoTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataGoogleAppInfoTaskGetHtmlResponseInfo**](AppDataGoogleAppInfoTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppReviewsTaskPost"></a>
# **googleAppReviewsTaskPost**
> AppDataGoogleAppReviewsTaskPostResponseInfo googleAppReviewsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AppDataGoogleAppReviewsTaskPostRequestInfo();
   task.app_id = "org.telegram.messenger";
   task.location_code = 2840;
   task.language_code = "en";
   task.depth = 150;
 let response = await api.googleAppReviewsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AppDataGoogleAppReviewsTaskPostRequestInfo[]&gt;**](AppDataGoogleAppReviewsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**AppDataGoogleAppReviewsTaskPostResponseInfo**](AppDataGoogleAppReviewsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppReviewsTasksReady"></a>
# **googleAppReviewsTasksReady**
> AppDataGoogleAppReviewsTasksReadyResponseInfo googleAppReviewsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleAppReviewsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataGoogleAppReviewsTasksReadyResponseInfo**](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppReviewsTaskGetAdvanced"></a>
# **googleAppReviewsTaskGetAdvanced**
> AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo googleAppReviewsTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleAppReviewsTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo**](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppReviewsTaskGetHtml"></a>
# **googleAppReviewsTaskGetHtml**
> AppDataGoogleAppReviewsTaskGetHtmlResponseInfo googleAppReviewsTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleAppReviewsTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataGoogleAppReviewsTaskGetHtmlResponseInfo**](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppListingsCategories"></a>
# **googleAppListingsCategories**
> AppDataGoogleAppListingsCategoriesResponseInfo googleAppListingsCategories()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleAppListingsCategories();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataGoogleAppListingsCategoriesResponseInfo**](AppDataGoogleAppListingsCategoriesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAppListingsSearchLive"></a>
# **googleAppListingsSearchLive**
> AppDataGoogleAppListingsSearchLiveResponseInfo googleAppListingsSearchLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AppDataGoogleAppListingsSearchLiveRequestInfo();
   task.categories = [
       "Tools",
   ];
   task.description = "vpn";
   task.title = "vpn";
   task.limit = 10;
 let response = await api.googleAppListingsSearchLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AppDataGoogleAppListingsSearchLiveRequestInfo[]&gt;**](AppDataGoogleAppListingsSearchLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AppDataGoogleAppListingsSearchLiveResponseInfo**](AppDataGoogleAppListingsSearchLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleCategories"></a>
# **appleCategories**
> AppDataAppleCategoriesResponseInfo appleCategories()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.appleCategories();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataAppleCategoriesResponseInfo**](AppDataAppleCategoriesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appDataAppleLocations"></a>
# **appDataAppleLocations**
> AppDataAppleLocationsResponseInfo appDataAppleLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.appDataAppleLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataAppleLocationsResponseInfo**](AppDataAppleLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appDataAppleLanguages"></a>
# **appDataAppleLanguages**
> AppDataAppleLanguagesResponseInfo appDataAppleLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.appDataAppleLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataAppleLanguagesResponseInfo**](AppDataAppleLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleAppSearchesTaskPost"></a>
# **appleAppSearchesTaskPost**
> AppDataAppleAppSearchesTaskPostResponseInfo appleAppSearchesTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AppDataAppleAppSearchesTaskPostRequestInfo();
   task.keyword = "vpn";
   task.location_code = 2840;
   task.language_code = "en";
   task.depth = 200;
 let response = await api.appleAppSearchesTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AppDataAppleAppSearchesTaskPostRequestInfo[]&gt;**](AppDataAppleAppSearchesTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**AppDataAppleAppSearchesTaskPostResponseInfo**](AppDataAppleAppSearchesTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleAppSearchesTasksReady"></a>
# **appleAppSearchesTasksReady**
> AppDataAppleAppSearchesTasksReadyResponseInfo appleAppSearchesTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.appleAppSearchesTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataAppleAppSearchesTasksReadyResponseInfo**](AppDataAppleAppSearchesTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleAppSearchesTaskGetAdvanced"></a>
# **appleAppSearchesTaskGetAdvanced**
> AppDataAppleAppSearchesTaskGetAdvancedResponseInfo appleAppSearchesTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.appleAppSearchesTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataAppleAppSearchesTaskGetAdvancedResponseInfo**](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleAppInfoTaskPost"></a>
# **appleAppInfoTaskPost**
> AppDataAppleAppInfoTaskPostResponseInfo appleAppInfoTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AppDataAppleAppInfoTaskPostRequestInfo();
   task.app_id = "835599320";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.appleAppInfoTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AppDataAppleAppInfoTaskPostRequestInfo[]&gt;**](AppDataAppleAppInfoTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**AppDataAppleAppInfoTaskPostResponseInfo**](AppDataAppleAppInfoTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleAppInfoTasksReady"></a>
# **appleAppInfoTasksReady**
> AppDataAppleAppInfoTasksReadyResponseInfo appleAppInfoTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.appleAppInfoTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataAppleAppInfoTasksReadyResponseInfo**](AppDataAppleAppInfoTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleAppInfoTaskGetAdvanced"></a>
# **appleAppInfoTaskGetAdvanced**
> AppDataAppleAppInfoTaskGetAdvancedResponseInfo appleAppInfoTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.appleAppInfoTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataAppleAppInfoTaskGetAdvancedResponseInfo**](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleAppListTaskPost"></a>
# **appleAppListTaskPost**
> AppDataAppleAppListTaskPostResponseInfo appleAppListTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AppDataAppleAppListTaskPostRequestInfo();
   task.app_collection = "top_free_ios";
   task.location_code = 2840;
   task.language_code = "en";
   task.depth = 200;
   task.app_category = "games";
 let response = await api.appleAppListTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AppDataAppleAppListTaskPostRequestInfo[]&gt;**](AppDataAppleAppListTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**AppDataAppleAppListTaskPostResponseInfo**](AppDataAppleAppListTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleAppListTasksReady"></a>
# **appleAppListTasksReady**
> AppDataAppleAppListTasksReadyResponseInfo appleAppListTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.appleAppListTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataAppleAppListTasksReadyResponseInfo**](AppDataAppleAppListTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleAppListTaskGetAdvanced"></a>
# **appleAppListTaskGetAdvanced**
> AppDataAppleAppListTaskGetAdvancedResponseInfo appleAppListTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.appleAppListTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataAppleAppListTaskGetAdvancedResponseInfo**](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleAppReviewsTaskPost"></a>
# **appleAppReviewsTaskPost**
> AppDataAppleAppReviewsTaskPostResponseInfo appleAppReviewsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AppDataAppleAppReviewsTaskPostRequestInfo();
   task.app_id = "835599320";
   task.location_code = 2840;
   task.language_code = "en";
   task.depth = 200;
 let response = await api.appleAppReviewsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AppDataAppleAppReviewsTaskPostRequestInfo[]&gt;**](AppDataAppleAppReviewsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**AppDataAppleAppReviewsTaskPostResponseInfo**](AppDataAppleAppReviewsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleAppReviewsTasksReady"></a>
# **appleAppReviewsTasksReady**
> AppDataAppleAppReviewsTasksReadyResponseInfo appleAppReviewsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.appleAppReviewsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataAppleAppReviewsTasksReadyResponseInfo**](AppDataAppleAppReviewsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleAppReviewsTaskGetAdvanced"></a>
# **appleAppReviewsTaskGetAdvanced**
> AppDataAppleAppReviewsTaskGetAdvancedResponseInfo appleAppReviewsTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.appleAppReviewsTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataAppleAppReviewsTaskGetAdvancedResponseInfo**](AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleAppListingsCategories"></a>
# **appleAppListingsCategories**
> AppDataAppleAppListingsCategoriesResponseInfo appleAppListingsCategories()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.appleAppListingsCategories();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppDataAppleAppListingsCategoriesResponseInfo**](AppDataAppleAppListingsCategoriesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appleAppListingsSearchLive"></a>
# **appleAppListingsSearchLive**
> AppDataAppleAppListingsSearchLiveResponseInfo appleAppListingsSearchLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AppDataAppleAppListingsSearchLiveRequestInfo();
   task.categories = [
       "Tools",
   ];
   task.description = "vpn";
   task.title = "vpn";
   task.limit = 10;
 let response = await api.appleAppListingsSearchLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AppDataAppleAppListingsSearchLiveRequestInfo[]&gt;**](AppDataAppleAppListingsSearchLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AppDataAppleAppListingsSearchLiveResponseInfo**](AppDataAppleAppListingsSearchLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |