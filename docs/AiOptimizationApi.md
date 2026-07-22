# AiOptimizationApi

All URIs are relative to *https://api.dataforseo.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**chatGptLlmScraperLocations**](AiOptimizationApi.md#chatGptLlmScraperLocations) | **GET**  /v3/ai_optimization/chat_gpt/llm_scraper/locations  |
[**chatGptLlmScraperLocationsCountry**](AiOptimizationApi.md#chatGptLlmScraperLocationsCountry) | **GET**  /v3/ai_optimization/chat_gpt/llm_scraper/locations/{country}  |
[**chatGptLlmScraperLanguages**](AiOptimizationApi.md#chatGptLlmScraperLanguages) | **GET**  /v3/ai_optimization/chat_gpt/llm_scraper/languages  |
[**chatGptLlmScraperTaskPost**](AiOptimizationApi.md#chatGptLlmScraperTaskPost) | **POST**  /v3/ai_optimization/chat_gpt/llm_scraper/task_post  |
[**chatGptLlmScraperTasksReady**](AiOptimizationApi.md#chatGptLlmScraperTasksReady) | **GET**  /v3/ai_optimization/chat_gpt/llm_scraper/tasks_ready  |
[**chatGptLlmScraperTaskGetAdvanced**](AiOptimizationApi.md#chatGptLlmScraperTaskGetAdvanced) | **GET**  /v3/ai_optimization/chat_gpt/llm_scraper/task_get/advanced/{id}  |
[**chatGptLlmScraperTaskGetHtml**](AiOptimizationApi.md#chatGptLlmScraperTaskGetHtml) | **GET**  /v3/ai_optimization/chat_gpt/llm_scraper/task_get/html/{id}  |
[**chatGptLlmScraperLiveAdvanced**](AiOptimizationApi.md#chatGptLlmScraperLiveAdvanced) | **POST**  /v3/ai_optimization/chat_gpt/llm_scraper/live/advanced  |
[**chatGptLlmScraperLiveHtml**](AiOptimizationApi.md#chatGptLlmScraperLiveHtml) | **POST**  /v3/ai_optimization/chat_gpt/llm_scraper/live/html  |
[**chatGptLlmResponsesModels**](AiOptimizationApi.md#chatGptLlmResponsesModels) | **GET**  /v3/ai_optimization/chat_gpt/llm_responses/models  |
[**chatGptLlmResponsesLive**](AiOptimizationApi.md#chatGptLlmResponsesLive) | **POST**  /v3/ai_optimization/chat_gpt/llm_responses/live  |
[**chatGptLlmResponsesTaskPost**](AiOptimizationApi.md#chatGptLlmResponsesTaskPost) | **POST**  /v3/ai_optimization/chat_gpt/llm_responses/task_post  |
[**chatGptLlmResponsesTasksReady**](AiOptimizationApi.md#chatGptLlmResponsesTasksReady) | **GET**  /v3/ai_optimization/chat_gpt/llm_responses/tasks_ready  |
[**chatGptLlmResponsesTaskGet**](AiOptimizationApi.md#chatGptLlmResponsesTaskGet) | **GET**  /v3/ai_optimization/chat_gpt/llm_responses/task_get/{id}  |
[**claudeLlmResponsesModels**](AiOptimizationApi.md#claudeLlmResponsesModels) | **GET**  /v3/ai_optimization/claude/llm_responses/models  |
[**claudeLlmResponsesLive**](AiOptimizationApi.md#claudeLlmResponsesLive) | **POST**  /v3/ai_optimization/claude/llm_responses/live  |
[**claudeLlmResponsesTaskPost**](AiOptimizationApi.md#claudeLlmResponsesTaskPost) | **POST**  /v3/ai_optimization/claude/llm_responses/task_post  |
[**claudeLlmResponsesTasksReady**](AiOptimizationApi.md#claudeLlmResponsesTasksReady) | **GET**  /v3/ai_optimization/claude/llm_responses/tasks_ready  |
[**claudeLlmResponsesTaskGet**](AiOptimizationApi.md#claudeLlmResponsesTaskGet) | **GET**  /v3/ai_optimization/claude/llm_responses/task_get/{id}  |
[**geminiLlmResponsesModels**](AiOptimizationApi.md#geminiLlmResponsesModels) | **GET**  /v3/ai_optimization/gemini/llm_responses/models  |
[**geminiLlmResponsesTaskPost**](AiOptimizationApi.md#geminiLlmResponsesTaskPost) | **POST**  /v3/ai_optimization/gemini/llm_responses/task_post  |
[**geminiLlmResponsesTasksReady**](AiOptimizationApi.md#geminiLlmResponsesTasksReady) | **GET**  /v3/ai_optimization/gemini/llm_responses/tasks_ready  |
[**geminiLlmResponsesTaskGet**](AiOptimizationApi.md#geminiLlmResponsesTaskGet) | **GET**  /v3/ai_optimization/gemini/llm_responses/task_get/{id}  |
[**geminiLlmResponsesLive**](AiOptimizationApi.md#geminiLlmResponsesLive) | **POST**  /v3/ai_optimization/gemini/llm_responses/live  |
[**geminiLlmScraperLocations**](AiOptimizationApi.md#geminiLlmScraperLocations) | **GET**  /v3/ai_optimization/gemini/llm_scraper/locations  |
[**geminiLlmScraperLanguages**](AiOptimizationApi.md#geminiLlmScraperLanguages) | **GET**  /v3/ai_optimization/gemini/llm_scraper/languages  |
[**geminiLlmScraperTaskPost**](AiOptimizationApi.md#geminiLlmScraperTaskPost) | **POST**  /v3/ai_optimization/gemini/llm_scraper/task_post  |
[**geminiLlmScraperTasksReady**](AiOptimizationApi.md#geminiLlmScraperTasksReady) | **GET**  /v3/ai_optimization/gemini/llm_scraper/tasks_ready  |
[**geminiLlmScraperTaskGetAdvanced**](AiOptimizationApi.md#geminiLlmScraperTaskGetAdvanced) | **GET**  /v3/ai_optimization/gemini/llm_scraper/task_get/advanced/{id}  |
[**geminiLlmScraperTaskGetHtml**](AiOptimizationApi.md#geminiLlmScraperTaskGetHtml) | **GET**  /v3/ai_optimization/gemini/llm_scraper/task_get/html/{id}  |
[**geminiLlmScraperLiveAdvanced**](AiOptimizationApi.md#geminiLlmScraperLiveAdvanced) | **POST**  /v3/ai_optimization/gemini/llm_scraper/live/advanced  |
[**geminiLlmScraperLiveHtml**](AiOptimizationApi.md#geminiLlmScraperLiveHtml) | **POST**  /v3/ai_optimization/gemini/llm_scraper/live/html  |
[**perplexityLlmResponsesModels**](AiOptimizationApi.md#perplexityLlmResponsesModels) | **GET**  /v3/ai_optimization/perplexity/llm_responses/models  |
[**perplexityLlmResponsesLive**](AiOptimizationApi.md#perplexityLlmResponsesLive) | **POST**  /v3/ai_optimization/perplexity/llm_responses/live  |
[**aiKeywordDataAvailableFilters**](AiOptimizationApi.md#aiKeywordDataAvailableFilters) | **GET**  /v3/ai_optimization/ai_keyword_data/available_filters  |
[**aiKeywordDataLocationsAndLanguages**](AiOptimizationApi.md#aiKeywordDataLocationsAndLanguages) | **GET**  /v3/ai_optimization/ai_keyword_data/locations_and_languages  |
[**aiKeywordDataKeywordsSearchVolumeLive**](AiOptimizationApi.md#aiKeywordDataKeywordsSearchVolumeLive) | **POST**  /v3/ai_optimization/ai_keyword_data/keywords_search_volume/live  |
[**llmMentionsAvailableFilters**](AiOptimizationApi.md#llmMentionsAvailableFilters) | **GET**  /v3/ai_optimization/llm_mentions/available_filters  |
[**llmMentionsLocationsAndLanguages**](AiOptimizationApi.md#llmMentionsLocationsAndLanguages) | **GET**  /v3/ai_optimization/llm_mentions/locations_and_languages  |
[**llmMentionsSearchMentionsLive**](AiOptimizationApi.md#llmMentionsSearchMentionsLive) | **POST**  /v3/ai_optimization/llm_mentions/search_mentions/live  |
[**llmMentionsTargetMetricsLive**](AiOptimizationApi.md#llmMentionsTargetMetricsLive) | **POST**  /v3/ai_optimization/llm_mentions/target_metrics/live  |
[**llmMentionsMultiTargetMetricsLive**](AiOptimizationApi.md#llmMentionsMultiTargetMetricsLive) | **POST**  /v3/ai_optimization/llm_mentions/multi_target_metrics/live  |
[**llmMentionsTopMentionedDomainsLive**](AiOptimizationApi.md#llmMentionsTopMentionedDomainsLive) | **POST**  /v3/ai_optimization/llm_mentions/top_mentioned_domains/live  |
[**llmMentionsTopMentionedPagesLive**](AiOptimizationApi.md#llmMentionsTopMentionedPagesLive) | **POST**  /v3/ai_optimization/llm_mentions/top_mentioned_pages/live  |
[**llmMentionsTopMentionedBrandsLive**](AiOptimizationApi.md#llmMentionsTopMentionedBrandsLive) | **POST**  /v3/ai_optimization/llm_mentions/top_mentioned_brands/live  |
[**llmMentionsTopMentionedBrandCategoriesLive**](AiOptimizationApi.md#llmMentionsTopMentionedBrandCategoriesLive) | **POST**  /v3/ai_optimization/llm_mentions/top_mentioned_brand_categories/live  |
[**llmMentionsTargetMetricsLiteLive**](AiOptimizationApi.md#llmMentionsTargetMetricsLiteLive) | **POST**  /v3/ai_optimization/llm_mentions/target_metrics_lite/live  |
[**llmMentionsTopMentionedDomainsLiteLive**](AiOptimizationApi.md#llmMentionsTopMentionedDomainsLiteLive) | **POST**  /v3/ai_optimization/llm_mentions/top_mentioned_domains_lite/live  |
[**llmMentionsTopMentionedPagesLiteLive**](AiOptimizationApi.md#llmMentionsTopMentionedPagesLiteLive) | **POST**  /v3/ai_optimization/llm_mentions/top_mentioned_pages_lite/live  |
[**llmMentionsTopMentionedBrandsLiteLive**](AiOptimizationApi.md#llmMentionsTopMentionedBrandsLiteLive) | **POST**  /v3/ai_optimization/llm_mentions/top_mentioned_brands_lite/live  |
[**llmMentionsTopMentionedBrandCategoriesLiteLive**](AiOptimizationApi.md#llmMentionsTopMentionedBrandCategoriesLiteLive) | **POST**  /v3/ai_optimization/llm_mentions/top_mentioned_brand_categories_lite/live  |
[**llmMentionsHistoricalLive**](AiOptimizationApi.md#llmMentionsHistoricalLive) | **POST**  /v3/ai_optimization/llm_mentions/historical/live  |
[**llmMentionsTimeseriesDeltaLive**](AiOptimizationApi.md#llmMentionsTimeseriesDeltaLive) | **POST**  /v3/ai_optimization/llm_mentions/timeseries_delta/live  |
[**llmMentionsTimeseriesNewLostLive**](AiOptimizationApi.md#llmMentionsTimeseriesNewLostLive) | **POST**  /v3/ai_optimization/llm_mentions/timeseries_new_lost/live  |

<a id="chatGptLlmScraperLocations"></a>
# **chatGptLlmScraperLocations**
> AiOptimizationChatGptLlmScraperLocationsResponseInfo chatGptLlmScraperLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.chatGptLlmScraperLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationChatGptLlmScraperLocationsResponseInfo**](AiOptimizationChatGptLlmScraperLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="chatGptLlmScraperLocationsCountry"></a>
# **chatGptLlmScraperLocationsCountry**
> AiOptimizationChatGptLlmScraperLocationsCountryResponseInfo chatGptLlmScraperLocationsCountry()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.chatGptLlmScraperLocationsCountry(country);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationChatGptLlmScraperLocationsCountryResponseInfo**](AiOptimizationChatGptLlmScraperLocationsCountryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="chatGptLlmScraperLanguages"></a>
# **chatGptLlmScraperLanguages**
> AiOptimizationChatGptLlmScraperLanguagesResponseInfo chatGptLlmScraperLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.chatGptLlmScraperLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationChatGptLlmScraperLanguagesResponseInfo**](AiOptimizationChatGptLlmScraperLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="chatGptLlmScraperTaskPost"></a>
# **chatGptLlmScraperTaskPost**
> AiOptimizationChatGptLlmScraperTaskPostResponseInfo chatGptLlmScraperTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationChatGptLlmScraperTaskPostRequestInfo();
   task.language_code = "en";
   task.location_code = 2840;
   task.keyword = "what is chatgpt";
 let response = await api.chatGptLlmScraperTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationChatGptLlmScraperTaskPostRequestInfo[]&gt;**](AiOptimizationChatGptLlmScraperTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationChatGptLlmScraperTaskPostResponseInfo**](AiOptimizationChatGptLlmScraperTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="chatGptLlmScraperTasksReady"></a>
# **chatGptLlmScraperTasksReady**
> AiOptimizationChatGptLlmScraperTasksReadyResponseInfo chatGptLlmScraperTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.chatGptLlmScraperTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationChatGptLlmScraperTasksReadyResponseInfo**](AiOptimizationChatGptLlmScraperTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="chatGptLlmScraperTaskGetAdvanced"></a>
# **chatGptLlmScraperTaskGetAdvanced**
> AiOptimizationChatGptLlmScraperTaskGetAdvancedResponseInfo chatGptLlmScraperTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.chatGptLlmScraperTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationChatGptLlmScraperTaskGetAdvancedResponseInfo**](AiOptimizationChatGptLlmScraperTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="chatGptLlmScraperTaskGetHtml"></a>
# **chatGptLlmScraperTaskGetHtml**
> AiOptimizationChatGptLlmScraperTaskGetHtmlResponseInfo chatGptLlmScraperTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.chatGptLlmScraperTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationChatGptLlmScraperTaskGetHtmlResponseInfo**](AiOptimizationChatGptLlmScraperTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="chatGptLlmScraperLiveAdvanced"></a>
# **chatGptLlmScraperLiveAdvanced**
> AiOptimizationChatGptLlmScraperLiveAdvancedResponseInfo chatGptLlmScraperLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationChatGptLlmScraperLiveAdvancedRequestInfo();
   task.language_code = "en";
   task.location_code = 2840;
   task.keyword = "albert einstein";
 let response = await api.chatGptLlmScraperLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationChatGptLlmScraperLiveAdvancedRequestInfo[]&gt;**](AiOptimizationChatGptLlmScraperLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationChatGptLlmScraperLiveAdvancedResponseInfo**](AiOptimizationChatGptLlmScraperLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="chatGptLlmScraperLiveHtml"></a>
# **chatGptLlmScraperLiveHtml**
> AiOptimizationChatGptLlmScraperLiveHtmlResponseInfo chatGptLlmScraperLiveHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationChatGptLlmScraperLiveHtmlRequestInfo();
   task.language_code = "en";
   task.location_code = 2840;
   task.keyword = "albert einstein";
 let response = await api.chatGptLlmScraperLiveHtml([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationChatGptLlmScraperLiveHtmlRequestInfo[]&gt;**](AiOptimizationChatGptLlmScraperLiveHtmlRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationChatGptLlmScraperLiveHtmlResponseInfo**](AiOptimizationChatGptLlmScraperLiveHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="chatGptLlmResponsesModels"></a>
# **chatGptLlmResponsesModels**
> AiOptimizationChatGptLlmResponsesModelsResponseInfo chatGptLlmResponsesModels()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.chatGptLlmResponsesModels();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationChatGptLlmResponsesModelsResponseInfo**](AiOptimizationChatGptLlmResponsesModelsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="chatGptLlmResponsesLive"></a>
# **chatGptLlmResponsesLive**
> AiOptimizationChatGptLlmResponsesLiveResponseInfo chatGptLlmResponsesLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationChatGptLlmResponsesLiveRequestInfo();
   task.system_message = "communicate as if we are in a business meeting";
   task.message_chain = [
         new LlmMessageChainItem({
           role: "user",
           message: "Hello, what’s up?",
         }),
         new LlmMessageChainItem({
           role: "ai",
           message: "Hello! I’m doing well, thank you. How can I assist you today? Are there any specific topics or projects you’d like to discuss in our meeting?",
         }),
   ];
   task.max_output_tokens = 200;
   task.temperature = 0.3;
   task.top_p = 0.5;
   task.model_name = "gpt-4.1-mini";
   task.web_search = true;
   task.web_search_country_iso_code = "FR";
   task.web_search_city = "Paris";
   task.user_prompt = "provide information on how relevant the amusement park business is in France now";
 let response = await api.chatGptLlmResponsesLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationChatGptLlmResponsesLiveRequestInfo[]&gt;**](AiOptimizationChatGptLlmResponsesLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationChatGptLlmResponsesLiveResponseInfo**](AiOptimizationChatGptLlmResponsesLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="chatGptLlmResponsesTaskPost"></a>
# **chatGptLlmResponsesTaskPost**
> AiOptimizationChatGptLlmResponsesTaskPostResponseInfo chatGptLlmResponsesTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationChatGptLlmResponsesTaskPostRequestInfo();
   task.system_message = "communicate as if we are in a business meeting";
   task.message_chain = [
         new LlmMessageChainItem({
           role: "user",
           message: "Hello, what’s up?",
         }),
         new LlmMessageChainItem({
           role: "ai",
           message: "Hello! I’m doing well, thank you. How can I assist you today? Are there any specific topics or projects you’d like to discuss in our meeting?",
         }),
   ];
   task.model_name = "gpt-4.1-mini";
   task.user_prompt = "provide information on how relevant the amusement park business is in France now";
 let response = await api.chatGptLlmResponsesTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationChatGptLlmResponsesTaskPostRequestInfo[]&gt;**](AiOptimizationChatGptLlmResponsesTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationChatGptLlmResponsesTaskPostResponseInfo**](AiOptimizationChatGptLlmResponsesTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="chatGptLlmResponsesTasksReady"></a>
# **chatGptLlmResponsesTasksReady**
> AiOptimizationChatGptLlmResponsesTasksReadyResponseInfo chatGptLlmResponsesTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.chatGptLlmResponsesTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationChatGptLlmResponsesTasksReadyResponseInfo**](AiOptimizationChatGptLlmResponsesTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="chatGptLlmResponsesTaskGet"></a>
# **chatGptLlmResponsesTaskGet**
> AiOptimizationChatGptLlmResponsesTaskGetResponseInfo chatGptLlmResponsesTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.chatGptLlmResponsesTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationChatGptLlmResponsesTaskGetResponseInfo**](AiOptimizationChatGptLlmResponsesTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="claudeLlmResponsesModels"></a>
# **claudeLlmResponsesModels**
> AiOptimizationClaudeLlmResponsesModelsResponseInfo claudeLlmResponsesModels()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.claudeLlmResponsesModels();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationClaudeLlmResponsesModelsResponseInfo**](AiOptimizationClaudeLlmResponsesModelsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="claudeLlmResponsesLive"></a>
# **claudeLlmResponsesLive**
> AiOptimizationClaudeLlmResponsesLiveResponseInfo claudeLlmResponsesLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationClaudeLlmResponsesLiveRequestInfo();
   task.system_message = "communicate as if we are in a business meeting";
   task.message_chain = [
         new LlmMessageChainItem({
           role: "user",
           message: "Hello, what’s up?",
         }),
         new LlmMessageChainItem({
           role: "ai",
           message: "Hello! I’m doing well, thank you. How can I assist you today? Are there any specific topics or projects you’d like to discuss in our meeting?",
         }),
   ];
   task.max_output_tokens = 200;
   task.model_name = "claude-opus-4-0";
   task.temperature = 0.3;
   task.web_search = true;
   task.web_search_country_iso_code = "FR";
   task.user_prompt = "provide information on how relevant the amusement park business is in France now";
 let response = await api.claudeLlmResponsesLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationClaudeLlmResponsesLiveRequestInfo[]&gt;**](AiOptimizationClaudeLlmResponsesLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationClaudeLlmResponsesLiveResponseInfo**](AiOptimizationClaudeLlmResponsesLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="claudeLlmResponsesTaskPost"></a>
# **claudeLlmResponsesTaskPost**
> AiOptimizationClaudeLlmResponsesTaskPostResponseInfo claudeLlmResponsesTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationClaudeLlmResponsesTaskPostRequestInfo();
   task.system_message = "communicate as if we are in a business meeting";
   task.message_chain = [
         new LlmMessageChainItem({
           role: "user",
           message: "Hello, what’s up?",
         }),
         new LlmMessageChainItem({
           role: "ai",
           message: "Hello! I’m doing well, thank you. How can I assist you today? Are there any specific topics or projects you’d like to discuss in our meeting?",
         }),
   ];
   task.max_output_tokens = 1024;
   task.temperature = 0.3;
   task.web_search_country_iso_code = "FR";
   task.model_name = "claude-sonnet-4-0";
   task.web_search = true;
   task.user_prompt = "provide information on how relevant the amusement park business is in France now";
 let response = await api.claudeLlmResponsesTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationClaudeLlmResponsesTaskPostRequestInfo[]&gt;**](AiOptimizationClaudeLlmResponsesTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationClaudeLlmResponsesTaskPostResponseInfo**](AiOptimizationClaudeLlmResponsesTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="claudeLlmResponsesTasksReady"></a>
# **claudeLlmResponsesTasksReady**
> AiOptimizationClaudeLlmResponsesTasksReadyResponseInfo claudeLlmResponsesTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.claudeLlmResponsesTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationClaudeLlmResponsesTasksReadyResponseInfo**](AiOptimizationClaudeLlmResponsesTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="claudeLlmResponsesTaskGet"></a>
# **claudeLlmResponsesTaskGet**
> AiOptimizationClaudeLlmResponsesTaskGetResponseInfo claudeLlmResponsesTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.claudeLlmResponsesTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationClaudeLlmResponsesTaskGetResponseInfo**](AiOptimizationClaudeLlmResponsesTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="geminiLlmResponsesModels"></a>
# **geminiLlmResponsesModels**
> AiOptimizationGeminiLlmResponsesModelsResponseInfo geminiLlmResponsesModels()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.geminiLlmResponsesModels();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationGeminiLlmResponsesModelsResponseInfo**](AiOptimizationGeminiLlmResponsesModelsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="geminiLlmResponsesTaskPost"></a>
# **geminiLlmResponsesTaskPost**
> AiOptimizationGeminiLlmResponsesTaskPostResponseInfo geminiLlmResponsesTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationGeminiLlmResponsesTaskPostRequestInfo();
   task.system_message = "communicate as if we are in a business meeting";
   task.message_chain = [
         new LlmMessageChainItem({
           role: "user",
           message: "Hello, what’s up?",
         }),
         new LlmMessageChainItem({
           role: "ai",
           message: "Hello! I’m doing well, thank you. How can I assist you today? Are there any specific topics or projects you’d like to discuss in our meeting?",
         }),
   ];
   task.model_name = "gemini-2.5-flash";
   task.user_prompt = "provide information on how relevant the amusement park business is in France now";
 let response = await api.geminiLlmResponsesTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationGeminiLlmResponsesTaskPostRequestInfo[]&gt;**](AiOptimizationGeminiLlmResponsesTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationGeminiLlmResponsesTaskPostResponseInfo**](AiOptimizationGeminiLlmResponsesTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="geminiLlmResponsesTasksReady"></a>
# **geminiLlmResponsesTasksReady**
> AiOptimizationGeminiLlmResponsesTasksReadyResponseInfo geminiLlmResponsesTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.geminiLlmResponsesTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationGeminiLlmResponsesTasksReadyResponseInfo**](AiOptimizationGeminiLlmResponsesTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="geminiLlmResponsesTaskGet"></a>
# **geminiLlmResponsesTaskGet**
> AiOptimizationGeminiLlmResponsesTaskGetResponseInfo geminiLlmResponsesTaskGet()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.geminiLlmResponsesTaskGet(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationGeminiLlmResponsesTaskGetResponseInfo**](AiOptimizationGeminiLlmResponsesTaskGetResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="geminiLlmResponsesLive"></a>
# **geminiLlmResponsesLive**
> AiOptimizationGeminiLlmResponsesLiveResponseInfo geminiLlmResponsesLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationGeminiLlmResponsesLiveRequestInfo();
   task.system_message = "communicate as if we are in a business meeting";
   task.message_chain = [
         new LlmMessageChainItem({
           role: "user",
           message: "Hello, what’s up?",
         }),
         new LlmMessageChainItem({
           role: "ai",
           message: "Hello! I’m doing well, thank you. How can I assist you today? Are there any specific topics or projects you’d like to discuss in our meeting?",
         }),
   ];
   task.max_output_tokens = 200;
   task.temperature = 0.3;
   task.top_p = 0.5;
   task.model_name = "gemini-2.5-flash";
   task.web_search = true;
   task.user_prompt = "provide information on how relevant the amusement park business is in France now";
 let response = await api.geminiLlmResponsesLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationGeminiLlmResponsesLiveRequestInfo[]&gt;**](AiOptimizationGeminiLlmResponsesLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationGeminiLlmResponsesLiveResponseInfo**](AiOptimizationGeminiLlmResponsesLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="geminiLlmScraperLocations"></a>
# **geminiLlmScraperLocations**
> AiOptimizationGeminiLlmScraperLocationsResponseInfo geminiLlmScraperLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.geminiLlmScraperLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationGeminiLlmScraperLocationsResponseInfo**](AiOptimizationGeminiLlmScraperLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="geminiLlmScraperLanguages"></a>
# **geminiLlmScraperLanguages**
> AiOptimizationGeminiLlmScraperLanguagesResponseInfo geminiLlmScraperLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.geminiLlmScraperLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationGeminiLlmScraperLanguagesResponseInfo**](AiOptimizationGeminiLlmScraperLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="geminiLlmScraperTaskPost"></a>
# **geminiLlmScraperTaskPost**
> AiOptimizationGeminiLlmScraperTaskPostResponseInfo geminiLlmScraperTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationGeminiLlmScraperTaskPostRequestInfo();
   task.language_code = "en";
   task.location_code = 2840;
   task.keyword = "albert einstein";
 let response = await api.geminiLlmScraperTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationGeminiLlmScraperTaskPostRequestInfo[]&gt;**](AiOptimizationGeminiLlmScraperTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationGeminiLlmScraperTaskPostResponseInfo**](AiOptimizationGeminiLlmScraperTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="geminiLlmScraperTasksReady"></a>
# **geminiLlmScraperTasksReady**
> AiOptimizationGeminiLlmScraperTasksReadyResponseInfo geminiLlmScraperTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.geminiLlmScraperTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationGeminiLlmScraperTasksReadyResponseInfo**](AiOptimizationGeminiLlmScraperTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="geminiLlmScraperTaskGetAdvanced"></a>
# **geminiLlmScraperTaskGetAdvanced**
> AiOptimizationGeminiLlmScraperTaskGetAdvancedResponseInfo geminiLlmScraperTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.geminiLlmScraperTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationGeminiLlmScraperTaskGetAdvancedResponseInfo**](AiOptimizationGeminiLlmScraperTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="geminiLlmScraperTaskGetHtml"></a>
# **geminiLlmScraperTaskGetHtml**
> AiOptimizationGeminiLlmScraperTaskGetHtmlResponseInfo geminiLlmScraperTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
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
 let response = await api.geminiLlmScraperTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationGeminiLlmScraperTaskGetHtmlResponseInfo**](AiOptimizationGeminiLlmScraperTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="geminiLlmScraperLiveAdvanced"></a>
# **geminiLlmScraperLiveAdvanced**
> AiOptimizationGeminiLlmScraperLiveAdvancedResponseInfo geminiLlmScraperLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationGeminiLlmScraperLiveAdvancedRequestInfo();
   task.language_code = "en";
   task.location_code = 2840;
   task.keyword = "albert einstein";
 let response = await api.geminiLlmScraperLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationGeminiLlmScraperLiveAdvancedRequestInfo[]&gt;**](AiOptimizationGeminiLlmScraperLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationGeminiLlmScraperLiveAdvancedResponseInfo**](AiOptimizationGeminiLlmScraperLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="geminiLlmScraperLiveHtml"></a>
# **geminiLlmScraperLiveHtml**
> AiOptimizationGeminiLlmScraperLiveHtmlResponseInfo geminiLlmScraperLiveHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationGeminiLlmScraperLiveHtmlRequestInfo();
   task.language_code = "en";
   task.location_code = 2840;
   task.keyword = "albert einstein";
 let response = await api.geminiLlmScraperLiveHtml([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationGeminiLlmScraperLiveHtmlRequestInfo[]&gt;**](AiOptimizationGeminiLlmScraperLiveHtmlRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationGeminiLlmScraperLiveHtmlResponseInfo**](AiOptimizationGeminiLlmScraperLiveHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="perplexityLlmResponsesModels"></a>
# **perplexityLlmResponsesModels**
> AiOptimizationPerplexityLlmResponsesModelsResponseInfo perplexityLlmResponsesModels()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.perplexityLlmResponsesModels();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationPerplexityLlmResponsesModelsResponseInfo**](AiOptimizationPerplexityLlmResponsesModelsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="perplexityLlmResponsesLive"></a>
# **perplexityLlmResponsesLive**
> AiOptimizationPerplexityLlmResponsesLiveResponseInfo perplexityLlmResponsesLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationPerplexityLlmResponsesLiveRequestInfo();
   task.system_message = "communicate as if we are in a business meeting";
   task.message_chain = [
         new LlmMessageChainItem({
           role: "user",
           message: "Hello, what’s up?",
         }),
         new LlmMessageChainItem({
           role: "ai",
           message: "Hello! I’m doing well, thank you. How can I assist you today? Are there any specific topics or projects you’d like to discuss in our meeting?",
         }),
   ];
   task.max_output_tokens = 200;
   task.temperature = 0.3;
   task.top_p = 0.5;
   task.web_search_country_iso_code = "FR";
   task.model_name = "sonar";
   task.user_prompt = "provide information on how relevant the amusement park business is in France now";
 let response = await api.perplexityLlmResponsesLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationPerplexityLlmResponsesLiveRequestInfo[]&gt;**](AiOptimizationPerplexityLlmResponsesLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationPerplexityLlmResponsesLiveResponseInfo**](AiOptimizationPerplexityLlmResponsesLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="aiKeywordDataAvailableFilters"></a>
# **aiKeywordDataAvailableFilters**
> AiOptimizationAiKeywordDataAvailableFiltersResponseInfo aiKeywordDataAvailableFilters()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.aiKeywordDataAvailableFilters();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationAiKeywordDataAvailableFiltersResponseInfo**](AiOptimizationAiKeywordDataAvailableFiltersResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="aiKeywordDataLocationsAndLanguages"></a>
# **aiKeywordDataLocationsAndLanguages**
> AiOptimizationAiKeywordDataLocationsAndLanguagesResponseInfo aiKeywordDataLocationsAndLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.aiKeywordDataLocationsAndLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationAiKeywordDataLocationsAndLanguagesResponseInfo**](AiOptimizationAiKeywordDataLocationsAndLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="aiKeywordDataKeywordsSearchVolumeLive"></a>
# **aiKeywordDataKeywordsSearchVolumeLive**
> AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveResponseInfo aiKeywordDataKeywordsSearchVolumeLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveRequestInfo();
   task.language_name = "English";
   task.location_code = 2840;
   task.keywords = [
       "iphone",
       "seo",
   ];
 let response = await api.aiKeywordDataKeywordsSearchVolumeLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveRequestInfo[]&gt;**](AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveResponseInfo**](AiOptimizationAiKeywordDataKeywordsSearchVolumeLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="llmMentionsAvailableFilters"></a>
# **llmMentionsAvailableFilters**
> AiOptimizationLlmMentionsAvailableFiltersResponseInfo llmMentionsAvailableFilters()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.llmMentionsAvailableFilters();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationLlmMentionsAvailableFiltersResponseInfo**](AiOptimizationLlmMentionsAvailableFiltersResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="llmMentionsLocationsAndLanguages"></a>
# **llmMentionsLocationsAndLanguages**
> AiOptimizationLlmMentionsLocationsAndLanguagesResponseInfo llmMentionsLocationsAndLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.llmMentionsLocationsAndLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AiOptimizationLlmMentionsLocationsAndLanguagesResponseInfo**](AiOptimizationLlmMentionsLocationsAndLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="llmMentionsSearchMentionsLive"></a>
# **llmMentionsSearchMentionsLive**
> AiOptimizationLlmMentionsSearchMentionsLiveResponseInfo llmMentionsSearchMentionsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationLlmMentionsSearchMentionsLiveRequestInfo();
   task.language_name = "English";
   task.location_code = 2840;
   task.target = [
         new BaseAiOptimizationLLmMentionsTargetElement({
           domain: "dataforseo.com",
           search_filter: "exclude",
         }),
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "bmw",
           search_scope: ,
         }),
   ];
   task.platform = "google";
   task.filters = [
       ,
   ];
   task.order_by = [
       "ai_search_volume,desc",
   ];
   task.offset = 0;
   task.limit = 3;
 let response = await api.llmMentionsSearchMentionsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationLlmMentionsSearchMentionsLiveRequestInfo[]&gt;**](AiOptimizationLlmMentionsSearchMentionsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationLlmMentionsSearchMentionsLiveResponseInfo**](AiOptimizationLlmMentionsSearchMentionsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="llmMentionsTargetMetricsLive"></a>
# **llmMentionsTargetMetricsLive**
> AiOptimizationLlmMentionsTargetMetricsLiveResponseInfo llmMentionsTargetMetricsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationLlmMentionsTargetMetricsLiveRequestInfo();
   task.language_code = "en";
   task.location_code = 2840;
   task.platform = "chat_gpt";
   task.target = [
         new BaseAiOptimizationLLmMentionsTargetElement({
           domain: "en.wikipedia.org",
           search_filter: "exclude",
         }),
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "bmw",
           search_scope: ,
         }),
   ];
   task.initial_dataset_filters = [
       ,
   ];
   task.internal_list_limit = 10;
 let response = await api.llmMentionsTargetMetricsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationLlmMentionsTargetMetricsLiveRequestInfo[]&gt;**](AiOptimizationLlmMentionsTargetMetricsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationLlmMentionsTargetMetricsLiveResponseInfo**](AiOptimizationLlmMentionsTargetMetricsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="llmMentionsMultiTargetMetricsLive"></a>
# **llmMentionsMultiTargetMetricsLive**
> AiOptimizationLlmMentionsMultiTargetMetricsLiveResponseInfo llmMentionsMultiTargetMetricsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationLlmMentionsMultiTargetMetricsLiveRequestInfo();
   task.language_code = "en";
   task.location_code = 2840;
   task.platform = "google";
   task.targets = [
         new AiOptimizationLLmMentionsMultiTargetMetricsRequestInfo({
           key: "chat_gpt",
           target: ,
         }),
         new AiOptimizationLLmMentionsMultiTargetMetricsRequestInfo({
           key: "claude",
           target: ,
         }),
         new AiOptimizationLLmMentionsMultiTargetMetricsRequestInfo({
           key: "gemini",
           target: ,
         }),
         new AiOptimizationLLmMentionsMultiTargetMetricsRequestInfo({
           key: "perplexity",
           target: ,
         }),
   ];
   task.initial_dataset_filters = [
       ,
   ];
   task.internal_list_limit = 5;
 let response = await api.llmMentionsMultiTargetMetricsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationLlmMentionsMultiTargetMetricsLiveRequestInfo[]&gt;**](AiOptimizationLlmMentionsMultiTargetMetricsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationLlmMentionsMultiTargetMetricsLiveResponseInfo**](AiOptimizationLlmMentionsMultiTargetMetricsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="llmMentionsTopMentionedDomainsLive"></a>
# **llmMentionsTopMentionedDomainsLive**
> AiOptimizationLlmMentionsTopMentionedDomainsLiveResponseInfo llmMentionsTopMentionedDomainsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationLlmMentionsTopMentionedDomainsLiveRequestInfo();
   task.language_code = "en";
   task.location_code = 2840;
   task.platform = "chat_gpt";
   task.target = [
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "bmw",
           search_scope: ,
         }),
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "auto",
           search_scope: ,
           match_type: "partial_match",
         }),
   ];
   task.links_scope = "sources";
   task.initial_dataset_filters = [
       ,
   ];
   task.limit = 3;
   task.internal_list_limit = 2;
 let response = await api.llmMentionsTopMentionedDomainsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationLlmMentionsTopMentionedDomainsLiveRequestInfo[]&gt;**](AiOptimizationLlmMentionsTopMentionedDomainsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationLlmMentionsTopMentionedDomainsLiveResponseInfo**](AiOptimizationLlmMentionsTopMentionedDomainsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="llmMentionsTopMentionedPagesLive"></a>
# **llmMentionsTopMentionedPagesLive**
> AiOptimizationLlmMentionsTopMentionedPagesLiveResponseInfo llmMentionsTopMentionedPagesLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationLlmMentionsTopMentionedPagesLiveRequestInfo();
   task.language_code = "en";
   task.location_code = 2840;
   task.platform = "chat_gpt";
   task.target = [
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "bmw",
           search_scope: ,
         }),
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "auto",
           search_scope: ,
           match_type: "partial_match",
         }),
   ];
   task.links_scope = "sources";
   task.initial_dataset_filters = [
       ,
   ];
   task.limit = 3;
   task.internal_list_limit = 2;
 let response = await api.llmMentionsTopMentionedPagesLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationLlmMentionsTopMentionedPagesLiveRequestInfo[]&gt;**](AiOptimizationLlmMentionsTopMentionedPagesLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationLlmMentionsTopMentionedPagesLiveResponseInfo**](AiOptimizationLlmMentionsTopMentionedPagesLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="llmMentionsTopMentionedBrandsLive"></a>
# **llmMentionsTopMentionedBrandsLive**
> AiOptimizationLlmMentionsTopMentionedBrandsLiveResponseInfo llmMentionsTopMentionedBrandsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationLlmMentionsTopMentionedBrandsLiveRequestInfo();
   task.language_code = "en";
   task.location_code = 2840;
   task.platform = "chat_gpt";
   task.target = [
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "bmw",
           search_scope: ,
         }),
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "auto",
           search_scope: ,
           match_type: "partial_match",
         }),
   ];
   task.initial_dataset_filters = [
       ,
   ];
   task.limit = 3;
   task.internal_list_limit = 2;
 let response = await api.llmMentionsTopMentionedBrandsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationLlmMentionsTopMentionedBrandsLiveRequestInfo[]&gt;**](AiOptimizationLlmMentionsTopMentionedBrandsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationLlmMentionsTopMentionedBrandsLiveResponseInfo**](AiOptimizationLlmMentionsTopMentionedBrandsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="llmMentionsTopMentionedBrandCategoriesLive"></a>
# **llmMentionsTopMentionedBrandCategoriesLive**
> AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiveResponseInfo llmMentionsTopMentionedBrandCategoriesLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiveRequestInfo();
   task.language_code = "en";
   task.location_code = 2840;
   task.platform = "chat_gpt";
   task.target = [
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "bmw",
           search_scope: ,
         }),
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "auto",
           search_scope: ,
           match_type: "partial_match",
         }),
   ];
   task.initial_dataset_filters = [
       ,
   ];
   task.limit = 3;
   task.internal_list_limit = 2;
 let response = await api.llmMentionsTopMentionedBrandCategoriesLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiveRequestInfo[]&gt;**](AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiveResponseInfo**](AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="llmMentionsTargetMetricsLiteLive"></a>
# **llmMentionsTargetMetricsLiteLive**
> AiOptimizationLlmMentionsTargetMetricsLiteLiveResponseInfo llmMentionsTargetMetricsLiteLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationLlmMentionsTargetMetricsLiteLiveRequestInfo();
   task.language_code = "es";
   task.location_code = 2840;
   task.platform = "google";
   task.target = [
         new BaseAiOptimizationLLmMentionsTargetElement({
           domain: "en.wikipedia.org",
           search_filter: "exclude",
         }),
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "bmw",
           search_scope: ,
         }),
   ];
   task.initial_dataset_filters = [
       ,
   ];
   task.limit = 6;
 let response = await api.llmMentionsTargetMetricsLiteLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationLlmMentionsTargetMetricsLiteLiveRequestInfo[]&gt;**](AiOptimizationLlmMentionsTargetMetricsLiteLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationLlmMentionsTargetMetricsLiteLiveResponseInfo**](AiOptimizationLlmMentionsTargetMetricsLiteLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="llmMentionsTopMentionedDomainsLiteLive"></a>
# **llmMentionsTopMentionedDomainsLiteLive**
> AiOptimizationLlmMentionsTopMentionedDomainsLiteLiveResponseInfo llmMentionsTopMentionedDomainsLiteLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationLlmMentionsTopMentionedDomainsLiteLiveRequestInfo();
   task.language_code = "en";
   task.location_code = 2840;
   task.platform = "chat_gpt";
   task.target = [
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "bmw",
           search_scope: ,
         }),
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "auto",
           search_scope: ,
           match_type: "partial_match",
         }),
   ];
   task.links_scope = "sources";
   task.initial_dataset_filters = [
       ,
   ];
   task.limit = 3;
   task.internal_list_limit = 2;
 let response = await api.llmMentionsTopMentionedDomainsLiteLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationLlmMentionsTopMentionedDomainsLiteLiveRequestInfo[]&gt;**](AiOptimizationLlmMentionsTopMentionedDomainsLiteLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationLlmMentionsTopMentionedDomainsLiteLiveResponseInfo**](AiOptimizationLlmMentionsTopMentionedDomainsLiteLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="llmMentionsTopMentionedPagesLiteLive"></a>
# **llmMentionsTopMentionedPagesLiteLive**
> AiOptimizationLlmMentionsTopMentionedPagesLiteLiveResponseInfo llmMentionsTopMentionedPagesLiteLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationLlmMentionsTopMentionedPagesLiteLiveRequestInfo();
   task.language_code = "en";
   task.location_code = 2840;
   task.platform = "chat_gpt";
   task.target = [
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "bmw",
           search_scope: ,
         }),
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "auto",
           search_scope: ,
           match_type: "partial_match",
         }),
   ];
   task.links_scope = "sources";
   task.initial_dataset_filters = [
       ,
   ];
   task.limit = 3;
   task.internal_list_limit = 2;
 let response = await api.llmMentionsTopMentionedPagesLiteLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationLlmMentionsTopMentionedPagesLiteLiveRequestInfo[]&gt;**](AiOptimizationLlmMentionsTopMentionedPagesLiteLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationLlmMentionsTopMentionedPagesLiteLiveResponseInfo**](AiOptimizationLlmMentionsTopMentionedPagesLiteLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="llmMentionsTopMentionedBrandsLiteLive"></a>
# **llmMentionsTopMentionedBrandsLiteLive**
> AiOptimizationLlmMentionsTopMentionedBrandsLiteLiveResponseInfo llmMentionsTopMentionedBrandsLiteLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationLlmMentionsTopMentionedBrandsLiteLiveRequestInfo();
   task.language_code = "en";
   task.location_code = 2840;
   task.platform = "chat_gpt";
   task.target = [
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "bmw",
           search_scope: ,
         }),
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "auto",
           search_scope: ,
           match_type: "partial_match",
         }),
   ];
   task.initial_dataset_filters = [
       ,
   ];
   task.limit = 3;
   task.internal_list_limit = 2;
 let response = await api.llmMentionsTopMentionedBrandsLiteLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationLlmMentionsTopMentionedBrandsLiteLiveRequestInfo[]&gt;**](AiOptimizationLlmMentionsTopMentionedBrandsLiteLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationLlmMentionsTopMentionedBrandsLiteLiveResponseInfo**](AiOptimizationLlmMentionsTopMentionedBrandsLiteLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="llmMentionsTopMentionedBrandCategoriesLiteLive"></a>
# **llmMentionsTopMentionedBrandCategoriesLiteLive**
> AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveResponseInfo llmMentionsTopMentionedBrandCategoriesLiteLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveRequestInfo();
   task.language_code = "en";
   task.location_code = 2840;
   task.platform = "chat_gpt";
   task.target = [
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "bmw",
           search_scope: ,
         }),
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "auto",
           search_scope: ,
           match_type: "partial_match",
         }),
   ];
   task.initial_dataset_filters = [
       ,
   ];
   task.limit = 3;
   task.internal_list_limit = 2;
 let response = await api.llmMentionsTopMentionedBrandCategoriesLiteLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveRequestInfo[]&gt;**](AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveResponseInfo**](AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="llmMentionsHistoricalLive"></a>
# **llmMentionsHistoricalLive**
> AiOptimizationLlmMentionsHistoricalLiveResponseInfo llmMentionsHistoricalLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationLlmMentionsHistoricalLiveRequestInfo();
   task.language_code = "es";
   task.location_code = 2840;
   task.platform = "google";
   task.target = [
         new BaseAiOptimizationLLmMentionsTargetElement({
           domain: "en.wikipedia.org",
           search_filter: "exclude",
         }),
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "bmw",
           search_scope: ,
         }),
   ];
 let response = await api.llmMentionsHistoricalLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationLlmMentionsHistoricalLiveRequestInfo[]&gt;**](AiOptimizationLlmMentionsHistoricalLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationLlmMentionsHistoricalLiveResponseInfo**](AiOptimizationLlmMentionsHistoricalLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="llmMentionsTimeseriesDeltaLive"></a>
# **llmMentionsTimeseriesDeltaLive**
> AiOptimizationLlmMentionsTimeseriesDeltaLiveResponseInfo llmMentionsTimeseriesDeltaLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationLlmMentionsTimeseriesDeltaLiveRequestInfo();
   task.language_name = "English";
   task.location_code = 2840;
   task.target = [
         new BaseAiOptimizationLLmMentionsTargetElement({
           domain: "dataforseo.com",
           search_filter: "exclude",
         }),
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "bmw",
           search_scope: ,
         }),
   ];
   task.platform = "google";
   task.group_range = "month";
 let response = await api.llmMentionsTimeseriesDeltaLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationLlmMentionsTimeseriesDeltaLiveRequestInfo[]&gt;**](AiOptimizationLlmMentionsTimeseriesDeltaLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationLlmMentionsTimeseriesDeltaLiveResponseInfo**](AiOptimizationLlmMentionsTimeseriesDeltaLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="llmMentionsTimeseriesNewLostLive"></a>
# **llmMentionsTimeseriesNewLostLive**
> AiOptimizationLlmMentionsTimeseriesNewLostLiveResponseInfo llmMentionsTimeseriesNewLostLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AiOptimizationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AiOptimizationLlmMentionsTimeseriesNewLostLiveRequestInfo();
   task.language_name = "English";
   task.location_code = 2840;
   task.target = [
         new BaseAiOptimizationLLmMentionsTargetElement({
           domain: "dataforseo.com",
           search_filter: "exclude",
         }),
         new BaseAiOptimizationLLmMentionsTargetElement({
           keyword: "serp",
           search_scope: ,
         }),
   ];
   task.platform = "google";
   task.group_range = "month";
 let response = await api.llmMentionsTimeseriesNewLostLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AiOptimizationLlmMentionsTimeseriesNewLostLiveRequestInfo[]&gt;**](AiOptimizationLlmMentionsTimeseriesNewLostLiveRequestInfo[].md)|  | [optional] |



### Return type

[**AiOptimizationLlmMentionsTimeseriesNewLostLiveResponseInfo**](AiOptimizationLlmMentionsTimeseriesNewLostLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |