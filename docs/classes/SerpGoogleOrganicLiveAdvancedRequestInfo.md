[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicLiveAdvancedRequestInfo

# Class: SerpGoogleOrganicLiveAdvancedRequestInfo

Defined in: main.ts:39319

## Implements

- [`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicLiveAdvancedRequestInfo()

> **new SerpGoogleOrganicLiveAdvancedRequestInfo**(`data`?): [`SerpGoogleOrganicLiveAdvancedRequestInfo`](SerpGoogleOrganicLiveAdvancedRequestInfo.md)

Defined in: main.ts:39491

#### Parameters

##### data?

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md)

#### Returns

[`SerpGoogleOrganicLiveAdvancedRequestInfo`](SerpGoogleOrganicLiveAdvancedRequestInfo.md)

## Properties

### browser\_screen\_height?

> `optional` **browser\_screen\_height**: `number`

Defined in: main.ts:39452

browser screen height
optional field
you can set a custom browser screen height to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1080 for desktop;
640 for mobile on android;
812 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`browser_screen_height`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#browser_screen_height)

***

### browser\_screen\_resolution\_ratio?

> `optional` **browser\_screen\_resolution\_ratio**: `number`

Defined in: main.ts:39462

browser screen resolution ratio
optional field
you can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;
possible values: from 1 to 3;
by default, the parameter is set to:
1 for desktop;
3 for mobile on android;
3 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`browser_screen_resolution_ratio`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#browser_screen_resolution_ratio)

***

### browser\_screen\_width?

> `optional` **browser\_screen\_width**: `number`

Defined in: main.ts:39443

browser screen width
optional field
you can set a custom browser screen width to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1920 for desktop;
360 for mobile on android;
375 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`browser_screen_width`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#browser_screen_width)

***

### calculate\_rectangles?

> `optional` **calculate\_rectangles**: `boolean`

Defined in: main.ts:39434

calcualte pixel rankings for SERP elements in advanced results
optional field
pixel ranking refers to the distance between the result snippet and top left corner of the screen;
Visit Help Center to learn more>>
by default, the parameter is set to false
Note: if set to true, the charge per task will be multiplied by 2

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`calculate_rectangles`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#calculate_rectangles)

***

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:39344

parsing depth
optional field
number of results in SERP
default value: 100
max value: 700
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`depth`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#depth)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:39401

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#device)

***

### group\_organic\_results?

> `optional` **group\_organic\_results**: `boolean`

Defined in: main.ts:39427

display related results
optional field
if set to true, the related_result element in the response will be provided as a snippet of its parent organic result;
if set to false, the related_result element will be provided as a separate organic result;
default value: true

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`group_organic_results`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#group_organic_results)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:39329

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘definition:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘site:’, the charge per task will be multiplied by 5
Note: queries containing the ‘cache:’ parameter are not supported and will return a validation error
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:39389

search engine language code
optional field if you specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:39382

full name of search engine language
optional field if you specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#language_name)

***

### load\_async\_ai\_overview?

> `optional` **load\_async\_ai\_overview**: `boolean`

Defined in: main.ts:39477

load asynchronous ai overview
optional field
set to true to obtain ai_overview items is SERPs even if they are loaded asynchronically;
if set to false, you will only obtain ai_overview items from cache;
default value: false
Note your account will be billed $0.002 extra for each request;
if the element is absent or contains "asynchronous_ai_overview": false, all extra charges will be returned to your account balance

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`load_async_ai_overview`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#load_async_ai_overview)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:39365

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:39375

GPS coordinates of a location
optional field if you specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9 (mm)
the maximum value for “radius”: 199999 (mm)
example:
53.476225,-2.243572,200

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`location_coordinate`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:39358

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#location_name)

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

Defined in: main.ts:39351

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#max_crawl_pages)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:39408

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#os)

***

### people\_also\_ask\_click\_depth?

> `optional` **people\_also\_ask\_click\_depth**: `number`

Defined in: main.ts:39469

clicks on the corresponding element
optional field
specify the click depth on the people_also_ask element to get additional people_also_ask_element items;
Note your account will be billed $0.00015 extra for each click;
if the element is absent or we perform fewer clicks than you specified, all extra charges will be returned to your account balance
possible values: from 1 to 4

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`people_also_ask_click_depth`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#people_also_ask_click_depth)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:39396

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#se_domain)

***

### search\_param?

> `optional` **search\_param**: `string`

Defined in: main.ts:39481

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`search_param`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#search_param)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:39487

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:39421

target domain, subdomain, or webpage to get results for
optional field
a domain or a subdomain should be specified without https:// and www.
note that the results of target-specific tasks will only include SERP elements that contain a url string;
you can also use a wildcard (‘*’) character to specify the search pattern in SERP and narrow down the results;
examples:
example.com  – returns results for the website’s home page with URLs, such as https://example.com, or https://www.example.com/, or https://example.com/;
example.com* – returns results for the domain, including all its pages;
*example.com* – returns results for the entire domain, including all its pages and subdomains;
*example.com  – returns results for the home page regardless of the subdomain, such as https://en.example.com;
example.com/example-page  – returns results for the exact URL;
example.com/example-page*  – returns results for all domain’s URLs that start with the specified string

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`target`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#target)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:39335

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS

#### Implementation of

[`ISerpGoogleOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md).[`url`](../interfaces/ISerpGoogleOrganicLiveAdvancedRequestInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:39500

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:39538

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicLiveAdvancedRequestInfo`](SerpGoogleOrganicLiveAdvancedRequestInfo.md)

Defined in: main.ts:39531

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleOrganicLiveAdvancedRequestInfo`](SerpGoogleOrganicLiveAdvancedRequestInfo.md)
