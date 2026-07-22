# AiOptimizationLlmMentionsTopMentionedDomainsLiteLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**total_count** | **number** | total number of results |[optional]|
**offset** | **number** | offset in the results array of the returned mentions data<br>offset specified in the reqest |[optional]|
**items_count** | **number** | number of items in the results array |[optional]|
**aggregated_metrics** | **any** | aggregated mentions metrics summary<br>contains overall aggregated LLM mention metrics across all found domains, grouped by various dimensionsin this case, the value will be null |[optional]|
**items** | **AiOptimizationLlmMentionsTopMentionedDomainsLiteLiveItem[]** | contains relevant mentions data |[optional]|