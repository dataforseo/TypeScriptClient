# BacklinksPageMeta

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**title** | **string** | *page title* |[optional]|
**canonical** | **string** | *canonical page* |[optional]|
**internal_links_count** | **number** | *number of internal links on the page* |[optional]|
**external_links_count** | **number** | *number of external links on the page* |[optional]|
**images_count** | **number** | *number of images on the page* |[optional]|
**words_count** | **number** | *number of words on the page* |[optional]|
**page_spam_score** | **number** | *spam score of the page*. learn more about how the metric is calculated on [this help center page](https://dataforseo.com/help-center/what-is-spam-score-and-how-is-it-calculated) |[optional]|
**social_media_tags** | **{ [key: string]: string; }** | *array of social media tags found on the page*. contains social media tags and their content. supported tags include but are not limited to [Open Graph](https://ogp.me/) and [Twitter card](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started) |[optional]|
**h_1** | **string[]** | *h1 tag*. content of `h1` tags |[optional]|
**h_2** | **string[]** | *h2 tag*. content of `h2` tags |[optional]|
**h_3** | **string[]** | *h3 tag*. content of `h3` tags |[optional]|
**images_alt** | **string[]** | *content of `alt` tags* |[optional]|
**powered_by** | **string[]** | *CMS details* |[optional]|
**language** | **string** | *page content language*. example:. `en` |[optional]|
**charset** | **string** | *character encoding*. examples:. `utf-8` |[optional]|
**platform_type** | **string[]** | *type of a platform* |[optional]|
**technologies** | **{ [key: string]: string; }** | *website technologies* |[optional]|