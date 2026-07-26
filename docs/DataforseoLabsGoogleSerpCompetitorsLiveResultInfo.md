# DataforseoLabsGoogleSerpCompetitorsLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | search engine type |[optional]|
**seed_keywords** | **string[]** | keywords specified in the request. keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) |[optional]|
**location_code** | **number** | location code in a POST array. if there is no data, then the value is null |[optional]|
**language_code** | **string** | language code in a POST array. if there is no data, then the value is null |[optional]|
**total_count** | **number** | the total amount of results in our database relevant to your request |[optional]|
**items_count** | **number** | the number of results returned in the items array |[optional]|
**items** | **DataforseoLabsGoogleSerpCompetitorsLiveItem[]** | contains detected SERP competitors and related data |[optional]|