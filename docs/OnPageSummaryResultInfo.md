# OnPageSummaryResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**crawl_progress** | **string** | *status of the crawling session*. possible values: `in_progress`, `finished` |[optional]|
**crawl_status** | **CrawlStatusInfo** | *details of the crawling session* |[optional]|
**crawl_gateway_address** | **string** | *crawler ip address*. displays the IP address used by the crawler to initiate the current crawling session. you can find the full list of IPs used by our crawler in the [Overview section](/v3/on_page/overview) |[optional]|
**crawl_stop_reason** | **string** | *reason why the crawling stopped*. information about the reason why the crawling process stopped;. possible values:. `limit_exceeded` - the limit set in the `max_crawl_pages` was exceeded;. `empty_queue` - all URLs in the queue were crawled;. `force_stopped` - the crawling process was halted using the[On Page API Force Stop](/v3/on_page/force_stop) function;. `unexpected_exception` - an internal error was encountered while crawling the `target`, contact support for more info |[optional]|
**domain_info** | **DomainInfo** | *domain-wide info*. on-page information about the target domain and crawling process |[optional]|
**page_metrics** | **PageMetrics** | *page-specific info*. metrics information on the target website pages |[optional]|