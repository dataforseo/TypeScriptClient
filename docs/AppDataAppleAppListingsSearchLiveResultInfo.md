# AppDataAppleAppListingsSearchLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**total_count** | **number** | *the total number of relevant results in the database* |[optional]|
**count** | **number** | *the number of items in the results array* |[optional]|
**offset** | **number** | *offset in the results array of returned apps* |[optional]|
**offset_token** | **string** | *token for subsequent requests*. you can use this parameter in the POST request to avoid timeouts while trying to obtain over 100,000 results in a single request |[optional]|
**items** | **AppDataAppleAppListingsSearchLiveItem[]** | *array of apps and related data* |[optional]|