# AppendixApi

Knowledge base for `AppendixApi` of the DataForSEO TypeScript client. Naming rules, the response envelope, polymorphic items and errors are described in [SKILL.md](../SKILL.md).

Account and service information that applies to the whole DataForSEO API rather than to a data source: account balance, spending, limits and prices, the current status of the APIs, the list of error codes, and re-sending webhooks (pingbacks and postbacks) of completed tasks.

## Use it when you need

- To check credentials and connectivity, or the remaining balance and limits before running a job.
- To find out whether a problem is on DataForSEO's side.
- The meaning of an error code returned in a response.
- To receive webhooks of finished tasks again, for example after your receiving endpoint was unavailable.

This section returns no SEO or marketing data; for that use the other API classes listed in SKILL.md.

## Examples

Generated from the API specification in the same way as the client tests. Replace `USERNAME` / `PASSWORD` with your API login and password. The examples use top-level `await` (ES module) and the global `fetch` (Node 18+ or a browser).

### userData

`GET /v3/appendix/user_data`

```typescript
import { AppendixApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new AppendixApi("https://api.dataforseo.com", {
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

let response = await api.userData();
```

### appendixStatus

`GET /v3/appendix/status`

```typescript
import { AppendixApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new AppendixApi("https://api.dataforseo.com", {
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

let response = await api.appendixStatus();
```

### errors

`GET /v3/appendix/errors`

```typescript
import { AppendixApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new AppendixApi("https://api.dataforseo.com", {
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

let response = await api.errors();
```

## Endpoints

All methods of `AppendixApi`. Request and response model names are derived from the path (see SKILL.md).

| Method | HTTP | Path |
|---|---|---|
| `userData` | GET | `/v3/appendix/user_data` |
| `errors` | GET | `/v3/appendix/errors` |
| `webhookResend` | POST | `/v3/appendix/webhook_resend` |
| `appendixStatus` | GET | `/v3/appendix/status` |