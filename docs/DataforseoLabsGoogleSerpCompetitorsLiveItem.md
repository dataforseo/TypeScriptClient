# DataforseoLabsGoogleSerpCompetitorsLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | search engine type |[optional]|
**domain** | **string** | domain name of the detected SERP competitor |[optional]|
**avg_position** | **number** | the average position of the domain for the specified keywords. the arithmetic mean of values in the keywords_positions array |[optional]|
**median_position** | **number** | the median position of the domain for the specified keywords. the median of the values in the keywords_positions array |[optional]|
**rating** | **number** | the margin between the greatest possible and actual keyword positions. represents the relative visibility rate of the domain in SERP for the specified keywords. calculated as sum(100-keywords_positions) |[optional]|
**etv** | **number** | estimated traffic volume. represents the estimated monthly traffic that specified keywords are driving to the website. calculated as the sum of the products of the specified keywords’ search volume values and CTR (click-through-rate) rates at certain positions in SERP. learn more about how the metric is calculated in this help center article |[optional]|
**keywords_count** | **number** | the number of specified keywords the domain has positions for in SERPs |[optional]|
**visibility** | **number** | SERP visibility rate. represents the website visibility rate based on the SERP positions of the specified keywords. Keywords with positions in the range from 1 to 10 are assigned the visibility index from 1 to 0.1, respectively. Keywords with positions in the range from 11 to 20 have the fixed visibility index of 0.05. keywords with positions from 20 to 100 have the visibility index equal to 0 |[optional]|
**relevant_serp_items** | **number** | the number of SERP elements relevant to the domain. represents the number of search results in SERP relevant to the domain for the specified keywords |[optional]|
**keywords_positions** | **{ [key: string]: number[]; }** | keyword positions. SERP positions the related domain holds in SERP for the specified keywords |[optional]|