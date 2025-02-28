[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleEventsLiveAdvancedRequestInfo

# Class: SerpGoogleEventsLiveAdvancedRequestInfo

Defined in: main.ts:49367

## Implements

- [`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleEventsLiveAdvancedRequestInfo()

> **new SerpGoogleEventsLiveAdvancedRequestInfo**(`data`?): [`SerpGoogleEventsLiveAdvancedRequestInfo`](SerpGoogleEventsLiveAdvancedRequestInfo.md)

Defined in: main.ts:49460

#### Parameters

##### data?

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md)

#### Returns

[`SerpGoogleEventsLiveAdvancedRequestInfo`](SerpGoogleEventsLiveAdvancedRequestInfo.md)

## Properties

### date\_range?

> `optional` **date\_range**: `string`

Defined in: main.ts:49421

date range to get events for
optional field
if you do not use this field, we will return all events
possible values: today, tomorrow, week, weekend, next_week, month, next_month

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`date_range`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#date_range)

***

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:49443

parsing depth
optional field
number of results in SERP
default value: 10
max value: 700
Note: your account will be billed per each SERP containing up to 10 results;
thus, setting a depth above 10 may result in additional charges if the search engine returns more than 10 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`depth`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#depth)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:49375

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:49416

search engine language code
optional field
if you use this field, you don’t need to specify language_name
by default, language settings correspond to one of the local official languages of the specified location
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:49408

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
by default, language settings correspond to one of the local official languages of the specified location
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:49389

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/events/locations
example:
2840

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:49400

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
data will be provided for the country the specified coordinates belong to
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9 (mm)
the maximum value for “radius”: 199999 (mm)
example:
53.476225,-2.243572,200

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`location_coordinate`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:49382

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/events/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#location_name)

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

Defined in: main.ts:49450

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#max_crawl_pages)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:49427

device operating system
optional field
note that this API provides results for desktop only
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#os)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:49434

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`se_domain`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#se_domain)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:49456

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleEventsLiveAdvancedRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:49469

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:49497

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleEventsLiveAdvancedRequestInfo`](SerpGoogleEventsLiveAdvancedRequestInfo.md)

Defined in: main.ts:49490

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleEventsLiveAdvancedRequestInfo`](SerpGoogleEventsLiveAdvancedRequestInfo.md)
