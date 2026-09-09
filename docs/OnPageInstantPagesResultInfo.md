# OnPageInstantPagesResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**crawl_progress** | **string** | status of the crawling sessionpossible values: in_progress, finished |[optional]|
**crawl_status** | **any** | details of the crawling sessionin this case the value will be null |[optional]|
**crawl_gateway_address** | **string** | crawler ip addressdisplays the IP address used by the crawler to initiate the current crawling sessionyou can find the full list of IPs used by our crawler in the Overview section |[optional]|
**items_count** | **number** | number of items in the results array |[optional]|
**items** | **BaseOnPageResourceItem[]** | items array |[optional]|