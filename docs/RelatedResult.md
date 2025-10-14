# RelatedResult

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**page** | **number** | search results page number<br>indicates the number of the SERP page on which the element is located |[optional]|
**xpath** | **string** | the XPath of the element |[optional]|
**domain** | **string** | domain where a link points |[optional]|
**title** | **string** | title of the link |[optional]|
**url** | **string** | reference page URL |[optional]|
**cache_url** | **string** | cached version of the page |[optional]|
**related_search_url** | **string** | URL to a similar search<br>URL to a new search for the same keyword(s) on related sites |[optional]|
**breadcrumb** | **string** | breadcrumb in SERP |[optional]|
**website_name** | **string** | name of the website in the ad element |[optional]|
**is_image** | **boolean** | indicates whether the element contains an image |[optional]|
**is_video** | **boolean** | indicates whether the element contains a video |[optional]|
**description** | **string** | description of the hotel booking element |[optional]|
**pre_snippet** | **string** | includes additional information appended before the result description in SERP |[optional]|
**extended_snippet** | **string** | includes additional information appended after the result description in SERP |[optional]|
**images** | **AiModeImagesElementInfo[]** | images of the component<br>if there are none, equals null |[optional]|
**amp_version** | **boolean** | Accelerated Mobile Pages<br>indicates whether an item has the Accelerated Mobile Page (AMP) version |[optional]|
**rating** | **RatingElement** | the item’s rating <br>the popularity rate based on reviews and displayed in SERP |[optional]|
**price** | **PriceInfo** | price of booking a place for the specified dates of stay |[optional]|
**highlighted** | **string[]** | words highlighted in bold within the results description |[optional]|
**about_this_result** | **AboutThisResultElement** | contains information from the ‘About this result’ panel<br>‘About this result’ panel provides additional context about why Google returned this result for the given query;<br>this feature appears after clicking on the three dots next to most results |[optional]|
**timestamp** | **string** | date and time when the video was published or indexed<br>in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”<br>example:<br>2019-11-15 12:57:46 +00:00 |[optional]|