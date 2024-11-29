[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingLocalPackLiveHtmlRequestInfo

# Class: SerpBingLocalPackLiveHtmlRequestInfo

## Implements

- [`ISerpBingLocalPackLiveHtmlRequestInfo`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackLiveHtmlRequestInfo()

> **new SerpBingLocalPackLiveHtmlRequestInfo**(`data`?): [`SerpBingLocalPackLiveHtmlRequestInfo`](SerpBingLocalPackLiveHtmlRequestInfo.md)

#### Parameters

##### data?

[`ISerpBingLocalPackLiveHtmlRequestInfo`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md)

#### Returns

[`SerpBingLocalPackLiveHtmlRequestInfo`](SerpBingLocalPackLiveHtmlRequestInfo.md)

#### Defined in

main.ts:68552

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

[`ISerpBingLocalPackLiveHtmlRequestInfo`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md).[`depth`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md#depth)

#### Defined in

main.ts:68531

***

### device?

> `optional` **device**: `string`

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Implementation of

[`ISerpBingLocalPackLiveHtmlRequestInfo`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md).[`device`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md#device)

#### Defined in

main.ts:68515

***

### keyword?

> `optional` **keyword**: `string`

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘related:’, ‘site:’ the charge per task will be multiplied by 5
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpBingLocalPackLiveHtmlRequestInfo`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md).[`keyword`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md#keyword)

#### Defined in

main.ts:68474

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/bing/languages
example:
en

#### Implementation of

[`ISerpBingLocalPackLiveHtmlRequestInfo`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md).[`language_code`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md#language_code)

#### Defined in

main.ts:68510

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/bing/languages
example:
English

#### Implementation of

[`ISerpBingLocalPackLiveHtmlRequestInfo`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md).[`language_name`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md#language_name)

#### Defined in

main.ts:68503

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/bing/locations
example:
2840

#### Implementation of

[`ISerpBingLocalPackLiveHtmlRequestInfo`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md).[`location_code`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md#location_code)

#### Defined in

main.ts:68488

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
example:
53.476225,-2.243572

#### Implementation of

[`ISerpBingLocalPackLiveHtmlRequestInfo`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md).[`location_coordinate`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md#location_coordinate)

#### Defined in

main.ts:68496

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/bing/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpBingLocalPackLiveHtmlRequestInfo`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md).[`location_name`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md#location_name)

#### Defined in

main.ts:68481

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

[`ISerpBingLocalPackLiveHtmlRequestInfo`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md#max_crawl_pages)

#### Defined in

main.ts:68538

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

[`ISerpBingLocalPackLiveHtmlRequestInfo`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md).[`os`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md#os)

#### Defined in

main.ts:68522

***

### search\_param?

> `optional` **search\_param**: `string`

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Implementation of

[`ISerpBingLocalPackLiveHtmlRequestInfo`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md).[`search_param`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md#search_param)

#### Defined in

main.ts:68542

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpBingLocalPackLiveHtmlRequestInfo`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md).[`tag`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md#tag)

#### Defined in

main.ts:68548

***

### url?

> `optional` **url**: `string`

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.bing.com/search?q=rank%20checker&count=50&first=1&setlang=en&cc=US&safesearch=Moderate&FORM=SEPAGE

#### Implementation of

[`ISerpBingLocalPackLiveHtmlRequestInfo`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md).[`url`](../interfaces/ISerpBingLocalPackLiveHtmlRequestInfo.md#url)

#### Defined in

main.ts:68465

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:68561

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:68590

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocalPackLiveHtmlRequestInfo`](SerpBingLocalPackLiveHtmlRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpBingLocalPackLiveHtmlRequestInfo`](SerpBingLocalPackLiveHtmlRequestInfo.md)

#### Defined in

main.ts:68583
