# DataforseoLabsGoogleHistoricalSerpsLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | *search engine type in a POST array* |[optional]|
**keyword** | **string** | *keyword received in a POST array*.             **the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)** |[optional]|
**location_code** | **number** | *location code in a POST array* |[optional]|
**language_code** | **string** | *language code in a POST array* |[optional]|
**total_count** | **number** | *the total amount of results in our database relevant to your request* |[optional]|
**items_count** | **number** | *the number of results returned in the `items` array* |[optional]|
**items** | **DataforseoLabsGoogleHistoricalSerpsLiveItem[]** | *historical SERPs and related data found in the database* |[optional]|