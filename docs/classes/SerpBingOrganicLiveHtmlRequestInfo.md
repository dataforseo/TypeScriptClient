[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicLiveHtmlRequestInfo

# Class: SerpBingOrganicLiveHtmlRequestInfo

Defined in: main.ts:66165

## Implements

- [`ISerpBingOrganicLiveHtmlRequestInfo`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicLiveHtmlRequestInfo()

> **new SerpBingOrganicLiveHtmlRequestInfo**(`data`?): [`SerpBingOrganicLiveHtmlRequestInfo`](SerpBingOrganicLiveHtmlRequestInfo.md)

Defined in: main.ts:66258

#### Parameters

##### data?

[`ISerpBingOrganicLiveHtmlRequestInfo`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md)

#### Returns

[`SerpBingOrganicLiveHtmlRequestInfo`](SerpBingOrganicLiveHtmlRequestInfo.md)

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:66237

parsing depth
optional field
number of results in SERP
default value: 100
max value: 700
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpBingOrganicLiveHtmlRequestInfo`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md).[`depth`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md#depth)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:66221

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Implementation of

[`ISerpBingOrganicLiveHtmlRequestInfo`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md).[`device`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:66180

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘related:’, ‘site:’ the charge per task will be multiplied by 5
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpBingOrganicLiveHtmlRequestInfo`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md).[`keyword`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:66216

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/bing/languages
example:
en

#### Implementation of

[`ISerpBingOrganicLiveHtmlRequestInfo`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md).[`language_code`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:66209

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/bing/languages
example:
English

#### Implementation of

[`ISerpBingOrganicLiveHtmlRequestInfo`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md).[`language_name`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:66194

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/bing/locations
example:
2840

#### Implementation of

[`ISerpBingOrganicLiveHtmlRequestInfo`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md).[`location_code`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:66202

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
example:
53.476225,-2.243572

#### Implementation of

[`ISerpBingOrganicLiveHtmlRequestInfo`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md).[`location_coordinate`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:66187

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/bing/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpBingOrganicLiveHtmlRequestInfo`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md).[`location_name`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md#location_name)

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

Defined in: main.ts:66244

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpBingOrganicLiveHtmlRequestInfo`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md#max_crawl_pages)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:66228

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Implementation of

[`ISerpBingOrganicLiveHtmlRequestInfo`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md).[`os`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md#os)

***

### search\_param?

> `optional` **search\_param**: `string`

Defined in: main.ts:66248

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Implementation of

[`ISerpBingOrganicLiveHtmlRequestInfo`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md).[`search_param`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md#search_param)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:66254

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpBingOrganicLiveHtmlRequestInfo`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md).[`tag`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md#tag)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:66171

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.bing.com/search?q=rank%20checker&count=50&first=1&setlang=en&cc=US&safesearch=Moderate&FORM=SEPAGE

#### Implementation of

[`ISerpBingOrganicLiveHtmlRequestInfo`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md).[`url`](../interfaces/ISerpBingOrganicLiveHtmlRequestInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:66267

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:66296

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicLiveHtmlRequestInfo`](SerpBingOrganicLiveHtmlRequestInfo.md)

Defined in: main.ts:66289

#### Parameters

##### data

`any`

#### Returns

[`SerpBingOrganicLiveHtmlRequestInfo`](SerpBingOrganicLiveHtmlRequestInfo.md)
