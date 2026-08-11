# AbsoluteItems

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**geo_id** | **string** | *location identifier*. you can use this field for matching obtained results with location parameters specified in the request. see the full list of available locations with their `geo_id` [here](/v3/keywords_data/dataforseo_trends/locations/) or by making a separate request to `https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations`. example:. `US-NY` |[optional]|
**geo_name** | **string** | *location name*. you can use this field for matching obtained results with location parameters specified in the request. see the full list of available locations with their `geo_name` [here](/v3/keywords_data/dataforseo_trends/locations/) or by making a separate request to `https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations`. example:. `Andorra` |[optional]|
**values** | **string[]** | *contains data on relative keyword popularity by country or region* |[optional]|