**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageSummaryResultInfo

# Class: OnPageSummaryResultInfo

## Implements

- [`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageSummaryResultInfo(data)

> **new OnPageSummaryResultInfo**(`data`?): [`OnPageSummaryResultInfo`](OnPageSummaryResultInfo.md)

#### Parameters

• **data?**: [`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md)

#### Returns

[`OnPageSummaryResultInfo`](OnPageSummaryResultInfo.md)

#### Source

main.ts:149279

## Properties

### crawl\_gateway\_address?

> **`optional`** **crawl\_gateway\_address**: `string`

crawler ip address
displays the IP address used by the crawler to initiate the current crawling session
you can find the full list of IPs used by our crawler in the Overview section

#### Implementation of

[`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md).[`crawl_gateway_address`](../interfaces/IOnPageSummaryResultInfo.md#crawl_gateway_address)

#### Source

main.ts:149261

***

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md).[`crawl_progress`](../interfaces/IOnPageSummaryResultInfo.md#crawl_progress)

#### Source

main.ts:149255

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

details of the crawling session

#### Implementation of

[`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md).[`crawl_status`](../interfaces/IOnPageSummaryResultInfo.md#crawl_status)

#### Source

main.ts:149257

***

### crawl\_stop\_reason?

> **`optional`** **crawl\_stop\_reason**: `string`

reason why the crawling stopped
information about the reason why the crawling process stopped;
possible values:
limit_exceeded – the limit set in the max_crawl_pages was exceeded;
empty_queue – all URLs in the queue were crawled;
force_stopped – the crawling process was halted using the On Page API Force Stop function;
unexpected_exception – an internal error was encountered while crawling the target, contact support for more info

#### Implementation of

[`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md).[`crawl_stop_reason`](../interfaces/IOnPageSummaryResultInfo.md#crawl_stop_reason)

#### Source

main.ts:149269

***

### domain\_info?

> **`optional`** **domain\_info**: [`DomainInfo`](DomainInfo.md)

domain-wide info
on-page information about the target domain and crawling process

#### Implementation of

[`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md).[`domain_info`](../interfaces/IOnPageSummaryResultInfo.md#domain_info)

#### Source

main.ts:149272

***

### page\_metrics?

> **`optional`** **page\_metrics**: [`PageMetrics`](PageMetrics.md)

page-specific info
metrics information on the target website pages

#### Implementation of

[`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md).[`page_metrics`](../interfaces/IOnPageSummaryResultInfo.md#page_metrics)

#### Source

main.ts:149275

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:149288

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:149310

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageSummaryResultInfo`](OnPageSummaryResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageSummaryResultInfo`](OnPageSummaryResultInfo.md)

#### Source

main.ts:149303
