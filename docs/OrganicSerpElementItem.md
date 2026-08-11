# OrganicSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | *group rank in SERP*. position within a group of elements with identical `type` values. positions of elements with different `type` values are omitted from `rank_group` |[optional]|
**rank_absolute** | **number** | *absolute rank in SERP*. absolute position among all the elements found in SERP**note** values are returned in the ascending order, with values corresponding to advanced SERP features omitted from the results;. to get all items (including SERP features and rich snippets) with their positions, please refer to the [Google Organiс Advanced SERP](https://docs.dataforseo.com/v3/serp/google/organic/live/advanced/?php) endpoint |[optional]|
**domain** | **string** | *domain in SERP* |[optional]|
**title** | **string** | *title of the results element in SERP* |[optional]|
**description** | **string** | *description of the results element in SERP* |[optional]|
**url** | **string** | *relevant URL in SERP* |[optional]|
**breadcrumb** | **string** | *breadcrumb in SERP* |[optional]|
**cache_url** | **string** | *cached version of the page* |[optional]|
**related_search_url** | **string** | *URL to a similar search*. URL to a new search for the same keyword(s) [on related sites](https://support.google.com/websearch/answer/2466433?hl=en#:~:text=Search%20for%20related%20sites) |[optional]|
**website_name** | **string** | *name of the website in SERP* |[optional]|
**is_image** | **boolean** | *indicates whether the element contains an_`image`*. **Note:** this check no longer appears in SERPn |[optional]|
**is_video** | **boolean** | *indicates whether the element contains a `video`*. **Note:** this check no longer appears in SERP |[optional]|
**is_featured_snippet** | **boolean** | *indicates whether the element is a `featured_snippet`*. **Note:** this check no longer appears in SERP |[optional]|
**is_malicious** | **boolean** | *indicates whether the element is marked as malicious*. **Note:** this check no longer appears in SERP |[optional]|
**is_web_story** | **boolean** | *indicates whether the element is marked as Google web story*. **Note:** this check no longer appears in SERP |[optional]|
**checks** | **string[]** | *array of properties detected for the SERP element*. lists the properties that are true for this element. each value in the array represents a detected property . example:. if `is_image` is present in the array, the element contains an image. possible values in the array:. `is_image`, `is_video`, `is_featured_snippet`, `amp_version`, `is_malicious`, `is_web_story`, `is_highly_cited`. equals `null` if none of the properties are detected for the element. learn more about the `checks` array in [this Help Center article](https://dataforseo.com/help-center/whats-a-checks-array-in-the-google-organic-serp-api) |[optional]|
**pre_snippet** | **string** | *includes additional information appended before the result description in SERP* |[optional]|
**extended_snippet** | **string** | *includes additional information appended after the result description in SERP* |[optional]|
**images** | **AiModeImagesElementInfo[]** | *images of the element*. if there are none, equals `null` |[optional]|
**amp_version** | **boolean** | *Accelerated Mobile Pages*. indicates whether an item has the Accelerated Mobile Page (AMP) version |[optional]|
**rating** | **RatingInfo** | *the item's rating*. the popularity rate based on reviews and displayed in SERP. if there is none, equals `null` |[optional]|
**price** | **PriceInfo** | *pricing details*. contains the pricing details of the product or service featured in the result;. if there is none, equals `null` |[optional]|
**highlighted** | **string[]** | *words highlighted in bold within the results `description`* |[optional]|
**links** | **LinkElement[]** | *link of the element* |[optional]|
**faq** | **FaqBox** | *frequently asked questions*. questions and answers extension shown below some of Google's search results. **Note:** this object is deprecated and always returns `null` |[optional]|
**extended_people_also_search** | **string[]** | *extension of the organic element*. extension of the organic result containing related search queries. **Note:** extension appears in SERP upon clicking on the result and then bouncing back to search results |[optional]|
**about_this_result** | **AboutThisResultElement** | *contains information from the 'About this result' panel*. **Note:** this object is deprecated and always returns `null` |[optional]|
**related_result** | **RelatedResult[]** | *related result from the same domain*. related result from the same domain appears as a part of the main result snippet;. you can derive the `related_result` snippets as `'type': 'organic'` results by setting the `group_organic_results` parameter to `false` in the POST request |[optional]|
**timestamp** | **string** | *date and time when the result was published*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|