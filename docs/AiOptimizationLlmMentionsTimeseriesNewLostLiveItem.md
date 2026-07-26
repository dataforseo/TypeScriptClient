# AiOptimizationLlmMentionsTimeseriesNewLostLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**date** | **string** | *date timestamp*.  date format: `'yyyy-mm-dd'` |[optional]|
**new_mentions** | **number** | *new LLM mentions*. indicates the LLM responses that contain the target at the `date_to` timestamp, did not contain it at the `date_from` timestamp |[optional]|
**lost_mentions** | **number** | *lost LLM mentions*. indicates the LLM responses that contained the specified target at the `date_from` timestamp, do not contain it at the `date_to` timestamp |[optional]|
**new_ai_search_volume** | **number** | *ai_search_volume increment*. indicates the increase of `ai_search_volume` values between the current timestamp and the previous one. learn more about this metric [here](https://dataforseo.com/help-center/how-ai-search-volume-metrics-work-in-the-llm-mentions-timeseries-endpoints) |[optional]|
**lost_ai_search_volume** | **number** | *ai_search_volume decrement*. indicates the decrease of `ai_search_volume` values between the current timestamp and the previous one. learn more about this metric [here](https://dataforseo.com/help-center/how-ai-search-volume-metrics-work-in-the-llm-mentions-timeseries-endpoints) |[optional]|