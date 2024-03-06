[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageSummaryResultInfo

# Class: OnPageSummaryResultInfo

## Implements

- [`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageSummaryResultInfo.md#constructor)

### Properties

- [crawl\_gateway\_address](OnPageSummaryResultInfo.md#crawl_gateway_address)
- [crawl\_progress](OnPageSummaryResultInfo.md#crawl_progress)
- [crawl\_status](OnPageSummaryResultInfo.md#crawl_status)
- [crawl\_stop\_reason](OnPageSummaryResultInfo.md#crawl_stop_reason)
- [domain\_info](OnPageSummaryResultInfo.md#domain_info)
- [page\_metrics](OnPageSummaryResultInfo.md#page_metrics)

### Methods

- [init](OnPageSummaryResultInfo.md#init)
- [toJSON](OnPageSummaryResultInfo.md#tojson)
- [fromJS](OnPageSummaryResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageSummaryResultInfo**(`data?`): [`OnPageSummaryResultInfo`](OnPageSummaryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md) |

#### Returns

[`OnPageSummaryResultInfo`](OnPageSummaryResultInfo.md)

#### Defined in

[main.ts:143694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143694)

## Properties

### crawl\_gateway\_address

• `Optional` **crawl\_gateway\_address**: `string`

crawler ip address
displays the IP address used by the crawler to initiate the current crawling session
you can find the full list of IPs used by our crawler in the Overview section

#### Implementation of

[IOnPageSummaryResultInfo](../interfaces/IOnPageSummaryResultInfo.md).[crawl_gateway_address](../interfaces/IOnPageSummaryResultInfo.md#crawl_gateway_address)

#### Defined in

[main.ts:143676](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143676)

___


### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPageSummaryResultInfo](../interfaces/IOnPageSummaryResultInfo.md).[crawl_progress](../interfaces/IOnPageSummaryResultInfo.md#crawl_progress)

#### Defined in

[main.ts:143670](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143670)

___


### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[IOnPageSummaryResultInfo](../interfaces/IOnPageSummaryResultInfo.md).[crawl_status](../interfaces/IOnPageSummaryResultInfo.md#crawl_status)

#### Defined in

[main.ts:143672](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143672)

___


### crawl\_stop\_reason

• `Optional` **crawl\_stop\_reason**: `string`

reason why the crawling stopped
information about the reason why the crawling process stopped;
possible values:
limit_exceeded – the limit set in the max_crawl_pages was exceeded;
empty_queue – all URLs in the queue were crawled;
force_stopped – the crawling process was halted using the On Page API Force Stop function;
unexpected_exception – an internal error was encountered while crawling the target, contact support for more info

#### Implementation of

[IOnPageSummaryResultInfo](../interfaces/IOnPageSummaryResultInfo.md).[crawl_stop_reason](../interfaces/IOnPageSummaryResultInfo.md#crawl_stop_reason)

#### Defined in

[main.ts:143684](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143684)

___


### domain\_info

• `Optional` **domain\_info**: [`DomainInfo`](DomainInfo.md)

domain-wide info
on-page information about the target domain and crawling process

#### Implementation of

[IOnPageSummaryResultInfo](../interfaces/IOnPageSummaryResultInfo.md).[domain_info](../interfaces/IOnPageSummaryResultInfo.md#domain_info)

#### Defined in

[main.ts:143687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143687)

___


### page\_metrics

• `Optional` **page\_metrics**: [`PageMetrics`](PageMetrics.md)

page-specific info
metrics information on the target website pages

#### Implementation of

[IOnPageSummaryResultInfo](../interfaces/IOnPageSummaryResultInfo.md).[page_metrics](../interfaces/IOnPageSummaryResultInfo.md#page_metrics)

#### Defined in

[main.ts:143690](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143690)

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

[main.ts:143703](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143703)

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

[main.ts:143725](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143725)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageSummaryResultInfo`](OnPageSummaryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageSummaryResultInfo`](OnPageSummaryResultInfo.md)

#### Defined in

[main.ts:143718](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143718)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")