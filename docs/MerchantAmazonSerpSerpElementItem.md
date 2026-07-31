# MerchantAmazonSerpSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**domain** | **string** | *Amazon domain* |[optional]|
**title** | **string** | *product title* |[optional]|
**url** | **string** | *the URL of the product page* |[optional]|
**image_url** | **string** | *URL of the product image featured in the results* |[optional]|
**bought_past_month** | **number** | *number of product purchases in the past month* |[optional]|
**price_from** | **number** | *the regular price of a product*. example:. `49.98` |[optional]|
**price_to** | **number** | *the upper limit of the product price range*. example:. `384.99` |[optional]|
**currency** | **string** | *currency in the [ISO](https://en.wikipedia.org/wiki/ISO_4217) format*. example:. `USD` |[optional]|
**special_offers** | **string[]** | *special offer details*. contains special offer details, including coupon and Subscribe & Save discounts |[optional]|
**data_asin** | **string** | *unique product identifier on Amazon*. note that there is no full list of possible values as the `data_asin` is a dynamic value assigned by Amazon. example:. `B07G82D89J` |[optional]|
**rating** | **RatingElement** | *product rating info* |[optional]|
**is_amazon_choice** | **boolean** | *'Amazon's choice' label*. if the value is `true`, the product is marked with the 'Amazon's choice' label |[optional]|
**is_best_seller** | **boolean** | *'Best Seller' label*. if the value is `true`, the product is marked with the 'Best Seller' label |[optional]|
**delivery_info** | **AmazonDeliveryInfo** | *delivery information*. delivery information including free and fast delivery date ranges |[optional]|
**labels** | **AmazonLabelElement[]** | *product labels*. array containing an object with main Amazon labels’ information. if the product contains no labels, the value will be `null` |[optional]|