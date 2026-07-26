# GoogleReviewsSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | group rank in SERP. position within a group of elements with identical type values;. positions of elements with different type values are omitted from rank_group;. always equals 0 for desktop |[optional]|
**rank_absolute** | **number** | absolute rank in SERP. absolute position among all the elements in SERP. always equals 0 for desktop |[optional]|
**reviews_count** | **number** | the number of reviews |[optional]|
**rating** | **RatingInfo** | the element’s rating. the popularity rate based on reviews and displayed in SERP;. if there is none, equals null |[optional]|
**place_id** | **string** | the identifier of a place |[optional]|
**feature** | **string** | the additional feature of the review |[optional]|
**cid** | **string** | google-defined client id |[optional]|