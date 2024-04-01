[Documentation](../README.md) / [Exports](../modules.md) / ISerpAiSummaryRequestInfo

# Interface: ISerpAiSummaryRequestInfo

## Implemented by

- [`SerpAiSummaryRequestInfo`](../classes/SerpAiSummaryRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [fetch\_content](ISerpAiSummaryRequestInfo.md#fetch_content)
- [include\_links](ISerpAiSummaryRequestInfo.md#include_links)
- [prompt](ISerpAiSummaryRequestInfo.md#prompt)
- [support\_extra](ISerpAiSummaryRequestInfo.md#support_extra)
- [task\_id](ISerpAiSummaryRequestInfo.md#task_id)

## Properties

### fetch\_content

• `Optional` **fetch\_content**: `boolean`

fetch content from pages in SERPs
optional field
if set to true, the API will fetch the content from pages featured in SERP results, and the AI model will consider this content when generating the summary in the result;
default value: false

#### Defined in

main.ts:24341

___

### include\_links

• `Optional` **include\_links**: `boolean`

include source links in the summary
optional field
if set to true, the summary field in the API response will contain links to sources of the generated summary;
default value: false

#### Defined in

main.ts:24346

___

### prompt

• `Optional` **prompt**: `string`

AI prompt
optional field
additional task for AI summarizer, also referred to as
any form of text, question or information that communicates to AI what response you’re looking for;
note: your prompt has to be relevant to the keyword specified in the POST request to SERP API

#### Defined in

main.ts:24331

___

### support\_extra

• `Optional` **support\_extra**: `boolean`

support extra SERP features
optional field
if set to true, the AI model will consider the following extra SERP features, in addition to organic results: answer_box, knowledge_graph, featured_snippet;
default value: true

#### Defined in

main.ts:24336

___

### task\_id

• `Optional` **task\_id**: `string`

task identifier
required field
unique identifier of the associated task in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Defined in

main.ts:24325
