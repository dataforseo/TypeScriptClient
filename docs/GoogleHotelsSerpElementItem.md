# GoogleHotelsSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | *group rank in SERP*. position within a group of elements with identical `type` values;. positions of elements with different `type` values are omitted from `rank_group`;. always equals `0` for `desktop` |[optional]|
**rank_absolute** | **number** | *absolute rank in SERP*. absolute position among all the elements in SERP. always equals `0` for `desktop` |[optional]|
**hotel_identifier** | **string** | *unique hotel identifier*. unique hotel identifier assigned by Google;. example: `'CgoIjaeSlI6CnNpVEAE'` |[optional]|
**url** | **string** | *URL of the third-party review source* |[optional]|
**cid** | **string** | *google-defined client id* |[optional]|