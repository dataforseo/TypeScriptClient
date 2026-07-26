# ResultAvailableLanguages

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**available_platforms** | **string[]** | *supported LLM platforms*. contains the sources of data supported for a specific location and language combination. only `google` and `chat_gpt` are currently available |[optional]|
**language_name** | **string** | *language name* |[optional]|
**language_code** | **string** | *language code according to [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)* |[optional]|
**responses_count** | **number** | *number of LLM responses*. the number of LLM responses available in the database for the certain location and language parameters |[optional]|