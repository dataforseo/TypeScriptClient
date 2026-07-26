# SerpYoutubeVideoCommentsLiveAdvancedResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**video_id** | **string** | ID of the video received in a POST array |[optional]|
**se_domain** | **string** | search engine domain in a POST array |[optional]|
**location_code** | **number** | location code in a POST array |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|
**check_url** | **string** | direct URL to search engine results. you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | date and time when the result was received. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2019-11-15 12:57:46 +00:00 |[optional]|
**spell** | **SpellInfo** | autocorrection of the search engine. if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection |[optional]|
**item_types** | **string[]** | types of search results in SERP. contains types of search results (items) found in SERP.. possible item:. youtube_comment |[optional]|
**title** | **string** | title of the video |[optional]|
**comments_count** | **number** | number of comments on the video |[optional]|
**items_count** | **number** | the number of results returned in the items array |[optional]|
**items** | **YoutubeComment[]** | elements of search results found in SERP |[optional]|