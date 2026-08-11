# KnowledgeGraphSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | *group rank in SERP*. position within a group of elements with identical `type` values. positions of elements with different `type` values are omitted from `rank_group` |[optional]|
**rank_absolute** | **number** | *absolute rank in SERP*. absolute position among all the elements in SERP |[optional]|
**title** | **string** | *title of the result in SERP* |[optional]|
**subtitle** | **string** | *subtitle of the item* |[optional]|
**description** | **string** | *description of the results element in SERP* |[optional]|
**card_id** | **string** | *card id* |[optional]|
**url** | **string** | *relevant URL in SERP* |[optional]|
**image_url** | **string** | *URL of the image*. the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) |[optional]|
**logo_url** | **string** | *URL of the logo from knowledge graph* |[optional]|
**cid** | **string** | *google-defined client id*. unique id of a local establishment;. can be used with [Google Reviews API](/v3/reviews/google/overview/?php) to get a full list of reviews |[optional]|
**items** | **BaseSerpApiKnowledgeGraphElementItem[]** | *additional items present in the element*. if there are none, equals `null` |[optional]|