# AiOptimizationLlmMentionsMultiTargetMetricsLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**total_count** | **number** | *total number of results* |[optional]|
**offset** | **number** | *offset in the results array of the returned mentions data*. `offset` specified in the request |[optional]|
**items_count** | **number** | *number of items in the results array* |[optional]|
**aggregated_metrics** | **LlmMentionsAggregatedMetricsInfo** | *aggregated mentions metrics summary*. contains overall aggregated LLM mention metrics across all LLM mentions that match at least one target specified in the request |[optional]|
**items** | **AiOptimizationLlmMentionsMultiTargetMetricsLiveItem[]** | *contains relevant mentions data* |[optional]|