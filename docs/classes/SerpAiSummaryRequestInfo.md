[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpAiSummaryRequestInfo

# Class: SerpAiSummaryRequestInfo

## Implements

- [`ISerpAiSummaryRequestInfo`](../interfaces/ISerpAiSummaryRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpAiSummaryRequestInfo.md#constructor)

### Properties

- [fetch\_content](SerpAiSummaryRequestInfo.md#fetch_content)
- [include\_links](SerpAiSummaryRequestInfo.md#include_links)
- [prompt](SerpAiSummaryRequestInfo.md#prompt)
- [support\_extra](SerpAiSummaryRequestInfo.md#support_extra)
- [task\_id](SerpAiSummaryRequestInfo.md#task_id)

### Methods

- [init](SerpAiSummaryRequestInfo.md#init)
- [toJSON](SerpAiSummaryRequestInfo.md#tojson)
- [fromJS](SerpAiSummaryRequestInfo.md#fromjs)

## Constructors

### constructor

• **new SerpAiSummaryRequestInfo**(`data?`): [`SerpAiSummaryRequestInfo`](SerpAiSummaryRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpAiSummaryRequestInfo`](../interfaces/ISerpAiSummaryRequestInfo.md) |

#### Returns

[`SerpAiSummaryRequestInfo`](SerpAiSummaryRequestInfo.md)

#### Defined in

[main.ts:23756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23756)

## Properties

### fetch\_content

• `Optional` **fetch\_content**: `boolean`

fetch content from pages in SERPs
optional field
if set to true, the API will fetch the content from pages featured in SERP results, and the AI model will consider this content when generating the summary in the result;
default value: false

#### Implementation of

[ISerpAiSummaryRequestInfo](../interfaces/ISerpAiSummaryRequestInfo.md).[fetch_content](../interfaces/ISerpAiSummaryRequestInfo.md#fetch_content)

#### Defined in

[main.ts:23747](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23747)

___


### include\_links

• `Optional` **include\_links**: `boolean`

include source links in the summary
optional field
if set to true, the summary field in the API response will contain links to sources of the generated summary;
default value: false

#### Implementation of

[ISerpAiSummaryRequestInfo](../interfaces/ISerpAiSummaryRequestInfo.md).[include_links](../interfaces/ISerpAiSummaryRequestInfo.md#include_links)

#### Defined in

[main.ts:23752](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23752)

___


### prompt

• `Optional` **prompt**: `string`

AI prompt
optional field
additional task for AI summarizer, also referred to as
any form of text, question or information that communicates to AI what response you’re looking for;
note: your prompt has to be relevant to the keyword specified in the POST request to SERP API

#### Implementation of

[ISerpAiSummaryRequestInfo](../interfaces/ISerpAiSummaryRequestInfo.md).[prompt](../interfaces/ISerpAiSummaryRequestInfo.md#prompt)

#### Defined in

[main.ts:23737](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23737)

___


### support\_extra

• `Optional` **support\_extra**: `boolean`

support extra SERP features
optional field
if set to true, the AI model will consider the following extra SERP features, in addition to organic results: answer_box, knowledge_graph, featured_snippet;
default value: true

#### Implementation of

[ISerpAiSummaryRequestInfo](../interfaces/ISerpAiSummaryRequestInfo.md).[support_extra](../interfaces/ISerpAiSummaryRequestInfo.md#support_extra)

#### Defined in

[main.ts:23742](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23742)

___


### task\_id

• `Optional` **task\_id**: `string`

task identifier
required field
unique identifier of the associated task in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Implementation of

[ISerpAiSummaryRequestInfo](../interfaces/ISerpAiSummaryRequestInfo.md).[task_id](../interfaces/ISerpAiSummaryRequestInfo.md#task_id)

#### Defined in

[main.ts:23731](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23731)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:23765](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23765)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:23786](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23786)

___


### fromJS

▸ **fromJS**(`data`): [`SerpAiSummaryRequestInfo`](SerpAiSummaryRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpAiSummaryRequestInfo`](SerpAiSummaryRequestInfo.md)

#### Defined in

[main.ts:23779](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23779)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")