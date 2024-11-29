[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicLiveHtmlRequestInfo

# Class: SerpGoogleOrganicLiveHtmlRequestInfo

## Implements

- [`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicLiveHtmlRequestInfo()

> **new SerpGoogleOrganicLiveHtmlRequestInfo**(`data`?): [`SerpGoogleOrganicLiveHtmlRequestInfo`](SerpGoogleOrganicLiveHtmlRequestInfo.md)

#### Parameters

##### data?

[`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md)

#### Returns

[`SerpGoogleOrganicLiveHtmlRequestInfo`](SerpGoogleOrganicLiveHtmlRequestInfo.md)

#### Defined in

main.ts:40110

## Properties

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

[`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md).[`depth`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md#depth)

#### Defined in

main.ts:40076

***

### device?

> `optional` **device**: `string`

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md).[`device`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md#device)

#### Defined in

main.ts:40053

***

### expand\_ai\_overview?

> `optional` **expand\_ai\_overview**: `boolean`

expand ai overview
optional field
set to true to expand the ai_overview item;
default value: false

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md).[`expand_ai_overview`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md#expand_ai_overview)

#### Defined in

main.ts:40100

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

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md#keyword)

#### Defined in

main.ts:40010

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

[`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md#language_code)

#### Defined in

main.ts:40048

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

[`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md#language_name)

#### Defined in

main.ts:40041

***

### load\_async\_ai\_overview?

> `optional` **load\_async\_ai\_overview**: `boolean`

load asynchronous ai overview
optional field
set to true to obtain ai_overview items is SERPs even if they are loaded asynchronically;
if set to false, you will only obtain ai_overview items from cache;
default value: false
Note your account will be billed $0.002 extra for each request;
if the element is absent or contains "asynchronous_ai_overview": false, all extra charges will be returned to your account balance

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md).[`load_async_ai_overview`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md#load_async_ai_overview)

#### Defined in

main.ts:40095

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

[`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md#location_code)

#### Defined in

main.ts:40024

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

[`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md).[`location_coordinate`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md#location_coordinate)

#### Defined in

main.ts:40034

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

[`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md#location_name)

#### Defined in

main.ts:40017

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

[`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md#max_crawl_pages)

#### Defined in

main.ts:40083

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

[`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md).[`os`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md#os)

#### Defined in

main.ts:40060

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

[`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md#se_domain)

#### Defined in

main.ts:40067

***

### search\_param?

> `optional` **search\_param**: `string`

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md).[`search_param`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md#search_param)

#### Defined in

main.ts:40087

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md).[`tag`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md#tag)

#### Defined in

main.ts:40106

***

### url?

> `optional` **url**: `string`

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlRequestInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md).[`url`](../interfaces/ISerpGoogleOrganicLiveHtmlRequestInfo.md#url)

#### Defined in

main.ts:40001

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:40119

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:40151

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicLiveHtmlRequestInfo`](SerpGoogleOrganicLiveHtmlRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleOrganicLiveHtmlRequestInfo`](SerpGoogleOrganicLiveHtmlRequestInfo.md)

#### Defined in

main.ts:40144
