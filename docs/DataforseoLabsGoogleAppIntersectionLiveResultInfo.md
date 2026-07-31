# DataforseoLabsGoogleAppIntersectionLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | *search engine type* |[optional]|
**app_ids** | **{ [key: string]: string; }** | *ids of the apps in a POST array* |[optional]|
**location_code** | **number** | *location code in a POST array* |[optional]|
**language_code** | **string** | *language code in a POST array* |[optional]|
**total_count** | **number** | *total amount of results in our database relevant to your request* |[optional]|
**items_count** | **number** | *the number of results returned in the `items` array* |[optional]|
**items** | **DataforseoLabsleAppIntersectionLiveItem[]** | *contains data related to the ranking keywords for the app specified in the `app_id` field* |[optional]|