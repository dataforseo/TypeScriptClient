# DataforseoLabsGoogleCompetitorsDomainLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | search engine type |[optional]|
**domain** | **string** | domain name |[optional]|
**avg_position** | **number** | average position of the domain in SERP<br>Note: average position is calculated for intersected keywords only;<br>the value for a given domain may differ when combined with different target websites |[optional]|
**sum_position** | **number** | sum of all domain positions in SERP<br>Note: average position is calculated for intersected keywords only;<br>the value for a given domain may differ when combined with different target websites |[optional]|
**intersections** | **number** | number of intersecting keywords |[optional]|
**full_domain_metrics** | **{ [key: string]: DataforseoLabsMetricsInfo; }** | metrics for all keywords of the domain<br>full overview of ranking and traffic data relevant to all keywords that the provided domain is ranking for |[optional]|
**metrics** | **{ [key: string]: DataforseoLabsMetricsInfo; }** | metrics for intersecting keywords<br>ranking and traffic data relevant to the keywords that the provided domain shares with the target domain<br>note: in this array ranking and traffic data is provided for the target considering the keywords target shares in search with the competitor’s domain |[optional]|
**competitor_metrics** | **{ [key: string]: DataforseoLabsMetricsInfo; }** | metrics for intersecting keywords<br>ranking and traffic data relevant to the keywords that the provided domain shares with the target domain<br>note: in this array ranking and traffic data is provided for the returned competitor’s domain |[optional]|