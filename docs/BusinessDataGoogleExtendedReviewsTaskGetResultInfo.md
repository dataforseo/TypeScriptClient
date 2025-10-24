# BusinessDataGoogleExtendedReviewsTaskGetResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | keyword received in a POST array<br>keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) |[optional]|
**type** | **string** | type of element |[optional]|
**se_domain** | **string** | search engine domain in a POST array |[optional]|
**location_code** | **number** | location code in a POST array |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|
**check_url** | **string** | direct URL to search engine results<br>you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | date and time when the result was received<br>in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”<br>example:<br>2019-11-15 12:57:46 +00:00 |[optional]|
**title** | **string** | title of the ‘reviews’ element in SERP<br>the name of the local establishment for which the reviews are collected |[optional]|
**sub_title** | **string** | subtitle of the ‘reviews’ element in SERP<br>additional information (e.g., address) on the ‘reviews’ element for which the reviews are collected |[optional]|
**rating** | **RatingInfo** | rating of the corresponding local establishment<br>popularity rate based on reviews and displayed in SERP |[optional]|
**feature_id** | **string** | the unique identifier of the ‘reviews’ element in SERP<br>learn more about the identifier in this help center article |[optional]|
**place_id** | **string** | unique identifier of a business location assigned by Google<br>learn more about the identifier in this help center article |[optional]|
**cid** | **string** | google-defined client id<br>unique id of a local establishment<br>learn more about the identifier in this help center article |[optional]|
**reviews_count** | **number** | the total number of reviews |[optional]|
**items_count** | **number** | the number of reviews items in the results array<br>you can get more results by using the depth parameter when setting a task |[optional]|
**items** | **GoogleExtendedReviewsSearch[]** | found reviews<br>you can get more results by using the depth parameter when setting a task |[optional]|