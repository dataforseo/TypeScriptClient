# BingOrganicSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**domain** | **string** | domain in SERP |[optional]|
**title** | **string** | title of the results element in SERP |[optional]|
**description** | **string** | description of the results element in SERP |[optional]|
**url** | **string** | relevant URL in SERP |[optional]|
**breadcrumb** | **string** | breadcrumb in SERP |[optional]|
**cache_url** | **string** | cached version of the page |[optional]|
**related_search_url** | **string** | URL to a similar search. URL to a new search for the same keyword(s) on related sites |[optional]|
**website_name** | **string** | name of the source website |[optional]|
**is_image** | **boolean** | indicates whether the element contains an image |[optional]|
**is_video** | **boolean** | indicates whether the element contains a video |[optional]|
**is_featured_snippet** | **boolean** | indicates whether the element is a featured_snippet |[optional]|
**is_malicious** | **boolean** | indicates whether the element is marked as malicious |[optional]|
**is_web_story** | **boolean** | indicates whether the element is marked as a web story |[optional]|
**checks** | **string[]** |  |[optional]|
**pre_snippet** | **string** | includes additional information appended before the result description in SERP |[optional]|
**extended_snippet** | **string** | includes additional information appended after the result description in SERP |[optional]|
**images** | **AiModeImagesElementInfo[]** | images of the element |[optional]|
**amp_version** | **boolean** | Accelerated Mobile Pages. indicates whether an item has the Accelerated Mobile Page (AMP) version |[optional]|
**rating** | **RatingInfo** | the item’s rating . the popularity rate based on reviews and displayed in SERP |[optional]|
**price** | **PriceInfo** | pricing details. contains the pricing details of the product or service featured in the result |[optional]|
**highlighted** | **string[]** | words highlighted in bold within the results description |[optional]|
**links** | **LinkElement[]** | sitelinks. the links shown below some search results. if there are none, equals null |[optional]|
**faq** | **FaqBox** | frequently asked questions. questions and answers extension shown below some search results. if there are none, equals null |[optional]|
**extended_people_also_search** | **string[]** | extension of the organic element. extension of the organic result containing related search queries. Note: extension appears in SERP upon clicking on the result and then bouncing back to search results |[optional]|
**about_this_result** | **AboutThisResultElement** | contains information from the ‘About this result’ panel. note: about_this_result feature is not available in Bing search engine, that’s why it always equals null |[optional]|
**related_result** | **RelatedResult[]** | related result from the same domain. related result from the same domain appears as a part of the main result snippet;. note: related_result feature is not available in Bing search engine, that’s why it always equals null |[optional]|
**timestamp** | **string** | date and time when the result was published. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2019-11-15 12:57:46 +00:00 |[optional]|