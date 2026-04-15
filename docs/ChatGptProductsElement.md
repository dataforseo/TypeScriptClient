# ChatGptProductsElement

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**product_id** | **string** | product id |[optional]|
**merchants** | **string** | merchant(s) offering the product |[optional]|
**id_to_token_map** | **string** | product identifier tokenBase64-encoded token containing Google Shopping product IDs associated with the product |[optional]|
**title** | **string** | title of the element |[optional]|
**rating** | **RatingInfo** | rating of the corresponding local businesspopularity rate based on reviews as displayed in the results |[optional]|
**price** | **number** | product price |[optional]|
**currency** | **string** | currency of the listed priceISO code of the currency applied to the price |[optional]|
**tag** | **string** | tag text |[optional]|
**url** | **string** | URL |[optional]|
**domain** | **string** | domain |[optional]|
**images** | **string[]** | image URLs of the elementcontains URLs leading to the images on the original resource or DataForSEO storage (in case the original source is not available) |[optional]|
**product_ids** | **ChatGptGoogleShoppingProduct[]** | Google Shopping product identifiersarray of Google Shopping product IDs associated with the product |[optional]|