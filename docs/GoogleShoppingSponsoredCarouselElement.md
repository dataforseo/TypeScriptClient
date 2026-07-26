# GoogleShoppingSponsoredCarouselElement

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**xpath** | **string** | *[XPath](https://en.wikipedia.org/wiki/XPath) of the element* |[optional]|
**title** | **string** | *title of the element* |[optional]|
**tags** | **string[]** | *tags assigned to the product* |[optional]|
**seller** | **string** | *name of the seller*. the name of the company that placed a corresponding product on Google Shopping |[optional]|
**price** | **number** | *product price*. example:. `384.99` |[optional]|
**currency** | **string** | *currency in the [ISO](https://en.wikipedia.org/wiki/ISO_4217) format*. example:. `USD` |[optional]|
**product_rating** | **RatingElement** | *product rating*. the product popularity rate based on product reviews |[optional]|
**product_images** | **string[]** | *URLs to the images of the product*. the first URL in the array is the featured image of the product |[optional]|
**shop_ad_aclk** | **string** | *unique ad click referral parameter*. using this parameter you can get a URL of the advertisement in [Google Shopping Sellers Ad URL](/v3/merchant/google/sellers/ad_url/) |[optional]|
**delivery_info** | **DeliveryInfo** | *delivery information*. delivery information including free and fast delivery date ranges |[optional]|
**special_offer_info** | **SpecialOfferInfo** | *special offer from the seller*. information on the special offer from the seller, including discount and coupon info |[optional]|