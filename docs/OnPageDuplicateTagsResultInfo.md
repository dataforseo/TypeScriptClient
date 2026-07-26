# OnPageDuplicateTagsResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**crawl_progress** | **string** | status of the crawling session. possible values: in_progress, finished |[optional]|
**crawl_status** | **CrawlStatusInfo** | details of the crawling session |[optional]|
**total_pages_count** | **number** | total number of pages with duplicate tags. displays the total number of pages with duplicate tags of the target website |[optional]|
**pages_count** | **number** | number of pages with duplicate tags in the response. displays the number of pages with duplicate tags returned in the response |[optional]|
**items_count** | **number** | number of items in the results array |[optional]|
**items** | **OnPageDuplicateTagsItem[]** | items array |[optional]|