# BusinessDataGoogleMyBusinessUpdatesTaskGetResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | keyword received in a POST array. keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character). this field will contain the cid parameter if you specified it in the keyword field when setting a task;. example:. cid:2946633002421908862. learn more about the parameter in this help center article |[optional]|
**se_domain** | **string** | search engine domain as specified in a POST array |[optional]|
**location_code** | **number** | location code in a POST array |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|
**check_url** | **string** | direct URL to search engine results. you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | date and time when the result was received. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2019-11-15 12:57:46 +00:00 |[optional]|
**business_updates_id** | **string** | identifier of the business updates element in SERP |[optional]|
**cid** | **string** | google-defined client id. unique id of a local establishment. learn more about the cid identifier in this help center article |[optional]|
**feature_id** | **string** | the unique identifier of the element in SERP. learn more about the identifier in this help center article |[optional]|
**item_types** | **string[]** | item types. types of search engine results encountered in the items array;. possible item types: google_business_post |[optional]|
**items_count** | **number** | item types. the number of items in the items array |[optional]|
**items** | **GoogleBusinessPost[]** | encountered item types. types of search engine results encountered in the items array;. possible item types: google_business_post |[optional]|