[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpTaskRequestInfo

# Class: SerpTaskRequestInfo

## Implements

- [`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpTaskRequestInfo.md#constructor)

### Properties

- [browser\_screen\_height](SerpTaskRequestInfo.md#browser_screen_height)
- [browser\_screen\_resolution\_ratio](SerpTaskRequestInfo.md#browser_screen_resolution_ratio)
- [browser\_screen\_width](SerpTaskRequestInfo.md#browser_screen_width)
- [calculate\_rectangles](SerpTaskRequestInfo.md#calculate_rectangles)
- [depth](SerpTaskRequestInfo.md#depth)
- [device](SerpTaskRequestInfo.md#device)
- [group\_organic\_results](SerpTaskRequestInfo.md#group_organic_results)
- [keyword](SerpTaskRequestInfo.md#keyword)
- [language\_code](SerpTaskRequestInfo.md#language_code)
- [language\_name](SerpTaskRequestInfo.md#language_name)
- [location\_code](SerpTaskRequestInfo.md#location_code)
- [location\_coordinate](SerpTaskRequestInfo.md#location_coordinate)
- [location\_name](SerpTaskRequestInfo.md#location_name)
- [max\_crawl\_pages](SerpTaskRequestInfo.md#max_crawl_pages)
- [os](SerpTaskRequestInfo.md#os)
- [people\_also\_ask\_click\_depth](SerpTaskRequestInfo.md#people_also_ask_click_depth)
- [pingback\_url](SerpTaskRequestInfo.md#pingback_url)
- [postback\_data](SerpTaskRequestInfo.md#postback_data)
- [postback\_url](SerpTaskRequestInfo.md#postback_url)
- [priority](SerpTaskRequestInfo.md#priority)
- [se\_domain](SerpTaskRequestInfo.md#se_domain)
- [search\_param](SerpTaskRequestInfo.md#search_param)
- [tag](SerpTaskRequestInfo.md#tag)
- [url](SerpTaskRequestInfo.md#url)

### Methods

- [init](SerpTaskRequestInfo.md#init)
- [toJSON](SerpTaskRequestInfo.md#tojson)
- [fromJS](SerpTaskRequestInfo.md#fromjs)

## Constructors

### constructor

• **new SerpTaskRequestInfo**(`data?`): [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md) |

#### Returns

[`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)

#### Defined in

[main.ts:213159](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213159)

## Properties

### browser\_screen\_height

• `Optional` **browser\_screen\_height**: `number`

browser screen height
optional field
you can set a custom browser screen height to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1080 for desktop;
640 for mobile on android;
812 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[browser_screen_height](../interfaces/ISerpTaskRequestInfo.md#browser_screen_height)

#### Defined in

[main.ts:213103](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213103)

___

### browser\_screen\_resolution\_ratio

• `Optional` **browser\_screen\_resolution\_ratio**: `number`

browser screen resolution ratio
optional field
you can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1 for desktop;
3 for mobile on android;
3 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[browser_screen_resolution_ratio](../interfaces/ISerpTaskRequestInfo.md#browser_screen_resolution_ratio)

#### Defined in

[main.ts:213112](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213112)

___

### browser\_screen\_width

• `Optional` **browser\_screen\_width**: `number`

browser screen width
optional field
you can set a custom browser screen width to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1920 for desktop;
360 for mobile on android;
375 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[browser_screen_width](../interfaces/ISerpTaskRequestInfo.md#browser_screen_width)

#### Defined in

[main.ts:213094](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213094)

___

### calculate\_rectangles

• `Optional` **calculate\_rectangles**: `boolean`

calcualte pixel rankings for SERP elements in advanced results
optional field
pixel ranking refers to the distance between the result snippet and top left corner of the screen;
Visit Help Center to learn more>>
by default, the parameter is set to false
Note: if set to true, the charge per task will be multiplied by 2

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[calculate_rectangles](../interfaces/ISerpTaskRequestInfo.md#calculate_rectangles)

#### Defined in

[main.ts:213085](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213085)

___

### depth

• `Optional` **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 100
max value: 700
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[depth](../interfaces/ISerpTaskRequestInfo.md#depth)

#### Defined in

[main.ts:213008](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213008)

___

### device

• `Optional` **device**: `string`

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[device](../interfaces/ISerpTaskRequestInfo.md#device)

#### Defined in

[main.ts:213065](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213065)

___

### group\_organic\_results

• `Optional` **group\_organic\_results**: `boolean`

display related results
optional field
if set to true, the related_result element in the response will be provided as a snippet of its parent organic result;
if set to false, the related_result element will be provided as a separate organic result;
default value: true

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[group_organic_results](../interfaces/ISerpTaskRequestInfo.md#group_organic_results)

#### Defined in

[main.ts:213078](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213078)

___

### keyword

• `Optional` **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”;
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘site:’, the charge per task will be multiplied by 5
Note: queries containing the ‘cache:’ parameter are not supported and will return a validation error

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[keyword](../interfaces/ISerpTaskRequestInfo.md#keyword)

#### Defined in

[main.ts:212985](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212985)

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[language_code](../interfaces/ISerpTaskRequestInfo.md#language_code)

#### Defined in

[main.ts:213053](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213053)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[language_name](../interfaces/ISerpTaskRequestInfo.md#language_name)

#### Defined in

[main.ts:213046](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213046)

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[location_code](../interfaces/ISerpTaskRequestInfo.md#location_code)

#### Defined in

[main.ts:213029](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213029)

___

### location\_coordinate

• `Optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9 (mm)
the maximum value for “radius”: 199999 (mm)
example:
53.476225,-2.243572,200

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[location_coordinate](../interfaces/ISerpTaskRequestInfo.md#location_coordinate)

#### Defined in

[main.ts:213039](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213039)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[location_name](../interfaces/ISerpTaskRequestInfo.md#location_name)

#### Defined in

[main.ts:213022](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213022)

___

### max\_crawl\_pages

• `Optional` **max\_crawl\_pages**: `number`

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[max_crawl_pages](../interfaces/ISerpTaskRequestInfo.md#max_crawl_pages)

#### Defined in

[main.ts:213015](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213015)

___

### os

• `Optional` **os**: `string`

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[os](../interfaces/ISerpTaskRequestInfo.md#os)

#### Defined in

[main.ts:213072](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213072)

___

### people\_also\_ask\_click\_depth

• `Optional` **people\_also\_ask\_click\_depth**: `number`

clicks on the corresponding element
optional field
specify the click depth on the people_also_ask element to get additional people_also_ask_element items;
Note your account will be billed $0.00015 extra for each click regardless of task priority;
if the element is absent or we perform fewer clicks than you specified, all extra charges will be returned to your account balance
possible values: from 1 to 4

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[people_also_ask_click_depth](../interfaces/ISerpTaskRequestInfo.md#people_also_ask_click_depth)

#### Defined in

[main.ts:213119](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213119)

___

### pingback\_url

• `Optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[pingback_url](../interfaces/ISerpTaskRequestInfo.md#pingback_url)

#### Defined in

[main.ts:213155](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213155)

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
regular, advanced, html

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[postback_data](../interfaces/ISerpTaskRequestInfo.md#postback_data)

#### Defined in

[main.ts:213145](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213145)

___

### postback\_url

• `Optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[postback_url](../interfaces/ISerpTaskRequestInfo.md#postback_url)

#### Defined in

[main.ts:213139](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213139)

___

### priority

• `Optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default);
2 – high execution priority
You will be additionally charged for the tasks with high execution priority;
The cost can be calculated on the Pricing page

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[priority](../interfaces/ISerpTaskRequestInfo.md#priority)

#### Defined in

[main.ts:212999](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212999)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[se_domain](../interfaces/ISerpTaskRequestInfo.md#se_domain)

#### Defined in

[main.ts:213060](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213060)

___

### search\_param

• `Optional` **search\_param**: `string`

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[search_param](../interfaces/ISerpTaskRequestInfo.md#search_param)

#### Defined in

[main.ts:213123](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213123)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[tag](../interfaces/ISerpTaskRequestInfo.md#tag)

#### Defined in

[main.ts:213129](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213129)

___

### url

• `Optional` **url**: `string`

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS

#### Implementation of

[ISerpTaskRequestInfo](../interfaces/ISerpTaskRequestInfo.md).[url](../interfaces/ISerpTaskRequestInfo.md#url)

#### Defined in

[main.ts:212991](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L212991)

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

[main.ts:213168](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213168)

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

[main.ts:213208](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213208)

___

### fromJS

▸ **fromJS**(`data`): [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)

#### Defined in

[main.ts:213201](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213201)
