# DataLabsOrganicSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**domain** | **string** | *subdomain in SERP* |[optional]|
**title** | **string** | *title of the result in SERP* |[optional]|
**url** | **string** | *relevant URL in SERP* |[optional]|
**breadcrumb** | **string** | *breadcrumb in SERP* |[optional]|
**website_name** | **string** |  |[optional]|
**is_image** | **boolean** | *indicates whether the element contains an `image`* |[optional]|
**is_video** | **boolean** | *indicates whether the element contains a `video`* |[optional]|
**is_featured_snippet** | **boolean** | *indicates whether the element is a `featured_snippet`* |[optional]|
**is_malicious** | **boolean** | *indicates whether the element is marked as malicious* |[optional]|
**description** | **string** | *description of the results element in SERP* |[optional]|
**pre_snippet** | **string** | *includes additional information appended before the result description in SERP* |[optional]|
**extended_snippet** | **string** | *includes additional information appended after the result description in SERP* |[optional]|
**amp_version** | **boolean** | *Accelerated Mobile Pages*.             indicates whether an item has the Accelerated Mobile Page (AMP) version |[optional]|
**rating** | **RatingInfo** | *the item's rating*.             the popularity rate based on reviews and displayed in SERP |[optional]|
**highlighted** | **string[]** | *words highlighted in bold within the results `description`* |[optional]|
**links** | **LinkElement[]** | *sitelinks*.             the links shown below some of Google's search results.             if there are none, equals `null` |[optional]|
**about_this_result** | **AboutThisResultElement** | *contains information from the 'About this result' panel*.             ['About this result' panel](https://blog.google/products/search/learn-more-and-get-more-from-search/) provides additional context about why Google returned this result for the given query;.             this feature appears after clicking on the three dots next to most results |[optional]|
**main_domain** | **string** | *primary domain name in SERP* |[optional]|
**relative_url** | **string** | *URL in SERP that does not specify the HTTPs protocol and domain name* |[optional]|
**etv** | **number** | *estimated traffic volume*.             estimated organic monthly traffic to the domain.             calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword.             learn more about how the metric is calculated in [this help center article](https://dataforseo.com/help-center/how-is-etv-calculated) |[optional]|
**estimated_paid_traffic_cost** | **number** | *estimated cost of converting organic search traffic into paid*.             represents the estimated monthly cost of running ads (USD) for the returned keyword.             the metric is calculated as the product of organic `etv` and paid `cpc` values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search.             learn more about how the metric is calculated in [this help center article](https://dataforseo.com/help-center/how-is-traffic-cost-calculated) |[optional]|
**clickstream_etv** | **number** | *estimated traffic volume based on clickstream data*.             calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for.             to retrieve results for this field, the parameter `include_clickstream_data` must be set to `true`.             learn more about how the metric is calculated in this [help center article](https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated) |[optional]|
**rank_changes** | **RankChanges** | *changes in rankings*.             contains information about the ranking changes of the SERP element since the `previous_updated_time` |[optional]|
**backlinks_info** | **BacklinksInfo** | *backlinks information for the ranked website* |[optional]|
**rank_info** | **RankInfo** | *page and domain rank information* |[optional]|