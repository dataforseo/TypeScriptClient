# AiOptimizationLlmMentionsTargetMetricsLiteLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**total_count** | **number** | *total amount of results relevant the request* |[optional]|
**offset** | **number** | *the number of mentions objects that are omitted in the `items` array* |[optional]|
**items_count** | **number** | *the number of results returned in the `items` array* |[optional]|
**aggregated_metrics** | **any** | *aggregated mentions metrics*. in this case, always returns `null` |[optional]|
**items** | **AiOptimizationLlmMentionsTargetMetricsLiteLiveItem[]** | *array of aggregated mentions metrics*. contains objects with aggregated mention metrics for the specified target |[optional]|