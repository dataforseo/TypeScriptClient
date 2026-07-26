# DataLabsPaidSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**title** | **string** | title of the result in SERP |[optional]|
**domain** | **string** | subdomain in SERP |[optional]|
**description** | **string** | description of the results element in SERP |[optional]|
**breadcrumb** | **string** | breadcrumb in SERP |[optional]|
**url** | **string** | relevant URL in SERP |[optional]|
**highlighted** | **string[]** | words highlighted in bold within the results description |[optional]|
**extra** | **{ [key: string]: string; }** |  |[optional]|
**description_rows** | **string[]** | extended description. if there is none, equals null |[optional]|
**links** | **AdLinkElement[]** | sitelinks. the links shown below some of Google’s search results. if there are none, equals null |[optional]|
**main_domain** | **string** | primary domain name in SERP |[optional]|
**relative_url** | **string** | URL in SERP that does not specify the HTTPs protocol and domain name |[optional]|
**etv** | **number** | estimated traffic volume. estimated organic monthly traffic to the domain or webpage;. calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain or webpage rank for;. learn more about how the metric is calculated in this help center article |[optional]|
**estimated_paid_traffic_cost** | **number** | estimated cost of converting organic search traffic into paid. represents the estimated monthly cost of running ads for all keywords that a domain or webpage ranks for;. the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search;. learn more about how the metric is calculated in this help center article |[optional]|
**clickstream_etv** | **number** | estimated traffic volume based on clickstream data. calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain or webpage ranks for;. to retrieve results for this field, the parameter include_clickstream_data must be set to true;. learn more about how the metric is calculated in this help center article |[optional]|
**rank_changes** | **RankChanges** | changes in rankings. contains information about the ranking changes of the SERP element since the previous_updated_time |[optional]|
**backlinks_info** | **BacklinksInfo** | backlinks information for the relevant page URL |[optional]|
**rank_info** | **RankInfo** | page and domain rank information |[optional]|