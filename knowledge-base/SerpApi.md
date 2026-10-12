# SerpApi

Knowledge base for `SerpApi` of the DataForSEO TypeScript client. Naming rules, the response envelope, polymorphic items and errors are described in [SKILL.md](../SKILL.md).

Search engine results pages (SERP) collected on request: what a search engine shows for a query in a given location, language and device, from engines such as Google, Bing, YouTube, Yahoo and others, including search verticals such as maps, news, images, jobs and AI search modes.

Results are collected at the moment of the request and emulate a real, non-personalized user in the chosen location. They are returned either as parsed, typed elements of the page (organic results, ads, featured snippets, AI answers, local packs, videos and other SERP features) or as raw HTML.

## Use it when you need

- The current ranking of a website, page or product for a keyword in a specific location, language or device (rank tracking).
- The composition of a results page: which SERP features appear and what they contain.
- Fresh results of a search vertical: local businesses on maps, news articles, images, videos, autocomplete suggestions and similar.
- Search results as a raw input for your own processing (parsing, screenshots, summaries).

## Use another API when

- You need keyword metrics such as search volume, CPC or difficulty: `KeywordsDataApi` or `DataforseoLabsApi`.
- You need many keywords or domains at once, historical rankings or the keywords a domain ranks for, without crawling each SERP: `DataforseoLabsApi`.
- You need marketplace product data (Amazon, Google Shopping): `MerchantApi`; app store data: `AppDataApi`; business profiles and reviews: `BusinessDataApi`.
- You need answers of LLM chat assistants rather than search engines: `AiOptimizationApi`.

## Examples

Generated from the API specification in the same way as the client tests. Replace `USERNAME` / `PASSWORD` with your API login and password. The examples use top-level `await` (ES module) and the global `fetch` (Node 18+ or a browser).

### googleOrganicTaskPost

`POST /v3/serp/google/organic/task_post`

```typescript
import { SerpApi, SerpGoogleOrganicTaskPostRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new SerpApi("https://api.dataforseo.com", {
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

let task = new SerpGoogleOrganicTaskPostRequestInfo();
task.language_code = "en";
task.location_code = 2840;
task.keyword = "albert einstein";
let response = await api.googleOrganicTaskPost([task]);
```

### googleOrganicTaskGetAdvanced

`GET /v3/serp/google/organic/task_get/advanced/{id}`

```typescript
import { SerpApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new SerpApi("https://api.dataforseo.com", {
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
let response = await api.googleOrganicTaskGetAdvanced(id);
```

### googleOrganicTaskGetHtml

`GET /v3/serp/google/organic/task_get/html/{id}`

```typescript
import { SerpApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new SerpApi("https://api.dataforseo.com", {
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
let response = await api.googleOrganicTaskGetHtml(id);
```

### googleMapsTaskGetAdvanced

`GET /v3/serp/google/maps/task_get/advanced/{id}`

```typescript
import { SerpApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new SerpApi("https://api.dataforseo.com", {
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
let response = await api.googleMapsTaskGetAdvanced(id);
```

### googleMapsTaskPost

`POST /v3/serp/google/maps/task_post`

```typescript
import { SerpApi, SerpGoogleMapsTaskPostRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new SerpApi("https://api.dataforseo.com", {
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

let task = new SerpGoogleMapsTaskPostRequestInfo();
task.language_code = "en";
task.location_code = 2840;
task.keyword = "albert einstein";
let response = await api.googleMapsTaskPost([task]);
```

### googleOrganicTaskGetRegular

`GET /v3/serp/google/organic/task_get/regular/{id}`

```typescript
import { SerpApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new SerpApi("https://api.dataforseo.com", {
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
let response = await api.googleOrganicTaskGetRegular(id);
```

### googleOrganicLiveAdvanced

`POST /v3/serp/google/organic/live/advanced`

```typescript
import { SerpApi, SerpGoogleOrganicLiveAdvancedRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new SerpApi("https://api.dataforseo.com", {
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

let task = new SerpGoogleOrganicLiveAdvancedRequestInfo();
task.language_code = "en";
task.location_code = 2840;
task.keyword = "albert einstein";
task.calculate_rectangles = true;
let response = await api.googleOrganicLiveAdvanced([task]);
```

### googleOrganicTasksReady

`GET /v3/serp/google/organic/tasks_ready`

```typescript
import { SerpApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new SerpApi("https://api.dataforseo.com", {
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

let response = await api.googleOrganicTasksReady();
```

### googleAiModeTaskPost

`POST /v3/serp/google/ai_mode/task_post`

```typescript
import { SerpApi, SerpGoogleAiModeTaskPostRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new SerpApi("https://api.dataforseo.com", {
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

let task = new SerpGoogleAiModeTaskPostRequestInfo();
task.language_code = "en";
task.location_code = 2840;
task.keyword = "what is google ai mode";
let response = await api.googleAiModeTaskPost([task]);
```

## Endpoints

All methods of `SerpApi`. Request and response model names are derived from the path (see SKILL.md).

| Method | HTTP | Path |
|---|---|---|
| `idList` | POST | `/v3/serp/id_list` |
| `errors` | POST | `/v3/serp/errors` |
| `screenshot` | POST | `/v3/serp/screenshot` |
| `aiSummary` | POST | `/v3/serp/ai_summary` |
| `googleLocations` | GET | `/v3/serp/google/locations` |
| `googleLocationsCountry` | GET | `/v3/serp/google/locations/{country}` |
| `googleLanguages` | GET | `/v3/serp/google/languages` |
| `googleOrganicTaskPost` | POST | `/v3/serp/google/organic/task_post` |
| `googleOrganicTasksReady` | GET | `/v3/serp/google/organic/tasks_ready` |
| `tasksReady` | GET | `/v3/serp/tasks_ready` |
| `googleOrganicTasksFixed` | GET | `/v3/serp/google/organic/tasks_fixed` |
| `googleOrganicTaskGetRegular` | GET | `/v3/serp/google/organic/task_get/regular/{id}` |
| `googleOrganicTaskGetAdvanced` | GET | `/v3/serp/google/organic/task_get/advanced/{id}` |
| `googleOrganicTaskGetHtml` | GET | `/v3/serp/google/organic/task_get/html/{id}` |
| `googleOrganicLiveRegular` | POST | `/v3/serp/google/organic/live/regular` |
| `googleOrganicLiveAdvanced` | POST | `/v3/serp/google/organic/live/advanced` |
| `googleOrganicLiveHtml` | POST | `/v3/serp/google/organic/live/html` |
| `googleAiModeLanguages` | GET | `/v3/serp/google/ai_mode/languages` |
| `googleAiModeTaskPost` | POST | `/v3/serp/google/ai_mode/task_post` |
| `googleAiModeTasksReady` | GET | `/v3/serp/google/ai_mode/tasks_ready` |
| `googleAiModeTasksFixed` | GET | `/v3/serp/google/ai_mode/tasks_fixed` |
| `googleAiModeTaskGetAdvanced` | GET | `/v3/serp/google/ai_mode/task_get/advanced/{id}` |
| `googleAiModeTaskGetHtml` | GET | `/v3/serp/google/ai_mode/task_get/html/{id}` |
| `googleAiModeLiveAdvanced` | POST | `/v3/serp/google/ai_mode/live/advanced` |
| `googleAiModeLiveHtml` | POST | `/v3/serp/google/ai_mode/live/html` |
| `googleMapsTaskPost` | POST | `/v3/serp/google/maps/task_post` |
| `googleMapsTasksReady` | GET | `/v3/serp/google/maps/tasks_ready` |
| `googleMapsTasksFixed` | GET | `/v3/serp/google/maps/tasks_fixed` |
| `googleMapsTaskGetAdvanced` | GET | `/v3/serp/google/maps/task_get/advanced/{id}` |
| `googleMapsLiveAdvanced` | POST | `/v3/serp/google/maps/live/advanced` |
| `googleLocalFinderTaskPost` | POST | `/v3/serp/google/local_finder/task_post` |
| `googleLocalFinderTasksReady` | GET | `/v3/serp/google/local_finder/tasks_ready` |
| `googleLocalFinderTasksFixed` | GET | `/v3/serp/google/local_finder/tasks_fixed` |
| `googleLocalFinderTaskGetAdvanced` | GET | `/v3/serp/google/local_finder/task_get/advanced/{id}` |
| `googleLocalFinderTaskGetHtml` | GET | `/v3/serp/google/local_finder/task_get/html/{id}` |
| `googleLocalFinderLiveAdvanced` | POST | `/v3/serp/google/local_finder/live/advanced` |
| `googleLocalFinderLiveHtml` | POST | `/v3/serp/google/local_finder/live/html` |
| `googleNewsTaskPost` | POST | `/v3/serp/google/news/task_post` |
| `googleNewsTasksReady` | GET | `/v3/serp/google/news/tasks_ready` |
| `googleNewsTasksFixed` | GET | `/v3/serp/google/news/tasks_fixed` |
| `googleNewsTaskGetAdvanced` | GET | `/v3/serp/google/news/task_get/advanced/{id}` |
| `googleNewsTaskGetHtml` | GET | `/v3/serp/google/news/task_get/html/{id}` |
| `googleNewsLiveAdvanced` | POST | `/v3/serp/google/news/live/advanced` |
| `googleNewsLiveHtml` | POST | `/v3/serp/google/news/live/html` |
| `googleImagesTaskPost` | POST | `/v3/serp/google/images/task_post` |
| `googleImagesTasksReady` | GET | `/v3/serp/google/images/tasks_ready` |
| `googleImagesTasksFixed` | GET | `/v3/serp/google/images/tasks_fixed` |
| `googleImagesTaskGetAdvanced` | GET | `/v3/serp/google/images/task_get/advanced/{id}` |
| `googleImagesTaskGetHtml` | GET | `/v3/serp/google/images/task_get/html/{id}` |
| `googleImagesLiveAdvanced` | POST | `/v3/serp/google/images/live/advanced` |
| `googleImagesLiveHtml` | POST | `/v3/serp/google/images/live/html` |
| `googleSearchByImageTaskPost` | POST | `/v3/serp/google/search_by_image/task_post` |
| `googleSearchByImageTasksReady` | GET | `/v3/serp/google/search_by_image/tasks_ready` |
| `googleSearchByImageTasksFixed` | GET | `/v3/serp/google/search_by_image/tasks_fixed` |
| `googleSearchByImageTaskGetAdvanced` | GET | `/v3/serp/google/search_by_image/task_get/advanced/{id}` |
| `googleJobsTaskPost` | POST | `/v3/serp/google/jobs/task_post` |
| `googleJobsTasksReady` | GET | `/v3/serp/google/jobs/tasks_ready` |
| `googleJobsTasksFixed` | GET | `/v3/serp/google/jobs/tasks_fixed` |
| `googleJobsTaskGetAdvanced` | GET | `/v3/serp/google/jobs/task_get/advanced/{id}` |
| `googleJobsTaskGetHtml` | GET | `/v3/serp/google/jobs/task_get/html/{id}` |
| `googleAutocompleteTaskPost` | POST | `/v3/serp/google/autocomplete/task_post` |
| `googleAutocompleteTasksReady` | GET | `/v3/serp/google/autocomplete/tasks_ready` |
| `googleAutocompleteTasksFixed` | GET | `/v3/serp/google/autocomplete/tasks_fixed` |
| `googleAutocompleteTaskGetAdvanced` | GET | `/v3/serp/google/autocomplete/task_get/advanced/{id}` |
| `googleAutocompleteLiveAdvanced` | POST | `/v3/serp/google/autocomplete/live/advanced` |
| `googleDatasetSearchTaskPost` | POST | `/v3/serp/google/dataset_search/task_post` |
| `googleDatasetSearchTasksReady` | GET | `/v3/serp/google/dataset_search/tasks_ready` |
| `googleDatasetSearchTasksFixed` | GET | `/v3/serp/google/dataset_search/tasks_fixed` |
| `googleDatasetSearchTaskGetAdvanced` | GET | `/v3/serp/google/dataset_search/task_get/advanced/{id}` |
| `googleDatasetSearchLiveAdvanced` | POST | `/v3/serp/google/dataset_search/live/advanced` |
| `googleDatasetInfoTaskPost` | POST | `/v3/serp/google/dataset_info/task_post` |
| `googleDatasetInfoTasksReady` | GET | `/v3/serp/google/dataset_info/tasks_ready` |
| `googleDatasetInfoTasksFixed` | GET | `/v3/serp/google/dataset_info/tasks_fixed` |
| `googleDatasetInfoTaskGetAdvanced` | GET | `/v3/serp/google/dataset_info/task_get/advanced/{id}` |
| `googleDatasetInfoLiveAdvanced` | POST | `/v3/serp/google/dataset_info/live/advanced` |
| `googleAdsAdvertisersLocations` | GET | `/v3/serp/google/ads_advertisers/locations` |
| `googleAdsAdvertisersTaskPost` | POST | `/v3/serp/google/ads_advertisers/task_post` |
| `googleAdsAdvertisersTasksReady` | GET | `/v3/serp/google/ads_advertisers/tasks_ready` |
| `googleAdsAdvertisersTaskGetAdvanced` | GET | `/v3/serp/google/ads_advertisers/task_get/advanced/{id}` |
| `googleAdsSearchLocations` | GET | `/v3/serp/google/ads_search/locations` |
| `googleAdsSearchTaskPost` | POST | `/v3/serp/google/ads_search/task_post` |
| `googleAdsSearchTasksReady` | GET | `/v3/serp/google/ads_search/tasks_ready` |
| `googleAdsSearchTaskGetAdvanced` | GET | `/v3/serp/google/ads_search/task_get/advanced/{id}` |
| `bingLocations` | GET | `/v3/serp/bing/locations` |
| `bingLocationsCountry` | GET | `/v3/serp/bing/locations/{country}` |
| `bingLanguages` | GET | `/v3/serp/bing/languages` |
| `bingOrganicTaskPost` | POST | `/v3/serp/bing/organic/task_post` |
| `bingOrganicTasksReady` | GET | `/v3/serp/bing/organic/tasks_ready` |
| `bingOrganicTasksFixed` | GET | `/v3/serp/bing/organic/tasks_fixed` |
| `bingOrganicTaskGetRegular` | GET | `/v3/serp/bing/organic/task_get/regular/{id}` |
| `bingOrganicTaskGetAdvanced` | GET | `/v3/serp/bing/organic/task_get/advanced/{id}` |
| `bingOrganicTaskGetHtml` | GET | `/v3/serp/bing/organic/task_get/html/{id}` |
| `bingOrganicLiveRegular` | POST | `/v3/serp/bing/organic/live/regular` |
| `bingOrganicLiveAdvanced` | POST | `/v3/serp/bing/organic/live/advanced` |
| `bingOrganicLiveHtml` | POST | `/v3/serp/bing/organic/live/html` |
| `youtubeLocations` | GET | `/v3/serp/youtube/locations` |
| `youtubeLocationsCountry` | GET | `/v3/serp/youtube/locations/{country}` |
| `youtubeLanguages` | GET | `/v3/serp/youtube/languages` |
| `youtubeVideoInfoTaskPost` | POST | `/v3/serp/youtube/video_info/task_post` |
| `youtubeVideoInfoTasksReady` | GET | `/v3/serp/youtube/video_info/tasks_ready` |
| `youtubeVideoInfoTasksFixed` | GET | `/v3/serp/youtube/video_info/tasks_fixed` |
| `youtubeVideoInfoTaskGetAdvanced` | GET | `/v3/serp/youtube/video_info/task_get/advanced/{id}` |
| `youtubeVideoInfoLiveAdvanced` | POST | `/v3/serp/youtube/video_info/live/advanced` |
| `youtubeOrganicTaskPost` | POST | `/v3/serp/youtube/organic/task_post` |
| `youtubeOrganicTasksReady` | GET | `/v3/serp/youtube/organic/tasks_ready` |
| `youtubeOrganicTasksFixed` | GET | `/v3/serp/youtube/organic/tasks_fixed` |
| `youtubeOrganicTaskGetAdvanced` | GET | `/v3/serp/youtube/organic/task_get/advanced/{id}` |
| `youtubeOrganicLiveAdvanced` | POST | `/v3/serp/youtube/organic/live/advanced` |
| `youtubeVideoSubtitlesTaskPost` | POST | `/v3/serp/youtube/video_subtitles/task_post` |
| `youtubeVideoSubtitlesTasksReady` | GET | `/v3/serp/youtube/video_subtitles/tasks_ready` |
| `youtubeVideoSubtitlesTasksFixed` | GET | `/v3/serp/youtube/video_subtitles/tasks_fixed` |
| `youtubeVideoSubtitlesTaskGetAdvanced` | GET | `/v3/serp/youtube/video_subtitles/task_get/advanced/{id}` |
| `youtubeVideoSubtitlesLiveAdvanced` | POST | `/v3/serp/youtube/video_subtitles/live/advanced` |
| `youtubeVideoCommentsTaskPost` | POST | `/v3/serp/youtube/video_comments/task_post` |
| `youtubeVideoCommentsTasksReady` | GET | `/v3/serp/youtube/video_comments/tasks_ready` |
| `youtubeVideoCommentsTasksFixed` | GET | `/v3/serp/youtube/video_comments/tasks_fixed` |
| `youtubeVideoCommentsTaskGetAdvanced` | GET | `/v3/serp/youtube/video_comments/task_get/advanced/{id}` |
| `youtubeVideoCommentsLiveAdvanced` | POST | `/v3/serp/youtube/video_comments/live/advanced` |
| `yahooLocations` | GET | `/v3/serp/yahoo/locations` |
| `yahooLocationsCountry` | GET | `/v3/serp/yahoo/locations/{country}` |
| `yahooLanguages` | GET | `/v3/serp/yahoo/languages` |
| `yahooOrganicTaskPost` | POST | `/v3/serp/yahoo/organic/task_post` |
| `yahooOrganicTasksReady` | GET | `/v3/serp/yahoo/organic/tasks_ready` |
| `yahooOrganicTasksFixed` | GET | `/v3/serp/yahoo/organic/tasks_fixed` |
| `yahooOrganicTaskGetRegular` | GET | `/v3/serp/yahoo/organic/task_get/regular/{id}` |
| `yahooOrganicTaskGetAdvanced` | GET | `/v3/serp/yahoo/organic/task_get/advanced/{id}` |
| `yahooOrganicTaskGetHtml` | GET | `/v3/serp/yahoo/organic/task_get/html/{id}` |
| `yahooOrganicLiveRegular` | POST | `/v3/serp/yahoo/organic/live/regular` |
| `yahooOrganicLiveAdvanced` | POST | `/v3/serp/yahoo/organic/live/advanced` |
| `yahooOrganicLiveHtml` | POST | `/v3/serp/yahoo/organic/live/html` |
| `baiduLocations` | GET | `/v3/serp/baidu/locations` |
| `baiduLocationsCountry` | GET | `/v3/serp/baidu/locations/{country}` |
| `baiduLanguages` | GET | `/v3/serp/baidu/languages` |
| `baiduOrganicTaskPost` | POST | `/v3/serp/baidu/organic/task_post` |
| `baiduOrganicTasksReady` | GET | `/v3/serp/baidu/organic/tasks_ready` |
| `baiduOrganicTasksFixed` | GET | `/v3/serp/baidu/organic/tasks_fixed` |
| `baiduOrganicTaskGetRegular` | GET | `/v3/serp/baidu/organic/task_get/regular/{id}` |
| `baiduOrganicTaskGetAdvanced` | GET | `/v3/serp/baidu/organic/task_get/advanced/{id}` |
| `baiduOrganicTaskGetHtml` | GET | `/v3/serp/baidu/organic/task_get/html/{id}` |
| `naverOrganicTaskPost` | POST | `/v3/serp/naver/organic/task_post` |
| `naverOrganicTasksReady` | GET | `/v3/serp/naver/organic/tasks_ready` |
| `naverOrganicTasksFixed` | GET | `/v3/serp/naver/organic/tasks_fixed` |
| `naverOrganicTaskGetRegular` | GET | `/v3/serp/naver/organic/task_get/regular/{id}` |
| `naverOrganicTaskGetAdvanced` | GET | `/v3/serp/naver/organic/task_get/advanced/{id}` |
| `naverOrganicTaskGetHtml` | GET | `/v3/serp/naver/organic/task_get/html/{id}` |
| `seznamLocations` | GET | `/v3/serp/seznam/locations` |
| `seznamLocationsCountry` | GET | `/v3/serp/seznam/locations/{country}` |
| `seznamLanguages` | GET | `/v3/serp/seznam/languages` |
| `seznamOrganicTaskPost` | POST | `/v3/serp/seznam/organic/task_post` |
| `seznamOrganicTasksReady` | GET | `/v3/serp/seznam/organic/tasks_ready` |
| `seznamOrganicTasksFixed` | GET | `/v3/serp/seznam/organic/tasks_fixed` |
| `seznamOrganicTaskGetRegular` | GET | `/v3/serp/seznam/organic/task_get/regular/{id}` |
| `seznamOrganicTaskGetAdvanced` | GET | `/v3/serp/seznam/organic/task_get/advanced/{id}` |
| `seznamOrganicTaskGetHtml` | GET | `/v3/serp/seznam/organic/task_get/html/{id}` |
| `googleFinanceExploreTaskPost` | POST | `/v3/serp/google/finance_explore/task_post` |
| `googleFinanceExploreTasksReady` | GET | `/v3/serp/google/finance_explore/tasks_ready` |
| `googleFinanceExploreTaskGetAdvanced` | GET | `/v3/serp/google/finance_explore/task_get/advanced/{id}` |
| `googleFinanceExploreTaskGetHtml` | GET | `/v3/serp/google/finance_explore/task_get/html/{id}` |
| `googleFinanceExploreLiveAdvanced` | POST | `/v3/serp/google/finance_explore/live/advanced` |
| `googleFinanceExploreLiveHtml` | POST | `/v3/serp/google/finance_explore/live/html` |
| `googleFinanceMarketsTaskPost` | POST | `/v3/serp/google/finance_markets/task_post` |
| `googleFinanceMarketsTasksReady` | GET | `/v3/serp/google/finance_markets/tasks_ready` |
| `googleFinanceMarketsTaskGetAdvanced` | GET | `/v3/serp/google/finance_markets/task_get/advanced/{id}` |
| `googleFinanceMarketsTaskGetHtml` | GET | `/v3/serp/google/finance_markets/task_get/html/{id}` |
| `googleFinanceMarketsLiveAdvanced` | POST | `/v3/serp/google/finance_markets/live/advanced` |
| `googleFinanceMarketsLiveHtml` | POST | `/v3/serp/google/finance_markets/live/html` |
| `googleFinanceQuoteTaskPost` | POST | `/v3/serp/google/finance_quote/task_post` |
| `googleFinanceQuoteTasksReady` | GET | `/v3/serp/google/finance_quote/tasks_ready` |
| `googleFinanceQuoteTaskGetAdvanced` | GET | `/v3/serp/google/finance_quote/task_get/advanced/{id}` |
| `googleFinanceQuoteTaskGetHtml` | GET | `/v3/serp/google/finance_quote/task_get/html/{id}` |
| `googleFinanceQuoteLiveAdvanced` | POST | `/v3/serp/google/finance_quote/live/advanced` |
| `googleFinanceQuoteLiveHtml` | POST | `/v3/serp/google/finance_quote/live/html` |
| `googleFinanceTickerSearchTaskPost` | POST | `/v3/serp/google/finance_ticker_search/task_post` |
| `googleFinanceTickerSearchTasksReady` | GET | `/v3/serp/google/finance_ticker_search/tasks_ready` |
| `googleFinanceTickerSearchTaskGetAdvanced` | GET | `/v3/serp/google/finance_ticker_search/task_get/advanced/{id}` |
| `googleFinanceTickerSearchLiveAdvanced` | POST | `/v3/serp/google/finance_ticker_search/live/advanced` |