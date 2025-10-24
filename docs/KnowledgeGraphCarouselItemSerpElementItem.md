# KnowledgeGraphCarouselItemSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | group rank in SERP<br>position within a group of elements with identical type values;<br>positions of elements with different type values are omitted from rank_group;<br>always equals 0 for desktop |[optional]|
**rank_absolute** | **number** | absolute rank in SERP<br>absolute position among all the elements in SERP<br>always equals 0 for desktop |[optional]|
**title** | **string** | title of a given link element |[optional]|
**data_attrid** | **string** | google defined data attribute ID<br>example:<br>action:listen_artist |[optional]|
**link** | **LinkElement** | link of the element |[optional]|
**items** | **KnowledgeGraphListElement[]** | contains arrays of elements available in the list |[optional]|