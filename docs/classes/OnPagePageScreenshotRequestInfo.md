[Documentation](../README.md) / [Exports](../modules.md) / OnPagePageScreenshotRequestInfo

# Class: OnPagePageScreenshotRequestInfo

## Implements

- [`IOnPagePageScreenshotRequestInfo`](../interfaces/IOnPagePageScreenshotRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPagePageScreenshotRequestInfo.md#constructor)

### Properties

- [accept\_language](OnPagePageScreenshotRequestInfo.md#accept_language)
- [browser\_preset](OnPagePageScreenshotRequestInfo.md#browser_preset)
- [browser\_screen\_height](OnPagePageScreenshotRequestInfo.md#browser_screen_height)
- [browser\_screen\_scale\_factor](OnPagePageScreenshotRequestInfo.md#browser_screen_scale_factor)
- [browser\_screen\_width](OnPagePageScreenshotRequestInfo.md#browser_screen_width)
- [custom\_js](OnPagePageScreenshotRequestInfo.md#custom_js)
- [custom\_user\_agent](OnPagePageScreenshotRequestInfo.md#custom_user_agent)
- [disable\_cookie\_popup](OnPagePageScreenshotRequestInfo.md#disable_cookie_popup)
- [enable\_javascript](OnPagePageScreenshotRequestInfo.md#enable_javascript)
- [full\_page\_screenshot](OnPagePageScreenshotRequestInfo.md#full_page_screenshot)
- [ip\_pool\_for\_scan](OnPagePageScreenshotRequestInfo.md#ip_pool_for_scan)
- [url](OnPagePageScreenshotRequestInfo.md#url)

### Methods

- [init](OnPagePageScreenshotRequestInfo.md#init)
- [toJSON](OnPagePageScreenshotRequestInfo.md#tojson)
- [fromJS](OnPagePageScreenshotRequestInfo.md#fromjs)

## Constructors

### constructor

• **new OnPagePageScreenshotRequestInfo**(`data?`): [`OnPagePageScreenshotRequestInfo`](OnPagePageScreenshotRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPagePageScreenshotRequestInfo`](../interfaces/IOnPagePageScreenshotRequestInfo.md) |

#### Returns

[`OnPagePageScreenshotRequestInfo`](OnPagePageScreenshotRequestInfo.md)

#### Defined in

main.ts:151674

## Properties

### accept\_language

• `Optional` **accept\_language**: `string`

language header for accessing the website
optional field
all locale formats are supported (xx, xx-XX, xxx-XX, etc.)
note: if you do not specify this parameter, some websites may deny access; in this case, you will obtain "error_message":"Screenshot is empty" in the response array

#### Implementation of

[IOnPagePageScreenshotRequestInfo](../interfaces/IOnPagePageScreenshotRequestInfo.md).[accept_language](../interfaces/IOnPagePageScreenshotRequestInfo.md#accept_language)

#### Defined in

main.ts:151587

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

#### Implementation of

[IOnPagePageScreenshotRequestInfo](../interfaces/IOnPagePageScreenshotRequestInfo.md).[browser_preset](../interfaces/IOnPagePageScreenshotRequestInfo.md#browser_preset)

#### Defined in

main.ts:151612

___

### browser\_screen\_height

• `Optional` **browser\_screen\_height**: `number`

browser screen height
optional field
you can set a custom browser screen height to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
minimum value, in pixels: 240
maximum value, in pixels: 9999

#### Implementation of

[IOnPagePageScreenshotRequestInfo](../interfaces/IOnPagePageScreenshotRequestInfo.md).[browser_screen_height](../interfaces/IOnPagePageScreenshotRequestInfo.md#browser_screen_height)

#### Defined in

main.ts:151626

___

### browser\_screen\_scale\_factor

• `Optional` **browser\_screen\_scale\_factor**: `number`

browser screen scale factor
optional field
you can set a custom browser screen resolution ratio to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
minimum value: 0.5
maximum value: 3

#### Implementation of

[IOnPagePageScreenshotRequestInfo](../interfaces/IOnPagePageScreenshotRequestInfo.md).[browser_screen_scale_factor](../interfaces/IOnPagePageScreenshotRequestInfo.md#browser_screen_scale_factor)

#### Defined in

main.ts:151633

___

### browser\_screen\_width

• `Optional` **browser\_screen\_width**: `number`

browser screen width
optional field
you can set a custom browser screen width to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
minimum value, in pixels: 240
maximum value, in pixels: 9999

#### Implementation of

[IOnPagePageScreenshotRequestInfo](../interfaces/IOnPagePageScreenshotRequestInfo.md).[browser_screen_width](../interfaces/IOnPagePageScreenshotRequestInfo.md#browser_screen_width)

#### Defined in

main.ts:151619

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

#### Implementation of

[IOnPagePageScreenshotRequestInfo](../interfaces/IOnPagePageScreenshotRequestInfo.md).[custom_js](../interfaces/IOnPagePageScreenshotRequestInfo.md#custom_js)

#### Defined in

main.ts:151664

___

### custom\_user\_agent

• `Optional` **custom\_user\_agent**: `string`

custom user agent
optional field
custom user agent for crawling a website
example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36

default value: Mozilla/5.0 (compatible; RSiteAuditor)

#### Implementation of

[IOnPagePageScreenshotRequestInfo](../interfaces/IOnPagePageScreenshotRequestInfo.md).[custom_user_agent](../interfaces/IOnPagePageScreenshotRequestInfo.md#custom_user_agent)

#### Defined in

main.ts:151594

___

### disable\_cookie\_popup

• `Optional` **disable\_cookie\_popup**: `boolean`

disable the cookie popup 
optional field
set to true if you want to disable the popup requesting cookie consent from the user;
default value:
false

#### Implementation of

[IOnPagePageScreenshotRequestInfo](../interfaces/IOnPagePageScreenshotRequestInfo.md).[disable_cookie_popup](../interfaces/IOnPagePageScreenshotRequestInfo.md#disable_cookie_popup)

#### Defined in

main.ts:151644

___

### enable\_javascript

• `Optional` **enable\_javascript**: `boolean`

load javascript on a page
optional field
set to true if you want to load the scripts available on a page
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[IOnPagePageScreenshotRequestInfo](../interfaces/IOnPagePageScreenshotRequestInfo.md).[enable_javascript](../interfaces/IOnPagePageScreenshotRequestInfo.md#enable_javascript)

#### Defined in

main.ts:151650

___

### full\_page\_screenshot

• `Optional` **full\_page\_screenshot**: `boolean`

take a screenshot of the full page
optional field
set to false if you want to capture only the part of the page displayed before scrolling
default value: true

#### Implementation of

[IOnPagePageScreenshotRequestInfo](../interfaces/IOnPagePageScreenshotRequestInfo.md).[full_page_screenshot](../interfaces/IOnPagePageScreenshotRequestInfo.md#full_page_screenshot)

#### Defined in

main.ts:151638

___

### ip\_pool\_for\_scan

• `Optional` **ip\_pool\_for\_scan**: `string`

proxy pool
optional field
you can choose a location of the proxy pool that will be used to obtain the requested data;
the parameter can be used if page content is inaccessible in one of the locations, resulting in occasional site_unreachable errors
possible values: us, de

#### Implementation of

[IOnPagePageScreenshotRequestInfo](../interfaces/IOnPagePageScreenshotRequestInfo.md).[ip_pool_for_scan](../interfaces/IOnPagePageScreenshotRequestInfo.md#ip_pool_for_scan)

#### Defined in

main.ts:151670

___

### url

• `Optional` **url**: `string`

page url
required field
absolute URL of the page to snap
note: if the URL you indicate here returns a 404 status code or the indicated value is not a valid URL, you will obtain "error_message":"Screenshot is empty" in the response array

#### Implementation of

[IOnPagePageScreenshotRequestInfo](../interfaces/IOnPagePageScreenshotRequestInfo.md).[url](../interfaces/IOnPagePageScreenshotRequestInfo.md#url)

#### Defined in

main.ts:151582

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

main.ts:151683

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

main.ts:151711

___

### fromJS

▸ **fromJS**(`data`): [`OnPagePageScreenshotRequestInfo`](OnPagePageScreenshotRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPagePageScreenshotRequestInfo`](OnPagePageScreenshotRequestInfo.md)

#### Defined in

main.ts:151704
