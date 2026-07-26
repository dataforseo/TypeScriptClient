# TrendsMapDataInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**geo_id** | **string** | Google Trends location identifier. you can use this field for matching obtained results with location parameters specified in the request. example:. US-NY |[optional]|
**geo_name** | **string** | Google Trends location name. you can use this field for matching obtained results with location parameters specified in the request |[optional]|
**values** | **number[]** | relative keyword popularity rate in a given location. represents the location-specific keyword popularity rate over the given time range. if you specify more than one keyword, the values will be averaged to the highest value across all specified keywords. a value of 100 is the peak popularity for the term. a value of 50 means that the term is half as popular. a value of 0 means there was not enough data for this term |[optional]|
**max_value_index** | **number** | max value among comparable terms. represents the maximum value if you specified more than two keywords in a POST array. if you specified only one keyword, the value will be null |[optional]|