# BusinessDataGoogleHotelSearchesLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | keyword received in a POST array<br>keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) |[optional]|
**location_code** | **number** | location code in a POST array |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|
**check_url** | **string** | direct URL to search engine results<br>you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | date and time when the result was received<br>in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”<br>example:<br>2019-11-15 12:57:46 +00:00 |[optional]|
**items_count** | **number** | item types<br>the number of items in the items array |[optional]|
**items** | **BusinessDataGoogleHotelSearchesItem[]** | encountered item types<br>types of search engine results encountered in the items array;<br>possible item types: hotel_search_item |[optional]|