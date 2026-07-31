# SerpBaiduLocationsResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**location_code** | **number** | *location code* |[optional]|
**location_name** | **string** | *full name of the location* |[optional]|
**location_code_parent** | **number** | *the code of the superordinate location*. only `City` `location_type` is supported for all countries except China (where `Country` is also supported);. don't match locations by `location_code_parent` because the results for `Region` and `Country`-level results for most countries are not supported by Baidu SERP API |[optional]|
**country_iso_code** | **string** | *ISO country code of the location* |[optional]|
**location_type** | **string** | *location type*. only `City` is supported for all countries except China (where `Country` is also supported) |[optional]|