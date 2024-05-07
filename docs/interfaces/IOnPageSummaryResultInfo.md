**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IOnPageSummaryResultInfo

# Interface: IOnPageSummaryResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_gateway\_address?

> **`optional`** **crawl\_gateway\_address**: `string`

crawler ip address
displays the IP address used by the crawler to initiate the current crawling session
you can find the full list of IPs used by our crawler in the Overview section

#### Source

main.ts:151137

***

### crawl\_progress?

> **`optional`** **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Source

main.ts:151131

***

### crawl\_status?

> **`optional`** **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Source

main.ts:151133

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

#### Source

main.ts:151145

***

### domain\_info?

> **`optional`** **domain\_info**: [`DomainInfo`](../classes/DomainInfo.md)

domain-wide info
on-page information about the target domain and crawling process

#### Source

main.ts:151148

***

### page\_metrics?

> **`optional`** **page\_metrics**: [`PageMetrics`](../classes/PageMetrics.md)

page-specific info
metrics information on the target website pages

#### Source

main.ts:151151
