# ContentGenerationApi

All URIs are relative to *https://api.dataforseo.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**generateLive**](ContentGenerationApi.md#generateLive) | **POST**  /v3/content_generation/generate/live  |
[**generateTextLive**](ContentGenerationApi.md#generateTextLive) | **POST**  /v3/content_generation/generate_text/live  |
[**generateMetaTagsLive**](ContentGenerationApi.md#generateMetaTagsLive) | **POST**  /v3/content_generation/generate_meta_tags/live  |
[**generateSubTopicsLive**](ContentGenerationApi.md#generateSubTopicsLive) | **POST**  /v3/content_generation/generate_sub_topics/live  |
[**paraphraseLive**](ContentGenerationApi.md#paraphraseLive) | **POST**  /v3/content_generation/paraphrase/live  |
[**checkGrammarLive**](ContentGenerationApi.md#checkGrammarLive) | **POST**  /v3/content_generation/check_grammar/live  |
[**checkGrammarLanguages**](ContentGenerationApi.md#checkGrammarLanguages) | **GET**  /v3/content_generation/check_grammar/languages  |
[**grammarRules**](ContentGenerationApi.md#grammarRules) | **GET**  /v3/content_generation/grammar_rules  |
[**textSummaryLive**](ContentGenerationApi.md#textSummaryLive) | **POST**  /v3/content_generation/text_summary/live  |
[**textSummaryLanguages**](ContentGenerationApi.md#textSummaryLanguages) | **GET**  /v3/content_generation/text_summary/languages  |

<a id="generateLive"></a>
# **generateLive**
> ContentGenerationGenerateLiveResponseInfo generateLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentGenerationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new ContentGenerationGenerateLiveRequestInfo();
 let response = await api.generateLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;ContentGenerationGenerateLiveRequestInfo[]&gt;**](ContentGenerationGenerateLiveRequestInfo[].md)|  | [optional] |



### Return type

[**ContentGenerationGenerateLiveResponseInfo**](ContentGenerationGenerateLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="generateTextLive"></a>
# **generateTextLive**
> ContentGenerationGenerateTextLiveResponseInfo generateTextLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentGenerationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new ContentGenerationGenerateTextLiveRequestInfo();
 let response = await api.generateTextLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;ContentGenerationGenerateTextLiveRequestInfo[]&gt;**](ContentGenerationGenerateTextLiveRequestInfo[].md)|  | [optional] |



### Return type

[**ContentGenerationGenerateTextLiveResponseInfo**](ContentGenerationGenerateTextLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="generateMetaTagsLive"></a>
# **generateMetaTagsLive**
> ContentGenerationGenerateMetaTagsLiveResponseInfo generateMetaTagsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentGenerationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new ContentGenerationGenerateMetaTagsLiveRequestInfo();
 let response = await api.generateMetaTagsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;ContentGenerationGenerateMetaTagsLiveRequestInfo[]&gt;**](ContentGenerationGenerateMetaTagsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**ContentGenerationGenerateMetaTagsLiveResponseInfo**](ContentGenerationGenerateMetaTagsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="generateSubTopicsLive"></a>
# **generateSubTopicsLive**
> ContentGenerationGenerateSubTopicsLiveResponseInfo generateSubTopicsLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentGenerationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new ContentGenerationGenerateSubTopicsLiveRequestInfo();
 let response = await api.generateSubTopicsLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;ContentGenerationGenerateSubTopicsLiveRequestInfo[]&gt;**](ContentGenerationGenerateSubTopicsLiveRequestInfo[].md)|  | [optional] |



### Return type

[**ContentGenerationGenerateSubTopicsLiveResponseInfo**](ContentGenerationGenerateSubTopicsLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="paraphraseLive"></a>
# **paraphraseLive**
> ContentGenerationParaphraseLiveResponseInfo paraphraseLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentGenerationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new ContentGenerationParaphraseLiveRequestInfo();
 let response = await api.paraphraseLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;ContentGenerationParaphraseLiveRequestInfo[]&gt;**](ContentGenerationParaphraseLiveRequestInfo[].md)|  | [optional] |



### Return type

[**ContentGenerationParaphraseLiveResponseInfo**](ContentGenerationParaphraseLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="checkGrammarLive"></a>
# **checkGrammarLive**
> ContentGenerationCheckGrammarLiveResponseInfo checkGrammarLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentGenerationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new ContentGenerationCheckGrammarLiveRequestInfo();
 let response = await api.checkGrammarLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;ContentGenerationCheckGrammarLiveRequestInfo[]&gt;**](ContentGenerationCheckGrammarLiveRequestInfo[].md)|  | [optional] |



### Return type

[**ContentGenerationCheckGrammarLiveResponseInfo**](ContentGenerationCheckGrammarLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="checkGrammarLanguages"></a>
# **checkGrammarLanguages**
> ContentGenerationCheckGrammarLanguagesResponseInfo checkGrammarLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentGenerationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.checkGrammarLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**ContentGenerationCheckGrammarLanguagesResponseInfo**](ContentGenerationCheckGrammarLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="grammarRules"></a>
# **grammarRules**
> ContentGenerationGrammarRulesResponseInfo grammarRules()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentGenerationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.grammarRules();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**ContentGenerationGrammarRulesResponseInfo**](ContentGenerationGrammarRulesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="textSummaryLive"></a>
# **textSummaryLive**
> ContentGenerationTextSummaryLiveResponseInfo textSummaryLive()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentGenerationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new ContentGenerationTextSummaryLiveRequestInfo();
 let response = await api.textSummaryLive([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;ContentGenerationTextSummaryLiveRequestInfo[]&gt;**](ContentGenerationTextSummaryLiveRequestInfo[].md)|  | [optional] |



### Return type

[**ContentGenerationTextSummaryLiveResponseInfo**](ContentGenerationTextSummaryLiveResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="textSummaryLanguages"></a>
# **textSummaryLanguages**
> ContentGenerationTextSummaryLanguagesResponseInfo textSummaryLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new ContentGenerationApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.textSummaryLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**ContentGenerationTextSummaryLanguagesResponseInfo**](ContentGenerationTextSummaryLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |