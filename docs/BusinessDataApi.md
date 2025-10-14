# BusinessDataApi

All URIs are relative to *https://api.dataforseo.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**businessDataIdList**](BusinessDataApi.md#businessDataIdList) | **POST**  /v3/business_data/id_list  |
[**businessDataErrors**](BusinessDataApi.md#businessDataErrors) | **POST**  /v3/business_data/errors  |
[**businessDataBusinessListingsLocations**](BusinessDataApi.md#businessDataBusinessListingsLocations) | **GET**  /v3/business_data/business_listings/locations  |
[**businessListingsCategories**](BusinessDataApi.md#businessListingsCategories) | **GET**  /v3/business_data/business_listings/categories  |
[**businessListingsAvailableFilters**](BusinessDataApi.md#businessListingsAvailableFilters) | **GET**  /v3/business_data/business_listings/available_filters  |
[**businessListingsSearchLive**](BusinessDataApi.md#businessListingsSearchLive) | **POST**  /v3/business_data/business_listings/search/live  |
[**businessListingsCategoriesAggregationLive**](BusinessDataApi.md#businessListingsCategoriesAggregationLive) | **POST**  /v3/business_data/business_listings/categories_aggregation/live  |
[**businessDataGoogleLocations**](BusinessDataApi.md#businessDataGoogleLocations) | **GET**  /v3/business_data/google/locations  |
[**businessDataGoogleLocationsCountry**](BusinessDataApi.md#businessDataGoogleLocationsCountry) | **GET**  /v3/business_data/google/locations/{country}  |
[**businessDataGoogleLanguages**](BusinessDataApi.md#businessDataGoogleLanguages) | **GET**  /v3/business_data/google/languages  |
[**googleMyBusinessInfoTaskPost**](BusinessDataApi.md#googleMyBusinessInfoTaskPost) | **POST**  /v3/business_data/google/my_business_info/task_post  |
[**googleMyBusinessInfoTasksReady**](BusinessDataApi.md#googleMyBusinessInfoTasksReady) | **GET**  /v3/business_data/google/my_business_info/tasks_ready  |
[**businessDataTasksReady**](BusinessDataApi.md#businessDataTasksReady) | **GET**  /v3/business_data/tasks_ready  |
[**googleMyBusinessInfoTaskGet**](BusinessDataApi.md#googleMyBusinessInfoTaskGet) | **GET**  /v3/business_data/google/my_business_info/task_get/{id}  |
[**googleMyBusinessInfoLive**](BusinessDataApi.md#googleMyBusinessInfoLive) | **POST**  /v3/business_data/google/my_business_info/live  |
[**googleMyBusinessUpdatesTaskPost**](BusinessDataApi.md#googleMyBusinessUpdatesTaskPost) | **POST**  /v3/business_data/google/my_business_updates/task_post  |
[**googleMyBusinessUpdatesTasksReady**](BusinessDataApi.md#googleMyBusinessUpdatesTasksReady) | **GET**  /v3/business_data/google/my_business_updates/tasks_ready  |
[**googleMyBusinessUpdatesTaskGet**](BusinessDataApi.md#googleMyBusinessUpdatesTaskGet) | **GET**  /v3/business_data/google/my_business_updates/task_get/{id}  |
[**googleHotelSearchesTaskPost**](BusinessDataApi.md#googleHotelSearchesTaskPost) | **POST**  /v3/business_data/google/hotel_searches/task_post  |
[**googleHotelSearchesTasksReady**](BusinessDataApi.md#googleHotelSearchesTasksReady) | **GET**  /v3/business_data/google/hotel_searches/tasks_ready  |
[**googleHotelSearchesTaskGet**](BusinessDataApi.md#googleHotelSearchesTaskGet) | **GET**  /v3/business_data/google/hotel_searches/task_get/{id}  |
[**googleHotelSearchesLive**](BusinessDataApi.md#googleHotelSearchesLive) | **POST**  /v3/business_data/google/hotel_searches/live  |
[**googleHotelInfoTaskPost**](BusinessDataApi.md#googleHotelInfoTaskPost) | **POST**  /v3/business_data/google/hotel_info/task_post  |
[**googleHotelInfoTasksReady**](BusinessDataApi.md#googleHotelInfoTasksReady) | **GET**  /v3/business_data/google/hotel_info/tasks_ready  |
[**googleHotelInfoTaskGetAdvanced**](BusinessDataApi.md#googleHotelInfoTaskGetAdvanced) | **GET**  /v3/business_data/google/hotel_info/task_get/advanced/{id}  |
[**googleHotelInfoTaskGetHtml**](BusinessDataApi.md#googleHotelInfoTaskGetHtml) | **GET**  /v3/business_data/google/hotel_info/task_get/html/{id}  |
[**googleHotelInfoLiveAdvanced**](BusinessDataApi.md#googleHotelInfoLiveAdvanced) | **POST**  /v3/business_data/google/hotel_info/live/advanced  |
[**googleHotelInfoLiveHtml**](BusinessDataApi.md#googleHotelInfoLiveHtml) | **POST**  /v3/business_data/google/hotel_info/live/html  |
[**googleReviewsTaskPost**](BusinessDataApi.md#googleReviewsTaskPost) | **POST**  /v3/business_data/google/reviews/task_post  |
[**googleReviewsTasksReady**](BusinessDataApi.md#googleReviewsTasksReady) | **GET**  /v3/business_data/google/reviews/tasks_ready  |
[**googleReviewsTaskGet**](BusinessDataApi.md#googleReviewsTaskGet) | **GET**  /v3/business_data/google/reviews/task_get/{id}  |
[**googleExtendedReviewsTaskPost**](BusinessDataApi.md#googleExtendedReviewsTaskPost) | **POST**  /v3/business_data/google/extended_reviews/task_post  |
[**googleExtendedReviewsTasksReady**](BusinessDataApi.md#googleExtendedReviewsTasksReady) | **GET**  /v3/business_data/google/extended_reviews/tasks_ready  |
[**googleExtendedReviewsTaskGet**](BusinessDataApi.md#googleExtendedReviewsTaskGet) | **GET**  /v3/business_data/google/extended_reviews/task_get/{id}  |
[**googleQuestionsAndAnswersTaskPost**](BusinessDataApi.md#googleQuestionsAndAnswersTaskPost) | **POST**  /v3/business_data/google/questions_and_answers/task_post  |
[**googleQuestionsAndAnswersTasksReady**](BusinessDataApi.md#googleQuestionsAndAnswersTasksReady) | **GET**  /v3/business_data/google/questions_and_answers/tasks_ready  |
[**googleQuestionsAndAnswersTaskGet**](BusinessDataApi.md#googleQuestionsAndAnswersTaskGet) | **GET**  /v3/business_data/google/questions_and_answers/task_get/{id}  |
[**googleQuestionsAndAnswersLive**](BusinessDataApi.md#googleQuestionsAndAnswersLive) | **POST**  /v3/business_data/google/questions_and_answers/live  |
[**trustpilotSearchTaskPost**](BusinessDataApi.md#trustpilotSearchTaskPost) | **POST**  /v3/business_data/trustpilot/search/task_post  |
[**trustpilotSearchTasksReady**](BusinessDataApi.md#trustpilotSearchTasksReady) | **GET**  /v3/business_data/trustpilot/search/tasks_ready  |
[**trustpilotSearchTaskGet**](BusinessDataApi.md#trustpilotSearchTaskGet) | **GET**  /v3/business_data/trustpilot/search/task_get/{id}  |
[**trustpilotReviewsTaskPost**](BusinessDataApi.md#trustpilotReviewsTaskPost) | **POST**  /v3/business_data/trustpilot/reviews/task_post  |
[**trustpilotReviewsTasksReady**](BusinessDataApi.md#trustpilotReviewsTasksReady) | **GET**  /v3/business_data/trustpilot/reviews/tasks_ready  |
[**trustpilotReviewsTaskGet**](BusinessDataApi.md#trustpilotReviewsTaskGet) | **GET**  /v3/business_data/trustpilot/reviews/task_get/{id}  |
[**businessDataTripadvisorLocations**](BusinessDataApi.md#businessDataTripadvisorLocations) | **GET**  /v3/business_data/tripadvisor/locations  |
[**businessDataTripadvisorLocationsCountry**](BusinessDataApi.md#businessDataTripadvisorLocationsCountry) | **GET**  /v3/business_data/tripadvisor/locations/{country}  |
[**businessDataTripadvisorLanguages**](BusinessDataApi.md#businessDataTripadvisorLanguages) | **GET**  /v3/business_data/tripadvisor/languages  |
[**tripadvisorSearchTaskPost**](BusinessDataApi.md#tripadvisorSearchTaskPost) | **POST**  /v3/business_data/tripadvisor/search/task_post  |
[**tripadvisorSearchTasksReady**](BusinessDataApi.md#tripadvisorSearchTasksReady) | **GET**  /v3/business_data/tripadvisor/search/tasks_ready  |
[**tripadvisorSearchTaskGet**](BusinessDataApi.md#tripadvisorSearchTaskGet) | **GET**  /v3/business_data/tripadvisor/search/task_get/{id}  |
[**tripadvisorReviewsTaskPost**](BusinessDataApi.md#tripadvisorReviewsTaskPost) | **POST**  /v3/business_data/tripadvisor/reviews/task_post  |
[**tripadvisorReviewsTasksReady**](BusinessDataApi.md#tripadvisorReviewsTasksReady) | **GET**  /v3/business_data/tripadvisor/reviews/tasks_ready  |
[**tripadvisorReviewsTaskGet**](BusinessDataApi.md#tripadvisorReviewsTaskGet) | **GET**  /v3/business_data/tripadvisor/reviews/task_get/{id}  |
[**socialMediaPinterestLive**](BusinessDataApi.md#socialMediaPinterestLive) | **POST**  /v3/business_data/social_media/pinterest/live  |
[**socialMediaFacebookLive**](BusinessDataApi.md#socialMediaFacebookLive) | **POST**  /v3/business_data/social_media/facebook/live  |
[**socialMediaRedditLive**](BusinessDataApi.md#socialMediaRedditLive) | **POST**  /v3/business_data/social_media/reddit/live  |

<a id="businessDataIdList"></a>
# **businessDataIdList**
> BusinessDataIdListResponseInfo businessDataIdList()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataIdListRequestInfo();
   task.datetime_from = "2025-07-14 10:28:26 +00:00";
   task.datetime_to = "2025-09-14 10:28:26 +00:00";
   task.limit = 100;
   task.offset = 0;
   task.sort = "desc";
 let response = await api.businessDataIdList([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataIdListRequestInfo[]&gt;**](BusinessDataIdListRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataIdListResponseInfo**](BusinessDataIdListResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="businessDataErrors"></a>
# **businessDataErrors**
> BusinessDataErrorsResponseInfo businessDataErrors()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataErrorsRequestInfo();
   task.limit = 10;
   task.offset = 0;
   task.filtered_function = "pingback_url";
 let response = await api.businessDataErrors([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataErrorsRequestInfo[]&gt;**](BusinessDataErrorsRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataErrorsResponseInfo**](BusinessDataErrorsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="businessDataBusinessListingsLocations"></a>
# **businessDataBusinessListingsLocations**
> BusinessDataBusinessListingsLocationsResponseInfo businessDataBusinessListingsLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.businessDataBusinessListingsLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataBusinessListingsLocationsResponseInfo**](BusinessDataBusinessListingsLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="businessListingsCategories"></a>
# **businessListingsCategories**
> BusinessDataBusinessListingsCategoriesResponseInfo businessListingsCategories()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.businessListingsCategories();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataBusinessListingsCategoriesResponseInfo**](BusinessDataBusinessListingsCategoriesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="businessListingsAvailableFilters"></a>
# **businessListingsAvailableFilters**
> BusinessDataBusinessListingsAvailableFiltersResponseInfo businessListingsAvailableFilters()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.businessListingsAvailableFilters();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataBusinessListingsAvailableFiltersResponseInfo**](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="businessListingsSearchLive"></a>
# **businessListingsSearchLive**
> BusinessDataBusinessListingsSearchLiveResponseInfo businessListingsSearchLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataBusinessListingsSearchLiveRequestInfo();
   task.categories = [
       "pizza_restaurant",
   ];
   task.description = "pizza";
   task.title = "pizza";
   task.is_claimed = true;
   task.location_coordinate = "53.476225,-2.243572,10";
   task.limit = 3;
 let response = await api.businessListingsSearchLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataBusinessListingsSearchLiveRequestInfo[]&gt;**](BusinessDataBusinessListingsSearchLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataBusinessListingsSearchLiveResponseInfo**](BusinessDataBusinessListingsSearchLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="businessListingsCategoriesAggregationLive"></a>
# **businessListingsCategoriesAggregationLive**
> BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo businessListingsCategoriesAggregationLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo();
   task.categories = [
       "pizza_restaurant",
   ];
   task.description = "pizza";
   task.title = "pizza";
   task.is_claimed = true;
   task.location_coordinate = "53.476225,-2.243572,10";
   task.limit = 3;
 let response = await api.businessListingsCategoriesAggregationLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo[]&gt;**](BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo**](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="businessDataGoogleLocations"></a>
# **businessDataGoogleLocations**
> BusinessDataGoogleLocationsResponseInfo businessDataGoogleLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.businessDataGoogleLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleLocationsResponseInfo**](BusinessDataGoogleLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="businessDataGoogleLocationsCountry"></a>
# **businessDataGoogleLocationsCountry**
> BusinessDataGoogleLocationsCountryResponseInfo businessDataGoogleLocationsCountry()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.businessDataGoogleLocationsCountry(country);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleLocationsCountryResponseInfo**](BusinessDataGoogleLocationsCountryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="businessDataGoogleLanguages"></a>
# **businessDataGoogleLanguages**
> BusinessDataGoogleLanguagesResponseInfo businessDataGoogleLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.businessDataGoogleLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleLanguagesResponseInfo**](BusinessDataGoogleLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleMyBusinessInfoTaskPost"></a>
# **googleMyBusinessInfoTaskPost**
> BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo googleMyBusinessInfoTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataGoogleMyBusinessInfoTaskPostRequestInfo();
   task.keyword = "RustyBrick, Inc.";
   task.location_name = "New York,New York,United States";
   task.language_code = "en";
 let response = await api.googleMyBusinessInfoTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataGoogleMyBusinessInfoTaskPostRequestInfo[]&gt;**](BusinessDataGoogleMyBusinessInfoTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo**](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleMyBusinessInfoTasksReady"></a>
# **googleMyBusinessInfoTasksReady**
> BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo googleMyBusinessInfoTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleMyBusinessInfoTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo**](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="businessDataTasksReady"></a>
# **businessDataTasksReady**
> BusinessDataTasksReadyResponseInfo businessDataTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.businessDataTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataTasksReadyResponseInfo**](BusinessDataTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleMyBusinessInfoTaskGet"></a>
# **googleMyBusinessInfoTaskGet**
> BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo googleMyBusinessInfoTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleMyBusinessInfoTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo**](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleMyBusinessInfoLive"></a>
# **googleMyBusinessInfoLive**
> BusinessDataGoogleMyBusinessInfoLiveResponseInfo googleMyBusinessInfoLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataGoogleMyBusinessInfoLiveRequestInfo();
   task.keyword = "RustyBrick, Inc.";
   task.location_name = "New York,New York,United States";
   task.language_code = "en";
 let response = await api.googleMyBusinessInfoLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataGoogleMyBusinessInfoLiveRequestInfo[]&gt;**](BusinessDataGoogleMyBusinessInfoLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataGoogleMyBusinessInfoLiveResponseInfo**](BusinessDataGoogleMyBusinessInfoLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleMyBusinessUpdatesTaskPost"></a>
# **googleMyBusinessUpdatesTaskPost**
> BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo googleMyBusinessUpdatesTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo();
   task.keyword = "RustyBrick, Inc.";
   task.location_name = "New York,New York,United States";
   task.language_code = "en";
 let response = await api.googleMyBusinessUpdatesTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo[]&gt;**](BusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo**](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleMyBusinessUpdatesTasksReady"></a>
# **googleMyBusinessUpdatesTasksReady**
> BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo googleMyBusinessUpdatesTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleMyBusinessUpdatesTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo**](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleMyBusinessUpdatesTaskGet"></a>
# **googleMyBusinessUpdatesTaskGet**
> BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo googleMyBusinessUpdatesTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleMyBusinessUpdatesTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo**](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleHotelSearchesTaskPost"></a>
# **googleHotelSearchesTaskPost**
> BusinessDataGoogleHotelSearchesTaskPostResponseInfo googleHotelSearchesTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataGoogleHotelSearchesTaskPostRequestInfo();
   task.keyword = "cheap hotel";
   task.priority = 2;
   task.location_name = "New York,New York,United States";
   task.language_code = "en";
   task.check_in = "2023-06-01";
   task.check_out = "2023-06-30";
   task.currency = "USD";
   task.adults = 2;
   task.children = [
       "14",
   ];
   task.sort_by = "highest_rating";
   task.tag = "example";
 let response = await api.googleHotelSearchesTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataGoogleHotelSearchesTaskPostRequestInfo[]&gt;**](BusinessDataGoogleHotelSearchesTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataGoogleHotelSearchesTaskPostResponseInfo**](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleHotelSearchesTasksReady"></a>
# **googleHotelSearchesTasksReady**
> BusinessDataGoogleHotelSearchesTasksReadyResponseInfo googleHotelSearchesTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleHotelSearchesTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleHotelSearchesTasksReadyResponseInfo**](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleHotelSearchesTaskGet"></a>
# **googleHotelSearchesTaskGet**
> BusinessDataGoogleHotelSearchesTaskGetResponseInfo googleHotelSearchesTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleHotelSearchesTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleHotelSearchesTaskGetResponseInfo**](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleHotelSearchesLive"></a>
# **googleHotelSearchesLive**
> BusinessDataGoogleHotelSearchesLiveResponseInfo googleHotelSearchesLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataGoogleHotelSearchesLiveRequestInfo();
   task.keyword = "cheap hotel";
   task.location_name = "New York,New York,United States";
   task.language_code = "en";
   task.check_in = "2023-06-01";
   task.check_out = "2023-06-30";
   task.currency = "USD";
   task.adults = 2;
   task.children = [
       "14",
   ];
   task.sort_by = "highest_rating";
   task.tag = "example";
 let response = await api.googleHotelSearchesLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataGoogleHotelSearchesLiveRequestInfo[]&gt;**](BusinessDataGoogleHotelSearchesLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataGoogleHotelSearchesLiveResponseInfo**](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleHotelInfoTaskPost"></a>
# **googleHotelInfoTaskPost**
> BusinessDataGoogleHotelInfoTaskPostResponseInfo googleHotelInfoTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataGoogleHotelInfoTaskPostRequestInfo();
   task.hotel_identifier = "ChYIq6SB--i6p6cpGgovbS8wN2s5ODZfEAE";
   task.location_name = "New York,New York,United States";
   task.language_code = "en";
   task.tag = "some_string_123";
   task.postback_url = "https://your-server.com/postbackscript.php";
   task.postback_data = "advanced";
 let response = await api.googleHotelInfoTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataGoogleHotelInfoTaskPostRequestInfo[]&gt;**](BusinessDataGoogleHotelInfoTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataGoogleHotelInfoTaskPostResponseInfo**](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleHotelInfoTasksReady"></a>
# **googleHotelInfoTasksReady**
> BusinessDataGoogleHotelInfoTasksReadyResponseInfo googleHotelInfoTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleHotelInfoTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleHotelInfoTasksReadyResponseInfo**](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleHotelInfoTaskGetAdvanced"></a>
# **googleHotelInfoTaskGetAdvanced**
> BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo googleHotelInfoTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleHotelInfoTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo**](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleHotelInfoTaskGetHtml"></a>
# **googleHotelInfoTaskGetHtml**
> BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo googleHotelInfoTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleHotelInfoTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo**](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleHotelInfoLiveAdvanced"></a>
# **googleHotelInfoLiveAdvanced**
> BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo googleHotelInfoLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo();
   task.hotel_identifier = "CgoI-KWyzenM_MV3EAE";
   task.location_name = "New York,New York,United States";
   task.language_code = "en";
 let response = await api.googleHotelInfoLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo[]&gt;**](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo**](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleHotelInfoLiveHtml"></a>
# **googleHotelInfoLiveHtml**
> BusinessDataGoogleHotelInfoLiveHtmlResponseInfo googleHotelInfoLiveHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataGoogleHotelInfoLiveHtmlRequestInfo();
   task.hotel_identifier = "ChYIq6SB--i6p6cpGgovbS8wN2s5ODZfEAE";
   task.location_name = "New York,New York,United States";
   task.language_code = "en";
 let response = await api.googleHotelInfoLiveHtml([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataGoogleHotelInfoLiveHtmlRequestInfo[]&gt;**](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataGoogleHotelInfoLiveHtmlResponseInfo**](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleReviewsTaskPost"></a>
# **googleReviewsTaskPost**
> BusinessDataGoogleReviewsTaskPostResponseInfo googleReviewsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataGoogleReviewsTaskPostRequestInfo();
   task.keyword = "hedonism wines";
   task.location_name = "London,England,United Kingdom";
   task.language_name = "English";
   task.depth = 50;
   task.sort_by = "highest_rating";
 let response = await api.googleReviewsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataGoogleReviewsTaskPostRequestInfo[]&gt;**](BusinessDataGoogleReviewsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataGoogleReviewsTaskPostResponseInfo**](BusinessDataGoogleReviewsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleReviewsTasksReady"></a>
# **googleReviewsTasksReady**
> BusinessDataGoogleReviewsTasksReadyResponseInfo googleReviewsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleReviewsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleReviewsTasksReadyResponseInfo**](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleReviewsTaskGet"></a>
# **googleReviewsTaskGet**
> BusinessDataGoogleReviewsTaskGetResponseInfo googleReviewsTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleReviewsTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleReviewsTaskGetResponseInfo**](BusinessDataGoogleReviewsTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleExtendedReviewsTaskPost"></a>
# **googleExtendedReviewsTaskPost**
> BusinessDataGoogleExtendedReviewsTaskPostResponseInfo googleExtendedReviewsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataGoogleExtendedReviewsTaskPostRequestInfo();
   task.cid = "17626775537598922320";
   task.location_name = "London,England,United Kingdom";
   task.language_name = "english";
 let response = await api.googleExtendedReviewsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataGoogleExtendedReviewsTaskPostRequestInfo[]&gt;**](BusinessDataGoogleExtendedReviewsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataGoogleExtendedReviewsTaskPostResponseInfo**](BusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleExtendedReviewsTasksReady"></a>
# **googleExtendedReviewsTasksReady**
> BusinessDataGoogleExtendedReviewsTasksReadyResponseInfo googleExtendedReviewsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleExtendedReviewsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleExtendedReviewsTasksReadyResponseInfo**](BusinessDataGoogleExtendedReviewsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleExtendedReviewsTaskGet"></a>
# **googleExtendedReviewsTaskGet**
> BusinessDataGoogleExtendedReviewsTaskGetResponseInfo googleExtendedReviewsTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleExtendedReviewsTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleExtendedReviewsTaskGetResponseInfo**](BusinessDataGoogleExtendedReviewsTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleQuestionsAndAnswersTaskPost"></a>
# **googleQuestionsAndAnswersTaskPost**
> BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo googleQuestionsAndAnswersTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo();
   task.keyword = "The Last Bookstore";
   task.location_name = "Los Angeles,California,United States";
   task.language_code = "en";
 let response = await api.googleQuestionsAndAnswersTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo[]&gt;**](BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo**](BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleQuestionsAndAnswersTasksReady"></a>
# **googleQuestionsAndAnswersTasksReady**
> BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo googleQuestionsAndAnswersTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleQuestionsAndAnswersTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo**](BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleQuestionsAndAnswersTaskGet"></a>
# **googleQuestionsAndAnswersTaskGet**
> BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo googleQuestionsAndAnswersTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.googleQuestionsAndAnswersTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo**](BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleQuestionsAndAnswersLive"></a>
# **googleQuestionsAndAnswersLive**
> BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo googleQuestionsAndAnswersLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo();
   task.keyword = "The Last Bookstore";
   task.location_name = "Los Angeles,California,United States";
   task.language_code = "en";
 let response = await api.googleQuestionsAndAnswersLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo[]&gt;**](BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo**](BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="trustpilotSearchTaskPost"></a>
# **trustpilotSearchTaskPost**
> BusinessDataTrustpilotSearchTaskPostResponseInfo trustpilotSearchTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataTrustpilotSearchTaskPostRequestInfo();
   task.keyword = "pizza restaurant";
   task.depth = 20;
 let response = await api.trustpilotSearchTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataTrustpilotSearchTaskPostRequestInfo[]&gt;**](BusinessDataTrustpilotSearchTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataTrustpilotSearchTaskPostResponseInfo**](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="trustpilotSearchTasksReady"></a>
# **trustpilotSearchTasksReady**
> BusinessDataTrustpilotSearchTasksReadyResponseInfo trustpilotSearchTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.trustpilotSearchTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataTrustpilotSearchTasksReadyResponseInfo**](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="trustpilotSearchTaskGet"></a>
# **trustpilotSearchTaskGet**
> BusinessDataTrustpilotSearchTaskGetResponseInfo trustpilotSearchTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.trustpilotSearchTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataTrustpilotSearchTaskGetResponseInfo**](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="trustpilotReviewsTaskPost"></a>
# **trustpilotReviewsTaskPost**
> BusinessDataTrustpilotReviewsTaskPostResponseInfo trustpilotReviewsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataTrustpilotReviewsTaskPostRequestInfo();
   task.domain = "www.thepearlsource.com";
   task.depth = 40;
 let response = await api.trustpilotReviewsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataTrustpilotReviewsTaskPostRequestInfo[]&gt;**](BusinessDataTrustpilotReviewsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataTrustpilotReviewsTaskPostResponseInfo**](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="trustpilotReviewsTasksReady"></a>
# **trustpilotReviewsTasksReady**
> BusinessDataTrustpilotReviewsTasksReadyResponseInfo trustpilotReviewsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.trustpilotReviewsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataTrustpilotReviewsTasksReadyResponseInfo**](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="trustpilotReviewsTaskGet"></a>
# **trustpilotReviewsTaskGet**
> BusinessDataTrustpilotReviewsTaskGetResponseInfo trustpilotReviewsTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.trustpilotReviewsTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataTrustpilotReviewsTaskGetResponseInfo**](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="businessDataTripadvisorLocations"></a>
# **businessDataTripadvisorLocations**
> BusinessDataTripadvisorLocationsResponseInfo businessDataTripadvisorLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.businessDataTripadvisorLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataTripadvisorLocationsResponseInfo**](BusinessDataTripadvisorLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="businessDataTripadvisorLocationsCountry"></a>
# **businessDataTripadvisorLocationsCountry**
> BusinessDataTripadvisorLocationsCountryResponseInfo businessDataTripadvisorLocationsCountry()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.businessDataTripadvisorLocationsCountry(country);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataTripadvisorLocationsCountryResponseInfo**](BusinessDataTripadvisorLocationsCountryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="businessDataTripadvisorLanguages"></a>
# **businessDataTripadvisorLanguages**
> BusinessDataTripadvisorLanguagesResponseInfo businessDataTripadvisorLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.businessDataTripadvisorLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataTripadvisorLanguagesResponseInfo**](BusinessDataTripadvisorLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="tripadvisorSearchTaskPost"></a>
# **tripadvisorSearchTaskPost**
> BusinessDataTripadvisorSearchTaskPostResponseInfo tripadvisorSearchTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataTripadvisorSearchTaskPostRequestInfo();
   task.keyword = "pizza";
   task.location_code = 1003854;
   task.depth = 30;
 let response = await api.tripadvisorSearchTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataTripadvisorSearchTaskPostRequestInfo[]&gt;**](BusinessDataTripadvisorSearchTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataTripadvisorSearchTaskPostResponseInfo**](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="tripadvisorSearchTasksReady"></a>
# **tripadvisorSearchTasksReady**
> BusinessDataTripadvisorSearchTasksReadyResponseInfo tripadvisorSearchTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.tripadvisorSearchTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataTripadvisorSearchTasksReadyResponseInfo**](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="tripadvisorSearchTaskGet"></a>
# **tripadvisorSearchTaskGet**
> BusinessDataTripadvisorSearchTaskGetResponseInfo tripadvisorSearchTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.tripadvisorSearchTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataTripadvisorSearchTaskGetResponseInfo**](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="tripadvisorReviewsTaskPost"></a>
# **tripadvisorReviewsTaskPost**
> BusinessDataTripadvisorReviewsTaskPostResponseInfo tripadvisorReviewsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataTripadvisorReviewsTaskPostRequestInfo();
   task.url_path = "Hotel_Review-g60763-d23462501-Reviews-Margaritaville_Times_Square-New_York_City_New_York.html";
   task.location_code = 1003854;
   task.tag = "some_string_123";
   task.pingback_url = "https://your-server.com/pingback.php?id=$id&tag=$tag";
 let response = await api.tripadvisorReviewsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataTripadvisorReviewsTaskPostRequestInfo[]&gt;**](BusinessDataTripadvisorReviewsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataTripadvisorReviewsTaskPostResponseInfo**](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="tripadvisorReviewsTasksReady"></a>
# **tripadvisorReviewsTasksReady**
> BusinessDataTripadvisorReviewsTasksReadyResponseInfo tripadvisorReviewsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.tripadvisorReviewsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataTripadvisorReviewsTasksReadyResponseInfo**](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="tripadvisorReviewsTaskGet"></a>
# **tripadvisorReviewsTaskGet**
> BusinessDataTripadvisorReviewsTaskGetResponseInfo tripadvisorReviewsTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.tripadvisorReviewsTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**BusinessDataTripadvisorReviewsTaskGetResponseInfo**](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="socialMediaPinterestLive"></a>
# **socialMediaPinterestLive**
> BusinessDataSocialMediaPinterestLiveResponseInfo socialMediaPinterestLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataSocialMediaPinterestLiveRequestInfo();
   task.targets = [
       "https://www.simplyrecipes.com/recipes/grilled_salmon_with_cucumber_mango_salsa/",
       "https://tasty.co/recipe/classic-lasagna",
       "https://www.allrecipes.com/recipe/255263/sicilian-roasted-chicken/",
   ];
   task.tag = "some_string_123";
 let response = await api.socialMediaPinterestLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataSocialMediaPinterestLiveRequestInfo[]&gt;**](BusinessDataSocialMediaPinterestLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataSocialMediaPinterestLiveResponseInfo**](BusinessDataSocialMediaPinterestLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="socialMediaFacebookLive"></a>
# **socialMediaFacebookLive**
> BusinessDataSocialMediaFacebookLiveResponseInfo socialMediaFacebookLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataSocialMediaFacebookLiveRequestInfo();
   task.targets = [
       "https://prnt.sc/",
       "https://developers.facebook.com/docs/plugins/like-button/",
       "https://www.shbarcelona.com/blog/en/salsa-dance-clubs-in-barcelona/",
   ];
   task.tag = "some_string_123";
 let response = await api.socialMediaFacebookLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataSocialMediaFacebookLiveRequestInfo[]&gt;**](BusinessDataSocialMediaFacebookLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataSocialMediaFacebookLiveResponseInfo**](BusinessDataSocialMediaFacebookLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="socialMediaRedditLive"></a>
# **socialMediaRedditLive**
> BusinessDataSocialMediaRedditLiveResponseInfo socialMediaRedditLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new BusinessDataApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new BusinessDataSocialMediaRedditLiveRequestInfo();
   task.targets = [
       "https://vk.com/",
       "https://ahrefs.com/",
       "https://google.com/",
       "https://twitter.com/",
       "https://reddit.com/",
       "https://facebook.com/",
   ];
   task.tag = "some_string_123";
 let response = await api.socialMediaRedditLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;BusinessDataSocialMediaRedditLiveRequestInfo[]&gt;**](BusinessDataSocialMediaRedditLiveRequestInfo[].md)|  | [optional] |



### Return type

[**BusinessDataSocialMediaRedditLiveResponseInfo**](BusinessDataSocialMediaRedditLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |