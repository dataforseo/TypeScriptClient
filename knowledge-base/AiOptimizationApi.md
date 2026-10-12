# AiOptimizationApi

Knowledge base for `AiOptimizationApi` of the DataForSEO TypeScript client. Naming rules, the response envelope, polymorphic items and errors are described in [SKILL.md](../SKILL.md).

Data for AI search optimization (GEO): answers of large language models such as ChatGPT, Claude, Gemini and Perplexity to your prompts, results scraped from the web interfaces of AI assistants, search volume of keywords in AI tools, and how often brands, domains and pages are mentioned in AI-generated answers.

## Use it when you need

- To send a prompt to an LLM through one API and get its answer, the sources it cites and the usage cost, for example to benchmark several models.
- What end users actually see in an AI assistant for a query, including cited sources and mentioned brands.
- How popular a keyword or topic is among AI assistant users.
- Brand visibility in AI answers: where a brand or domain is mentioned, for which queries, how often, compared with competitors and over time.

## Use another API when

- You need classic search engine results, including AI answers embedded in search results pages: `SerpApi`.
- You need keyword metrics for classic search: `KeywordsDataApi` or `DataforseoLabsApi`.
- You need brand mentions on regular web pages: `ContentAnalysisApi`.

## Examples

Generated from the API specification in the same way as the client tests. Replace `USERNAME` / `PASSWORD` with your API login and password. The examples use top-level `await` (ES module) and the global `fetch` (Node 18+ or a browser).

### geminiLlmScraperTaskGetAdvanced

`GET /v3/ai_optimization/gemini/llm_scraper/task_get/advanced/{id}`

```typescript
import { AiOptimizationApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new AiOptimizationApi("https://api.dataforseo.com", {
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
let response = await api.geminiLlmScraperTaskGetAdvanced(id);
```

### chatGptLlmScraperTaskGetAdvanced

`GET /v3/ai_optimization/chat_gpt/llm_scraper/task_get/advanced/{id}`

```typescript
import { AiOptimizationApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new AiOptimizationApi("https://api.dataforseo.com", {
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
let response = await api.chatGptLlmScraperTaskGetAdvanced(id);
```

### chatGptLlmScraperTaskPost

`POST /v3/ai_optimization/chat_gpt/llm_scraper/task_post`

```typescript
import { AiOptimizationApi, AiOptimizationChatGptLlmScraperTaskPostRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new AiOptimizationApi("https://api.dataforseo.com", {
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

let task = new AiOptimizationChatGptLlmScraperTaskPostRequestInfo();
task.language_code = "en";
task.location_code = 2840;
task.keyword = "what is chatgpt";
let response = await api.chatGptLlmScraperTaskPost([task]);
```

### geminiLlmScraperTaskPost

`POST /v3/ai_optimization/gemini/llm_scraper/task_post`

```typescript
import { AiOptimizationApi, AiOptimizationGeminiLlmScraperTaskPostRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new AiOptimizationApi("https://api.dataforseo.com", {
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

let task = new AiOptimizationGeminiLlmScraperTaskPostRequestInfo();
task.language_code = "en";
task.location_code = 2840;
task.keyword = "albert einstein";
let response = await api.geminiLlmScraperTaskPost([task]);
```

### chatGptLlmScraperTasksReady

`GET /v3/ai_optimization/chat_gpt/llm_scraper/tasks_ready`

```typescript
import { AiOptimizationApi } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new AiOptimizationApi("https://api.dataforseo.com", {
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

let response = await api.chatGptLlmScraperTasksReady();
```

### chatGptLlmScraperLiveAdvanced

`POST /v3/ai_optimization/chat_gpt/llm_scraper/live/advanced`

```typescript
import { AiOptimizationApi, AiOptimizationChatGptLlmScraperLiveAdvancedRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new AiOptimizationApi("https://api.dataforseo.com", {
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

let task = new AiOptimizationChatGptLlmScraperLiveAdvancedRequestInfo();
task.language_code = "en";
task.location_code = 2840;
task.keyword = "albert einstein";
let response = await api.chatGptLlmScraperLiveAdvanced([task]);
```

### perplexityLlmResponsesLive

`POST /v3/ai_optimization/perplexity/llm_responses/live`

```typescript
import { AiOptimizationApi, AiOptimizationPerplexityLlmResponsesLiveRequestInfo, LlmMessageChainItem } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new AiOptimizationApi("https://api.dataforseo.com", {
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

let task = new AiOptimizationPerplexityLlmResponsesLiveRequestInfo();
task.system_message = "communicate as if we are in a business meeting";
task.message_chain = [
  new LlmMessageChainItem({
    role: "user",
    message: "Hello, what’s up?",
  }),
  new LlmMessageChainItem({
    role: "ai",
    message: "Hello! I’m doing well, thank you. How can I assist you today? Are there any specific topics or projects you’d like to discuss in our meeting?",
  }),
];
task.max_output_tokens = 200;
task.temperature = 0.3;
task.top_p = 0.5;
task.web_search_country_iso_code = "FR";
task.model_name = "sonar";
task.user_prompt = "provide information on how relevant the amusement park business is in France now";
let response = await api.perplexityLlmResponsesLive([task]);
```

### geminiLlmScraperLiveAdvanced

`POST /v3/ai_optimization/gemini/llm_scraper/live/advanced`

```typescript
import { AiOptimizationApi, AiOptimizationGeminiLlmScraperLiveAdvancedRequestInfo } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new AiOptimizationApi("https://api.dataforseo.com", {
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

let task = new AiOptimizationGeminiLlmScraperLiveAdvancedRequestInfo();
task.language_code = "en";
task.location_code = 2840;
task.keyword = "albert einstein";
let response = await api.geminiLlmScraperLiveAdvanced([task]);
```

### chatGptLlmResponsesLive

`POST /v3/ai_optimization/chat_gpt/llm_responses/live`

```typescript
import { AiOptimizationApi, AiOptimizationChatGptLlmResponsesLiveRequestInfo, LlmMessageChainItem } from "dataforseo-client";

const username = 'USERNAME';
const password = 'PASSWORD';

let api = new AiOptimizationApi("https://api.dataforseo.com", {
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

let task = new AiOptimizationChatGptLlmResponsesLiveRequestInfo();
task.system_message = "communicate as if we are in a business meeting";
task.message_chain = [
  new LlmMessageChainItem({
    role: "user",
    message: "Hello, what’s up?",
  }),
  new LlmMessageChainItem({
    role: "ai",
    message: "Hello! I’m doing well, thank you. How can I assist you today? Are there any specific topics or projects you’d like to discuss in our meeting?",
  }),
];
task.max_output_tokens = 200;
task.temperature = 0.3;
task.top_p = 0.5;
task.model_name = "gpt-4.1-mini";
task.web_search = true;
task.web_search_country_iso_code = "FR";
task.web_search_city = "Paris";
task.user_prompt = "provide information on how relevant the amusement park business is in France now";
let response = await api.chatGptLlmResponsesLive([task]);
```

## Endpoints

All methods of `AiOptimizationApi`. Request and response model names are derived from the path (see SKILL.md).

| Method | HTTP | Path |
|---|---|---|
| `chatGptLlmScraperLocations` | GET | `/v3/ai_optimization/chat_gpt/llm_scraper/locations` |
| `chatGptLlmScraperLocationsCountry` | GET | `/v3/ai_optimization/chat_gpt/llm_scraper/locations/{country}` |
| `chatGptLlmScraperLanguages` | GET | `/v3/ai_optimization/chat_gpt/llm_scraper/languages` |
| `chatGptLlmScraperTaskPost` | POST | `/v3/ai_optimization/chat_gpt/llm_scraper/task_post` |
| `chatGptLlmScraperTasksReady` | GET | `/v3/ai_optimization/chat_gpt/llm_scraper/tasks_ready` |
| `chatGptLlmScraperTaskGetAdvanced` | GET | `/v3/ai_optimization/chat_gpt/llm_scraper/task_get/advanced/{id}` |
| `chatGptLlmScraperTaskGetHtml` | GET | `/v3/ai_optimization/chat_gpt/llm_scraper/task_get/html/{id}` |
| `chatGptLlmScraperLiveAdvanced` | POST | `/v3/ai_optimization/chat_gpt/llm_scraper/live/advanced` |
| `chatGptLlmScraperLiveHtml` | POST | `/v3/ai_optimization/chat_gpt/llm_scraper/live/html` |
| `chatGptLlmResponsesModels` | GET | `/v3/ai_optimization/chat_gpt/llm_responses/models` |
| `chatGptLlmResponsesLive` | POST | `/v3/ai_optimization/chat_gpt/llm_responses/live` |
| `chatGptLlmResponsesTaskPost` | POST | `/v3/ai_optimization/chat_gpt/llm_responses/task_post` |
| `chatGptLlmResponsesTasksReady` | GET | `/v3/ai_optimization/chat_gpt/llm_responses/tasks_ready` |
| `chatGptLlmResponsesTaskGet` | GET | `/v3/ai_optimization/chat_gpt/llm_responses/task_get/{id}` |
| `claudeLlmResponsesModels` | GET | `/v3/ai_optimization/claude/llm_responses/models` |
| `claudeLlmResponsesLive` | POST | `/v3/ai_optimization/claude/llm_responses/live` |
| `claudeLlmResponsesTaskPost` | POST | `/v3/ai_optimization/claude/llm_responses/task_post` |
| `claudeLlmResponsesTasksReady` | GET | `/v3/ai_optimization/claude/llm_responses/tasks_ready` |
| `claudeLlmResponsesTaskGet` | GET | `/v3/ai_optimization/claude/llm_responses/task_get/{id}` |
| `geminiLlmResponsesModels` | GET | `/v3/ai_optimization/gemini/llm_responses/models` |
| `geminiLlmResponsesTaskPost` | POST | `/v3/ai_optimization/gemini/llm_responses/task_post` |
| `geminiLlmResponsesTasksReady` | GET | `/v3/ai_optimization/gemini/llm_responses/tasks_ready` |
| `geminiLlmResponsesTaskGet` | GET | `/v3/ai_optimization/gemini/llm_responses/task_get/{id}` |
| `geminiLlmResponsesLive` | POST | `/v3/ai_optimization/gemini/llm_responses/live` |
| `perplexityLlmResponsesModels` | GET | `/v3/ai_optimization/perplexity/llm_responses/models` |
| `perplexityLlmResponsesLive` | POST | `/v3/ai_optimization/perplexity/llm_responses/live` |
| `geminiLlmScraperLocations` | GET | `/v3/ai_optimization/gemini/llm_scraper/locations` |
| `geminiLlmScraperLanguages` | GET | `/v3/ai_optimization/gemini/llm_scraper/languages` |
| `geminiLlmScraperTaskPost` | POST | `/v3/ai_optimization/gemini/llm_scraper/task_post` |
| `geminiLlmScraperTasksReady` | GET | `/v3/ai_optimization/gemini/llm_scraper/tasks_ready` |
| `geminiLlmScraperTaskGetAdvanced` | GET | `/v3/ai_optimization/gemini/llm_scraper/task_get/advanced/{id}` |
| `geminiLlmScraperTaskGetHtml` | GET | `/v3/ai_optimization/gemini/llm_scraper/task_get/html/{id}` |
| `geminiLlmScraperLiveAdvanced` | POST | `/v3/ai_optimization/gemini/llm_scraper/live/advanced` |
| `geminiLlmScraperLiveHtml` | POST | `/v3/ai_optimization/gemini/llm_scraper/live/html` |
| `aiKeywordDataAvailableFilters` | GET | `/v3/ai_optimization/ai_keyword_data/available_filters` |
| `aiKeywordDataLocationsAndLanguages` | GET | `/v3/ai_optimization/ai_keyword_data/locations_and_languages` |
| `aiKeywordDataKeywordsSearchVolumeLive` | POST | `/v3/ai_optimization/ai_keyword_data/keywords_search_volume/live` |
| `llmMentionsAvailableFilters` | GET | `/v3/ai_optimization/llm_mentions/available_filters` |
| `llmMentionsLocationsAndLanguages` | GET | `/v3/ai_optimization/llm_mentions/locations_and_languages` |
| `llmMentionsSearchMentionsLive` | POST | `/v3/ai_optimization/llm_mentions/search_mentions/live` |
| `llmMentionsTargetMetricsLive` | POST | `/v3/ai_optimization/llm_mentions/target_metrics/live` |
| `llmMentionsMultiTargetMetricsLive` | POST | `/v3/ai_optimization/llm_mentions/multi_target_metrics/live` |
| `llmMentionsTopMentionedDomainsLive` | POST | `/v3/ai_optimization/llm_mentions/top_mentioned_domains/live` |
| `llmMentionsTopMentionedPagesLive` | POST | `/v3/ai_optimization/llm_mentions/top_mentioned_pages/live` |
| `llmMentionsTopMentionedBrandsLive` | POST | `/v3/ai_optimization/llm_mentions/top_mentioned_brands/live` |
| `llmMentionsTopMentionedBrandCategoriesLive` | POST | `/v3/ai_optimization/llm_mentions/top_mentioned_brand_categories/live` |
| `llmMentionsTargetMetricsLiteLive` | POST | `/v3/ai_optimization/llm_mentions/target_metrics_lite/live` |
| `llmMentionsTopMentionedDomainsLiteLive` | POST | `/v3/ai_optimization/llm_mentions/top_mentioned_domains_lite/live` |
| `llmMentionsTopMentionedPagesLiteLive` | POST | `/v3/ai_optimization/llm_mentions/top_mentioned_pages_lite/live` |
| `llmMentionsTopMentionedBrandsLiteLive` | POST | `/v3/ai_optimization/llm_mentions/top_mentioned_brands_lite/live` |
| `llmMentionsTopMentionedBrandCategoriesLiteLive` | POST | `/v3/ai_optimization/llm_mentions/top_mentioned_brand_categories_lite/live` |
| `llmMentionsHistoricalLive` | POST | `/v3/ai_optimization/llm_mentions/historical/live` |
| `llmMentionsTimeseriesDeltaLive` | POST | `/v3/ai_optimization/llm_mentions/timeseries_delta/live` |
| `llmMentionsTimeseriesNewLostLive` | POST | `/v3/ai_optimization/llm_mentions/timeseries_new_lost/live` |