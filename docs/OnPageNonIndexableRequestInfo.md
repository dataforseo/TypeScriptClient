# OnPageNonIndexableRequestInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**id** | **string** | *ID of the task*. **required field**. you can get this ID in the response of the [Task POST](/v3/on_page/task_post/) endpoint. example:. '07131248-1535-0216-1000-17384017ad04' |[optional]|
**limit** | **number** | *the maximum number of returned pages*. optional field. default value: `100`. maximum value: `1000` |[optional]|
**offset** | **number** | *offset in the results array of returned pages*. optional field. default value: `0`. maximum value: `2000000`. if you specify the `10` value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages |[optional]|
**filters** | **any[]** | *array of results filtering parameters*. optional field. **you can add several filters at once (8 filters maximum)**. you should set a logical operator `and`, `or` between the conditions. the following operators are supported:. `regex`, `not_regex`, ``, `>=`, `=`, `<>`, `in`, `not_in`, `like`, `not_like`. you can use the `%` operator with `like` and `not_like` to match any string of zero or more characters. example:. `[['reason','<>','robots_txt'],'and',['url','not_like','%/wp-admin/%']]`. `[['url','not_like','%/wp-admin/%'],'and',[['reason','<>','meta_tag'],'or',['reason','<>','http_header']]]`. The full list of possible filters is available [by this link.](/v3/on_page/filters_and_thresholds/?bash) |[optional]|