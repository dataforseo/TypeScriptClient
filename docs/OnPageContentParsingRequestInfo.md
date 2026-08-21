# OnPageContentParsingRequestInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**url** | **string** | *URL of the content to parse*. **required field**. URL of the page to parse. example:. `https://dataforseo.com/blog/a-versatile-alternative-to-google-trends-exploring-the-power-of-dataforseo-trends-api` |[optional]|
**id** | **string** | *ID of the task*. **required field**. you can get this ID in the response of the [Task POST](/v3/on_page/task_post/) endpoint. **note:** the `enable_content_parsing` parameter in the POST request must be set to `true`. example:. `'07131248-1535-0216-1000-17384017ad04'` |[optional]|
**markdown_view** | **boolean** | *return page content as markdown*. optional field. if set to `true`, the markdown-formatted content of the page will be returned in the `page_as_markdown` field of the response;. default value: `false` |[optional]|