# BacklinksApi

Knowledge base for `BacklinksApi` of the DataForSEO TypeScript client. Naming rules, the response envelope, polymorphic items and errors are described in [SKILL.md](../SKILL.md).

Backlink data for any domain, subdomain or web page from DataForSEO's continuously updated link index: inbound links, referring domains, pages and networks, anchor texts, link-based authority (rank) and spam score, how the link profile changes over time, and how it compares with other sites.

Data is returned immediately from the index and can be filtered, sorted and paged. Many metrics are also available in bulk for large lists of targets.

## Use it when you need

- An overview of a site's link profile and authority.
- Detailed lists of backlinks, referring domains or anchors of a target, filtered by attributes such as dofollow, first seen date or authority.
- New and lost links over time, or the history of a link profile.
- Link building and competitive research: sites with similar link profiles, or domains that link to competitors but not to you.
- Quick authority or spam checks for many domains or URLs at once.

## Use another API when

- You need search rankings, keywords or traffic of a site: `DataforseoLabsApi` or `SerpApi`.
- You need a technical audit of a site, including its internal and outgoing links: `OnPageApi`.
- You need mentions of a brand without a link: `ContentAnalysisApi` (web) or `AiOptimizationApi` (AI answers).

## Examples

Generated from the API specification in the same way as the client tests. Replace `USERNAME` / `PASSWORD` with your API login and password. The examples use top-level `await` (ES module) and the global `fetch` (Node 18+ or a browser).

### backlinksLive

`POST /v3/backlinks/backlinks/live`

```typescript
import { BacklinksApi, BacklinksBacklinksLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new BacklinksApi("https://api.dataforseo.com", {
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

let task = new BacklinksBacklinksLiveRequestInfo();
task.target = "forbes.com";
task.mode = "as_is";
task.filters = [
  "dofollow",
  "=",
  true,
];
task.limit = 5;
let response = await api.backlinksLive([task]);
```

### summaryLive

`POST /v3/backlinks/summary/live`

```typescript
import { BacklinksApi, BacklinksSummaryLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new BacklinksApi("https://api.dataforseo.com", {
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

let task = new BacklinksSummaryLiveRequestInfo();
task.target = "explodingtopics.com";
task.internal_list_limit = 10;
task.include_subdomains = true;
task.backlinks_filters = [
  "dofollow",
  "=",
  true,
];
task.backlinks_status_type = "all";
let response = await api.summaryLive([task]);
```

### referringDomainsLive

`POST /v3/backlinks/referring_domains/live`

```typescript
import { BacklinksApi, BacklinksReferringDomainsLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new BacklinksApi("https://api.dataforseo.com", {
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

let task = new BacklinksReferringDomainsLiveRequestInfo();
task.target = "backlinko.com";
task.limit = 5;
task.order_by = [
  "rank,desc",
];
task.exclude_internal_backlinks = true;
task.backlinks_filters = [
  "dofollow",
  "=",
  true,
];
task.filters = [
  "backlinks",
  ">",
  100,
];
let response = await api.referringDomainsLive([task]);
```

### bulkRanksLive

`POST /v3/backlinks/bulk_ranks/live`

```typescript
import { BacklinksApi, BacklinksBulkRanksLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new BacklinksApi("https://api.dataforseo.com", {
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

let task = new BacklinksBulkRanksLiveRequestInfo();
task.targets = [
  "forbes.com",
  "cnn.com",
  "bbc.com",
  "yelp.com",
  "https://www.apple.com/iphone/",
  "https://ahrefs.com/blog/",
  "ibm.com",
  "https://variety.com/",
  "https://stackoverflow.com/",
  "www.trustpilot.com",
];
let response = await api.bulkRanksLive([task]);
```

### anchorsLive

`POST /v3/backlinks/anchors/live`

```typescript
import { BacklinksApi, BacklinksAnchorsLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new BacklinksApi("https://api.dataforseo.com", {
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

let task = new BacklinksAnchorsLiveRequestInfo();
task.target = "forbes.com";
task.limit = 4;
task.order_by = [
  "backlinks,desc",
];
task.filters = [
  "anchor",
  "like",
  "%news%",
];
let response = await api.anchorsLive([task]);
```

### bulkReferringDomainsLive

`POST /v3/backlinks/bulk_referring_domains/live`

```typescript
import { BacklinksApi, BacklinksBulkReferringDomainsLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new BacklinksApi("https://api.dataforseo.com", {
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

let task = new BacklinksBulkReferringDomainsLiveRequestInfo();
task.targets = [
  "forbes.com",
  "cnn.com",
  "bbc.com",
  "yelp.com",
  "https://www.apple.com/iphone/",
  "https://ahrefs.com/blog/",
  "ibm.com",
  "https://variety.com/",
  "https://stackoverflow.com/",
  "www.trustpilot.com",
];
let response = await api.bulkReferringDomainsLive([task]);
```

### bulkPagesSummaryLive

`POST /v3/backlinks/bulk_pages_summary/live`

```typescript
import { BacklinksApi, BacklinksBulkPagesSummaryLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new BacklinksApi("https://api.dataforseo.com", {
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

let task = new BacklinksBulkPagesSummaryLiveRequestInfo();
task.targets = [
  "https://dataforseo.com/solutions",
  "https://dataforseo.com/about-us",
];
let response = await api.bulkPagesSummaryLive([task]);
```

### historyLive

`POST /v3/backlinks/history/live`

```typescript
import { BacklinksApi, BacklinksHistoryLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new BacklinksApi("https://api.dataforseo.com", {
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

let task = new BacklinksHistoryLiveRequestInfo();
task.target = "cnn.com";
let response = await api.historyLive([task]);
```

### bulkBacklinksLive

`POST /v3/backlinks/bulk_backlinks/live`

```typescript
import { BacklinksApi, BacklinksBulkBacklinksLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new BacklinksApi("https://api.dataforseo.com", {
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

let task = new BacklinksBulkBacklinksLiveRequestInfo();
task.targets = [
  "forbes.com",
  "cnn.com",
  "bbc.com",
  "yelp.com",
  "https://www.apple.com/iphone/",
  "https://ahrefs.com/blog/",
  "ibm.com",
  "https://variety.com/",
  "https://stackoverflow.com/",
  "www.trustpilot.com",
];
let response = await api.bulkBacklinksLive([task]);
```

## Endpoints

All methods of `BacklinksApi`. Request and response model names are derived from the path (see SKILL.md).

| Method | HTTP | Path |
|---|---|---|
| `backlinksIdList` | POST | `/v3/backlinks/id_list` |
| `backlinksErrors` | POST | `/v3/backlinks/errors` |
| `backlinksAvailableFilters` | GET | `/v3/backlinks/available_filters` |
| `index` | GET | `/v3/backlinks/index` |
| `summaryLive` | POST | `/v3/backlinks/summary/live` |
| `historyLive` | POST | `/v3/backlinks/history/live` |
| `backlinksLive` | POST | `/v3/backlinks/backlinks/live` |
| `anchorsLive` | POST | `/v3/backlinks/anchors/live` |
| `domainPagesLive` | POST | `/v3/backlinks/domain_pages/live` |
| `domainPagesSummaryLive` | POST | `/v3/backlinks/domain_pages_summary/live` |
| `referringDomainsLive` | POST | `/v3/backlinks/referring_domains/live` |
| `referringNetworksLive` | POST | `/v3/backlinks/referring_networks/live` |
| `competitorsLive` | POST | `/v3/backlinks/competitors/live` |
| `domainIntersectionLive` | POST | `/v3/backlinks/domain_intersection/live` |
| `pageIntersectionLive` | POST | `/v3/backlinks/page_intersection/live` |
| `timeseriesSummaryLive` | POST | `/v3/backlinks/timeseries_summary/live` |
| `timeseriesNewLostSummaryLive` | POST | `/v3/backlinks/timeseries_new_lost_summary/live` |
| `bulkRanksLive` | POST | `/v3/backlinks/bulk_ranks/live` |
| `bulkBacklinksLive` | POST | `/v3/backlinks/bulk_backlinks/live` |
| `bulkSpamScoreLive` | POST | `/v3/backlinks/bulk_spam_score/live` |
| `bulkReferringDomainsLive` | POST | `/v3/backlinks/bulk_referring_domains/live` |
| `bulkNewLostBacklinksLive` | POST | `/v3/backlinks/bulk_new_lost_backlinks/live` |
| `bulkNewLostReferringDomainsLive` | POST | `/v3/backlinks/bulk_new_lost_referring_domains/live` |
| `bulkPagesSummaryLive` | POST | `/v3/backlinks/bulk_pages_summary/live` |