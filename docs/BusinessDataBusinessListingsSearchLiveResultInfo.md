# BusinessDataBusinessListingsSearchLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**total_count** | **number** | *total number of results in our database relevant to your request* |[optional]|
**count** | **number** | *item types*. the number of items in the `items` array |[optional]|
**offset** | **number** |  |[optional]|
**offset_token** | **string** |  |[optional]|
**items** | **BusinessDataBusinessListingsSearchLiveItem[]** | *encountered item types*. types of search engine results encountered in the `items` array;. possible item types: `business_listing` |[optional]|