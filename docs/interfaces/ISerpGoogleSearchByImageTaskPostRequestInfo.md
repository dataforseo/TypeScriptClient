[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleSearchByImageTaskPostRequestInfo

# Interface: ISerpGoogleSearchByImageTaskPostRequestInfo

## Implemented by

- [`SerpGoogleSearchByImageTaskPostRequestInfo`](../classes/SerpGoogleSearchByImageTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [browser\_screen\_height](ISerpGoogleSearchByImageTaskPostRequestInfo.md#browser_screen_height)
- [browser\_screen\_resolution\_ratio](ISerpGoogleSearchByImageTaskPostRequestInfo.md#browser_screen_resolution_ratio)
- [browser\_screen\_width](ISerpGoogleSearchByImageTaskPostRequestInfo.md#browser_screen_width)
- [calculate\_rectangles](ISerpGoogleSearchByImageTaskPostRequestInfo.md#calculate_rectangles)
- [image\_url](ISerpGoogleSearchByImageTaskPostRequestInfo.md#image_url)
- [language\_code](ISerpGoogleSearchByImageTaskPostRequestInfo.md#language_code)
- [language\_name](ISerpGoogleSearchByImageTaskPostRequestInfo.md#language_name)
- [location\_code](ISerpGoogleSearchByImageTaskPostRequestInfo.md#location_code)
- [location\_coordinate](ISerpGoogleSearchByImageTaskPostRequestInfo.md#location_coordinate)
- [location\_name](ISerpGoogleSearchByImageTaskPostRequestInfo.md#location_name)
- [max\_crawl\_pages](ISerpGoogleSearchByImageTaskPostRequestInfo.md#max_crawl_pages)
- [pingback\_url](ISerpGoogleSearchByImageTaskPostRequestInfo.md#pingback_url)
- [postback\_data](ISerpGoogleSearchByImageTaskPostRequestInfo.md#postback_data)
- [postback\_url](ISerpGoogleSearchByImageTaskPostRequestInfo.md#postback_url)
- [priority](ISerpGoogleSearchByImageTaskPostRequestInfo.md#priority)
- [se\_domain](ISerpGoogleSearchByImageTaskPostRequestInfo.md#se_domain)
- [search\_param](ISerpGoogleSearchByImageTaskPostRequestInfo.md#search_param)
- [tag](ISerpGoogleSearchByImageTaskPostRequestInfo.md#tag)

## Properties

### browser\_screen\_height

• `Optional` **browser\_screen\_height**: `number`

browser screen height
optional field
you can set a custom browser screen height to calculate pixel rankings for a particular device;
by default, the parameter is set to 1080;
Note: to use this parameter, set calculate_rectangles to true

#### Defined in

[main.ts:47439](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47439)

___

### browser\_screen\_resolution\_ratio

• `Optional` **browser\_screen\_resolution\_ratio**: `number`

browser screen resolution ratio
optional field
you can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;
by default, the parameter is set to 1;
Note: to use this parameter, set calculate_rectangles to true

#### Defined in

[main.ts:47445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47445)

___

### browser\_screen\_width

• `Optional` **browser\_screen\_width**: `number`

browser screen width
optional field
you can set a custom browser screen width to calculate pixel rankings for a particular device;
by default, the parameter is set to 1920;
Note: to use this parameter, set calculate_rectangles to true

#### Defined in

[main.ts:47433](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47433)

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

[main.ts:47427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47427)

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the image
required field
the results will be based on the image you specified in this field
example:
https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg

#### Defined in

[main.ts:47360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47360)

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

[main.ts:47413](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47413)

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

[main.ts:47406](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47406)

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

[main.ts:47389](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47389)

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

[main.ts:47399](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47399)

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

[main.ts:47382](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47382)

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

[main.ts:47375](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47375)

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

[main.ts:47481](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47481)

___

### postback\_data

• `Optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced

#### Defined in

[main.ts:47471](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47471)

___

### postback\_url

• `Optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Defined in

[main.ts:47465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47465)

___

### priority

• `Optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Defined in

[main.ts:47368](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47368)

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

[main.ts:47420](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47420)

___

### search\_param

• `Optional` **search\_param**: `string`

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Defined in

[main.ts:47449](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47449)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:47455](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47455)
