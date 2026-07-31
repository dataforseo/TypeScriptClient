# ContentAnalysisSearchLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**url** | **string** | *URL where the citation was found* |[optional]|
**domain** | **string** | *domain name* |[optional]|
**main_domain** | **string** | *main domain* |[optional]|
**url_rank** | **number** | *rank of the `url`*. this value is based on backlink data for the given URL from DataForSEO Backlink Index;. `url_rank` is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm. learn more about the metric and how it is calculated in [this help center article](https://dataforseo.com/help-center/what_is_rank_in_backlinks_api) |[optional]|
**spam_score** | **number** | *backlink spam score of the `url`*. this value is based on backlink data for the given URL from DataForSEO Backlink Index;. learn more about how the metric is calculated on [this help center page](https://dataforseo.com/help-center/what-is-spam-score-and-how-is-it-calculated) |[optional]|
**domain_rank** | **number** | *rank of the `domain`*. this value is based on backlink data for the given domain from DataForSEO Backlink Index;. `domain_rank` is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm. learn more about the metric and how it is calculated in [this help center article](https://dataforseo.com/help-center/what_is_rank_in_backlinks_api) |[optional]|
**fetch_time** | **string** | *date and time when our crawler visited the page*. in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00'. example:. `2017-01-24 13:20:59 +00:00` |[optional]|
**country** | **string** | *country code of the domain registration*. to obtain a full list of available countries, refer to the [Locations](/v3/content_analysis/locations/) endpoint |[optional]|
**language** | **string** | *main language of the domain*. to obtain a full list of available languages, refer to the [Languages](/v3/content_analysis/languages/) endpoint |[optional]|
**score** | **number** | *citation prominence score*. this value is based on `url_rank`, `domain_rank`, `keyword` presence in `title`, `main_title`, `url`, `snippet`. the higher the `score`, the more value the related citation has |[optional]|
**page_category** | **number[]** | *contains all relevant page categories*. product and service categories relevant for the page. to obtain a full list of available categories, refer to the [Categories](/v3/content_analysis/categories/) endpoint |[optional]|
**page_types** | **string[]** | *page types* |[optional]|
**ratings** | **ContentRatingInfo[]** | *ratings found on the page*. all ratings found on the page based on microdata |[optional]|
**social_metrics** | **SocialMetricsInfo[]** | *social media engagement metrics*. data on social media interactions associated with the content based on website embeds developed and supported by social media platforms |[optional]|
**content_info** | **AnalysisContentInfo** | *contains data on citations from the given `url`* |[optional]|