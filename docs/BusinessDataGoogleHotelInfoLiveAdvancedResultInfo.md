# BusinessDataGoogleHotelInfoLiveAdvancedResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**hotel_identifier** | **string** | *identifier received in a POST array*. this field will contain the `hotel_identifier` parameter specified when setting a task;. example:. `CgoI-KWyzenM_MV3EAE` |[optional]|
**location_code** | **number** | *location code in a POST array* |[optional]|
**language_code** | **string** | *language code in a POST array* |[optional]|
**check_url** | **string** | *direct URL to search engine results*. you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | *date and time when the result was received*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**title** | **string** | *hotel title*. the title of the hotel entity for which the results are collected |[optional]|
**stars** | **number** | *hotel class rating*. class rating that ranges between 1-5 stars and displayed after review ratings in hotel summary |[optional]|
**stars_description** | **string** | *hotel class rating*. class rating that ranges between 1-5 stars and displayed after review ratings in the hotel summary |[optional]|
**address** | **string** | *hotel address*. physical address of the hotel |[optional]|
**phone** | **string** | *hotel phone number*. contact phone number of the hotel |[optional]|
**about** | **HotelAboutInfo** | *information about the hotel* |[optional]|
**location** | **HotelLocationInfo** | *information about the hotel location*. information about the location where the hotel is located |[optional]|
**reviews** | **HotelReviewInfo** | *hotel reviews by criteria*. information about reviews of the hotel entity |[optional]|
**overview_images** | **string[]** | *images displayed in the hotel overview*. array containing URLs to images displayed in the hotel overview |[optional]|
**prices** | **HotelPriceInfo** | *pricing details of the hotel entity*. contains information about the hotel's prices |[optional]|