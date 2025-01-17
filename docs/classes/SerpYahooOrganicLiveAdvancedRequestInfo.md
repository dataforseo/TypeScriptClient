[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicLiveAdvancedRequestInfo

# Class: SerpYahooOrganicLiveAdvancedRequestInfo

Defined in: main.ts:77346

## Implements

- [`ISerpYahooOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicLiveAdvancedRequestInfo()

> **new SerpYahooOrganicLiveAdvancedRequestInfo**(`data`?): [`SerpYahooOrganicLiveAdvancedRequestInfo`](SerpYahooOrganicLiveAdvancedRequestInfo.md)

Defined in: main.ts:77447

#### Parameters

##### data?

[`ISerpYahooOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md)

#### Returns

[`SerpYahooOrganicLiveAdvancedRequestInfo`](SerpYahooOrganicLiveAdvancedRequestInfo.md)

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:77426

parsing depth
optional field
number of results in SERP
default value: 100
max value: 700
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md).[`depth`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md#depth)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:77403

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:77360

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md).[`keyword`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:77398

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/yahoo/languages
example:
en

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:77391

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/yahoo/languages
example:
English

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:77374

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/yahoo/locations
example:
2840

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:77384

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

[`ISerpYahooOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md).[`location_coordinate`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:77367

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/yahoo/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md#location_name)

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

Defined in: main.ts:77433

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md#max_crawl_pages)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:77410

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md#os)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:77417

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
au.search.yahoo.com, uk.search.yahoo.com, ca.search.yahoo.com, etc.

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md).[`se_domain`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md#se_domain)

***

### search\_param?

> `optional` **search\_param**: `string`

Defined in: main.ts:77437

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md).[`search_param`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md#search_param)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:77443

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md#tag)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:77352

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://search.yahoo.com/search?p=rank+checker&n=100&vl=lang_en&vc=us&ei=UTF-8

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md).[`url`](../interfaces/ISerpYahooOrganicLiveAdvancedRequestInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:77456

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:77486

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicLiveAdvancedRequestInfo`](SerpYahooOrganicLiveAdvancedRequestInfo.md)

Defined in: main.ts:77479

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicLiveAdvancedRequestInfo`](SerpYahooOrganicLiveAdvancedRequestInfo.md)
