# AiOptimizationLlmMentionsTopMentionedPagesLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**total_count** | **number** | *total amount of results relevant the request* |[optional]|
**offset** | **number** | *the number of mentions objects that are omitted in the `items` array* |[optional]|
**items_count** | **number** | *the number of results returned in the `items` array* |[optional]|
**aggregated_metrics** | **LlmMentionsAggregatedMetricsInfo** | *aggregated mentions metrics*. contains aggregated LLM mention metrics across all found pages, grouped by various dimensions |[optional]|
**items** | **AiOptimizationLlmMentionsTopMentionedPagesLiveItem[]** | *individual page results*. array containing detailed mention metrics for each of the found top mentioned pages |[optional]|