[Documentation](../README.md) / [Exports](../modules.md) / IOnPagePageScreenshotRequestInfo

# Interface: IOnPagePageScreenshotRequestInfo

## Implemented by

- [`OnPagePageScreenshotRequestInfo`](../classes/OnPagePageScreenshotRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [accept\_language](IOnPagePageScreenshotRequestInfo.md#accept_language)
- [browser\_preset](IOnPagePageScreenshotRequestInfo.md#browser_preset)
- [browser\_screen\_height](IOnPagePageScreenshotRequestInfo.md#browser_screen_height)
- [browser\_screen\_scale\_factor](IOnPagePageScreenshotRequestInfo.md#browser_screen_scale_factor)
- [browser\_screen\_width](IOnPagePageScreenshotRequestInfo.md#browser_screen_width)
- [custom\_js](IOnPagePageScreenshotRequestInfo.md#custom_js)
- [custom\_user\_agent](IOnPagePageScreenshotRequestInfo.md#custom_user_agent)
- [disable\_cookie\_popup](IOnPagePageScreenshotRequestInfo.md#disable_cookie_popup)
- [enable\_javascript](IOnPagePageScreenshotRequestInfo.md#enable_javascript)
- [full\_page\_screenshot](IOnPagePageScreenshotRequestInfo.md#full_page_screenshot)
- [ip\_pool\_for\_scan](IOnPagePageScreenshotRequestInfo.md#ip_pool_for_scan)
- [url](IOnPagePageScreenshotRequestInfo.md#url)

## Properties

### accept\_language

• `Optional` **accept\_language**: `string`

language header for accessing the website
optional field
all locale formats are supported (xx, xx-XX, xxx-XX, etc.)
note: if you do not specify this parameter, some websites may deny access; in this case, you will obtain "error_message":"Screenshot is empty" in the response array

#### Defined in

main.ts:157026

___

### browser\_preset

• `Optional` **browser\_preset**: `string`

preset for browser screen parameters
optional field
if you use this field, you don’t need to indicate browser_screen_width, browser_screen_height, browser_screen_scale_factor
possible values:
desktop, mobile, tablet
desktop preset will apply the following values:
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

#### Defined in

main.ts:157051

___

### browser\_screen\_height

• `Optional` **browser\_screen\_height**: `number`

browser screen height
optional field
you can set a custom browser screen height to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
minimum value, in pixels: 240
maximum value, in pixels: 9999

#### Defined in

main.ts:157065

___

### browser\_screen\_scale\_factor

• `Optional` **browser\_screen\_scale\_factor**: `number`

browser screen scale factor
optional field
you can set a custom browser screen resolution ratio to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
minimum value: 0.5
maximum value: 3

#### Defined in

main.ts:157072

___

### browser\_screen\_width

• `Optional` **browser\_screen\_width**: `number`

browser screen width
optional field
you can set a custom browser screen width to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
minimum value, in pixels: 240
maximum value, in pixels: 9999

#### Defined in

main.ts:157058

___

### custom\_js

• `Optional` **custom\_js**: `string`

custom javascript
optional field
Note that the execution time for the script you enter here should be 700 ms maximum
for example, you can use the following JS snippet to check if the website contains Google Tag Manager as a scr attribute:
let meta = { haveGoogleAnalytics: false, haveTagManager: false };\r\nfor (var i = 0; i < document.scripts.length; i++) {\r\n  let src = document.scripts[i].getAttribute(\"src\");\r\n  if (src != undefined) {\r\n    if (src.indexOf(\"analytics.js\") >= 0)\r\n      meta.haveGoogleAnalytics = true;\r\n\tif (src.indexOf(\"gtm.js\") >= 0)\r\n      meta.haveTagManager = true;\r\n  }\r\n}\r\nmeta;
the returned value depends on what you specified in this field. For instance, if you specify the following script:
meta = {}; meta.url = document.URL; meta.test = 'test'; meta;
as a response you will receive the following data:
"custom_js_response": {
  "url": "https://dataforseo.com/",
  "test": "test"
}
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Defined in

main.ts:157103

___

### custom\_user\_agent

• `Optional` **custom\_user\_agent**: `string`

custom user agent
optional field
custom user agent for crawling a website
example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36

default value: Mozilla/5.0 (compatible; RSiteAuditor)

#### Defined in

main.ts:157033

___

### disable\_cookie\_popup

• `Optional` **disable\_cookie\_popup**: `boolean`

disable the cookie popup 
optional field
set to true if you want to disable the popup requesting cookie consent from the user;
default value:
false

#### Defined in

main.ts:157083

___

### enable\_javascript

• `Optional` **enable\_javascript**: `boolean`

load javascript on a page
optional field
set to true if you want to load the scripts available on a page
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Defined in

main.ts:157089

___

### full\_page\_screenshot

• `Optional` **full\_page\_screenshot**: `boolean`

take a screenshot of the full page
optional field
set to false if you want to capture only the part of the page displayed before scrolling
default value: true

#### Defined in

main.ts:157077

___

### ip\_pool\_for\_scan

• `Optional` **ip\_pool\_for\_scan**: `string`

proxy pool
optional field
you can choose a location of the proxy pool that will be used to obtain the requested data;
the parameter can be used if page content is inaccessible in one of the locations, resulting in occasional site_unreachable errors
possible values: us, de

#### Defined in

main.ts:157109

___

### url

• `Optional` **url**: `string`

page url
required field
absolute URL of the page to snap
note: if the URL you indicate here returns a 404 status code or the indicated value is not a valid URL, you will obtain "error_message":"Screenshot is empty" in the response array

#### Defined in

main.ts:157021
