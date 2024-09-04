[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IOnPageInstantPagesRequestInfo

# Interface: IOnPageInstantPagesRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### accept\_language?

> `optional` **accept\_language**: `string`

language header for accessing the website
optional field
all locale formats are supported (xx, xx-XX, xxx-XX, etc.)
Note: if you do not specify this parameter, some websites may deny access; in this case, pages will be returned with the "type":"broken in the response array

#### Defined in

main.ts:162888

***

### browser\_preset?

> `optional` **browser\_preset**: `string`

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

#### Defined in

main.ts:162860

***

### browser\_screen\_height?

> `optional` **browser\_screen\_height**: `number`

browser screen height
optional field
you can set a custom browser screen height to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value, in pixels: 240
maximum value, in pixels: 9999

#### Defined in

main.ts:162872

***

### browser\_screen\_scale\_factor?

> `optional` **browser\_screen\_scale\_factor**: `number`

browser screen scale factor
optional field
you can set a custom browser screen resolution ratio to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value: 0.5
maximum value: 3

#### Defined in

main.ts:162878

***

### browser\_screen\_width?

> `optional` **browser\_screen\_width**: `number`

browser screen width
optional field
you can set a custom browser screen width to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value, in pixels: 240
maximum value, in pixels: 9999

#### Defined in

main.ts:162866

***

### check\_spell?

> `optional` **check\_spell**: `boolean`

check spelling
optional field
set to true to check spelling on a website using Hunspell library
default value: false

#### Defined in

main.ts:162947

***

### checks\_threshold?

> `optional` **checks\_threshold**: `object`

custom threshold values for checks
optional field
you can specify custom threshold values for the parameters included in the checks array of OnPage API responses;
Note: only integer threshold values can be modified;

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:162952

***

### custom\_js?

> `optional` **custom\_js**: `string`

custom javascript
optional fieldNote that the execution time for the script you enter here should be 700 ms maximumfor example, you can use the following JS snippet to check if the website contains Google Tag Manager as a scr attribute:
let meta = { haveGoogleAnalytics: false, haveTagManager: false };\r\nfor (var i = 0; i < document.scripts.length; i++) {\r\n let src = document.scripts[i].getAttribute(\"src\");\r\n if (src != undefined) {\r\n if (src.indexOf(\"analytics.js\") >= 0)\r\n      meta.haveGoogleAnalytics = true;\r\n\tif (src.indexOf(\"gtm.js\") >= 0)\r\n      meta.haveTagManager = true;\r\n  }\r\n}\r\nmeta;the returned value depends on what you specified in this field. For instance, if you specify the following script:
meta = {}; meta.url = document.URL; meta.test = 'test'; meta;
as a response you will receive the following data:
"custom_js_response": {
"url": "https://dataforseo.com/",
"test": "test"
}
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Defined in

main.ts:162937

***

### custom\_user\_agent?

> `optional` **custom\_user\_agent**: `string`

custom user agent
optional field
custom user agent for crawling a website
example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36

default value: Mozilla/5.0 (compatible; RSiteAuditor)

#### Defined in

main.ts:162843

***

### disable\_cookie\_popup?

> `optional` **disable\_cookie\_popup**: `boolean`

disable the cookie popup 
optional field
set to true if you want to disable the popup requesting cookie consent from the user;
default value:
false

#### Defined in

main.ts:162915

***

### enable\_browser\_rendering?

> `optional` **enable\_browser\_rendering**: `boolean`

emulate browser rendering to measure Core Web Vitals
optional field
by using this parameter you will be able to emulate a browser when loading a web page;
enable_browser_rendering loads styles, images, fonts, animations, videos, and other resources on a page;
default value: false
set to true to obtain Core Web Vitals (FID, CLS, LCP) metrics in the response;
if you use this field, parameters enable_javascript, and load_resources are enabled automatically;
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Defined in

main.ts:162909

***

### enable\_javascript?

> `optional` **enable\_javascript**: `boolean`

load javascript on a page
optional field
set to true if you want to load the scripts available on a page
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Defined in

main.ts:162900

***

### enable\_xhr?

> `optional` **enable\_xhr**: `boolean`

enable XMLHttpRequest on a page
optional field
set to true if you want our crawler to request data from a web server using the XMLHttpRequest object
default value:
falseif you use this field, enable_javascript must be set to true;

#### Defined in

main.ts:162926

***

### ip\_pool\_for\_scan?

> `optional` **ip\_pool\_for\_scan**: `string`

proxy pool
optional field
you can choose a location of the proxy pool that will be used to obtain the requested data;
the parameter can be used if page content is inaccessible in one of the locations, resulting in occasional site_unreachable errors
possible values: us, de

#### Defined in

main.ts:162963

***

### load\_resources?

> `optional` **load\_resources**: `boolean`

load resources
optional field
set to true if you want to load image, stylesheets, scripts, and broken resources
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Defined in

main.ts:162894

***

### return\_despite\_timeout?

> `optional` **return\_despite\_timeout**: `boolean`

return data on pages despite the timeout error
optional field
if true, the data will be provided on pages that failed to load within 120 seconds and responded with a timeout error;
default value: false

#### Defined in

main.ts:162920

***

### store\_raw\_html?

> `optional` **store\_raw\_html**: `boolean`

store HTML of a crawled page
optional field
set to true if you want get the HTML of the page using the OnPage Raw HTML endpoint
default value: false

#### Defined in

main.ts:162883

***

### switch\_pool?

> `optional` **switch\_pool**: `boolean`

switch proxy pool
optional field
if true, additional proxy pools will be used to obtain the requested data;
the parameter can be used if a multitude of tasks is set simultaneously, resulting in occasional rate-limit and/or site_unreachable errors

#### Defined in

main.ts:162957

***

### url?

> `optional` **url**: `string`

target page url
required field
absolute URL of the target page;
Note #1: results will be returned for the specified URL only;
Note #2: to prevent denial-of-service events, tasks that contain a duplicate crawl host will be returned with a 40501 error;
to prevent this error from occurring, avoid setting tasks with the same domain if at least one of your previous tasks with this domain (including a page URL on the domain) is still in a crawling queue

#### Defined in

main.ts:162836

***

### validate\_micromarkup?

> `optional` **validate\_micromarkup**: `boolean`

enable microdata validation
optional field
if set to true, you can use the OnPage API Microdata endpoint with the id of the task;
default value: false

#### Defined in

main.ts:162942
