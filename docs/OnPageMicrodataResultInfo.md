# OnPageMicrodataResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**crawl_progress** | **string** | status of the crawling session. possible values: in_progress, finished |[optional]|
**crawl_status** | **CrawlStatusInfo** | details of the crawling session |[optional]|
**test_summary** | **TestSummary** | microdata validation test results |[optional]|
**items_count** | **number** | number of items in the results array |[optional]|
**items** | **OnPageMicrodataInfoItem[]** | items array |[optional]|