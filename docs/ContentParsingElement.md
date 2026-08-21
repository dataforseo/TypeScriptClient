# ContentParsingElement

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**fetch_time** | **string** | *date and time when the content was fethced*.             example:.             `'2022-11-01 10:02:52 +00:00'` |[optional]|
**status_code** | **number** | *general status code*.             you can find the full list of the response codes [here](/v3/appendix/errors).             **Note:** we strongly recommend designing a necessary system for handling related exceptional or error conditions |[optional]|
**page_content** | **PageContentInfo** | *parsed content of the page* |[optional]|
**page_as_markdown** | **string** | *page content in the markdown format*.             page content in the [text-to-HTML markdown format](https://daringfireball.net/projects/markdown/).             specify `markdown_view` as `true` in the request to return the value |[optional]|