## OVERVIEW

There is a TypeScript client to call DataForSeo API.

DataForSEO API uses REST technology for interchanging data between your application and our service. The data exchange is made through the widely used HTTP protocol, which allows applying our API to almost all programming languages.

Client contains 12 sections (aka API):
- Serp ([source docs](./docs/classes/SerpApi.md) | [api docs](https://docs.dataforseo.com/v3/serp/overview/?bash))
- KeywordsData ([source docs](./docs/classes/KeywordsDataApi.md) | [api docs](https://docs.dataforseo.com/v3/keywords_data/overview/?bash))
- DomainAnalytics ([source docs](./docs/classes/DomainAnalyticsApi.md) | [api docs](https://docs.dataforseo.com/v3/domain_analytics/overview/?bash))
- DataforseoLabs ([source docs](./docs/classes/DataforseoLabsApi.md) | [api docs](https://docs.dataforseo.com/v3/dataforseo_labs/overview/?bash))
- Backlinks ([source docs](./docs/classes/BacklinksApi.md) | [api docs](https://docs.dataforseo.com/v3/backlinks/overview/?bash))
- OnPage ([source docs](./docs/classes/OnPageApi.md) | [api docs](https://docs.dataforseo.com/v3/on_page/overview/?bash))
- ContentAnalysis ([source docs](./docs/classes/ContentAnalysisApi.md) | [api docs](https://docs.dataforseo.com/v3/content_analysis/overview/?bash))
- ContentGeneration ([source docs](./docs/classes/ContentGenerationApi.md) | [api docs](https://docs.dataforseo.com/v3/content_generation/overview/?bash))
- Merchant ([source docs](./docs/classes/MerchantApi.md) | [api docs](https://docs.dataforseo.com/v3/merchant/overview/?bash))
- AppData ([source docs](./docs/classes/AppDataApi.md) | [api docs](https://docs.dataforseo.com/v3/app_data/overview/?bash))
- BusinessData ([source docs](./docs/classes/BusinessDataApi.md) | [api docs](https://docs.dataforseo.com/v3/business_data/overview/?bash))
- Appendix ([source docs](./docs/classes/AppendixApi.md) | [api docs](https://docs.dataforseo.com/v3/appendix/user_data/?bash))

API Contains 2 types of requests:
1) Live (Simple HTTP request/response message)
2) Task-Based (Where you need to send a 'Task' entity to execute, waiting until the 'Task' status is ready and getting the 'Task' result in a special endpoint. Usually it represents in 3 endpoints 'TaskPost', 'TaskReady' and 'TaskGet')

For more details - please follow [here](https://docs.dataforseo.com/v3/?bash)

## YAML Spec

Our API description is based on openAPI [syntax](https://spec.openapis.org/oas/v3.1.0) in YAML format. The YAML file attached to the project [here](./openapi_specification.yaml)

## Documentation

The documentation for code objects, formatted in Markdown (.md) is available [here](./docs/). Offical documentation for DataForSeo API is avaliable [here](https://docs.dataforseo.com/v3/?bash).

## Code generation

Code generated with using [NSwag lib](https://github.com/RicoSuter/NSwag)

## install package from npm

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

    let task = new client.SerpTaskRequestInfo();
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
    setTimeout(() => {}, 1000);
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
