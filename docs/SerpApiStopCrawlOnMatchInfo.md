# SerpApiStopCrawlOnMatchInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**match_value** | **string** | arget domain or wildcard value. required field if stop_crawl_on_match is specified;. specify a target domain or wildcard value;. Note: domain name must be specified without a request protocol;. example: dataforseo.com |[optional]|
**match_type** | **string** | target match type. required field if stop_crawl_on_match is specified;. type of match for the match_value. possible values: domain, with_subdomains, wildcard |[optional]|