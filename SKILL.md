---
name: dataforseo-typescript-client
description: Use the DataForSEO TypeScript client (npm package dataforseo-client) to call DataForSEO API v3 (SERP, Keywords Data, DataForSEO Labs, Backlinks, OnPage, AI Optimization, etc.). Read this before exploring the code; it explains the layout, naming rules and how to find an endpoint without reading the huge generated files.
---

# DataForSEO TypeScript client

Generated, typed TypeScript client for DataForSEO API v3.
Every API endpoint is one method returning a Promise; every request/response body is one class.

- Package: `npm install dataforseo-client` (ESM and CommonJS builds)
- Imports: `import * as client from "dataforseo-client"` (also subpaths `dataforseo-client/api`, `dataforseo-client/models`)
- HTTP: any `fetch` implementation (browser, Node 18+ global `fetch`, `node-fetch`, ...)
- Base URL: `https://api.dataforseo.com` (sandbox with free dummy data: `https://sandbox.dataforseo.com`)
- Auth: HTTP Basic with the DataForSEO API login and password (not the dashboard password), added by your own `fetch` wrapper (see Setup)

## Do not read generated code in full

The client is generated from an OpenAPI spec and is very large (thousands of model files, `api/*Api.ts` files of several hundred KB). Never open files whole. Derive names with the rules below and use targeted search (grep) only to confirm them.

## Knowledge base: start here

`knowledge-base/` (next to this file) has one Markdown file per API section, i.e. per API class. Each file explains what data the section provides and when to use another section instead, gives ready-to-run examples and lists every endpoint with its method name. Open only the file of the section you need: it is much cheaper than searching the generated code.

| API class | Use it for |
|---|---|
| [`SerpApi`](knowledge-base/SerpApi.md) | Search engine results pages (SERP) collected on request: what a search engine shows for a query in a given location, language and device, from engines such as Google, Bing, YouTube, Yahoo and others, including search verticals such as maps, news, images, jobs and AI search modes. |
| [`DataforseoLabsApi`](knowledge-base/DataforseoLabsApi.md) | Keyword research, competitor analysis and search analytics from DataForSEO's own databases of keywords, search results and rankings, for search engines and platforms such as Google, Amazon, Google Play and the App Store. |
| [`DomainAnalyticsApi`](knowledge-base/DomainAnalyticsApi.md) | Information about websites as such: the technologies a site is built with (CMS, analytics, frameworks, advertising and other tools), which sites use a given technology, statistics of technology usage, and domain registration (Whois) data enriched with search and backlink metrics. |
| [`KeywordsDataApi`](knowledge-base/KeywordsDataApi.md) | Keyword metrics from advertising platforms and trend services: search volume, cost per click, competition and their monthly dynamics, keyword ideas, ad traffic forecasts and keyword popularity trends, from sources such as Google Ads, Bing Ads, Google Trends, DataForSEO Trends and clickstream data. |
| [`BacklinksApi`](knowledge-base/BacklinksApi.md) | Backlink data for any domain, subdomain or web page from DataForSEO's continuously updated link index: inbound links, referring domains, pages and networks, anchor texts, link-based authority (rank) and spam score, how the link profile changes over time, and how it compares with other sites. |
| [`AiOptimizationApi`](knowledge-base/AiOptimizationApi.md) | Data for AI search optimization (GEO): answers of large language models such as ChatGPT, Claude, Gemini and Perplexity to your prompts, results scraped from the web interfaces of AI assistants, search volume of keywords in AI tools, and how often brands, domains and pages are mentioned in AI-generated answers. |
| [`OnPageApi`](knowledge-base/OnPageApi.md) | Technical SEO audit of websites with a configurable crawler: crawl a site and get per-page checks, resources, internal and external links, duplicates, redirects, indexability issues, keyword density and page speed data; or analyze individual pages instantly, extract their content, take screenshots and run Google Lighthouse. |
| [`ContentAnalysisApi`](knowledge-base/ContentAnalysisApi.md) | Brand monitoring and sentiment analysis across the web: pages that mention (cite) a keyword or brand, with the sentiment polarity and emotional connotations of each mention, content ratings and categories, and aggregated trends of mentions over time. |
| [`MerchantApi`](knowledge-base/MerchantApi.md) | E-commerce data from marketplaces and shopping search engines such as Amazon and Google Shopping: product listings for a search query, product details, product variations, sellers and their offers, with prices, ratings, reviews count and paid placements. |
| [`AppDataApi`](knowledge-base/AppDataApi.md) | Mobile application data from app stores such as Google Play and the App Store: app search results, top charts and collections, detailed app information and user reviews, plus a searchable database of app listings. |
| [`BusinessDataApi`](knowledge-base/BusinessDataApi.md) | Publicly available data about businesses and local places: business profiles, reviews, questions and answers, hotel data and a database of business listings, from sources such as Google, Trustpilot and Tripadvisor. |
| [`AppendixApi`](knowledge-base/AppendixApi.md) | Account and service information that applies to the whole DataForSEO API rather than to a data source: account balance, spending, limits and prices, the current status of the APIs, the list of error codes, and re-sending webhooks (pingbacks and postbacks) of completed tasks. |

## Layout

Source code (git repository):

```
src/index.ts                     re-exports every API class and model
src/api/<Section>Api.ts          one class per API section, one method per endpoint
src/models/<ClassName>.ts        one model class + I<ClassName> interface per file
src/models/Base*Item.ts          polymorphic base class AND all its subclasses in one file
knowledge-base/<Section>Api.md   per-section guide with examples (see above)
```

npm package (`node_modules/dataforseo-client/`): `README.md`, `SKILL.md`, `knowledge-base/`, `package.json` and the compiled builds `dist/esm/` and `dist/cjs/` with the same `api/` and `models/` structure. Search the `.d.ts` files there: they contain all signatures and the JSDoc descriptions of model fields.

## Naming rules (derive names instead of searching)

Endpoint path `/v3/<section>/<rest>` maps to:

| What | Rule | Example for `/v3/serp/google/organic/live/advanced` |
|---|---|---|
| API class | `<Section>Api` | `SerpApi` |
| Method | camelCase of `<rest>` (usually) | `googleOrganicLiveAdvanced` |
| Request model | `<Section><Rest>RequestInfo` | `SerpGoogleOrganicLiveAdvancedRequestInfo` |
| Response model | `<Section><Rest>ResponseInfo` | `SerpGoogleOrganicLiveAdvancedResponseInfo` |
| Task item | `<Section><Rest>TaskInfo` | `SerpGoogleOrganicLiveAdvancedTaskInfo` |
| Result item | `<Section><Rest>ResultInfo` | `SerpGoogleOrganicLiveAdvancedResultInfo` |

Model names follow the rule strictly. Method names sometimes keep the section prefix (e.g. `dataforseoLabsIdList`), so confirm the method by its response model (the match without the `process` prefix is the public method):

```bash
grep -n "Promise<SerpGoogleOrganicLiveAdvancedResponseInfo | null>" src/api/SerpApi.ts        # source
grep -n "Promise<SerpGoogleOrganicLiveAdvancedResponseInfo | null>" dist/esm/api/SerpApi.d.ts # npm package
```

Model fields keep the API's snake_case names (`location_code`, `status_code`, `rank_absolute`). Their descriptions (required/optional, allowed values, limits) are JSDoc comments in `models/<ClassName>.ts` / `.d.ts`; grep the field you need instead of reading the file:

```bash
grep -n -B 3 "location_code?:" dist/esm/models/SerpGoogleOrganicLiveAdvancedRequestInfo.d.ts
```

## Method shapes

- `POST` endpoints: `x(body: XRequestInfo[]): Promise<XResponseInfo | null>`, the body is always an array of tasks.
- `GET` endpoints: `x(): Promise<XResponseInfo | null>` or `x(id: string)` (task id for `taskGet*`, `country` for locations etc.).

## Setup

The API classes have no built-in auth and default to `window.fetch`. In Node (no `window`) you must pass a `fetch`; pass one that adds the Basic auth header:

```typescript
import * as client from "dataforseo-client";

function createAuthenticatedFetch(username: string, password: string) {
    const token = Buffer.from(`${username}:${password}`).toString("base64"); // btoa(...) in browsers
    return (url: RequestInfo, init?: RequestInit): Promise<Response> =>
        fetch(url, { ...init, headers: { ...init?.headers, Authorization: `Basic ${token}` } });
}

const http = { fetch: createAuthenticatedFetch("API_LOGIN", "API_PASSWORD") };
const serpApi = new client.SerpApi("https://api.dataforseo.com", http);
// sandbox: new client.SerpApi("https://sandbox.dataforseo.com", http)
```

Create one `http` object and reuse it for all section classes.

## Live request (result in the same call)

```typescript
import * as client from 'dataforseo-client'

async function main() {
    
    const username = 'username';
    const password = 'password';

    const authFetch = createAuthenticatedFetch(username, password);
    let serpApi = new client.SerpApi("https://api.dataforseo.com", { fetch: authFetch });

    let task = new client.SerpGoogleOrganicLiveAdvancedRequestInfo();
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

## Task-based request (post -> wait -> get)

```typescript
import * as client from 'dataforseo-client'

async function main() {

  const username = 'username';
  const password = 'password';

  const authFetch = createAuthenticatedFetch(username, password);
  let serpApi = new client.SerpApi("https://api.dataforseo.com", { fetch: authFetch });

  let task = new client.SerpGoogleOrganicTaskPostRequestInfo();
  task.location_code = 2840;
  task.language_code = "en";
  task.keyword = "albert einstein"

  let taskResponse = await serpApi.googleOrganicTaskPost([task]) 

  let taskID = taskResponse!.tasks![0].id!;
  const startTime = Date.now();

  while (!await isReady(serpApi, taskID) && Date.now() - startTime < 60000) {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  let resp = await serpApi.googleOrganicTaskGetAdvanced(taskID);
}

async function isReady(serpApi: client.SerpApi, id: string): Promise<boolean> {
  let resp = await serpApi.googleOrganicTasksReady();

  return resp?.tasks?.some(x => x.result?.some(r => r.id == id) ?? false) ?? false;
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

Instead of polling you can set `postback_url` / `pingback_url` in the task request.

## Response envelope (same for every endpoint)

```
XResponseInfo
  version, status_code, status_message, time, cost, tasks_count, tasks_error
  tasks: XTaskInfo[]
    XTaskInfo
      id, status_code, status_message, time, cost, result_count, path, data (echo of the request)
      result: XResultInfo[]   // endpoint specific payload, often with items
```

- `status_code === 20000` means OK (both top-level and per task); `20100` = task created; `4xxxx`/`5xxxx` = errors. Always check the per-task `status_code`: the HTTP status is usually 200 even when a task failed.
- All fields are optional; use `?.` / `?? []`.
- Models: `new X(data)` copies fields from a plain object, `X.fromJS(json)` builds from parsed JSON, `x.toJSON()` serializes.

## Polymorphic items

Arrays like `items` are typed as a base class (e.g. `BaseSerpApiElementItem`) and instantiated as concrete subclasses by the JSON `type` field (`organic` -> `OrganicSerpElementItem`, `paid` -> `PaidSerpElementItem`, `featured_snippet` -> `FeaturedSnippetSerpElementItem`, ...). Narrow with `instanceof`. All subclasses are defined in the base class file (`src/models/BaseSerpApiElementItem.ts`) and exported from the package root; grep for `data["type"] === "` there to see the mapping.

## Errors

Non-200/204 HTTP responses reject with an `ApiException`-like object: `{ message, status, response (raw body), headers, isApiException: true }`. `ApiException` itself is not exported from the package entry, so detect it with `(err as any)?.isApiException === true`.

## Useful facts

- Location / language codes: `location_code: 2840` (United States), `language_code: "en"`. Full lists come from endpoints like `serpApi.googleLocations()` / `googleLanguages()` (and similar per section).
- Most Live endpoints accept one task per request; Task POST endpoints accept many tasks (up to 100) in one call.
- `taskGet*` has several variants (`Regular`, `Advanced`, `Html`); use the one matching the data you need.
- Field semantics, allowed values and limits: JSDoc comments of the request model fields (they come from the official API docs).

## External documentation (last resort)

Use https://dataforseo.com/llms.txt only when this file, the knowledge base or generated code do not answer the question (for example pricing, account limits or endpoint behaviour that is not described locally). Everything needed to write client code is already in this library.

`llms.txt` is a large (~200 KB) index of links to per-endpoint Markdown pages (`https://docs.dataforseo.com/v3/...md`). Do not read it whole: search it for the endpoint path or name and fetch only the linked page.