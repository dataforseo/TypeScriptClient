# OnPageInstantPagesResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**crawl_progress** | **string** | *status of the crawling session*. possible values: `in_progress`, `finished` |[optional]|
**crawl_status** | **any** | *details of the crawling session*. in this case the value will be `null` |[optional]|
**crawl_gateway_address** | **string** | *crawler ip address*. displays the IP address used by the crawler to initiate the current crawling session. you can find the full list of IPs used by our crawler in the [Overview section](/v3/on_page/overview) |[optional]|
**items_count** | **number** | *number of items in the results array* |[optional]|
**items** | **BaseOnPageResourceItem[]** | *items array* |[optional]|