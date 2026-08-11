# LocalPackSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | *group rank in SERP*. position within a group of elements with identical `type` values;. positions of elements with different `type` values are omitted from `rank_group`;. always equals `0` for `desktop` |[optional]|
**rank_absolute** | **number** | *absolute rank in SERP*. absolute position among all the elements in SERP. always equals `0` for `desktop` |[optional]|
**title** | **string** | *title of the row* |[optional]|
**description** | **string** | *description of the link* |[optional]|
**domain** | **string** | *domain of the website hosting the video* |[optional]|
**phone** | **string** | *phone number* |[optional]|
**booking_url** | **string** | *URL of the booking page* |[optional]|
**url** | **string** | *URL of the third-party review source* |[optional]|
**is_paid** | **boolean** | *indicates whether the element is an ad* |[optional]|
**rating** | **RatingInfo** | *the element's rating*. the popularity rate based on reviews and displayed in SERP;. if there is none, equals `null` |[optional]|
**cid** | **string** | *google-defined client id* |[optional]|