# OnPageKeywordDensityResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**crawl_progress** | **string** | *status of the crawling session*. possible values: `in_progress`, `finished` |[optional]|
**crawl_status** | **CrawlStatusInfo** | *details of the crawling session* |[optional]|
**total_items_count** | **number** | *total number of relevant items*. total number of keywords on the specified website or web page matching the set `keyword_length` and `filters` |[optional]|
**items_count** | **number** | *number of items in the results array* |[optional]|
**items** | **OnPageKeywordDensityItem[]** | *items array* |[optional]|