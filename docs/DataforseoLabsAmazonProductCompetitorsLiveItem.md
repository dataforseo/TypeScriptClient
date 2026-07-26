# DataforseoLabsAmazonProductCompetitorsLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | search engine type |[optional]|
**asin** | **string** | ASIN in a POST array |[optional]|
**avg_position** | **number** | average position of the product in Amazon SERP. Note: average position is calculated for intersected keywords only;. the value for a given product may differ when combined with different target products |[optional]|
**sum_position** | **number** | sum of all product positions in Amazon SERP. Note: average position is calculated for intersected keywords only;. the value for a given product may differ when combined with different target products |[optional]|
**intersections** | **number** | number of intersecting keywords |[optional]|
**competitor_metrics** | **AmazonMetricsBundleInfo** | metrics for intersecting keywords. ranking data relevant to the keywords that the provided asin shares with the target asin;. Note: in this object ranking data is provided for the returned competitor’s asin |[optional]|
**full_metrics** | **AmazonMetricsBundleInfo** | metrics for all keywords of the product. full overview of ranking data relevant to all keywords that the provided asin is ranking for |[optional]|