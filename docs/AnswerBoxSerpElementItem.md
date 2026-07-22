# AnswerBoxSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | group rank in SERP<br>position within a group of elements with identical type values;<br>positions of elements with different type values are omitted from rank_group;<br>always equals 0 for desktop |[optional]|
**rank_absolute** | **number** | absolute rank in SERP<br>absolute position among all the elements in SERP<br>always equals 0 for desktop |[optional]|
**text** | **string[]** | text<br>if there is none, equals null |[optional]|
**links** | **LinkElement[]** | sitelinks<br>the links shown below some of Google’s search results<br>if there are none, equals null |[optional]|