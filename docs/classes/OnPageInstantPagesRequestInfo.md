[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageInstantPagesRequestInfo

# Class: OnPageInstantPagesRequestInfo

## Implements

- [`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageInstantPagesRequestInfo.md#constructor)

### Properties

- [accept\_language](OnPageInstantPagesRequestInfo.md#accept_language)
- [browser\_preset](OnPageInstantPagesRequestInfo.md#browser_preset)
- [browser\_screen\_height](OnPageInstantPagesRequestInfo.md#browser_screen_height)
- [browser\_screen\_scale\_factor](OnPageInstantPagesRequestInfo.md#browser_screen_scale_factor)
- [browser\_screen\_width](OnPageInstantPagesRequestInfo.md#browser_screen_width)
- [check\_spell](OnPageInstantPagesRequestInfo.md#check_spell)
- [checks\_threshold](OnPageInstantPagesRequestInfo.md#checks_threshold)
- [custom\_js](OnPageInstantPagesRequestInfo.md#custom_js)
- [custom\_user\_agent](OnPageInstantPagesRequestInfo.md#custom_user_agent)
- [disable\_cookie\_popup](OnPageInstantPagesRequestInfo.md#disable_cookie_popup)
- [enable\_browser\_rendering](OnPageInstantPagesRequestInfo.md#enable_browser_rendering)
- [enable\_javascript](OnPageInstantPagesRequestInfo.md#enable_javascript)
- [enable\_xhr](OnPageInstantPagesRequestInfo.md#enable_xhr)
- [return\_despite\_timeout](OnPageInstantPagesRequestInfo.md#return_despite_timeout)
- [store\_raw\_html](OnPageInstantPagesRequestInfo.md#store_raw_html)
- [url](OnPageInstantPagesRequestInfo.md#url)
- [validate\_micromarkup](OnPageInstantPagesRequestInfo.md#validate_micromarkup)

### Methods

- [init](OnPageInstantPagesRequestInfo.md#init)
- [toJSON](OnPageInstantPagesRequestInfo.md#tojson)
- [fromJS](OnPageInstantPagesRequestInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageInstantPagesRequestInfo**(`data?`): [`OnPageInstantPagesRequestInfo`](OnPageInstantPagesRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageInstantPagesRequestInfo`](../interfaces/IOnPageInstantPagesRequestInfo.md) |

#### Returns

[`OnPageInstantPagesRequestInfo`](OnPageInstantPagesRequestInfo.md)

#### Defined in

[main.ts:153106](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153106)

## Properties

### accept\_language

• `Optional` **accept\_language**: `string`

language header for accessing the website
optional field
all locale formats are supported (xx, xx-XX, xxx-XX, etc.)
Note: if you do not specify this parameter, some websites may deny access; in this case, pages will be returned with the "type":"broken in the response array

#### Implementation of

[IOnPageInstantPagesRequestInfo](../interfaces/IOnPageInstantPagesRequestInfo.md).[accept_language](../interfaces/IOnPageInstantPagesRequestInfo.md#accept_language)

#### Defined in

[main.ts:153044](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153044)

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

#### Implementation of

[IOnPageInstantPagesRequestInfo](../interfaces/IOnPageInstantPagesRequestInfo.md).[browser_preset](../interfaces/IOnPageInstantPagesRequestInfo.md#browser_preset)

#### Defined in

[main.ts:153016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153016)

___

### browser\_screen\_height

• `Optional` **browser\_screen\_height**: `number`

browser screen height
optional field
you can set a custom browser screen height to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value, in pixels: 240
maximum value, in pixels: 9999

#### Implementation of

[IOnPageInstantPagesRequestInfo](../interfaces/IOnPageInstantPagesRequestInfo.md).[browser_screen_height](../interfaces/IOnPageInstantPagesRequestInfo.md#browser_screen_height)

#### Defined in

[main.ts:153028](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153028)

___

### browser\_screen\_scale\_factor

• `Optional` **browser\_screen\_scale\_factor**: `number`

browser screen scale factor
optional field
you can set a custom browser screen resolution ratio to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value: 0.5
maximum value: 3

#### Implementation of

[IOnPageInstantPagesRequestInfo](../interfaces/IOnPageInstantPagesRequestInfo.md).[browser_screen_scale_factor](../interfaces/IOnPageInstantPagesRequestInfo.md#browser_screen_scale_factor)

#### Defined in

[main.ts:153034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153034)

___

### browser\_screen\_width

• `Optional` **browser\_screen\_width**: `number`

browser screen width
optional field
you can set a custom browser screen width to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;Note: to use this parameter, set enable_javascript or enable_browser_rendering to trueminimum value, in pixels: 240
maximum value, in pixels: 9999

#### Implementation of

[IOnPageInstantPagesRequestInfo](../interfaces/IOnPageInstantPagesRequestInfo.md).[browser_screen_width](../interfaces/IOnPageInstantPagesRequestInfo.md#browser_screen_width)

#### Defined in

[main.ts:153022](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153022)

___

### check\_spell

• `Optional` **check\_spell**: `boolean`

check spelling
optional field
set to true to check spelling on a website using Hunspell library
default value: false

#### Implementation of

[IOnPageInstantPagesRequestInfo](../interfaces/IOnPageInstantPagesRequestInfo.md).[check_spell](../interfaces/IOnPageInstantPagesRequestInfo.md#check_spell)

#### Defined in

[main.ts:153097](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153097)

___

### checks\_threshold

• `Optional` **checks\_threshold**: `Object`

custom threshold values for checks
optional field
you can specify custom threshold values for the parameters included in the checks array of OnPage API responses;
Note: only integer threshold values can be modified;

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IOnPageInstantPagesRequestInfo](../interfaces/IOnPageInstantPagesRequestInfo.md).[checks_threshold](../interfaces/IOnPageInstantPagesRequestInfo.md#checks_threshold)

#### Defined in

[main.ts:153102](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153102)

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

#### Implementation of

[IOnPageInstantPagesRequestInfo](../interfaces/IOnPageInstantPagesRequestInfo.md).[custom_js](../interfaces/IOnPageInstantPagesRequestInfo.md#custom_js)

#### Defined in

[main.ts:153087](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153087)

___

### custom\_user\_agent

• `Optional` **custom\_user\_agent**: `string`

custom user agent
optional field
custom user agent for crawling a website
example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36

default value: Mozilla/5.0 (compatible; RSiteAuditor)

#### Implementation of

[IOnPageInstantPagesRequestInfo](../interfaces/IOnPageInstantPagesRequestInfo.md).[custom_user_agent](../interfaces/IOnPageInstantPagesRequestInfo.md#custom_user_agent)

#### Defined in

[main.ts:152999](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152999)

___

### disable\_cookie\_popup

• `Optional` **disable\_cookie\_popup**: `boolean`

disable the cookie popup 
optional field
set to true if you want to disable the popup requesting cookie consent from the user;
default value:
false

#### Implementation of

[IOnPageInstantPagesRequestInfo](../interfaces/IOnPageInstantPagesRequestInfo.md).[disable_cookie_popup](../interfaces/IOnPageInstantPagesRequestInfo.md#disable_cookie_popup)

#### Defined in

[main.ts:153065](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153065)

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

#### Implementation of

[IOnPageInstantPagesRequestInfo](../interfaces/IOnPageInstantPagesRequestInfo.md).[enable_browser_rendering](../interfaces/IOnPageInstantPagesRequestInfo.md#enable_browser_rendering)

#### Defined in

[main.ts:153059](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153059)

___

### enable\_javascript

• `Optional` **enable\_javascript**: `boolean`

load javascript on a page
optional field
set to true if you want to load the scripts available on a page
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[IOnPageInstantPagesRequestInfo](../interfaces/IOnPageInstantPagesRequestInfo.md).[enable_javascript](../interfaces/IOnPageInstantPagesRequestInfo.md#enable_javascript)

#### Defined in

[main.ts:153050](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153050)

___

### enable\_xhr

• `Optional` **enable\_xhr**: `boolean`

enable XMLHttpRequest on a page
optional field
set to true if you want our crawler to request data from a web server using the XMLHttpRequest object
default value:
falseif you use this field, enable_javascript must be set to true;

#### Implementation of

[IOnPageInstantPagesRequestInfo](../interfaces/IOnPageInstantPagesRequestInfo.md).[enable_xhr](../interfaces/IOnPageInstantPagesRequestInfo.md#enable_xhr)

#### Defined in

[main.ts:153076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153076)

___

### return\_despite\_timeout

• `Optional` **return\_despite\_timeout**: `boolean`

return data on pages despite the timeout error
optional field
if true, the data will be provided on pages that failed to load within 120 seconds and responded with a timeout error;
default value: false

#### Implementation of

[IOnPageInstantPagesRequestInfo](../interfaces/IOnPageInstantPagesRequestInfo.md).[return_despite_timeout](../interfaces/IOnPageInstantPagesRequestInfo.md#return_despite_timeout)

#### Defined in

[main.ts:153070](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153070)

___

### store\_raw\_html

• `Optional` **store\_raw\_html**: `boolean`

store HTML of a crawled page
optional field
set to true if you want get the HTML of the page using the OnPage Raw HTML endpoint
default value: false

#### Implementation of

[IOnPageInstantPagesRequestInfo](../interfaces/IOnPageInstantPagesRequestInfo.md).[store_raw_html](../interfaces/IOnPageInstantPagesRequestInfo.md#store_raw_html)

#### Defined in

[main.ts:153039](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153039)

___

### url

• `Optional` **url**: `string`

target page url
required field
absolute URL of the target page
Note: results will be returned for the specified URL only
Note: to prevent denial-of-service events, tasks that contain a duplicate crawl host will be returned with a 40501 error;
to prevent this error from occuring, avoid setting tasks with the same domain if at least one of your previous tasks with this domain (including a page URL on the domain) is still in a crawling queue

#### Implementation of

[IOnPageInstantPagesRequestInfo](../interfaces/IOnPageInstantPagesRequestInfo.md).[url](../interfaces/IOnPageInstantPagesRequestInfo.md#url)

#### Defined in

[main.ts:152992](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152992)

___

### validate\_micromarkup

• `Optional` **validate\_micromarkup**: `boolean`

enable microdata validation
optional field
if set to true, you can use the OnPage API Microdata endpoint with the id of the task;
default value: false

#### Implementation of

[IOnPageInstantPagesRequestInfo](../interfaces/IOnPageInstantPagesRequestInfo.md).[validate_micromarkup](../interfaces/IOnPageInstantPagesRequestInfo.md#validate_micromarkup)

#### Defined in

[main.ts:153092](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153092)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:153115](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153115)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:153154](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153154)

___

### fromJS

▸ **fromJS**(`data`): [`OnPageInstantPagesRequestInfo`](OnPageInstantPagesRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageInstantPagesRequestInfo`](OnPageInstantPagesRequestInfo.md)

#### Defined in

[main.ts:153147](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153147)
