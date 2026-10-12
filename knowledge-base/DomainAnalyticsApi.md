# DomainAnalyticsApi

Knowledge base for `DomainAnalyticsApi` of the DataForSEO TypeScript client. Naming rules, the response envelope, polymorphic items and errors are described in [SKILL.md](../SKILL.md).

Information about websites as such: the technologies a site is built with (CMS, analytics, frameworks, advertising and other tools), which sites use a given technology, statistics of technology usage, and domain registration (Whois) data enriched with search and backlink metrics.

## Use it when you need

- The technology profile of a website.
- Lists of websites that use a technology or contain certain terms in their HTML, for lead generation or market research, filtered by country, language or popularity.
- Market share and adoption trends of technologies.
- Domain registration details (registrar, creation, update and expiration dates), for example to find expiring domains, together with traffic and backlink indicators.

## Use another API when

- You need the content, technical SEO health or performance of a website's pages: `OnPageApi`.
- You need a website's backlinks: `BacklinksApi`; its keywords, rankings or traffic estimates: `DataforseoLabsApi`.

## Examples

Generated from the API specification in the same way as the client tests. Replace `USERNAME` / `PASSWORD` with your API login and password. The examples use top-level `await` (ES module) and the global `fetch` (Node 18+ or a browser).

### technologiesDomainTechnologiesLive

`POST /v3/domain_analytics/technologies/domain_technologies/live`

```typescript
import { DomainAnalyticsApi, DomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
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

let task = new DomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo();
task.target = "dataforseo.com";
let response = await api.technologiesDomainTechnologiesLive([task]);
```

### whoisOverviewLive

`POST /v3/domain_analytics/whois/overview/live`

```typescript
import { DomainAnalyticsApi, DomainAnalyticsWhoisOverviewLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
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

let task = new DomainAnalyticsWhoisOverviewLiveRequestInfo();
task.limit = 2;
task.filters = [
  [
    "epp_status_codes",
    "in",
    [
      "client_transfer_prohibited",
      "client_update_prohibited",
    ],
  ],
];
let response = await api.whoisOverviewLive([task]);
```

### technologiesDomainsByTechnologyLive

`POST /v3/domain_analytics/technologies/domains_by_technology/live`

```typescript
import { DomainAnalyticsApi, DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
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

let task = new DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo();
task.technologies = [
  "Nginx",
];
task.filters = [
  [
    "country_iso_code",
    "=",
    "US",
  ],
  "and",
  [
    "domain_rank",
    ">",
    800,
  ],
];
task.order_by = [
  "last_visited,desc",
];
task.limit = 10;
let response = await api.technologiesDomainsByTechnologyLive([task]);
```

### domainAnalyticsIdList

`POST /v3/domain_analytics/id_list`

```typescript
import { DomainAnalyticsApi, DomainAnalyticsIdListRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
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

let task = new DomainAnalyticsIdListRequestInfo();
task.limit = 10;
task.include_metadata = true;
let response = await api.domainAnalyticsIdList([task]);
```

### technologiesDomainsByHtmlTermsLive

`POST /v3/domain_analytics/technologies/domains_by_html_terms/live`

```typescript
import { DomainAnalyticsApi, DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
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

let task = new DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo();
task.search_terms = [
  "data-attrid",
];
task.order_by = [
  "last_visited,desc",
];
task.limit = 10;
task.offset = 0;
let response = await api.technologiesDomainsByHtmlTermsLive([task]);
```

### technologiesTechnologies

`GET /v3/domain_analytics/technologies/technologies`

```typescript
import { DomainAnalyticsApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
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

let response = await api.technologiesTechnologies();
```

### technologiesAggregationTechnologiesLive

`POST /v3/domain_analytics/technologies/aggregation_technologies/live`

```typescript
import { DomainAnalyticsApi, DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
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

let task = new DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo();
task.mode = "entry";
task.technology = "Nginx";
task.keyword = "WordPress";
task.filters = [
  [
    "country_iso_code",
    "=",
    "US",
  ],
  "and",
  [
    "domain_rank",
    ">",
    800,
  ],
];
task.order_by = [
  "groups_count,desc",
];
task.limit = 10;
let response = await api.technologiesAggregationTechnologiesLive([task]);
```

### technologiesTechnologiesSummaryLive

`POST /v3/domain_analytics/technologies/technologies_summary/live`

```typescript
import { DomainAnalyticsApi, DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
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

let task = new DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo();
task.mode = "entry";
task.technologies = [
  "Ngi",
];
task.keywords = [
  "WordPress",
];
task.filters = [
  [
    "country_iso_code",
    "=",
    "US",
  ],
  "and",
  [
    "domain_rank",
    ">",
    800,
  ],
];
let response = await api.technologiesTechnologiesSummaryLive([task]);
```

### technologiesLocations

`GET /v3/domain_analytics/technologies/locations`

```typescript
import { DomainAnalyticsApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
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

let response = await api.technologiesLocations();
```

### technologiesTechnologyStatsLive

`POST /v3/domain_analytics/technologies/technology_stats/live`

```typescript
import { DomainAnalyticsApi, DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new DomainAnalyticsApi("https://api.dataforseo.com", {
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

let task = new DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo();
task.technology = "jQuery";
let response = await api.technologiesTechnologyStatsLive([task]);
```

## Endpoints

All methods of `DomainAnalyticsApi`. Request and response model names are derived from the path (see SKILL.md).

| Method | HTTP | Path |
|---|---|---|
| `domainAnalyticsIdList` | POST | `/v3/domain_analytics/id_list` |
| `domainAnalyticsErrors` | POST | `/v3/domain_analytics/errors` |
| `technologiesAvailableFilters` | GET | `/v3/domain_analytics/technologies/available_filters` |
| `technologiesLocations` | GET | `/v3/domain_analytics/technologies/locations` |
| `technologiesLanguages` | GET | `/v3/domain_analytics/technologies/languages` |
| `technologiesTechnologies` | GET | `/v3/domain_analytics/technologies/technologies` |
| `technologiesAggregationTechnologiesLive` | POST | `/v3/domain_analytics/technologies/aggregation_technologies/live` |
| `technologiesTechnologiesSummaryLive` | POST | `/v3/domain_analytics/technologies/technologies_summary/live` |
| `technologiesTechnologyStatsLive` | POST | `/v3/domain_analytics/technologies/technology_stats/live` |
| `technologiesDomainsByTechnologyLive` | POST | `/v3/domain_analytics/technologies/domains_by_technology/live` |
| `technologiesDomainsByHtmlTermsLive` | POST | `/v3/domain_analytics/technologies/domains_by_html_terms/live` |
| `technologiesDomainTechnologiesLive` | POST | `/v3/domain_analytics/technologies/domain_technologies/live` |
| `whoisAvailableFilters` | GET | `/v3/domain_analytics/whois/available_filters` |
| `whoisOverviewLive` | POST | `/v3/domain_analytics/whois/overview/live` |