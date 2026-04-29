# FeaturedSnippetSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | group rank in SERP<br>position within a group of elements with identical type values<br>positions of elements with different type values are omitted from rank_group |[optional]|
**rank_absolute** | **number** | absolute rank in SERP<br>absolute position among all the elements found in SERPnote values are returned in the ascending order, with values corresponding to advanced SERP features omitted from the results;<br>to get all items (including SERP features and rich snippets) with their positions, please refer to the Google Organiс Advanced SERP endpoint |[optional]|
**domain** | **string** | domain of the ad element in SERP |[optional]|
**title** | **string** | title of the ad element in SERP |[optional]|
**description** | **string** | description of the ad element in SERP |[optional]|
**url** | **string** | relevant URL of the ad element in SERP |[optional]|
**breadcrumb** | **string** | breadcrumb of the ad element in SERP |[optional]|
**featured_title** | **string** | title |[optional]|
**timestamp** | **string** | date and time when the result was published<br>in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”<br>example:<br>2019-11-15 12:57:46 +00:00 |[optional]|
**images** | **AiModeImagesElementInfo[]** | images of the element<br>if there are none, equals null |[optional]|
**table** | **Table** | table present in the element<br>the header and content of the table present in the element |[optional]|