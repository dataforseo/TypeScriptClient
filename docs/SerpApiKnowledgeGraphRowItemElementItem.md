# SerpApiKnowledgeGraphRowItemElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | *group rank in SERP*. position within a group of elements with identical `type` values. positions of elements with different `type` values are omitted from `rank_group` |[optional]|
**rank_absolute** | **number** | *absolute rank in SERP*. absolute position among all the elements in SERP |[optional]|
**title** | **string** | *title of the link* |[optional]|
**data_attrid** | **string** | *google defined data attribute ID*. example:. `kc:/common/topic:social media presence` |[optional]|
**text** | **string** | *reference text*. text snippet from the page that was used to generate the `ai_overview_element` |[optional]|
**links** | **LinkElement[]** | *sitelinks*. the links shown below some of Google's search results. if there are none, equals `null` |[optional]|