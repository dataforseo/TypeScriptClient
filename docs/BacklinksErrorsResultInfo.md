# BacklinksErrorsResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**id** | **string** | task identifier<br>unique task identifier in our system in the UUID format |[optional]|
**datetime** | **string** | date and time when an error occurred<br>in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”<br>example:<br>2019-11-15 12:57:46 +00:00 |[optional]|
**function** | **string** | corresponding API function |[optional]|
**error_code** | **number** | error code |[optional]|
**error_message** | **string** | error message or error URL<br>error message (see full list) or URL that caused an error |[optional]|
**http_url** | **string** | URL that caused an error<br>URL you used for making an API call |[optional]|
**http_method** | **string** | HTTP method |[optional]|
**http_code** | **number** | HTTP status code |[optional]|
**http_time** | **number** | time taken by HTTP request |[optional]|
**http_response** | **string** | HTTP response<br>server response |[optional]|