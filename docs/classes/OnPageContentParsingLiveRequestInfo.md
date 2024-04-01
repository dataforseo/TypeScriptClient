[Documentation](../README.md) / [Exports](../modules.md) / OnPageContentParsingLiveRequestInfo

# Class: OnPageContentParsingLiveRequestInfo

## Implements

- [`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageContentParsingLiveRequestInfo.md#constructor)

### Properties

- [accept\_language](OnPageContentParsingLiveRequestInfo.md#accept_language)
- [browser\_preset](OnPageContentParsingLiveRequestInfo.md#browser_preset)
- [browser\_screen\_height](OnPageContentParsingLiveRequestInfo.md#browser_screen_height)
- [browser\_screen\_scale\_factor](OnPageContentParsingLiveRequestInfo.md#browser_screen_scale_factor)
- [browser\_screen\_width](OnPageContentParsingLiveRequestInfo.md#browser_screen_width)
- [custom\_user\_agent](OnPageContentParsingLiveRequestInfo.md#custom_user_agent)
- [disable\_cookie\_popup](OnPageContentParsingLiveRequestInfo.md#disable_cookie_popup)
- [enable\_browser\_rendering](OnPageContentParsingLiveRequestInfo.md#enable_browser_rendering)
- [enable\_javascript](OnPageContentParsingLiveRequestInfo.md#enable_javascript)
- [enable\_xhr](OnPageContentParsingLiveRequestInfo.md#enable_xhr)
- [store\_raw\_html](OnPageContentParsingLiveRequestInfo.md#store_raw_html)
- [url](OnPageContentParsingLiveRequestInfo.md#url)

### Methods

- [init](OnPageContentParsingLiveRequestInfo.md#init)
- [toJSON](OnPageContentParsingLiveRequestInfo.md#tojson)
- [fromJS](OnPageContentParsingLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageContentParsingLiveRequestInfo**(`data?`): [`OnPageContentParsingLiveRequestInfo`](OnPageContentParsingLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageContentParsingLiveRequestInfo`](../interfaces/IOnPageContentParsingLiveRequestInfo.md) |

#### Returns

[`OnPageContentParsingLiveRequestInfo`](OnPageContentParsingLiveRequestInfo.md)

#### Defined in

main.ts:158066

## Properties

### accept\_language

• `Optional` **accept\_language**: `string`

language header for accessing the website
optional field
all locale formats are supported (xx, xx-XX, xxx-XX, etc.)
Note: if you do not specify this parameter, some websites may deny access; in this case, pages will be returned with the "type":"broken in the response array

#### Implementation of

[IOnPageContentParsingLiveRequestInfo](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[accept_language](../interfaces/IOnPageContentParsingLiveRequestInfo.md#accept_language)

#### Defined in

main.ts:158040

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
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true

#### Implementation of

[IOnPageContentParsingLiveRequestInfo](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[browser_preset](../interfaces/IOnPageContentParsingLiveRequestInfo.md#browser_preset)

#### Defined in

main.ts:158000

___

### browser\_screen\_height

• `Optional` **browser\_screen\_height**: `number`

browser screen height
optional field
you can set a custom browser screen height to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true
minimum value, in pixels: 240
maximum value, in pixels: 9999

#### Implementation of

[IOnPageContentParsingLiveRequestInfo](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[browser_screen_height](../interfaces/IOnPageContentParsingLiveRequestInfo.md#browser_screen_height)

#### Defined in

main.ts:158016

___

### browser\_screen\_scale\_factor

• `Optional` **browser\_screen\_scale\_factor**: `number`

browser screen scale factor
optional field
you can set a custom browser screen resolution ratio to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true
minimum value: 0.5
maximum value: 3

#### Implementation of

[IOnPageContentParsingLiveRequestInfo](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[browser_screen_scale_factor](../interfaces/IOnPageContentParsingLiveRequestInfo.md#browser_screen_scale_factor)

#### Defined in

main.ts:158024

___

### browser\_screen\_width

• `Optional` **browser\_screen\_width**: `number`

browser screen width
optional field
you can set a custom browser screen width to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true
minimum value, in pixels: 240
maximum value, in pixels: 9999

#### Implementation of

[IOnPageContentParsingLiveRequestInfo](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[browser_screen_width](../interfaces/IOnPageContentParsingLiveRequestInfo.md#browser_screen_width)

#### Defined in

main.ts:158008

___

### custom\_user\_agent

• `Optional` **custom\_user\_agent**: `string`

custom user agent
optional field
custom user agent for crawling a website
example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36

default value: Mozilla/5.0 (compatible; RSiteAuditor)

#### Implementation of

[IOnPageContentParsingLiveRequestInfo](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[custom_user_agent](../interfaces/IOnPageContentParsingLiveRequestInfo.md#custom_user_agent)

#### Defined in

main.ts:157981

___

### disable\_cookie\_popup

• `Optional` **disable\_cookie\_popup**: `boolean`

disable the cookie popup 
optional field
set to true if you want to disable the popup requesting cookie consent from the user;
default value:
false

#### Implementation of

[IOnPageContentParsingLiveRequestInfo](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[disable_cookie_popup](../interfaces/IOnPageContentParsingLiveRequestInfo.md#disable_cookie_popup)

#### Defined in

main.ts:158035

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

[IOnPageContentParsingLiveRequestInfo](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[enable_browser_rendering](../interfaces/IOnPageContentParsingLiveRequestInfo.md#enable_browser_rendering)

#### Defined in

main.ts:158055

___

### enable\_javascript

• `Optional` **enable\_javascript**: `boolean`

load javascript on a page
optional field
set to true if you want to load the scripts available on a page
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page

#### Implementation of

[IOnPageContentParsingLiveRequestInfo](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[enable_javascript](../interfaces/IOnPageContentParsingLiveRequestInfo.md#enable_javascript)

#### Defined in

main.ts:158046

___

### enable\_xhr

• `Optional` **enable\_xhr**: `boolean`

enable XMLHttpRequest on a page
optional field
set to true if you want our crawler to request data from a web server using the XMLHttpRequest object
default value:
false
if you use this field, enable_javascript must be set to true;

#### Implementation of

[IOnPageContentParsingLiveRequestInfo](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[enable_xhr](../interfaces/IOnPageContentParsingLiveRequestInfo.md#enable_xhr)

#### Defined in

main.ts:158062

___

### store\_raw\_html

• `Optional` **store\_raw\_html**: `boolean`

store HTML of a crawled page
optional field
set to true if you want to get the HTML of the page using the OnPage Raw HTML endpoint
default value: false

#### Implementation of

[IOnPageContentParsingLiveRequestInfo](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[store_raw_html](../interfaces/IOnPageContentParsingLiveRequestInfo.md#store_raw_html)

#### Defined in

main.ts:158029

___

### url

• `Optional` **url**: `string`

URL of the content to parse
required field
URL of the page to parse
example:
https://www.fujielectric.com/

#### Implementation of

[IOnPageContentParsingLiveRequestInfo](../interfaces/IOnPageContentParsingLiveRequestInfo.md).[url](../interfaces/IOnPageContentParsingLiveRequestInfo.md#url)

#### Defined in

main.ts:157974

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

main.ts:158075

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

main.ts:158103

___

### fromJS

▸ **fromJS**(`data`): [`OnPageContentParsingLiveRequestInfo`](OnPageContentParsingLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageContentParsingLiveRequestInfo`](OnPageContentParsingLiveRequestInfo.md)

#### Defined in

main.ts:158096
