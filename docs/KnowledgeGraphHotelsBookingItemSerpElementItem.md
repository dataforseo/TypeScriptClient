# KnowledgeGraphHotelsBookingItemSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | *group rank in SERP*. position within a group of elements with identical `type` values;. positions of elements with different `type` values are omitted from `rank_group`;. always equals `0` for `desktop` |[optional]|
**rank_absolute** | **number** | *absolute rank in SERP*. absolute position among all the elements in SERP. always equals `0` for `desktop` |[optional]|
**title** | **string** | *title of the row* |[optional]|
**date_from** | **string** | *starting date of stay*. in the format 'year-month-date'. example:. 2019-11-15 |[optional]|
**date_to** | **string** | *ending date of stay*. in the format 'year-month-date'. example:. 2019-11-17 |[optional]|
**data_attrid** | **string** | *google defined data attribute ID*. example:. `action:listen_artist` |[optional]|
**items** | **KnowledgeGraphHotelsBookingElement[]** | *contains arrays of elements available in the list* |[optional]|