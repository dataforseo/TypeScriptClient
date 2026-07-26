# OnPageUncrawlableResourcesResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**crawl_progress** | **string** | *status of the crawling session*. possible values: `in_progress`, `finished` |[optional]|
**crawl_status** | **CrawlStatusInfo** | *details of the crawling session* |[optional]|
**current_offset** | **number** |  |[optional]|
**total_items_count** | **number** | *total number of uncrawlable resources found*.  total number of uncrawlable resources found during the crawl of the target domain |[optional]|
**items_count** | **number** | *number of uncrawlable resources in the `items` array* |[optional]|
**items** | **OnPageUncrawlableResourcesItem[]** | *array of uncrawlable resources* |[optional]|