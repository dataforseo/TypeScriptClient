# OnPageDuplicateContentRequestInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**id** | **string** | *ID of the task*. **required field**. you can get this ID in the response of the [Task POST](https://docs.dataforseo.com/v3/on_page/task_post/) endpoint. example:. '07131248-1535-0216-1000-17384017ad04' |[optional]|
**url** | **string** | *page URL*. **required field**. specify the initial page you want to receive duplicate content for |[optional]|
**similarity** | **number** | *content similarity score*. by default, the content is considered duplicate if the value is greater than or equals `6`. you can specify any similarity score in the 0-to-10 range |[optional]|
**limit** | **number** | *the maximum number of returned pages*. optional field. default value: `100`. maximum value: `1000` |[optional]|
**offset** | **number** | *offset in the results array of returned pages*. optional field. default value: `0`. maximum value: `2000000`. if you specify the `10` value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages |[optional]|
**tag** | **string** | *user-defined task identifier*. optional field. *the character limit is 255*. you can use this parameter to identify the task and match it with the result. you will find the specified `tag` value in the `data` object of the response |[optional]|