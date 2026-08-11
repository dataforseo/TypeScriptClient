# OnPageMicrodataRequestInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**id** | **string** | *ID of the task*. **required field**. you can get this ID in the response of the [Task POST](/v3/on_page/task_post/) endpoint. example:. `'07131248-1535-0216-1000-17384017ad04'` |[optional]|
**url** | **string** | *resource URL*. **required field**. you can get this URL in the response of the [Pages](/v3/on_page/pages/) endpoint. example:. `https://dataforseo.com/apis` |[optional]|
**tag** | **string** | *user-defined task identifier*. optional field. *the character limit is 255*. you can use this parameter to identify the task and match it with the result. you will find the specified `tag` value in the `data` object of the response |[optional]|