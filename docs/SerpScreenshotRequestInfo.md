# SerpScreenshotRequestInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**task_id** | **string** | *task identifier*. **required field**. unique identifier of the associated task in the [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. you will be able to use it within **7 days** to request the results of the task at any time |[optional]|
**browser_preset** | **string** | *browser resolution preset*. optional field. browser preset associated with a certain device type. can take the following values: `desktop`, `tablet`, `mobile` . **Note:** by default, browser preset corresponds to the device type specified in the POST request |[optional]|
**browser_screen_width** | **number** | *width of the browser resolution*. optional field. can be specified in the following range: `240-9999`. default value for `desktop`: 1920. default value for `mobile`: 390. default value for `table`: 1024 |[optional]|
**browser_screen_height** | **number** | *height of the browser resolution*. optional field. can be specified in the following range: `240-9999`. default value for `desktop`: 1080. default value for `mobile`: 844. default value for `table`: 1366 |[optional]|
**browser_screen_scale_factor** | **number** | *browser scale factor*. optional field. can be specified in the following range: `0.5-3`. default value for `desktop`: 1. default value for `mobile`: 3. default value for `table`: 2 |[optional]|
**page** | **number** | *number of SERP pages*. optional field. if `depth` in the corresponding Task POST request exceeds 10 results (or 1 SERP page), specify the number of SERP pages to screenshot;. default value: `1` |[optional]|