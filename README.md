## OVERVIEW

This is a TypeScript client providing you, as a developer, with a tool for obtaining the necessary data from DataForSEO APIs. You don't have to figure out how to make a request and process a response - all that is readily available in this client.

[![GitHub issues](https://img.shields.io/github/issues/dataforseo/TypeScriptClient.svg)](https://github.com/dataforseo/TypeScriptClient/issues)
[![GitHub license](https://img.shields.io/github/license/dataforseo/TypeScriptClient.svg)](https://github.com/dataforseo/TypeScriptClient)

DataForSEO API uses REST technology for interchanging data between your application and our service. The data exchange is made through the widely used HTTP protocol, which allows using our API with almost any programming language.

Client contains 12 sections (aka APIs):

- SERP ([source docs](./docs/classes/SerpApi.md) | [api docs](https://docs.dataforseo.com/v3/serp/overview/?bash))
- Keywords Data ([source docs](./docs/classes/KeywordsDataApi.md) | [api docs](https://docs.dataforseo.com/v3/keywords_data/overview/?bash))
- Domain Analytics ([source docs](./docs/classes/DomainAnalyticsApi.md) | [api docs](https://docs.dataforseo.com/v3/domain_analytics/overview/?bash))
- DataForSEO Labs ([source docs](./docs/classes/DataforseoLabsApi.md) | [api docs](https://docs.dataforseo.com/v3/dataforseo_labs/overview/?bash))
- Backlinks ([source docs](./docs/classes/BacklinksApi.md) | [api docs](https://docs.dataforseo.com/v3/backlinks/overview/?bash))
- OnPage ([source docs](./docs/classes/OnPageApi.md) | [api docs](https://docs.dataforseo.com/v3/on_page/overview/?bash))
- Content Analysis ([source docs](./docs/classes/ContentAnalysisApi.md) | [api docs](https://docs.dataforseo.com/v3/content_analysis/overview/?bash))
- Content Generation ([source docs](./docs/classes/ContentGenerationApi.md) | [api docs](https://docs.dataforseo.com/v3/content_generation/overview/?bash))
- Merchant ([source docs](./docs/classes/MerchantApi.md) | [api docs](https://docs.dataforseo.com/v3/merchant/overview/?bash))
- App Data ([source docs](./docs/classes/AppDataApi.md) | [api docs](https://docs.dataforseo.com/v3/app_data/overview/?bash))
- Business Data ([source docs](./docs/classes/BusinessDataApi.md) | [api docs](https://docs.dataforseo.com/v3/business_data/overview/?bash))
- Appendix ([source docs](./docs/classes/AppendixApi.md) | [api docs](https://docs.dataforseo.com/v3/appendix/user_data/?bash))

API Contains 2 types of requests:

1) Live (Simple HTTP request/response message)
2) Task-based (Requires sending a 'Task' entity to execute, waiting until the 'Task' status is ready, and getting the 'Task' result in a special endpoint. Usually, it is represented by 3 types of endpoints: 'TaskPost', 'TaskReady', and 'TaskGet')

For more details, please follow [here](https://docs.dataforseo.com/v3/?bash)

## YAML Spec

Our API description is based on the OpenAPI [syntax](https://spec.openapis.org/oas/v3.1.0) in YAML format. The YAML file is attached to the project [here](./openapi_specification.yaml)

## Documentation

The documentation for code objects, formatted in Markdown (.md) is available [here](./docs/). Official documentation for DataForSEO API is available [here](https://docs.dataforseo.com/v3/?bash).

## Code generation

Code generated using the [NSwag lib](https://github.com/RicoSuter/NSwag)

## Install package from npm

```bash
npm install dataforseo-client 
```

## Examples of usage

Example of live request
```typescript
import * as client from 'dataforseo-client'

async function main() {
    
    const username = 'username';
    const password = 'password';

    const authFetch = createAuthenticatedFetch(username, password);
    let serpApi = new client.SerpApi("https://api.dataforseo.com", { fetch: authFetch });

    let task = new client.SerpGoogleOrganicLiveAdvancedRequestInfo();
    task.location_code = 2840;
    task.language_code = "en";
    task.keyword = "albert einstein"

    let resp = await serpApi.googleOrganicLiveAdvanced([task]);
}

function createAuthenticatedFetch(username: string, password: string) {
    return (url: RequestInfo, init?: RequestInit): Promise<Response> => {
      const token = btoa(`${username}:${password}`);
      const authHeader = { 'Authorization': `Basic ${token}` };

      const newInit: RequestInit = {
        ...init,
        headers: {
          ...init?.headers,
          ...authHeader
        }
      };

      return fetch(url, newInit);
    };
  }

main();
```

Example of Task based endpoint
```typescript
import * as client from 'dataforseo-client'

async function main() {

  const username = 'username';
  const password = 'password';

  const authFetch = createAuthenticatedFetch(username, password);
  let serpApi = new client.SerpApi("https://api.dataforseo.com", { fetch: authFetch });

  let task = new client.SerpTaskRequestInfo();
  task.location_code = 2840;
  task.language_code = "en";
  task.keyword = "albert einstein"

  let taskResponse = await serpApi.googleOrganicTaskPost([task]) 

  let taskID = taskResponse.tasks[0].id;
  const startTime = Date.now();

  while (!await isReady(serpApi, taskID) && Date.now() - startTime < 60000) {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  let resp = await serpApi.googleOrganicTaskGetAdvanced(taskID);
}

async function isReady(serpApi: client.SerpApi, id: string): Promise<boolean> {
let resp = await serpApi.googleOrganicTasksReady();

let isReadyId = false;

resp.tasks.forEach(x => {
   if (x.id == id) {
    isReadyId = true;
   }
});

return isReadyId;
}

function createAuthenticatedFetch(username: string, password: string) {
    return (url: RequestInfo, init?: RequestInit): Promise<Response> => {
      const token = btoa(`${username}:${password}`);
      const authHeader = { 'Authorization': `Basic ${token}` };

      const newInit: RequestInit = {
        ...init,
        headers: {
          ...init?.headers,
          ...authHeader
        }
      };

      return fetch(url, newInit);
    };
  }

main();
```
