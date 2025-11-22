# AiOptimizationLlmMentionsSearchLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**total_count** | **number** | total amount of results relevant the request |[optional]|
**current_offset** | **number** | the number of mentions objects that are omitted in the items array |[optional]|
**search_after_token** | **string** | token for subsequent requests<br>by specifying the unique search_after_token when setting a new task, you will get the subsequent results of the initial task;<br>search_after_token values are unique for each subsequent task |[optional]|
**items_count** | **number** | the number of results returned in the items array |[optional]|
**items** | **AiOptimizationLlmMentionsSearchLiveItem[]** | contains relevant mentions data |[optional]|