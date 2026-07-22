# ThirdPartyReviewsSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | group rank in SERP<br>position within a group of elements with identical type values;<br>positions of elements with different type values are omitted from rank_group;<br>always equals 0 for desktop |[optional]|
**rank_absolute** | **number** | absolute rank in SERP<br>absolute position among all the elements in SERP<br>always equals 0 for desktop |[optional]|
**reviews_count** | **number** | the number of reviews |[optional]|
**title** | **string** | title of the row |[optional]|
**url** | **string** | URL of the third-party review source |[optional]|
**rating** | **RatingInfo** | the element’s rating<br>the popularity rate based on reviews and displayed in SERP;<br>if there is none, equals null |[optional]|