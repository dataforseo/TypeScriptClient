[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageInstantPagesRequestInfo

# Interface: IOnPageInstantPagesRequestInfo

## Implemented by

- [`OnPageInstantPagesRequestInfo`](../classes/OnPageInstantPagesRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [accept\_language](IOnPageInstantPagesRequestInfo.md#accept_language)
- [browser\_preset](IOnPageInstantPagesRequestInfo.md#browser_preset)
- [browser\_screen\_height](IOnPageInstantPagesRequestInfo.md#browser_screen_height)
- [browser\_screen\_scale\_factor](IOnPageInstantPagesRequestInfo.md#browser_screen_scale_factor)
- [browser\_screen\_width](IOnPageInstantPagesRequestInfo.md#browser_screen_width)
- [check\_spell](IOnPageInstantPagesRequestInfo.md#check_spell)
- [checks\_threshold](IOnPageInstantPagesRequestInfo.md#checks_threshold)
- [custom\_js](IOnPageInstantPagesRequestInfo.md#custom_js)
- [custom\_user\_agent](IOnPageInstantPagesRequestInfo.md#custom_user_agent)
- [disable\_cookie\_popup](IOnPageInstantPagesRequestInfo.md#disable_cookie_popup)
- [enable\_browser\_rendering](IOnPageInstantPagesRequestInfo.md#enable_browser_rendering)
- [enable\_javascript](IOnPageInstantPagesRequestInfo.md#enable_javascript)
- [enable\_xhr](IOnPageInstantPagesRequestInfo.md#enable_xhr)
- [return\_despite\_timeout](IOnPageInstantPagesRequestInfo.md#return_despite_timeout)
- [store\_raw\_html](IOnPageInstantPagesRequestInfo.md#store_raw_html)
- [url](IOnPageInstantPagesRequestInfo.md#url)
- [validate\_micromarkup](IOnPageInstantPagesRequestInfo.md#validate_micromarkup)

## Properties

### accept\_language

• `Optional` **accept\_language**: `string`

language header for accessing the website
optional field
all locale formats are supported (xx, xx-XX, xxx-XX, etc.)
Note: if you do not specify this parameter, some websites may deny access; in this case, pages will be returned with the "type":"broken in the response array

#### Defined in

[main.ts:153246](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153246)

___

### browser\_preset

• `Optional` **browser\_preset**: `string`

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

[main.ts:153218](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153218)

___

### browser\_screen\_height

• `Optional` **browser\_screen\_height**: `number`

browser screen height
optional field
you can set a custom browser screen height to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value, in pixels: 240
maximum value, in pixels: 9999

#### Defined in

[main.ts:153230](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153230)

___

### browser\_screen\_scale\_factor

• `Optional` **browser\_screen\_scale\_factor**: `number`

browser screen scale factor
optional field
you can set a custom browser screen resolution ratio to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value: 0.5
maximum value: 3

#### Defined in

[main.ts:153236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153236)

___

### browser\_screen\_width

• `Optional` **browser\_screen\_width**: `number`

browser screen width
optional field
you can set a custom browser screen width to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value, in pixels: 240
maximum value, in pixels: 9999

#### Defined in

[main.ts:153224](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153224)

___

### check\_spell

• `Optional` **check\_spell**: `boolean`

check spelling
optional field
set to true to check spelling on a website using Hunspell library
default value: false

#### Defined in

[main.ts:153299](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153299)

___

### checks\_threshold

• `Optional` **checks\_threshold**: `Object`

custom threshold values for checks
optional field
you can specify custom threshold values for the parameters included in the checks array of OnPage API responses;
Note: only integer threshold values can be modified;

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:153304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153304)

___

### custom\_js

• `Optional` **custom\_js**: `string`

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

[main.ts:153289](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153289)

___

### custom\_user\_agent

• `Optional` **custom\_user\_agent**: `string`

custom user agent
optional field
custom user agent for crawling a website
example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36

default value: Mozilla/5.0 (compatible; RSiteAuditor)

#### Defined in

[main.ts:153201](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153201)

___

### disable\_cookie\_popup

• `Optional` **disable\_cookie\_popup**: `boolean`

disable the cookie popup 
optional field
set to true if you want to disable the popup requesting cookie consent from the user;
default value:
false

#### Defined in

[main.ts:153267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153267)

___

### enable\_browser\_rendering

• `Optional` **enable\_browser\_rendering**: `boolean`

emulate browser rendering to measure Core Web Vitals
optional field
by using this parameter you will be able to emulate a browser when loading a web page;
enable_browser_rendering loads styles, images, fonts, animations, videos, and other resources on a page;
default value: false
set to true to obtain Core Web Vitals (FID, CLS, LCP) metrics in the response;
if you use this field, enable_javascript, and load_resources parameters must be set to true
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Defined in

[main.ts:153261](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153261)

___

### enable\_javascript

• `Optional` **enable\_javascript**: `boolean`

load javascript on a page
optional field
set to true if you want to load the scripts available on a page
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Defined in

[main.ts:153252](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153252)

___

### enable\_xhr

• `Optional` **enable\_xhr**: `boolean`

enable XMLHttpRequest on a page
optional field
set to true if you want our crawler to request data from a web server using the XMLHttpRequest object
default value:
falseif you use this field, enable_javascript must be set to true;

#### Defined in

[main.ts:153278](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153278)

___

### return\_despite\_timeout

• `Optional` **return\_despite\_timeout**: `boolean`

return data on pages despite the timeout error
optional field
if true, the data will be provided on pages that failed to load within 120 seconds and responded with a timeout error;
default value: false

#### Defined in

[main.ts:153272](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153272)

___

### store\_raw\_html

• `Optional` **store\_raw\_html**: `boolean`

store HTML of a crawled page
optional field
set to true if you want get the HTML of the page using the OnPage Raw HTML endpoint
default value: false

#### Defined in

[main.ts:153241](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153241)

___

### url

• `Optional` **url**: `string`

target page url
required field
absolute URL of the target page
Note: results will be returned for the specified URL only
Note: to prevent denial-of-service events, tasks that contain a duplicate crawl host will be returned with a 40501 error;
to prevent this error from occuring, avoid setting tasks with the same domain if at least one of your previous tasks with this domain (including a page URL on the domain) is still in a crawling queue

#### Defined in

[main.ts:153194](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153194)

___

### validate\_micromarkup

• `Optional` **validate\_micromarkup**: `boolean`

enable microdata validation
optional field
if set to true, you can use the OnPage API Microdata endpoint with the id of the task;
default value: false

#### Defined in

[main.ts:153294](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153294)
