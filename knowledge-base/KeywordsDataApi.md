# KeywordsDataApi

Knowledge base for `KeywordsDataApi` of the DataForSEO TypeScript client. Naming rules, the response envelope, polymorphic items and errors are described in [SKILL.md](../SKILL.md).

Keyword metrics from advertising platforms and trend services: search volume, cost per click, competition and their monthly dynamics, keyword ideas, ad traffic forecasts and keyword popularity trends, from sources such as Google Ads, Bing Ads, Google Trends, DataForSEO Trends and clickstream data.

The data comes from the original sources, so it follows their rules: advertising platforms do not return data for restricted topics, and trend services return relative popularity rather than absolute numbers.

## Use it when you need

- Search volume, CPC and competition for a known list of keywords, as reported by an advertising platform.
- Keyword ideas suggested by an advertising platform for a website or for seed keywords.
- A forecast of impressions, clicks and cost for a planned advertising campaign.
- How interest in a keyword or topic changes over time and across regions, or which related topics and queries are rising.

## Use another API when

- You do SEO-oriented keyword research (difficulty, search intent, keywords a domain ranks for, competitors) or need large volumes of keywords from a database: `DataforseoLabsApi`.
- You need how often keywords are asked in AI assistants: `AiOptimizationApi`.
- You need what the search results look like for a keyword: `SerpApi`.

## Examples

Generated from the API specification in the same way as the client tests. Replace `USERNAME` / `PASSWORD` with your API login and password. The examples use top-level `await` (ES module) and the global `fetch` (Node 18+ or a browser).

### googleTrendsExploreTaskGet

`GET /v3/keywords_data/google_trends/explore/task_get/{id}`

```typescript
import { KeywordsDataApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new KeywordsDataApi("https://api.dataforseo.com", {
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
let response = await api.googleTrendsExploreTaskGet(id);
```

### googleTrendsExploreTaskPost

`POST /v3/keywords_data/google_trends/explore/task_post`

```typescript
import { KeywordsDataApi, KeywordsDataGoogleTrendsExploreTaskPostRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

let task = new KeywordsDataGoogleTrendsExploreTaskPostRequestInfo();
task.type = "youtube";
task.category_code = 3;
task.keywords = [
  "seo api",
  "rank api",
];
let response = await api.googleTrendsExploreTaskPost([task]);
```

### googleAdsSearchVolumeLive

`POST /v3/keywords_data/google_ads/search_volume/live`

```typescript
import { KeywordsDataApi, KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

let task = new KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo();
task.location_code = 2840;
task.keywords = [
  "buy laptop",
  "cheap laptops for sale",
  "purchase laptop",
];
task.search_partners = true;
let response = await api.googleAdsSearchVolumeLive([task]);
```

### bingSearchVolumeLive

`POST /v3/keywords_data/bing/search_volume/live`

```typescript
import { KeywordsDataApi, KeywordsDataBingSearchVolumeLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

let task = new KeywordsDataBingSearchVolumeLiveRequestInfo();
task.location_name = "United States";
task.language_code = "en";
task.keywords = [
  "tom and jerry",
  "silicon valley",
  "spider man",
];
let response = await api.bingSearchVolumeLive([task]);
```

### googleTrendsExploreLive

`POST /v3/keywords_data/google_trends/explore/live`

```typescript
import { KeywordsDataApi, KeywordsDataGoogleTrendsExploreLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

let task = new KeywordsDataGoogleTrendsExploreLiveRequestInfo();
task.location_name = "United States";
task.type = "youtube";
task.category_code = 3;
task.keywords = [
  "rugby",
  "cricket",
];
let response = await api.googleTrendsExploreLive([task]);
```

### googleAdsSearchVolumeTaskGet

`GET /v3/keywords_data/google_ads/search_volume/task_get/{id}`

```typescript
import { KeywordsDataApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new KeywordsDataApi("https://api.dataforseo.com", {
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
let response = await api.googleAdsSearchVolumeTaskGet(id);
```

### googleAdsSearchVolumeTaskPost

`POST /v3/keywords_data/google_ads/search_volume/task_post`

```typescript
import { KeywordsDataApi, KeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

let task = new KeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo();
task.location_name = "United States";
task.keywords = [
  "buy laptop",
  "cheap laptops for sale",
  "purchase laptop",
];
let response = await api.googleAdsSearchVolumeTaskPost([task]);
```

### googleAdsSearchVolumeTasksReady

`GET /v3/keywords_data/google_ads/search_volume/tasks_ready`

```typescript
import { KeywordsDataApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new KeywordsDataApi("https://api.dataforseo.com", {
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

let response = await api.googleAdsSearchVolumeTasksReady();
```

## Endpoints

All methods of `KeywordsDataApi`. Request and response model names are derived from the path (see SKILL.md).

| Method | HTTP | Path |
|---|---|---|
| `keywordsDataIdList` | POST | `/v3/keywords_data/id_list` |
| `keywordsDataErrors` | POST | `/v3/keywords_data/errors` |
| `googleAdsStatus` | GET | `/v3/keywords_data/google_ads/status` |
| `googleAdsLocations` | GET | `/v3/keywords_data/google_ads/locations` |
| `googleAdsLocationsCountry` | GET | `/v3/keywords_data/google_ads/locations/{country}` |
| `googleAdsLanguages` | GET | `/v3/keywords_data/google_ads/languages` |
| `googleAdsSearchVolumeTaskPost` | POST | `/v3/keywords_data/google_ads/search_volume/task_post` |
| `googleAdsSearchVolumeTasksReady` | GET | `/v3/keywords_data/google_ads/search_volume/tasks_ready` |
| `googleAdsSearchVolumeTaskGet` | GET | `/v3/keywords_data/google_ads/search_volume/task_get/{id}` |
| `googleAdsSearchVolumeLive` | POST | `/v3/keywords_data/google_ads/search_volume/live` |
| `googleAdsKeywordsForSiteTaskPost` | POST | `/v3/keywords_data/google_ads/keywords_for_site/task_post` |
| `googleAdsKeywordsForSiteTasksReady` | GET | `/v3/keywords_data/google_ads/keywords_for_site/tasks_ready` |
| `googleAdsKeywordsForSiteTaskGet` | GET | `/v3/keywords_data/google_ads/keywords_for_site/task_get/{id}` |
| `googleAdsKeywordsForSiteLive` | POST | `/v3/keywords_data/google_ads/keywords_for_site/live` |
| `googleAdsKeywordsForKeywordsTaskPost` | POST | `/v3/keywords_data/google_ads/keywords_for_keywords/task_post` |
| `googleAdsKeywordsForKeywordsTasksReady` | GET | `/v3/keywords_data/google_ads/keywords_for_keywords/tasks_ready` |
| `googleAdsKeywordsForKeywordsTaskGet` | GET | `/v3/keywords_data/google_ads/keywords_for_keywords/task_get/{id}` |
| `googleAdsKeywordsForKeywordsLive` | POST | `/v3/keywords_data/google_ads/keywords_for_keywords/live` |
| `googleAdsAdTrafficByKeywordsTaskPost` | POST | `/v3/keywords_data/google_ads/ad_traffic_by_keywords/task_post` |
| `googleAdsAdTrafficByKeywordsTasksReady` | GET | `/v3/keywords_data/google_ads/ad_traffic_by_keywords/tasks_ready` |
| `googleAdsAdTrafficByKeywordsTaskGet` | GET | `/v3/keywords_data/google_ads/ad_traffic_by_keywords/task_get/{id}` |
| `googleAdsAdTrafficByKeywordsLive` | POST | `/v3/keywords_data/google_ads/ad_traffic_by_keywords/live` |
| `googleTrendsLocations` | GET | `/v3/keywords_data/google_trends/locations` |
| `googleTrendsLocationsCountry` | GET | `/v3/keywords_data/google_trends/locations/{country}` |
| `googleTrendsLanguages` | GET | `/v3/keywords_data/google_trends/languages` |
| `googleTrendsCategories` | GET | `/v3/keywords_data/google_trends/categories` |
| `googleTrendsExploreTaskPost` | POST | `/v3/keywords_data/google_trends/explore/task_post` |
| `googleTrendsExploreTasksReady` | GET | `/v3/keywords_data/google_trends/explore/tasks_ready` |
| `googleTrendsExploreTaskGet` | GET | `/v3/keywords_data/google_trends/explore/task_get/{id}` |
| `googleTrendsExploreLive` | POST | `/v3/keywords_data/google_trends/explore/live` |
| `dataforseoTrendsLocations` | GET | `/v3/keywords_data/dataforseo_trends/locations` |
| `dataforseoTrendsLocationsCountry` | GET | `/v3/keywords_data/dataforseo_trends/locations/{country}` |
| `dataforseoTrendsExploreLive` | POST | `/v3/keywords_data/dataforseo_trends/explore/live` |
| `dataforseoTrendsSubregionInterestsLive` | POST | `/v3/keywords_data/dataforseo_trends/subregion_interests/live` |
| `dataforseoTrendsDemographyLive` | POST | `/v3/keywords_data/dataforseo_trends/demography/live` |
| `dataforseoTrendsMergedDataLive` | POST | `/v3/keywords_data/dataforseo_trends/merged_data/live` |
| `keywordsDataBingLocations` | GET | `/v3/keywords_data/bing/locations` |
| `keywordsDataBingLanguages` | GET | `/v3/keywords_data/bing/languages` |
| `bingSearchVolumeTaskPost` | POST | `/v3/keywords_data/bing/search_volume/task_post` |
| `bingSearchVolumeTasksReady` | GET | `/v3/keywords_data/bing/search_volume/tasks_ready` |
| `bingSearchVolumeTaskGet` | GET | `/v3/keywords_data/bing/search_volume/task_get/{id}` |
| `bingSearchVolumeLive` | POST | `/v3/keywords_data/bing/search_volume/live` |
| `bingAudienceEstimationJobFunctions` | GET | `/v3/keywords_data/bing/audience_estimation/job_functions` |
| `bingAudienceEstimationIndustries` | GET | `/v3/keywords_data/bing/audience_estimation/industries` |
| `bingAudienceEstimationTaskPost` | POST | `/v3/keywords_data/bing/audience_estimation/task_post` |
| `bingAudienceEstimationTasksReady` | GET | `/v3/keywords_data/bing/audience_estimation/tasks_ready` |
| `bingAudienceEstimationTaskGet` | GET | `/v3/keywords_data/bing/audience_estimation/task_get/{id}` |
| `bingAudienceEstimationLive` | POST | `/v3/keywords_data/bing/audience_estimation/live` |
| `bingKeywordsForSiteTaskPost` | POST | `/v3/keywords_data/bing/keywords_for_site/task_post` |
| `bingKeywordsForSiteTasksReady` | GET | `/v3/keywords_data/bing/keywords_for_site/tasks_ready` |
| `bingKeywordsForSiteTaskGet` | GET | `/v3/keywords_data/bing/keywords_for_site/task_get/{id}` |
| `bingKeywordsForSiteLive` | POST | `/v3/keywords_data/bing/keywords_for_site/live` |
| `bingKeywordsForKeywordsTaskPost` | POST | `/v3/keywords_data/bing/keywords_for_keywords/task_post` |
| `bingKeywordsForKeywordsTasksReady` | GET | `/v3/keywords_data/bing/keywords_for_keywords/tasks_ready` |
| `bingKeywordsForKeywordsTaskGet` | GET | `/v3/keywords_data/bing/keywords_for_keywords/task_get/{id}` |
| `bingKeywordsForKeywordsLive` | POST | `/v3/keywords_data/bing/keywords_for_keywords/live` |
| `bingKeywordPerformanceLocationsAndLanguages` | GET | `/v3/keywords_data/bing/keyword_performance/locations_and_languages` |
| `bingKeywordPerformanceTaskPost` | POST | `/v3/keywords_data/bing/keyword_performance/task_post` |
| `bingKeywordPerformanceTasksReady` | GET | `/v3/keywords_data/bing/keyword_performance/tasks_ready` |
| `bingKeywordPerformanceTaskGet` | GET | `/v3/keywords_data/bing/keyword_performance/task_get/{id}` |
| `bingKeywordPerformanceLive` | POST | `/v3/keywords_data/bing/keyword_performance/live` |
| `bingSearchVolumeHistoryLocationsAndLanguages` | GET | `/v3/keywords_data/bing/search_volume_history/locations_and_languages` |
| `bingSearchVolumeHistoryTaskPost` | POST | `/v3/keywords_data/bing/search_volume_history/task_post` |
| `bingSearchVolumeHistoryTasksReady` | GET | `/v3/keywords_data/bing/search_volume_history/tasks_ready` |
| `bingSearchVolumeHistoryTaskGet` | GET | `/v3/keywords_data/bing/search_volume_history/task_get/{id}` |
| `bingSearchVolumeHistoryLive` | POST | `/v3/keywords_data/bing/search_volume_history/live` |
| `clickstreamDataLocationsAndLanguages` | GET | `/v3/keywords_data/clickstream_data/locations_and_languages` |
| `clickstreamDataDataforseoSearchVolumeLive` | POST | `/v3/keywords_data/clickstream_data/dataforseo_search_volume/live` |
| `clickstreamDataGlobalSearchVolumeLive` | POST | `/v3/keywords_data/clickstream_data/global_search_volume/live` |
| `clickstreamDataBulkSearchVolumeLive` | POST | `/v3/keywords_data/clickstream_data/bulk_search_volume/live` |