[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IOnPageSummaryResultInfo

# Interface: IOnPageSummaryResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### crawl\_gateway\_address?

> `optional` **crawl\_gateway\_address**: `string`

crawler ip address
displays the IP address used by the crawler to initiate the current crawling session
you can find the full list of IPs used by our crawler in the Overview section

#### Defined in

main.ts:154005

***

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Defined in

main.ts:153999

***

### crawl\_status?

> `optional` **crawl\_status**: [`CrawlStatusInfo`](../classes/CrawlStatusInfo.md)

details of the crawling session

#### Defined in

main.ts:154001

***

### crawl\_stop\_reason?

> `optional` **crawl\_stop\_reason**: `string`

reason why the crawling stopped
information about the reason why the crawling process stopped;
possible values:
limit_exceeded – the limit set in the max_crawl_pages was exceeded;
empty_queue – all URLs in the queue were crawled;
force_stopped – the crawling process was halted using the On Page API Force Stop function;
unexpected_exception – an internal error was encountered while crawling the target, contact support for more info

#### Defined in

main.ts:154013

***

### domain\_info?

> `optional` **domain\_info**: [`DomainInfo`](../classes/DomainInfo.md)

domain-wide info
on-page information about the target domain and crawling process

#### Defined in

main.ts:154016

***

### page\_metrics?

> `optional` **page\_metrics**: [`PageMetrics`](../classes/PageMetrics.md)

page-specific info
metrics information on the target website pages

#### Defined in

main.ts:154019
