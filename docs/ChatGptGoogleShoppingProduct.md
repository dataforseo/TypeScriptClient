# ChatGptGoogleShoppingProduct

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**ei** | **string** | *event identifier*. internal event identifier used by Google |[optional]|
**product_id** | **string** | *product identifier*. can be used as a `data_docid` in Google Shopping API endpoints |[optional]|
**catalog_id** | **string** | *Google Shopping catalog identifier of the product*. can be used as a `product_id` in [Google Shopping API endpoints](https://docs.dataforseo.com/v3/merchant/google/overview/) |[optional]|
**gpcid** | **string** | *Google product cluster identifier*. can be used as a `gid` in [Google Shopping API endpoints](https://docs.dataforseo.com/v3/merchant/google/overview/) |[optional]|
**headline_offer_docid** | **string** | *document identifier of the main offer in the headline*. can be used as a `data_docid` in [Google Shopping API endpoints](https://docs.dataforseo.com/v3/merchant/google/overview/) |[optional]|
**image_docid** | **string** | *identifier for the displayed product’s image* |[optional]|
**rds** | **string** | *resource descriptor string*. internal Google resource descriptor string that identifies the product within Google's Shopping index |[optional]|
**query** | **string** | *search query*. search query used by ChatGPT to retrieve the product from Google Shopping |[optional]|
**mid** | **string** | *merchant identifier*. identifier of the seller or merchant account in Google Shopping |[optional]|
**pvt** | **string** | *product view type*. internal Google parameter that specifies the product view type used when rendering the product item |[optional]|
**uule** | **string** | *encoded location parameter*. indicates the location for a search |[optional]|
**gl** | **string** | *country code*. indicates the location for which search results are displayed |[optional]|
**hl** | **string** | *host language code*. indicates the language in which search results are displayed |[optional]|