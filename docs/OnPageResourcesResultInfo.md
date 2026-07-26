# OnPageResourcesResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**crawl_progress** | **string** | status of the crawling session. possible values: in_progress, finished |[optional]|
**crawl_status** | **CrawlStatusInfo** | details of the crawling session |[optional]|
**search_after_token** | **string** |  |[optional]|
**current_offset** | **number** |  |[optional]|
**total_items_count** | **number** | total number of relevant items crawled |[optional]|
**items_count** | **number** | number of items in the results array |[optional]|
**items** | **BaseOnPageResourceItem[]** | items array |[optional]|