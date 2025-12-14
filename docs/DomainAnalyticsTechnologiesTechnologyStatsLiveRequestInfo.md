# DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**technology** | **string** | target technology<br>required field<br>you can find the full list of technologies you can specify here on this page<br>example:<br>'Salesforce' |[optional]|
**date_from** | **string** | starting date of the time range<br>optional field<br>minimum value: 2022-10-31<br>if you don’t specify this field, the minimum value will be used by default<br>date format: 'yyyy-mm-dd'<br>example:<br>'2023-06-01' |[optional]|
**date_to** | **string** | ending date of the time range<br>optional field<br>if you don’t specify this field, the today’s date will be used by default<br>date format: 'yyyy-mm-dd'<br>example:<br>'2023-01-15' |[optional]|
**tag** | **string** | user-defined task identifier<br>optional field<br>the character limit is 255<br>you can use this parameter to identify the task and match it with the result<br>you will find the specified tag value in the data object of the response |[optional]|