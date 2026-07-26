# BacklinksBacklinksLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**target** | **string** | *target domain in a POST array* |[optional]|
**mode** | **string** | *mode specified in a POST array* |[optional]|
**custom_mode** | **{ [key: string]: any; }** | *custom mode specified in a POST array* |[optional]|
**total_count** | **number** | *total amount of results relevant the request* |[optional]|
**items_count** | **number** | *the number of results returned in the `items` array* |[optional]|
**items** | **BacklinksBacklinksLiveItem[]** | *contains relevant backlinks and referring domains data* |[optional]|
**search_after_token** | **string** | *token for subsequent requests*. by specifying the unique `search_after_token` when setting a new task, you will get the subsequent results of the initial task;. `search_after_token` values are unique for each subsequent task |[optional]|