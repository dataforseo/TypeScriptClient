[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageTaskRequestInfo

# Class: OnPageTaskRequestInfo

## Implements

- [`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageTaskRequestInfo()

> **new OnPageTaskRequestInfo**(`data`?): [`OnPageTaskRequestInfo`](OnPageTaskRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md)

#### Returns

[`OnPageTaskRequestInfo`](OnPageTaskRequestInfo.md)

#### Defined in

<<<<<<< HEAD
main.ts:136708
=======
main.ts:136741
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

## Properties

### accept\_language?

> `optional` **accept\_language**: `string`

language header for accessing the website
optional field
all locale formats are supported (xx, xx-XX, xxx-XX, etc.)
Note: if you do not specify this parameter, some websites may deny access; in this case, pages will be returned with the "type":"broken in the response array

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`accept_language`](../interfaces/IOnPageTaskRequestInfo.md#accept_language)

#### Defined in

<<<<<<< HEAD
main.ts:136473
=======
main.ts:136506
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### allow\_subdomains?

> `optional` **allow\_subdomains**: `boolean`

include pages on subdomains
optional field
set to true if you want to crawl all subdomains of a target website
default value: false

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`allow_subdomains`](../interfaces/IOnPageTaskRequestInfo.md#allow_subdomains)

#### Defined in

<<<<<<< HEAD
main.ts:136602
=======
main.ts:136635
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### allowed\_subdomains?

> `optional` **allowed\_subdomains**: `string`[]

subdomains to crawl
optional field
specify subdomains that you want to crawl
example: ["blog.site.com", "my.site.com", "shop.site.com"]
Note: to use this parameter, the allow_subdomains parameter should be set to false;
otherwise, the content of allowed_subdomains field will be ignored and the results will be returned for all subdomains

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`allowed_subdomains`](../interfaces/IOnPageTaskRequestInfo.md#allowed_subdomains)

#### Defined in

<<<<<<< HEAD
main.ts:136609
=======
main.ts:136642
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### browser\_preset?

> `optional` **browser\_preset**: `string`

preset for browser screen parameters
optional field
if you use this field, you don’t need to indicate browser_screen_width, browser_screen_height, browser_screen_scale_factorpossible values:
desktop, mobile, tabletdesktop preset will apply the following values:browser_screen_width: 1920
browser_screen_height: 1080
browser_screen_scale_factor: 1mobile preset will apply the following values:browser_screen_width: 390
browser_screen_height: 844
browser_screen_scale_factor: 3tablet preset will apply the following values:browser_screen_width: 1024
browser_screen_height: 1366
browser_screen_scale_factor: 2
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`browser_preset`](../interfaces/IOnPageTaskRequestInfo.md#browser_preset)

#### Defined in

<<<<<<< HEAD
main.ts:136503
=======
main.ts:136536
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### browser\_screen\_height?

> `optional` **browser\_screen\_height**: `number`

browser screen height
optional field
you can set a custom browser screen height to perform an audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value, in pixels: 240
maximum value, in pixels: 9999

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`browser_screen_height`](../interfaces/IOnPageTaskRequestInfo.md#browser_screen_height)

#### Defined in

<<<<<<< HEAD
main.ts:136517
=======
main.ts:136550
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### browser\_screen\_scale\_factor?

> `optional` **browser\_screen\_scale\_factor**: `number`

browser screen scale factor
optional field
you can set a custom browser screen resolution ratio to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value: 0.5
maximum value: 3

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`browser_screen_scale_factor`](../interfaces/IOnPageTaskRequestInfo.md#browser_screen_scale_factor)

#### Defined in

<<<<<<< HEAD
main.ts:136524
=======
main.ts:136557
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### browser\_screen\_width?

> `optional` **browser\_screen\_width**: `number`

browser screen width
optional field
you can set a custom browser screen width to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value, in pixels: 240
maximum value, in pixels: 9999

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`browser_screen_width`](../interfaces/IOnPageTaskRequestInfo.md#browser_screen_width)

#### Defined in

<<<<<<< HEAD
main.ts:136510
=======
main.ts:136543
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### calculate\_keyword\_density?

> `optional` **calculate\_keyword\_density**: `boolean`

calculate keyword density for the target domain
optional field
set to true if you want to calculate keyword density for website pages
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article
once the crawl is completed, you can obtain keyword density values with the Keyword Density endpoint

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`calculate_keyword_density`](../interfaces/IOnPageTaskRequestInfo.md#calculate_keyword_density)

#### Defined in

<<<<<<< HEAD
main.ts:136639
=======
main.ts:136672
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### check\_spell?

> `optional` **check\_spell**: `boolean`

check spelling
optional field
set to true to check spelling on a website using Hunspell library
default value: false

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`check_spell`](../interfaces/IOnPageTaskRequestInfo.md#check_spell)

#### Defined in

<<<<<<< HEAD
main.ts:136620
=======
main.ts:136653
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### check\_spell\_exceptions?

> `optional` **check\_spell\_exceptions**: `string`[]

words excluded from spell check
optional field
specify the words that you want to exclude from spell check
maximum word length: 100 characters
maximum amount of words: 1000
example: "SERP", "minifiers", "JavaScript"

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`check_spell_exceptions`](../interfaces/IOnPageTaskRequestInfo.md#check_spell_exceptions)

#### Defined in

<<<<<<< HEAD
main.ts:136632
=======
main.ts:136665
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### check\_spell\_language?

> `optional` **check\_spell\_language**: `string`

language of the spell check
optional field
supported languages: ‘hy’, ‘eu’, ‘bg’, ‘ca’, ‘hr’, ‘cs’, ‘da’, ‘nl’, ‘en’, ‘eo’, ‘et’, ‘fo’, ‘fa’, ‘fr’, ‘fy’, ‘gl’, ‘ka’, ‘de’, ‘el’, ‘he’, ‘hu’, ‘is’, ‘ia’, ‘ga’, ‘it’, ‘rw’, ‘la’, ‘lv’, ‘lt’, ‘mk’, ‘mn’, ‘ne’, ‘nb’, ‘nn’, ‘pl’, ‘pt’, ‘ro’, ‘gd’, ‘sr’, ‘sk’, ‘sl’, ‘es’, ‘sv’, ‘tr’, ‘tk’, ‘uk’, ‘vi’
Note: if no language is specified, it will be set automatically based on page content

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`check_spell_language`](../interfaces/IOnPageTaskRequestInfo.md#check_spell_language)

#### Defined in

<<<<<<< HEAD
main.ts:136625
=======
main.ts:136658
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### checks\_threshold?

> `optional` **checks\_threshold**: `object`

custom threshold values for checks
optional field
you can specify custom threshold values for the parameters included in the checks object of OnPage API responses;
Note: only integer threshold values can be modified;
for example, the high_loading_time and large_page_size parameters are set to 3 seconds and 1 megabyte respectively by default;
if you want to change these thresholds to 1 second and 1000 kbytes, use the following snippet:
"checks_threshold": {
"high_loading_time": 1,
"large_page_size": 1000
}available customizable parameters with default values:
"title_too_short", default value: 30, type: "int"
"title_too_long", default value: 65, type: "int"
"small_page_size", default value: 1024, type: "int"
"large_page_size", default value: 1048576 (1024 * 1024), type: "int"
"low_character_count", default value: 1024, type: "int"
"high_character_count", default value: 256000 (250 * 1024), type: "int"
"low_content_rate", default value: 0.1, type: "float"
"high_content_rate", default value: 0.9, type: "float"
"high_loading_time", default value: 3000, type: "int"
"high_waiting_time", default value: 1500, type: "int"
"low_readability_rate", default value: 15.0, type: "float"
"irrelevant_description", default value: 0.2, type: "float"
"irrelevant_title", default value: 0.3, type: "float"
"irrelevant_meta_keywords", default value: 0.6, type: "float"

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`checks_threshold`](../interfaces/IOnPageTaskRequestInfo.md#checks_threshold)

#### Defined in

<<<<<<< HEAD
main.ts:136664
=======
main.ts:136697
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### crawl\_delay?

> `optional` **crawl\_delay**: `number`

delay between hits, ms
optional field
the custom delay between crawler hits to the server
default value: 2000

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`crawl_delay`](../interfaces/IOnPageTaskRequestInfo.md#crawl_delay)

#### Defined in

<<<<<<< HEAD
main.ts:136453
=======
main.ts:136486
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### crawl\_sitemap\_only?

> `optional` **crawl\_sitemap\_only**: `boolean`

crawl only pages indicated in the sitemap
optional field
set to true if you want to crawl only the pages indicated in the sitemap
if you set this parameter to true and do not specify custom_sitemap, we will crawl the default sitemap
default value: false
Note: if you want to use this parameter, respect_sitemap should be true

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`crawl_sitemap_only`](../interfaces/IOnPageTaskRequestInfo.md#crawl_sitemap_only)

#### Defined in

<<<<<<< HEAD
main.ts:136543
=======
main.ts:136576
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### custom\_js?

> `optional` **custom\_js**: `string`

custom javascript
optional field
Note that the execution time for the script you enter here should be 700 ms maximum, for example, you can use the following JS snippet to check if the website contains Google Tag Manager as a scr attribute:
let meta = { haveGoogleAnalytics: false, haveTagManager: false };\r\nfor (var i = 0; i < document.scripts.length; i++) {\r\n let src = document.scripts[i].getAttribute(\"src\");\r\n if (src != undefined) {\r\n if (src.indexOf(\"analytics.js\") >= 0)\r\n      meta.haveGoogleAnalytics = true;\r\n\tif (src.indexOf(\"gtm.js\") >= 0)\r\n      meta.haveTagManager = true;\r\n  }\r\n}\r\nmeta;the returned value depends on what you specified in this field. For instance, if you specify the following script:
meta = {}; meta.url = document.URL; meta.test = 'test'; meta;
as a response you will receive the following data:
"custom_js_response": {
"url": "https://dataforseo.com/",
"test": "test"
}
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`custom_js`](../interfaces/IOnPageTaskRequestInfo.md#custom_js)

#### Defined in

<<<<<<< HEAD
main.ts:136592
=======
main.ts:136625
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### custom\_robots\_txt?

> `optional` **custom\_robots\_txt**: `string`

custom robots.txt settings
optional field
example: Disallow: /directory1/

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`custom_robots_txt`](../interfaces/IOnPageTaskRequestInfo.md#custom_robots_txt)

#### Defined in

<<<<<<< HEAD
main.ts:136477
=======
main.ts:136510
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### custom\_sitemap?

> `optional` **custom\_sitemap**: `string`

custom sitemap url
optional field
the URL of the page where the alternative sitemap is located
Note: if you want to use this parameter, respect_sitemap should be true

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`custom_sitemap`](../interfaces/IOnPageTaskRequestInfo.md#custom_sitemap)

#### Defined in

<<<<<<< HEAD
main.ts:136536
=======
main.ts:136569
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### custom\_user\_agent?

> `optional` **custom\_user\_agent**: `string`

custom user agent
optional field
custom user agent for crawling a website
example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36

default value: Mozilla/5.0 (compatible; RSiteAuditor)

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`custom_user_agent`](../interfaces/IOnPageTaskRequestInfo.md#custom_user_agent)

#### Defined in

<<<<<<< HEAD
main.ts:136491
=======
main.ts:136524
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### disable\_cookie\_popup?

> `optional` **disable\_cookie\_popup**: `boolean`

disable the cookie popup
optional field
set to true if you want to disable the popup requesting cookie consent from the user;
default value:
false

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`disable_cookie_popup`](../interfaces/IOnPageTaskRequestInfo.md#disable_cookie_popup)

#### Defined in

<<<<<<< HEAD
main.ts:136580
=======
main.ts:136613
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### disable\_page\_checks?

> `optional` **disable\_page\_checks**: `string`[]

prevent certain page checks from running
optional field
specify certain checks to prevent them from running and impacting the onpage_scoreexample:
"disable_page_checks": ["is_5xx_code", "is_4xx_code"]

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`disable_page_checks`](../interfaces/IOnPageTaskRequestInfo.md#disable_page_checks)

#### Defined in

<<<<<<< HEAD
main.ts:136678
=======
main.ts:136711
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### disable\_sitewide\_checks?

> `optional` **disable\_sitewide\_checks**: `string`[]

prevent certain sitewide checks from running
optional field
specify the following checks to prevent them from running on the target website:
"test_page_not_found"
"test_canonicalization"
"test_https_redirect"
"test_directory_browsing"example:
"disable_sitewide_checks": ["test_directory_browsing", "test_page_not_found"]learn more on our help center

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`disable_sitewide_checks`](../interfaces/IOnPageTaskRequestInfo.md#disable_sitewide_checks)

#### Defined in

<<<<<<< HEAD
main.ts:136673
=======
main.ts:136706
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### disallowed\_subdomains?

> `optional` **disallowed\_subdomains**: `string`[]

subdomains not to crawl
optional field
specify subdomains that you don’t want to crawl
example: ["status.site.com", "docs.site.com"]
Note: to use this parameter, the allow_subdomains parameter should be set to true

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`disallowed_subdomains`](../interfaces/IOnPageTaskRequestInfo.md#disallowed_subdomains)

#### Defined in

<<<<<<< HEAD
main.ts:136615
=======
main.ts:136648
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### enable\_browser\_rendering?

> `optional` **enable\_browser\_rendering**: `boolean`

emulate browser rendering to measure Core Web Vitals
optional field
by using this parameter you will be able to emulate a browser when loading a web page;
enable_browser_rendering loads styles, images, fonts, animations, videos, and other resources on a page;
default value: false
set to true to obtain Core Web Vitals (FID, CLS, LCP) metrics in the response;
if you use this field, enable_javascript, and load_resources parameters must be set to true
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`enable_browser_rendering`](../interfaces/IOnPageTaskRequestInfo.md#enable_browser_rendering)

#### Defined in

<<<<<<< HEAD
main.ts:136574
=======
main.ts:136607
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### enable\_content\_parsing?

> `optional` **enable\_content\_parsing**: `boolean`

parse content on crawled pages
optional field
set to true to use the OnPage Content Parsing endpoint
default value: false

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`enable_content_parsing`](../interfaces/IOnPageTaskRequestInfo.md#enable_content_parsing)

#### Defined in

<<<<<<< HEAD
main.ts:136463
=======
main.ts:136496
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### enable\_javascript?

> `optional` **enable\_javascript**: `boolean`

load javascript on a page
optional field
set to true if you want to load the scripts available on a page
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`enable_javascript`](../interfaces/IOnPageTaskRequestInfo.md#enable_javascript)

#### Defined in

<<<<<<< HEAD
main.ts:136560
=======
main.ts:136593
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### enable\_www\_redirect\_check?

> `optional` **enable\_www\_redirect\_check**: `boolean`

check if the domain implemented the www redirection
optional field
set to true if you want to check if the requested domain implemented the www to non-www redirect;
default value: false

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`enable_www_redirect_check`](../interfaces/IOnPageTaskRequestInfo.md#enable_www_redirect_check)

#### Defined in

<<<<<<< HEAD
main.ts:136554
=======
main.ts:136587
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### enable\_xhr?

> `optional` **enable\_xhr**: `boolean`

enable XMLHttpRequest on a page
optional field
set to true if you want our crawler to request data from a web server using the XMLHttpRequest object
default value: false;if you use this field, enable_javascript must be set to true;

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`enable_xhr`](../interfaces/IOnPageTaskRequestInfo.md#enable_xhr)

#### Defined in

<<<<<<< HEAD
main.ts:136565
=======
main.ts:136598
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### force\_sitewide\_checks?

> `optional` **force\_sitewide\_checks**: `boolean`

enable sitewide checks when crawling a single page
optional field
set to true to get data on sitewide checks when crawling a single page;
default value: false

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`force_sitewide_checks`](../interfaces/IOnPageTaskRequestInfo.md#force_sitewide_checks)

#### Defined in

<<<<<<< HEAD
main.ts:136431
=======
main.ts:136464
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### load\_resources?

> `optional` **load\_resources**: `boolean`

load resources
optional field
set to true if you want to load image, stylesheets, scripts, and broken resources
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`load_resources`](../interfaces/IOnPageTaskRequestInfo.md#load_resources)

#### Defined in

<<<<<<< HEAD
main.ts:136549
=======
main.ts:136582
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### max\_crawl\_depth?

> `optional` **max\_crawl\_depth**: `number`

crawl depth
optional field
the linking depth of the pages to crawl;
for example, starting page of the crawl is level 0, pages that have links from that page are level 1, etc.

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`max_crawl_depth`](../interfaces/IOnPageTaskRequestInfo.md#max_crawl_depth)

#### Defined in

<<<<<<< HEAD
main.ts:136448
=======
main.ts:136481
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

crawled pages limit
required field
the number of pages to crawl on the specified domain
Note:
if you set max_crawl_pages to 1 and do not specify start_url or set a homepage in it, the following sitewide checks will be disabled:
test_canonicalization, enable_www_redirect_check, test_hidden_server_signature, test_page_not_found, test_directory_browsing, test_https_redirect
to enable them anyway, set force_sitewide_checks to trueif you set max_crawl_pages to 1 and specify start_url other than a homepage, all sitewide checks will be disabled;
to enable them anyway, set force_sitewide_checks to true

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`max_crawl_pages`](../interfaces/IOnPageTaskRequestInfo.md#max_crawl_pages)

#### Defined in

<<<<<<< HEAD
main.ts:136420
=======
main.ts:136453
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`pingback_url`](../interfaces/IOnPageTaskRequestInfo.md#pingback_url)

#### Defined in

<<<<<<< HEAD
main.ts:136704
=======
main.ts:136737
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### priority\_urls?

> `optional` **priority\_urls**: `string`[]

urls to be crawled bypassing the queue
optional field
URLs specified in this array will be crawled in the first instance, bypassing the crawling queue;
Note: you should specify the absolute URL;
you can specify up to 20 URLs;
all URLs in the array must belong to the target domain;
subdomains will be ignored unless the allow_subdomains parameter is set to trueexample:
"priority_urls": [
"https://dataforseo.com/apis/serp-api",
"https://dataforseo.com/contact"
]

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`priority_urls`](../interfaces/IOnPageTaskRequestInfo.md#priority_urls)

#### Defined in

<<<<<<< HEAD
main.ts:136443
=======
main.ts:136476
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### respect\_sitemap?

> `optional` **respect\_sitemap**: `boolean`

respect sitemap when crawling
optional field
set to true if you want to follow the order of pages indicated in the primary sitemap when crawling;
default value: false
Note: if set to true, the click_depth value in the API response will equal 0;
the max_crawl_depth field of the request will be ignored, you can specify the number of pages to crawl using the max_crawl_pages parameter

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`respect_sitemap`](../interfaces/IOnPageTaskRequestInfo.md#respect_sitemap)

#### Defined in

<<<<<<< HEAD
main.ts:136531
=======
main.ts:136564
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### return\_despite\_timeout?

> `optional` **return\_despite\_timeout**: `boolean`

return data on pages despite the timeout error
optional field
if true, the data will be provided on pages that failed to load within 120 seconds and responded with a timeout error;
default value: false

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`return_despite_timeout`](../interfaces/IOnPageTaskRequestInfo.md#return_despite_timeout)

#### Defined in

<<<<<<< HEAD
main.ts:136688
=======
main.ts:136721
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### robots\_txt\_merge\_mode?

> `optional` **robots\_txt\_merge\_mode**: `string`

merge with or override robots.txt settings
optional field
possible values: merge, override;
set to override if you want to ignore website crawling restrictions and other robots.txt settings
default value: merge;
Note: if set to override, specify the custom_robots_txt parameter

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`robots_txt_merge_mode`](../interfaces/IOnPageTaskRequestInfo.md#robots_txt_merge_mode)

#### Defined in

<<<<<<< HEAD
main.ts:136484
=======
main.ts:136517
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### start\_url?

> `optional` **start\_url**: `string`

the first url to crawl 
optional field
Note: you should specify an absolute URL
if you want to crawl a single page, specify its URL in this field and additionally set the max_crawl_pages parameter to 1
you can also use the live Instant Pages endpoint to get page-specific data

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`start_url`](../interfaces/IOnPageTaskRequestInfo.md#start_url)

#### Defined in

<<<<<<< HEAD
main.ts:136426
=======
main.ts:136459
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### store\_raw\_html?

> `optional` **store\_raw\_html**: `boolean`

store HTML of crawled pages
optional field
set to true if you want to get the HTML of the page using the OnPage Raw HTML endpoint
default value: false

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`store_raw_html`](../interfaces/IOnPageTaskRequestInfo.md#store_raw_html)

#### Defined in

<<<<<<< HEAD
main.ts:136458
=======
main.ts:136491
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### support\_cookies?

> `optional` **support\_cookies**: `boolean`

support cookies on crawled pages
optional field
set to true to support cookies when crawling the pages
default value: false

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`support_cookies`](../interfaces/IOnPageTaskRequestInfo.md#support_cookies)

#### Defined in

<<<<<<< HEAD
main.ts:136468
=======
main.ts:136501
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### switch\_pool?

> `optional` **switch\_pool**: `boolean`

switch proxy pool
optional field
if true, additional proxy pools will be used to obtain the requested data;
the parameter can be used if a multitude of tasks is set simultaneously, resulting in occasional rate-limit and/or site_unreachable errors

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`switch_pool`](../interfaces/IOnPageTaskRequestInfo.md#switch_pool)

#### Defined in

<<<<<<< HEAD
main.ts:136683
=======
main.ts:136716
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`tag`](../interfaces/IOnPageTaskRequestInfo.md#tag)

#### Defined in

<<<<<<< HEAD
main.ts:136694
=======
main.ts:136727
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### target?

> `optional` **target**: `string`

target domain
required field
domain name should be specified without https:// and www.
if you specify the page URL, the results will be returned for the domain included in the URL

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`target`](../interfaces/IOnPageTaskRequestInfo.md#target)

#### Defined in

<<<<<<< HEAD
main.ts:136411
=======
main.ts:136444
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### validate\_micromarkup?

> `optional` **validate\_micromarkup**: `boolean`

enable microdata validation
optional field
set to true if you want to use the OnPage API Microdata endpoint
default value: false

#### Implementation of

[`IOnPageTaskRequestInfo`](../interfaces/IOnPageTaskRequestInfo.md).[`validate_micromarkup`](../interfaces/IOnPageTaskRequestInfo.md#validate_micromarkup)

#### Defined in

<<<<<<< HEAD
main.ts:136597
=======
main.ts:136630
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
main.ts:136717
=======
main.ts:136750
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

<<<<<<< HEAD
main.ts:136806
=======
main.ts:136839
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageTaskRequestInfo`](OnPageTaskRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageTaskRequestInfo`](OnPageTaskRequestInfo.md)

#### Defined in

<<<<<<< HEAD
main.ts:136799
=======
main.ts:136832
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be
