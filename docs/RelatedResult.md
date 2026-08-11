# RelatedResult

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**page** | **number** | *search results page number*. indicates the number of the SERP page on which the element is located |[optional]|
**xpath** | **string** | *the [XPath](https://en.wikipedia.org/wiki/XPath) of the element* |[optional]|
**domain** | **string** | *website domain* |[optional]|
**title** | **string** | *title of a given link element* |[optional]|
**url** | **string** | *URL* |[optional]|
**cache_url** | **string** | *cached version of the page* |[optional]|
**related_search_url** | **string** | *URL to a similar search*. URL to a new search for the same keyword(s) [on related sites](https://support.google.com/websearch/answer/2466433?hl=en#:~:text=Search%20for%20related%20sites) |[optional]|
**breadcrumb** | **string** | *breadcrumb in SERP* |[optional]|
**website_name** | **string** | *name of the website in the ad element* |[optional]|
**is_image** | **boolean** | *indicates whether the element contains an_`image`*. **Note:** this check no longer appears in SERPn |[optional]|
**is_video** | **boolean** | *indicates whether the element contains a `video`*. **Note:** this check no longer appears in SERP |[optional]|
**checks** | **string[]** | *array of properties detected for the SERP element*. lists the properties that are true for this element. each value in the array represents a detected property . example:. if `is_image` is present in the array, the element contains an image. possible values in the array:. `is_image`, `is_video`, `is_featured_snippet`, `amp_version`, `is_malicious`, `is_web_story`, `is_highly_cited`. equals `null` if none of the properties are detected for the element. learn more about the `checks` array in [this Help Center article](https://dataforseo.com/help-center/whats-a-checks-array-in-the-google-organic-serp-api) |[optional]|
**description** | **string** | *description of the results element in SERP* |[optional]|
**pre_snippet** | **string** | *includes additional information appended before the result description in SERP* |[optional]|
**extended_snippet** | **string** | *includes additional information appended after the result description in SERP* |[optional]|
**images** | **AiModeImagesElementInfo[]** | *images of the component*. if there are none, equals `null` |[optional]|
**amp_version** | **boolean** | *Accelerated Mobile Pages*. indicates whether an item has the Accelerated Mobile Page (AMP) version |[optional]|
**rating** | **RatingInfo** | *the item's rating*. the popularity rate based on reviews and displayed in SERP;. if there is none, equals `null` |[optional]|
**price** | **PriceInfo** | *price of booking a place for the specified dates of stay* |[optional]|
**highlighted** | **string[]** | *words highlighted in bold within the results `description`* |[optional]|
**about_this_result** | **AboutThisResultElement** | *contains information from the 'About this result' panel*. **Note:** this object is deprecated and always returns `null` |[optional]|
**timestamp** | **string** | *date and time when the result was published*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|