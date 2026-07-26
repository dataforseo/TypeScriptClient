# SerpApiKnowledgeGraphHotelsBookingItemElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | group rank in SERP. position within a group of elements with identical type values. positions of elements with different type values are omitted from rank_group |[optional]|
**rank_absolute** | **number** | absolute rank in SERP. absolute position among all the elements in SERP |[optional]|
**title** | **string** | title of a given link element |[optional]|
**date_from** | **string** | starting date of stay. in the format “year-month-date”. example:. 2019-11-15 |[optional]|
**date_to** | **string** | ending date of stay. in the format “year-month-date”. example:. 2019-11-17 |[optional]|
**data_attrid** | **string** | google defined data attribute ID. example:. kc:/local:hotel booking |[optional]|
**items** | **KnowledgeGraphHotelsBookingElement[]** | popular keywords relevant to the initial search query. if there are none, equals null |[optional]|