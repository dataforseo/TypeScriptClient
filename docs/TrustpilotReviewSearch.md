# TrustpilotReviewSearch

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**rank_group** | **number** | position within a group of elements with identical type values. positions of elements with different type values are omitted from rank_group |[optional]|
**rank_absolute** | **number** | absolute rank among all the listed reviews. absolute position among all reviews on the list |[optional]|
**position** | **string** | the alignment of the review in SERP. can take the following values: right |[optional]|
**url** | **string** | the URL of the review |[optional]|
**rating** | **RatingInfo** | the rating score submitted by the reviewer |[optional]|
**verified** | **boolean** | indicates whether the review has the “Verified” mark |[optional]|
**language** | **string** | the language of the review |[optional]|
**timestamp** | **string** | date and time when a review was published. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2019-11-15 12:57:46 +00:00 |[optional]|
**title** | **string** | the title of the review |[optional]|
**review_text** | **string** | the content of the review |[optional]|
**review_images** | **string[]** | images submitted by the reviewer. displays URLs to the images provided by the author of the review;. please note that Trustpilot doesn’t allow adding images to reviews, so the review_images parameter will always equal null |[optional]|
**user_profile** | **BusinessDataUserProfileInfo** | user profile of the reviewer |[optional]|
**responses** | **ReviewResponseItemInfo[]** | owner’s response to the submitted review |[optional]|