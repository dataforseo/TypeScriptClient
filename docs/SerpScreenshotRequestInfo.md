# SerpScreenshotRequestInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**task_id** | **string** | task identifier<br>required field<br>unique identifier of the associated task in the UUID format<br>you will be able to use it within 7 days to request the results of the task at any time |[optional]|
**browser_preset** | **string** | browser resolution preset<br>optional field<br>browser preset associated with a certain device type<br>can take the following values: desktop, tablet, mobile<br>note: by default, browser preset corresponds to the device type specified in the POST request |[optional]|
**browser_screen_width** | **number** | width of the browser resolution<br>optional field<br>can be specified in the following range: 240-9999 |[optional]|
**browser_screen_height** | **number** | height of the browser resolution<br>optional field<br>can be specified in the following range: 240-9999 |[optional]|
**browser_screen_scale_factor** | **number** | browser scale factor<br>optional field<br>can be specified in the following range: 0.5-3<br>default value: 1 |[optional]|
**page** | **number** | number of SERP pages<br>optional field<br>if depth in the corresponding Task POST request exceeds 10 results (or 1 SERP page), specify the number of SERP pages to screenshot;<br>default value: 1 |[optional]|