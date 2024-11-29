[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleNewsTaskPostRequestInfo

# Class: SerpGoogleNewsTaskPostRequestInfo

## Implements

- [`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsTaskPostRequestInfo()

> **new SerpGoogleNewsTaskPostRequestInfo**(`data`?): [`SerpGoogleNewsTaskPostRequestInfo`](SerpGoogleNewsTaskPostRequestInfo.md)

#### Parameters

##### data?

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md)

#### Returns

[`SerpGoogleNewsTaskPostRequestInfo`](SerpGoogleNewsTaskPostRequestInfo.md)

#### Defined in

main.ts:45359

## Properties

### browser\_screen\_height?

> `optional` **browser\_screen\_height**: `number`

browser screen height
optional field
you can set a custom browser screen height to calculate pixel rankings for a particular device;
by default, the parameter is set to 1080;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`browser_screen_height`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#browser_screen_height)

#### Defined in

main.ts:45288

***

### browser\_screen\_resolution\_ratio?

> `optional` **browser\_screen\_resolution\_ratio**: `number`

browser screen resolution ratio
optional field
you can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;
by default, the parameter is set to 1;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`browser_screen_resolution_ratio`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#browser_screen_resolution_ratio)

#### Defined in

main.ts:45294

***

### browser\_screen\_width?

> `optional` **browser\_screen\_width**: `number`

browser screen width
optional field
you can set a custom browser screen width to calculate pixel rankings for a particular device;
by default, the parameter is set to 1920;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`browser_screen_width`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#browser_screen_width)

#### Defined in

main.ts:45282

***

### calculate\_rectangles?

> `optional` **calculate\_rectangles**: `boolean`

calcualte pixel rankings for SERP elements in advanced results
optional field
pixel ranking refers to the distance between the result snippet and top left corner of the screen;
Visit Help Center to learn more>>
by default, the parameter is set to false
Note: if set to true, the charge per task will be multiplied by 2

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`calculate_rectangles`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#calculate_rectangles)

#### Defined in

main.ts:45276

***

### depth?

> `optional` **depth**: `number`

parsing depth
optional field
number of results in SERP
default value: 100
max value: 700
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`depth`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#depth)

#### Defined in

main.ts:45310

***

### keyword?

> `optional` **keyword**: `string`

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘related:’, ‘site:’, ‘-site:’, the charge per task will be multiplied by 5
Note: queries containing the ‘cache:’ parameter are not supported and will return a validation error
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#keyword)

#### Defined in

main.ts:45211

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#language_code)

#### Defined in

main.ts:45263

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#language_name)

#### Defined in

main.ts:45256

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:45239

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

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

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#location_coordinate)

#### Defined in

main.ts:45249

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:45232

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#max_crawl_pages)

#### Defined in

main.ts:45317

***

### os?

> `optional` **os**: `string`

device operating system
optional field
note that this API provides results for desktop only
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`os`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#os)

#### Defined in

main.ts:45269

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:45355

***

### postback\_data?

> `optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#postback_data)

#### Defined in

main.ts:45344

***

### postback\_url?

> `optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:45338

***

### priority?

> `optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#priority)

#### Defined in

main.ts:45225

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`se_domain`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#se_domain)

#### Defined in

main.ts:45301

***

### search\_param?

> `optional` **search\_param**: `string`

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`search_param`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#search_param)

#### Defined in

main.ts:45321

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:45327

***

### url?

> `optional` **url**: `string`

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS

#### Implementation of

[`ISerpGoogleNewsTaskPostRequestInfo`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md).[`url`](../interfaces/ISerpGoogleNewsTaskPostRequestInfo.md#url)

#### Defined in

main.ts:45217

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:45368

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:45405

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleNewsTaskPostRequestInfo`](SerpGoogleNewsTaskPostRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleNewsTaskPostRequestInfo`](SerpGoogleNewsTaskPostRequestInfo.md)

#### Defined in

main.ts:45398
