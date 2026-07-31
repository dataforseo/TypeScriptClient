# ContentAnalysisSearchLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**offset_token** | **string** | *offset token for subsequent requests*. you can use the string provided in this field to get the subsequent results of the initial task;. **note:** `offset_token` values are unique for each subsequent task |[optional]|
**total_count** | **number** | *total amount of results in our database relevant to your request* |[optional]|
**items_count** | **number** | *the number of results returned in the `items` array* |[optional]|
**items** | **ContentAnalysisSearchLiveItem[]** | *contains citations and related data* |[optional]|