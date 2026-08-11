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
**website_name** | **string** | *name of the website in SERP* |[optional]|
**is_image** | **boolean** | *indicates whether the element contains an_`image`*. **Note:** this check no longer appears in SERPn |[optional]|
**is_video** | **boolean** | *indicates whether the element contains a `video`*. **Note:** this check no longer appears in SERP |[optional]|
**checks** | **string[]** | *array of properties detected for the SERP element*. lists the properties that are true for this element. each value in the array represents a detected property . example:. if `is_image` is present in the array, the element contains an image. possible values in the array:. `is_image`, `is_video`, `is_featured_snippet`, `amp_version`, `is_malicious`, `is_web_story`, `is_highly_cited`. equals `null` if none of the properties are detected for the element. learn more about the `checks` array in [this Help Center article](https://dataforseo.com/help-center/whats-a-checks-array-in-the-google-organic-serp-api) |[optional]|
**images** | **AiModeImagesElementInfo[]** | *images of the element*. if there are none, equals `null` |[optional]|
**highlighted** | **string[]** | *words highlighted in bold within the results `description`* |[optional]|
**extra** | **{ [key: string]: string; }** | *additional information about the result* |[optional]|
**description_rows** | **string[]** | *extended description*. if there is none, equals `null` |[optional]|
**links** | **AdLinkElement[]** | *link of the element* |[optional]|
**price** | **PriceInfo** | *pricing details*. contains the pricing details of the product or service featured in the result;. if there is none, equals `null` |[optional]|
**rating** | **RatingInfo** | *the item's rating*. the popularity rate based on reviews and displayed in SERP. if there is none, equals `null` |[optional]|