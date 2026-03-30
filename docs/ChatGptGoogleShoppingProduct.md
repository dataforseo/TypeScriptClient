# ChatGptGoogleShoppingProduct

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**ei** | **string** | event identifier<br>internal event identifier used by Google |[optional]|
**product_id** | **string** | product identifier<br>can be used as a data_docid in Google Shopping API endpoints |[optional]|
**catalog_id** | **string** | Google Shopping catalog identifier of the product<br>can be used as a product_id in Google Shopping API endpoints |[optional]|
**gpcid** | **string** | Google product cluster identifier<br>can be used as a gid in Google Shopping API endpoints |[optional]|
**headline_offer_docid** | **string** | document identifier of the main offer in the headline<br>can be used as a data_docid in Google Shopping API endpoints |[optional]|
**image_docid** | **string** | identifier for the displayed product’s image |[optional]|
**rds** | **string** | resource descriptor string <br>internal Google resource descriptor string that identifies the product within Google’s Shopping index |[optional]|
**query** | **string** | search query<br>search query used by ChatGPT to retrieve the product from Google Shopping |[optional]|
**mid** | **string** | merchant identifier<br>identifier of the seller or merchant account in Google Shopping |[optional]|
**pvt** | **string** | product view type<br>internal Google parameter that specifies the product view type used when rendering the product item |[optional]|
**uule** | **string** | encoded location parameter<br>indicates the location for a search |[optional]|
**gl** | **string** | country code<br>indicates the location for which search results are displayed |[optional]|
**hl** | **string** | host language code<br>indicates the language in which search results are displayed |[optional]|