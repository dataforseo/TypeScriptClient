# GoogleExtendedReviewsSearch

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**rank_group** | **number** | *position within a group of elements with identical `type` values*. positions of elements with different `type` values are omitted from `rank_group` |[optional]|
**rank_absolute** | **number** | *absolute rank among all the listed reviews*. absolute position among all reviews on the list |[optional]|
**position** | **string** | *the alignment of the review in SERP*. can take the following values: `right` |[optional]|
**xpath** | **string** | *the [XPath](https://en.wikipedia.org/wiki/XPath) of the review* |[optional]|
**review_text** | **string** | *the content of the review* |[optional]|
**original_review_text** | **string** | *original content of the review*. the original content of the review, no auto-translate applied |[optional]|
**time_ago** | **string** | *the time of publication*. indicates the time (in the 'time ago' format) when the review was listed |[optional]|
**timestamp** | **string** | *date and time when a review was published*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**rating** | **RatingInfo** | *the rating score submitted by the reviewer* |[optional]|
**reviews_count** | **number** | *total number of reviews submitted by the reviewer* |[optional]|
**photos_count** | **number** | *total number of photos submitted by the reviewer* |[optional]|
**local_guide** | **boolean** | *indicates whether the reviewer has a 'local guide' status* |[optional]|
**profile_name** | **string** | *profile name of the reviewer* |[optional]|
**profile_url** | **string** | *URL of the reviewer's profile* |[optional]|
**review_url** | **string** | *the URL of the review* |[optional]|
**profile_image_url** | **string** | *URL of the reviewer's profile image* |[optional]|
**owner_answer** | **string** | *text of the owner's response*. the owner's response to the review |[optional]|
**original_owner_answer** | **string** | *original text of the owner's response*. the original response to the review, no auto-translate applied |[optional]|
**owner_time_ago** | **string** | *publication time*. indicates the time (in the 'time ago' format) when the owner submitted the response to the review |[optional]|
**owner_timestamp** | **string** | *date and time of the owner's reply to the review*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**review_id** | **string** | *the unique identifier of a review on Google*. example:. `ChZDSUhNMG9nS0VJQ0FnSUMxbHFyMFlnEAE` |[optional]|
**images** | **AiModeImagesElementInfo[]** | *images submitted by the reviewer* |[optional]|
**review_highlights** | **ReviewHighlights[]** | *review highlights*. contains highlighted review criteria and assessments |[optional]|
**source** | **Source** | *source of the review*. contains information about the source where the review was posted |[optional]|