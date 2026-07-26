# BusinessDataGoogleHotelInfoLiveHtmlResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | *unique hotel identifier specified as `'hotel_id:$'`* |[optional]|
**type** | **string** | type of element |[optional]|
**se_domain** | **string** |  |[optional]|
**location_code** | **number** | *location code in a POST array* |[optional]|
**language_code** | **string** | *language code in a POST array* |[optional]|
**datetime** | **string** | *date and time when the result was received*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**items_count** | **number** | *the number of results returned in the **`items`** array* |[optional]|
**items** | **HtmlItemInfo[]** | *HTML pages* |[optional]|