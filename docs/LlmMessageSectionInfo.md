# LlmMessageSectionInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**text** | **string** | *text of the reasoning chain section*. text of the reasoning chain  section summarizing the model's thought process |[optional]|
**annotations** | **AnnotationInfo[]** | *array of references used to generate the response*. equals `null` if the `web_search` parameter is not set to `true`. **Note:** `annotations` may return empty even when `web_search` is `true`, as the AI will attempt to retrieve web information but may not find relevant results |[optional]|