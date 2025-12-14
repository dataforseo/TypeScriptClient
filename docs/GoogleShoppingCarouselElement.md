# GoogleShoppingCarouselElement

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**xpath** | **string** | XPath of the element |[optional]|
**title** | **string** | product title |[optional]|
**tags** | **string[]** | tags assigned to the product |[optional]|
**seller** | **string** | name of the seller<br>the name of the company that placed a corresponding product on Google Shopping |[optional]|
**price** | **number** | product price<br>example:<br>384.99 |[optional]|
**currency** | **string** | currency in the ISO format<br>example:<br>USD |[optional]|
**product_rating** | **RatingElement** | product rating<br>the product popularity rate based on product reviews |[optional]|
**product_images** | **string[]** | URLs to the images of the product<br>the first URL in the array is the featured image of the product |[optional]|
**shopping_url** | **string** | URL to the product page on Google Shopping |[optional]|
**product_id** | **string** | unique product identifier on Google Shopping<br>note that there is no full list of possible values as the product_id is a dynamic value assigned by Google<br>if there are no values, you will get null<br>example:<br>4485466949985702538<br>learn more about the parameter in this help center guide |[optional]|
**data_docid** | **string** | unique identifier of the SERP data element<br>note that there is no full list of possible values as the data_docid is a dynamic value assigned by Google<br>example:<br>17363035694596624076 |[optional]|
**gid** | **string** | global product identifier on Google Shopping<br>note that there is no full list of possible values as the gid is a dynamic value assigned by Google<br>if there are no values, you will get null<br>example:<br>4702526954592161872<br>learn more about gid parameter in this help center guide |[optional]|
**delivery_info** | **DeliveryInfo** | delivery information<br>delivery information including free and fast delivery date ranges |[optional]|
**special_offer_info** | **SpecialOfferInfo** | special offer from the seller<br>information on the special offer from the seller, including discount and coupon info |[optional]|