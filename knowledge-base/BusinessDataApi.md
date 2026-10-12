# BusinessDataApi

Knowledge base for `BusinessDataApi` of the DataForSEO TypeScript client. Naming rules, the response envelope, polymorphic items and errors are described in [SKILL.md](../SKILL.md).

Publicly available data about businesses and local places: business profiles, reviews, questions and answers, hotel data and a database of business listings, from sources such as Google, Trustpilot and Tripadvisor.

## Use it when you need

- Details of a business profile: address, phone, website, hours, categories, rating, attributes and posts.
- Reviews of a business on Google or review platforms, for reputation monitoring and sentiment analysis.
- Questions and answers about a place, or hotel search results with prices and hotel details.
- Lists of businesses by category, location, rating and other attributes (lead generation, local market research).

## Use another API when

- You need local rankings in search or maps results for a query: `SerpApi`.
- You need web-wide brand mentions rather than reviews: `ContentAnalysisApi`.
- You need products and sellers on marketplaces: `MerchantApi`.

## Examples

Generated from the API specification in the same way as the client tests. Replace `USERNAME` / `PASSWORD` with your API login and password. The examples use top-level `await` (ES module) and the global `fetch` (Node 18+ or a browser).

### googleMyBusinessInfoTaskGet

`GET /v3/business_data/google/my_business_info/task_get/{id}`

```typescript
import { BusinessDataApi } from "dataforseo-client";

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

### googleMyBusinessInfoTaskPost

`POST /v3/business_data/google/my_business_info/task_post`

```typescript
import { BusinessDataApi, BusinessDataGoogleMyBusinessInfoTaskPostRequestInfo } from "dataforseo-client";

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
task.language_code = "en";
task.location_name = "New York,New York,United States";
task.keyword = "RustyBrick, Inc.";
let response = await api.googleMyBusinessInfoTaskPost([task]);
```

### googleReviewsTasksReady

`GET /v3/business_data/google/reviews/tasks_ready`

```typescript
import { BusinessDataApi } from "dataforseo-client";

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

### googleReviewsTaskGet

`GET /v3/business_data/google/reviews/task_get/{id}`

```typescript
import { BusinessDataApi } from "dataforseo-client";

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

### googleReviewsTaskPost

`POST /v3/business_data/google/reviews/task_post`

```typescript
import { BusinessDataApi, BusinessDataGoogleReviewsTaskPostRequestInfo } from "dataforseo-client";

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
task.location_name = "London,England,United Kingdom";
task.language_name = "English";
task.keyword = "hedonism wines";
task.depth = 50;
task.sort_by = "highest_rating";
let response = await api.googleReviewsTaskPost([task]);
```

### googleHotelInfoTaskGetAdvanced

`GET /v3/business_data/google/hotel_info/task_get/advanced/{id}`

```typescript
import { BusinessDataApi } from "dataforseo-client";

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

### googleHotelInfoTaskPost

`POST /v3/business_data/google/hotel_info/task_post`

```typescript
import { BusinessDataApi, BusinessDataGoogleHotelInfoTaskPostRequestInfo } from "dataforseo-client";

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
task.language_code = "en";
task.location_name = "New York,New York,United States";
task.hotel_identifier = "ChYIq6SB--i6p6cpGgovbS8wN2s5ODZfEAE";
task.tag = "some_string_123";
task.postback_url = "https://your-server.com/postbackscript.php";
task.postback_data = "advanced";
let response = await api.googleHotelInfoTaskPost([task]);
```

### googleMyBusinessInfoLive

`POST /v3/business_data/google/my_business_info/live`

```typescript
import { BusinessDataApi, BusinessDataGoogleMyBusinessInfoLiveRequestInfo } from "dataforseo-client";

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
task.language_code = "en";
task.location_name = "New York,New York,United States";
task.keyword = "RustyBrick, Inc.";
let response = await api.googleMyBusinessInfoLive([task]);
```

### googleMyBusinessInfoTasksReady

`GET /v3/business_data/google/my_business_info/tasks_ready`

```typescript
import { BusinessDataApi } from "dataforseo-client";

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

## Endpoints

All methods of `BusinessDataApi`. Request and response model names are derived from the path (see SKILL.md).

| Method | HTTP | Path |
|---|---|---|
| `businessDataIdList` | POST | `/v3/business_data/id_list` |
| `businessDataErrors` | POST | `/v3/business_data/errors` |
| `businessListingsLocations` | GET | `/v3/business_data/business_listings/locations` |
| `businessListingsCategories` | GET | `/v3/business_data/business_listings/categories` |
| `businessListingsAvailableFilters` | GET | `/v3/business_data/business_listings/available_filters` |
| `businessListingsSearchLive` | POST | `/v3/business_data/business_listings/search/live` |
| `businessListingsCategoriesAggregationLive` | POST | `/v3/business_data/business_listings/categories_aggregation/live` |
| `businessDataGoogleLocations` | GET | `/v3/business_data/google/locations` |
| `businessDataGoogleLocationsCountry` | GET | `/v3/business_data/google/locations/{country}` |
| `businessDataGoogleLanguages` | GET | `/v3/business_data/google/languages` |
| `googleMyBusinessInfoTaskPost` | POST | `/v3/business_data/google/my_business_info/task_post` |
| `googleMyBusinessInfoTasksReady` | GET | `/v3/business_data/google/my_business_info/tasks_ready` |
| `businessDataTasksReady` | GET | `/v3/business_data/tasks_ready` |
| `googleMyBusinessInfoTaskGet` | GET | `/v3/business_data/google/my_business_info/task_get/{id}` |
| `googleMyBusinessInfoLive` | POST | `/v3/business_data/google/my_business_info/live` |
| `googleMyBusinessUpdatesTaskPost` | POST | `/v3/business_data/google/my_business_updates/task_post` |
| `googleMyBusinessUpdatesTasksReady` | GET | `/v3/business_data/google/my_business_updates/tasks_ready` |
| `googleMyBusinessUpdatesTaskGet` | GET | `/v3/business_data/google/my_business_updates/task_get/{id}` |
| `googleHotelSearchesTaskPost` | POST | `/v3/business_data/google/hotel_searches/task_post` |
| `googleHotelSearchesTasksReady` | GET | `/v3/business_data/google/hotel_searches/tasks_ready` |
| `googleHotelSearchesTaskGet` | GET | `/v3/business_data/google/hotel_searches/task_get/{id}` |
| `googleHotelSearchesLive` | POST | `/v3/business_data/google/hotel_searches/live` |
| `googleHotelInfoTaskPost` | POST | `/v3/business_data/google/hotel_info/task_post` |
| `googleHotelInfoTasksReady` | GET | `/v3/business_data/google/hotel_info/tasks_ready` |
| `googleHotelInfoTaskGetAdvanced` | GET | `/v3/business_data/google/hotel_info/task_get/advanced/{id}` |
| `googleHotelInfoTaskGetHtml` | GET | `/v3/business_data/google/hotel_info/task_get/html/{id}` |
| `googleHotelInfoLiveAdvanced` | POST | `/v3/business_data/google/hotel_info/live/advanced` |
| `googleHotelInfoLiveHtml` | POST | `/v3/business_data/google/hotel_info/live/html` |
| `googleReviewsTaskPost` | POST | `/v3/business_data/google/reviews/task_post` |
| `googleReviewsTasksReady` | GET | `/v3/business_data/google/reviews/tasks_ready` |
| `googleReviewsTaskGet` | GET | `/v3/business_data/google/reviews/task_get/{id}` |
| `googleExtendedReviewsTaskPost` | POST | `/v3/business_data/google/extended_reviews/task_post` |
| `googleExtendedReviewsTasksReady` | GET | `/v3/business_data/google/extended_reviews/tasks_ready` |
| `googleExtendedReviewsTaskGet` | GET | `/v3/business_data/google/extended_reviews/task_get/{id}` |
| `googleQuestionsAndAnswersTaskPost` | POST | `/v3/business_data/google/questions_and_answers/task_post` |
| `googleQuestionsAndAnswersTasksReady` | GET | `/v3/business_data/google/questions_and_answers/tasks_ready` |
| `googleQuestionsAndAnswersTaskGet` | GET | `/v3/business_data/google/questions_and_answers/task_get/{id}` |
| `googleQuestionsAndAnswersLive` | POST | `/v3/business_data/google/questions_and_answers/live` |
| `trustpilotSearchTaskPost` | POST | `/v3/business_data/trustpilot/search/task_post` |
| `trustpilotSearchTasksReady` | GET | `/v3/business_data/trustpilot/search/tasks_ready` |
| `trustpilotSearchTaskGet` | GET | `/v3/business_data/trustpilot/search/task_get/{id}` |
| `trustpilotReviewsTaskPost` | POST | `/v3/business_data/trustpilot/reviews/task_post` |
| `trustpilotReviewsTasksReady` | GET | `/v3/business_data/trustpilot/reviews/tasks_ready` |
| `trustpilotReviewsTaskGet` | GET | `/v3/business_data/trustpilot/reviews/task_get/{id}` |
| `tripadvisorLocations` | GET | `/v3/business_data/tripadvisor/locations` |
| `tripadvisorLocationsCountry` | GET | `/v3/business_data/tripadvisor/locations/{country}` |
| `tripadvisorLanguages` | GET | `/v3/business_data/tripadvisor/languages` |
| `tripadvisorSearchTaskPost` | POST | `/v3/business_data/tripadvisor/search/task_post` |
| `tripadvisorSearchTasksReady` | GET | `/v3/business_data/tripadvisor/search/tasks_ready` |
| `tripadvisorSearchTaskGet` | GET | `/v3/business_data/tripadvisor/search/task_get/{id}` |
| `tripadvisorReviewsTaskPost` | POST | `/v3/business_data/tripadvisor/reviews/task_post` |
| `tripadvisorReviewsTasksReady` | GET | `/v3/business_data/tripadvisor/reviews/tasks_ready` |
| `tripadvisorReviewsTaskGet` | GET | `/v3/business_data/tripadvisor/reviews/task_get/{id}` |