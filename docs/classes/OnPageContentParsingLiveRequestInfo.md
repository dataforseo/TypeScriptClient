**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageContentParsingLiveRequestInfo

# Class: OnPageContentParsingLiveRequestInfo

## Implements

- [`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageContentParsingLiveRequestInfo(data)

> **new OnPageContentParsingLiveRequestInfo**(`data`?): [`OnPageContentParsingLiveRequestInfo`](OnPageContentParsingLiveRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md)

#### Returns

[`OnPageContentParsingLiveRequestInfo`](OnPageContentParsingLiveRequestInfo.md)

#### Source

main.ts:161712

## Properties

### accept\_language?

> **`optional`** **accept\_language**: `string`

language header for accessing the website
optional field
all locale formats are supported (xx, xx-XX, xxx-XX, etc.)
Note: if you do not specify this parameter, some websites may deny access; in this case, pages will be returned with the "type":"broken in the response array

#### Implementation of

[`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[`accept_language`](../interfaces/IOnPageContentParsingLiveRequestInfo.md#accept_language)

#### Source

main.ts:161675

***

### browser\_preset?

> **`optional`** **browser\_preset**: `string`

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
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true

#### Implementation of

[`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[`browser_preset`](../interfaces/IOnPageContentParsingLiveRequestInfo.md#browser_preset)

#### Source

main.ts:161635

***

### browser\_screen\_height?

> **`optional`** **browser\_screen\_height**: `number`

browser screen height
optional field
you can set a custom browser screen height to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true
minimum value, in pixels: 240
maximum value, in pixels: 9999

#### Implementation of

[`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[`browser_screen_height`](../interfaces/IOnPageContentParsingLiveRequestInfo.md#browser_screen_height)

#### Source

main.ts:161651

***

### browser\_screen\_scale\_factor?

> **`optional`** **browser\_screen\_scale\_factor**: `number`

browser screen scale factor
optional field
you can set a custom browser screen resolution ratio to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true
minimum value: 0.5
maximum value: 3

#### Implementation of

[`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[`browser_screen_scale_factor`](../interfaces/IOnPageContentParsingLiveRequestInfo.md#browser_screen_scale_factor)

#### Source

main.ts:161659

***

### browser\_screen\_width?

> **`optional`** **browser\_screen\_width**: `number`

browser screen width
optional field
you can set a custom browser screen width to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true
minimum value, in pixels: 240
maximum value, in pixels: 9999

#### Implementation of

[`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[`browser_screen_width`](../interfaces/IOnPageContentParsingLiveRequestInfo.md#browser_screen_width)

#### Source

main.ts:161643

***

### custom\_js?

> **`optional`** **custom\_js**: `string`

custom javascript
optional field
Note that the execution time for the script you enter here should be 700 ms maximum, for example, you can use the following JS snippet to check if the website contains Google Tag Manager as a scr attribute:
let meta = \{ haveGoogleAnalytics: false, haveTagManager: false \};\r\nfor (var i = 0; i `< document.scripts.length; i++) \{\r\n let src = document.scripts[i].getAttribute(\"src\");\r\n if (src != undefined) \{\r\n if (src.indexOf(\"analytics.js\") >`= 0)\r\n      meta.haveGoogleAnalytics = true;\r\n\tif (src.indexOf(\"gtm.js\") >= 0)\r\n      meta.haveTagManager = true;\r\n  \}\r\n\}\r\nmeta;the returned value depends on what you specified in this field. For instance, if you specify the following script:
meta = \{\}; meta.url = document.URL; meta.test = 'test'; meta;
as a response you will receive the following data:
"custom_js_response": \{
"url": "https://dataforseo.com/",
"test": "test"
\}
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[`custom_js`](../interfaces/IOnPageContentParsingLiveRequestInfo.md#custom_js)

#### Source

main.ts:161616

***

### custom\_user\_agent?

> **`optional`** **custom\_user\_agent**: `string`

custom user agent
optional field
custom user agent for crawling a website
example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36

default value: Mozilla/5.0 (compatible; RSiteAuditor)

#### Implementation of

[`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[`custom_user_agent`](../interfaces/IOnPageContentParsingLiveRequestInfo.md#custom_user_agent)

#### Source

main.ts:161604

***

### disable\_cookie\_popup?

> **`optional`** **disable\_cookie\_popup**: `boolean`

disable the cookie popup 
optional field
set to true if you want to disable the popup requesting cookie consent from the user;
default value:
false

#### Implementation of

[`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[`disable_cookie_popup`](../interfaces/IOnPageContentParsingLiveRequestInfo.md#disable_cookie_popup)

#### Source

main.ts:161670

***

### enable\_browser\_rendering?

> **`optional`** **enable\_browser\_rendering**: `boolean`

emulate browser rendering to measure Core Web Vitals
optional field
by using this parameter you will be able to emulate a browser when loading a web page;
enable_browser_rendering loads styles, images, fonts, animations, videos, and other resources on a page;
default value: false
set to true to obtain Core Web Vitals (FID, CLS, LCP) metrics in the response;
if you use this field, enable_javascript, and load_resources parameters must be set to true
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[`enable_browser_rendering`](../interfaces/IOnPageContentParsingLiveRequestInfo.md#enable_browser_rendering)

#### Source

main.ts:161690

***

### enable\_javascript?

> **`optional`** **enable\_javascript**: `boolean`

load javascript on a page
optional field
set to true if you want to load the scripts available on a page
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[`enable_javascript`](../interfaces/IOnPageContentParsingLiveRequestInfo.md#enable_javascript)

#### Source

main.ts:161681

***

### enable\_xhr?

> **`optional`** **enable\_xhr**: `boolean`

enable XMLHttpRequest on a page
optional field
set to true if you want our crawler to request data from a web server using the XMLHttpRequest object
default value:
false
if you use this field, enable_javascript must be set to true;

#### Implementation of

[`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[`enable_xhr`](../interfaces/IOnPageContentParsingLiveRequestInfo.md#enable_xhr)

#### Source

main.ts:161697

***

### ip\_pool\_for\_scan?

> **`optional`** **ip\_pool\_for\_scan**: `string`

proxy pool
optional field
you can choose a location of the proxy pool that will be used to obtain the requested data;
the parameter can be used if page content is inaccessible in one of the locations, resulting in occasional site_unreachable errors
possible values: us, de

#### Implementation of

[`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[`ip_pool_for_scan`](../interfaces/IOnPageContentParsingLiveRequestInfo.md#ip_pool_for_scan)

#### Source

main.ts:161708

***

### store\_raw\_html?

> **`optional`** **store\_raw\_html**: `boolean`

store HTML of a crawled page
optional field
set to true if you want to get the HTML of the page using the OnPage Raw HTML endpoint
default value: false

#### Implementation of

[`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[`store_raw_html`](../interfaces/IOnPageContentParsingLiveRequestInfo.md#store_raw_html)

#### Source

main.ts:161664

***

### switch\_pool?

> **`optional`** **switch\_pool**: `boolean`

switch proxy pool
optional field
if true, additional proxy pools will be used to obtain the requested data;
the parameter can be used if a multitude of tasks is set simultaneously, resulting in occasional rate-limit and/or site_unreachable errors

#### Implementation of

[`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[`switch_pool`](../interfaces/IOnPageContentParsingLiveRequestInfo.md#switch_pool)

#### Source

main.ts:161702

***

### url?

> **`optional`** **url**: `string`

URL of the content to parse
required field
URL of the page to parse
example:
https://www.fujielectric.com/

#### Implementation of

[`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[`url`](../interfaces/IOnPageContentParsingLiveRequestInfo.md#url)

#### Source

main.ts:161597

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:161721

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:161752

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageContentParsingLiveRequestInfo`](OnPageContentParsingLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageContentParsingLiveRequestInfo`](OnPageContentParsingLiveRequestInfo.md)

#### Source

main.ts:161745
