# AppendixApi

All URIs are relative to *https://api.dataforseo.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**userData**](AppendixApi.md#userData) | **GET**  /v3/appendix/user_data  |
[**errors**](AppendixApi.md#errors) | **GET**  /v3/appendix/errors  |
[**webhookResend**](AppendixApi.md#webhookResend) | **POST**  /v3/appendix/webhook_resend  |
[**appendixStatus**](AppendixApi.md#appendixStatus) | **GET**  /v3/appendix/status  |

<a id="userData"></a>
# **userData**
> AppendixUserDataResponseInfo userData()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppendixApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.userData();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppendixUserDataResponseInfo**](AppendixUserDataResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="errors"></a>
# **errors**
> AppendixErrorsResponseInfo errors()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppendixApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.errors();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppendixErrorsResponseInfo**](AppendixErrorsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="webhookResend"></a>
# **webhookResend**
> AppendixWebhookResendResponseInfo webhookResend()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppendixApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new AppendixWebhookResendRequestInfo();
   task.id = "08161139-0001-0066-1000-06491d097ed5";
 let response = await api.webhookResend([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;AppendixWebhookResendRequestInfo[]&gt;**](AppendixWebhookResendRequestInfo[].md)|  | [optional] |



### Return type

[**AppendixWebhookResendResponseInfo**](AppendixWebhookResendResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="appendixStatus"></a>
# **appendixStatus**
> AppendixStatusResponseInfo appendixStatus()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new AppendixApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.appendixStatus();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**AppendixStatusResponseInfo**](AppendixStatusResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |