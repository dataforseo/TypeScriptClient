# BusinessDataGoogleReviewsTaskGetResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | *keyword received in a POST array*. **keyword is returned with decoded %## (plus character '+' will be decoded to a space character)** |[optional]|
**type** | **string** | type of element |[optional]|
**se_domain** | **string** | *search engine domain in a POST array* |[optional]|
**location_code** | **number** | *location code in a POST array* |[optional]|
**language_code** | **string** | *language code in a POST array* |[optional]|
**check_url** | **string** | *direct URL to search engine results*. you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | *date and time when the result was received*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**title** | **string** | *title of the 'reviews' element in SERP*. the name of the local establishment for which the reviews are collected |[optional]|
**sub_title** | **string** | *subtitle of the 'reviews' element in SERP*. additional information (e.g., address) on the 'reviews' element for which the reviews are collected |[optional]|
**rating** | **RatingInfo** | *rating of the corresponding local establishment*. popularity rate based on reviews and displayed in SERP |[optional]|
**feature_id** | **string** | *the unique identifier of the 'reviews' element in SERP*. learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) |[optional]|
**place_id** | **string** | *unique identifier of a business location assigned by Google*. learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) |[optional]|
**cid** | **string** | *google-defined client id*. unique id of a local establishment. learn more about the identifier in [this help center article](https://dataforseo.com/help-center/what-is-cid-place-id-feature-id) |[optional]|
**reviews_count** | **number** | *the total number of reviews* |[optional]|
**items_count** | **number** | *the number of reviews items in the results array*. you can get more results by using the `depth` parameter when setting a task |[optional]|
**items** | **GoogleReviewsSearch[]** | *found reviews*. you can get more results by using the `depth` parameter when setting a task |[optional]|