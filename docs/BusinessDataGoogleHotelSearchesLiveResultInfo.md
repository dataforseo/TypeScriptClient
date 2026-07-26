# BusinessDataGoogleHotelSearchesLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | keyword received in a POST array. keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) |[optional]|
**location_code** | **number** | location code in a POST array |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|
**check_url** | **string** | direct URL to search engine results. you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | date and time when the result was received. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2019-11-15 12:57:46 +00:00 |[optional]|
**items_count** | **number** | item types. the number of items in the items array |[optional]|
**items** | **BusinessDataGoogleHotelSearchesItem[]** | encountered item types. types of search engine results encountered in the items array;. possible item types: hotel_search_item |[optional]|