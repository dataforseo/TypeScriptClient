[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpAiSummaryRequestInfo

# Class: SerpAiSummaryRequestInfo

## Implements

- [`ISerpAiSummaryRequestInfo`](../interfaces/ISerpAiSummaryRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpAiSummaryRequestInfo()

> **new SerpAiSummaryRequestInfo**(`data`?): [`SerpAiSummaryRequestInfo`](SerpAiSummaryRequestInfo.md)

#### Parameters

• **data?**: [`ISerpAiSummaryRequestInfo`](../interfaces/ISerpAiSummaryRequestInfo.md)

#### Returns

[`SerpAiSummaryRequestInfo`](SerpAiSummaryRequestInfo.md)

#### Defined in

main.ts:25399

## Properties

### fetch\_content?

> `optional` **fetch\_content**: `boolean`

fetch content from pages in SERPs
optional field
if set to true, the API will fetch the content from pages featured in SERP results, and the AI model will consider this content when generating the summary in the result;
default value: false

#### Implementation of

[`ISerpAiSummaryRequestInfo`](../interfaces/ISerpAiSummaryRequestInfo.md).[`fetch_content`](../interfaces/ISerpAiSummaryRequestInfo.md#fetch_content)

#### Defined in

main.ts:25390

***

### include\_links?

> `optional` **include\_links**: `boolean`

include source links in the summary
optional field
if set to true, the summary field in the API response will contain links to sources of the generated summary;
default value: false

#### Implementation of

[`ISerpAiSummaryRequestInfo`](../interfaces/ISerpAiSummaryRequestInfo.md).[`include_links`](../interfaces/ISerpAiSummaryRequestInfo.md#include_links)

#### Defined in

main.ts:25395

***

### prompt?

> `optional` **prompt**: `string`

AI prompt
optional field
additional task for AI summariser;
any form of text, question or information that communicates to AI what response you’re looking for;
max number of symbols or characters you can specify: 2000;
note: your prompt has to be relevant to the keyword specified in the POST request to SERP API

#### Implementation of

[`ISerpAiSummaryRequestInfo`](../interfaces/ISerpAiSummaryRequestInfo.md).[`prompt`](../interfaces/ISerpAiSummaryRequestInfo.md#prompt)

#### Defined in

main.ts:25380

***

### support\_extra?

> `optional` **support\_extra**: `boolean`

support extra SERP features
optional field
if set to true, the AI model will consider the following extra SERP features, in addition to organic results: answer_box, knowledge_graph, featured_snippet;
default value: true

#### Implementation of

[`ISerpAiSummaryRequestInfo`](../interfaces/ISerpAiSummaryRequestInfo.md).[`support_extra`](../interfaces/ISerpAiSummaryRequestInfo.md#support_extra)

#### Defined in

main.ts:25385

***

### task\_id?

> `optional` **task\_id**: `string`

task identifier
required field
unique identifier of the associated task in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Implementation of

[`ISerpAiSummaryRequestInfo`](../interfaces/ISerpAiSummaryRequestInfo.md).[`task_id`](../interfaces/ISerpAiSummaryRequestInfo.md#task_id)

#### Defined in

main.ts:25373

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:25408

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:25429

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpAiSummaryRequestInfo`](SerpAiSummaryRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpAiSummaryRequestInfo`](SerpAiSummaryRequestInfo.md)

#### Defined in

main.ts:25422
