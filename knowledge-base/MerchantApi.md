# MerchantApi

Knowledge base for `MerchantApi` of the DataForSEO TypeScript client. Naming rules, the response envelope, polymorphic items and errors are described in [SKILL.md](../SKILL.md).

E-commerce data from marketplaces and shopping search engines such as Amazon and Google Shopping: product listings for a search query, product details, product variations, sellers and their offers, with prices, ratings, reviews count and paid placements.

Results are collected for the requested location and language, the same way a real shopper would see them, and are returned as parsed data or raw HTML.

## Use it when you need

- Which products appear for a search query on a marketplace, in which order, and which of them are sponsored.
- Details of a specific product: description, specifications, price, rating, variations.
- Who sells a product and at what price and conditions, for price monitoring and competitor analysis.

## Use another API when

- You need keyword metrics or ranked keywords for marketplace products: `DataforseoLabsApi`.
- You need shopping elements that appear inside regular search results: `SerpApi`.
- You need mobile apps rather than products: `AppDataApi`.

## Examples

Generated from the API specification in the same way as the client tests. Replace `USERNAME` / `PASSWORD` with your API login and password. The examples use top-level `await` (ES module) and the global `fetch` (Node 18+ or a browser).

### googleSellersTaskGetAdvanced

`GET /v3/merchant/google/sellers/task_get/advanced/{id}`

```typescript
import { MerchantApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new MerchantApi("https://api.dataforseo.com", {
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
let response = await api.googleSellersTaskGetAdvanced(id);
```

### googleSellersTaskPost

`POST /v3/merchant/google/sellers/task_post`

```typescript
import { MerchantApi, MerchantGoogleSellersTaskPostRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new MerchantApi("https://api.dataforseo.com", {
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

let task = new MerchantGoogleSellersTaskPostRequestInfo();
task.language_code = "en";
task.location_code = 2840;
task.product_id = "1113158713975221117";
let response = await api.googleSellersTaskPost([task]);
```

### googleProductsTaskGetAdvanced

`GET /v3/merchant/google/products/task_get/advanced/{id}`

```typescript
import { MerchantApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new MerchantApi("https://api.dataforseo.com", {
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
let response = await api.googleProductsTaskGetAdvanced(id);
```

### googleProductsTaskPost

`POST /v3/merchant/google/products/task_post`

```typescript
import { MerchantApi, MerchantGoogleProductsTaskPostRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new MerchantApi("https://api.dataforseo.com", {
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

let task = new MerchantGoogleProductsTaskPostRequestInfo();
task.language_code = "en";
task.location_code = 2840;
task.keyword = "iphone";
task.price_min = 5;
let response = await api.googleProductsTaskPost([task]);
```

### amazonProductsTaskGetAdvanced

`GET /v3/merchant/amazon/products/task_get/advanced/{id}`

```typescript
import { MerchantApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new MerchantApi("https://api.dataforseo.com", {
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
let response = await api.amazonProductsTaskGetAdvanced(id);
```

### amazonProductsTaskPost

`POST /v3/merchant/amazon/products/task_post`

```typescript
import { MerchantApi, MerchantAmazonProductsTaskPostRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new MerchantApi("https://api.dataforseo.com", {
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

let task = new MerchantAmazonProductsTaskPostRequestInfo();
task.language_code = "en_US";
task.location_code = 2840;
task.keyword = "shoes";
let response = await api.amazonProductsTaskPost([task]);
```

### googleProductInfoTaskGetAdvanced

`GET /v3/merchant/google/product_info/task_get/advanced/{id}`

```typescript
import { MerchantApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new MerchantApi("https://api.dataforseo.com", {
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
let response = await api.googleProductInfoTaskGetAdvanced(id);
```

### googleProductInfoTaskPost

`POST /v3/merchant/google/product_info/task_post`

```typescript
import { MerchantApi, MerchantGoogleProductInfoTaskPostRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new MerchantApi("https://api.dataforseo.com", {
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

let task = new MerchantGoogleProductInfoTaskPostRequestInfo();
task.language_code = "en";
task.location_code = 2840;
task.product_id = "1113158713975221117";
let response = await api.googleProductInfoTaskPost([task]);
```

### amazonSellersTaskGetAdvanced

`GET /v3/merchant/amazon/sellers/task_get/advanced/{id}`

```typescript
import { MerchantApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new MerchantApi("https://api.dataforseo.com", {
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
let response = await api.amazonSellersTaskGetAdvanced(id);
```

## Endpoints

All methods of `MerchantApi`. Request and response model names are derived from the path (see SKILL.md).

| Method | HTTP | Path |
|---|---|---|
| `merchantIdList` | POST | `/v3/merchant/id_list` |
| `merchantErrors` | POST | `/v3/merchant/errors` |
| `merchantGoogleLanguages` | GET | `/v3/merchant/google/languages` |
| `merchantGoogleLocations` | GET | `/v3/merchant/google/locations` |
| `merchantGoogleLocationsCountry` | GET | `/v3/merchant/google/locations/{country}` |
| `googleProductsTaskPost` | POST | `/v3/merchant/google/products/task_post` |
| `googleProductsTasksReady` | GET | `/v3/merchant/google/products/tasks_ready` |
| `merchantTasksReady` | GET | `/v3/merchant/tasks_ready` |
| `googleProductsTaskGetAdvanced` | GET | `/v3/merchant/google/products/task_get/advanced/{id}` |
| `googleProductsTaskGetHtml` | GET | `/v3/merchant/google/products/task_get/html/{id}` |
| `googleSellersTaskPost` | POST | `/v3/merchant/google/sellers/task_post` |
| `googleSellersTasksReady` | GET | `/v3/merchant/google/sellers/tasks_ready` |
| `googleSellersTaskGetAdvanced` | GET | `/v3/merchant/google/sellers/task_get/advanced/{id}` |
| `googleProductInfoTaskPost` | POST | `/v3/merchant/google/product_info/task_post` |
| `googleProductInfoTasksReady` | GET | `/v3/merchant/google/product_info/tasks_ready` |
| `googleProductInfoTaskGetAdvanced` | GET | `/v3/merchant/google/product_info/task_get/advanced/{id}` |
| `googleSellersAdUrl` | GET | `/v3/merchant/google/sellers/ad_url/{shop_ad_aclk}` |
| `amazonLocations` | GET | `/v3/merchant/amazon/locations` |
| `amazonLocationsCountry` | GET | `/v3/merchant/amazon/locations/{country}` |
| `amazonLanguages` | GET | `/v3/merchant/amazon/languages` |
| `amazonProductsTaskPost` | POST | `/v3/merchant/amazon/products/task_post` |
| `amazonProductsTasksReady` | GET | `/v3/merchant/amazon/products/tasks_ready` |
| `amazonProductsTaskGetAdvanced` | GET | `/v3/merchant/amazon/products/task_get/advanced/{id}` |
| `amazonProductsLiveAdvanced` | POST | `/v3/merchant/amazon/products/live/advanced` |
| `amazonProductsTaskGetHtml` | GET | `/v3/merchant/amazon/products/task_get/html/{id}` |
| `amazonProductsLiveHtml` | POST | `/v3/merchant/amazon/products/live/html` |
| `amazonAsinTaskPost` | POST | `/v3/merchant/amazon/asin/task_post` |
| `amazonAsinTasksReady` | GET | `/v3/merchant/amazon/asin/tasks_ready` |
| `amazonAsinTaskGetAdvanced` | GET | `/v3/merchant/amazon/asin/task_get/advanced/{id}` |
| `amazonAsinLiveAdvanced` | POST | `/v3/merchant/amazon/asin/live/advanced` |
| `amazonAsinTaskGetHtml` | GET | `/v3/merchant/amazon/asin/task_get/html/{id}` |
| `amazonAsinLiveHtml` | POST | `/v3/merchant/amazon/asin/live/html` |
| `amazonSellersTaskPost` | POST | `/v3/merchant/amazon/sellers/task_post` |
| `amazonSellersTasksReady` | GET | `/v3/merchant/amazon/sellers/tasks_ready` |
| `amazonSellersTaskGetAdvanced` | GET | `/v3/merchant/amazon/sellers/task_get/advanced/{id}` |
| `amazonSellersLiveAdvanced` | POST | `/v3/merchant/amazon/sellers/live/advanced` |
| `amazonSellersTaskGetHtml` | GET | `/v3/merchant/amazon/sellers/task_get/html/{id}` |
| `amazonSellersLiveHtml` | POST | `/v3/merchant/amazon/sellers/live/html` |