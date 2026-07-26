# GoogleShoppingCarouselElement

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**xpath** | **string** | *[XPath](https://en.wikipedia.org/wiki/XPath) of the element* |[optional]|
**title** | **string** | *product title* |[optional]|
**tags** | **string[]** | *tags assigned to the product* |[optional]|
**seller** | **string** | *name of the seller*. the name of the company that placed a corresponding product on Google Shopping |[optional]|
**price** | **number** | *product price*. example:. `384.99` |[optional]|
**currency** | **string** | *currency in the [ISO](https://en.wikipedia.org/wiki/ISO_4217) format*. example:. `USD` |[optional]|
**product_rating** | **RatingElement** | *product rating*. the product popularity rate based on product reviews |[optional]|
**product_images** | **string[]** | *URLs to the images of the product*. the first URL in the array is the featured image of the product |[optional]|
**shopping_url** | **string** | *URL to the product page on Google Shopping* |[optional]|
**product_id** | **string** | *unique product identifier on Google Shopping*. note that there is no full list of possible values as the `product_id` is a dynamic value assigned by Google. if there are no values, you will get `null`. example:. `4485466949985702538`. learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/product-id-google-shopping) |[optional]|
**data_docid** | **string** | *unique identifier of the SERP data element*. note that there is no full list of possible values as the `data_docid` is a dynamic value assigned by Google. example:. `17363035694596624076` |[optional]|
**gid** | **string** | *global product identifier on Google Shopping*. note that there is no full list of possible values as the `gid` is a dynamic value assigned by Google. if there are no values, you will get `null`. example:. `4702526954592161872`. learn more about `gid` parameter in [this help center guide](https://dataforseo.com/help-center/whats-a-gid-in-google-shopping-api) |[optional]|
**delivery_info** | **DeliveryInfo** | *delivery information*. delivery information including free and fast delivery date ranges |[optional]|
**special_offer_info** | **SpecialOfferInfo** | *special offer from the seller*. information on the special offer from the seller, including discount and coupon info |[optional]|