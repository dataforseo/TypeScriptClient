# OnPageRedirectChainsResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**crawl_progress** | **string** | status of the crawling session. possible values: in_progress, finished |[optional]|
**crawl_status** | **CrawlStatusInfo** | details of the crawling session |[optional]|
**total_items_count** | **number** | total number of relevant items in the database |[optional]|
**items_count** | **number** | number of items in the results array |[optional]|
**items** | **OnPageRedirectChainsItem[]** | items array |[optional]|