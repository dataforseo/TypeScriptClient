# AmazonInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | search engine type |[optional]|
**type** | **string** | type of element |[optional]|
**rank_group** | **number** | position within a group of elements with identical type values. positions of elements with different type values are omitted from rank_group |[optional]|
**rank_absolute** | **number** | absolute rank in Amazon SERP. absolute position among all the elements in SERP |[optional]|
**position** | **string** | the alignment of the element in Amazon SERP. can take the following values:. left, right |[optional]|
**xpath** | **string** | the XPath of the element |[optional]|
**domain** | **string** | Amazon domain |[optional]|
**title** | **string** | product title |[optional]|
**url** | **string** | URL of the product page |[optional]|
**asin** | **string** | ASIN in a POST array |[optional]|
**image_url** | **string** | URL of the product image featured in the results |[optional]|
**price_from** | **number** | the regular price of a product. example:. 49.98 |[optional]|
**price_to** | **number** | the upper limit of the product price range. example:. 384.99 |[optional]|
**currency** | **string** | currency in the ISO format. example:. USD |[optional]|
**special_offers** | **string[]** | special offer details. contains special offer details, including coupon and Subscribe & Save discounts |[optional]|
**is_best_seller** | **boolean** | “Best Seller” label. if the value is true, the product is marked with the “Best Seller” label |[optional]|
**is_amazon_choice** | **boolean** | “Amazon’s choice” label. if the value is true, the product is marked with the “Amazon’s choice” label |[optional]|
**rating** | **RatingInfo** | the item’s rating . the popularity rate based on reviews and displayed in SERP |[optional]|
**delivery_info** | **AmazonDeliveryInfo** | delivery information. delivery information including free and fast delivery date ranges |[optional]|
**bought_past_month** | **number** |  |[optional]|