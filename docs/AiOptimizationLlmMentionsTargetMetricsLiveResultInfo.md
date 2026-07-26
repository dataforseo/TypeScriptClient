# AiOptimizationLlmMentionsTargetMetricsLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**total_count** | **number** | *total amount of results relevant to the request*. in this case, always equals `0` |[optional]|
**offset** | **number** | *the number of mentions objects that are omitted in the `items` array*. in this case, always equals `0` |[optional]|
**items_count** | **number** | *the number of results returned in the `items` array*. in this case, always equals `0` |[optional]|
**aggregated_metrics** | **LlmMentionsAggregatedMetricsInfo** | *aggregated mentions metrics*. contains aggregated LLM mention metrics across all found domains, grouped by various dimensions |[optional]|
**items** | **any[]** | *individual target results*. in this case, equals `null` |[optional]|