# DomainAnalyticsTechnologiesDomainsByLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**domain** | **string** | *specified domain name* |[optional]|
**title** | **string** | *domain meta title* |[optional]|
**description** | **string** | *domain meta description* |[optional]|
**meta_keywords** | **string[]** | *domain meta keywords* |[optional]|
**domain_rank** | **number** | *backlink rank of the target domain*. learn more about the metric and how it is calculated in [this help center article](https://dataforseo.com/help-center/what_is_rank_in_backlinks_api) |[optional]|
**last_visited** | **string** | *most recent date when our crawler visited the domain*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2022-10-10 12:57:46 +00:00` |[optional]|
**country_iso_code** | **string** | *domain ISO code*. ISO code of the country that target domain is determined to belong to |[optional]|
**language_code** | **string** | *domain language*. code of the language that target domain is determined to be associated with |[optional]|
**content_language_code** | **string** | *content language*. code of the language that content on the target domain is written with |[optional]|
**phone_numbers** | **string[]** | *phone numbers of the target*. contact phone numbers indicated on the target website |[optional]|
**emails** | **string[]** | *emails of the target*. emails indicated on the target website |[optional]|
**social_graph_urls** | **string[]** | *social media links and handles*. social media URLs detected in the social graphs of the target website |[optional]|
**technologies** | **TechnologiesInfo** | *technologies used by target domain*. contains objects with the names of technologies used on the website;. to get a full list of technologies and their structure, refer to the [technologies endpoint](/v3/domain_analytics/technologies/technologies/) |[optional]|