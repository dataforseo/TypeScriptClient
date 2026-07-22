# SerpApiKnowledgeGraphShoppingItemElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | group rank in SERP<br>position within a group of elements with identical type values<br>positions of elements with different type values are omitted from rank_group |[optional]|
**rank_absolute** | **number** | absolute rank in SERP<br>absolute position among all the elements in SERP |[optional]|
**title** | **string** | title of a given link element |[optional]|
**data_attrid** | **string** | google defined data attribute ID<br>example:<br>kc:/shopping/gpc:organic-offers |[optional]|
**items** | **KnowledgeGraphShoppingElement[]** | keywords relevant to the initial search query<br>if there are none, equals null |[optional]|