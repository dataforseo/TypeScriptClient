[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleSearchByImageTaskPostRequestInfo

# Class: SerpGoogleSearchByImageTaskPostRequestInfo

Defined in: main.ts:52524

## Implements

- [`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleSearchByImageTaskPostRequestInfo()

> **new SerpGoogleSearchByImageTaskPostRequestInfo**(`data`?): [`SerpGoogleSearchByImageTaskPostRequestInfo`](SerpGoogleSearchByImageTaskPostRequestInfo.md)

Defined in: main.ts:52657

#### Parameters

##### data?

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md)

#### Returns

[`SerpGoogleSearchByImageTaskPostRequestInfo`](SerpGoogleSearchByImageTaskPostRequestInfo.md)

## Properties

### browser\_screen\_height?

> `optional` **browser\_screen\_height**: `number`

Defined in: main.ts:52609

browser screen height
optional field
you can set a custom browser screen height to calculate pixel rankings for a particular device;
by default, the parameter is set to 1080;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`browser_screen_height`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#browser_screen_height)

***

### browser\_screen\_resolution\_ratio?

> `optional` **browser\_screen\_resolution\_ratio**: `number`

Defined in: main.ts:52615

browser screen resolution ratio
optional field
you can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;
by default, the parameter is set to 1;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`browser_screen_resolution_ratio`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#browser_screen_resolution_ratio)

***

### browser\_screen\_width?

> `optional` **browser\_screen\_width**: `number`

Defined in: main.ts:52603

browser screen width
optional field
you can set a custom browser screen width to calculate pixel rankings for a particular device;
by default, the parameter is set to 1920;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`browser_screen_width`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#browser_screen_width)

***

### calculate\_rectangles?

> `optional` **calculate\_rectangles**: `boolean`

Defined in: main.ts:52597

calcualte pixel rankings for SERP elements in advanced results
optional field
pixel ranking refers to the distance between the result snippet and top left corner of the screen;
Visit Help Center to learn more>>
by default, the parameter is set to false
Note: if set to true, the charge per task will be multiplied by 2

#### Implementation of

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`calculate_rectangles`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#calculate_rectangles)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:52530

URL of the image
required field
the results will be based on the image you specified in this field
example:
https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg

#### Implementation of

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`image_url`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#image_url)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:52583

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:52576

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:52559

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:52569

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

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:52552

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#location_name)

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

Defined in: main.ts:52545

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#max_crawl_pages)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:52653

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

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:52642

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced, html

#### Implementation of

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:52636

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

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:52538

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#priority)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:52590

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`se_domain`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#se_domain)

***

### search\_param?

> `optional` **search\_param**: `string`

Defined in: main.ts:52619

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Implementation of

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`search_param`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#search_param)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:52625

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleSearchByImageTaskPostRequestInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpGoogleSearchByImageTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:52666

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:52700

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleSearchByImageTaskPostRequestInfo`](SerpGoogleSearchByImageTaskPostRequestInfo.md)

Defined in: main.ts:52693

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleSearchByImageTaskPostRequestInfo`](SerpGoogleSearchByImageTaskPostRequestInfo.md)
