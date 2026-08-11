# DataforseoLabsGooglePageIntersectionLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | *search engine type* |[optional]|
**pages** | **{ [key: string]: string; }** | *URLs you specified a POST array* |[optional]|
**exclude_pages** | **string[]** | *URLs you specified in a POST array that will be excluded from the results* |[optional]|
**location_code** | **number** | *location code in a POST array* |[optional]|
**language_code** | **string** | *language code in a POST array* |[optional]|
**total_count** | **number** | *total amount of results in our database relevant to your request* |[optional]|
**items_count** | **number** | *the number of results returned in the `items` array* |[optional]|
**items** | **DataforseoLabsGooglePageIntersectionLiveItem[]** | *contains keywords, relevant SERP elements and related data* |[optional]|