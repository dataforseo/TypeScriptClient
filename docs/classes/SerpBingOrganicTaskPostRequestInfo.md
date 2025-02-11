[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicTaskPostRequestInfo

# Class: SerpBingOrganicTaskPostRequestInfo

Defined in: main.ts:63383

## Implements

- [`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicTaskPostRequestInfo()

> **new SerpBingOrganicTaskPostRequestInfo**(`data`?): [`SerpBingOrganicTaskPostRequestInfo`](SerpBingOrganicTaskPostRequestInfo.md)

Defined in: main.ts:63546

#### Parameters

##### data?

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md)

#### Returns

[`SerpBingOrganicTaskPostRequestInfo`](SerpBingOrganicTaskPostRequestInfo.md)

## Properties

### browser\_screen\_height?

> `optional` **browser\_screen\_height**: `number`

Defined in: main.ts:63495

browser screen height
optional field
you can set a custom browser screen height to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1080 for desktop;
640 for mobile on android;
812 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`browser_screen_height`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#browser_screen_height)

***

### browser\_screen\_resolution\_ratio?

> `optional` **browser\_screen\_resolution\_ratio**: `number`

Defined in: main.ts:63504

browser screen resolution ratio
optional field
you can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1 for desktop;
3 for mobile on android;
3 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`browser_screen_resolution_ratio`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#browser_screen_resolution_ratio)

***

### browser\_screen\_width?

> `optional` **browser\_screen\_width**: `number`

Defined in: main.ts:63486

browser screen width
optional field
you can set a custom browser screen width to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1920 for desktop;
360 for mobile on android;
375 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`browser_screen_width`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#browser_screen_width)

***

### calculate\_rectangles?

> `optional` **calculate\_rectangles**: `boolean`

Defined in: main.ts:63477

calcualte pixel rankings for SERP elements in advanced results
optional field
pixel ranking refers to the distance between the result snippet and top left corner of the screen;
Visit Help Center to learn more>>
by default, the parameter is set to false
Note: if set to true, the charge per task will be multiplied by 2

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`calculate_rectangles`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#calculate_rectangles)

***

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:63463

parsing depth
optional field
number of results in SERP
default value: 100
max value: 700
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`depth`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#depth)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:63447

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`device`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:63398

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘related:’, ‘site:’ the charge per task will be multiplied by 5
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`keyword`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:63442

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/bing/languages
example:
en

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:63435

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/bing/languages
example:
English

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:63420

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/bing/locations
example:
2840

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:63428

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
example:
53.476225,-2.243572

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:63413

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/bing/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#location_name)

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

Defined in: main.ts:63470

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#max_crawl_pages)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:63454

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`os`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#os)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:63542

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

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:63531

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
regular, advanced, html

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:63525

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

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:63406

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#priority)

***

### search\_param?

> `optional` **search\_param**: `string`

Defined in: main.ts:63508

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`search_param`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#search_param)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:63514

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#tag)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:63389

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.bing.com/search?q=rank%20checker&count=50&first=1&setlang=en&cc=US&safesearch=Moderate&FORM=SEPAGE

#### Implementation of

[`ISerpBingOrganicTaskPostRequestInfo`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md).[`url`](../interfaces/ISerpBingOrganicTaskPostRequestInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:63555

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:63592

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicTaskPostRequestInfo`](SerpBingOrganicTaskPostRequestInfo.md)

Defined in: main.ts:63585

#### Parameters

##### data

`any`

#### Returns

[`SerpBingOrganicTaskPostRequestInfo`](SerpBingOrganicTaskPostRequestInfo.md)
