# SerpYoutubeVideoSubtitlesLiveAdvancedResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**video_id** | **string** | ID of the video received in a POST array |[optional]|
**se_domain** | **string** | search engine domain in a POST array |[optional]|
**location_code** | **number** | location code in a POST array |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|
**check_url** | **string** | direct URL to search engine results<br>you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | date and time when the result was received<br>in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”<br>example:<br>2019-11-15 12:57:46 +00:00 |[optional]|
**spell** | **SpellInfo** | autocorrection of the search engine<br>if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection |[optional]|
**item_types** | **string[]** | types of search results in SERP<br>contains types of search results (items) found in SERP.<br>possible item:<br>youtube_subtitles |[optional]|
**unsupported_language** | **boolean** | indicates whether the language is unsupported by the system |[optional]|
**translate_language** | **string** | language code of translated text |[optional]|
**origin_language** | **string** | language code of original text |[optional]|
**category** | **string** | the category the video belongs to<br>Note: this field is deprecated and always returns null |[optional]|
**subtitles_count** | **number** | number of subtitles in the video |[optional]|
**title** | **string** | title of the video |[optional]|
**items_count** | **number** | the number of results returned in the items array |[optional]|
**items** | **YoutubeSubtitles[]** | elements of search results found in SERP |[optional]|