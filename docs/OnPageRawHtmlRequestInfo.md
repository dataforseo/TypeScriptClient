# OnPageRawHtmlRequestInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**id** | **string** | *ID of the task*. **required field**. you can get this ID in the response of the [Task POST](/v3/on_page/task_post/) endpoint. example:. '07131248-1535-0216-1000-17384017ad04' |[optional]|
**url** | **string** | *page url*. **required field**. the absolute URL of a page to request HTML. **Note:** this field is optional if the task was set using the [Instant Pages endpoint](/v3/on_page/instant_pages/) |[optional]|