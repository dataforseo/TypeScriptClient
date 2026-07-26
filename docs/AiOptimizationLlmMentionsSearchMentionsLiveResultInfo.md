# AiOptimizationLlmMentionsSearchMentionsLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**total_count** | **number** | *total amount of results relevant the request* |[optional]|
**offset** | **number** |  |[optional]|
**search_after_token** | **string** | *token for subsequent requests*. by specifying the unique `search_after_token` when setting a new task, you will get the subsequent results of the initial task;. `search_after_token` values are unique for each subsequent task |[optional]|
**items_count** | **number** | *the number of results returned in the `items` array* |[optional]|
**items** | **AiOptimizationLlmMentionsSearchMentionsLiveItem[]** | *contains relevant mentions data* |[optional]|