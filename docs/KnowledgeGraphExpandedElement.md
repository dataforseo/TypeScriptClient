# KnowledgeGraphExpandedElement

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**featured_title** | **string** | *title of a given element* |[optional]|
**url** | **string** | *relevant URL* |[optional]|
**domain** | **string** | *domain where a link points* |[optional]|
**title** | **string** | *title of the result in SERP* |[optional]|
**snippet** | **string** | *text alongside the link title* |[optional]|
**images** | **AiModeImagesElementInfo[]** | *images of the element*. if there are none, equals `null` |[optional]|
**timestamp** | **string** | *date and time when the result was published*. in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00'. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**table** | **Table** | *table present in the element*. the header and content of the table present in the element |[optional]|