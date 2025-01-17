[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleEventsTaskPostRequestInfo

# Class: SerpGoogleEventsTaskPostRequestInfo

Defined in: main.ts:47891

## Implements

- [`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleEventsTaskPostRequestInfo()

> **new SerpGoogleEventsTaskPostRequestInfo**(`data`?): [`SerpGoogleEventsTaskPostRequestInfo`](SerpGoogleEventsTaskPostRequestInfo.md)

Defined in: main.ts:48020

#### Parameters

##### data?

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md)

#### Returns

[`SerpGoogleEventsTaskPostRequestInfo`](SerpGoogleEventsTaskPostRequestInfo.md)

## Properties

### date\_range?

> `optional` **date\_range**: `string`

Defined in: main.ts:47953

date range to get events for
optional field
if you do not use this field, we will return all events
possible values: today, tomorrow, week, weekend, next_week, month, next_month

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`date_range`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#date_range)

***

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:47975

parsing depth
optional field
number of results in SERP
default value: 10
max value: 700
Note: your account will be billed per each SERP containing up to 10 results;
thus, setting a depth above 10 may result in additional charges if the search engine returns more than 10 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`depth`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#depth)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:47899

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:47948

search engine language code
optional field
if you use this field, you don’t need to specify language_name
by default, language settings correspond to one of the local official languages of the specified location
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:47940

full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
by default, language settings correspond to one of the local official languages of the specified location
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:47921

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/events/locations
example:
2840

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:47932

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

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:47914

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/events/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#location_name)

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

Defined in: main.ts:47982

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#max_crawl_pages)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:47959

device operating system
optional field
note that this API provides results for desktop only
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`os`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#os)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:48016

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

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:48005

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:
advanced

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:47999

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

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:47907

task priority
optional field
can take the following values:
1 – normal execution priority (set by default);
2 – high execution priority
You will be additionally charged for the tasks with high execution priority;
The cost can be calculated on the Pricing page

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#priority)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:47966

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`se_domain`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#se_domain)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:47988

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleEventsTaskPostRequestInfo`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpGoogleEventsTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:48029

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:48061

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleEventsTaskPostRequestInfo`](SerpGoogleEventsTaskPostRequestInfo.md)

Defined in: main.ts:48054

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleEventsTaskPostRequestInfo`](SerpGoogleEventsTaskPostRequestInfo.md)
