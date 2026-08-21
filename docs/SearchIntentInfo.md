# SearchIntentInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | *search engine type* |[optional]|
**main_intent** | **string** | *main search intent*. possible values: `informational`, `navigational`, `commercial`, `transactional` |[optional]|
**foreign_intent** | **string[]** | *supplementary search intents*. possible values: `informational`, `navigational`, `commercial`, `transactional` |[optional]|
**last_updated_time** | **string** | *date and time when keyword data was updated*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|