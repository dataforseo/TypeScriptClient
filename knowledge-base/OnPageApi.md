# OnPageApi

Knowledge base for `OnPageApi` of the DataForSEO TypeScript client. Naming rules, the response envelope, polymorphic items and errors are described in [SKILL.md](../SKILL.md).

Technical SEO audit of websites with a configurable crawler: crawl a site and get per-page checks, resources, internal and external links, duplicates, redirects, indexability issues, keyword density and page speed data; or analyze individual pages instantly, extract their content, take screenshots and run Google Lighthouse.

A full site audit is a crawl task: it is started once and its reports can be read while the crawl is running or after it finishes. Single-page analysis returns results immediately.

## Use it when you need

- A site health check: broken pages and resources, duplicate titles, descriptions or content, redirect chains, pages blocked from indexing and other on-page issues.
- The structure of a site: its pages, resources and the links between them.
- On-page data of a single URL: meta tags, headings, checks, parsed main content or the raw HTML.
- Performance, accessibility and best-practice scores of a page.

## Use another API when

- You need inbound links from other sites: `BacklinksApi`.
- You need how pages rank in search: `SerpApi` or `DataforseoLabsApi`.
- You need which technologies a site uses: `DomainAnalyticsApi`.

## Examples

Generated from the API specification in the same way as the client tests. Replace `USERNAME` / `PASSWORD` with your API login and password. The examples use top-level `await` (ES module) and the global `fetch` (Node 18+ or a browser).

### instantPages

`POST /v3/on_page/instant_pages`

```typescript
import { OnPageApi, OnPageInstantPagesRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new OnPageApi("https://api.dataforseo.com", {
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

let task = new OnPageInstantPagesRequestInfo();
task.url = "https://dataforseo.com/blog";
task.enable_javascript = true;
task.custom_js = "meta = {}; meta.url = document.URL; meta;";
let response = await api.instantPages([task]);
```

### rawHtml

`POST /v3/on_page/raw_html`

```typescript
import { OnPageApi, OnPageRawHtmlRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new OnPageApi("https://api.dataforseo.com", {
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

let task = new OnPageRawHtmlRequestInfo();
task.id = "07281559-0695-0216-0000-c269be8b7592";
task.url = "https://dataforseo.com/apis";
let response = await api.rawHtml([task]);
```

### summary

`GET /v3/on_page/summary/{id}`

```typescript
import { OnPageApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new OnPageApi("https://api.dataforseo.com", {
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
let response = await api.summary(id);
```

### pages

`POST /v3/on_page/pages`

```typescript
import { OnPageApi, OnPagePagesRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new OnPageApi("https://api.dataforseo.com", {
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

let task = new OnPagePagesRequestInfo();
task.id = "07281559-0695-0216-0000-c269be8b7592";
task.filters = [
  [
    "resource_type",
    "=",
    "html",
  ],
  "and",
  [
    "meta.scripts_count",
    ">",
    40,
  ],
];
task.order_by = [
  "meta.content.plain_text_word_count,desc",
];
task.limit = 10;
let response = await api.pages([task]);
```

### contentParsingLive

`POST /v3/on_page/content_parsing/live`

```typescript
import { OnPageApi, OnPageContentParsingLiveRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new OnPageApi("https://api.dataforseo.com", {
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

let task = new OnPageContentParsingLiveRequestInfo();
task.url = "https://dataforseo.com/blog/a-versatile-alternative-to-google-trends-exploring-the-power-of-dataforseo-trends-api";
let response = await api.contentParsingLive([task]);
```

### taskPost

`POST /v3/on_page/task_post`

```typescript
import { OnPageApi, OnPageTaskPostRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new OnPageApi("https://api.dataforseo.com", {
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

let task = new OnPageTaskPostRequestInfo();
task.target = "dataforseo.com";
task.max_crawl_pages = 10;
task.load_resources = true;
task.enable_javascript = true;
task.custom_js = "meta = {}; meta.url = document.URL; meta;";
task.tag = "some_string_123";
task.pingback_url = "https://your-server.com/pingscript?id=$id&tag=$tag";
let response = await api.taskPost([task]);
```

### links

`POST /v3/on_page/links`

```typescript
import { OnPageApi, OnPageLinksRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new OnPageApi("https://api.dataforseo.com", {
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

let task = new OnPageLinksRequestInfo();
task.id = "07281559-0695-0216-0000-c269be8b7592";
task.page_from = "/apis/google-trends-api";
task.filters = [
  [
    "dofollow",
    "=",
    true,
  ],
  "and",
  [
    "direction",
    "=",
    "external",
  ],
];
task.limit = 10;
let response = await api.links([task]);
```

### microdata

`POST /v3/on_page/microdata`

```typescript
import { OnPageApi, OnPageMicrodataRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new OnPageApi("https://api.dataforseo.com", {
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

let task = new OnPageMicrodataRequestInfo();
task.id = "02241700-1535-0216-0000-034137259bc1";
task.url = "https://dataforseo.com/apis";
let response = await api.microdata([task]);
```

### onPageTasksReady

`GET /v3/on_page/tasks_ready`

```typescript
import { OnPageApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new OnPageApi("https://api.dataforseo.com", {
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

let response = await api.onPageTasksReady();
```

## Endpoints

All methods of `OnPageApi`. Request and response model names are derived from the path (see SKILL.md).

| Method | HTTP | Path |
|---|---|---|
| `onPageIdList` | POST | `/v3/on_page/id_list` |
| `onPageErrors` | POST | `/v3/on_page/errors` |
| `forceStop` | POST | `/v3/on_page/force_stop` |
| `onPageAvailableFilters` | GET | `/v3/on_page/available_filters` |
| `taskPost` | POST | `/v3/on_page/task_post` |
| `onPageTasksReady` | GET | `/v3/on_page/tasks_ready` |
| `summary` | GET | `/v3/on_page/summary/{id}` |
| `pages` | POST | `/v3/on_page/pages` |
| `pagesByResource` | POST | `/v3/on_page/pages_by_resource` |
| `resources` | POST | `/v3/on_page/resources` |
| `duplicateTags` | POST | `/v3/on_page/duplicate_tags` |
| `duplicateContent` | POST | `/v3/on_page/duplicate_content` |
| `links` | POST | `/v3/on_page/links` |
| `redirectChains` | POST | `/v3/on_page/redirect_chains` |
| `nonIndexable` | POST | `/v3/on_page/non_indexable` |
| `waterfall` | POST | `/v3/on_page/waterfall` |
| `keywordDensity` | POST | `/v3/on_page/keyword_density` |
| `microdata` | POST | `/v3/on_page/microdata` |
| `uncrawlableResources` | POST | `/v3/on_page/uncrawlable_resources` |
| `rawHtml` | POST | `/v3/on_page/raw_html` |
| `pageScreenshot` | POST | `/v3/on_page/page_screenshot` |
| `contentParsing` | POST | `/v3/on_page/content_parsing` |
| `contentParsingLive` | POST | `/v3/on_page/content_parsing/live` |
| `instantPages` | POST | `/v3/on_page/instant_pages` |
| `lighthouseLanguages` | GET | `/v3/on_page/lighthouse/languages` |
| `lighthouseAudits` | GET | `/v3/on_page/lighthouse/audits` |
| `lighthouseVersions` | GET | `/v3/on_page/lighthouse/versions` |
| `lighthouseTaskPost` | POST | `/v3/on_page/lighthouse/task_post` |
| `lighthouseTasksReady` | GET | `/v3/on_page/lighthouse/tasks_ready` |
| `lighthouseTaskGetJson` | GET | `/v3/on_page/lighthouse/task_get/json/{id}` |
| `lighthouseLiveJson` | POST | `/v3/on_page/lighthouse/live/json` |