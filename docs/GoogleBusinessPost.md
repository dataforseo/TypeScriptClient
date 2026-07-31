# GoogleBusinessPost

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**rank_group** | **number** | *position within a group of elements with identical `type` values*. positions of elements with different `type` values are omitted from `rank_group` |[optional]|
**rank_absolute** | **number** | *absolute rank among all the listed updates*. absolute position among all present elements |[optional]|
**position** | **string** | *the alignment of the element in SERP*. can take the following values: `right` |[optional]|
**xpath** | **string** | *the [XPath](https://en.wikipedia.org/wiki/XPath) of the element* |[optional]|
**author** | **string** | *author of the post* |[optional]|
**snippet** | **string** | *additional content of a post* |[optional]|
**post_text** | **string** | *main content of a post* |[optional]|
**url** | **string** | *url of a post* |[optional]|
**images_url** | **string** | *url of an image included in the post* |[optional]|
**post_date** | **string** | *date when a post was published*. in the following format:. `'mm/dd/yyyy hh:mm:ss'` |[optional]|
**timestamp** | **string** | *time when a post was published*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2019-11-15 12:57:46 +00:00 |[optional]|
**links** | **LinkElement[]** | *links included in the post* |[optional]|