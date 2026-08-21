# DataforseoLabsGoogleRelatedKeywordsLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | *search engine type* |[optional]|
**seed_keyword** | **string** | *keyword in a POST array* |[optional]|
**seed_keyword_data** | **KeywordDataInfo** | *keyword data for the seed keyword*. fields in the array are identical to that of `keyword_data` |[optional]|
**location_code** | **number** | *location code in a POST array* |[optional]|
**language_code** | **string** | *language code in a POST array* |[optional]|
**total_count** | **number** | *total amount of results in our database relevant to your request* |[optional]|
**items_count** | **number** | *the number of results returned in the `items` array* |[optional]|
**items** | **DataforseoLabsGoogleRelatedKeywordsLiveItem[]** | *contains keywords and related data* |[optional]|