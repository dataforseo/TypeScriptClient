# GoogleFinanceNewsElement

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**title** | **string** | *title of the news article* |[optional]|
**url** | **string** | *URL to the page of the market index on Google Finance* |[optional]|
**source** | **string** | *name of the news source*. name of the website where the news article is published |[optional]|
**image_url** | **string** | *featured image URL*. URL of the news article's featured image |[optional]|
**timestamp** | **string** | *date and time of the value readout*. in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00'. example:. `2025-02-10 09:40:00 +00:00` |[optional]|
**quotes** | **BaseSerpApiGoogleFinanceElementItem[]** | *market indexes quoted in the news article*. information about market indexes quoted in the `google_finance_news_element` |[optional]|