# AppDataApi

Knowledge base for `AppDataApi` of the DataForSEO TypeScript client. Naming rules, the response envelope, polymorphic items and errors are described in [SKILL.md](../SKILL.md).

Mobile application data from app stores such as Google Play and the App Store: app search results, top charts and collections, detailed app information and user reviews, plus a searchable database of app listings.

Results are collected for the requested location and language, the same way a store user would see them.

## Use it when you need

- Which apps rank in a store for a search query (app store optimization, competitor discovery).
- Which apps are in top charts or collections of a category.
- Details of a specific app: description, rating, installs, price, developer, versions.
- User reviews of an app for review monitoring, sentiment or product feedback analysis.
- Apps that match a category or text, found in a database without querying the store.

## Use another API when

- You need keywords an app ranks for, app competitors or app keyword gaps: `DataforseoLabsApi`.
- You need physical products on marketplaces: `MerchantApi`.

## Examples

Generated from the API specification in the same way as the client tests. Replace `USERNAME` / `PASSWORD` with your API login and password. The examples use top-level `await` (ES module) and the global `fetch` (Node 18+ or a browser).

### googleAppSearchesTaskPost

`POST /v3/app_data/google/app_searches/task_post`

```typescript
import { AppDataApi, AppDataGoogleAppSearchesTaskPostRequestInfo } from "dataforseo-client";

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

### googleAppSearchesTaskGetAdvanced

`GET /v3/app_data/google/app_searches/task_get/advanced/{id}`

```typescript
import { AppDataApi } from "dataforseo-client";

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

### appleAppSearchesTaskGetAdvanced

`GET /v3/app_data/apple/app_searches/task_get/advanced/{id}`

```typescript
import { AppDataApi } from "dataforseo-client";

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

### appleAppSearchesTaskPost

`POST /v3/app_data/apple/app_searches/task_post`

```typescript
import { AppDataApi, AppDataAppleAppSearchesTaskPostRequestInfo } from "dataforseo-client";

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

### googleAppInfoTaskGetAdvanced

`GET /v3/app_data/google/app_info/task_get/advanced/{id}`

```typescript
import { AppDataApi } from "dataforseo-client";

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

### googleAppInfoTaskPost

`POST /v3/app_data/google/app_info/task_post`

```typescript
import { AppDataApi, AppDataGoogleAppInfoTaskPostRequestInfo } from "dataforseo-client";

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

### appleAppInfoTaskGetAdvanced

`GET /v3/app_data/apple/app_info/task_get/advanced/{id}`

```typescript
import { AppDataApi } from "dataforseo-client";

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

### appleAppInfoTaskPost

`POST /v3/app_data/apple/app_info/task_post`

```typescript
import { AppDataApi, AppDataAppleAppInfoTaskPostRequestInfo } from "dataforseo-client";

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

### googleAppReviewsTaskPost

`POST /v3/app_data/google/app_reviews/task_post`

```typescript
import { AppDataApi, AppDataGoogleAppReviewsTaskPostRequestInfo } from "dataforseo-client";

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

### googleAppReviewsTaskGetAdvanced

`GET /v3/app_data/google/app_reviews/task_get/advanced/{id}`

```typescript
import { AppDataApi } from "dataforseo-client";

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

## Endpoints

All methods of `AppDataApi`. Request and response model names are derived from the path (see SKILL.md).

| Method | HTTP | Path |
|---|---|---|
| `appDataIdList` | POST | `/v3/app_data/id_list` |
| `appDataErrors` | POST | `/v3/app_data/errors` |
| `googleCategories` | GET | `/v3/app_data/google/categories` |
| `appDataGoogleLocations` | GET | `/v3/app_data/google/locations` |
| `appDataGoogleLocationsCountry` | GET | `/v3/app_data/google/locations/{country}` |
| `appDataGoogleLanguages` | GET | `/v3/app_data/google/languages` |
| `googleAppSearchesTaskPost` | POST | `/v3/app_data/google/app_searches/task_post` |
| `googleAppSearchesTasksReady` | GET | `/v3/app_data/google/app_searches/tasks_ready` |
| `appDataTasksReady` | GET | `/v3/app_data/tasks_ready` |
| `googleAppSearchesTaskGetAdvanced` | GET | `/v3/app_data/google/app_searches/task_get/advanced/{id}` |
| `googleAppSearchesTaskGetHtml` | GET | `/v3/app_data/google/app_searches/task_get/html/{id}` |
| `googleAppListTaskPost` | POST | `/v3/app_data/google/app_list/task_post` |
| `googleAppListTasksReady` | GET | `/v3/app_data/google/app_list/tasks_ready` |
| `googleAppListTaskGetAdvanced` | GET | `/v3/app_data/google/app_list/task_get/advanced/{id}` |
| `googleAppListTaskGetHtml` | GET | `/v3/app_data/google/app_list/task_get/html/{id}` |
| `googleAppInfoTaskPost` | POST | `/v3/app_data/google/app_info/task_post` |
| `googleAppInfoTasksReady` | GET | `/v3/app_data/google/app_info/tasks_ready` |
| `googleAppInfoTaskGetAdvanced` | GET | `/v3/app_data/google/app_info/task_get/advanced/{id}` |
| `googleAppInfoTaskGetHtml` | GET | `/v3/app_data/google/app_info/task_get/html/{id}` |
| `googleAppReviewsTaskPost` | POST | `/v3/app_data/google/app_reviews/task_post` |
| `googleAppReviewsTasksReady` | GET | `/v3/app_data/google/app_reviews/tasks_ready` |
| `googleAppReviewsTaskGetAdvanced` | GET | `/v3/app_data/google/app_reviews/task_get/advanced/{id}` |
| `googleAppReviewsTaskGetHtml` | GET | `/v3/app_data/google/app_reviews/task_get/html/{id}` |
| `googleAppListingsCategories` | GET | `/v3/app_data/google/app_listings/categories` |
| `googleAppListingsSearchLive` | POST | `/v3/app_data/google/app_listings/search/live` |
| `appleCategories` | GET | `/v3/app_data/apple/categories` |
| `appleLocations` | GET | `/v3/app_data/apple/locations` |
| `appleLanguages` | GET | `/v3/app_data/apple/languages` |
| `appleAppSearchesTaskPost` | POST | `/v3/app_data/apple/app_searches/task_post` |
| `appleAppSearchesTasksReady` | GET | `/v3/app_data/apple/app_searches/tasks_ready` |
| `appleAppSearchesTaskGetAdvanced` | GET | `/v3/app_data/apple/app_searches/task_get/advanced/{id}` |
| `appleAppInfoTaskPost` | POST | `/v3/app_data/apple/app_info/task_post` |
| `appleAppInfoTasksReady` | GET | `/v3/app_data/apple/app_info/tasks_ready` |
| `appleAppInfoTaskGetAdvanced` | GET | `/v3/app_data/apple/app_info/task_get/advanced/{id}` |
| `appleAppListTaskPost` | POST | `/v3/app_data/apple/app_list/task_post` |
| `appleAppListTasksReady` | GET | `/v3/app_data/apple/app_list/tasks_ready` |
| `appleAppListTaskGetAdvanced` | GET | `/v3/app_data/apple/app_list/task_get/advanced/{id}` |
| `appleAppReviewsTaskPost` | POST | `/v3/app_data/apple/app_reviews/task_post` |
| `appleAppReviewsTasksReady` | GET | `/v3/app_data/apple/app_reviews/tasks_ready` |
| `appleAppReviewsTaskGetAdvanced` | GET | `/v3/app_data/apple/app_reviews/task_get/advanced/{id}` |
| `appleAppListingsCategories` | GET | `/v3/app_data/apple/app_listings/categories` |
| `appleAppListingsSearchLive` | POST | `/v3/app_data/apple/app_listings/search/live` |