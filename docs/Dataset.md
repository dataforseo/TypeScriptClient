# Dataset

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**rank_group** | **number** | group rank in SERP. position within a group of elements with identical type values. positions of elements with different type values are omitted from rank_group |[optional]|
**rank_absolute** | **number** | absolute rank in SERP. absolute position among all the elements in SERP |[optional]|
**position** | **string** | the alignment of the element in SERP. can take the following values:. left, right |[optional]|
**xpath** | **string** | the XPath of the element |[optional]|
**dataset_id** | **string** | ID of the dataset |[optional]|
**title** | **string** | title of the element |[optional]|
**image_url** | **string** | URL of the image. the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) |[optional]|
**scholarly_citations_count** | **number** | count of articles that refer to the dataset |[optional]|
**scholarly_articles_url** | **string** | url of scholarly articles. link to the list of scholarly articles on Google Scholar. example: https://scholar.google.com/scholar?q=%2210.6084%20m9%20figshare%207427933%20v1%22 |[optional]|
**unique_identifier** | **string** | digital identifier of an object. unique digital identifier of the dataset. example: https://doi.org/10.5061/dryad.hmgqnk9m3 |[optional]|
**related_article** | **string** | link to related article. link to the published article that is related to the dataset |[optional]|
**links** | **LinkElement[]** | sitelinks. the links shown below some of Google Dataset’s search results. if there are none, equals null |[optional]|
**dataset_providers** | **AmazonLabelElement[]** | the list of institutions that provided the dataset |[optional]|
**formats** | **FormatsElement[]** | the list of file formats of the dataset |[optional]|
**authors** | **AuthorsElement[]** | the list of authors of the dataset |[optional]|
**licenses** | **AmazonLabelElement[]** | the list of licenses issued to the dataset |[optional]|
**updated_date** | **string** | date and time when the result was last updated. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2022-11-27 02:00:00 +00:00 |[optional]|
**area_covered** | **string[]** | the list of areas covered in the dataset. for example: Africa, Global |[optional]|
**period_covered** | **PeriodCovered** | period covered in the dataset |[optional]|
**dataset_description** | **DatasetDescription** | description of the dataset |[optional]|