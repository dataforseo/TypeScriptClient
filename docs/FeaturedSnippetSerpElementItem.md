# FeaturedSnippetSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | *group rank in SERP*. position within a group of elements with identical `type` values. positions of elements with different `type` values are omitted from `rank_group` |[optional]|
**rank_absolute** | **number** | *absolute rank in SERP*. absolute position among all the elements found in SERP**note** values are returned in the ascending order, with values corresponding to advanced SERP features omitted from the results;. to get all items (including SERP features and rich snippets) with their positions, please refer to the [Google Organiс Advanced SERP](https://docs.dataforseo.com/v3/serp/google/organic/live/advanced/?php) endpoint |[optional]|
**domain** | **string** | *domain of the ad element in SERP* |[optional]|
**title** | **string** | *title of the ad element in SERP* |[optional]|
**description** | **string** | *description of the ad element in SERP* |[optional]|
**url** | **string** | *relevant URL of the ad element in SERP* |[optional]|
**breadcrumb** | **string** | *breadcrumb of the ad element in SERP* |[optional]|
**featured_title** | **string** | *title* |[optional]|
**timestamp** | **string** | *date and time when the result was published*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**images** | **AiModeImagesElementInfo[]** | *images of the element*. if there are none, equals `null` |[optional]|
**table** | **Table** | *table present in the element*. the header and content of the table present in the element |[optional]|