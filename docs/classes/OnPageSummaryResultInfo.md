[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageSummaryResultInfo

# Class: OnPageSummaryResultInfo

Defined in: main.ts:165814

## Implements

- [`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageSummaryResultInfo()

> **new OnPageSummaryResultInfo**(`data`?): [`OnPageSummaryResultInfo`](OnPageSummaryResultInfo.md)

Defined in: main.ts:165841

#### Parameters

##### data?

[`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md)

#### Returns

[`OnPageSummaryResultInfo`](OnPageSummaryResultInfo.md)

## Properties

### crawl\_gateway\_address?

> `optional` **crawl\_gateway\_address**: `string`

Defined in: main.ts:165823

crawler ip address
displays the IP address used by the crawler to initiate the current crawling session
you can find the full list of IPs used by our crawler in the Overview section

#### Implementation of

[`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md).[`crawl_gateway_address`](../interfaces/IOnPageSummaryResultInfo.md#crawl_gateway_address)

***

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:165817

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md).[`crawl_progress`](../interfaces/IOnPageSummaryResultInfo.md#crawl_progress)

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](CrawlStatusInfo.md)

Defined in: main.ts:165819

details of the crawling session

#### Implementation of

[`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md).[`crawl_status`](../interfaces/IOnPageSummaryResultInfo.md#crawl_status)

***

### crawl\_stop\_reason?

> `optional` **crawl\_stop\_reason**: `string`

Defined in: main.ts:165831

reason why the crawling stopped
information about the reason why the crawling process stopped;
possible values:
limit_exceeded – the limit set in the max_crawl_pages was exceeded;
empty_queue – all URLs in the queue were crawled;
force_stopped – the crawling process was halted using the On Page API Force Stop function;
unexpected_exception – an internal error was encountered while crawling the target, contact support for more info

#### Implementation of

[`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md).[`crawl_stop_reason`](../interfaces/IOnPageSummaryResultInfo.md#crawl_stop_reason)

***

### domain\_info?

> `optional` **domain\_info**: [`DomainInfo`](DomainInfo.md)

Defined in: main.ts:165834

domain-wide info
on-page information about the target domain and crawling process

#### Implementation of

[`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md).[`domain_info`](../interfaces/IOnPageSummaryResultInfo.md#domain_info)

***

### page\_metrics?

> `optional` **page\_metrics**: [`PageMetrics`](PageMetrics.md)

Defined in: main.ts:165837

page-specific info
metrics information on the target website pages

#### Implementation of

[`IOnPageSummaryResultInfo`](../interfaces/IOnPageSummaryResultInfo.md).[`page_metrics`](../interfaces/IOnPageSummaryResultInfo.md#page_metrics)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:165850

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:165872

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageSummaryResultInfo`](OnPageSummaryResultInfo.md)

Defined in: main.ts:165865

#### Parameters

##### data

`any`

#### Returns

[`OnPageSummaryResultInfo`](OnPageSummaryResultInfo.md)
