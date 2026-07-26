# SerpApiKnowledgeGraphShoppingItemElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | group rank in SERP. position within a group of elements with identical type values. positions of elements with different type values are omitted from rank_group |[optional]|
**rank_absolute** | **number** | absolute rank in SERP. absolute position among all the elements in SERP |[optional]|
**title** | **string** | title of a given link element |[optional]|
**data_attrid** | **string** | google defined data attribute ID. example:. kc:/shopping/gpc:organic-offers |[optional]|
**items** | **KnowledgeGraphShoppingElement[]** | keywords relevant to the initial search query. if there are none, equals null |[optional]|