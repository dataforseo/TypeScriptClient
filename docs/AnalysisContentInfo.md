# AnalysisContentInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**content_type** | **string** | type of content. example:. page_content, comment |[optional]|
**title** | **string** | title of the result |[optional]|
**main_title** | **string** | page title |[optional]|
**previous_title** | **string** | title of the previous content block |[optional]|
**level** | **number** | title heading level. indicates h-tag level from 1 (top) to 6 (bottom) |[optional]|
**author** | **string** | author of the content |[optional]|
**snippet** | **string** | content snippet |[optional]|
**snippet_length** | **number** | character length of the snippet |[optional]|
**social_metrics** | **SocialMetricsInfo[]** | social media engagement metrics. data on social media interactions associated with the content based on website embeds developed and supported by social media platforms |[optional]|
**highlighted_text** | **string** | highlighted text from the snippet |[optional]|
**language** | **string** | main language of the domain. to obtain a full list of available languages, refer to the Languages endpoint |[optional]|
**sentiment_connotations** | **{ [key: string]: number; }** | sentiment connotations. contains sentiments (emotional reactions) related to the given citation and probability index per each sentiment. possible sentiment connotations: anger, happiness, love, sadness, share, fun |[optional]|
**connotation_types** | **{ [key: string]: number; }** | connotation types. contains types of sentiments (sentiment polarity) related to the given citation and probability index per each sentiment type. possible sentiment connotation types: positive, negative, neutral |[optional]|
**text_category** | **number[]** | text category. to obtain a full list of available categories, refer to the Categories endpoint |[optional]|
**date_published** | **string** | date and time when the content was published. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2017-01-24 13:20:59 +00:00 |[optional]|
**content_quality_score** | **number** | content quality score. this value is calculated based on the number of words, sentences and characters the content contains |[optional]|
**semantic_location** | **string** | semantic location. indicates semantic element in HTML where the target keyword citation is located. example:. article, header |[optional]|
**rating** | **ContentRatingInfo** | content rating. rating related to content_info |[optional]|
**group_date** | **string** | citation group date and time. indicates content publication date or date and time when our crawler visited the page for the first time;. this field can be used to group citations by date and display citation trends;. date and time are provided in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2017-01-24 13:20:59 +00:00 |[optional]|