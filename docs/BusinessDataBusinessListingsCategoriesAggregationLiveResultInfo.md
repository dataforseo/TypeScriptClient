# BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**total_count** | **number** | *total number of results in our database relevant to your request* |[optional]|
**count** | **number** | *item types*. the number of items in the `items` array |[optional]|
**offset** | **string** | *offset in the results array of returned categories* |[optional]|
**offset_token** | **any** | *token for subsequent requests*. by specifying the unique `offset_token` when setting a new task, you will get the subsequent results of the initial task;. `offset_token` values are unique for each subsequent task |[optional]|
**items** | **BusinessDataBusinessListingsCategoriesAggregationLiveItem[]** | *encountered item types*. types of search engine results encountered in the `items` array;. possible item types: `business_category` |[optional]|