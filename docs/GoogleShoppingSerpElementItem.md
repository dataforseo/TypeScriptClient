# GoogleShoppingSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**domain** | **string** | *domain of the URL*. domain of the URL where a special offer is posted. **Note:** this field is deprecated and will return `null` |[optional]|
**title** | **string** | *title of the element* |[optional]|
**description** | **string** | *description of the product in Google Shopping SERP* |[optional]|
**url** | **string** | *URL pointing at special offer page*. URL where a special offer is posted. **Note:** this field is deprecated and will return `null` |[optional]|
**shopping_url** | **string** | *URL to the product page on Google Shopping* |[optional]|
**tags** | **string[]** | *tags assigned to the product* |[optional]|
**price** | **number** | *product price*. example:. `384.99` |[optional]|
**price_multiplier** | **number** | *price multiplier for instalment plan*. indicates the number of months covered by the monthly payment for the product |[optional]|
**old_price** | **number** | *product old price*. displayed if the product price has been changed. example:. `499` |[optional]|
**currency** | **string** | *currency in the [ISO](https://en.wikipedia.org/wiki/ISO_4217) format*. example:. `USD` |[optional]|
**product_id** | **string** | *unique product identifier on Google Shopping*. note that there is no full list of possible values as the `product_id` is a dynamic value assigned by Google. if there are no values, you will get `null`. example:. `4485466949985702538`. learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/product-id-google-shopping) |[optional]|
**data_docid** | **string** | *unique identifier of the SERP data element*. note that there is no full list of possible values as the `data_docid` is a dynamic value assigned by Google. example:. `17363035694596624076` |[optional]|
**seller** | **string** | *name of the seller*. the name of the company that placed a corresponding product on Google Shopping |[optional]|
**additional_specifications** | **{ [key: string]: string; }** | *object containing additional url parameters*. you can get more details about the product by using this object in the POST request to the [Google Shopping Product Specification](/v3/merchant/google/products/task_post/?php) and [Google Shopping Sellers](/v3/merchant/google/sellers/task_post/?php) endpoint |[optional]|
**reviews_count** | **number** | *number of product reviews*. indicates the number of reviews left by users on Google Shopping. if there are no values, you will get `null` |[optional]|
**is_best_match** | **boolean** | *'best match' label*. if the value is `true`, the product is marked with the 'best match' label. if there are no values, you will get `null` |[optional]|
**product_rating** | **RatingElement** | *product rating*. the product popularity rate based on product reviews |[optional]|
**shop_rating** | **RatingElement** | *shop rating*. the popularity rate of the seller based on user reviews |[optional]|
**product_images** | **string[]** | *URLs to the images of the product*. the first URL in the array is the featured image of the product |[optional]|
**shop_ad_aclk** | **string** | *unique ad click referral parameter*. using this parameter you can get a URL of the advertisement in [Google Shopping Sellers Ad URL](/v3/merchant/google/sellers/ad_url/) |[optional]|
**gid** | **string** | *global product identifier on Google Shopping*. note that there is no full list of possible values as the `gid` is a dynamic value assigned by Google. if there are no values, you will get `null`. example:. `4702526954592161872`. learn more about `gid` parameter in [this help center guide](https://dataforseo.com/help-center/whats-a-gid-in-google-shopping-api) |[optional]|
**delivery_info** | **DeliveryInfo** | *delivery information*. delivery information including free and fast delivery date ranges |[optional]|
**stores_count_info** | **StoresCountInfo** | *stores count information*. contains information about the number of stores that offer the same product |[optional]|