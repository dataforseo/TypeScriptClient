# BusinessDataTripadvisorReviewsTaskGetResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**url_path** | **string** | URL path received in a POST array |[optional]|
**type** | **string** | type of element |[optional]|
**se_domain** | **string** | search engine domain in a POST array |[optional]|
**check_url** | **string** | direct URL to search engine results<br>you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | date and time when the result was received<br>in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”<br>example:<br>2019-11-15 12:57:46 +00:00 |[optional]|
**title** | **string** | title of the ‘reviews’ element in SERP<br>the name of the local establishment for which the reviews are collected |[optional]|
**location** | **string** | location of the local establishment<br>address of the local establishment for which the reviews are collected |[optional]|
**reviews_count** | **number** | the total number of reviews |[optional]|
**rating** | **RatingInfo** | rating of the corresponding local establishment<br>popularity rate based on reviews and displayed in SERP |[optional]|
**rating_distribution** | **{ [key: string]: number; }** | rating distribution by votes<br>the distribution of votes across the rating in the range from 1 to 5 |[optional]|
**items_count** | **number** | the number of reviews items in the results array<br>you can get more results by using the depth parameter when setting a task |[optional]|
**items** | **TripadvisorReviewSearch[]** | found reviews<br>you can get more results by using the depth parameter when setting a task |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|