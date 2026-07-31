# DataLabsLocalPackSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**title** | **string** | title of the result in SERP |[optional]|
**description** | **string** | description of the results element in SERP |[optional]|
**domain** | **string** | domain in SERP |[optional]|
**phone** | **string** | phone number |[optional]|
**url** | **string** | relevant URL in SERP |[optional]|
**is_paid** | **boolean** | indicates whether the element is an ad |[optional]|
**rating** | **RatingInfo** | the item’s rating . the popularity rate based on reviews and displayed in SERP |[optional]|
**main_domain** | **string** | primary domain name in SERP |[optional]|
**relative_url** | **string** | URL in SERP that does not specify the HTTPs protocol and domain name |[optional]|
**etv** | **number** | estimated traffic volume. estimated organic monthly traffic a featured URL delivers to the domain. calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword. learn more about how the metric is calculated in this help center article |[optional]|
**estimated_paid_traffic_cost** | **number** | estimated cost of converting organic search traffic into paid. represents the estimated monthly cost of running ads for the returned keyword. the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search. learn more about how the metric is calculated in this help center article |[optional]|
**clickstream_etv** | **number** |  |[optional]|
**rank_changes** | **RankChanges** | changes in rankings. ranking changes of the SERP element compared to the preceding month;. Note: the changes are calculated even if the preceding month is not included in a POST request |[optional]|
**backlinks_info** | **BacklinksInfo** | backlinks information for the ranked website |[optional]|
**rank_info** | **RankInfo** | page and domain rank information |[optional]|