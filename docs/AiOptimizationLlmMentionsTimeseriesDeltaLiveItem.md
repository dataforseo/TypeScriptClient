# AiOptimizationLlmMentionsTimeseriesDeltaLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**date** | **string** | *date timestamp*.  date format: `'yyyy-mm-dd'` |[optional]|
**delta_mentions** | **number** | *LLM mentions count delta*. the difference in `mentions` between the current timestamp and the previous one |[optional]|
**delta_ai_search_volume** | **number** | *LLM mentions count delta*. the difference in `ai_search_volume` values between the current timestamp and the previous one. learn more about this metric [here](https://dataforseo.com/help-center/how-ai-search-volume-metrics-work-in-the-llm-mentions-timeseries-endpoints) |[optional]|