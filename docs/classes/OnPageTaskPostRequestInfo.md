[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageTaskPostRequestInfo

# Class: OnPageTaskPostRequestInfo

Defined in: main.ts:164272

## Implements

- [`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageTaskPostRequestInfo()

> **new OnPageTaskPostRequestInfo**(`data`?): [`OnPageTaskPostRequestInfo`](OnPageTaskPostRequestInfo.md)

Defined in: main.ts:164576

#### Parameters

##### data?

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md)

#### Returns

[`OnPageTaskPostRequestInfo`](OnPageTaskPostRequestInfo.md)

## Properties

### accept\_language?

> `optional` **accept\_language**: `string`

Defined in: main.ts:164339

language header for accessing the website
optional field
all locale formats are supported (xx, xx-XX, xxx-XX, etc.)
Note: if you do not specify this parameter, some websites may deny access; in this case, pages will be returned with the "type":"broken in the response array

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`accept_language`](../interfaces/IOnPageTaskPostRequestInfo.md#accept_language)

***

### allow\_subdomains?

> `optional` **allow\_subdomains**: `boolean`

Defined in: main.ts:164469

include pages on subdomains
optional field
set to true if you want to crawl all subdomains of a target website
default value: false

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`allow_subdomains`](../interfaces/IOnPageTaskPostRequestInfo.md#allow_subdomains)

***

### allowed\_subdomains?

> `optional` **allowed\_subdomains**: `string`[]

Defined in: main.ts:164476

subdomains to crawl
optional field
specify subdomains that you want to crawl
example: ["blog.site.com", "my.site.com", "shop.site.com"]
Note: to use this parameter, the allow_subdomains parameter should be set to false;
otherwise, the content of allowed_subdomains field will be ignored and the results will be returned for all subdomains

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`allowed_subdomains`](../interfaces/IOnPageTaskPostRequestInfo.md#allowed_subdomains)

***

### browser\_preset?

> `optional` **browser\_preset**: `string`

Defined in: main.ts:164369

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

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`browser_preset`](../interfaces/IOnPageTaskPostRequestInfo.md#browser_preset)

***

### browser\_screen\_height?

> `optional` **browser\_screen\_height**: `number`

Defined in: main.ts:164383

browser screen height
optional field
you can set a custom browser screen height to perform an audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value, in pixels: 240
maximum value, in pixels: 9999

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`browser_screen_height`](../interfaces/IOnPageTaskPostRequestInfo.md#browser_screen_height)

***

### browser\_screen\_scale\_factor?

> `optional` **browser\_screen\_scale\_factor**: `number`

Defined in: main.ts:164390

browser screen scale factor
optional field
you can set a custom browser screen resolution ratio to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value: 0.5
maximum value: 3

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`browser_screen_scale_factor`](../interfaces/IOnPageTaskPostRequestInfo.md#browser_screen_scale_factor)

***

### browser\_screen\_width?

> `optional` **browser\_screen\_width**: `number`

Defined in: main.ts:164376

browser screen width
optional field
you can set a custom browser screen width to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value, in pixels: 240
maximum value, in pixels: 9999

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`browser_screen_width`](../interfaces/IOnPageTaskPostRequestInfo.md#browser_screen_width)

***

### calculate\_keyword\_density?

> `optional` **calculate\_keyword\_density**: `boolean`

Defined in: main.ts:164506

calculate keyword density for the target domain
optional field
set to true if you want to calculate keyword density for website pages
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article
once the crawl is completed, you can obtain keyword density values with the Keyword Density endpoint

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`calculate_keyword_density`](../interfaces/IOnPageTaskPostRequestInfo.md#calculate_keyword_density)

***

### check\_spell?

> `optional` **check\_spell**: `boolean`

Defined in: main.ts:164487

check spelling
optional field
set to true to check spelling on a website using Hunspell library
default value: false

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`check_spell`](../interfaces/IOnPageTaskPostRequestInfo.md#check_spell)

***

### check\_spell\_exceptions?

> `optional` **check\_spell\_exceptions**: `string`[]

Defined in: main.ts:164499

words excluded from spell check
optional field
specify the words that you want to exclude from spell check
maximum word length: 100 characters
maximum amount of words: 1000
example: "SERP", "minifiers", "JavaScript"

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`check_spell_exceptions`](../interfaces/IOnPageTaskPostRequestInfo.md#check_spell_exceptions)

***

### check\_spell\_language?

> `optional` **check\_spell\_language**: `string`

Defined in: main.ts:164492

language of the spell check
optional field
supported languages: ‘hy’, ‘eu’, ‘bg’, ‘ca’, ‘hr’, ‘cs’, ‘da’, ‘nl’, ‘en’, ‘eo’, ‘et’, ‘fo’, ‘fa’, ‘fr’, ‘fy’, ‘gl’, ‘ka’, ‘de’, ‘el’, ‘he’, ‘hu’, ‘is’, ‘ia’, ‘ga’, ‘it’, ‘rw’, ‘la’, ‘lv’, ‘lt’, ‘mk’, ‘mn’, ‘ne’, ‘nb’, ‘nn’, ‘pl’, ‘pt’, ‘ro’, ‘gd’, ‘sr’, ‘sk’, ‘sl’, ‘es’, ‘sv’, ‘tr’, ‘tk’, ‘uk’, ‘vi’
Note: if no language is specified, it will be set automatically based on page content

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`check_spell_language`](../interfaces/IOnPageTaskPostRequestInfo.md#check_spell_language)

***

### checks\_threshold?

> `optional` **checks\_threshold**: `object`

Defined in: main.ts:164531

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

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`checks_threshold`](../interfaces/IOnPageTaskPostRequestInfo.md#checks_threshold)

***

### crawl\_delay?

> `optional` **crawl\_delay**: `number`

Defined in: main.ts:164319

delay between hits, ms
optional field
the custom delay between crawler hits to the server
default value: 2000

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`crawl_delay`](../interfaces/IOnPageTaskPostRequestInfo.md#crawl_delay)

***

### crawl\_sitemap\_only?

> `optional` **crawl\_sitemap\_only**: `boolean`

Defined in: main.ts:164409

crawl only pages indicated in the sitemap
optional field
set to true if you want to crawl only the pages indicated in the sitemap
if you set this parameter to true and do not specify custom_sitemap, we will crawl the default sitemap
default value: false
Note: if you want to use this parameter, respect_sitemap should be true

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`crawl_sitemap_only`](../interfaces/IOnPageTaskPostRequestInfo.md#crawl_sitemap_only)

***

### custom\_js?

> `optional` **custom\_js**: `string`

Defined in: main.ts:164459

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
Note: the length of the script you enter must be no more than 2000 characters
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`custom_js`](../interfaces/IOnPageTaskPostRequestInfo.md#custom_js)

***

### custom\_robots\_txt?

> `optional` **custom\_robots\_txt**: `string`

Defined in: main.ts:164343

custom robots.txt settings
optional field
example: Disallow: /directory1/

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`custom_robots_txt`](../interfaces/IOnPageTaskPostRequestInfo.md#custom_robots_txt)

***

### custom\_sitemap?

> `optional` **custom\_sitemap**: `string`

Defined in: main.ts:164402

custom sitemap url
optional field
the URL of the page where the alternative sitemap is located
Note: if you want to use this parameter, respect_sitemap should be true

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`custom_sitemap`](../interfaces/IOnPageTaskPostRequestInfo.md#custom_sitemap)

***

### custom\_user\_agent?

> `optional` **custom\_user\_agent**: `string`

Defined in: main.ts:164357

custom user agent
optional field
custom user agent for crawling a website
example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36

default value: Mozilla/5.0 (compatible; RSiteAuditor)

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`custom_user_agent`](../interfaces/IOnPageTaskPostRequestInfo.md#custom_user_agent)

***

### disable\_cookie\_popup?

> `optional` **disable\_cookie\_popup**: `boolean`

Defined in: main.ts:164446

disable the cookie popup
optional field
set to true if you want to disable the popup requesting cookie consent from the user;
default value:
false

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`disable_cookie_popup`](../interfaces/IOnPageTaskPostRequestInfo.md#disable_cookie_popup)

***

### disable\_page\_checks?

> `optional` **disable\_page\_checks**: `string`[]

Defined in: main.ts:164545

prevent certain page checks from running
optional field
specify certain checks to prevent them from running and impacting the onpage_scoreexample:
"disable_page_checks": ["is_5xx_code", "is_4xx_code"]

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`disable_page_checks`](../interfaces/IOnPageTaskPostRequestInfo.md#disable_page_checks)

***

### disable\_sitewide\_checks?

> `optional` **disable\_sitewide\_checks**: `string`[]

Defined in: main.ts:164540

prevent certain sitewide checks from running
optional field
specify the following checks to prevent them from running on the target website:
"test_page_not_found"
"test_canonicalization"
"test_https_redirect"
"test_directory_browsing"example:
"disable_sitewide_checks": ["test_directory_browsing", "test_page_not_found"]learn more on our help center

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`disable_sitewide_checks`](../interfaces/IOnPageTaskPostRequestInfo.md#disable_sitewide_checks)

***

### disallowed\_subdomains?

> `optional` **disallowed\_subdomains**: `string`[]

Defined in: main.ts:164482

subdomains not to crawl
optional field
specify subdomains that you don’t want to crawl
example: ["status.site.com", "docs.site.com"]
Note: to use this parameter, the allow_subdomains parameter should be set to true

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`disallowed_subdomains`](../interfaces/IOnPageTaskPostRequestInfo.md#disallowed_subdomains)

***

### enable\_browser\_rendering?

> `optional` **enable\_browser\_rendering**: `boolean`

Defined in: main.ts:164440

emulate browser rendering to measure Core Web Vitals
optional field
by using this parameter you will be able to emulate a browser when loading a web page;
enable_browser_rendering loads styles, images, fonts, animations, videos, and other resources on a page;
default value: false
set to true to obtain Core Web Vitals (FID, CLS, LCP) metrics in the response;
if you use this field, enable_javascript, and load_resources parameters must be set to true
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`enable_browser_rendering`](../interfaces/IOnPageTaskPostRequestInfo.md#enable_browser_rendering)

***

### enable\_content\_parsing?

> `optional` **enable\_content\_parsing**: `boolean`

Defined in: main.ts:164329

parse content on crawled pages
optional field
set to true to use the OnPage Content Parsing endpoint
default value: false

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`enable_content_parsing`](../interfaces/IOnPageTaskPostRequestInfo.md#enable_content_parsing)

***

### enable\_javascript?

> `optional` **enable\_javascript**: `boolean`

Defined in: main.ts:164426

load javascript on a page
optional field
set to true if you want to load the scripts available on a page
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`enable_javascript`](../interfaces/IOnPageTaskPostRequestInfo.md#enable_javascript)

***

### enable\_www\_redirect\_check?

> `optional` **enable\_www\_redirect\_check**: `boolean`

Defined in: main.ts:164420

check if the domain implemented the www redirection
optional field
set to true if you want to check if the requested domain implemented the www to non-www redirect;
default value: false

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`enable_www_redirect_check`](../interfaces/IOnPageTaskPostRequestInfo.md#enable_www_redirect_check)

***

### enable\_xhr?

> `optional` **enable\_xhr**: `boolean`

Defined in: main.ts:164431

enable XMLHttpRequest on a page
optional field
set to true if you want our crawler to request data from a web server using the XMLHttpRequest object
default value: false;if you use this field, enable_javascript must be set to true;

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`enable_xhr`](../interfaces/IOnPageTaskPostRequestInfo.md#enable_xhr)

***

### force\_sitewide\_checks?

> `optional` **force\_sitewide\_checks**: `boolean`

Defined in: main.ts:164297

enable sitewide checks when crawling a single page
optional field
set to true to get data on sitewide checks when crawling a single page;
default value: false

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`force_sitewide_checks`](../interfaces/IOnPageTaskPostRequestInfo.md#force_sitewide_checks)

***

### load\_resources?

> `optional` **load\_resources**: `boolean`

Defined in: main.ts:164415

load resources
optional field
set to true if you want to load image, stylesheets, scripts, and broken resources
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`load_resources`](../interfaces/IOnPageTaskPostRequestInfo.md#load_resources)

***

### max\_crawl\_depth?

> `optional` **max\_crawl\_depth**: `number`

Defined in: main.ts:164314

crawl depth
optional field
the linking depth of the pages to crawl;
for example, starting page of the crawl is level 0, pages that have links from that page are level 1, etc.

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`max_crawl_depth`](../interfaces/IOnPageTaskPostRequestInfo.md#max_crawl_depth)

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

Defined in: main.ts:164286

crawled pages limit
required field
the number of pages to crawl on the specified domain
Note:
if you set max_crawl_pages to 1 and do not specify start_url or set a homepage in it, the following sitewide checks will be disabled:
test_canonicalization, enable_www_redirect_check, test_hidden_server_signature, test_page_not_found, test_directory_browsing, test_https_redirect
to enable them anyway, set force_sitewide_checks to trueif you set max_crawl_pages to 1 and specify start_url other than a homepage, all sitewide checks will be disabled;
to enable them anyway, set force_sitewide_checks to true

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`max_crawl_pages`](../interfaces/IOnPageTaskPostRequestInfo.md#max_crawl_pages)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:164572

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IOnPageTaskPostRequestInfo.md#pingback_url)

***

### priority\_urls?

> `optional` **priority\_urls**: `string`[]

Defined in: main.ts:164309

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

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`priority_urls`](../interfaces/IOnPageTaskPostRequestInfo.md#priority_urls)

***

### respect\_sitemap?

> `optional` **respect\_sitemap**: `boolean`

Defined in: main.ts:164397

respect sitemap when crawling
optional field
set to true if you want to follow the order of pages indicated in the primary sitemap when crawling;
default value: false
Note: if set to true, the click_depth value in the API response will equal 0;
the max_crawl_depth field of the request will be ignored, you can specify the number of pages to crawl using the max_crawl_pages parameter

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`respect_sitemap`](../interfaces/IOnPageTaskPostRequestInfo.md#respect_sitemap)

***

### return\_despite\_timeout?

> `optional` **return\_despite\_timeout**: `boolean`

Defined in: main.ts:164555

return data on pages despite the timeout error
optional field
if true, the data will be provided on pages that failed to load within 120 seconds and responded with a timeout error;
default value: false

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`return_despite_timeout`](../interfaces/IOnPageTaskPostRequestInfo.md#return_despite_timeout)

***

### robots\_txt\_merge\_mode?

> `optional` **robots\_txt\_merge\_mode**: `string`

Defined in: main.ts:164350

merge with or override robots.txt settings
optional field
possible values: merge, override;
set to override if you want to ignore website crawling restrictions and other robots.txt settings
default value: merge;
Note: if set to override, specify the custom_robots_txt parameter

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`robots_txt_merge_mode`](../interfaces/IOnPageTaskPostRequestInfo.md#robots_txt_merge_mode)

***

### start\_url?

> `optional` **start\_url**: `string`

Defined in: main.ts:164292

the first url to crawl 
optional field
Note: you should specify an absolute URL
if you want to crawl a single page, specify its URL in this field and additionally set the max_crawl_pages parameter to 1
you can also use the live Instant Pages endpoint to get page-specific data

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`start_url`](../interfaces/IOnPageTaskPostRequestInfo.md#start_url)

***

### store\_raw\_html?

> `optional` **store\_raw\_html**: `boolean`

Defined in: main.ts:164324

store HTML of crawled pages
optional field
set to true if you want to get the HTML of the page using the OnPage Raw HTML endpoint
default value: false

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`store_raw_html`](../interfaces/IOnPageTaskPostRequestInfo.md#store_raw_html)

***

### support\_cookies?

> `optional` **support\_cookies**: `boolean`

Defined in: main.ts:164334

support cookies on crawled pages
optional field
set to true to support cookies when crawling the pages
default value: false

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`support_cookies`](../interfaces/IOnPageTaskPostRequestInfo.md#support_cookies)

***

### switch\_pool?

> `optional` **switch\_pool**: `boolean`

Defined in: main.ts:164550

switch proxy pool
optional field
if true, additional proxy pools will be used to obtain the requested data;
the parameter can be used if a multitude of tasks is set simultaneously, resulting in occasional rate-limit and/or site_unreachable errors

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`switch_pool`](../interfaces/IOnPageTaskPostRequestInfo.md#switch_pool)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:164561

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`tag`](../interfaces/IOnPageTaskPostRequestInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:164277

target domain
required field
domain name should be specified without https:// and www.
if you specify the page URL, the results will be returned for the domain included in the URL

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`target`](../interfaces/IOnPageTaskPostRequestInfo.md#target)

***

### validate\_micromarkup?

> `optional` **validate\_micromarkup**: `boolean`

Defined in: main.ts:164464

enable microdata validation
optional field
set to true if you want to use the OnPage API Microdata endpoint
default value: false

#### Implementation of

[`IOnPageTaskPostRequestInfo`](../interfaces/IOnPageTaskPostRequestInfo.md).[`validate_micromarkup`](../interfaces/IOnPageTaskPostRequestInfo.md#validate_micromarkup)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:164585

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:164674

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageTaskPostRequestInfo`](OnPageTaskPostRequestInfo.md)

Defined in: main.ts:164667

#### Parameters

##### data

`any`

#### Returns

[`OnPageTaskPostRequestInfo`](OnPageTaskPostRequestInfo.md)
