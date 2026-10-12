# ContentAnalysisApi

Knowledge base for `ContentAnalysisApi` of the DataForSEO TypeScript client. Naming rules, the response envelope, polymorphic items and errors are described in [SKILL.md](../SKILL.md).

Brand monitoring and sentiment analysis across the web: pages that mention (cite) a keyword or brand, with the sentiment polarity and emotional connotations of each mention, content ratings and categories, and aggregated trends of mentions over time.

## Use it when you need

- Where and how a brand, product, person or topic is mentioned on the web: news, blogs, forums, reviews and other pages.
- Whether mentions are positive, negative or neutral, and which emotions they carry.
- An aggregated picture of mentions: top sources, countries, languages, page types and content categories.
- How the volume and sentiment of mentions change over time for a keyword or a content category.

## Use another API when

- You need links pointing to a site rather than text mentions: `BacklinksApi`.
- You need mentions in AI assistant answers: `AiOptimizationApi`.
- You need reviews of a specific business on review platforms: `BusinessDataApi`.

## Examples

Generated from the API specification in the same way as the client tests. Replace `USERNAME` / `PASSWORD` with your API login and password. The examples use top-level `await` (ES module) and the global `fetch` (Node 18+ or a browser).

### searchLive

`POST /v3/content_analysis/search/live`

```typescript
import { ContentAnalysisApi, ContentAnalysisSearchLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

let task = new ContentAnalysisSearchLiveRequestInfo();
task.keyword_fields = {
  "snippet": "logitech",
};
task.keyword = "logitech";
task.page_type = [
  "ecommerce",
  "news",
  "blogs",
  "message-boards",
  "organization",
];
task.search_mode = "as_is";
task.filters = [
  "main_domain",
  "=",
  "reviewfinder.ca",
];
task.order_by = [
  "content_info.sentiment_connotations.anger,desc",
];
task.limit = 10;
let response = await api.searchLive([task]);
```

### contentAnalysisSummaryLive

`POST /v3/content_analysis/summary/live`

```typescript
import { ContentAnalysisApi, ContentAnalysisSummaryLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

let task = new ContentAnalysisSummaryLiveRequestInfo();
task.keyword = "logitech";
task.page_type = [
  "ecommerce",
  "news",
  "blogs",
  "message-boards",
  "organization",
];
task.internal_list_limit = 8;
task.positive_connotation_threshold = 0.5;
let response = await api.contentAnalysisSummaryLive([task]);
```

### phraseTrendsLive

`POST /v3/content_analysis/phrase_trends/live`

```typescript
import { ContentAnalysisApi, ContentAnalysisPhraseTrendsLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

let task = new ContentAnalysisPhraseTrendsLiveRequestInfo();
task.keyword = "logitech";
task.search_mode = "as_is";
task.date_group = "month";
let response = await api.phraseTrendsLive([task]);
```

### contentAnalysisIdList

`POST /v3/content_analysis/id_list`

```typescript
import { ContentAnalysisApi, ContentAnalysisIdListRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

let task = new ContentAnalysisIdListRequestInfo();
task.limit = 10;
task.include_metadata = true;
let response = await api.contentAnalysisIdList([task]);
```

### sentimentAnalysisLive

`POST /v3/content_analysis/sentiment_analysis/live`

```typescript
import { ContentAnalysisApi, ContentAnalysisSentimentAnalysisLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

let task = new ContentAnalysisSentimentAnalysisLiveRequestInfo();
task.keyword = "logitech";
task.internal_list_limit = 1;
let response = await api.sentimentAnalysisLive([task]);
```

### ratingDistributionLive

`POST /v3/content_analysis/rating_distribution/live`

```typescript
import { ContentAnalysisApi, ContentAnalysisRatingDistributionLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

let task = new ContentAnalysisRatingDistributionLiveRequestInfo();
task.keyword = "logitech";
task.search_mode = "as_is";
task.internal_list_limit = 10;
let response = await api.ratingDistributionLive([task]);
```

### languages

`GET /v3/content_analysis/languages`

```typescript
import { ContentAnalysisApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

let response = await api.languages();
```

### contentAnalysisCategories

`GET /v3/content_analysis/categories`

```typescript
import { ContentAnalysisApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

let response = await api.contentAnalysisCategories();
```

### locations

`GET /v3/content_analysis/locations`

```typescript
import { ContentAnalysisApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

let response = await api.locations();
```

### categoryTrendsLive

`POST /v3/content_analysis/category_trends/live`

```typescript
import { ContentAnalysisApi, ContentAnalysisCategoryTrendsLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new ContentAnalysisApi("https://api.dataforseo.com", {
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

let task = new ContentAnalysisCategoryTrendsLiveRequestInfo();
task.category_code = 10994;
task.search_mode = "as_is";
task.date_group = "month";
let response = await api.categoryTrendsLive([task]);
```

## Endpoints

All methods of `ContentAnalysisApi`. Request and response model names are derived from the path (see SKILL.md).

| Method | HTTP | Path |
|---|---|---|
| `contentAnalysisIdList` | POST | `/v3/content_analysis/id_list` |
| `contentAnalysisAvailableFilters` | GET | `/v3/content_analysis/available_filters` |
| `locations` | GET | `/v3/content_analysis/locations` |
| `languages` | GET | `/v3/content_analysis/languages` |
| `contentAnalysisCategories` | GET | `/v3/content_analysis/categories` |
| `searchLive` | POST | `/v3/content_analysis/search/live` |
| `contentAnalysisSummaryLive` | POST | `/v3/content_analysis/summary/live` |
| `sentimentAnalysisLive` | POST | `/v3/content_analysis/sentiment_analysis/live` |
| `ratingDistributionLive` | POST | `/v3/content_analysis/rating_distribution/live` |
| `phraseTrendsLive` | POST | `/v3/content_analysis/phrase_trends/live` |
| `categoryTrendsLive` | POST | `/v3/content_analysis/category_trends/live` |