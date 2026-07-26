# BusinessDataTrustpilotSearchTaskGetResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | keyword in a POST array |[optional]|
**se_domain** | **string** | search engine domain in a POST array |[optional]|
**check_url** | **string** | direct URL to search engine results. you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | date and time when the result was received. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2019-11-15 12:57:46 +00:00 |[optional]|
**items_count** | **number** | the number of items in the results array. you can get more results by using the depth parameter when setting a task |[optional]|
**items** | **TrustpilotSearchOrganic[]** | found reviews. you can get more results by using the depth parameter when setting a task |[optional]|