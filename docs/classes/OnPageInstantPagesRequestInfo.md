[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageInstantPagesRequestInfo

# Class: OnPageInstantPagesRequestInfo

Defined in: main.ts:174656

## Implements

- [`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageInstantPagesRequestInfo()

> **new OnPageInstantPagesRequestInfo**(`data`?): [`OnPageInstantPagesRequestInfo`](OnPageInstantPagesRequestInfo.md)

Defined in: main.ts:174795

#### Parameters

##### data?

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md)

#### Returns

[`OnPageInstantPagesRequestInfo`](OnPageInstantPagesRequestInfo.md)

## Properties

### accept\_language?

> `optional` **accept\_language**: `string`

Defined in: main.ts:174715

language header for accessing the website
optional field
all locale formats are supported (xx, xx-XX, xxx-XX, etc.)
Note: if you do not specify this parameter, some websites may deny access; in this case, pages will be returned with the "type":"broken in the response array

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`accept_language`](../interfaces/IOnPageInstantPagesRequestInfo.md#accept_language)

***

### browser\_preset?

> `optional` **browser\_preset**: `string`

Defined in: main.ts:174687

preset for browser screen parameters
optional field
if you use this field, you don’t need to indicate browser_screen_width, browser_screen_height, browser_screen_scale_factorpossible values:
desktop, mobile, tabletdesktop preset will apply the following values:
browser_screen_width: 1920
browser_screen_height: 1080
browser_screen_scale_factor: 1
mobile preset will apply the following values:
browser_screen_width: 390
browser_screen_height: 844
browser_screen_scale_factor: 3
tablet preset will apply the following values:
browser_screen_width: 1024
browser_screen_height: 1366
browser_screen_scale_factor: 2
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`browser_preset`](../interfaces/IOnPageInstantPagesRequestInfo.md#browser_preset)

***

### browser\_screen\_height?

> `optional` **browser\_screen\_height**: `number`

Defined in: main.ts:174699

browser screen height
optional field
you can set a custom browser screen height to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value, in pixels: 240
maximum value, in pixels: 9999

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`browser_screen_height`](../interfaces/IOnPageInstantPagesRequestInfo.md#browser_screen_height)

***

### browser\_screen\_scale\_factor?

> `optional` **browser\_screen\_scale\_factor**: `number`

Defined in: main.ts:174705

browser screen scale factor
optional field
you can set a custom browser screen resolution ratio to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value: 0.5
maximum value: 3

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`browser_screen_scale_factor`](../interfaces/IOnPageInstantPagesRequestInfo.md#browser_screen_scale_factor)

***

### browser\_screen\_width?

> `optional` **browser\_screen\_width**: `number`

Defined in: main.ts:174693

browser screen width
optional field
you can set a custom browser screen width to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value, in pixels: 240
maximum value, in pixels: 9999

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`browser_screen_width`](../interfaces/IOnPageInstantPagesRequestInfo.md#browser_screen_width)

***

### check\_spell?

> `optional` **check\_spell**: `boolean`

Defined in: main.ts:174775

check spelling
optional field
set to true to check spelling on a website using Hunspell library
default value: false

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`check_spell`](../interfaces/IOnPageInstantPagesRequestInfo.md#check_spell)

***

### checks\_threshold?

> `optional` **checks\_threshold**: `object`

Defined in: main.ts:174780

custom threshold values for checks
optional field
you can specify custom threshold values for the parameters included in the checks array of OnPage API responses;
Note: only integer threshold values can be modified;

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`checks_threshold`](../interfaces/IOnPageInstantPagesRequestInfo.md#checks_threshold)

***

### custom\_js?

> `optional` **custom\_js**: `string`

Defined in: main.ts:174765

custom javascript
optional fieldNote that the execution time for the script you enter here should be 700 ms maximum;
for example, you can use the following JS snippet to check if the website contains Google Tag Manager as a scr attribute:
let meta = { haveGoogleAnalytics: false, haveTagManager: false };\r\nfor (var i = 0; i < document.scripts.length; i++) {\r\n let src = document.scripts[i].getAttribute(\"src\");\r\n if (src != undefined) {\r\n if (src.indexOf(\"analytics.js\") >= 0)\r\n      meta.haveGoogleAnalytics = true;\r\n\tif (src.indexOf(\"gtm.js\") >= 0)\r\n      meta.haveTagManager = true;\r\n  }\r\n}\r\nmeta;the returned value depends on what you specified in this field. For instance, if you specify the following script:
meta = {}; meta.url = document.URL; meta.test = 'test'; meta;
as a response you will receive the following data:
"custom_js_response": {
"url": "https://dataforseo.com/",
"test": "test"
}
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`custom_js`](../interfaces/IOnPageInstantPagesRequestInfo.md#custom_js)

***

### custom\_user\_agent?

> `optional` **custom\_user\_agent**: `string`

Defined in: main.ts:174670

custom user agent
optional field
custom user agent for crawling a website
example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36

default value: Mozilla/5.0 (compatible; RSiteAuditor)

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`custom_user_agent`](../interfaces/IOnPageInstantPagesRequestInfo.md#custom_user_agent)

***

### disable\_cookie\_popup?

> `optional` **disable\_cookie\_popup**: `boolean`

Defined in: main.ts:174742

disable the cookie popup 
optional field
set to true if you want to disable the popup requesting cookie consent from the user;
default value:
false

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`disable_cookie_popup`](../interfaces/IOnPageInstantPagesRequestInfo.md#disable_cookie_popup)

***

### enable\_browser\_rendering?

> `optional` **enable\_browser\_rendering**: `boolean`

Defined in: main.ts:174736

emulate browser rendering to measure Core Web Vitals
optional field
by using this parameter you will be able to emulate a browser when loading a web page;
enable_browser_rendering loads styles, images, fonts, animations, videos, and other resources on a page;
default value: false
set to true to obtain Core Web Vitals (FID, CLS, LCP) metrics in the response;
if you use this field, parameters enable_javascript, and load_resources are enabled automatically;
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`enable_browser_rendering`](../interfaces/IOnPageInstantPagesRequestInfo.md#enable_browser_rendering)

***

### enable\_javascript?

> `optional` **enable\_javascript**: `boolean`

Defined in: main.ts:174727

load javascript on a page
optional field
set to true if you want to load the scripts available on a page
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`enable_javascript`](../interfaces/IOnPageInstantPagesRequestInfo.md#enable_javascript)

***

### enable\_xhr?

> `optional` **enable\_xhr**: `boolean`

Defined in: main.ts:174753

enable XMLHttpRequest on a page
optional field
set to true if you want our crawler to request data from a web server using the XMLHttpRequest object
default value:
falseif you use this field, enable_javascript must be set to true;

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`enable_xhr`](../interfaces/IOnPageInstantPagesRequestInfo.md#enable_xhr)

***

### ip\_pool\_for\_scan?

> `optional` **ip\_pool\_for\_scan**: `string`

Defined in: main.ts:174791

proxy pool
optional field
you can choose a location of the proxy pool that will be used to obtain the requested data;
the parameter can be used if page content is inaccessible in one of the locations, resulting in occasional site_unreachable errors
possible values: us, de

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`ip_pool_for_scan`](../interfaces/IOnPageInstantPagesRequestInfo.md#ip_pool_for_scan)

***

### load\_resources?

> `optional` **load\_resources**: `boolean`

Defined in: main.ts:174721

load resources
optional field
set to true if you want to load image, stylesheets, scripts, and broken resources
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`load_resources`](../interfaces/IOnPageInstantPagesRequestInfo.md#load_resources)

***

### return\_despite\_timeout?

> `optional` **return\_despite\_timeout**: `boolean`

Defined in: main.ts:174747

return data on pages despite the timeout error
optional field
if true, the data will be provided on pages that failed to load within 120 seconds and responded with a timeout error;
default value: false

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`return_despite_timeout`](../interfaces/IOnPageInstantPagesRequestInfo.md#return_despite_timeout)

***

### store\_raw\_html?

> `optional` **store\_raw\_html**: `boolean`

Defined in: main.ts:174710

store HTML of a crawled page
optional field
set to true if you want get the HTML of the page using the OnPage Raw HTML endpoint
default value: false

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`store_raw_html`](../interfaces/IOnPageInstantPagesRequestInfo.md#store_raw_html)

***

### switch\_pool?

> `optional` **switch\_pool**: `boolean`

Defined in: main.ts:174785

switch proxy pool
optional field
if true, additional proxy pools will be used to obtain the requested data;
the parameter can be used if a multitude of tasks is set simultaneously, resulting in occasional rate-limit and/or site_unreachable errors

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`switch_pool`](../interfaces/IOnPageInstantPagesRequestInfo.md#switch_pool)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:174663

target page url
required field
absolute URL of the target page;
Note #1: results will be returned for the specified URL only;
Note #2: to prevent denial-of-service events, tasks that contain a duplicate crawl host will be returned with a 40501 error;
to prevent this error from occurring, avoid setting tasks with the same domain if at least one of your previous tasks with this domain (including a page URL on the domain) is still in a crawling queue

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`url`](../interfaces/IOnPageInstantPagesRequestInfo.md#url)

***

### validate\_micromarkup?

> `optional` **validate\_micromarkup**: `boolean`

Defined in: main.ts:174770

enable microdata validation
optional field
if set to true, you can use the OnPage API Microdata endpoint with the id of the task;
default value: false

#### Implementation of

[`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md).[`validate_micromarkup`](../interfaces/IOnPageInstantPagesRequestInfo.md#validate_micromarkup)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:174804

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:174846

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageInstantPagesRequestInfo`](OnPageInstantPagesRequestInfo.md)

Defined in: main.ts:174839

#### Parameters

##### data

`any`

#### Returns

[`OnPageInstantPagesRequestInfo`](OnPageInstantPagesRequestInfo.md)
