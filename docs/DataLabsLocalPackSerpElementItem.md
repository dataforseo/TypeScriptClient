# DataLabsLocalPackSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**title** | **string** | *title of the result in SERP* |[optional]|
**description** | **string** | *description of the results element in SERP* |[optional]|
**domain** | **string** | *subdomain in SERP* |[optional]|
**phone** | **string** | *phone number* |[optional]|
**url** | **string** | *relevant URL in SERP* |[optional]|
**is_paid** | **boolean** | *indicates whether the element is an ad* |[optional]|
**rating** | **RatingInfo** | *the item's rating*.             the popularity rate based on reviews and displayed in SERP |[optional]|
**main_domain** | **string** | *primary domain name in SERP* |[optional]|
**relative_url** | **string** | *URL in SERP that does not specify the HTTPs protocol and domain name* |[optional]|
**etv** | **number** | *estimated traffic volume*.             estimated organic monthly traffic to the domain.             calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword.             learn more about how the metric is calculated in [this help center article](https://dataforseo.com/help-center/how-is-etv-calculated) |[optional]|
**estimated_paid_traffic_cost** | **number** | *estimated cost of converting organic search traffic into paid*.             represents the estimated monthly cost of running ads (USD) for the returned keyword.             the metric is calculated as the product of organic `etv` and paid `cpc` values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search.             learn more about how the metric is calculated in [this help center article](https://dataforseo.com/help-center/how-is-traffic-cost-calculated) |[optional]|
**clickstream_etv** | **number** | *estimated traffic volume based on clickstream data*.             calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for.             to retrieve results for this field, the parameter `include_clickstream_data` must be set to `true`.             learn more about how the metric is calculated in this [help center article](https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated) |[optional]|
**rank_changes** | **RankChanges** | *changes in rankings*.             contains information about the ranking changes of the SERP element since the `previous_updated_time` |[optional]|
**backlinks_info** | **BacklinksInfo** | *backlinks information for the ranked website* |[optional]|
**rank_info** | **RankInfo** | *page and domain rank information* |[optional]|