# PaidSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | *group rank in SERP*. position within a group of elements with identical `type` values. positions of elements with different `type` values are omitted from `rank_group` |[optional]|
**rank_absolute** | **number** | *absolute rank in SERP*. absolute position among all the elements found in SERP**note** values are returned in the ascending order, with values corresponding to advanced SERP features omitted from the results;. to get all items (including SERP features and rich snippets) with their positions, please refer to the [Google Organiс Advanced SERP](https://docs.dataforseo.com/v3/serp/google/organic/live/advanced/?php) endpoint |[optional]|
**domain** | **string** | *domain in SERP* |[optional]|
**title** | **string** | *title of the results element in SERP* |[optional]|
**description** | **string** | *description of the results element in SERP* |[optional]|
**url** | **string** | *relevant URL in SERP* |[optional]|
**breadcrumb** | **string** | *breadcrumb in SERP* |[optional]|
**website_name** | **string** | name of the website in SERP |[optional]|
**is_image** | **boolean** | indicates whether the element contains an image |[optional]|
**is_video** | **boolean** | indicates whether the element contains a video |[optional]|
**images** | **AiModeImagesElementInfo[]** | images of the element. if there are none, equals null |[optional]|
**highlighted** | **string[]** | words highlighted in bold within the results description |[optional]|
**extra** | **{ [key: string]: string; }** | additional information about the result |[optional]|
**description_rows** | **string[]** | extended description. if there is none, equals null |[optional]|
**links** | **AdLinkElement[]** | link of the element |[optional]|
**price** | **PriceInfo** | pricing details. contains the pricing details of the product or service featured in the result;. if there is none, equals null |[optional]|
**rating** | **RatingInfo** | the item’s rating . the popularity rate based on reviews and displayed in SERP. if there is none, equals null |[optional]|