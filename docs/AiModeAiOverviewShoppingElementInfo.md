# AiModeAiOverviewShoppingElementInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**product_id** | **string** | *unique product identifier on Google Shopping*. learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/product-id-google-shopping) |[optional]|
**data_docid** | **string** | *unique identifier of the SERP data element* |[optional]|
**gid** | **string** | *global product identifier on Google Shopping*. learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/whats-a-gid-in-google-shopping-api) |[optional]|
**title** | **string** | *reference page title* |[optional]|
**url** | **string** | *URL in link* |[optional]|
**domain** | **string** | *domain in link* |[optional]|
**rating** | **RatingInfo** | *product rating*. the popularity rate based on reviews.  if there is none, the value will be `null` |[optional]|
**price** | **AiModePriceInfo** | *product price*. product price details on the seller's website;.  if there is none, the value will be `null` |[optional]|
**seller** | **string** | *product seller*. name of the product's seller as displayed in search results |[optional]|
**snippet** | **string** | *additional information about the result* |[optional]|
**marketplace** | **string** | *merchant account provider*. e-commerce site that hosts products or websites of individual sellers under the same merchant account. example:. `by Google` |[optional]|
**marketplace_url** | **string** | *URL to the merchant account provider*. e-commerce site that hosts products or websites of individual sellers under the same merchant account |[optional]|
**image_url** | **string** | *URL of the image*. the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) |[optional]|