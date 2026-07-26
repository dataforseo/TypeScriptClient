# StocksBoxSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | group rank in SERP. position within a group of elements with identical type values;. positions of elements with different type values are omitted from rank_group;. always equals 0 for desktop |[optional]|
**rank_absolute** | **number** | absolute rank in SERP. absolute position among all the elements in SERP. always equals 0 for desktop |[optional]|
**title** | **string** | title of the row |[optional]|
**source** | **string** | source of the element. indicates the source of information included in the recipes_element |[optional]|
**snippet** | **string** | text alongside the link title |[optional]|
**price** | **PriceInfo** | price indicated in the element |[optional]|
**url** | **string** | URL of the third-party review source |[optional]|
**domain** | **string** | domain of the website hosting the video |[optional]|
**table** | **Table** | table present in the element. the header and content of the table present in the element |[optional]|
**graph** | **Graph** | contains data provided in the graph of the element |[optional]|