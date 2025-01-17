[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOnPageContentParsingLiveRequestInfo

# Interface: IOnPageContentParsingLiveRequestInfo

Defined in: main.ts:173994

## Indexable

\[`key`: `string`\]: `any`

## Properties

### accept\_language?

> `optional` **accept\_language**: `string`

Defined in: main.ts:174066

language header for accessing the website
optional field
all locale formats are supported (xx, xx-XX, xxx-XX, etc.)
Note: if you do not specify this parameter, some websites may deny access; in this case, pages will be returned with the "type":"broken in the response array

***

### browser\_preset?

> `optional` **browser\_preset**: `string`

Defined in: main.ts:174026

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

***

### browser\_screen\_height?

> `optional` **browser\_screen\_height**: `number`

Defined in: main.ts:174042

browser screen height
optional field
you can set a custom browser screen height to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true
minimum value, in pixels: 240
maximum value, in pixels: 9999

***

### browser\_screen\_scale\_factor?

> `optional` **browser\_screen\_scale\_factor**: `number`

Defined in: main.ts:174050

browser screen scale factor
optional field
you can set a custom browser screen resolution ratio to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true
minimum value: 0.5
maximum value: 3

***

### browser\_screen\_width?

> `optional` **browser\_screen\_width**: `number`

Defined in: main.ts:174034

browser screen width
optional field
you can set a custom browser screen width to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true
minimum value, in pixels: 240
maximum value, in pixels: 9999

***

### custom\_user\_agent?

> `optional` **custom\_user\_agent**: `string`

Defined in: main.ts:174007

custom user agent
optional field
custom user agent for crawling a website
example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36

default value: Mozilla/5.0 (compatible; RSiteAuditor)

***

### disable\_cookie\_popup?

> `optional` **disable\_cookie\_popup**: `boolean`

Defined in: main.ts:174061

disable the cookie popup 
optional field
set to true if you want to disable the popup requesting cookie consent from the user;
default value:
false

***

### enable\_browser\_rendering?

> `optional` **enable\_browser\_rendering**: `boolean`

Defined in: main.ts:174081

emulate browser rendering to measure Core Web Vitals
optional field
by using this parameter you will be able to emulate a browser when loading a web page;
enable_browser_rendering loads styles, images, fonts, animations, videos, and other resources on a page;
default value: false
set to true to obtain Core Web Vitals (FID, CLS, LCP) metrics in the response;
if you use this field, enable_javascript, and load_resources parameters must be set to true
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

***

### enable\_javascript?

> `optional` **enable\_javascript**: `boolean`

Defined in: main.ts:174072

load javascript on a page
optional field
set to true if you want to load the scripts available on a page
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

***

### enable\_xhr?

> `optional` **enable\_xhr**: `boolean`

Defined in: main.ts:174088

enable XMLHttpRequest on a page
optional field
set to true if you want our crawler to request data from a web server using the XMLHttpRequest object
default value:
false
if you use this field, enable_javascript must be set to true;

***

### ip\_pool\_for\_scan?

> `optional` **ip\_pool\_for\_scan**: `string`

Defined in: main.ts:174099

proxy pool
optional field
you can choose a location of the proxy pool that will be used to obtain the requested data;
the parameter can be used if page content is inaccessible in one of the locations, resulting in occasional site_unreachable errors
possible values: us, de

***

### store\_raw\_html?

> `optional` **store\_raw\_html**: `boolean`

Defined in: main.ts:174055

store HTML of a crawled page
optional field
set to true if you want to get the HTML of the page using the OnPage Raw HTML endpoint
default value: false

***

### switch\_pool?

> `optional` **switch\_pool**: `boolean`

Defined in: main.ts:174093

switch proxy pool
optional field
if true, additional proxy pools will be used to obtain the requested data;
the parameter can be used if a multitude of tasks is set simultaneously, resulting in occasional rate-limit and/or site_unreachable errors

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:174000

URL of the content to parse
required field
URL of the page to parse
example:
https://www.fujielectric.com/
