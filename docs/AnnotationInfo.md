# AnnotationInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**title** | **string** | *the domain name or title of the quoted source* |[optional]|
**url** | **string** | *redirect URL to the quoted source*. contains a Vertex AI redirect that leads to the original source |[optional]|
**direct_url** | **string** | *direct URL to the quoted source*. contains the original source URL that the Vertex AI redirect in the `url` field leads to |[optional]|
**start_index** | **number** | *start of the annotation indexing* |[optional]|
**end_index** | **number** | *end of the annotation indexing* |[optional]|
**text** | **string** | *text of the reasoning chain section*. text of the reasoning chain  section summarizing the model's thought process |[optional]|