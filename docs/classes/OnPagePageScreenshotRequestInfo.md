[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPagePageScreenshotRequestInfo

# Class: OnPagePageScreenshotRequestInfo

Defined in: main.ts:172596

## Implements

- [`IOnPagePageScreenshotRequestInfo`](../interfaces/IOnPagePageScreenshotRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPagePageScreenshotRequestInfo()

> **new OnPagePageScreenshotRequestInfo**(`data`?): [`OnPagePageScreenshotRequestInfo`](OnPagePageScreenshotRequestInfo.md)

Defined in: main.ts:172679

#### Parameters

##### data?

[`IOnPagePageScreenshotRequestInfo`](../interfaces/IOnPagePageScreenshotRequestInfo.md)

#### Returns

[`OnPagePageScreenshotRequestInfo`](OnPagePageScreenshotRequestInfo.md)

## Properties

### accept\_language?

> `optional` **accept\_language**: `string`

Defined in: main.ts:172606

language header for accessing the website
optional field
all locale formats are supported (xx, xx-XX, xxx-XX, etc.)
note: if you do not specify this parameter, some websites may deny access; in this case, you will obtain "error_message":"Screenshot is empty" in the response array

#### Implementation of

[`IOnPagePageScreenshotRequestInfo`](../interfaces/IOnPagePageScreenshotRequestInfo.md).[`accept_language`](../interfaces/IOnPagePageScreenshotRequestInfo.md#accept_language)

***

### browser\_preset?

> `optional` **browser\_preset**: `string`

Defined in: main.ts:172632

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
Note: in this endpoint, the enable_browser_rendering, enable_javascript, load_resources, and enable_xhr parameters are always enabled.

#### Implementation of

[`IOnPagePageScreenshotRequestInfo`](../interfaces/IOnPagePageScreenshotRequestInfo.md).[`browser_preset`](../interfaces/IOnPagePageScreenshotRequestInfo.md#browser_preset)

***

### browser\_screen\_height?

> `optional` **browser\_screen\_height**: `number`

Defined in: main.ts:172646

browser screen height
optional field
you can set a custom browser screen height to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
minimum value, in pixels: 240
maximum value, in pixels: 9999

#### Implementation of

[`IOnPagePageScreenshotRequestInfo`](../interfaces/IOnPagePageScreenshotRequestInfo.md).[`browser_screen_height`](../interfaces/IOnPagePageScreenshotRequestInfo.md#browser_screen_height)

***

### browser\_screen\_scale\_factor?

> `optional` **browser\_screen\_scale\_factor**: `number`

Defined in: main.ts:172653

browser screen scale factor
optional field
you can set a custom browser screen resolution ratio to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
minimum value: 0.5
maximum value: 3

#### Implementation of

[`IOnPagePageScreenshotRequestInfo`](../interfaces/IOnPagePageScreenshotRequestInfo.md).[`browser_screen_scale_factor`](../interfaces/IOnPagePageScreenshotRequestInfo.md#browser_screen_scale_factor)

***

### browser\_screen\_width?

> `optional` **browser\_screen\_width**: `number`

Defined in: main.ts:172639

browser screen width
optional field
you can set a custom browser screen width to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
minimum value, in pixels: 240
maximum value, in pixels: 9999

#### Implementation of

[`IOnPagePageScreenshotRequestInfo`](../interfaces/IOnPagePageScreenshotRequestInfo.md).[`browser_screen_width`](../interfaces/IOnPagePageScreenshotRequestInfo.md#browser_screen_width)

***

### custom\_user\_agent?

> `optional` **custom\_user\_agent**: `string`

Defined in: main.ts:172613

custom user agent
optional field
custom user agent for crawling a website
example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36

default value: Mozilla/5.0 (compatible; RSiteAuditor)

#### Implementation of

[`IOnPagePageScreenshotRequestInfo`](../interfaces/IOnPagePageScreenshotRequestInfo.md).[`custom_user_agent`](../interfaces/IOnPagePageScreenshotRequestInfo.md#custom_user_agent)

***

### disable\_cookie\_popup?

> `optional` **disable\_cookie\_popup**: `boolean`

Defined in: main.ts:172664

disable the cookie popup 
optional field
set to true if you want to disable the popup requesting cookie consent from the user;
default value:
false

#### Implementation of

[`IOnPagePageScreenshotRequestInfo`](../interfaces/IOnPagePageScreenshotRequestInfo.md).[`disable_cookie_popup`](../interfaces/IOnPagePageScreenshotRequestInfo.md#disable_cookie_popup)

***

### full\_page\_screenshot?

> `optional` **full\_page\_screenshot**: `boolean`

Defined in: main.ts:172658

take a screenshot of the full page
optional field
set to false if you want to capture only the part of the page displayed before scrolling
default value: true

#### Implementation of

[`IOnPagePageScreenshotRequestInfo`](../interfaces/IOnPagePageScreenshotRequestInfo.md).[`full_page_screenshot`](../interfaces/IOnPagePageScreenshotRequestInfo.md#full_page_screenshot)

***

### ip\_pool\_for\_scan?

> `optional` **ip\_pool\_for\_scan**: `string`

Defined in: main.ts:172675

proxy pool
optional field
you can choose a location of the proxy pool that will be used to obtain the requested data;
the parameter can be used if page content is inaccessible in one of the locations, resulting in occasional site_unreachable errors
possible values: us, de

#### Implementation of

[`IOnPagePageScreenshotRequestInfo`](../interfaces/IOnPagePageScreenshotRequestInfo.md).[`ip_pool_for_scan`](../interfaces/IOnPagePageScreenshotRequestInfo.md#ip_pool_for_scan)

***

### switch\_pool?

> `optional` **switch\_pool**: `boolean`

Defined in: main.ts:172669

switch proxy pool
optional field
if true, additional proxy pools will be used to obtain the requested data;
the parameter can be used if a multitude of tasks is set simultaneously, resulting in occasional rate-limit and/or site_unreachable errors

#### Implementation of

[`IOnPagePageScreenshotRequestInfo`](../interfaces/IOnPagePageScreenshotRequestInfo.md).[`switch_pool`](../interfaces/IOnPagePageScreenshotRequestInfo.md#switch_pool)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:172601

page url
required field
absolute URL of the page to snap
note: if the URL you indicate here returns a 404 status code or the indicated value is not a valid URL, you will obtain "error_message":"Screenshot is empty" in the response array

#### Implementation of

[`IOnPagePageScreenshotRequestInfo`](../interfaces/IOnPagePageScreenshotRequestInfo.md).[`url`](../interfaces/IOnPagePageScreenshotRequestInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:172688

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:172715

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPagePageScreenshotRequestInfo`](OnPagePageScreenshotRequestInfo.md)

Defined in: main.ts:172708

#### Parameters

##### data

`any`

#### Returns

[`OnPagePageScreenshotRequestInfo`](OnPagePageScreenshotRequestInfo.md)
