# ShoppingElement

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**title** | **string** | title of a given link element |[optional]|
**price** | **PriceInfo** | price indicated in the element |[optional]|
**source** | **string** | source of the element<br>indicates the source of information included in the top_stories_element |[optional]|
**description** | **string** | description of the results element in SERP |[optional]|
**marketplace** | **string** | merchant account provider<br>commerce site that hosts products or websites of individual sellers under the same merchant account<br>example:<br>by Google |[optional]|
**marketplace_url** | **string** | relevant marketplace URL<br>URL of the page on the marketplace website where the product is hosted |[optional]|
**url** | **string** | URL |[optional]|
**rating** | **RatingInfo** | the item’s rating <br>the popularity rate based on reviews and displayed in SERP;<br>if there is none, equals null |[optional]|