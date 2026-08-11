# DataforseoLabsAmazonRankedKeywordsLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | *search engine type* |[optional]|
**asin** | **string** | *ASIN in a POST array* |[optional]|
**location_code** | **number** | *location code in a POST array*. if there is no data, then the value is `null` |[optional]|
**language_code** | **string** | *language code in a POST array*. if there is no data, then the value is `null` |[optional]|
**total_count** | **number** | *total amount of results in our database relevant to your request* |[optional]|
**items_count** | **number** | *the number of results returned in the `items` array* |[optional]|
**items** | **DataforseoLabsAmazonRankedKeywordsLiveItem[]** | *contains detected Amazon product competitors and related data* |[optional]|