# MerchantApi

All URIs are relative to *https://api.dataforseo.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**merchantIdList**](MerchantApi.md#merchantIdList) | **POST**  /v3/merchant/id_list  |
[**merchantErrors**](MerchantApi.md#merchantErrors) | **POST**  /v3/merchant/errors  |
[**merchantGoogleLanguages**](MerchantApi.md#merchantGoogleLanguages) | **GET**  /v3/merchant/google/languages  |
[**merchantGoogleLocations**](MerchantApi.md#merchantGoogleLocations) | **GET**  /v3/merchant/google/locations  |
[**merchantGoogleLocationsCountry**](MerchantApi.md#merchantGoogleLocationsCountry) | **GET**  /v3/merchant/google/locations/{country}  |
[**googleProductsTaskPost**](MerchantApi.md#googleProductsTaskPost) | **POST**  /v3/merchant/google/products/task_post  |
[**googleProductsTasksReady**](MerchantApi.md#googleProductsTasksReady) | **GET**  /v3/merchant/google/products/tasks_ready  |
[**merchantTasksReady**](MerchantApi.md#merchantTasksReady) | **GET**  /v3/merchant/tasks_ready  |
[**googleProductsTaskGetAdvanced**](MerchantApi.md#googleProductsTaskGetAdvanced) | **GET**  /v3/merchant/google/products/task_get/advanced/{id}  |
[**googleProductsTaskGetHtml**](MerchantApi.md#googleProductsTaskGetHtml) | **GET**  /v3/merchant/google/products/task_get/html/{id}  |
[**googleSellersTaskPost**](MerchantApi.md#googleSellersTaskPost) | **POST**  /v3/merchant/google/sellers/task_post  |
[**googleSellersTasksReady**](MerchantApi.md#googleSellersTasksReady) | **GET**  /v3/merchant/google/sellers/tasks_ready  |
[**googleSellersTaskGetAdvanced**](MerchantApi.md#googleSellersTaskGetAdvanced) | **GET**  /v3/merchant/google/sellers/task_get/advanced/{id}  |
[**googleProductInfoTaskPost**](MerchantApi.md#googleProductInfoTaskPost) | **POST**  /v3/merchant/google/product_info/task_post  |
[**googleProductInfoTasksReady**](MerchantApi.md#googleProductInfoTasksReady) | **GET**  /v3/merchant/google/product_info/tasks_ready  |
[**googleProductInfoTaskGetAdvanced**](MerchantApi.md#googleProductInfoTaskGetAdvanced) | **GET**  /v3/merchant/google/product_info/task_get/advanced/{id}  |
[**googleSellersAdUrl**](MerchantApi.md#googleSellersAdUrl) | **GET**  /v3/merchant/google/sellers/ad_url/{shop_ad_aclk}  |
[**amazonLocations**](MerchantApi.md#amazonLocations) | **GET**  /v3/merchant/amazon/locations  |
[**amazonLocationsCountry**](MerchantApi.md#amazonLocationsCountry) | **GET**  /v3/merchant/amazon/locations/{country}  |
[**amazonLanguages**](MerchantApi.md#amazonLanguages) | **GET**  /v3/merchant/amazon/languages  |
[**amazonProductsTaskPost**](MerchantApi.md#amazonProductsTaskPost) | **POST**  /v3/merchant/amazon/products/task_post  |
[**amazonProductsTasksReady**](MerchantApi.md#amazonProductsTasksReady) | **GET**  /v3/merchant/amazon/products/tasks_ready  |
[**amazonProductsTaskGetAdvanced**](MerchantApi.md#amazonProductsTaskGetAdvanced) | **GET**  /v3/merchant/amazon/products/task_get/advanced/{id}  |
[**amazonProductsTaskGetHtml**](MerchantApi.md#amazonProductsTaskGetHtml) | **GET**  /v3/merchant/amazon/products/task_get/html/{id}  |
[**amazonAsinTaskPost**](MerchantApi.md#amazonAsinTaskPost) | **POST**  /v3/merchant/amazon/asin/task_post  |
[**amazonAsinTasksReady**](MerchantApi.md#amazonAsinTasksReady) | **GET**  /v3/merchant/amazon/asin/tasks_ready  |
[**amazonAsinTaskGetAdvanced**](MerchantApi.md#amazonAsinTaskGetAdvanced) | **GET**  /v3/merchant/amazon/asin/task_get/advanced/{id}  |
[**amazonAsinTaskGetHtml**](MerchantApi.md#amazonAsinTaskGetHtml) | **GET**  /v3/merchant/amazon/asin/task_get/html/{id}  |
[**amazonSellersTaskPost**](MerchantApi.md#amazonSellersTaskPost) | **POST**  /v3/merchant/amazon/sellers/task_post  |
[**amazonSellersTasksReady**](MerchantApi.md#amazonSellersTasksReady) | **GET**  /v3/merchant/amazon/sellers/tasks_ready  |
[**amazonSellersTaskGetAdvanced**](MerchantApi.md#amazonSellersTaskGetAdvanced) | **GET**  /v3/merchant/amazon/sellers/task_get/advanced/{id}  |
[**amazonSellersTaskGetHtml**](MerchantApi.md#amazonSellersTaskGetHtml) | **GET**  /v3/merchant/amazon/sellers/task_get/html/{id}  |
[**amazonReviewsTaskPost**](MerchantApi.md#amazonReviewsTaskPost) | **POST**  /v3/merchant/amazon/reviews/task_post  |
[**amazonReviewsTasksReady**](MerchantApi.md#amazonReviewsTasksReady) | **GET**  /v3/merchant/amazon/reviews/tasks_ready  |
[**amazonReviewsTaskGetAdvanced**](MerchantApi.md#amazonReviewsTaskGetAdvanced) | **GET**  /v3/merchant/amazon/reviews/task_get/advanced/{id}  |
[**amazonReviewsTaskGetHtml**](MerchantApi.md#amazonReviewsTaskGetHtml) | **GET**  /v3/merchant/amazon/reviews/task_get/html/{id}  |

<a id="merchantIdList"></a>
# **merchantIdList**
> MerchantIdListResponseInfo merchantIdList()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new MerchantIdListRequestInfo();
 let response = await api.merchantIdList([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;MerchantIdListRequestInfo[]&gt;**](MerchantIdListRequestInfo[].md)|  | [optional] |



### Return type

[**MerchantIdListResponseInfo**](MerchantIdListResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="merchantErrors"></a>
# **merchantErrors**
> MerchantErrorsResponseInfo merchantErrors()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new MerchantErrorsRequestInfo();
 let response = await api.merchantErrors([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;MerchantErrorsRequestInfo[]&gt;**](MerchantErrorsRequestInfo[].md)|  | [optional] |



### Return type

[**MerchantErrorsResponseInfo**](MerchantErrorsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="merchantGoogleLanguages"></a>
# **merchantGoogleLanguages**
> MerchantGoogleLanguagesResponseInfo merchantGoogleLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.merchantGoogleLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantGoogleLanguagesResponseInfo**](MerchantGoogleLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="merchantGoogleLocations"></a>
# **merchantGoogleLocations**
> MerchantGoogleLocationsResponseInfo merchantGoogleLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.merchantGoogleLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantGoogleLocationsResponseInfo**](MerchantGoogleLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="merchantGoogleLocationsCountry"></a>
# **merchantGoogleLocationsCountry**
> MerchantGoogleLocationsCountryResponseInfo merchantGoogleLocationsCountry()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let country = ;
 let response = await api.merchantGoogleLocationsCountry(country);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantGoogleLocationsCountryResponseInfo**](MerchantGoogleLocationsCountryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleProductsTaskPost"></a>
# **googleProductsTaskPost**
> MerchantGoogleProductsTaskPostResponseInfo googleProductsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new MerchantGoogleProductsTaskPostRequestInfo();
 let response = await api.googleProductsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;MerchantGoogleProductsTaskPostRequestInfo[]&gt;**](MerchantGoogleProductsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**MerchantGoogleProductsTaskPostResponseInfo**](MerchantGoogleProductsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleProductsTasksReady"></a>
# **googleProductsTasksReady**
> MerchantGoogleProductsTasksReadyResponseInfo googleProductsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleProductsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantGoogleProductsTasksReadyResponseInfo**](MerchantGoogleProductsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="merchantTasksReady"></a>
# **merchantTasksReady**
> MerchantTasksReadyResponseInfo merchantTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.merchantTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantTasksReadyResponseInfo**](MerchantTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleProductsTaskGetAdvanced"></a>
# **googleProductsTaskGetAdvanced**
> MerchantGoogleProductsTaskGetAdvancedResponseInfo googleProductsTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleProductsTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantGoogleProductsTaskGetAdvancedResponseInfo**](MerchantGoogleProductsTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleProductsTaskGetHtml"></a>
# **googleProductsTaskGetHtml**
> MerchantGoogleProductsTaskGetHtmlResponseInfo googleProductsTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleProductsTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantGoogleProductsTaskGetHtmlResponseInfo**](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleSellersTaskPost"></a>
# **googleSellersTaskPost**
> MerchantGoogleSellersTaskPostResponseInfo googleSellersTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new MerchantGoogleSellersTaskPostRequestInfo();
 let response = await api.googleSellersTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;MerchantGoogleSellersTaskPostRequestInfo[]&gt;**](MerchantGoogleSellersTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**MerchantGoogleSellersTaskPostResponseInfo**](MerchantGoogleSellersTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleSellersTasksReady"></a>
# **googleSellersTasksReady**
> MerchantGoogleSellersTasksReadyResponseInfo googleSellersTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleSellersTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantGoogleSellersTasksReadyResponseInfo**](MerchantGoogleSellersTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleSellersTaskGetAdvanced"></a>
# **googleSellersTaskGetAdvanced**
> MerchantGoogleSellersTaskGetAdvancedResponseInfo googleSellersTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleSellersTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantGoogleSellersTaskGetAdvancedResponseInfo**](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleProductInfoTaskPost"></a>
# **googleProductInfoTaskPost**
> MerchantGoogleProductInfoTaskPostResponseInfo googleProductInfoTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new MerchantGoogleProductInfoTaskPostRequestInfo();
 let response = await api.googleProductInfoTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;MerchantGoogleProductInfoTaskPostRequestInfo[]&gt;**](MerchantGoogleProductInfoTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**MerchantGoogleProductInfoTaskPostResponseInfo**](MerchantGoogleProductInfoTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleProductInfoTasksReady"></a>
# **googleProductInfoTasksReady**
> MerchantGoogleProductInfoTasksReadyResponseInfo googleProductInfoTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleProductInfoTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantGoogleProductInfoTasksReadyResponseInfo**](MerchantGoogleProductInfoTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleProductInfoTaskGetAdvanced"></a>
# **googleProductInfoTaskGetAdvanced**
> MerchantGoogleProductInfoTaskGetAdvancedResponseInfo googleProductInfoTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleProductInfoTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantGoogleProductInfoTaskGetAdvancedResponseInfo**](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleSellersAdUrl"></a>
# **googleSellersAdUrl**
> MerchantGoogleSellersAdUrlResponseInfo googleSellersAdUrl()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let shop_ad_aclk = ;
 let response = await api.googleSellersAdUrl(shop_ad_aclk);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantGoogleSellersAdUrlResponseInfo**](MerchantGoogleSellersAdUrlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonLocations"></a>
# **amazonLocations**
> MerchantAmazonLocationsResponseInfo amazonLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.amazonLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantAmazonLocationsResponseInfo**](MerchantAmazonLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonLocationsCountry"></a>
# **amazonLocationsCountry**
> MerchantAmazonLocationsCountryResponseInfo amazonLocationsCountry()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let country = ;
 let response = await api.amazonLocationsCountry(country);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantAmazonLocationsCountryResponseInfo**](MerchantAmazonLocationsCountryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonLanguages"></a>
# **amazonLanguages**
> MerchantAmazonLanguagesResponseInfo amazonLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.amazonLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantAmazonLanguagesResponseInfo**](MerchantAmazonLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonProductsTaskPost"></a>
# **amazonProductsTaskPost**
> MerchantAmazonProductsTaskPostResponseInfo amazonProductsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new MerchantAmazonProductsTaskPostRequestInfo();
 let response = await api.amazonProductsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;MerchantAmazonProductsTaskPostRequestInfo[]&gt;**](MerchantAmazonProductsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**MerchantAmazonProductsTaskPostResponseInfo**](MerchantAmazonProductsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonProductsTasksReady"></a>
# **amazonProductsTasksReady**
> MerchantAmazonProductsTasksReadyResponseInfo amazonProductsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.amazonProductsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantAmazonProductsTasksReadyResponseInfo**](MerchantAmazonProductsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonProductsTaskGetAdvanced"></a>
# **amazonProductsTaskGetAdvanced**
> MerchantAmazonProductsTaskGetAdvancedResponseInfo amazonProductsTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.amazonProductsTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantAmazonProductsTaskGetAdvancedResponseInfo**](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonProductsTaskGetHtml"></a>
# **amazonProductsTaskGetHtml**
> MerchantAmazonProductsTaskGetHtmlResponseInfo amazonProductsTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.amazonProductsTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantAmazonProductsTaskGetHtmlResponseInfo**](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonAsinTaskPost"></a>
# **amazonAsinTaskPost**
> MerchantAmazonAsinTaskPostResponseInfo amazonAsinTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new MerchantAmazonAsinTaskPostRequestInfo();
 let response = await api.amazonAsinTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;MerchantAmazonAsinTaskPostRequestInfo[]&gt;**](MerchantAmazonAsinTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**MerchantAmazonAsinTaskPostResponseInfo**](MerchantAmazonAsinTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonAsinTasksReady"></a>
# **amazonAsinTasksReady**
> MerchantAmazonAsinTasksReadyResponseInfo amazonAsinTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.amazonAsinTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantAmazonAsinTasksReadyResponseInfo**](MerchantAmazonAsinTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonAsinTaskGetAdvanced"></a>
# **amazonAsinTaskGetAdvanced**
> MerchantAmazonAsinTaskGetAdvancedResponseInfo amazonAsinTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.amazonAsinTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantAmazonAsinTaskGetAdvancedResponseInfo**](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonAsinTaskGetHtml"></a>
# **amazonAsinTaskGetHtml**
> MerchantAmazonAsinTaskGetHtmlResponseInfo amazonAsinTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.amazonAsinTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantAmazonAsinTaskGetHtmlResponseInfo**](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonSellersTaskPost"></a>
# **amazonSellersTaskPost**
> MerchantAmazonSellersTaskPostResponseInfo amazonSellersTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new MerchantAmazonSellersTaskPostRequestInfo();
 let response = await api.amazonSellersTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;MerchantAmazonSellersTaskPostRequestInfo[]&gt;**](MerchantAmazonSellersTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**MerchantAmazonSellersTaskPostResponseInfo**](MerchantAmazonSellersTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonSellersTasksReady"></a>
# **amazonSellersTasksReady**
> MerchantAmazonSellersTasksReadyResponseInfo amazonSellersTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.amazonSellersTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantAmazonSellersTasksReadyResponseInfo**](MerchantAmazonSellersTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonSellersTaskGetAdvanced"></a>
# **amazonSellersTaskGetAdvanced**
> MerchantAmazonSellersTaskGetAdvancedResponseInfo amazonSellersTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.amazonSellersTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantAmazonSellersTaskGetAdvancedResponseInfo**](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonSellersTaskGetHtml"></a>
# **amazonSellersTaskGetHtml**
> MerchantAmazonSellersTaskGetHtmlResponseInfo amazonSellersTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.amazonSellersTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantAmazonSellersTaskGetHtmlResponseInfo**](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonReviewsTaskPost"></a>
# **amazonReviewsTaskPost**
> MerchantAmazonReviewsTaskPostResponseInfo amazonReviewsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new MerchantAmazonReviewsTaskPostRequestInfo();
 let response = await api.amazonReviewsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;MerchantAmazonReviewsTaskPostRequestInfo[]&gt;**](MerchantAmazonReviewsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**MerchantAmazonReviewsTaskPostResponseInfo**](MerchantAmazonReviewsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonReviewsTasksReady"></a>
# **amazonReviewsTasksReady**
> MerchantAmazonReviewsTasksReadyResponseInfo amazonReviewsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.amazonReviewsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantAmazonReviewsTasksReadyResponseInfo**](MerchantAmazonReviewsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonReviewsTaskGetAdvanced"></a>
# **amazonReviewsTaskGetAdvanced**
> MerchantAmazonReviewsTaskGetAdvancedResponseInfo amazonReviewsTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.amazonReviewsTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantAmazonReviewsTaskGetAdvancedResponseInfo**](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="amazonReviewsTaskGetHtml"></a>
# **amazonReviewsTaskGetHtml**
> MerchantAmazonReviewsTaskGetHtmlResponseInfo amazonReviewsTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new MerchantApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.amazonReviewsTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**MerchantAmazonReviewsTaskGetHtmlResponseInfo**](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |