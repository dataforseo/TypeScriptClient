# KeywordsDataGoogleAdsLocationsResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**location_code** | **number** | *location code* |[optional]|
**location_name** | **string** | *full name of the location* |[optional]|
**location_code_parent** | **number** | *the code of the superordinate location*. example:. `'location_code': 9041134,'location_name': 'Vienna International Airport,Lower Austria,Austria','location_code_parent': 20044`. where `location_code_parent` corresponds to:. `'location_code': 20044,'location_name': 'Lower Austria,Austria'` |[optional]|
**country_iso_code** | **string** | *ISO country code of the location* |[optional]|
**location_type** | **string** | *location type*. possible values according to [Google’s target types](https://developers.google.com/adwords/api/docs/appendix/geotargeting) |[optional]|