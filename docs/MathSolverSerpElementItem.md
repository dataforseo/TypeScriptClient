# MathSolverSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | *group rank in SERP*. position within a group of elements with identical `type` values;. positions of elements with different `type` values are omitted from `rank_group`;. always equals `0` for `desktop` |[optional]|
**rank_absolute** | **number** | *absolute rank in SERP*. absolute position among all the elements in SERP. always equals `0` for `desktop` |[optional]|
**title** | **string** | *title of the row* |[optional]|
**result** | **string** | *solution to the equation*. solution to the mathematical equation specified in the `keyword` field when setting a task |[optional]|
**items** | **MathSolverElement[]** | *contains arrays of elements available in the list* |[optional]|
**links** | **LinkElement[]** | *sitelinks*. the links shown below some of Google's search results. if there are none, equals `null` |[optional]|