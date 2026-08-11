# PageMetaInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**title** | **string** | *page title* |[optional]|
**charset** | **number** | *[code page](https://en.wikipedia.org/wiki/Code_page)*. example: `65001` |[optional]|
**follow** | **boolean** | *indicates whether a page's 'meta robots' allows crawlers to follow the links on the page*. if `false`, the page's 'meta robots' tag contains 'nofollow' parameter instructing crawlers not to follow the links on the page |[optional]|
**generator** | **string** | *meta tag generator* |[optional]|
**htags** | **{ [key: string]: string[]; }** | *HTML header tags* |[optional]|
**description** | **string** | *content of the meta description tag* |[optional]|
**favicon** | **string** | *favicon of the page* |[optional]|
**meta_keywords** | **string** | *content of the `keywords` meta tag* |[optional]|
**canonical** | **string** | *canonical page* |[optional]|
**internal_links_count** | **number** | *number of internal links on the page* |[optional]|
**external_links_count** | **number** | *number of external links on the page* |[optional]|
**inbound_links_count** | **number** | *number of internal links pointing at the page* |[optional]|
**images_count** | **number** | *number of images on the page* |[optional]|
**images_size** | **number** | *total size of images on the page measured in bytes* |[optional]|
**scripts_count** | **number** | *number of scripts on the page* |[optional]|
**scripts_size** | **number** | *total size of scripts on the page measured in bytes* |[optional]|
**stylesheets_count** | **number** | *number of stylesheets on the page* |[optional]|
**stylesheets_size** | **number** | *total size of stylesheets on the page measured in bytes* |[optional]|
**title_length** | **number** | *length of the `title` tag in characters* |[optional]|
**description_length** | **number** | *length of the `description` tag in characters* |[optional]|
**render_blocking_scripts_count** | **number** | *number of scripts on the page that block page rendering* |[optional]|
**render_blocking_stylesheets_count** | **number** | *number of CSS styles on the page that block page rendering* |[optional]|
**cumulative_layout_shift** | **number** | *Core Web Vitals metric measuring the layout stability of the page*. measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page. [Learn more.](https://web.dev/cls/) |[optional]|
**meta_title** | **string** | *meta title of the page*. meta tag in the head section of an HTML document that defines the title of a page |[optional]|
**content** | **HtmlContentInfo** | *overall information about content of the page* |[optional]|
**deprecated_tags** | **string[]** | *deprecated tags on the page* |[optional]|
**duplicate_meta_tags** | **string[]** | *duplicate meta tags on the page* |[optional]|
**spell** | **HunspellInfo** | *spellcheck*. [hunspell](http://hunspell.github.io/) spellcheck errors |[optional]|
**social_media_tags** | **{ [key: string]: string; }** | *object of social media tags found on the page*. contains social media tags and their content. supported tags include but are not limited to [Open Graph](https://ogp.me/) and [Twitter card](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started) |[optional]|
**broken_html** | **OnPageResourceIssueInfo** | resource errors and warnings |[optional]|