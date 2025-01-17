[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpTaskRequestInfo

# Class: SerpTaskRequestInfo

## Implements

- [`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpTaskRequestInfo()

> **new SerpTaskRequestInfo**(`data`?): [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)

#### Parameters

• **data?**: [`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md)

#### Returns

[`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)

#### Defined in

<<<<<<< HEAD
main.ts:224637
=======
main.ts:224670
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

## Properties

### browser\_screen\_height?

> `optional` **browser\_screen\_height**: `number`

browser screen height
optional field
you can set a custom browser screen height to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1080 for desktop;
640 for mobile on android;
812 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`browser_screen_height`](../interfaces/ISerpTaskRequestInfo.md#browser_screen_height)

#### Defined in

<<<<<<< HEAD
main.ts:224567
=======
main.ts:224600
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### browser\_screen\_resolution\_ratio?

> `optional` **browser\_screen\_resolution\_ratio**: `number`

browser screen resolution ratio
optional field
you can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1 for desktop;
3 for mobile on android;
3 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`browser_screen_resolution_ratio`](../interfaces/ISerpTaskRequestInfo.md#browser_screen_resolution_ratio)

#### Defined in

<<<<<<< HEAD
main.ts:224576
=======
main.ts:224609
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### browser\_screen\_width?

> `optional` **browser\_screen\_width**: `number`

browser screen width
optional field
you can set a custom browser screen width to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1920 for desktop;
360 for mobile on android;
375 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`browser_screen_width`](../interfaces/ISerpTaskRequestInfo.md#browser_screen_width)

#### Defined in

<<<<<<< HEAD
main.ts:224558
=======
main.ts:224591
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

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

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`calculate_rectangles`](../interfaces/ISerpTaskRequestInfo.md#calculate_rectangles)

#### Defined in

<<<<<<< HEAD
main.ts:224549
=======
main.ts:224582
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

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

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`depth`](../interfaces/ISerpTaskRequestInfo.md#depth)

#### Defined in

<<<<<<< HEAD
main.ts:224472
=======
main.ts:224505
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### device?

> `optional` **device**: `string`

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Implementation of

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`device`](../interfaces/ISerpTaskRequestInfo.md#device)

#### Defined in

<<<<<<< HEAD
main.ts:224529
=======
main.ts:224562
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### expand\_ai\_overview?

> `optional` **expand\_ai\_overview**: `boolean`

expand ai overview
optional field
set to true to expand the ai_overview item;
default value: false;
Note: this parameter applies only to HTML task results

#### Implementation of

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`expand_ai_overview`](../interfaces/ISerpTaskRequestInfo.md#expand_ai_overview)

#### Defined in

<<<<<<< HEAD
main.ts:224597
=======
main.ts:224630
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### group\_organic\_results?

> `optional` **group\_organic\_results**: `boolean`

display related results
optional field
if set to true, the related_result element in the response will be provided as a snippet of its parent organic result;
if set to false, the related_result element will be provided as a separate organic result;
default value: true

#### Implementation of

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`group_organic_results`](../interfaces/ISerpTaskRequestInfo.md#group_organic_results)

#### Defined in

<<<<<<< HEAD
main.ts:224542
=======
main.ts:224575
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### keyword?

> `optional` **keyword**: `string`

keyword
required field
you can specify up to 700 symbols in the keyword field
all %## will be decoded (plus symbol ‘+’ will be decoded to a space character)
if you need to use the “%” symbol for your keyword, please specify it as “%25”;
if you need to use the “+” symbol for your keyword, please specify it as “%2B”;
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘site:’, the charge per task will be multiplied by 5
Note: queries containing the ‘cache:’ parameter are not supported and will return a validation error

#### Implementation of

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`keyword`](../interfaces/ISerpTaskRequestInfo.md#keyword)

#### Defined in

<<<<<<< HEAD
main.ts:224449
=======
main.ts:224482
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

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

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`language_code`](../interfaces/ISerpTaskRequestInfo.md#language_code)

#### Defined in

<<<<<<< HEAD
main.ts:224517
=======
main.ts:224550
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

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

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`language_name`](../interfaces/ISerpTaskRequestInfo.md#language_name)

#### Defined in

<<<<<<< HEAD
main.ts:224510
=======
main.ts:224543
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### load\_async\_ai\_overview?

> `optional` **load\_async\_ai\_overview**: `boolean`

load asynchronous ai overview
optional field
set to true to obtain ai_overview items is SERPs even if they are loaded asynchronically;
if set to false, you will only obtain ai_overview items from cache;
default value: false
Note your account will be billed $0.0006-$0.0012 extra for each request, depending on the priority;
if the element is absent or contains "asynchronous_ai_overview": false, all extra charges will be returned to your account balance

#### Implementation of

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`load_async_ai_overview`](../interfaces/ISerpTaskRequestInfo.md#load_async_ai_overview)

#### Defined in

<<<<<<< HEAD
main.ts:224591
=======
main.ts:224624
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

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

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`location_code`](../interfaces/ISerpTaskRequestInfo.md#location_code)

#### Defined in

<<<<<<< HEAD
main.ts:224493
=======
main.ts:224526
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

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

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`location_coordinate`](../interfaces/ISerpTaskRequestInfo.md#location_coordinate)

#### Defined in

<<<<<<< HEAD
main.ts:224503
=======
main.ts:224536
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

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

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`location_name`](../interfaces/ISerpTaskRequestInfo.md#location_name)

#### Defined in

<<<<<<< HEAD
main.ts:224486
=======
main.ts:224519
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

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

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpTaskRequestInfo.md#max_crawl_pages)

#### Defined in

<<<<<<< HEAD
main.ts:224479
=======
main.ts:224512
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### os?

> `optional` **os**: `string`

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Implementation of

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`os`](../interfaces/ISerpTaskRequestInfo.md#os)

#### Defined in

<<<<<<< HEAD
main.ts:224536
=======
main.ts:224569
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### people\_also\_ask\_click\_depth?

> `optional` **people\_also\_ask\_click\_depth**: `number`

clicks on the corresponding element
optional field
specify the click depth on the people_also_ask element to get additional people_also_ask_element items;
Note your account will be billed $0.00015 extra for each click regardless of task priority;
if the element is absent or we perform fewer clicks than you specified, all extra charges will be returned to your account balance
possible values: from 1 to 4

#### Implementation of

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`people_also_ask_click_depth`](../interfaces/ISerpTaskRequestInfo.md#people_also_ask_click_depth)

#### Defined in

<<<<<<< HEAD
main.ts:224583
=======
main.ts:224616
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

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
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`pingback_url`](../interfaces/ISerpTaskRequestInfo.md#pingback_url)

#### Defined in

<<<<<<< HEAD
main.ts:224633
=======
main.ts:224666
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### postback\_data?

> `optional` **postback\_data**: `string`

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
regular, advanced, html

#### Implementation of

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`postback_data`](../interfaces/ISerpTaskRequestInfo.md#postback_data)

#### Defined in

<<<<<<< HEAD
main.ts:224623
=======
main.ts:224656
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### postback\_url?

> `optional` **postback\_url**: `string`

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

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`postback_url`](../interfaces/ISerpTaskRequestInfo.md#postback_url)

#### Defined in

<<<<<<< HEAD
main.ts:224617
=======
main.ts:224650
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### priority?

> `optional` **priority**: `number`

task priority
optional field
can take the following values:
1 – normal execution priority (set by default);
2 – high execution priority
You will be additionally charged for the tasks with high execution priority;
The cost can be calculated on the Pricing page

#### Implementation of

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`priority`](../interfaces/ISerpTaskRequestInfo.md#priority)

#### Defined in

<<<<<<< HEAD
main.ts:224463
=======
main.ts:224496
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

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

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`se_domain`](../interfaces/ISerpTaskRequestInfo.md#se_domain)

#### Defined in

<<<<<<< HEAD
main.ts:224524
=======
main.ts:224557
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### search\_param?

> `optional` **search\_param**: `string`

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Implementation of

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`search_param`](../interfaces/ISerpTaskRequestInfo.md#search_param)

#### Defined in

<<<<<<< HEAD
main.ts:224601
=======
main.ts:224634
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`tag`](../interfaces/ISerpTaskRequestInfo.md#tag)

#### Defined in

<<<<<<< HEAD
main.ts:224607
=======
main.ts:224640
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### url?

> `optional` **url**: `string`

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS

#### Implementation of

[`ISerpTaskRequestInfo`](../interfaces/ISerpTaskRequestInfo.md).[`url`](../interfaces/ISerpTaskRequestInfo.md#url)

#### Defined in

<<<<<<< HEAD
main.ts:224455
=======
main.ts:224488
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
main.ts:224646
=======
main.ts:224679
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

<<<<<<< HEAD
main.ts:224688
=======
main.ts:224721
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)

#### Defined in

<<<<<<< HEAD
main.ts:224681
=======
main.ts:224714
>>>>>>> 7636fa90216d2261a48e4bdfb9eddee93fdf72be
