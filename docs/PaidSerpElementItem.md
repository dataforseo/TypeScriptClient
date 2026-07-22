# PaidSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | group rank in SERPposition within a group of elements with identical type valuespositions of elements with different type values are omitted from rank_group |[optional]|
**rank_absolute** | **number** | absolute rank in SERPabsolute position among all the elements found in SERPnote values are returned in the ascending order, with values corresponding to advanced SERP features omitted from the results;to get all items (including SERP features and rich snippets) with their positions, please refer to the Google Organiс Advanced SERP endpoint |[optional]|
**domain** | **string** | domain in SERP |[optional]|
**title** | **string** | title of the results element in SERP |[optional]|
**description** | **string** | description of the results element in SERP |[optional]|
**url** | **string** | relevant URL in SERP |[optional]|
**breadcrumb** | **string** | breadcrumb in SERP |[optional]|
**website_name** | **string** | name of the website in SERP |[optional]|
**is_image** | **boolean** | indicates whether the element contains an image |[optional]|
**is_video** | **boolean** | indicates whether the element contains a video |[optional]|
**images** | **AiModeImagesElementInfo[]** | images of the element<br>if there are none, equals null |[optional]|
**highlighted** | **string[]** | words highlighted in bold within the results description |[optional]|
**extra** | **{ [key: string]: string; }** | additional information about the result |[optional]|
**description_rows** | **string[]** | extended description<br>if there is none, equals null |[optional]|
**links** | **AdLinkElement[]** | link of the element |[optional]|
**price** | **PriceInfo** | pricing details<br>contains the pricing details of the product or service featured in the result;<br>if there is none, equals null |[optional]|
**rating** | **RatingInfo** | the item’s rating <br>the popularity rate based on reviews and displayed in SERP<br>if there is none, equals null |[optional]|