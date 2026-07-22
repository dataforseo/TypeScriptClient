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
**description_rows** | **string[]** | extended description<br>if there is none, equals null |[optional]|
**links** | **AdLinkElement[]** | sitelinks<br>the links shown below some of Google’s search results<br>if there are none, equals null |[optional]|
**main_domain** | **string** | primary domain name in SERP |[optional]|
**relative_url** | **string** | URL in SERP that does not specify the HTTPs protocol and domain name |[optional]|
**etv** | **number** | estimated traffic volume<br>estimated organic monthly traffic to the domain or webpage;<br>calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain or webpage rank for;<br>learn more about how the metric is calculated in this help center article |[optional]|
**estimated_paid_traffic_cost** | **number** | estimated cost of converting organic search traffic into paid<br>represents the estimated monthly cost of running ads for all keywords that a domain or webpage ranks for;<br>the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search;<br>learn more about how the metric is calculated in this help center article |[optional]|
**clickstream_etv** | **number** | estimated traffic volume based on clickstream data<br>calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain or webpage ranks for;<br>to retrieve results for this field, the parameter include_clickstream_data must be set to true;<br>learn more about how the metric is calculated in this help center article |[optional]|
**rank_changes** | **RankChanges** | changes in rankings<br>contains information about the ranking changes of the SERP element since the previous_updated_time |[optional]|
**backlinks_info** | **BacklinksInfo** | backlinks information for the relevant page URL |[optional]|
**rank_info** | **RankInfo** | page and domain rank information |[optional]|