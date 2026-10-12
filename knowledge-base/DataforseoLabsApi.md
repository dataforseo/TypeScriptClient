# DataforseoLabsApi

Knowledge base for `DataforseoLabsApi` of the DataForSEO TypeScript client. Naming rules, the response envelope, polymorphic items and errors are described in [SKILL.md](../SKILL.md).

Keyword research, competitor analysis and search analytics from DataForSEO's own databases of keywords, search results and rankings, for search engines and platforms such as Google, Amazon, Google Play and the App Store.

Because the data is precomputed, one request can cover many keywords or domains, return historical data and combine metrics (search volume, keyword difficulty, search intent, rankings, estimated traffic) without crawling search results on demand.

## Use it when you need

- Keyword research: ideas, suggestions and related keywords for a topic, with their search volume, difficulty and intent.
- The keywords a domain, page, product or app ranks for, its positions and estimated traffic, now and in the past.
- Competitors of a domain, product or app in search, and the keywords they share or do not share (keyword gap).
- Market-level views: top searches, keyword categories, rankings across many domains at once.

## Use another API when

- You need live, exact search results for a specific query right now: `SerpApi`.
- You need search volume and CPC as reported by an advertising platform, ad traffic forecasts or trends: `KeywordsDataApi`.
- You need backlinks and link-based authority: `BacklinksApi`.
- You need AI search visibility rather than classic search: `AiOptimizationApi`.

## Examples

Generated from the API specification in the same way as the client tests. Replace `USERNAME` / `PASSWORD` with your API login and password. The examples use top-level `await` (ES module) and the global `fetch` (Node 18+ or a browser).

### googleRankedKeywordsLive

`POST /v3/dataforseo_labs/google/ranked_keywords/live`

```typescript
import { DataforseoLabsApi, DataforseoLabsGoogleRankedKeywordsLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DataforseoLabsApi("https://api.dataforseo.com", {
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

let task = new DataforseoLabsGoogleRankedKeywordsLiveRequestInfo();
task.target = "dataforseo.com";
task.language_name = "English";
task.location_name = "United States";
task.load_rank_absolute = true;
task.limit = 3;
let response = await api.googleRankedKeywordsLive([task]);
```

### googleKeywordSuggestionsLive

`POST /v3/dataforseo_labs/google/keyword_suggestions/live`

```typescript
import { DataforseoLabsApi, DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DataforseoLabsApi("https://api.dataforseo.com", {
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

let task = new DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo();
task.keyword = "phone";
task.location_code = 2840;
task.language_code = "en";
task.include_serp_info = true;
task.include_seed_keyword = true;
task.limit = 1;
let response = await api.googleKeywordSuggestionsLive([task]);
```

### googleDomainIntersectionLive

`POST /v3/dataforseo_labs/google/domain_intersection/live`

```typescript
import { DataforseoLabsApi, DataforseoLabsGoogleDomainIntersectionLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DataforseoLabsApi("https://api.dataforseo.com", {
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

let task = new DataforseoLabsGoogleDomainIntersectionLiveRequestInfo();
task.target_1 = "mom.com";
task.target_2 = "quora.com";
task.language_code = "en";
task.location_code = 2840;
task.include_serp_info = true;
task.limit = 3;
let response = await api.googleDomainIntersectionLive([task]);
```

### googleKeywordOverviewLive

`POST /v3/dataforseo_labs/google/keyword_overview/live`

```typescript
import { DataforseoLabsApi, DataforseoLabsGoogleKeywordOverviewLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DataforseoLabsApi("https://api.dataforseo.com", {
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

let task = new DataforseoLabsGoogleKeywordOverviewLiveRequestInfo();
task.language_code = "en";
task.location_code = 2840;
task.include_clickstream_data = true;
task.include_serp_info = true;
task.keywords = [
  "iphone",
];
let response = await api.googleKeywordOverviewLive([task]);
```

### googleHistoricalSerpsLive

`POST /v3/dataforseo_labs/google/historical_serps/live`

```typescript
import { DataforseoLabsApi, DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DataforseoLabsApi("https://api.dataforseo.com", {
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

let task = new DataforseoLabsGoogleHistoricalSerpsLiveRequestInfo();
task.keyword = "albert einstein";
task.location_code = 2840;
task.language_code = "en";
let response = await api.googleHistoricalSerpsLive([task]);
```

### googleRelatedKeywordsLive

`POST /v3/dataforseo_labs/google/related_keywords/live`

```typescript
import { DataforseoLabsApi, DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DataforseoLabsApi("https://api.dataforseo.com", {
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

let task = new DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo();
task.keyword = "phone";
task.language_name = "English";
task.location_code = 2840;
task.limit = 3;
let response = await api.googleRelatedKeywordsLive([task]);
```

### googleDomainRankOverviewLive

`POST /v3/dataforseo_labs/google/domain_rank_overview/live`

```typescript
import { DataforseoLabsApi, DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DataforseoLabsApi("https://api.dataforseo.com", {
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

let task = new DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo();
task.target = "dataforseo.com";
task.language_name = "English";
task.location_code = 2840;
let response = await api.googleDomainRankOverviewLive([task]);
```

### googleSearchIntentLive

`POST /v3/dataforseo_labs/google/search_intent/live`

```typescript
import { DataforseoLabsApi, DataforseoLabsGoogleSearchIntentLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DataforseoLabsApi("https://api.dataforseo.com", {
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

let task = new DataforseoLabsGoogleSearchIntentLiveRequestInfo();
task.keywords = [
  "login page",
  "audi a7",
  "elon musk",
  "milk store new york",
];
let response = await api.googleSearchIntentLive([task]);
```

### googleCategoriesForDomainLive

`POST /v3/dataforseo_labs/google/categories_for_domain/live`

```typescript
import { DataforseoLabsApi, DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DataforseoLabsApi("https://api.dataforseo.com", {
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

let task = new DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo();
task.target = "dataforseo.com";
task.language_code = "en";
task.location_name = "United States";
task.item_types = [
  "paid",
  "organic",
  "featured_snippet",
  "local_pack",
];
task.limit = 3;
let response = await api.googleCategoriesForDomainLive([task]);
```

## Endpoints

All methods of `DataforseoLabsApi`. Request and response model names are derived from the path (see SKILL.md).

| Method | HTTP | Path |
|---|---|---|
| `dataforseoLabsIdList` | POST | `/v3/dataforseo_labs/id_list` |
| `status` | GET | `/v3/dataforseo_labs/status` |
| `dataforseoLabsErrors` | POST | `/v3/dataforseo_labs/errors` |
| `availableFilters` | GET | `/v3/dataforseo_labs/available_filters` |
| `locationsAndLanguages` | GET | `/v3/dataforseo_labs/locations_and_languages` |
| `categories` | GET | `/v3/dataforseo_labs/categories` |
| `googleAvailableHistory` | GET | `/v3/dataforseo_labs/google/available_history` |
| `googleKeywordsForSiteLive` | POST | `/v3/dataforseo_labs/google/keywords_for_site/live` |
| `googleRelatedKeywordsLive` | POST | `/v3/dataforseo_labs/google/related_keywords/live` |
| `googleKeywordSuggestionsLive` | POST | `/v3/dataforseo_labs/google/keyword_suggestions/live` |
| `googleKeywordIdeasLive` | POST | `/v3/dataforseo_labs/google/keyword_ideas/live` |
| `googleBulkKeywordDifficultyLive` | POST | `/v3/dataforseo_labs/google/bulk_keyword_difficulty/live` |
| `googleSearchIntentLive` | POST | `/v3/dataforseo_labs/google/search_intent/live` |
| `googleCategoriesForKeywordsLanguages` | GET | `/v3/dataforseo_labs/google/categories_for_keywords/languages` |
| `googleCategoriesForDomainLive` | POST | `/v3/dataforseo_labs/google/categories_for_domain/live` |
| `googleCategoriesForKeywordsLive` | POST | `/v3/dataforseo_labs/google/categories_for_keywords/live` |
| `googleKeywordsForCategoriesLive` | POST | `/v3/dataforseo_labs/google/keywords_for_categories/live` |
| `googleDomainMetricsByCategoriesLive` | POST | `/v3/dataforseo_labs/google/domain_metrics_by_categories/live` |
| `googleTopSearchesLive` | POST | `/v3/dataforseo_labs/google/top_searches/live` |
| `googleRankedKeywordsLive` | POST | `/v3/dataforseo_labs/google/ranked_keywords/live` |
| `googleSerpCompetitorsLive` | POST | `/v3/dataforseo_labs/google/serp_competitors/live` |
| `googleCompetitorsDomainLive` | POST | `/v3/dataforseo_labs/google/competitors_domain/live` |
| `googleDomainIntersectionLive` | POST | `/v3/dataforseo_labs/google/domain_intersection/live` |
| `googleSubdomainsLive` | POST | `/v3/dataforseo_labs/google/subdomains/live` |
| `googleRelevantPagesLive` | POST | `/v3/dataforseo_labs/google/relevant_pages/live` |
| `googleDomainRankOverviewLive` | POST | `/v3/dataforseo_labs/google/domain_rank_overview/live` |
| `googleHistoricalSerpsLive` | POST | `/v3/dataforseo_labs/google/historical_serps/live` |
| `googleHistoricalRankOverviewLive` | POST | `/v3/dataforseo_labs/google/historical_rank_overview/live` |
| `googlePageIntersectionLive` | POST | `/v3/dataforseo_labs/google/page_intersection/live` |
| `googleHistoricalSearchVolumeLive` | POST | `/v3/dataforseo_labs/google/historical_search_volume/live` |
| `googleBulkTrafficEstimationLive` | POST | `/v3/dataforseo_labs/google/bulk_traffic_estimation/live` |
| `googleHistoricalBulkTrafficEstimationLive` | POST | `/v3/dataforseo_labs/google/historical_bulk_traffic_estimation/live` |
| `googleHistoricalKeywordDataLive` | POST | `/v3/dataforseo_labs/google/historical_keyword_data/live` |
| `googleKeywordOverviewLive` | POST | `/v3/dataforseo_labs/google/keyword_overview/live` |
| `amazonBulkSearchVolumeLive` | POST | `/v3/dataforseo_labs/amazon/bulk_search_volume/live` |
| `amazonRelatedKeywordsLive` | POST | `/v3/dataforseo_labs/amazon/related_keywords/live` |
| `amazonRankedKeywordsLive` | POST | `/v3/dataforseo_labs/amazon/ranked_keywords/live` |
| `amazonProductRankOverviewLive` | POST | `/v3/dataforseo_labs/amazon/product_rank_overview/live` |
| `amazonProductCompetitorsLive` | POST | `/v3/dataforseo_labs/amazon/product_competitors/live` |
| `amazonProductKeywordIntersectionsLive` | POST | `/v3/dataforseo_labs/amazon/product_keyword_intersections/live` |
| `googleBulkAppMetricsLive` | POST | `/v3/dataforseo_labs/google/bulk_app_metrics/live` |
| `googleKeywordsForAppLive` | POST | `/v3/dataforseo_labs/google/keywords_for_app/live` |
| `googleAppCompetitorsLive` | POST | `/v3/dataforseo_labs/google/app_competitors/live` |
| `googleAppIntersectionLive` | POST | `/v3/dataforseo_labs/google/app_intersection/live` |
| `appleBulkAppMetricsLive` | POST | `/v3/dataforseo_labs/apple/bulk_app_metrics/live` |
| `appleKeywordsForAppLive` | POST | `/v3/dataforseo_labs/apple/keywords_for_app/live` |
| `appleAppCompetitorsLive` | POST | `/v3/dataforseo_labs/apple/app_competitors/live` |
| `appleAppIntersectionLive` | POST | `/v3/dataforseo_labs/apple/app_intersection/live` |