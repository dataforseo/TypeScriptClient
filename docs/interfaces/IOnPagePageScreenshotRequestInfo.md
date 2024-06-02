**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IOnPagePageScreenshotRequestInfo

# Interface: IOnPagePageScreenshotRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### accept\_language?

> **`optional`** **accept\_language**: `string`

language header for accessing the website
optional field
all locale formats are supported (xx, xx-XX, xxx-XX, etc.)
note: if you do not specify this parameter, some websites may deny access; in this case, you will obtain "error_message":"Screenshot is empty" in the response array

#### Source

main.ts:158895

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

#### Source

main.ts:158920

***

### browser\_screen\_height?

> **`optional`** **browser\_screen\_height**: `number`

browser screen height
optional field
you can set a custom browser screen height to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
minimum value, in pixels: 240
maximum value, in pixels: 9999

#### Source

main.ts:158934

***

### browser\_screen\_scale\_factor?

> **`optional`** **browser\_screen\_scale\_factor**: `number`

browser screen scale factor
optional field
you can set a custom browser screen resolution ratio to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
minimum value: 0.5
maximum value: 3

#### Source

main.ts:158941

***

### browser\_screen\_width?

> **`optional`** **browser\_screen\_width**: `number`

browser screen width
optional field
you can set a custom browser screen width to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
minimum value, in pixels: 240
maximum value, in pixels: 9999

#### Source

main.ts:158927

***

### custom\_js?

> **`optional`** **custom\_js**: `string`

custom javascript
optional field
Note that the execution time for the script you enter here should be 700 ms maximum
for example, you can use the following JS snippet to check if the website contains Google Tag Manager as a scr attribute:
let meta = \{ haveGoogleAnalytics: false, haveTagManager: false \};\r\nfor (var i = 0; i `< document.scripts.length; i++) \{\r\n  let src = document.scripts[i].getAttribute(\"src\");\r\n  if (src != undefined) \{\r\n    if (src.indexOf(\"analytics.js\") >`= 0)\r\n      meta.haveGoogleAnalytics = true;\r\n\tif (src.indexOf(\"gtm.js\") >= 0)\r\n      meta.haveTagManager = true;\r\n  \}\r\n\}\r\nmeta;
the returned value depends on what you specified in this field. For instance, if you specify the following script:
meta = \{\}; meta.url = document.URL; meta.test = 'test'; meta;
as a response you will receive the following data:
"custom_js_response": \{
  "url": "https://dataforseo.com/",
  "test": "test"
\}
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Source

main.ts:158972

***

### custom\_user\_agent?

> **`optional`** **custom\_user\_agent**: `string`

custom user agent
optional field
custom user agent for crawling a website
example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36

default value: Mozilla/5.0 (compatible; RSiteAuditor)

#### Source

main.ts:158902

***

### disable\_cookie\_popup?

> **`optional`** **disable\_cookie\_popup**: `boolean`

disable the cookie popup 
optional field
set to true if you want to disable the popup requesting cookie consent from the user;
default value:
false

#### Source

main.ts:158952

***

### enable\_javascript?

> **`optional`** **enable\_javascript**: `boolean`

load javascript on a page
optional field
set to true if you want to load the scripts available on a page
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Source

main.ts:158958

***

### full\_page\_screenshot?

> **`optional`** **full\_page\_screenshot**: `boolean`

take a screenshot of the full page
optional field
set to false if you want to capture only the part of the page displayed before scrolling
default value: true

#### Source

main.ts:158946

***

### ip\_pool\_for\_scan?

> **`optional`** **ip\_pool\_for\_scan**: `string`

proxy pool
optional field
you can choose a location of the proxy pool that will be used to obtain the requested data;
the parameter can be used if page content is inaccessible in one of the locations, resulting in occasional site_unreachable errors
possible values: us, de

#### Source

main.ts:158978

***

### url?

> **`optional`** **url**: `string`

page url
required field
absolute URL of the page to snap
note: if the URL you indicate here returns a 404 status code or the indicated value is not a valid URL, you will obtain "error_message":"Screenshot is empty" in the response array

#### Source

main.ts:158890
