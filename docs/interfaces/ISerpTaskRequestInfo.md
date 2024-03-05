[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpTaskRequestInfo

# Interface: ISerpTaskRequestInfo

## Implemented by

- [`SerpTaskRequestInfo`](../classes/SerpTaskRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [browser\_screen\_height](ISerpTaskRequestInfo.md#browser_screen_height)
- [browser\_screen\_resolution\_ratio](ISerpTaskRequestInfo.md#browser_screen_resolution_ratio)
- [browser\_screen\_width](ISerpTaskRequestInfo.md#browser_screen_width)
- [calculate\_rectangles](ISerpTaskRequestInfo.md#calculate_rectangles)
- [depth](ISerpTaskRequestInfo.md#depth)
- [device](ISerpTaskRequestInfo.md#device)
- [group\_organic\_results](ISerpTaskRequestInfo.md#group_organic_results)
- [keyword](ISerpTaskRequestInfo.md#keyword)
- [language\_code](ISerpTaskRequestInfo.md#language_code)
- [language\_name](ISerpTaskRequestInfo.md#language_name)
- [location\_code](ISerpTaskRequestInfo.md#location_code)
- [location\_coordinate](ISerpTaskRequestInfo.md#location_coordinate)
- [location\_name](ISerpTaskRequestInfo.md#location_name)
- [max\_crawl\_pages](ISerpTaskRequestInfo.md#max_crawl_pages)
- [os](ISerpTaskRequestInfo.md#os)
- [people\_also\_ask\_click\_depth](ISerpTaskRequestInfo.md#people_also_ask_click_depth)
- [pingback\_url](ISerpTaskRequestInfo.md#pingback_url)
- [postback\_data](ISerpTaskRequestInfo.md#postback_data)
- [postback\_url](ISerpTaskRequestInfo.md#postback_url)
- [priority](ISerpTaskRequestInfo.md#priority)
- [se\_domain](ISerpTaskRequestInfo.md#se_domain)
- [search\_param](ISerpTaskRequestInfo.md#search_param)
- [tag](ISerpTaskRequestInfo.md#tag)
- [url](ISerpTaskRequestInfo.md#url)

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

#### Defined in

[main.ts:213369](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213369)

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

#### Defined in

[main.ts:213378](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213378)

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

#### Defined in

[main.ts:213360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213360)

___

### calculate\_rectangles

• `Optional` **calculate\_rectangles**: `boolean`

calcualte pixel rankings for SERP elements in advanced results
optional field
pixel ranking refers to the distance between the result snippet and top left corner of the screen;
Visit Help Center to learn more>>
by default, the parameter is set to false
Note: if set to true, the charge per task will be multiplied by 2

#### Defined in

[main.ts:213351](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213351)

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

#### Defined in

[main.ts:213274](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213274)

___

### device

• `Optional` **device**: `string`

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Defined in

[main.ts:213331](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213331)

___

### group\_organic\_results

• `Optional` **group\_organic\_results**: `boolean`

display related results
optional field
if set to true, the related_result element in the response will be provided as a snippet of its parent organic result;
if set to false, the related_result element will be provided as a separate organic result;
default value: true

#### Defined in

[main.ts:213344](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213344)

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

#### Defined in

[main.ts:213251](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213251)

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Defined in

[main.ts:213319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213319)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Defined in

[main.ts:213312](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213312)

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Defined in

[main.ts:213295](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213295)

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

#### Defined in

[main.ts:213305](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213305)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Defined in

[main.ts:213288](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213288)

___

### max\_crawl\_pages

• `Optional` **max\_crawl\_pages**: `number`

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Defined in

[main.ts:213281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213281)

___

### os

• `Optional` **os**: `string`

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Defined in

[main.ts:213338](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213338)

___

### people\_also\_ask\_click\_depth

• `Optional` **people\_also\_ask\_click\_depth**: `number`

clicks on the corresponding element
optional field
specify the click depth on the people_also_ask element to get additional people_also_ask_element items;
Note your account will be billed $0.00015 extra for each click regardless of task priority;
if the element is absent or we perform fewer clicks than you specified, all extra charges will be returned to your account balance
possible values: from 1 to 4

#### Defined in

[main.ts:213385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213385)

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

#### Defined in

[main.ts:213421](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213421)

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
regular, advanced, html

#### Defined in

[main.ts:213411](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213411)

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

#### Defined in

[main.ts:213405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213405)

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

#### Defined in

[main.ts:213265](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213265)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Defined in

[main.ts:213326](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213326)

___

### search\_param

• `Optional` **search\_param**: `string`

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Defined in

[main.ts:213389](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213389)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:213395](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213395)

___

### url

• `Optional` **url**: `string`

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS

#### Defined in

[main.ts:213257](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L213257)
