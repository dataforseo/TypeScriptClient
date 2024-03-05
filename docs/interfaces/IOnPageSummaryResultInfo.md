[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageSummaryResultInfo

# Interface: IOnPageSummaryResultInfo

## Implemented by

- [`OnPageSummaryResultInfo`](../classes/OnPageSummaryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [crawl\_gateway\_address](IOnPageSummaryResultInfo.md#crawl_gateway_address)
- [crawl\_progress](IOnPageSummaryResultInfo.md#crawl_progress)
- [crawl\_status](IOnPageSummaryResultInfo.md#crawl_status)
- [crawl\_stop\_reason](IOnPageSummaryResultInfo.md#crawl_stop_reason)
- [domain\_info](IOnPageSummaryResultInfo.md#domain_info)
- [page\_metrics](IOnPageSummaryResultInfo.md#page_metrics)

## Properties

### crawl\_gateway\_address

• `Optional` **crawl\_gateway\_address**: `string`

crawler ip address
displays the IP address used by the crawler to initiate the current crawling session
you can find the full list of IPs used by our crawler in the Overview section

#### Defined in

[main.ts:143750](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143750)

___

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

[main.ts:143744](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143744)

___

### crawl\_status

• `Optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

[main.ts:143746](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143746)

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

#### Defined in

[main.ts:143758](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143758)

___

### domain\_info

• `Optional` **domain\_info**: [`DomainInfo`](../classes/DomainInfo.md)

domain-wide info
on-page information about the target domain and crawling process

#### Defined in

[main.ts:143761](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143761)

___

### page\_metrics

• `Optional` **page\_metrics**: [`PageMetrics`](../classes/PageMetrics.md)

page-specific info
metrics information on the target website pages

#### Defined in

[main.ts:143764](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143764)
