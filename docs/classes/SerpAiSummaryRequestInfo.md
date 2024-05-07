**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpAiSummaryRequestInfo

# Class: SerpAiSummaryRequestInfo

## Implements

- [`ISerpAiSummaryRequestInfo`](../interfaces/ISerpAiSummaryRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpAiSummaryRequestInfo(data)

> **new SerpAiSummaryRequestInfo**(`data`?): [`SerpAiSummaryRequestInfo`](SerpAiSummaryRequestInfo.md)

#### Parameters

• **data?**: [`ISerpAiSummaryRequestInfo`](../interfaces/ISerpAiSummaryRequestInfo.md)

#### Returns

[`SerpAiSummaryRequestInfo`](SerpAiSummaryRequestInfo.md)

#### Source

main.ts:24567

## Properties

### fetch\_content?

> **`optional`** **fetch\_content**: `boolean`

fetch content from pages in SERPs
optional field
if set to true, the API will fetch the content from pages featured in SERP results, and the AI model will consider this content when generating the summary in the result;
default value: false

#### Implementation of

[`ISerpAiSummaryRequestInfo`](../interfaces/ISerpAiSummaryRequestInfo.md).[`fetch_content`](../interfaces/ISerpAiSummaryRequestInfo.md#fetch_content)

#### Source

main.ts:24558

***

### include\_links?

> **`optional`** **include\_links**: `boolean`

include source links in the summary
optional field
if set to true, the summary field in the API response will contain links to sources of the generated summary;
default value: false

#### Implementation of

[`ISerpAiSummaryRequestInfo`](../interfaces/ISerpAiSummaryRequestInfo.md).[`include_links`](../interfaces/ISerpAiSummaryRequestInfo.md#include_links)

#### Source

main.ts:24563

***

### prompt?

> **`optional`** **prompt**: `string`

AI prompt
optional field
additional task for AI summarizer, also referred to as
any form of text, question or information that communicates to AI what response you’re looking for;
note: your prompt has to be relevant to the keyword specified in the POST request to SERP API

#### Implementation of

[`ISerpAiSummaryRequestInfo`](../interfaces/ISerpAiSummaryRequestInfo.md).[`prompt`](../interfaces/ISerpAiSummaryRequestInfo.md#prompt)

#### Source

main.ts:24548

***

### support\_extra?

> **`optional`** **support\_extra**: `boolean`

support extra SERP features
optional field
if set to true, the AI model will consider the following extra SERP features, in addition to organic results: answer_box, knowledge_graph, featured_snippet;
default value: true

#### Implementation of

[`ISerpAiSummaryRequestInfo`](../interfaces/ISerpAiSummaryRequestInfo.md).[`support_extra`](../interfaces/ISerpAiSummaryRequestInfo.md#support_extra)

#### Source

main.ts:24553

***

### task\_id?

> **`optional`** **task\_id**: `string`

task identifier
required field
unique identifier of the associated task in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Implementation of

[`ISerpAiSummaryRequestInfo`](../interfaces/ISerpAiSummaryRequestInfo.md).[`task_id`](../interfaces/ISerpAiSummaryRequestInfo.md#task_id)

#### Source

main.ts:24542

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:24576

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:24597

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpAiSummaryRequestInfo`](SerpAiSummaryRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpAiSummaryRequestInfo`](SerpAiSummaryRequestInfo.md)

#### Source

main.ts:24590
